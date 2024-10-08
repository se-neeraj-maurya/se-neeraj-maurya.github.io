import{Q as Ne,a as vt,b as ft}from"./QLayout.eb94ebbc.js";import{y as Y,c as u,h as B,z as xe,i as Be,A as F,B as Me,r as k,w as C,C as ve,D as mt,g as fe,G as $e,H as ht,I as bt,J as ae,K as yt,L as gt,M as se,O as Se,R as Ve,S as ze,U as ke,V as we,X as pt,Y as St,Z as zt,$ as wt,a0 as ce,a1 as Ae,a2 as _e,o as We,a3 as Oe,a4 as Qe,u as Xe,n as D,t as X,s as V,f as T,q as Z,a5 as _t,a6 as qt,a7 as A,v as oe,a8 as U,p as Ue,a9 as Ye,aa as Ke,F as Ge,ab as Ct,l as kt,m as xt,ac as He,Q as Bt,ad as le}from"./index.c73ad5d1.js";import{Q as de}from"./QResizeObserver.7d4f2dc4.js";import{Q as Mt}from"./QImg.1c1ad563.js";import{Q as $t,a as Pe}from"./QItem.1687dd60.js";import{Q as Tt}from"./QList.e1ece8ed.js";import{u as Je,a as Ze}from"./use-dark.008590ea.js";import{g as Le,s as De}from"./QCarousel.ff8b4386.js";import{c as Vt}from"./selection.eebcb6cc.js";import{b as j}from"./format.2a3572e1.js";import{u as At,a as Ot,b as Qt,c as Ht,d as Pt,e as Lt}from"./QDialog.2a776b35.js";import{A as Fe,a as Dt}from"./formatting.897fab98.js";import{u as et}from"./authStore.cbfd6f4c.js";import{D as Ft}from"./DetailDialog.44df573a.js";import{_ as Et}from"./ShippingAddress.97dcf0cb.js";import{u as It}from"./globalStore.da87f570.js";import{u as Rt}from"./cart-store.24769fea.js";import"./focus-manager.02955f48.js";import"./axios.boot.7a3cb386.js";import"./QSkeleton.c57ae26c.js";import"./QCard.f27ef106.js";import"./QSeparator.0ae7e94f.js";import"./QCardActions.187f4417.js";import"./QInput.4d258c5d.js";import"./uid.42677368.js";import"./use-form.6491fe21.js";import"./QForm.40f5f0c2.js";var jt=Y({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:c}){const s=u(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>B("div",{class:s.value},xe(c.default))}}),Nt=Y({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:c}){const s=u(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>B("div",{class:s.value,role:"toolbar"},xe(c.default))}}),Wt=Y({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:c,emit:s}){const{proxy:{$q:y}}=fe(),e=Be(Me,F);if(e===F)return console.error("QHeader needs to be child of QLayout"),F;const l=k(parseInt(t.heightHint,10)),r=k(!0),a=u(()=>t.reveal===!0||e.view.value.indexOf("H")>-1||y.platform.is.ios&&e.isContainer.value===!0),v=u(()=>{if(t.modelValue!==!0)return 0;if(a.value===!0)return r.value===!0?l.value:0;const m=l.value-e.scroll.value.position;return m>0?m:0}),d=u(()=>t.modelValue!==!0||a.value===!0&&r.value!==!0),n=u(()=>t.modelValue===!0&&d.value===!0&&t.reveal===!0),w=u(()=>"q-header q-layout__section--marginal "+(a.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=u(()=>{const m=e.rows.value.top,$={};return m[0]==="l"&&e.left.space===!0&&($[y.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),m[2]==="r"&&e.right.space===!0&&($[y.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),$});function S(m,$){e.update("header",m,$)}function h(m,$){m.value!==$&&(m.value=$)}function _({height:m}){h(l,m),S("size",m)}function x(m){n.value===!0&&h(r,!0),s("focusin",m)}C(()=>t.modelValue,m=>{S("space",m),h(r,!0),e.animate()}),C(v,m=>{S("offset",m)}),C(()=>t.reveal,m=>{m===!1&&h(r,t.modelValue)}),C(r,m=>{e.animate(),s("reveal",m)}),C(e.scroll,m=>{t.reveal===!0&&h(r,m.direction==="up"||m.position<=t.revealOffset||m.position-m.inflectionPoint<100)});const f={};return e.instances.header=f,t.modelValue===!0&&S("size",l.value),S("space",t.modelValue),S("offset",v.value),ve(()=>{e.instances.header===f&&(e.instances.header=void 0,S("size",0),S("offset",0),S("space",!1))}),()=>{const m=mt(c.default,[]);return t.elevated===!0&&m.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m.push(B(de,{debounce:0,onResize:_})),B("header",{class:w.value,style:z.value,onFocusin:x},m)}}});const Xt=["top","middle","bottom"];var Ut=Y({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:t=>Xt.includes(t)}},setup(t,{slots:c}){const s=u(()=>t.align!==void 0?{verticalAlign:t.align}:null),y=u(()=>{const e=t.outline===!0&&t.color||t.textColor;return`q-badge flex inline items-center no-wrap q-badge--${t.multiLine===!0?"multi":"single"}-line`+(t.outline===!0?" q-badge--outline":t.color!==void 0?` bg-${t.color}`:"")+(e!==void 0?` text-${e}`:"")+(t.floating===!0?" q-badge--floating":"")+(t.rounded===!0?" q-badge--rounded":"")+(t.transparent===!0?" q-badge--transparent":"")});return()=>B("div",{class:y.value,style:s.value,role:"status","aria-label":t.label},$e(c.default,t.label!==void 0?[t.label]:[]))}}),Yt=Y({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:c,emit:s}){const{proxy:{$q:y}}=fe(),e=Be(Me,F);if(e===F)return console.error("QFooter needs to be child of QLayout"),F;const l=k(parseInt(t.heightHint,10)),r=k(!0),a=k(ht.value===!0||e.isContainer.value===!0?0:window.innerHeight),v=u(()=>t.reveal===!0||e.view.value.indexOf("F")>-1||y.platform.is.ios&&e.isContainer.value===!0),d=u(()=>e.isContainer.value===!0?e.containerHeight.value:a.value),n=u(()=>{if(t.modelValue!==!0)return 0;if(v.value===!0)return r.value===!0?l.value:0;const g=e.scroll.value.position+d.value+l.value-e.height.value;return g>0?g:0}),w=u(()=>t.modelValue!==!0||v.value===!0&&r.value!==!0),z=u(()=>t.modelValue===!0&&w.value===!0&&t.reveal===!0),S=u(()=>"q-footer q-layout__section--marginal "+(v.value===!0?"fixed":"absolute")+"-bottom"+(t.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus"+(v.value!==!0?" hidden":""):"")),h=u(()=>{const g=e.rows.value.bottom,M={};return g[0]==="l"&&e.left.space===!0&&(M[y.lang.rtl===!0?"right":"left"]=`${e.left.size}px`),g[2]==="r"&&e.right.space===!0&&(M[y.lang.rtl===!0?"left":"right"]=`${e.right.size}px`),M});function _(g,M){e.update("footer",g,M)}function x(g,M){g.value!==M&&(g.value=M)}function f({height:g}){x(l,g),_("size",g)}function m(){if(t.reveal!==!0)return;const{direction:g,position:M,inflectionPoint:K}=e.scroll.value;x(r,g==="up"||M-K<100||e.height.value-d.value-M-l.value<300)}function $(g){z.value===!0&&x(r,!0),s("focusin",g)}C(()=>t.modelValue,g=>{_("space",g),x(r,!0),e.animate()}),C(n,g=>{_("offset",g)}),C(()=>t.reveal,g=>{g===!1&&x(r,t.modelValue)}),C(r,g=>{e.animate(),s("reveal",g)}),C([l,e.scroll,e.height],m),C(()=>y.screen.height,g=>{e.isContainer.value!==!0&&x(a,g)});const N={};return e.instances.footer=N,t.modelValue===!0&&_("size",l.value),_("space",t.modelValue),_("offset",n.value),ve(()=>{e.instances.footer===N&&(e.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const g=$e(c.default,[B(de,{debounce:0,onResize:f})]);return t.elevated===!0&&g.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),B("footer",{class:S.value,style:h.value,onFocusin:$},g)}}});function qe(t,c,s){const y=ke(t);let e,l=y.left-c.event.x,r=y.top-c.event.y,a=Math.abs(l),v=Math.abs(r);const d=c.direction;d.horizontal===!0&&d.vertical!==!0?e=l<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?e=r<0?"up":"down":d.up===!0&&r<0?(e="up",a>v&&(d.left===!0&&l<0?e="left":d.right===!0&&l>0&&(e="right"))):d.down===!0&&r>0?(e="down",a>v&&(d.left===!0&&l<0?e="left":d.right===!0&&l>0&&(e="right"))):d.left===!0&&l<0?(e="left",a<v&&(d.up===!0&&r<0?e="up":d.down===!0&&r>0&&(e="down"))):d.right===!0&&l>0&&(e="right",a<v&&(d.up===!0&&r<0?e="up":d.down===!0&&r>0&&(e="down")));let n=!1;if(e===void 0&&s===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};e=c.event.lastDir,n=!0,e==="left"||e==="right"?(y.left-=l,a=0,l=0):(y.top-=r,v=0,r=0)}return{synthetic:n,payload:{evt:t,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:y,direction:e,isFirst:c.event.isFirst,isFinal:s===!0,duration:Date.now()-c.event.time,distance:{x:a,y:v},offset:{x:l,y:r},delta:{x:y.left-c.event.lastX,y:y.top-c.event.lastY}}}}let Kt=0;var re=bt({name:"touch-pan",beforeMount(t,{value:c,modifiers:s}){if(s.mouse!==!0&&ae.has.touch!==!0)return;function y(l,r){s.mouse===!0&&r===!0?pt(l):(s.stop===!0&&ze(l),s.prevent===!0&&Ve(l))}const e={uid:"qvtp_"+Kt++,handler:c,modifiers:s,direction:Le(s),noop:yt,mouseStart(l){De(l,e)&&gt(l)&&(se(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(l,!0))},touchStart(l){if(De(l,e)){const r=l.target;se(e,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","passiveCapture"],[r,"touchend","end","passiveCapture"]]),e.start(l)}},start(l,r){if(ae.is.firefox===!0&&Se(t,!0),e.lastEvt=l,r===!0||s.stop===!0){if(e.direction.all!==!0&&(r!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const d=l.type.indexOf("mouse")>-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&Ve(d),l.cancelBubble===!0&&ze(d),Object.assign(d,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[e.uid]:l.qClonedBy.concat(e.uid)}),e.initialEvent={target:l.target,event:d}}ze(l)}const{left:a,top:v}=ke(l);e.event={x:a,y:v,time:Date.now(),mouse:r===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:v}},move(l){if(e.event===void 0)return;const r=ke(l),a=r.left-e.event.x,v=r.top-e.event.y;if(a===0&&v===0)return;e.lastEvt=l;const d=e.event.mouse===!0,n=()=>{y(l,d);let S;s.preserveCursor!==!0&&s.preservecursor!==!0&&(S=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Vt(),e.styleCleanup=h=>{if(e.styleCleanup=void 0,S!==void 0&&(document.documentElement.style.cursor=S),document.body.classList.remove("non-selectable"),d===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{_(),h()},50):_()}else h!==void 0&&h()}};if(e.event.detected===!0){e.event.isFirst!==!0&&y(l,e.event.mouse);const{payload:S,synthetic:h}=qe(l,e,!1);S!==void 0&&(e.handler(S)===!1?e.end(l):(e.styleCleanup===void 0&&e.event.isFirst===!0&&n(),e.event.lastX=S.position.left,e.event.lastY=S.position.top,e.event.lastDir=h===!0?void 0:S.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||d===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){n(),e.event.detected=!0,e.move(l);return}const w=Math.abs(a),z=Math.abs(v);w!==z&&(e.direction.horizontal===!0&&w>z||e.direction.vertical===!0&&w<z||e.direction.up===!0&&w<z&&v<0||e.direction.down===!0&&w<z&&v>0||e.direction.left===!0&&w>z&&a<0||e.direction.right===!0&&w>z&&a>0?(e.event.detected=!0,e.move(l)):e.end(l,!0))},end(l,r){if(e.event!==void 0){if(we(e,"temp"),ae.is.firefox===!0&&Se(t,!1),r===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(qe(l===void 0?e.lastEvt:l,e).payload);const{payload:a}=qe(l===void 0?e.lastEvt:l,e,!0),v=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(v):v()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,s.mouse===!0){const l=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";se(e,"main",[[t,"mousedown","mouseStart",`passive${l}`]])}ae.has.touch===!0&&se(e,"main",[[t,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,c){const s=t.__qtouchpan;s!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&s.end(),s.handler=c.value),s.direction=Le(c.modifiers))},beforeUnmount(t){const c=t.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),we(c,"main"),we(c,"temp"),ae.is.firefox===!0&&Se(t,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete t.__qtouchpan)}});const Ee=["vertical","horizontal"],Ce={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ie={prevent:!0,mouse:!0,mouseAllDir:!0},Re=t=>t>=250?50:Math.ceil(t/5);var Gt=Y({name:"QScrollArea",props:{...Je,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:c,emit:s}){const y=k(!1),e=k(!1),l=k(!1),r={vertical:k(0),horizontal:k(0)},a={vertical:{ref:k(null),position:k(0),size:k(0)},horizontal:{ref:k(null),position:k(0),size:k(0)}},{proxy:v}=fe(),d=Ze(t,v.$q);let n=null,w;const z=k(null),S=u(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=u(()=>{const i=a.vertical.size.value-r.vertical.value;if(i<=0)return 0;const b=j(a.vertical.position.value/i,0,1);return Math.round(b*1e4)/1e4}),a.vertical.thumbHidden=u(()=>(t.visible===null?l.value:t.visible)!==!0&&y.value===!1&&e.value===!1||a.vertical.size.value<=r.vertical.value+1),a.vertical.thumbStart=u(()=>a.vertical.percentage.value*(r.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=u(()=>Math.round(j(r.vertical.value*r.vertical.value/a.vertical.size.value,Re(r.vertical.value),r.vertical.value))),a.vertical.style=u(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=u(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=u(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=u(()=>{const i=a.horizontal.size.value-r.horizontal.value;if(i<=0)return 0;const b=j(Math.abs(a.horizontal.position.value)/i,0,1);return Math.round(b*1e4)/1e4}),a.horizontal.thumbHidden=u(()=>(t.visible===null?l.value:t.visible)!==!0&&y.value===!1&&e.value===!1||a.horizontal.size.value<=r.horizontal.value+1),a.horizontal.thumbStart=u(()=>a.horizontal.percentage.value*(r.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=u(()=>Math.round(j(r.horizontal.value*r.horizontal.value/a.horizontal.size.value,Re(r.horizontal.value),r.horizontal.value))),a.horizontal.style=u(()=>({...t.thumbStyle,...t.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=u(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=u(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const h=u(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),_=[[re,i=>{K(i,"vertical")},void 0,{vertical:!0,...Ie}]],x=[[re,i=>{K(i,"horizontal")},void 0,{horizontal:!0,...Ie}]];function f(){const i={};return Ee.forEach(b=>{const q=a[b];i[b+"Position"]=q.position.value,i[b+"Percentage"]=q.percentage.value,i[b+"Size"]=q.size.value,i[b+"ContainerSize"]=r[b].value}),i}const m=St(()=>{const i=f();i.ref=v,s("scroll",i)},0);function $(i,b,q){if(Ee.includes(i)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(i==="vertical"?Ae:_e)(z.value,b,q)}function N({height:i,width:b}){let q=!1;r.vertical.value!==i&&(r.vertical.value=i,q=!0),r.horizontal.value!==b&&(r.horizontal.value=b,q=!0),q===!0&&L()}function g({position:i}){let b=!1;a.vertical.position.value!==i.top&&(a.vertical.position.value=i.top,b=!0),a.horizontal.position.value!==i.left&&(a.horizontal.position.value=i.left,b=!0),b===!0&&L()}function M({height:i,width:b}){a.horizontal.size.value!==b&&(a.horizontal.size.value=b,L()),a.vertical.size.value!==i&&(a.vertical.size.value=i,L())}function K(i,b){const q=a[b];if(i.isFirst===!0){if(q.thumbHidden.value===!0)return;w=q.position.value,e.value=!0}else if(e.value!==!0)return;i.isFinal===!0&&(e.value=!1);const Q=Ce[b],J=r[b].value,me=(q.size.value-J)/(J-q.thumbSize.value),he=i.distance[Q.dist],ie=w+(i.direction===Q.dir?1:-1)*he*me;ee(ie,b)}function ne(i,b){const q=a[b];if(q.thumbHidden.value!==!0){const Q=i[Ce[b].offset];if(Q<q.thumbStart.value||Q>q.thumbStart.value+q.thumbSize.value){const J=Q-q.thumbSize.value/2;ee(J/r[b].value*q.size.value,b)}q.ref.value!==null&&q.ref.value.dispatchEvent(new MouseEvent(i.type,i))}}function G(i){ne(i,"vertical")}function P(i){ne(i,"horizontal")}function L(){y.value=!0,n!==null&&clearTimeout(n),n=setTimeout(()=>{n=null,y.value=!1},t.delay),t.onScroll!==void 0&&m()}function ee(i,b){z.value[Ce[b].scroll]=i}function E(){l.value=!0}function te(){l.value=!1}let W=null;return C(()=>v.$q.lang.rtl,i=>{z.value!==null&&_e(z.value,Math.abs(a.horizontal.position.value)*(i===!0?-1:1))}),zt(()=>{W={top:a.vertical.position.value,left:a.horizontal.position.value}}),wt(()=>{if(W===null)return;const i=z.value;i!==null&&(_e(i,W.left),Ae(i,W.top))}),ve(m.cancel),Object.assign(v,{getScrollTarget:()=>z.value,getScroll:f,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(i,b,q){$(i,b*(a[i].size.value-r[i].value)*(i==="horizontal"&&v.$q.lang.rtl===!0?-1:1),q)}}),()=>B("div",{class:S.value,onMouseenter:E,onMouseleave:te},[B("div",{ref:z,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[B("div",{class:"q-scrollarea__content absolute",style:h.value},$e(c.default,[B(de,{debounce:0,onResize:M})])),B(Ne,{axis:"both",onScroll:g})]),B(de,{debounce:0,onResize:N}),B("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:G}),B("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:P}),ce(B("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),_),ce(B("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),x)])}});const je=150;var Jt=Y({name:"QDrawer",inheritAttrs:!1,props:{...At,...Je,side:{type:String,default:"left",validator:t=>["left","right"].includes(t)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:t=>["default","desktop","mobile"].includes(t),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ot,"onLayout","miniState"],setup(t,{slots:c,emit:s,attrs:y}){const e=fe(),{proxy:{$q:l}}=e,r=Ze(t,l),{preventBodyScroll:a}=Lt(),{registerTimeout:v,removeTimeout:d}=Qt(),n=Be(Me,F);if(n===F)return console.error("QDrawer needs to be child of QLayout"),F;let w,z=null,S;const h=k(t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint),_=u(()=>t.mini===!0&&h.value!==!0),x=u(()=>_.value===!0?t.miniWidth:t.width),f=k(t.showIfAbove===!0&&h.value===!1?!0:t.modelValue===!0),m=u(()=>t.persistent!==!0&&(h.value===!0||J.value===!0));function $(o,p){if(K(),o!==!1&&n.animate(),H(0),h.value===!0){const O=n.instances[i.value];O!==void 0&&O.belowBreakpoint===!0&&O.hide(!1),I(1),n.isContainer.value!==!0&&a(!0)}else I(0),o!==!1&&ye(!1);v(()=>{o!==!1&&ye(!0),p!==!0&&s("show",o)},je)}function N(o,p){ne(),o!==!1&&n.animate(),I(0),H(L.value*x.value),ge(),p!==!0?v(()=>{s("hide",o)},je):d()}const{show:g,hide:M}=Ht({showing:f,hideOnRouteChange:m,handleShow:$,handleHide:N}),{addToHistory:K,removeFromHistory:ne}=Pt(f,M,m),G={belowBreakpoint:h,hide:M},P=u(()=>t.side==="right"),L=u(()=>(l.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),ee=k(0),E=k(!1),te=k(!1),W=k(x.value*L.value),i=u(()=>P.value===!0?"left":"right"),b=u(()=>f.value===!0&&h.value===!1&&t.overlay===!1?t.miniToOverlay===!0?t.miniWidth:x.value:0),q=u(()=>t.overlay===!0||t.miniToOverlay===!0||n.view.value.indexOf(P.value?"R":"L")>-1||l.platform.is.ios===!0&&n.isContainer.value===!0),Q=u(()=>t.overlay===!1&&f.value===!0&&h.value===!1),J=u(()=>t.overlay===!0&&f.value===!0&&h.value===!1),me=u(()=>"fullscreen q-drawer__backdrop"+(f.value===!1&&E.value===!1?" hidden":"")),he=u(()=>({backgroundColor:`rgba(0,0,0,${ee.value*.4})`})),ie=u(()=>P.value===!0?n.rows.value.top[2]==="r":n.rows.value.top[0]==="l"),tt=u(()=>P.value===!0?n.rows.value.bottom[2]==="r":n.rows.value.bottom[0]==="l"),at=u(()=>{const o={};return n.header.space===!0&&ie.value===!1&&(q.value===!0?o.top=`${n.header.offset}px`:n.header.space===!0&&(o.top=`${n.header.size}px`)),n.footer.space===!0&&tt.value===!1&&(q.value===!0?o.bottom=`${n.footer.offset}px`:n.footer.space===!0&&(o.bottom=`${n.footer.size}px`)),o}),lt=u(()=>{const o={width:`${x.value}px`,transform:`translateX(${W.value}px)`};return h.value===!0?o:Object.assign(o,at.value)}),ot=u(()=>"q-drawer__content fit "+(n.isContainer.value!==!0?"scroll":"overflow-auto")),rt=u(()=>`q-drawer q-drawer--${t.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(t.bordered===!0?" q-drawer--bordered":"")+(r.value===!0?" q-drawer--dark q-dark":"")+(E.value===!0?" no-transition":f.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(q.value===!0||Q.value!==!0?" fixed":"")+(t.overlay===!0||t.miniToOverlay===!0?" q-drawer--on-top":"")+(ie.value===!0?" q-drawer--top-padding":""))),nt=u(()=>{const o=l.lang.rtl===!0?t.side:i.value;return[[re,ct,void 0,{[o]:!0,mouse:!0}]]}),it=u(()=>{const o=l.lang.rtl===!0?i.value:t.side;return[[re,Te,void 0,{[o]:!0,mouse:!0}]]}),ut=u(()=>{const o=l.lang.rtl===!0?i.value:t.side;return[[re,Te,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function be(){dt(h,t.behavior==="mobile"||t.behavior!=="desktop"&&n.totalWidth.value<=t.breakpoint)}C(h,o=>{o===!0?(w=f.value,f.value===!0&&M(!1)):t.overlay===!1&&t.behavior!=="mobile"&&w!==!1&&(f.value===!0?(H(0),I(0),ge()):g(!1))}),C(()=>t.side,(o,p)=>{n.instances[p]===G&&(n.instances[p]=void 0,n[p].space=!1,n[p].offset=0),n.instances[o]=G,n[o].size=x.value,n[o].space=Q.value,n[o].offset=b.value}),C(n.totalWidth,()=>{(n.isContainer.value===!0||document.qScrollPrevented!==!0)&&be()}),C(()=>t.behavior+t.breakpoint,be),C(n.isContainer,o=>{f.value===!0&&a(o!==!0),o===!0&&be()}),C(n.scrollbarWidth,()=>{H(f.value===!0?0:void 0)}),C(b,o=>{R("offset",o)}),C(Q,o=>{s("onLayout",o),R("space",o)}),C(P,()=>{H()}),C(x,o=>{H(),pe(t.miniToOverlay,o)}),C(()=>t.miniToOverlay,o=>{pe(o,x.value)}),C(()=>l.lang.rtl,()=>{H()}),C(()=>t.mini,()=>{t.noMiniAnimation||t.modelValue===!0&&(st(),n.animate())}),C(_,o=>{s("miniState",o)});function H(o){o===void 0?Oe(()=>{o=f.value===!0?0:x.value,H(L.value*o)}):(n.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(o)===x.value)&&(o+=L.value*n.scrollbarWidth.value),W.value=o)}function I(o){ee.value=o}function ye(o){const p=o===!0?"remove":n.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function st(){z!==null&&clearTimeout(z),e.proxy&&e.proxy.$el&&e.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,z=setTimeout(()=>{z=null,te.value=!1,e&&e.proxy&&e.proxy.$el&&e.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(o){if(f.value!==!1)return;const p=x.value,O=j(o.distance.x,0,p);if(o.isFinal===!0){O>=Math.min(75,p)===!0?g():(n.animate(),I(0),H(L.value*p)),E.value=!1;return}H((l.lang.rtl===!0?P.value!==!0:P.value)?Math.max(p-O,0):Math.min(0,O-p)),I(j(O/p,0,1)),o.isFirst===!0&&(E.value=!0)}function Te(o){if(f.value!==!0)return;const p=x.value,O=o.direction===t.side,ue=(l.lang.rtl===!0?O!==!0:O)?j(o.distance.x,0,p):0;if(o.isFinal===!0){Math.abs(ue)<Math.min(75,p)===!0?(n.animate(),I(1),H(0)):M(),E.value=!1;return}H(L.value*ue),I(j(1-ue/p,0,1)),o.isFirst===!0&&(E.value=!0)}function ge(){a(!1),ye(!0)}function R(o,p){n.update(t.side,o,p)}function dt(o,p){o.value!==p&&(o.value=p)}function pe(o,p){R("size",o===!0?t.miniWidth:p)}return n.instances[t.side]=G,pe(t.miniToOverlay,x.value),R("space",Q.value),R("offset",b.value),t.showIfAbove===!0&&t.modelValue!==!0&&f.value===!0&&t["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!0),We(()=>{s("onLayout",Q.value),s("miniState",_.value),w=t.showIfAbove===!0;const o=()=>{(f.value===!0?$:N)(!1,!0)};if(n.totalWidth.value!==0){Oe(o);return}S=C(n.totalWidth,()=>{S(),S=void 0,f.value===!1&&t.showIfAbove===!0&&h.value===!1?g(!1):o()})}),ve(()=>{S!==void 0&&S(),z!==null&&(clearTimeout(z),z=null),f.value===!0&&ge(),n.instances[t.side]===G&&(n.instances[t.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const o=[];h.value===!0&&(t.noSwipeOpen===!1&&o.push(ce(B("div",{key:"open",class:`q-drawer__opener fixed-${t.side}`,"aria-hidden":"true"}),nt.value)),o.push(Qe("div",{ref:"backdrop",class:me.value,style:he.value,"aria-hidden":"true",onClick:M},void 0,"backdrop",t.noSwipeBackdrop!==!0&&f.value===!0,()=>ut.value)));const p=_.value===!0&&c.mini!==void 0,O=[B("div",{...y,key:""+p,class:[ot.value,y.class]},p===!0?c.mini():xe(c.default))];return t.elevated===!0&&f.value===!0&&O.push(B("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(Qe("aside",{ref:"content",class:rt.value,style:lt.value},O,"contentclose",t.noSwipeClose!==!0&&h.value===!0,()=>it.value)),B("div",{class:"q-drawer-container"},o)}}});const Zt={class:"absolute-bottom bg-transparent text-center"},ea={class:"text-weight-medium text-h5"},ta=Object.assign({name:"AppSidebar"},{__name:"Sidebar",props:{modelValue:{type:Boolean,default:!1}},emits:["update:model-value"],setup(t,{emit:c}){const s=t,y=et(),e=Xe(),l=[{name:"Category",route:"category",icon:"category"},{name:"Product",route:"product",icon:"inventory"},{name:"Recieved Orders",route:"recieved_orders",icon:"list_alt"},{name:"Customer",route:"customer",icon:"person"}],r=u(()=>s.modelValue),a=d=>{c("update:model-value",d)},v=d=>{switch(d){case"product":e.push({name:"product-list"});break;case"category":e.push({name:"category-list"});break;case"recieved_orders":e.push({name:"admin.order-list"});break;case"customer":e.push({name:"customer-list"});break}};return(d,n)=>(D(),X(Jt,{"model-value":r.value,"onUpdate:modelValue":a,width:300},{default:V(()=>[T(Mt,{class:"absolute-top bg-primary",style:{height:"150px"}},{default:V(()=>[Z("div",Zt,[T(_t,{size:"76px",class:"q-mb-sm",style:qt({background:A(Fe)(A(y).user.name),color:A(Dt)(A(Fe)(A(y).user.name))})},{default:V(()=>[oe(U(A(y).user.name.substring(0,2).toUpperCase()),1)]),_:1},8,["style"]),Z("div",ea,U(A(y).user.name),1),Z("div",null,U(A(y).user.phone),1)])]),_:1}),T(Gt,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},{default:V(()=>[T(Tt,{padding:""},{default:V(()=>[(D(),Ue(Ge,null,Ye(l,w=>ce(T($t,{clickable:"",key:w.name,onClick:z=>v(w.route)},{default:V(()=>[T(Pe,{avatar:"",style:{"min-width":"30px"}},{default:V(()=>[T(Ke,{name:w.icon},null,8,["name"])]),_:2},1024),T(Pe,null,{default:V(()=>[oe(U(w.name),1)]),_:2},1024)]),_:2},1032,["onClick"]),[[Ct]])),64))]),_:1})]),_:1})]),_:1},8,["model-value"]))}}),aa={class:"flex footer-navigation"},la=["onClick"],oa={class:"col position-relative"},Aa=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(t){const c=It(),s=Rt(),y=Xe(),e=et(),l=kt();!!localStorage.getItem("access-token")||y.replace({name:"login"});const a=k(!1),v=k(!1),d=k(!1),n=h=>{h.position.top>50?v.value=!0:v.value=!1},w=k("home");C(l,()=>{w.value=l.name},{immediate:!0});const z=[{title:"Home",route:"home",name:"home",icon:"mdi-home-outline",activeIcon:"mdi-home"},{title:"Search",route:"search",name:"search",icon:"search",activeIcon:"search"},{title:"Cart",route:"my-cart",name:"my-cart",icon:"mdi-cart-outline",activeIcon:"shopping_cart"},{title:"Profile",name:"my-profile",route:"my-profile",icon:"mdi-account-outline",activeIcon:"mdi-account"}],S=h=>{h.name==""&&(w.value=h.name),y.push({name:h.route})};return We(()=>{e.isAddress}),(h,_)=>{const x=xt("router-view");return D(),X(vt,{view:"lHh Lpr lFf",class:He({"page-scrolled":v.value})},{default:V(()=>[T(Ne,{onScroll:n}),T(Wt,{class:"app-header",reveal:!1,elevated:v.value},{default:V(()=>[T(Nt,null,{default:V(()=>[T(jt,null,{default:V(()=>[A(e).isAdmin?(D(),X(Bt,{key:0,onClick:_[0]||(_[0]=f=>d.value=!0),flat:"",round:"",dense:"",icon:"menu",class:"q-mr-sm"})):le("",!0),oe(" Hi "+U(A(e).user.name)+"! ",1)]),_:1})]),_:1})]),_:1},8,["elevated"]),T(ft,null,{default:V(()=>[T(x)]),_:1}),T(Yt,{unelevated:"",class:"bg-white"},{default:V(()=>[Z("div",aa,[(D(),Ue(Ge,null,Ye(z,(f,m)=>Z("div",{key:m,class:He(["col position-relative",{active:w.value==f.name}]),onClick:$=>S(f)},[Z("div",oa,[T(Ke,{size:"24px",name:w.value==f.name?f.activeIcon:f.icon},null,8,["name"]),A(s).cartItems.length&&f.name=="my-cart"?(D(),X(Ut,{key:0,rounded:"",color:"red",floating:""},{default:V(()=>[oe(U(A(s).cartItems.length),1)]),_:1})):le("",!0),oe(" "+U(f.title),1)])],10,la)),64))])]),_:1}),A(e).isAddress?le("",!0):(D(),X(Et,{key:0,modelValue:a.value,"onUpdate:modelValue":_[1]||(_[1]=f=>a.value=f),data:A(e).address[0],"is-update":!1},null,8,["modelValue","data"])),A(c).detailDialog?(D(),X(Ft,{key:1})):le("",!0),d.value?(D(),X(ta,{key:2,modelValue:d.value,"onUpdate:modelValue":_[2]||(_[2]=f=>d.value=f)},null,8,["modelValue"])):le("",!0)]),_:1},8,["class"])}}});export{Aa as default};
