import{u as h,r as y,c as g,n as l,p as i,f as s,s as n,q as e,Q as c,F as p,a9 as k,aa as u,a8 as o,v as m}from"./index.cb068a47.js";import{Q as q,a as _}from"./QCard.f6db5bb5.js";import{_ as w}from"./ShippingAddress.2961e1f8.js";import{u as b}from"./authStore.6fda137d.js";import"./use-dark.fc2509f2.js";import"./QSeparator.fe12541f.js";import"./QInput.748263ea.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.aea90111.js";import"./QForm.d9e624f7.js";import"./QCardActions.a2615f39.js";import"./QDialog.49f63179.js";import"./axios.boot.0336990f.js";const A={class:"wrapper-my-profile"},C={class:"row items-center"},Q=e("div",{class:"text-h5 q-ml-md"},"My Address",-1),V={style:{display:"flex","flex-direction":"column",width:"100%"}},B={style:{display:"flex","justify-content":"space-between"}},N={class:"flex items-center"},S={class:"address_detail"},$={class:"q-mb-none"},z={class:"q-mb-none text-grey-8"},D={class:"q-pa-lg text-center"},E={class:"text-center"},F=e("div",null,"No Address",-1),j={class:"q-pa-lg text-center"},ee={__name:"AddressScreen",setup(I){const v=b(),f=h(),x=()=>{f.back()},d=y(!1),r=g(()=>v.address);return(L,a)=>(l(),i("div",A,[s(q,{class:"bg-grey-3"},{default:n(()=>[s(_,{class:"row items-center header-action-bar q-px-xs"},{default:n(()=>[e("div",C,[s(c,{round:"",unelevated:"",icon:"arrow_back",onClick:x}),Q])]),_:1}),s(_,{style:{height:"calc(100vh - 66px)",position:"relative"},class:"scroll q-pa-none"},{default:n(()=>[r.value&&r.value.length?(l(),i(p,{key:0},[(l(!0),i(p,null,k(r.value,t=>(l(),i("div",{key:t.name,class:"location_wrapper q-pa-lg"},[e("div",null,[s(u,{size:"28px",class:"location text-grey-8",name:"location_on"})]),e("div",V,[e("div",B,[e("div",N,[e("div",S,[e("p",$,o(t.name)+" || "+o(t.phone),1),e("p",z,o(t.address_line1)+" "+o(t.address_line2)+" "+o(t.city)+" "+o(t.postal_code),1)])])])])]))),128)),e("div",D,[s(c,{class:"q-px-lg",rounded:"",color:"primary",onClick:a[0]||(a[0]=t=>d.value=!0)},{default:n(()=>[m(" Edit Address ")]),_:1})])],64)):(l(),i(p,{key:1},[e("div",E,[s(u,{color:"primary",size:"100px",name:"map"}),F]),e("div",j,[s(c,{class:"text-center",rounded:"",color:"primary",style:{width:"250px"},onClick:a[1]||(a[1]=t=>d.value=!0)},{default:n(()=>[m(" Add Address ")]),_:1})])],64))]),_:1})]),_:1}),s(w,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=t=>d.value=t),data:r.value[0],"is-update":!!r.value[0]},null,8,["modelValue","data","is-update"])]))}};export{ee as default};
