import{u as b,w as y,r as i,c as A,p as q,x as S,t as o,f as l,aw as Q,ax as v,s as f,ag as U,ay as w,aD as x,aE as B,aF as u,Q as N,v as k,az as C}from"./index.b415cf6e.js";import{Q as F}from"./QCardActions.a6f82528.js";const P={class:"text-h5"},D={class:"q-pa-md"},M={__name:"ShippingAddress",props:{modelValue:{type:Boolean,default:!1},isUpdate:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:model-value"],setup(m,{emit:h}){const s=m,p=b();y(()=>s.modelValue,t=>{t&&s.isUpdate&&(a.value.id=s.data.id,a.value.name=s.data.name,a.value.address_line1=s.data.address_line1,a.value.address_line2=s.data.address_line2,a.value.postal_code=s.data.postal_code,a.value.phone=s.data.phone)});const n=i(),r=i(),a=i({name:"",phone:"",address_line1:"",address_line2:"",postal_code:""}),V=A(()=>s.modelValue),c=t=>{h("update:model-value",t)},_=()=>{r.value.resetValidation()},g=()=>{r.value.validate().then(async t=>{if(t)try{n.value=!0,s.isUpdate?await p.updateAddress(a.value):await p.createAddress(a.value),c(!1)}finally{n.value=!1}})};return(t,d)=>(q(),S(C,{position:"bottom","model-value":V.value,"onUpdate:modelValue":c},{default:o(()=>[l(Q,null,{default:o(()=>[l(v,null,{default:o(()=>[f("div",P,U(m.isUpdate?"Edit":"Add")+" Shipping Address ",1)]),_:1}),l(w),l(v,{style:{"max-height":"70vh"},class:"scroll"},{default:o(()=>[l(x,{onSubmit:B(g,["prevent"]),onReset:_,ref_key:"myForm",ref:r},{default:o(()=>[f("div",D,[l(u,{modelValue:a.value.name,"onUpdate:modelValue":d[0]||(d[0]=e=>a.value.name=e),outlined:"",dense:"",placeholder:"Name",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Name is required"]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.phone,"onUpdate:modelValue":d[1]||(d[1]=e=>a.value.phone=e),outlined:"",dense:"",mask:"##########",prefix:"+91",placeholder:"Phone Number",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Phone number is required",e=>e&&String(e).length==10||"Phone number must be 10 digit."]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.address_line1,"onUpdate:modelValue":d[2]||(d[2]=e=>a.value.address_line1=e),outlined:"",dense:"",placeholder:"Address Line 1",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Address line 1 is required"]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.address_line2,"onUpdate:modelValue":d[3]||(d[3]=e=>a.value.address_line2=e),outlined:"",dense:"",placeholder:"Address Line 2",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Address line 2 is required"]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.postal_code,"onUpdate:modelValue":d[4]||(d[4]=e=>a.value.postal_code=e),outlined:"",dense:"",placeholder:"Postal code",class:"q-mb-sm"},null,8,["modelValue"]),l(N,{class:"full-width q-mt-lg",color:"primary","no-caps":"",unelevated:"",rounded:"",type:"submit",loading:n.value},{default:o(()=>[k(" Save Address ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1}),l(F)]),_:1})]),_:1},8,["model-value"]))}};export{M as _};
