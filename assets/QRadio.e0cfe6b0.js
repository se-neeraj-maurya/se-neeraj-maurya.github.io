import{h as t,y as w,aR as R,aS as z,r as B,c as o,aa as j,G as P,z as Q,g as T,X as b,an as f}from"./index.0b50b950.js";import{u as V,a as $}from"./use-dark.a1890830.js";import{o as D,u as F}from"./option-sizes.21b4f8cf.js";import{u as M,b as A}from"./use-form.cb121783.js";const K=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var N=w({name:"QRadio",props:{...V,...R,...M,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:i,emit:m}){const{proxy:u}=T(),k=$(e,u.$q),h=z(e,D),s=B(null),{refocusTargetEl:c,refocusTarget:g}=F(e,s),n=o(()=>f(e.modelValue)===f(e.val)),q=o(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=o(()=>{const a=e.color!==void 0&&(e.keepColor===!0||n.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${n.value===!0?"truthy":"falsy"}${a}`}),d=o(()=>(n.value===!0?e.checkedIcon:e.uncheckedIcon)||null),y=o(()=>e.disable===!0?-1:e.tabindex||0),S=o(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{".checked":n.value===!0,"^checked":n.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),x=A(S);function l(a){a!==void 0&&(b(a),g(a)),e.disable!==!0&&n.value!==!0&&m("update:modelValue",e.val,a)}function C(a){(a.keyCode===13||a.keyCode===32)&&b(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&l(a)}return Object.assign(u,{set:l}),()=>{const a=d.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t(j,{class:"q-radio__icon",name:d.value})])]:[K];e.disable!==!0&&x(a,"unshift"," q-radio__native q-ma-none q-pa-none");const r=[t("div",{class:_.value,style:h.value,"aria-hidden":"true"},a)];c.value!==null&&r.push(c.value);const v=e.label!==void 0?P(i.default,[e.label]):Q(i.default);return v!==void 0&&r.push(t("div",{class:"q-radio__label q-anchor--skip"},v)),t("div",{ref:s,class:q.value,tabindex:y.value,role:"radio","aria-label":e.label,"aria-checked":n.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:l,onKeydown:C,onKeyup:I},r)}}});export{N as Q};
