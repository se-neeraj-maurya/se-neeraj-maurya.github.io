import{_ as S}from"./index.cb068a47.js";var me=globalThis&&globalThis.__extends||function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,a){r.__proto__=a}||function(r,a){for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])},e(n,t)};return function(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(n,t);function r(){this.constructor=n}n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}}(),X=globalThis&&globalThis.__awaiter||function(e,n,t,r){function a(o){return o instanceof t?o:new t(function(i){i(o)})}return new(t||(t=Promise))(function(o,i){function l(f){try{s(r.next(f))}catch(c){i(c)}}function u(f){try{s(r.throw(f))}catch(c){i(c)}}function s(f){f.done?o(f.value):a(f.value).then(l,u)}s((r=r.apply(e,n||[])).next())})},Z=globalThis&&globalThis.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(s){return function(f){return u([s,f])}}function u(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(t=0)),t;)try{if(r=1,a&&(o=s[0]&2?a.return:s[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,s[1])).done)return o;switch(a=0,o&&(s=[s[0]&2,o.value]),s[0]){case 0:case 1:o=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,a=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){t.label=s[1];break}if(s[0]===6&&t.label<o[1]){t.label=o[1],o=s;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(s);break}o[2]&&t.ops.pop(),t.trys.pop();continue}s=n.call(e,t)}catch(f){s=[6,f],a=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},U=globalThis&&globalThis.__spreadArray||function(e,n,t){if(t||arguments.length===2)for(var r=0,a=n.length,o;r<a;r++)(o||!(r in n))&&(o||(o=Array.prototype.slice.call(n,0,r)),o[r]=n[r]);return e.concat(o||Array.prototype.slice.call(n))},he="ionicpwaelements",x,ee,d=!1,k=!1,g=function(e,n){return function(){}},ge=function(e,n){return function(){}},ye="{visibility:hidden}.hydrated{visibility:inherit}",F={},be="http://www.w3.org/2000/svg",we="http://www.w3.org/1999/xhtml",_e=function(e){return e!=null},j=function(e){return e=typeof e,e==="object"||e==="function"};function ne(e){var n,t,r;return(r=(t=(n=e.head)===null||n===void 0?void 0:n.querySelector('meta[name="csp-nonce"]'))===null||t===void 0?void 0:t.getAttribute("content"))!==null&&r!==void 0?r:void 0}var Ee=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var a=null,o=!1,i=!1,l=[],u=function(c){for(var $=0;$<c.length;$++)a=c[$],Array.isArray(a)?u(a):a!=null&&typeof a!="boolean"&&((o=typeof e!="function"&&!j(a))&&(a=String(a)),o&&i?l[l.length-1].$text$+=a:l.push(o?A(null,a):a),i=o)};if(u(t),n){var s=n.className||n.class;s&&(n.class=typeof s!="object"?s:Object.keys(s).filter(function(c){return s[c]}).join(" "))}var f=A(e,null);return f.$attrs$=n,l.length>0&&(f.$children$=l),f},A=function(e,n){var t={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null};return t.$attrs$=null,t},Se={},Te=function(e){return e&&e.$tag$===Se},Le=function(e,n){return e!=null&&!j(e)?n&4?e==="false"?!1:e===""||!!e:n&2?parseFloat(e):n&1?String(e):e:e},Re=function(e){return b(e).$hostElement$},an=function(e,n,t){var r=Re(e);return{emit:function(a){return te(r,n,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:a})}}},te=function(e,n,t){var r=v.ce(n,t);return e.dispatchEvent(r),r},W=new WeakMap,Pe=function(e,n,t){var r=C.get(e);Qe&&t?(r=r||new CSSStyleSheet,typeof r=="string"?r=n:r.replaceSync(n)):r=n,C.set(e,r)},xe=function(e,n,t,r){var a,o=re(n),i=C.get(o);if(e=e.nodeType===11?e:h,i)if(typeof i=="string"){e=e.head||e;var l=W.get(e),u=void 0;if(l||W.set(e,l=new Set),!l.has(o)){{u=h.createElement("style"),u.innerHTML=i;var s=(a=v.$nonce$)!==null&&a!==void 0?a:ne(h);s!=null&&u.setAttribute("nonce",s),e.insertBefore(u,e.querySelector("link"))}l&&l.add(o)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=U(U([],e.adoptedStyleSheets,!0),[i],!1));return o},Ce=function(e){var n=e.$cmpMeta$,t=e.$hostElement$,r=n.$flags$,a=g("attachStyles",n.$tagName$),o=xe(t.shadowRoot?t.shadowRoot:t.getRootNode(),n);r&10&&(t["s-sc"]=o,t.classList.add(o+"-h")),a()},re=function(e,n){return"sc-"+e.$tagName$},G=function(e,n,t,r,a,o){if(t!==r){var i=J(e,n),l=n.toLowerCase();if(n==="class"){var u=e.classList,s=Y(t),f=Y(r);u.remove.apply(u,s.filter(function(p){return p&&!f.includes(p)})),u.add.apply(u,f.filter(function(p){return p&&!s.includes(p)}))}else if(n==="style"){for(var c in t)(!r||r[c]==null)&&(c.includes("-")?e.style.removeProperty(c):e.style[c]="");for(var c in r)(!t||r[c]!==t[c])&&(c.includes("-")?e.style.setProperty(c,r[c]):e.style[c]=r[c])}else if(n==="ref")r&&r(e);else if(!i&&n[0]==="o"&&n[1]==="n")n[2]==="-"?n=n.slice(3):J(M,l)?n=l.slice(2):n=l[2]+n.slice(3),t&&v.rel(e,n,t,!1),r&&v.ael(e,n,r,!1);else{var $=j(r);if((i||$&&r!==null)&&!a)try{if(e.tagName.includes("-"))e[n]=r;else{var w=r==null?"":r;n==="list"?i=!1:(t==null||e[n]!=w)&&(e[n]=w)}}catch{}r==null||r===!1?(r!==!1||e.getAttribute(n)==="")&&e.removeAttribute(n):(!i||o&4||a)&&!$&&(r=r===!0?"":r,e.setAttribute(n,r))}}},Ne=/\s/,Y=function(e){return e?e.split(Ne):[]},ae=function(e,n,t,r){var a=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$,o=e&&e.$attrs$||F,i=n.$attrs$||F;for(r in o)r in i||G(a,r,o[r],void 0,t,n.$flags$);for(r in i)G(a,r,o[r],i[r],t,n.$flags$)},H=function(e,n,t,r){var a=n.$children$[t],o=0,i,l;if(a.$text$!==null)i=a.$elm$=h.createTextNode(a.$text$);else{if(d||(d=a.$tag$==="svg"),i=a.$elm$=h.createElementNS(d?be:we,a.$tag$),d&&a.$tag$==="foreignObject"&&(d=!1),ae(null,a,d),_e(x)&&i["s-si"]!==x&&i.classList.add(i["s-si"]=x),a.$children$)for(o=0;o<a.$children$.length;++o)l=H(e,a,o),l&&i.appendChild(l);a.$tag$==="svg"?d=!1:i.tagName==="foreignObject"&&(d=!0)}return i},oe=function(e,n,t,r,a,o){var i=e,l;for(i.shadowRoot&&i.tagName===ee&&(i=i.shadowRoot);a<=o;++a)r[a]&&(l=H(null,t,a),l&&(r[a].$elm$=l,i.insertBefore(l,n)))},ie=function(e,n,t){for(var r=n;r<=t;++r){var a=e[r];if(a){var o=a.$elm$;se(a),o&&o.remove()}}},Me=function(e,n,t,r){for(var a=0,o=0,i=n.length-1,l=n[0],u=n[i],s=r.length-1,f=r[0],c=r[s],$;a<=i&&o<=s;)l==null?l=n[++a]:u==null?u=n[--i]:f==null?f=r[++o]:c==null?c=r[--s]:P(l,f)?(L(l,f),l=n[++a],f=r[++o]):P(u,c)?(L(u,c),u=n[--i],c=r[--s]):P(l,c)?(L(l,c),e.insertBefore(l.$elm$,u.$elm$.nextSibling),l=n[++a],c=r[--s]):P(u,f)?(L(u,f),e.insertBefore(u.$elm$,l.$elm$),u=n[--i],f=r[++o]):($=H(n&&n[o],t,o),f=r[++o],$&&l.$elm$.parentNode.insertBefore($,l.$elm$));a>i?oe(e,r[s+1]==null?null:r[s+1].$elm$,t,r,o,s):o>s&&ie(n,a,i)},P=function(e,n){return e.$tag$===n.$tag$},L=function(e,n){var t=n.$elm$=e.$elm$,r=e.$children$,a=n.$children$,o=n.$tag$,i=n.$text$;i===null?(d=o==="svg"?!0:o==="foreignObject"?!1:d,ae(e,n,d),r!==null&&a!==null?Me(t,r,n,a):a!==null?(e.$text$!==null&&(t.textContent=""),oe(t,null,n,a,0,a.length-1)):r!==null&&ie(r,0,r.length-1),d&&o==="svg"&&(d=!1)):e.$text$!==i&&(t.data=i)},se=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(se)},Oe=function(e,n){var t=e.$hostElement$,r=e.$vnode$||A(null,null),a=Te(n)?n:Ee(null,null,n);ee=t.tagName,a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=r.$elm$=t.shadowRoot||t,x=t["s-sc"],L(r,a)},le=function(e,n){n&&!e.$onRenderResolve$&&n["s-p"]&&n["s-p"].push(new Promise(function(t){return e.$onRenderResolve$=t}))},N=function(e,n){if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}le(e,e.$ancestorComponent$);var t=function(){return ke(e,n)};return Ze(t)},ke=function(e,n){var t=g("scheduleUpdate",e.$cmpMeta$.$tagName$),r=e.$lazyInstance$,a;return n&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(function(o){var i=o[0],l=o[1];return V(r,i,l)}),e.$queuedListeners$=void 0)),t(),Ae(a,function(){return je(e,r,n)})},Ae=function(e,n){return Ie(e)?e.then(n):n()},Ie=function(e){return e instanceof Promise||e&&e.then&&typeof e.then=="function"},je=function(e,n,t){return X(void 0,void 0,void 0,function(){var r,a,o,i,l,u,s;return Z(this,function(f){return a=e.$hostElement$,o=g("update",e.$cmpMeta$.$tagName$),i=a["s-rc"],t&&Ce(e),l=g("render",e.$cmpMeta$.$tagName$),He(e,n),i&&(i.map(function(c){return c()}),a["s-rc"]=void 0),l(),o(),u=(r=a["s-p"])!==null&&r!==void 0?r:[],s=function(){return Ve(e)},u.length===0?s():(Promise.all(u).then(s),e.$flags$|=4,u.length=0),[2]})})},He=function(e,n,t){try{n=n.render(),e.$flags$&=-17,e.$flags$|=2,Oe(e,n)}catch(r){m(r,e.$hostElement$)}return null},Ve=function(e){e.$cmpMeta$.$tagName$;var n=e.$hostElement$,t=g(),r=e.$lazyInstance$,a=e.$ancestorComponent$;e.$flags$&64?t():(e.$flags$|=64,fe(n),V(r,"componentDidLoad"),t(),e.$onReadyResolve$(n),a||ue()),e.$onInstanceResolve$(n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&q(function(){return N(e,!1)}),e.$flags$&=-517},on=function(e){{var n=b(e),t=n.$hostElement$.isConnected;return t&&(n.$flags$&18)===2&&N(n,!1),t}},ue=function(e){fe(h.documentElement),q(function(){return te(M,"appload",{detail:{namespace:he}})})},V=function(e,n,t){if(e&&e[n])try{return e[n](t)}catch(r){m(r)}},fe=function(e){return e.classList.add("hydrated")},De=function(e,n){return b(e).$instanceValues$.get(n)},qe=function(e,n,t,r){var a=b(e),o=a.$instanceValues$.get(n),i=a.$flags$,l=a.$lazyInstance$;t=Le(t,r.$members$[n][0]);var u=Number.isNaN(o)&&Number.isNaN(t),s=t!==o&&!u;(!(i&8)||o===void 0)&&s&&(a.$instanceValues$.set(n,t),l&&(i&18)===2&&N(a,!1))},ce=function(e,n,t){if(n.$members$){var r=Object.entries(n.$members$),a=e.prototype;if(r.map(function(i){var l=i[0],u=i[1][0];u&31||t&2&&u&32?Object.defineProperty(a,l,{get:function(){return De(this,l)},set:function(s){qe(this,l,s,n)},configurable:!0,enumerable:!0}):t&1&&u&64&&Object.defineProperty(a,l,{value:function(){for(var s=[],f=0;f<arguments.length;f++)s[f]=arguments[f];var c=b(this);return c.$onInstancePromise$.then(function(){var $;return($=c.$lazyInstance$)[l].apply($,s)})}})}),t&1){var o=new Map;a.attributeChangedCallback=function(i,l,u){var s=this;v.jmp(function(){var f=o.get(i);if(s.hasOwnProperty(f))u=s[f],delete s[f];else if(a.hasOwnProperty(f)&&typeof s[f]=="number"&&s[f]==u)return;s[f]=u===null&&typeof s[f]=="boolean"?!1:u})},e.observedAttributes=r.filter(function(i){i[0];var l=i[1];return l[0]&15}).map(function(i){var l=i[0],u=i[1],s=u[1]||l;return o.set(s,l),s})}}return e},Be=function(e,n,t,r,a){return X(void 0,void 0,void 0,function(){var o,i,l,u,s,f,c;return Z(this,function($){switch($.label){case 0:return(n.$flags$&32)!==0?[3,3]:(n.$flags$|=32,a=Ke(t),a.then?(o=ge(),[4,a]):[3,2]);case 1:a=$.sent(),o(),$.label=2;case 2:a.isProxied||(ce(a,t,2),a.isProxied=!0),i=g("createInstance",t.$tagName$),n.$flags$|=8;try{new a(n)}catch(w){m(w)}n.$flags$&=-9,i(),a.style&&(l=a.style,u=re(t),C.has(u)||(s=g("registerStyles",t.$tagName$),Pe(u,l,!!(t.$flags$&1)),s())),$.label=3;case 3:return f=n.$ancestorComponent$,c=function(){return N(n,!0)},f&&f["s-rc"]?f["s-rc"].push(c):c(),[2]}})})},ze=function(e){if((v.$flags$&1)===0){var n=b(e),t=n.$cmpMeta$,r=g("connectedCallback",t.$tagName$);if(n.$flags$&1)$e(e,n,t.$listeners$);else{n.$flags$|=1;for(var a=e;a=a.parentNode||a.host;)if(a["s-p"]){le(n,n.$ancestorComponent$=a);break}t.$members$&&Object.entries(t.$members$).map(function(o){var i=o[0],l=o[1][0];if(l&31&&e.hasOwnProperty(i)){var u=e[i];delete e[i],e[i]=u}}),Be(e,n,t)}r()}},Ue=function(e){if((v.$flags$&1)===0){var n=b(e),t=n.$lazyInstance$;n.$rmListeners$&&(n.$rmListeners$.map(function(r){return r()}),n.$rmListeners$=void 0),V(t,"disconnectedCallback")}},Fe=function(e,n){n===void 0&&(n={});var t,r=g(),a=[],o=n.exclude||[],i=M.customElements,l=h.head,u=l.querySelector("meta[charset]"),s=h.createElement("style"),f=[],c,$=!0;Object.assign(v,n),v.$resourcesUrl$=new URL(n.resourcesUrl||"./",h.baseURI).href,e.map(function(p){p[1].map(function(E){var _={$flags$:E[0],$tagName$:E[1],$members$:E[2],$listeners$:E[3]};_.$members$=E[2],_.$listeners$=E[3];var R=_.$tagName$,pe=function(B){me(T,B);function T(y){var z=B.call(this,y)||this;return y=z,Je(y,_),_.$flags$&1&&y.attachShadow({mode:"open"}),z}return T.prototype.connectedCallback=function(){var y=this;c&&(clearTimeout(c),c=null),$?f.push(this):v.jmp(function(){return ze(y)})},T.prototype.disconnectedCallback=function(){var y=this;v.jmp(function(){return Ue(y)})},T.prototype.componentOnReady=function(){return b(this).$onReadyPromise$},T}(HTMLElement);_.$lazyBundleId$=p[0],!o.includes(R)&&!i.get(R)&&(a.push(R),i.define(R,ce(pe,_,1)))})});{s.innerHTML=a+ye,s.setAttribute("data-styles","");var w=(t=v.$nonce$)!==null&&t!==void 0?t:ne(h);w!=null&&s.setAttribute("nonce",w),l.insertBefore(s,u?u.nextSibling:l.firstChild)}$=!1,f.length?f.map(function(p){return p.connectedCallback()}):v.jmp(function(){return c=setTimeout(ue,30)}),r()},$e=function(e,n,t,r){t&&t.map(function(a){var o=a[0],i=a[1],l=a[2],u=Ge(e,o),s=We(n,l),f=Ye(o);v.ael(u,i,s,f),(n.$rmListeners$=n.$rmListeners$||[]).push(function(){return v.rel(u,i,s,f)})})},We=function(e,n){return function(t){try{e.$flags$&256?e.$lazyInstance$[n](t):(e.$queuedListeners$=e.$queuedListeners$||[]).push([n,t])}catch(r){m(r)}}},Ge=function(e,n){return n&16?h.body:e},Ye=function(e){return(e&2)!==0},D=new WeakMap,b=function(e){return D.get(e)},sn=function(e,n){return D.set(n.$lazyInstance$=e,n)},Je=function(e,n){var t={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};return t.$onInstancePromise$=new Promise(function(r){return t.$onInstanceResolve$=r}),t.$onReadyPromise$=new Promise(function(r){return t.$onReadyResolve$=r}),e["s-p"]=[],e["s-rc"]=[],$e(e,t,n.$listeners$),D.set(e,t)},J=function(e,n){return n in e},m=function(e,n){return(0,console.error)(e,n)},O=new Map,Ke=function(e,n,t){var r=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleId$,o=O.get(a);if(o)return o[r];if(!t||!BUILD.hotModuleReplacement){var i=function(l){return O.set(a,l),l[r]};switch(a){case"pwa-action-sheet":return S(()=>import("./pwa-action-sheet.entry.58d478c8.js"),["assets/pwa-action-sheet.entry.58d478c8.js","assets/index.cb068a47.js","assets/index.571d9957.css"]).then(i,m);case"pwa-camera-modal":return S(()=>import("./pwa-camera-modal.entry.7d4d9863.js"),["assets/pwa-camera-modal.entry.7d4d9863.js","assets/index.cb068a47.js","assets/index.571d9957.css"]).then(i,m);case"pwa-toast":return S(()=>import("./pwa-toast.entry.eeb35967.js"),["assets/pwa-toast.entry.eeb35967.js","assets/index.cb068a47.js","assets/index.571d9957.css"]).then(i,m);case"pwa-camera-modal-instance":return S(()=>import("./pwa-camera-modal-instance.entry.28f27585.js"),["assets/pwa-camera-modal-instance.entry.28f27585.js","assets/index.cb068a47.js","assets/index.571d9957.css"]).then(i,m);case"pwa-camera":return S(()=>import("./pwa-camera.entry.c6aa6caa.js"),["assets/pwa-camera.entry.c6aa6caa.js","assets/index.cb068a47.js","assets/index.571d9957.css"]).then(i,m)}}return S(()=>import("./".concat(a,".entry.js").concat("")),[]).then(function(l){return O.set(a,l),l[r]},m)},C=new Map,M=typeof window!="undefined"?window:{},h=M.document||{head:{}},v={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,t,r){return e.addEventListener(n,t,r)},rel:function(e,n,t,r){return e.removeEventListener(n,t,r)},ce:function(e,n){return new CustomEvent(e,n)}},ve=function(e){return Promise.resolve(e)},Qe=function(){try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1}(),K=[],de=[],Xe=function(e,n){return function(t){e.push(t),k||(k=!0,n&&v.$flags$&4?q(I):v.raf(I))}},Q=function(e){for(var n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){m(t)}e.length=0},I=function(){Q(K),Q(de),(k=K.length>0)&&v.raf(I)},q=function(e){return ve().then(e)},Ze=Xe(de,!0),en=function(){return ve()},nn=function(e,n){return typeof window=="undefined"?Promise.resolve():en().then(function(){return Fe([["pwa-camera-modal",[[1,"pwa-camera-modal",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],present:[64],dismiss:[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{header:[1],cancelable:[4],options:[16],open:[32]}]]],["pwa-toast",[[1,"pwa-toast",{message:[1],duration:[2],closing:[32]}]]],["pwa-camera",[[1,"pwa-camera",{facingMode:[1,"facing-mode"],handlePhoto:[16],hidePicker:[4,"hide-picker"],handleNoDeviceError:[16],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"],photo:[32],photoSrc:[32],showShutterOverlay:[32],flashIndex:[32],hasCamera:[32],rotation:[32],deviceError:[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{facingMode:[1,"facing-mode"],hidePicker:[4,"hide-picker"],noDevicesText:[1,"no-devices-text"],noDevicesButtonText:[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]],n)})};(function(){if(typeof window!="undefined"&&window.Reflect!==void 0&&window.customElements!==void 0){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}})();var tn=()=>{nn()},ln=Object.freeze(Object.defineProperty({__proto__:null,default:tn},Symbol.toStringTag,{value:"Module"}));export{Se as H,ln as a,an as c,on as f,Re as g,Ee as h,sn as r};
