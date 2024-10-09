import{aU as b,A as $,aW as w,c as a,h as n,aY as B,g as _}from"./index.b415cf6e.js";import{b as q}from"./format.2a3572e1.js";const z={...b,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},c=50,m=2*c,f=m*Math.PI,N=Math.round(f*1e3)/1e3;var M=$({name:"QCircularProgress",props:{...z,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:o}){const{proxy:{$q:u}}=_(),g=w(e),h=a(()=>{const r=(u.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-r}deg)`:`rotate3d(0, 0, 1, ${r-90}deg)`}}),k=a(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),t=a(()=>m/(1-e.thickness/2)),y=a(()=>`${t.value/2} ${t.value/2} ${t.value} ${t.value}`),s=a(()=>q(e.value,e.min,e.max)),C=a(()=>f*(1-(s.value-e.min)/(e.max-e.min))),i=a(()=>e.thickness/2*t.value);function d({thickness:r,offset:l,color:v,cls:S,rounded:x}){return n("circle",{class:"q-circular-progress__"+S+(v!==void 0?` text-${v}`:""),style:k.value,fill:"transparent",stroke:"currentColor","stroke-width":r,"stroke-dasharray":N,"stroke-dashoffset":l,"stroke-linecap":x,cx:t.value,cy:t.value,r:c})}return()=>{const r=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&r.push(n("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:c-i.value/2,cx:t.value,cy:t.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&r.push(d({cls:"track",thickness:i.value,offset:0,color:e.trackColor})),r.push(d({cls:"circle",thickness:i.value,offset:C.value,color:e.color,rounded:e.rounded===!0?"round":void 0}));const l=[n("svg",{class:"q-circular-progress__svg",style:h.value,viewBox:y.value,"aria-hidden":"true"},r)];return e.showValue===!0&&l.push(n("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},o.default!==void 0?o.default():[n("div",s.value)])),n("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:g.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:s.value},B(o.internal,l))}}});export{M as Q};
