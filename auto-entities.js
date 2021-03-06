function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,r=new RegExp(`${s}|${n}`);class o{constructor(t,e){this.parts=[],this.element=e;const i=[],n=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:f}}=t;for(;u<f;){const t=o.nextNode();if(null!==t){if(h++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=p[u],i=d.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const o=n.split(r);this.parts.push({type:"attribute",index:h,name:i,strings:o}),u+=o.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,n=e.split(r),o=n.length-1;for(let e=0;e<o;e++){let i,r=n[e];if(""===r)i=c();else{const t=d.exec(r);null!==t&&a(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}s.insertBefore(i,t),this.parts.push({type:"node",index:++h})}""===n[o]?(s.insertBefore(c(),t),i.push(t)):t.data=n[o],u+=o}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&h!==l||(h++,e.insertBefore(c(),t)),l=h,this.parts.push({type:"node",index:h}),null===t.nextSibling?t.data="":(i.push(t),h--),u++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),u++}}else o.currentNode=n.pop()}for(const t of i)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let r=p(s),o=s[r],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,r=p(s,r),o=s[r]}c.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},p=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};const f=new WeakMap,_=t=>"function"==typeof t&&f.has(t),y={},m={};class g{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,o=0,a=0,c=n.nextNode();for(;o<s.length;)if(r=s[o],l(r)){for(;a<r.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));o++}else this.__parts.push(void 0),o++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const v=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),S=` ${s} `;class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let r=0;r<t;r++){const t=this.strings[r],o=t.lastIndexOf("\x3c!--");i=(o>-1||i)&&-1===t.indexOf("--\x3e",o+1);const a=d.exec(t);e+=null===a?t+(i?S:n):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==v&&(e=v.createHTML(e)),t.innerHTML=e,t}}const b=t=>null===t||!("object"==typeof t||"function"==typeof t),N=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new P(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!N(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(b(t)||!N(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class P{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||b(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}const t=this.__pendingValue;t!==y&&(b(t)?t!==this.value&&this.__commitText(t):t instanceof w?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):N(t)?this.__commitIterable(t):t===m?(this.value=m,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const i=new g(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new C(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}class E extends x{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends P{}let A=!1;(()=>{try{const t={get capture(){return A=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class k{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=V(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const V=t=>t&&(A?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function U(t){let e=R.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},R.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const R=new Map,j=new WeakMap;const F=new class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new E(t,e.slice(1),i).parts}if("@"===n)return[new k(t,e.slice(1),s.eventContext)];if("?"===n)return[new T(t,e.slice(1),i)];return new x(t,e,i).parts}handleTextExpression(t){return new C(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const M=(t,...e)=>new w(t,e,"html",F),$=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const q=t=>e=>{const i=$(e.type,t);let n=R.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},R.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(s);if(r=n.keyString.get(a),void 0===r){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(e,i),n.keyString.set(a,r)}return n.stringsArray.set(e.strings,r),r},D=["html","svg"],W=new Set,z=(t,e,i)=>{W.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const o=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),o.textContent+=e.textContent}(t=>{D.forEach((e=>{const i=R.get($(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),h(t,i)}))}))})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let o=p(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===i&&(a=u(e),i.parentNode.insertBefore(e,i));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=p(n,o);return}o=p(n,o)}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(o,a.firstChild);const t=new Set;t.add(o),h(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const L={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:H};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=H){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||L,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||L.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=B){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;const G=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function K(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):G(t,e)}const Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol();class Y{constructor(t,e){if(e!==X)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class tt extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new Y(String(e),X)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return Z}}function et(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}tt.finalized=!0,tt.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=j.has(e),o=I&&11===e.nodeType&&!!e.host,a=o&&!W.has(n),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let n=j.get(e);void 0===n&&(i(e,e.firstChild),j.set(e,n=new C(Object.assign({templateFactory:U},s))),n.appendInto(e)),n.setValue(t),n.commit()})(t,l,Object.assign({templateFactory:q(n)},s)),a){const t=j.get(l);j.delete(l);const s=t.value instanceof g?t.value.template:void 0;z(n,l,s),i(e,e.firstChild),e.appendChild(l),j.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const it="lovelace-player-device-id";function st(){if(!localStorage[it]){const t=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);window.fully&&"function"==typeof fully.getDeviceId?localStorage[it]=fully.getDeviceId():localStorage[it]=`${t()}${t()}-${t()}${t()}`}return localStorage[it]}let nt=st();const rt=new URLSearchParams(window.location.search);var ot;function at(t){return!!String(t).includes("{%")||(!!String(t).includes("{{")||void 0)}rt.get("deviceID")&&null!==(ot=rt.get("deviceID"))&&("clear"===ot?localStorage.removeItem(it):localStorage[it]=ot,nt=st()),window.cardMod_template_cache=window.cardMod_template_cache||{};const lt=window.cardMod_template_cache;async function ct(t,e,i){const s=et().connection,n=JSON.stringify([e,i]);let r=lt[n];r?(r.callbacks.has(t)||dt(t),t(r.value),r.callbacks.add(t)):(dt(t),t(""),i=Object.assign({user:et().user.name,browser:nt,hash:location.hash.substr(1)||""},i),lt[n]=r={template:e,variables:i,value:"",callbacks:new Set([t]),unsubscribe:s.subscribeMessage((t=>function(t,e){const i=lt[t];i&&(i.value=e.result,i.callbacks.forEach((t=>t(e.result))))}(n,t)),{type:"render_template",template:e,variables:i})})}async function dt(t){let e;for(const[i,s]of Object.entries(lt))if(s.callbacks.has(t)){s.callbacks.delete(t),0==s.callbacks.size&&(e=s.unsubscribe,delete lt[i]);break}e&&await(await e)()}var ht;function ut(t,e){if("string"==typeof e&&"string"==typeof t&&(t.startsWith("/")&&t.endsWith("/")||-1!==t.indexOf("*"))){return t.startsWith("/")||(t=`/^${t=t.replace(/\./g,".").replace(/\*/g,".*")}$/`),new RegExp(t.slice(1,-1)).test(e)}if("string"==typeof t){if(t.startsWith("<="))return parseFloat(e)<=parseFloat(t.substr(2));if(t.startsWith(">="))return parseFloat(e)>=parseFloat(t.substr(2));if(t.startsWith("<"))return parseFloat(e)<parseFloat(t.substr(1));if(t.startsWith(">"))return parseFloat(e)>parseFloat(t.substr(1));if(t.startsWith("!"))return parseFloat(e)!=parseFloat(t.substr(1));if(t.startsWith("="))return parseFloat(e)==parseFloat(t.substr(1))}return t===e}window.autoEntities_cache=null!==(ht=window.autoEntities_cache)&&void 0!==ht?ht:{};const pt=window.autoEntities_cache;async function ft(t){var e;return pt.devices=null!==(e=pt.devices)&&void 0!==e?e:await t.callWS({type:"config/device_registry/list"}),pt.devices}async function _t(t){var e;return pt.entities=null!==(e=pt.entities)&&void 0!==e?e:await t.callWS({type:"config/entity_registry/list"}),pt.entities}const yt={options:async()=>!0,sort:async()=>!0,domain:async(t,e,i)=>ut(e,i.entity_id.split(".")[0]),entity_id:async(t,e,i)=>ut(e,i.entity_id),state:async(t,e,i)=>ut(e,i.state),name:async(t,e,i)=>{var s;return ut(e,null===(s=i.attributes)||void 0===s?void 0:s.friendly_name)},group:async(t,e,i)=>{var s,n,r;return null===(r=null===(n=null===(s=t.states[e])||void 0===s?void 0:s.attributes)||void 0===n?void 0:n.entity_id)||void 0===r?void 0:r.includes(i.entity_id)},attributes:async(t,e,i)=>{for(const[t,s]of Object.entries(e)){let e=t.split(" ")[0],n=i.attributes;for(const t of e.split(":"))n=n?n[t]:void 0;if(void 0===n||!ut(s,n))return!1}return!0},not:async(t,e,i)=>!await mt(t,e,i.entity_id),or:async(t,e,i)=>{for(const s of e)if(await mt(t,s,i.entity_id))return!0;return!1},device:async(t,e,i)=>{const s=(await _t(t)).find((t=>t.entity_id===i.entity_id));if(!s)return!1;const n=(await ft(t)).find((t=>t.id===s.device_id));return!!n&&(ut(e,n.name_by_user)||ut(e,n.name))},area:async(t,e,i)=>{const s=(await _t(t)).find((t=>t.entity_id===i.entity_id));if(!s)return!1;const n=(await ft(t)).find((t=>t.id===s.device_id));if(!n)return!1;const r=(await async function(t){var e;return pt.areas=null!==(e=pt.areas)&&void 0!==e?e:await t.callWS({type:"config/area_registry/list"}),pt.areas}(t)).find((t=>t.area_id===n.area_id));return!!r&&ut(e,r.name)},last_changed:async(t,e,i)=>ut(e,((new Date).getTime()-new Date(i.last_changed).getTime())/6e4),last_updated:async(t,e,i)=>ut(e,((new Date).getTime()-new Date(i.last_updated).getTime())/6e4)};async function mt(t,e,i){var s;if(!t.states[i])return!1;for(let[n,r]of Object.entries(e))if(n=n.trim().split(" ")[0].trim(),!await(null===(s=yt[n])||void 0===s?void 0:s.call(yt,t,r,t.states[i])))return!1;return!0}function gt(t,e,i){var s,n,r,o;const[a,l]=i.reverse?[-1,1]:[1,-1];return i.ignore_case&&(t=null!==(n=null===(s=t.toLowerCase)||void 0===s?void 0:s.call(t))&&void 0!==n?n:t,e=null!==(o=null===(r=e.toLowerCase)||void 0===r?void 0:r.call(e))&&void 0!==o?o:e),i.numeric&&(isNaN(parseFloat(t))&&isNaN(parseFloat(e))||(t=isNaN(parseFloat(t))?void 0:parseFloat(t),e=isNaN(parseFloat(e))?void 0:parseFloat(e))),void 0===t&&void 0===e?0:void 0===t?a:void 0===e||t<e?l:t>e?a:0}const vt={domain:(t,e,i)=>gt(t.entity_id.split(".")[0],e.entity_id.split(".")[0],i),entity_id:(t,e,i)=>gt(t.entity_id,e.entity_id,i),friendly_name:(t,e,i)=>gt(t.attributes.friendly_name||t.entity_id.split(".")[1],e.attributes.friendly_name||e.entity_id.split(".")[1],i),name:(t,e,i)=>gt(t.attributes.friendly_name||t.entity_id.split(".")[1],e.attributes.friendly_name||e.entity_id.split(".")[1],i),state:(t,e,i)=>gt(t.state,e.state,i),attribute:(t,e,i)=>{const[s,n]=i.reverse?[-1,1]:[1,-1];let r=t.attributes,o=e.attributes;for(const t of i.attribute.split(":")){if([r,o]=[r[t],o[t]],void 0===r&&void 0===o)return 0;if(void 0===r)return s;if(void 0===o)return n}return gt(r,o,i)},last_changed:(t,e,i)=>(i.numeric=!0,gt(new Date(t.last_changed).getTime(),new Date(e.last_changed).getTime(),i)),last_updated:(t,e,i)=>(i.numeric=!0,gt(new Date(t.last_updated).getTime(),new Date(e.last_updated).getTime(),i)),last_triggered:(t,e,i)=>null==t.attributes.last_triggered||null==e.attributes.last_triggered?0:(i.numeric=!0,gt(new Date(t.attributes.last_triggered).getTime(),new Date(e.attributes.lat_triggered).getTime(),i))};function St(t,e){return function(i,s){var n,r;return null!==(r=null===(n=vt[e.method])||void 0===n?void 0:n.call(vt,t.states[i.entity],t.states[s.entity],e))&&void 0!==r?r:0}}var wt="1.8.0b4";function bt(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(!(t instanceof Object&&e instanceof Object))return!1;for(const i in t)if(t.hasOwnProperty(i)){if(!e.hasOwnProperty(i))return!1;if(t[i]!==e[i]){if("object"!=typeof t[i])return!1;if(!bt(t[i],e[i]))return!1}}for(const i in e)if(e.hasOwnProperty(i)&&!t.hasOwnProperty(i))return!1;return!0}class Nt extends tt{setConfig(t){var e,i;if(!t)throw new Error("No configuration.");if(!(null===(e=t.card)||void 0===e?void 0:e.type))throw new Error("No card type specified.");if(!t.filter&&!t.entities)throw new Error("No filters specified.");t=JSON.parse(JSON.stringify(t)),this._config=t,this._renderer=t=>this._template=t,(null===(i=this._config.filter)||void 0===i?void 0:i.template)&&at(this._config.filter.template)&&ct(this._renderer,this._config.filter.template,{config:t})}connectedCallback(){var t,e;super.connectedCallback(),(null===(e=null===(t=this._config)||void 0===t?void 0:t.filter)||void 0===e?void 0:e.template)&&at(this._config.filter.template)&&ct(this._renderer,this._config.filter.template,{config:this._config})}disconnectedCallback(){super.disconnectedCallback(),dt(this._renderer)}async update_card(t){if(this._entities&&bt(t,this._entities))return;this._entities=t;const e=Object.assign({[this._config.card_param||"entities"]:t},this._config.card);if(this.card)this.card.setConfig(e);else{const t=await window.loadCardHelpers();this.card=await t.createCardElement(e)}this.card.hass=this.hass;const i=0===t.length&&!1===this._config.show_empty;this.style.display=i?"none":null,this.style.margin=i?"0":null}async update_entities(){var t,e,i;const s=t=>t?"string"==typeof t?{entity:t.trim()}:t:null;let n=[...(null===(e=null===(t=this._config)||void 0===t?void 0:t.entities)||void 0===e?void 0:e.map(s))||[]];if(!this.hass||!this._config.filter)return n;if(this._template&&(n=n.concat(this._template.map(s))),n=n.filter(Boolean),this._config.filter.include){const t=Object.keys(this.hass.states).map(s);for(const e of this._config.filter.include){if(e.type){n.push(e);continue}let i=[];for(const s of t)await mt(this.hass,e,s.entity)&&i.push(JSON.parse(JSON.stringify(Object.assign(Object.assign({},s),e.options)).replace(/this.entity_id/g,s.entity)));e.sort&&(i=i.sort(St(this.hass,e.sort))),n=n.concat(i)}}if(this._config.filter.exclude)for(const t of this._config.filter.exclude){const e=[];for(const i of n)void 0!==i.entity&&await mt(this.hass,t,i.entity)||e.push(i);n=e}if(this._config.sort&&(n=n.sort(St(this.hass,this._config.sort)),this._config.sort.count)){const t=null!==(i=this._config.sort.first)&&void 0!==i?i:0;n=n.slice(t,t+this._config.sort.count)}if(this._config.unique){let t=[];for(const e of n)"entity"===this._config.unique&&t.some((t=>t.entity===e.entity))||t.some((t=>bt(t,e)))||t.push(e);n=t}return n}async updated(t){if(t.has("_template")||t.has("hass")&&this.hass){this.card&&(this.card.hass=this.hass);const t=await this.update_entities();this.update_card(t)}}createRenderRoot(){return this}render(){return M`${this.card}`}async getCardSize(){var t;let e=0;return this.card&&this.card.getCardSize&&(e=await this.card.getCardSize()),1===e&&(null===(t=this._entities)||void 0===t?void 0:t.length)&&(e=this._entities.length),0===e&&this._config.filter&&this._config.filter.include&&(e=Object.keys(this._config.filter.include).length),e||1}}t([K()],Nt.prototype,"hass",void 0),t([K()],Nt.prototype,"card",void 0),t([K()],Nt.prototype,"_template",void 0),customElements.get("auto-entities")||(customElements.define("auto-entities",Nt),console.info(`%cAUTO-ENTITIES ${wt} IS INSTALLED`,"color: green; font-weight: bold",""));
