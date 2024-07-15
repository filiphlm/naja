import {Naja, Options, Payload} from '../Naja';
import {onDomReady, TypedEventListener} from '../utils';

export class UIHandler extends EventTarget {
	public selector: string = '.ajax';
	public allowedOrigins: (string | URL)[] = [window.location.origin];
	public eventDelegation: boolean = false;
	private handler = this.handleUI.bind(this);
	private linkSelector: string = '';

	public constructor(private readonly naja: Naja) {
		super();
		naja.addEventListener('init', this.initialize.bind(this));
	}

	private initialize(): void {
		this.linkSelector = `a[href]:not([download])${this.selector}`;

		if (this.eventDelegation) {
			addEventListener('click', this.handler);
			document.addEventListener('submit', this.handler);
		} else {
			onDomReady(() => this.bindUI(window.document.body));
			this.naja.snippetHandler.addEventListener('afterUpdate', (event) => {
				const {snippet} = event.detail;
				this.bindUI(snippet);
			});
		}
	}

	public bindUI(element: Element): void {
		if (this.eventDelegation) {
			console.warn('Naja: UIHandler.bindUI has no effect with `eventDelegation=true`.');
			return;
		}

		const bindElement = (element: HTMLAnchorElement) => {
			element.removeEventListener('click', this.handler);
			element.addEventListener('click', this.handler);
		};

		if (element.matches(this.linkSelector)) {
			return bindElement(element as HTMLAnchorElement);
		}

		const elements = element.querySelectorAll(this.linkSelector);
		elements.forEach((element) => bindElement(element as HTMLAnchorElement));

		const bindForm = (form: HTMLFormElement) => {
			form.removeEventListener('submit', this.handler);
			form.addEventListener('submit', this.handler);
		};

		if (element instanceof HTMLFormElement) {
			return bindForm(element);
		}

		const forms = element.querySelectorAll('form');
		forms.forEach((form) => bindForm(form));
	}

	private handleUI(event: MouseEvent | SubmitEvent): void {
		const element = (this.eventDelegation ? event.target : event.currentTarget) as HTMLElement;
		const options = this.naja.prepareOptions();

		const ignoreErrors = () => {
			// don't reject the promise in case of an error as developers have no way of handling the rejection
			// in this situation; errors should be handled in `naja.addEventListener('error', errorHandler)`
		};

		if (event instanceof MouseEvent) {
			if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey || event.button) {
				return;
			}
			const link = this.eventDelegation ? element.closest(this.linkSelector) : element;
			if (link) {
				this.clickElement(link as HTMLAnchorElement, options, event).catch(ignoreErrors);
			}
			return;
		}

		const {submitter} = event;
		if (this.selector === '' || element.matches(this.selector) || submitter?.matches(this.selector)) {
			this.submitForm(submitter ?? element, options, event).catch(ignoreErrors);
		}
	}

	public async clickElement(element: HTMLElement, options: Options = {}, event?: MouseEvent): Promise<Payload> {
		if (element instanceof HTMLAnchorElement) {
			return this.processInteraction(element, 'GET', element.href, null, options, event);
		}

		if ((element instanceof HTMLInputElement || element instanceof HTMLButtonElement) && element.form) {
			return this.submitForm(element, options, event);
		}

		throw new Error('Unsupported element in clickElement(): element must be an anchor or a submitter element attached to a form.');
	}

	public async submitForm(formOrSubmitter: HTMLFormElement | HTMLElement, options: Options = {}, event?: Event): Promise<Payload> {
		let form: HTMLFormElement;
		let submitter: HTMLElement | null = null;

		if ((formOrSubmitter instanceof HTMLInputElement || formOrSubmitter instanceof HTMLButtonElement) && formOrSubmitter.form) {
			// eslint-disable-next-line prefer-destructuring
			form = formOrSubmitter.form;
			submitter = formOrSubmitter;

		} else if (formOrSubmitter instanceof HTMLFormElement) {
			form = formOrSubmitter;
			submitter = event instanceof SubmitEvent ? event.submitter : null;

		} else {
			throw new Error('Unsupported element in submitForm(): formOrSubmitter must be either a form or a submitter element attached to a form.');
		}

		const method = (submitter?.getAttribute('formmethod') ?? form.getAttribute('method') ?? 'GET').toUpperCase();
		const url = submitter?.getAttribute('formaction') ?? form.getAttribute('action') ?? window.location.pathname + window.location.search;
		const data = new FormData(form, submitter);

		return this.processInteraction(submitter ?? form, method, url, data, options, event);
	}

	public async processInteraction(
		element: HTMLElement,
		method: string,
		url: string | URL,
		data: any | null = null,
		options: Options = {},
		event?: Event,
	): Promise<Payload> {
		if ( ! this.dispatchEvent(new CustomEvent('interaction', {cancelable: true, detail: {element, originalEvent: event, options}}))) {
			event?.preventDefault();
			return {};
		}

		if ( ! this.isUrlAllowed(`${url}`)) {
			throw new Error(`Cannot dispatch async request, URL is not allowed: ${url}`);
		}

		event?.preventDefault();
		return this.naja.makeRequest(method, url, data, options);
	}

	public isUrlAllowed(url: string): boolean {
		const urlObject = new URL(url, location.href);

		// ignore non-URL URIs (javascript:, data:, mailto:, ...)
		if (urlObject.origin === 'null') {
			return false;
		}

		return this.allowedOrigins.includes(urlObject.origin);
	}

	declare public addEventListener: <K extends keyof UIHandlerEventMap | string>(type: K, listener: TypedEventListener<UIHandler, K extends keyof UIHandlerEventMap ? UIHandlerEventMap[K] : CustomEvent>, options?: boolean | AddEventListenerOptions) => void;
	declare public removeEventListener: <K extends keyof UIHandlerEventMap | string>(type: K, listener: TypedEventListener<UIHandler, K extends keyof UIHandlerEventMap ? UIHandlerEventMap[K] : CustomEvent>, options?: boolean | AddEventListenerOptions) => void;
}

export type InteractionEvent = CustomEvent<{element: Element, originalEvent?: Event, options: Options}>;

interface UIHandlerEventMap {
	interaction: InteractionEvent;
}
