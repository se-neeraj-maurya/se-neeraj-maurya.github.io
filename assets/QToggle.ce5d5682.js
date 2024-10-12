import{Y as j,r as z,aW as F,c as l,aA as r,h as u,H as Q,B as D,X as R,aU as E,aV as K,g as L,aX as N,V as p,A as X,ai as H}from"./index.e93ee3cf.js";import{u as M,o as U}from"./option-sizes.6be8513c.js";const W={...R,...E,...K,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Y=["update:modelValue"];function G(a,f){const{props:e,slots:i,emit:c,proxy:d}=L(),{$q:x}=d,I=j(e,x),b=z(null),{refocusTargetEl:k,refocusTarget:C}=M(e,b),S=F(e,U),s=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),g=l(()=>{const t=r(e.val);return s.value===!0?e.modelValue.findIndex(o=>r(o)===t):-1}),n=l(()=>s.value===!0?g.value>-1:r(e.modelValue)===r(e.trueValue)),v=l(()=>s.value===!0?g.value===-1:r(e.modelValue)===r(e.falseValue)),h=l(()=>n.value===!1&&v.value===!1),q=l(()=>e.disable===!0?-1:e.tabindex||0),_=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(I.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=l(()=>{const t=n.value===!0?"truthy":v.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?n.value===!0:v.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),y=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":n.value,"^checked":n.value===!0?"checked":void 0,name:e.name,value:s.value===!0?e.val:e.trueValue}),t}),A=N(y),w=l(()=>{const t={tabindex:q.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":h.value===!0?"mixed":n.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function m(t){t!==void 0&&(p(t),C(t)),e.disable!==!0&&c("update:modelValue",B(),t)}function B(){if(s.value===!0){if(n.value===!0){const t=e.modelValue.slice();return t.splice(g.value,1),t}return e.modelValue.concat([e.val])}if(n.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(v.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function O(t){(t.keyCode===13||t.keyCode===32)&&p(t)}function P(t){(t.keyCode===13||t.keyCode===32)&&m(t)}const T=f(n,h);return Object.assign(d,{toggle:m}),()=>{const t=T();e.disable!==!0&&A(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[u("div",{class:$.value,style:S.value,"aria-hidden":"true"},t)];k.value!==null&&o.push(k.value);const V=e.label!==void 0?Q(i.default,[e.label]):D(i.default);return V!==void 0&&o.push(u("div",{class:`q-${a}__label q-anchor--skip`},V)),u("div",{ref:b,class:_.value,...w.value,onClick:m,onKeydown:O,onKeyup:P},o)}}var ee=X({name:"QToggle",props:{...W,icon:String,iconColor:String},emits:Y,setup(a){function f(e,i){const c=l(()=>(e.value===!0?a.checkedIcon:i.value===!0?a.indeterminateIcon:a.uncheckedIcon)||a.icon),d=l(()=>e.value===!0?a.iconColor:null);return()=>[u("div",{class:"q-toggle__track"}),u("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[u(H,{name:c.value,color:d.value})]:void 0)]}return G("toggle",f)}});export{ee as Q};
