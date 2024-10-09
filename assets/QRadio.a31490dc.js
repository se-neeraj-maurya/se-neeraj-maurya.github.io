import{h as t,A as w,X as B,aU as V,aV as R,Y as j,aW as z,r as A,c as o,aA as b,ai as P,H as Q,B as T,g as $,aX as D,V as f}from"./index.7f71ea72.js";import{o as F,u as M}from"./option-sizes.bdd9339d.js";const K=t("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24"},[t("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),t("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var X=w({name:"QRadio",props:{...B,...V,...R,modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},emits:["update:modelValue"],setup(e,{slots:r,emit:m}){const{proxy:u}=$(),k=j(e,u.$q),h=z(e,F),s=A(null),{refocusTargetEl:c,refocusTarget:g}=M(e,s),n=o(()=>b(e.modelValue)===b(e.val)),q=o(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(k.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),_=o(()=>{const a=e.color!==void 0&&(e.keepColor===!0||n.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${n.value===!0?"truthy":"falsy"}${a}`}),d=o(()=>(n.value===!0?e.checkedIcon:e.uncheckedIcon)||null),y=o(()=>e.disable===!0?-1:e.tabindex||0),S=o(()=>{const a={type:"radio"};return e.name!==void 0&&Object.assign(a,{".checked":n.value===!0,"^checked":n.value===!0?"checked":void 0,name:e.name,value:e.val}),a}),x=D(S);function l(a){a!==void 0&&(f(a),g(a)),e.disable!==!0&&n.value!==!0&&m("update:modelValue",e.val,a)}function C(a){(a.keyCode===13||a.keyCode===32)&&f(a)}function I(a){(a.keyCode===13||a.keyCode===32)&&l(a)}return Object.assign(u,{set:l}),()=>{const a=d.value!==null?[t("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[t(P,{class:"q-radio__icon",name:d.value})])]:[K];e.disable!==!0&&x(a,"unshift"," q-radio__native q-ma-none q-pa-none");const i=[t("div",{class:_.value,style:h.value,"aria-hidden":"true"},a)];c.value!==null&&i.push(c.value);const v=e.label!==void 0?Q(r.default,[e.label]):T(r.default);return v!==void 0&&i.push(t("div",{class:"q-radio__label q-anchor--skip"},v)),t("div",{ref:s,class:q.value,tabindex:y.value,role:"radio","aria-label":e.label,"aria-checked":n.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:l,onKeydown:C,onKeyup:I},i)}}});export{X as Q};
