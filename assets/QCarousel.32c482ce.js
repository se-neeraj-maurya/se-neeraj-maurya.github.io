import{J as te,K as N,L as ne,M as oe,N as D,O as L,S as j,V as O,U as z,r as R,c as f,w as T,g as U,h as m,aJ as ae,aK as ie,B as K,a9 as re,aL as le,A as G,aM as ue,aN as se,o as Z,E as ee,aO as W,X as ce,Y as de,aa as ve,aP as fe,Q,H as me}from"./index.30e7e525.js";import{c as pe}from"./selection.1286e7d7.js";const X={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ge=Object.keys(X);X.all=!0;function Y(e){const n={};for(const r of ge)e[r]===!0&&(n[r]=!0);return Object.keys(n).length===0?X:(n.horizontal===!0?n.left=n.right=!0:n.left===!0&&n.right===!0&&(n.horizontal=!0),n.vertical===!0?n.up=n.down=!0:n.up===!0&&n.down===!0&&(n.vertical=!0),n.horizontal===!0&&n.vertical===!0&&(n.all=!0),n)}const he=["INPUT","TEXTAREA"];function H(e,n){return n.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof n.handler=="function"&&he.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(n.uid)===-1)}function ye(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,c)=>{const i=parseFloat(r);i&&(n[c]=i)}),n}var xe=te({name:"touch-swipe",beforeMount(e,{value:n,arg:r,modifiers:c}){if(c.mouse!==!0&&N.has.touch!==!0)return;const i=c.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:ye(r),direction:Y(c),noop:ne,mouseStart(a){H(a,t)&&oe(a)&&(D(t,"temp",[[document,"mousemove","move",`notPassive${i}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(H(a,t)){const l=a.target;D(t,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,l){N.is.firefox===!0&&L(e,!0);const g=j(a);t.event={x:g.left,y:g.top,time:Date.now(),mouse:l===!0,dir:!1}},move(a){if(t.event===void 0)return;if(t.event.dir!==!1){O(a);return}const l=Date.now()-t.event.time;if(l===0)return;const g=j(a),h=g.left-t.event.x,u=Math.abs(h),p=g.top-t.event.y,d=Math.abs(p);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&d<t.sensitivity[1]){t.end(a);return}}else if(window.getSelection().toString()!==""){t.end(a);return}else if(u<t.sensitivity[2]&&d<t.sensitivity[2])return;const y=u/l,C=d/l;t.direction.vertical===!0&&u<d&&u<100&&C>t.sensitivity[0]&&(t.event.dir=p<0?"up":"down"),t.direction.horizontal===!0&&u>d&&d<100&&y>t.sensitivity[0]&&(t.event.dir=h<0?"left":"right"),t.direction.up===!0&&u<d&&p<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<d&&p>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>d&&h<0&&d<100&&y>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>d&&h>0&&d<100&&y>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(O(a),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pe(),t.styleCleanup=w=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(b,50):b()}),t.handler({evt:a,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:l,distance:{x:u,y:d}})):t.end(a)},end(a){t.event!==void 0&&(z(t,"temp"),N.is.firefox===!0&&L(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),a!==void 0&&t.event.dir!==!1&&O(a),t.event=void 0)}};if(e.__qtouchswipe=t,c.mouse===!0){const a=c.mouseCapture===!0||c.mousecapture===!0?"Capture":"";D(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}N.has.touch===!0&&D(t,"main",[[e,"touchstart","touchStart",`passive${c.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const r=e.__qtouchswipe;r!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&r.end(),r.handler=n.value),r.direction=Y(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(z(n,"main"),z(n,"temp"),N.is.firefox===!0&&L(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Ce(){const e=new Map;return{getCache:function(n,r){return e[n]===void 0?e[n]=r:e[n]},getCacheWithFn:function(n,r){return e[n]===void 0?e[n]=r():e[n]}}}const be={name:{required:!0},disable:Boolean},J={setup(e,{slots:n}){return()=>m("div",{class:"q-panel scroll",role:"tabpanel"},K(n.default))}},Pe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},_e=["update:modelValue","beforeTransition","transition"];function qe(){const{props:e,emit:n,proxy:r}=U(),{getCacheWithFn:c}=Ce();let i,t;const a=R(null),l=R(null);function g(o){const s=e.vertical===!0?"up":"left";P((r.$q.lang.rtl===!0?-1:1)*(o.direction===s?1:-1))}const h=f(()=>[[xe,g,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=f(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),p=f(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),d=f(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=f(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),C=f(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),w=f(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);T(()=>e.modelValue,(o,s)=>{const x=_(o)===!0?A(o):-1;t!==!0&&k(x===-1?0:x<A(s)?-1:1),a.value!==x&&(a.value=x,n("beforeTransition",o,s),re(()=>{n("transition",o,s)}))});function b(){P(1)}function F(){P(-1)}function $(o){n("update:modelValue",o)}function _(o){return o!=null&&o!==""}function A(o){return i.findIndex(s=>s.props.name===o&&s.props.disable!==""&&s.props.disable!==!0)}function M(){return i.filter(o=>o.props.disable!==""&&o.props.disable!==!0)}function k(o){const s=o!==0&&e.animated===!0&&a.value!==-1?"q-transition--"+(o===-1?u.value:p.value):null;l.value!==s&&(l.value=s)}function P(o,s=a.value){let x=s+o;for(;x>-1&&x<i.length;){const S=i[x];if(S!==void 0&&S.props.disable!==""&&S.props.disable!==!0){k(o),t=!0,n("update:modelValue",S.props.name),setTimeout(()=>{t=!1});return}x+=o}e.infinite===!0&&i.length!==0&&s!==-1&&s!==i.length&&P(o,o===-1?i.length:-1)}function I(){const o=A(e.modelValue);return a.value!==o&&(a.value=o),!0}function V(){const o=_(e.modelValue)===!0&&I()&&i[a.value];return e.keepAlive===!0?[m(le,C.value,[m(w.value===!0?c(y.value,()=>({...J,name:y.value})):J,{key:y.value,style:d.value},()=>o)])]:[m("div",{class:"q-panel scroll",style:d.value,key:y.value,role:"tabpanel"},[o])]}function v(){if(i.length!==0)return e.animated===!0?[m(ae,{name:l.value},V)]:V()}function q(o){return i=ie(K(o.default,[])).filter(s=>s.props!==null&&s.props.slot===void 0&&_(s.props.name)===!0),i.length}function B(){return i}return Object.assign(r,{next:b,previous:F,goTo:$}),{panelIndex:a,panelDirectives:h,updatePanelsList:q,updatePanelIndex:I,getPanelContent:v,getEnabledPanels:M,getPanels:B,isValidPanelName:_,keepAliveProps:C,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:P,goToPanel:$,nextPanel:b,previousPanel:F}}var Be=G({name:"QCarouselSlide",props:{...be,imgSrc:String},setup(e,{slots:n}){const r=f(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>m("div",{class:"q-carousel__slide",style:r.value},K(n.default))}});let E=0;const Se={fullscreen:Boolean,noRouteFullscreenExit:Boolean},we=["update:fullscreen","fullscreen"];function ke(){const e=U(),{props:n,emit:r,proxy:c}=e;let i,t,a;const l=R(!1);ue(e)===!0&&T(()=>c.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),T(()=>n.fullscreen,p=>{l.value!==p&&g()}),T(l,p=>{r("update:fullscreen",p),r("fullscreen",p)});function g(){l.value===!0?u():h()}function h(){l.value!==!0&&(l.value=!0,a=c.$el.parentNode,a.replaceChild(t,c.$el),document.body.appendChild(c.$el),E++,E===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:u},W.add(i))}function u(){l.value===!0&&(i!==void 0&&(W.remove(i),i=void 0),a.replaceChild(c.$el,t),l.value=!1,E=Math.max(0,E-1),E===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),c.$el.scrollIntoView!==void 0&&setTimeout(()=>{c.$el.scrollIntoView()})))}return se(()=>{t=document.createElement("span")}),Z(()=>{n.fullscreen===!0&&h()}),ee(u),Object.assign(c,{toggleFullscreen:g,setFullscreen:h,exitFullscreen:u}),{inFullscreen:l,toggleFullscreen:g}}const Te=["top","right","bottom","left"],$e=["regular","flat","outline","push","unelevated"];var Ne=G({name:"QCarousel",props:{...ce,...Pe,...Se,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>$e.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Te.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...we,..._e],setup(e,{slots:n}){const{proxy:{$q:r}}=U(),c=de(e,r);let i=null,t;const{updatePanelsList:a,getPanelContent:l,panelDirectives:g,goToPanel:h,previousPanel:u,nextPanel:p,getEnabledPanels:d,panelIndex:y}=qe(),{inFullscreen:C}=ke(),w=f(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),b=f(()=>e.vertical===!0?"vertical":"horizontal"),F=f(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(c.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${b.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${M.value}`:"")),$=f(()=>{const v=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?v.reverse():v}),_=f(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),A=f(()=>e.navigationActiveIcon||_.value),M=f(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),k=f(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));T(()=>e.modelValue,()=>{e.autoplay&&P()}),T(()=>e.autoplay,v=>{v?P():i!==null&&(clearTimeout(i),i=null)});function P(){const v=fe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,v>=0?p():u()},v)}Z(()=>{e.autoplay&&P()}),ee(()=>{i!==null&&clearTimeout(i)});function I(v,q){return m("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${M.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[m("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},d().map(q))])}function V(){const v=[];if(e.navigation===!0){const q=n["navigation-icon"]!==void 0?n["navigation-icon"]:o=>m(Q,{key:"nav"+o.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${o.active===!0?"":"in"}active`,...o.btnProps,onClick:o.onClick}),B=t-1;v.push(I("buttons",(o,s)=>{const x=o.props.name,S=y.value===s;return q({index:s,maxIndex:B,name:x,active:S,btnProps:{icon:S===!0?A.value:_.value,size:"sm",...k.value},onClick:()=>{h(x)}})}))}else if(e.thumbnails===!0){const q=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(I("thumbnails",B=>{const o=B.props;return m("img",{key:"tmb#"+o.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${o.name===e.modelValue?"":"in"}active`+q,src:o.imgSrc||o["img-src"],onClick:()=>{h(o.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&v.push(m("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`},[m(Q,{icon:$.value[0],...k.value,onClick:u})])),(e.infinite===!0||y.value<t-1)&&v.push(m("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`},[m(Q,{icon:$.value[1],...k.value,onClick:p})]))),me(n.control,v)}return()=>(t=a(n),m("div",{class:F.value,style:w.value},[ve("div",{class:"q-carousel__slides-container"},l(),"sl-cont",e.swipeable,()=>g.value)].concat(V())))}});export{Ne as Q,Be as a,Y as g,H as s};
