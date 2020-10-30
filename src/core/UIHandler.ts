import {Naja, Options} from '../Naja';
import {assert, TypedEventListener} from '../utils';

export class UIHandler extends EventTarget {
	public selector: string = '.ajax';
	public allowedOrigins: (string | URL)[] = [window.location.origin];
	private handler = this.handleUI.bind(this);

	public constructor(private readonly naja: Naja) {
		super();
		naja.addEventListener('init', this.initialize.bind(this));
	}

	private initialize(): void {
		this.bindUI(window.document.body);
		this.naja.snippetHandler.addEventListener('afterUpdate', (event) => {
			const {snippet} = event.detail;
			this.bindUI(snippet);
		});
	}

	public bindUI(element: Element): void {
		const selectors = [
			`a${this.selector}`,
			`input[type="submit"]${this.selector}`,
			`input[type="image"]${this.selector}`,
			`button[type="submit"]${this.selector}`,
			`form${this.selector} input[type="submit"]`,
			`form${this.selector} input[type="image"]`,
			`form${this.selector} button[type="submit"]`,
		].join(', ');

		const bindElement = (element: Element) => {
			element.removeEventListener('click', this.handler);
			element.addEventListener('click', this.handler);
		};

		const elements = element.querySelectorAll(selectors);
		for (let i = 0; i < elements.length; i++) {
			bindElement(elements.item(i));
		}

		if (element.matches(selectors)) {
			bindElement(element);
		}

		const bindForm = (form: HTMLFormElement) => {
			form.removeEventListener('submit', this.handler);
			form.addEventListener('submit', this.handler);
		};

		if (element.matches(`form${this.selector}`)) {
			bindForm(element as HTMLFormElement);
		}

		const forms = element.querySelectorAll(`form${this.selector}`);
		for (let i = 0; i < forms.length; i++) {
			bindForm(forms.item(i) as HTMLFormElement);
		}
	}

	private handleUI(event: Event | MouseEvent): void {
		const mouseEvent = event as MouseEvent;
		if (mouseEvent.altKey || mouseEvent.ctrlKey || mouseEvent.shiftKey || mouseEvent.metaKey || mouseEvent.button) {
			return;
		}

		const element = event.currentTarget;
		const options: Options = {};

		if (event.type === 'submit') {
			this.submitForm(element as HTMLFormElement, options, event);

		} else if (event.type === 'click') {
			this.clickElement(element as HTMLElement, options, mouseEvent);
		}
	}

	public clickElement(element: HTMLElement, options: Options = {}, event?: MouseEvent): void {
		let method: string = 'GET', url: string = '', data: any;

		if ( ! this.dispatchEvent(new CustomEvent('interaction', {cancelable: true, detail: {element, originalEvent: event, options}}))) {
			if (event) {
				event.preventDefault();
			}

			return;
		}

		if (element.tagName === 'A') {
			assert(element instanceof HTMLAnchorElement);

			method = 'GET';
			url = element.href;
			data = null;

		} else if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
			assert(element instanceof HTMLInputElement);

			const {form} = element;
			// eslint-disable-next-line no-nested-ternary,no-extra-parens
			method = element.getAttribute('formmethod')?.toUpperCase() ?? form?.getAttribute('method')?.toUpperCase() ?? 'GET';
			url = element.getAttribute('formaction') ?? form?.getAttribute('action') ?? window.location.pathname + window.location.search;
			data = new FormData(form ?? undefined);

			if (element.type === 'submit' || element.tagName === 'BUTTON') {
				data.append(element.name, element.value || '');

			} else if (element.type === 'image') {
				const coords = element.getBoundingClientRect();
				data.append(`${element.name}.x`, Math.max(0, Math.floor(event !== undefined ? event.pageX - coords.left : 0)));
				data.append(`${element.name}.y`, Math.max(0, Math.floor(event !== undefined ? event.pageY - coords.top : 0)));
			}
		}

		if (this.isUrlAllowed(url)) {
			if (event) {
				event.preventDefault();
			}

			this.naja.makeRequest(method, url, data, options);
		}
	}

	public submitForm(form: HTMLFormElement, options: Options = {}, event?: Event): void {
		if ( ! this.dispatchEvent(new CustomEvent('interaction', {cancelable: true, detail: {element: form, originalEvent: event, options}}))) {
			if (event) {
				event.preventDefault();
			}

			return;
		}

		const method = form.getAttribute('method')?.toUpperCase() ?? 'GET';
		const url = form.getAttribute('action') ?? window.location.pathname + window.location.search;
		const data = new FormData(form);

		if (this.isUrlAllowed(url)) {
			if (event) {
				event.preventDefault();
			}

			this.naja.makeRequest(method, url, data, options);
		}
	}

	public isUrlAllowed(url: string): boolean {
		// ignore non-URL URIs (javascript:, data:, ...)
		if (/^(?!https?)[^:/?#]+:/i.test(url)) {
			return false;
		}

		return ! /^https?/i.test(url) || this.allowedOrigins.some((origin) => new RegExp(`^${origin}`, 'i').test(url));
	}

	declare public addEventListener: (type: 'interaction', listener: TypedEventListener<UIHandler, InteractionEvent>, options?: boolean | AddEventListenerOptions) => void;
	declare public removeEventListener: (type: 'interaction', listener: TypedEventListener<UIHandler, InteractionEvent>, options?: boolean | AddEventListenerOptions) => void;
}

export type InteractionEvent = CustomEvent<{element: Element, originalEvent?: Event, options: Options}>;