import{a as c,Q as b}from"./QCard.47d0caec.js";import{Q}from"./QSeparator.6f357aad.js";import{Q as u}from"./QInput.1606e594.js";import{w as q,r as i,c as y,n as A,t as S,s as t,f as l,q as v,a8 as U,aq as w,Q as x,v as B}from"./index.0b50b950.js";import{Q as N}from"./QForm.2af90c39.js";import{Q as k}from"./QCardActions.0292b5eb.js";import{Q as C}from"./QDialog.6ab3ebea.js";import{u as P}from"./authStore.b9f59675.js";const F={class:"text-h5"},D={class:"q-pa-md"},z={__name:"ShippingAddress",props:{modelValue:{type:Boolean,default:!1},isUpdate:{type:Boolean,default:!1},data:{type:Object,default:()=>({})}},emits:["update:model-value"],setup(m,{emit:h}){const s=m,p=P();q(()=>s.modelValue,o=>{o&&s.isUpdate&&(a.value.id=s.data.id,a.value.name=s.data.name,a.value.address_line1=s.data.address_line1,a.value.address_line2=s.data.address_line2,a.value.postal_code=s.data.postal_code,a.value.phone=s.data.phone)});const n=i(),r=i(),a=i({name:"",phone:"",address_line1:"",address_line2:"",postal_code:""}),V=y(()=>s.modelValue),f=o=>{h("update:model-value",o)},_=()=>{r.value.resetValidation()},g=()=>{r.value.validate().then(async o=>{if(o)try{n.value=!0,s.isUpdate?await p.updateAddress(a.value):await p.createAddress(a.value),f(!1)}finally{n.value=!1}})};return(o,d)=>(A(),S(C,{position:"bottom","model-value":V.value,"onUpdate:modelValue":f},{default:t(()=>[l(b,null,{default:t(()=>[l(c,null,{default:t(()=>[v("div",F,U(m.isUpdate?"Edit":"Add")+" Shipping Address ",1)]),_:1}),l(Q),l(c,{style:{"max-height":"70vh"},class:"scroll"},{default:t(()=>[l(N,{onSubmit:w(g,["prevent"]),onReset:_,ref_key:"myForm",ref:r},{default:t(()=>[v("div",D,[l(u,{modelValue:a.value.name,"onUpdate:modelValue":d[0]||(d[0]=e=>a.value.name=e),outlined:"",dense:"",placeholder:"Name",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Name is required"]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.phone,"onUpdate:modelValue":d[1]||(d[1]=e=>a.value.phone=e),outlined:"",dense:"",mask:"##########",prefix:"+91",placeholder:"Phone Number",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Phone number is required",e=>e&&String(e).length==10||"Phone number must be 10 digit."]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.address_line1,"onUpdate:modelValue":d[2]||(d[2]=e=>a.value.address_line1=e),outlined:"",dense:"",placeholder:"Address Line 1",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Address line 1 is required"]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.address_line2,"onUpdate:modelValue":d[3]||(d[3]=e=>a.value.address_line2=e),outlined:"",dense:"",placeholder:"Address Line 2",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Address line 2 is required"]},null,8,["modelValue","rules"]),l(u,{modelValue:a.value.postal_code,"onUpdate:modelValue":d[4]||(d[4]=e=>a.value.postal_code=e),outlined:"",dense:"",placeholder:"Postal code",class:"q-mb-sm"},null,8,["modelValue"]),l(x,{class:"full-width q-mt-lg",color:"primary","no-caps":"",unelevated:"",rounded:"",type:"submit",loading:n.value},{default:t(()=>[B(" Save Address ")]),_:1},8,["loading"])])]),_:1},8,["onSubmit"])]),_:1}),l(k)]),_:1})]),_:1},8,["model-value"]))}};export{z as _};
