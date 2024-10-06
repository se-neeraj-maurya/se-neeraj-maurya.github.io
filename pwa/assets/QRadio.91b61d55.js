import{h as t,y as w,aO as z,aP as B,r as P,c as n,a7 as R,E as j,z as Q,g as T,S as b,ak as f}from"./index.4b170bd6.js";import{u as V,a as $}from"./use-dark.005e8194.js";import{o as D,u as F}from"./option-sizes.226bd687.js";import{u as M,b as O}from"./use-form.789c9149.js";const A=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var G=w({name:"QRadio",props:{...V,...z,...M,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:i,emit:m}){const{proxy:u}=T(),k=$(e,u.$q),h=B(e,D),s=P(null),{refocusTargetEl:c,refocusTarget:g}=F(e,s),o=n(()=>f(e.modelValue)===f(e.val)),q=n(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=n(()=>{const a=e.color!==void 0&&(e.keepColor===!0||o.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${o.value===!0?"truthy":"falsy"}${a}`}),d=n(()=>(o.value===!0?e.checkedIcon:e.uncheckedIcon)||null),y=n(()=>e.disable===!0?-1:e.tabindex||0),S=n(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{".checked":o.value===!0,"^checked":o.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),x=O(S);function l(a){a!==void 0&&(b(a),g(a)),e.disable!==!0&&o.value!==!0&&m("update:modelValue",e.val,a)}function C(a){(a.keyCode===13||a.keyCode===32)&&b(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&l(a)}return Object.assign(u,{set:l}),()=>{const a=d.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t(R,{class:"q-radio__icon",name:d.value})])]:[A];e.disable!==!0&&x(a,"unshift"," q-radio__native q-ma-none q-pa-none");const r=[t("div",{class:_.value,style:h.value,"aria-hidden":"true"},a)];c.value!==null&&r.push(c.value);const v=e.label!==void 0?j(i.default,[e.label]):Q(i.default);return v!==void 0&&r.push(t("div",{class:"q-radio__label q-anchor--skip"},v)),t("div",{ref:s,class:q.value,tabindex:y.value,role:"radio","aria-label":e.label,"aria-checked":o.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:l,onKeydown:C,onKeyup:I},r)}}});export{G as Q};
