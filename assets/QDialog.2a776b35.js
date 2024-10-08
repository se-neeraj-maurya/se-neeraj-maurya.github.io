import{C as M,aA as U,w as D,ay as he,o as be,g as V,a3 as I,aE as ye,Z as Y,aF as ee,c as b,aG as H,r as x,a as pe,aH as we,h as k,aI as ke,aJ as qe,aK as Te,av as Ee,J as te,y as Se,ar as W,z as xe,aL as Pe}from"./index.c73ad5d1.js";import{r as N,a as Be,b as Ce}from"./focus-manager.02955f48.js";function _e(e,t,n){let l;function a(){l!==void 0&&(U.remove(l),l=void 0)}return M(()=>{e.value===!0&&a()}),{removeFromHistory:a,addToHistory(){l={condition:()=>n.value===!0,handler:t},U.add(l)}}}const Fe={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},He=["beforeShow","show","beforeHide","hide"];function $e({showing:e,canShow:t,hideOnRouteChange:n,handleShow:l,handleHide:a,processOnMount:f}){const r=V(),{props:s,emit:u,proxy:m}=r;let d;function v(i){e.value===!0?w(i):h(i)}function h(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const g=s["onUpdate:modelValue"]!==void 0;g===!0&&(u("update:modelValue",!0),d=i,I(()=>{d===i&&(d=void 0)})),(s.modelValue===null||g===!1)&&T(i)}function T(i){e.value!==!0&&(e.value=!0,u("beforeShow",i),l!==void 0?l(i):u("show",i))}function w(i){if(s.disable===!0)return;const g=s["onUpdate:modelValue"]!==void 0;g===!0&&(u("update:modelValue",!1),d=i,I(()=>{d===i&&(d=void 0)})),(s.modelValue===null||g===!1)&&P(i)}function P(i){e.value!==!1&&(e.value=!1,u("beforeHide",i),a!==void 0?a(i):u("hide",i))}function E(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):i===!0!==e.value&&(i===!0?T:P)(d)}D(()=>s.modelValue,E),n!==void 0&&he(r)===!0&&D(()=>m.$route.fullPath,()=>{n.value===!0&&e.value===!0&&w()}),f===!0&&be(()=>{E(s.modelValue)});const B={show:h,hide:w,toggle:v};return Object.assign(m,B),B}function De(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ye(t))}}}function Me(){let e=null;const t=V();function n(){e!==null&&(clearTimeout(e),e=null)}return Y(n),M(n),{removeTimeout:n,registerTimeout(l,a){n(),ee(t)===!1&&(e=setTimeout(l,a))}}}function Ve(){let e;const t=V();function n(){e=void 0}return Y(n),M(n),{removeTick:n,registerTick(l){e=l,I(()=>{e===l&&(ee(t)===!1&&e(),e=void 0)})}}}const ze={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ae(e,t=()=>{},n=()=>{}){return{transitionProps:b(()=>{const l=`q-transition--${e.transitionShow||t()}`,a=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${a}-leave-from`,leaveActiveClass:`${a}-leave-active`,leaveToClass:`${a}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const $=[];function Je(e){return $.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function Le(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return H(e)}else if(e.__qPortal===!0){const n=H(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=H(e)}while(e!=null)}function Ze(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=Le(e,t);continue}e.hide(t)}e=H(e)}}function Oe(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ke(e,t,n,l){const a=x(!1),f=x(!1);let r=null;const s={},u=l==="dialog"&&Oe(e);function m(v){if(v===!0){N(s),f.value=!0;return}f.value=!1,a.value===!1&&(u===!1&&r===null&&(r=qe(!1,l)),a.value=!0,$.push(e.proxy),Be(s))}function d(v){if(f.value=!1,v!==!0)return;N(s),a.value=!1;const h=$.indexOf(e.proxy);h!==-1&&$.splice(h,1),r!==null&&(Te(r),r=null)}return pe(()=>{d(!0)}),e.proxy.__qPortal=!0,we(e.proxy,"contentEl",()=>t.value),{showPortal:m,hidePortal:d,portalIsActive:a,portalIsAccessible:f,renderPortal:()=>u===!0?n():a.value===!0?[k(ke,{to:r},n())]:void 0}}const y=[];let q;function Qe(e){q=e.keyCode===27}function Ie(){q===!0&&(q=!1)}function Re(e){q===!0&&(q=!1,Ee(e,27)===!0&&y[y.length-1](e))}function ne(e){window[e]("keydown",Qe),window[e]("blur",Ie),window[e]("keyup",Re),q=!1}function je(e){te.is.desktop===!0&&(y.push(e),y.length===1&&ne("addEventListener"))}function J(e){const t=y.indexOf(e);t>-1&&(y.splice(t,1),y.length===0&&ne("removeEventListener"))}const p=[];function oe(e){p[p.length-1](e)}function Ge(e){te.is.desktop===!0&&(p.push(e),p.length===1&&document.body.addEventListener("focusin",oe))}function Z(e){const t=p.indexOf(e);t>-1&&(p.splice(t,1),p.length===0&&document.body.removeEventListener("focusin",oe))}let F=0;const Ue={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},X={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Xe=Se({name:"QDialog",inheritAttrs:!1,props:{...Fe,...ze,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...He,"shake","click","escapeKey"],setup(e,{slots:t,emit:n,attrs:l}){const a=V(),f=x(null),r=x(!1),s=x(!1);let u=null,m=null,d,v;const h=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:T}=De(),{registerTimeout:w}=Me(),{registerTick:P,removeTick:E}=Ve(),{transitionProps:B,transitionStyle:i}=Ae(e,()=>X[e.position][0],()=>X[e.position][1]),{showPortal:g,hidePortal:R,portalIsAccessible:ie,renderPortal:le}=Ke(a,f,ge,"dialog"),{hide:C}=$e({showing:r,hideOnRouteChange:h,handleShow:de,handleHide:fe,processOnMount:!0}),{addToHistory:ae,removeFromHistory:se}=_e(r,C,h),ue=b(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Ue[e.position]}`+(s.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),_=b(()=>r.value===!0&&e.seamless!==!0),re=b(()=>e.autoClose===!0?{onClick:me}:{}),ce=b(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${_.value===!0?"modal":"seamless"}`,l.class]);D(()=>e.maximized,o=>{r.value===!0&&L(o)}),D(_,o=>{T(o),o===!0?(Ge(O),je(A)):(Z(O),J(A))});function de(o){ae(),m=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,L(e.maximized),g(),s.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),P(S)):E(),w(()=>{if(a.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:c,bottom:K}=document.activeElement.getBoundingClientRect(),{innerHeight:G}=window,Q=window.visualViewport!==void 0?window.visualViewport.height:G;c>0&&K>Q/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Q,K>=G?1/0:Math.ceil(document.scrollingElement.scrollTop+K-Q/2))),document.activeElement.scrollIntoView()}v=!0,f.value.click(),v=!1}g(!0),s.value=!1,n("show",o)},e.transitionDuration)}function fe(o){E(),se(),j(!0),s.value=!0,R(),m!==null&&(((o&&o.type.indexOf("key")===0?m.closest('[tabindex]:not([tabindex^="-"])'):void 0)||m).focus(),m=null),w(()=>{R(!0),s.value=!1,n("hide",o)},e.transitionDuration)}function S(o){Ce(()=>{let c=f.value;c===null||c.contains(document.activeElement)===!0||(c=(o!==""?c.querySelector(o):null)||c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))})}function z(o){o&&typeof o.focus=="function"?o.focus({preventScroll:!0}):S(),n("shake");const c=f.value;c!==null&&(c.classList.remove("q-animate--scale"),c.classList.add("q-animate--scale"),u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,f.value!==null&&(c.classList.remove("q-animate--scale"),S())},170))}function A(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&z():(n("escapeKey"),C()))}function j(o){u!==null&&(clearTimeout(u),u=null),(o===!0||r.value===!0)&&(L(!1),e.seamless!==!0&&(T(!1),Z(O),J(A))),o!==!0&&(m=null)}function L(o){o===!0?d!==!0&&(F<1&&document.body.classList.add("q-body--dialog"),F++,d=!0):d===!0&&(F<2&&document.body.classList.remove("q-body--dialog"),F--,d=!1)}function me(o){v!==!0&&(C(o),n("click",o))}function ve(o){e.persistent!==!0&&e.noBackdropDismiss!==!0?C(o):e.noShake!==!0&&z()}function O(o){e.allowFocusOutside!==!0&&ie.value===!0&&Pe(f.value,o.target)!==!0&&S('[tabindex]:not([tabindex="-1"])')}Object.assign(a.proxy,{focus:S,shake:z,__updateRefocusTarget(o){m=o||null}}),M(j);function ge(){return k("div",{role:"dialog","aria-modal":_.value===!0?"true":"false",...l,class:ce.value},[k(W,{name:"q-transition--fade",appear:!0},()=>_.value===!0?k("div",{class:"q-dialog__backdrop fixed-full",style:i.value,"aria-hidden":"true",tabindex:-1,onClick:ve}):null),k(W,B.value,()=>r.value===!0?k("div",{ref:f,class:ue.value,style:i.value,tabindex:-1,...re.value},xe(t.default)):null)])}return le}});export{Xe as Q,He as a,Me as b,$e as c,_e as d,De as e,Ze as f,Je as g,ze as h,Ve as i,Ae as j,Ke as k,Ge as l,J as m,je as n,Le as o,$ as p,Z as r,Fe as u};
