/*!
 * Naja.ja
 * v1.0.0-alpha.3
 * 
 * by Jiří Pudil <https://jiripudil.cz>
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.naja=t():e.naja=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=24)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t){r(this,e),this.naja=t};t.default=o},function(e,t,n){"use strict";var r=e.exports.createUniqueKey="undefined"!=typeof Symbol?Symbol:function(e){return"[["+e+"_"+Math.random().toFixed(8).slice(2)+"]]"},o=e.exports.isObject=function(e){return"object"==typeof e&&null!==e};e.exports.LISTENERS=r("listeners"),e.exports.CAPTURE=1,e.exports.BUBBLE=2,e.exports.ATTRIBUTE=3,e.exports.newNode=function(e,t,n){var r=o(n);return{listener:e,kind:t,once:r&&Boolean(n.once),passive:r&&Boolean(n.passive),next:null}}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&d&&(y=!1,d.length?h=d.concat(h):b=-1,h.length&&u())}function u(){if(!y){var e=o(a);y=!0;for(var t=h.length;t;){for(d=h,h=[];++b<t;)d&&d[b].run();b=-1,t=h.length}d=null,y=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,h=[],y=!1,b=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||y||o(u)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),i=r(o),a=n(11),u=r(a),s=n(12),c=r(s),l=new i.default;l.registerExtension(u.default),l.registerExtension(c.default),t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(19),f=r(l),p=n(17),d=r(p),h=n(14),y=r(h),b=n(10),v=r(b),m=n(5),w=r(m),g=n(7),T=r(g),j=n(9),E=r(j),O=n(6),x=r(O),_=n(8),P=r(_),k=function(e){function t(){var e,n,r,o;i(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.initialized=!1,r.uiHandler=null,r.redirectHandler=null,r.snippetHandler=null,r.formsHandler=null,r.historyHandler=null,r.scriptLoader=null,r.extensions=[],o=n,a(r,o)}return u(t,e),c(t,[{key:"registerExtension",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.extensions.push([e,n])}},{key:"initialize",value:function(){var e=this;if(this.initialized)throw new Error("Cannot initialize Naja, it is already initialized.");this.uiHandler=new v.default(this),this.redirectHandler=new T.default(this),this.snippetHandler=new E.default(this),this.formsHandler=new w.default(this),this.historyHandler=new x.default(this),this.scriptLoader=new P.default(this),this.extensions=this.extensions.map(function(t){var n=s(t,2),r=n[0],i=n[1];return new(Function.prototype.bind.apply(r,[null].concat([e],o(i))))}),this.fireEvent("init"),this.initialized=!0,this.load()}},{key:"load",value:function(){this.fireEvent("load")}},{key:"fireEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.assign(t,{type:e,cancelable:!0});return this.dispatchEvent(n)}},{key:"makeRequest",value:function(e,t,n,r){var o=this,i={dataType:"post",responseType:"auto"};r=(0,d.default)({},i,r||{});var a=void 0,u=function(i){a=i,i.addEventListener("abort",function(){var e=new Error("Request aborted.");o.fireEvent("error",{error:e,xhr:i,response:null}),o.fireEvent("complete",{error:e,xhr:i,response:null})}),o.fireEvent("before",{xhr:i,method:e,url:t,data:n,options:r})},s=f.default.map(e,t,n,r,u).then(function(e,t){o.fireEvent("success",{xhr:e,response:t}),o.fireEvent("complete",{error:null,xhr:e,response:t}),o.load()}).catch(function(e,t,n){o.fireEvent("error",{error:e,xhr:t,response:n}),o.fireEvent("complete",{error:e,xhr:t,response:n}),o.load()});return this.fireEvent("start",{request:s,xhr:a}),s}}]),t}(y.default);t.default=k},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e.addEventListener("load",t.initForms),e.addEventListener("interaction",t.processForm),n}return a(t,e),u(t,null,[{key:"initForms",value:function(){if(window.Nette)for(var e=window.document.querySelectorAll("form"),t=0;t<e.length;t++)window.Nette.initForm(e.item(t))}},{key:"processForm",value:function(e){var t=e.element,n=e.originalEvent;t.form&&(t.form["nette-submittedBy"]=t),"form"!==t.tagName&&!t.form||!window.Nette||window.Nette.validateForm(t)||(n.stopImmediatePropagation(),n.preventDefault(),e.preventDefault())}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.popped=!1,n.href=null,n.initialState=null,e.addEventListener("init",n.initialize.bind(n)),e.addEventListener("before",n.saveUrl.bind(n)),e.addEventListener("success",n.pushNewState.bind(n)),n}return a(t,e),u(t,[{key:"initialize",value:function(){var e=this;this.popped=!!window.history.state;var t=window.location.href;window.addEventListener("popstate",function(n){var r=n.state||e.initialState,o=!e.popped&&t===r.href;e.popped=!0,o||r.ui&&(e.handleSnippets(r.ui),e.handleTitle(r.title))}),window.history.replaceState(this.initialState={href:window.location.href,title:window.document.title,ui:this.findSnippets()},window.document.title,window.location.href)}},{key:"saveUrl",value:function(e){var t=e.url;this.href=t}},{key:"pushNewState",value:function(e){var t=e.response;t.postGet&&t.url&&(this.href=t.url);var n=t.replaceHistory?"replaceState":"pushState";history[n]({href:this.href,title:window.document.title,ui:this.findSnippets()},window.document.title,this.href),this.href=null,this.popped=!0}},{key:"findSnippets",value:function(){for(var e={},t=window.document.querySelectorAll('[id^="snippet-"]'),n=0;n<t.length;n++){var r=t.item(n);r.getAttribute("data-naja-history-nocache")||r.getAttribute("data-history-nocache")||(e[r.id]=r.innerHTML)}return e}},{key:"handleSnippets",value:function(e){this.naja.snippetHandler.updateSnippets(e,!0),this.naja.scriptLoader.loadScripts(e),this.naja.load()}},{key:"handleTitle",value:function(e){window.document.title=e}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e.addEventListener("success",function(e){var t=e.response;t.redirect&&(n.makeRedirect(t.redirect,t.forceRedirect),e.stopImmediatePropagation())}),n}return a(t,e),u(t,[{key:"makeRedirect",value:function(e,t){var n=/^https?/i.test(e)&&!new RegExp("^"+window.location.origin,"i").test(e);t||n?window.location.href=e:this.naja.makeRequest("GET",e)}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e.addEventListener("success",function(e){var t=e.response;t.snippets&&n.loadScripts(t.snippets)}),n}return a(t,e),u(t,[{key:"loadScripts",value:function(e){Object.keys(e).forEach(function(t){var n=e[t];if(/<[^>]*script/i.test(n)){var r=window.document.createElement("div");r.innerHTML=n;for(var o=r.querySelectorAll("script"),i=0;i<o.length;i++){var a=o.item(i);window.document.head.appendChild(a).parentNode.removeChild(a)}}})}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return e.addEventListener("success",function(e){var t=e.response;t.snippets&&n.updateSnippets(t.snippets)}),n}return a(t,e),u(t,[{key:"updateSnippets",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Object.keys(e).forEach(function(r){var o=document.getElementById(r);o&&t.updateSnippet(o,e[r],n)})}},{key:"updateSnippet",value:function(e,t,n){"title"===e.tagName.toLowerCase()?document.title=t:!e.getAttribute("data-naja-snippet-prepend")&&!e.getAttribute("data-ajax-prepend")||n?!e.getAttribute("data-naja-snippet-append")&&!e.getAttribute("data-ajax-append")||n?e.innerHTML=t:e.innerHTML=e.innerHTML+t:e.innerHTML=t+e.innerHTML}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),c=r(s),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=n.handleUI.bind(n);return e.addEventListener("load",n.bindUI.bind(n,r)),n}return a(t,e),u(t,[{key:"bindUI",value:function(e){for(var t=["a.ajax",'input[type="submit"].ajax','input[type="image"].ajax','button[type="submit"].ajax','form.ajax input[type="submit"]','form.ajax input[type="image"]','form.ajax button[type="submit"]'].join(", "),n=document.querySelectorAll(t),r=0;r<n.length;r++){var o=n.item(r);o.removeEventListener("click",e),o.addEventListener("click",e)}for(var i=document.querySelectorAll("form.ajax"),a=0;a<i.length;a++){var u=i.item(a);u.removeEventListener("submit",e),u.addEventListener("submit",e)}}},{key:"handleUI",value:function(e){if(!(e.altKey||e.ctrlKey||e.shiftKey||e.metaKey||e.button)){var t=e.currentTarget,n={},r=void 0,o=void 0,i=void 0;if(this.naja.fireEvent("interaction",{element:t,originalEvent:e,options:n})){if("submit"===e.type)r=t.method?t.method.toUpperCase():"GET",o=t.action||window.location.pathname+window.location.search,i=new FormData(t);else if("click"===e.type)if("a"===t.tagName.toLowerCase())r="GET",o=t.href,i=null;else if("input"===t.tagName.toLowerCase()||"button"===t.tagName.toLowerCase()){var a=t.form;if(r=a.method?a.method.toUpperCase():"GET",o=a.action||window.location.pathname+window.location.search,i=new FormData(a),"submit"===t.type||"button"===t.tagName.toLowerCase())i.set(t.name,t.value||"");else if("image"===t.type){var u=t.getBoundingClientRect();i.set(t.name+".x",Math.max(0,Math.floor(e.pageX-u.left))),i.set(t.name+".y",Math.max(0,Math.floor(e.pageY-u.top)))}}e.preventDefault(),this.naja.makeRequest(r,o,i,n)}}}}]),t}(c.default);t.default=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){r(this,e),this.abortable=!0,this.xhr=null,t.addEventListener("init",this.initialize.bind(this)),t.addEventListener("interaction",this.checkAbortable.bind(this)),t.addEventListener("before",this.checkAbortable.bind(this)),t.addEventListener("start",this.saveXhr.bind(this)),t.addEventListener("complete",this.clearXhr.bind(this))}return o(e,[{key:"initialize",value:function(){var e=this;document.addEventListener("keydown",function(t){e.xhr&&"Escape"===t.key&&!(t.ctrlKey||t.shiftKey||t.altKey||t.metaKey)&&e.abortable&&(e.xhr.abort(),e.xhr=null)})}},{key:"checkAbortable",value:function(e){var t=e.element,n=e.options;this.abortable=t?"off"!==t.getAttribute("data-naja-abort"):n.abort!==!1}},{key:"saveXhr",value:function(e){var t=e.xhr;this.xhr=t}},{key:"clearXhr",value:function(){this.xhr=null,this.abortable=!0}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){r(this,e),this.xhr=null,t.addEventListener("interaction",this.checkUniqueness.bind(this)),t.addEventListener("before",this.abortPreviousRequest.bind(this)),t.addEventListener("complete",this.clearRequest.bind(this))}return o(e,[{key:"checkUniqueness",value:function(e){var t=e.element,n=e.options;n.unique="off"!==t.getAttribute("data-naja-unique")}},{key:"abortPreviousRequest",value:function(e){var t=e.xhr,n=e.options;this.xhr&&n.unique!==!1&&this.xhr.abort(),this.xhr=t}},{key:"clearRequest",value:function(){this.xhr=null}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e,t){for(var n=e[a][t];null!=n;){if(n.kind===u)return n.listener;n=n.next}return null}function o(e,t,n){"function"!=typeof n&&"object"!=typeof n&&(n=null);for(var r=null,o=e[a][t];null!=o;)o.kind===u?null==r?e[a][t]=o.next:r.next=o.next:r=o,o=o.next;null!=n&&(null==r?e[a][t]=s(n,u):r.next=s(n,u))}var i=n(1),a=i.LISTENERS,u=i.ATTRIBUTE,s=i.newNode;e.exports.defineCustomEventTarget=function(e,t){function n(){e.call(this)}var i={constructor:{value:n,configurable:!0,writable:!0}};return t.forEach(function(e){i["on"+e]={get:function(){return r(this,e)},set:function(t){o(this,e,t)},configurable:!0,enumerable:!0}}),n.prototype=Object.create(e.prototype,i),n}},function(e,t,n){"use strict";var r=n(1),o=n(13),i=n(15),a=r.isObject,u=r.LISTENERS,s=r.CAPTURE,c=r.BUBBLE,l=r.ATTRIBUTE,f=r.newNode,p=o.defineCustomEventTarget,d=i.createEventWrapper,h=i.STOP_IMMEDIATE_PROPAGATION_FLAG,y=i.PASSIVE_LISTENER_FLAG,b="undefined"!=typeof window&&"undefined"!=typeof window.EventTarget,v=e.exports=function e(){if(!(this instanceof e)){if(1===arguments.length&&Array.isArray(arguments[0]))return p(e,arguments[0]);if(arguments.length>0){for(var t=Array(arguments.length),n=0;n<arguments.length;++n)t[n]=arguments[n];return p(e,t)}throw new TypeError("Cannot call a class as a function")}Object.defineProperty(this,u,{value:Object.create(null)})};v.prototype=Object.create((b?window.EventTarget:Object).prototype,{constructor:{value:v,writable:!0,configurable:!0},addEventListener:{value:function(e,t,n){if(null==t)return!1;if("function"!=typeof t&&"object"!=typeof t)throw new TypeError('"listener" is not an object.');var r=a(n)?Boolean(n.capture):Boolean(n),o=r?s:c,i=this[u][e];if(null==i)return this[u][e]=f(t,o,n),!0;for(var l=null;null!=i;){if(i.listener===t&&i.kind===o)return!1;l=i,i=i.next}return l.next=f(t,o,n),!0},configurable:!0,writable:!0},removeEventListener:{value:function(e,t,n){if(null==t)return!1;for(var r=a(n)?Boolean(n.capture):Boolean(n),o=r?s:c,i=null,l=this[u][e];null!=l;){if(l.listener===t&&l.kind===o)return null==i?this[u][e]=l.next:i.next=l.next,!0;i=l,l=l.next}return!1},configurable:!0,writable:!0},dispatchEvent:{value:function(e){var t=e.type,n=this[u][t];if(null==n)return!0;for(var r=d(e,this),o=null;null!=n&&(n.once?null==o?this[u][t]=n.next:o.next=n.next:o=n,r[y]=n.passive,"function"==typeof n.listener?n.listener.call(this,r):n.kind!==l&&"function"==typeof n.listener.handleEvent&&n.listener.handleEvent(r),!r[h]);)n=n.next;return!r.defaultPrevented},configurable:!0,writable:!0}})},function(e,t,n){"use strict";var r=n(1).createUniqueKey,o=r("stop_immediate_propagation_flag"),i=r("canceled_flag"),a=r("passive_listener_flag"),u=r("original_event"),s=Object.freeze({stopPropagation:Object.freeze({value:function(){var e=this[u];"function"==typeof e.stopPropagation&&e.stopPropagation()},writable:!0,configurable:!0}),stopImmediatePropagation:Object.freeze({value:function(){this[o]=!0;var e=this[u];"function"==typeof e.stopImmediatePropagation&&e.stopImmediatePropagation()},writable:!0,configurable:!0}),preventDefault:Object.freeze({value:function(){if(!this[a]){this.cancelable===!0&&(this[i]=!0);var e=this[u];"function"==typeof e.preventDefault&&e.preventDefault()}},writable:!0,configurable:!0}),defaultPrevented:Object.freeze({get:function(){return this[i]},enumerable:!0,configurable:!0})});e.exports.STOP_IMMEDIATE_PROPAGATION_FLAG=o,e.exports.PASSIVE_LISTENER_FLAG=a,e.exports.createEventWrapper=function(e,t){var n="number"==typeof e.timeStamp?e.timeStamp:Date.now(),r={type:{value:e.type,enumerable:!0},target:{value:t,enumerable:!0},currentTarget:{value:t,enumerable:!0},eventPhase:{value:2,enumerable:!0},bubbles:{value:Boolean(e.bubbles),enumerable:!0},cancelable:{value:Boolean(e.cancelable),enumerable:!0},timeStamp:{value:n,enumerable:!0},isTrusted:{value:!1,enumerable:!0}};return r[o]={value:!1,writable:!0},r[i]={value:!1,writable:!0},r[a]={value:!1,writable:!0},r[u]={value:e},"undefined"!=typeof e.detail&&(r.detail={value:e.detail,enumerable:!0}),Object.create(Object.create(e,s),r)}},function(e,t,n){var r,o;!function(n){"use strict";var i=function(e){var t=function(e,t,n){n="function"==typeof n?n():null===n?"":void 0===n?"":n,e[e.length]=encodeURIComponent(t)+"="+encodeURIComponent(n)},n=function(e,r,o){var i,a,u;if("[object Array]"===Object.prototype.toString.call(r))for(i=0,a=r.length;i<a;i++)n(e+"["+("object"==typeof r[i]?i:"")+"]",r[i],o);else if(r&&"[object Object]"===r.toString())for(u in r)r.hasOwnProperty(u)&&(e?n(e+"["+u+"]",r[u],o,t):n(u,r[u],o,t));else if(e)t(o,e,r);else for(u in r)t(o,u,r[u]);return o};return n("",e,[]).join("&").replace(/%20/g,"+")};"object"==typeof e&&"object"==typeof e.exports?e.exports=i:(r=[],o=function(){return i}.apply(t,r),!(void 0!==o&&(e.exports=o)))}(this)},function(e,t,n){"use strict";function r(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var n,o,u=r(e),s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var c in n)i.call(n,c)&&(u[c]=n[c]);if(Object.getOwnPropertySymbols){o=Object.getOwnPropertySymbols(n);for(var l=0;l<o.length;l++)a.call(n,o[l])&&(u[o[l]]=n[o[l]])}}return u}},function(e,t,n){(function(e,t,n){!function(e){function r(e){return"function"==typeof e}function o(e){return"object"==typeof e}function i(e){"undefined"!=typeof t?t(e):"undefined"!=typeof n&&n.nextTick?n.nextTick(e):setTimeout(e,0)}var a;e[0][e[1]]=function e(t){var n,u=[],s=[],c=function(e,t){return null==n&&null!=e&&(n=e,u=t,s.length&&i(function(){for(var e=0;e<s.length;e++)s[e]()})),n};return c.then=function(c,l){var f=e(t),p=function(){function e(t){var n,i=0;try{if(t&&(o(t)||r(t))&&r(n=t.then)){if(t===f)throw new TypeError;n.call(t,function(){i++||e.apply(a,arguments)},function(e){i++||f(!1,[e])})}else f(!0,arguments)}catch(e){i++||f(!1,[e])}}try{var t=n?c:l;r(t)?e(t.apply(a,u||[])):f(n,u)}catch(e){f(!1,[e])}};return null!=n?i(p):s.push(p),f},t&&(c=t(c)),c}}([e,"exports"])}).call(t,n(23)(e),n(21).setImmediate,n(2))},function(e,t,n){e.exports=function(){var e="undefined"!=typeof window?window:self,t=n(18),r=n(16),o={},i="json",a="post",u=null,s=0,c=[],l=e.XMLHttpRequest?function(){return new e.XMLHttpRequest}:function(){return new ActiveXObject("Microsoft.XMLHTTP")},f=""===l().responseType,p=function(n,p,d,h,y){n=n.toUpperCase(),d=d||null,h=h||{};for(var b in o)if(!(b in h))if("object"==typeof o[b]&&"object"==typeof h[b])for(var v in o[b])h[b][v]=o[b][v];else h[b]=o[b];var m,w,g,T,j,E=!1,O=!1,x=!1,_=0,P={},k={text:"*/*",xml:"text/xml",json:"application/json",post:"application/x-www-form-urlencoded",document:"text/html"},S={text:"*/*",xml:"application/xml; q=1.0, text/xml; q=0.8, */*; q=0.1",json:"application/json; q=1.0, text/*; q=0.8, */*; q=0.1"},L=!1,M=t(function(t){return t.abort=function(){x||(w&&4!=w.readyState&&w.abort(),L&&(--s,L=!1),x=!0)},t.send=function(){if(!L){if(s==u)return void c.push(t);if(x)return void(c.length&&c.shift().send());if(++s,L=!0,w=l(),m&&("withCredentials"in w||!e.XDomainRequest||(w=new XDomainRequest,O=!0,"GET"!=n&&"POST"!=n&&(n="POST"))),O?w.open(n,p):(w.open(n,p,h.async,h.user,h.password),f&&h.async&&(w.withCredentials=h.withCredentials)),!O)for(var r in P)P[r]&&w.setRequestHeader(r,P[r]);if(f&&"auto"!=h.responseType)try{w.responseType=h.responseType,E=w.responseType==h.responseType}catch(e){}f||O?(w.onload=A,w.onerror=C,O&&(w.onprogress=function(){})):w.onreadystatechange=function(){4==w.readyState&&A()},h.async?"timeout"in w?(w.timeout=h.timeout,w.ontimeout=I):g=setTimeout(I,h.timeout):O&&(w.ontimeout=function(){}),"auto"!=h.responseType&&"overrideMimeType"in w&&w.overrideMimeType(k[h.responseType]),y&&y(w),O?setTimeout(function(){w.send("GET"!=n?d:null)},0):w.send("GET"!=n?d:null)}},t}),A=function(){var t;if(L=!1,clearTimeout(g),c.length&&c.shift().send(),!x){--s;try{if(E){if("response"in w&&null===w.response)throw"The request response is empty";j=w.response}else{if(t=h.responseType,"auto"==t)if(O)t=i;else{var n=w.getResponseHeader("Content-Type")||"";t=n.indexOf(k.json)>-1?"json":n.indexOf(k.xml)>-1?"xml":"text"}switch(t){case"json":if(w.responseText.length)try{j="JSON"in e?JSON.parse(w.responseText):new Function("return ("+w.responseText+")")()}catch(e){throw"Error while parsing JSON body : "+e}break;case"xml":try{e.DOMParser?j=(new DOMParser).parseFromString(w.responseText,"text/xml"):(j=new ActiveXObject("Microsoft.XMLDOM"),j.async="false",j.loadXML(w.responseText))}catch(e){j=void 0}if(!j||!j.documentElement||j.getElementsByTagName("parsererror").length)throw"Invalid XML";break;default:j=w.responseText}}if("status"in w&&!/^2|1223/.test(w.status))throw w.status+" ("+w.statusText+")";M(!0,[w,j])}catch(e){M(!1,[e,w,j])}}},C=function(e){x||(e="string"==typeof e?e:"Connection aborted",M.abort(),M(!1,[new Error(e),w,null]))},I=function(){x||(h.attempts&&++_==h.attempts?C("Timeout ("+p+")"):(w.abort(),L=!1,M.send()))};if(h.async=!("async"in h)||!!h.async,h.cache="cache"in h&&!!h.cache,h.dataType="dataType"in h?h.dataType.toLowerCase():a,h.responseType="responseType"in h?h.responseType.toLowerCase():"auto",h.user=h.user||"",h.password=h.password||"",h.withCredentials=!!h.withCredentials,h.timeout="timeout"in h?parseInt(h.timeout,10):3e4,h.attempts="attempts"in h?parseInt(h.attempts,10):1,T=p.match(/\/\/(.+?)\//),m=T&&!!T[1]&&T[1]!=location.host,"ArrayBuffer"in e&&d instanceof ArrayBuffer?h.dataType="arraybuffer":"Blob"in e&&d instanceof Blob?h.dataType="blob":"Document"in e&&d instanceof Document?h.dataType="document":"FormData"in e&&d instanceof FormData&&(h.dataType="formdata"),null!==d)switch(h.dataType){case"json":d=JSON.stringify(d);break;case"post":d=r(d)}if(h.headers){var R=function(e,t,n){return t+n.toUpperCase()};for(T in h.headers)P[T.replace(/(^|-)([^-])/g,R)]=h.headers[T]}return"Content-Type"in P||"GET"==n||h.dataType in k&&k[h.dataType]&&(P["Content-Type"]=k[h.dataType]),P.Accept||(P.Accept=h.responseType in S?S[h.responseType]:"*/*"),m||"X-Requested-With"in P||(P["X-Requested-With"]="XMLHttpRequest"),h.cache||"Cache-Control"in P||(P["Cache-Control"]="no-cache"),"GET"==n&&d&&"string"==typeof d&&(p+=(/\?/.test(p)?"&":"?")+d),h.async&&M.send(),M},d=function(e){var n=[],r=0,o=[];return t(function(t){var i=-1,a=function(e){return function(a,u,s,c){var l=++i;return++r,n.push(p(e,t.base+a,u,s,c).then(function(e,n){o[l]=arguments,--r||t(!0,1==o.length?o[0]:[o])},function(){t(!1,arguments)})),t}};t.get=a("GET"),t.post=a("POST"),
t.put=a("PUT"),t.delete=a("DELETE"),t.catch=function(e){return t.then(null,e)},t.complete=function(e){var n=function(){e()};return t.then(n,n)},t.map=function(e,t,n,r,o){return a(e.toUpperCase()).call(this,t,n,r,o)};for(var u in e)u in t||(t[u]=e[u]);return t.send=function(){for(var e=0,r=n.length;e<r;++e)n[e].send();return t},t.abort=function(){for(var e=0,r=n.length;e<r;++e)n[e].abort();return t},t})},h={base:"",get:function(){return d(h).get.apply(this,arguments)},post:function(){return d(h).post.apply(this,arguments)},put:function(){return d(h).put.apply(this,arguments)},delete:function(){return d(h).delete.apply(this,arguments)},map:function(){return d(h).map.apply(this,arguments)},xhr2:f,limit:function(e){return u=e,h},setDefaultOptions:function(e){return o=e,h},setDefaultXdrResponseType:function(e){return i=e.toLowerCase(),h},setDefaultDataType:function(e){return a=e.toLowerCase(),h},getOpenRequests:function(){return s}};return h}()},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return y[h]=r,d(h),h++}function o(e){delete y[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(b)setTimeout(a,0,e);else{var t=y[e];if(t){b=!0;try{i(t)}finally{o(e),b=!1}}}}function u(){d=function(e){t.nextTick(function(){a(e)})}}function s(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function c(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),d=function(n){e.postMessage(t+n,"*")}}function l(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;a(t)},d=function(t){e.port2.postMessage(t)}}function f(){var e=v.documentElement;d=function(t){var n=v.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function p(){d=function(e){setTimeout(a,0,e)}}if(!e.setImmediate){var d,h=1,y={},b=!1,v=e.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(e);m=m&&m.setTimeout?m:e,"[object process]"==={}.toString.call(e.process)?u():s()?c():e.MessageChannel?l():v&&"onreadystatechange"in v.createElement("script")?f():p(),m.setImmediate=r,m.clearImmediate=o}}("undefined"==typeof self?"undefined"==typeof e?this:e:self)}).call(t,n(22),n(2))},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(20),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){e.exports=n(3)}])});