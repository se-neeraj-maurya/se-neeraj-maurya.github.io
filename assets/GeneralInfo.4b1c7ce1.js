import{k as g,u as y,l as V,r as u,o as x,p as k,q as w,f as t,t as n,ax as p,s as a,Q as v,aD as N,aF as r,v as Q,aw as B}from"./index.e93ee3cf.js";const P={class:"wrapper-my-profile"},U={class:"row items-center"},C=a("div",{class:"text-h5 q-ml-md"},"Genral Information",-1),D={class:"q-px-md q-px-lg"},F=a("label",{class:"q-label"},"Name",-1),S=a("label",{class:"q-label"},"Phone Number",-1),E={class:"q-pb-md"},I=a("label",{class:"q-label"},"Email",-1),R={class:"q-pb-sm"},G=a("label",{class:"q-label"},"Description",-1),T={__name:"GeneralInfo",setup(A){const d=g(),c=y(),h=V(),m=u(),i=u(),s=u({name:null,email:null,phone:null,description:null}),_=()=>{h.back()},f=async()=>{m.value.validate().then(l=>{l&&q()})},b=()=>{},q=async()=>{try{i.value=!0;const l=s.value,o=await c.updateProfile(l);d.notify({progress:!0,type:"positive",position:"top",message:o.message,color:"green",timeout:2e3})}catch(l){d.notify({progress:!0,position:"top",type:"negative",message:l.data.message,color:"red",timeout:2e3})}finally{i.value=!1}};return x(()=>{const l=c.user;s.value={name:l.name,email:l.email,phone:l.phone,description:l.description}}),(l,o)=>(k(),w("div",P,[t(B,{class:"bg-grey-3"},{default:n(()=>[t(p,{class:"row items-center header-action-bar q-px-xs"},{default:n(()=>[a("div",U,[t(v,{round:"",unelevated:"",icon:"arrow_back",onClick:_}),C])]),_:1}),t(p,{style:{height:"calc(100vh - 66px)",position:"relative"},class:"scroll q-pa-none"},{default:n(()=>[t(N,{onSubmit:f,onReset:b,ref_key:"myForm",ref:m},{default:n(()=>[a("div",D,[a("div",null,[F,t(r,{modelValue:s.value.name,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value.name=e),outlined:"",dense:"",placeholder:"Name",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Name is required"]},null,8,["modelValue","rules"])]),a("div",null,[S,t(r,{modelValue:s.value.phone,"onUpdate:modelValue":o[1]||(o[1]=e=>s.value.phone=e),outlined:"",dense:"",disable:"",placeholder:"Phone",prefix:"+91",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Phone is required"]},null,8,["modelValue","rules"])]),a("div",E,[I,t(r,{modelValue:s.value.email,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value.email=e),outlined:"",dense:"",placeholder:"Email",class:"q-mb-sm"},null,8,["modelValue"])]),a("div",R,[G,t(r,{type:"textarea",modelValue:s.value.description,"onUpdate:modelValue":o[3]||(o[3]=e=>s.value.description=e),outlined:"",dense:"",placeholder:"Description",class:"q-mb-lg"},null,8,["modelValue"])]),t(v,{type:"submit",loading:i.value,color:"primary",unevevated:"",class:"full-width",rounded:""},{default:n(()=>[Q("Update")]),_:1},8,["loading"])])]),_:1},512)]),_:1})]),_:1})]))}};export{T as default};
