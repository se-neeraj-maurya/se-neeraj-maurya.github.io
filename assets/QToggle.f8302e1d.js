import{r as Q,aR as T,c as l,h as u,G as j,z as F,aQ as R,g as D,V,am as r,y as E,a9 as K}from"./index.5dbc4d9f.js";import{a as L,u as N}from"./use-dark.a1b71146.js";import{u as G,o as M}from"./option-sizes.b8a6ec60.js";import{u as H,b as J}from"./use-form.f625a164.js";const U={...N,...R,...H,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},W=["update:modelValue"];function X(a,f){const{props:e,slots:i,emit:c,proxy:d}=D(),{$q:x}=d,I=L(e,x),b=Q(null),{refocusTargetEl:k,refocusTarget:C}=G(e,b),S=T(e,M),s=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),g=l(()=>{const t=r(e.val);return s.value===!0?e.modelValue.findIndex(n=>r(n)===t):-1}),o=l(()=>s.value===!0?g.value>-1:r(e.modelValue)===r(e.trueValue)),v=l(()=>s.value===!0?g.value===-1:r(e.modelValue)===r(e.falseValue)),h=l(()=>o.value===!1&&v.value===!1),q=l(()=>e.disable===!0?-1:e.tabindex||0),_=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(I.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),$=l(()=>{const t=o.value===!0?"truthy":v.value===!0?"falsy":"indet",n=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?o.value===!0:v.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${n}`}),y=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":o.value,"^checked":o.value===!0?"checked":void 0,name:e.name,value:s.value===!0?e.val:e.trueValue}),t}),w=J(y),O=l(()=>{const t={tabindex:q.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":h.value===!0?"mixed":o.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function m(t){t!==void 0&&(V(t),C(t)),e.disable!==!0&&c("update:modelValue",z(),t)}function z(){if(s.value===!0){if(o.value===!0){const t=e.modelValue.slice();return t.splice(g.value,1),t}return e.modelValue.concat([e.val])}if(o.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(v.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function A(t){(t.keyCode===13||t.keyCode===32)&&V(t)}function B(t){(t.keyCode===13||t.keyCode===32)&&m(t)}const P=f(o,h);return Object.assign(d,{toggle:m}),()=>{const t=P();e.disable!==!0&&w(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const n=[u("div",{class:$.value,style:S.value,"aria-hidden":"true"},t)];k.value!==null&&n.push(k.value);const p=e.label!==void 0?j(i.default,[e.label]):F(i.default);return p!==void 0&&n.push(u("div",{class:`q-${a}__label q-anchor--skip`},p)),u("div",{ref:b,class:_.value,...O.value,onClick:m,onKeydown:A,onKeyup:B},n)}}var ae=E({name:"QToggle",props:{...U,icon:String,iconColor:String},emits:W,setup(a){function f(e,i){const c=l(()=>(e.value===!0?a.checkedIcon:i.value===!0?a.indeterminateIcon:a.uncheckedIcon)||a.icon),d=l(()=>e.value===!0?a.iconColor:null);return()=>[u("div",{class:"q-toggle__track"}),u("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},c.value!==void 0?[u(K,{name:c.value,color:d.value})]:void 0)]}return X("toggle",f)}});export{ae as Q};
