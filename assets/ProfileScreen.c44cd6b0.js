import{c as w,n as v,t as z,s as a,f as t,aa as s,q as e,u as k,r as C,p as Q,Q as g,a5 as S,a6 as V,a7 as o,v as p,a8 as u}from"./index.19c34057.js";import{a as c,Q as q}from"./QCard.51e3b46a.js";import{Q as A}from"./QSeparator.878efa33.js";import{Q as B}from"./QCardActions.f12f6d79.js";import{Q as M}from"./QDialog.04c0b3f2.js";import{A as f,a as I}from"./formatting.897fab98.js";import{u as N}from"./authStore.f7fbb9db.js";import"./use-dark.c31cdf99.js";import"./focus-manager.02955f48.js";import"./axios.boot.c72b97f5.js";const D=e("div",{class:"q"},[e("div",{class:"text-h5 text-weight-medium text-primary q-px-sm q-pb-lg q-pt-sm"}," Contact Information "),e("table",{cellpadding:"6",class:"text-h6 text-grey-8"},[e("tr",null,[e("td",{class:"text-weight-bold"},"Phone"),e("td",{class:"text-weight-bold"},":"),e("td",{class:"text-weight-medium"},"+91 6392032056")]),e("tr",null,[e("td",{class:"text-weight-bold"},"Message"),e("td",{class:"text-weight-bold"},":"),e("td",{class:"text-weight-medium"},"+91 6392032056")]),e("tr",null,[e("td",{class:"text-weight-bold"},"Email"),e("td",{class:"text-weight-bold"},":"),e("td",{class:"text-weight-medium"},"maurya.store@gmail.com")])])],-1),O=Object.assign({name:"SupportScreen"},{__name:"Supports",props:{modelValue:{type:Boolean,default:!1}},emits:["update:model-value"],setup(x,{emit:l}){const i=x,r=w(()=>i.modelValue),m=d=>{l("update:model-value",d)};return(d,h)=>(v(),z(M,{position:"bottom","model-value":r.value,"onUpdate:modelValue":m},{default:a(()=>[t(q,{class:"dialog-radius-50"},{default:a(()=>[t(c,{class:"flex justify-between text-primary q-px-xl q-py-lg"},{default:a(()=>[t(s,{style:{"font-size":"30px",padding:"16px","border-radius":"36px"},class:"light-primary q-mx-sm",size:"40px",name:"mdi-phone"}),t(s,{style:{"font-size":"30px",padding:"16px","border-radius":"36px"},class:"light-primary",size:"40px",name:"mdi-message-processing-outline"}),t(s,{style:{"font-size":"30px",padding:"16px","border-radius":"36px"},class:"light-primary q-mx-sm",size:"40px",name:"mdi-email-outline"})]),_:1}),t(A),t(c,{style:{"max-height":"50vh"},class:"q-px-lg"},{default:a(()=>[D]),_:1}),t(B)]),_:1})]),_:1},8,["model-value"]))}}),P={class:"wrapper-my-profile"},T={class:"row items-center"},U=e("div",{class:"text-h5 q-ml-md"},"My Profile",-1),$={class:"profile-card flex items-center q-ma-md q-pa-md bg-white"},j={class:"q-pl-md text-primary"},E={class:"text-title"},G={class:"text-subtitle1 q-mt-sm"},L={class:"flex q-mx-sm"},R=e("div",{class:"text-h6 q-mt-sm"},"My Order",-1),F=e("div",{class:"text-h6 q-mt-sm"},"Supports",-1),H=e("div",{class:"text-h6 q-pl-sm"},"My Address",-1),J=e("div",{class:"tt-spacer"},null,-1),K=e("div",{class:"text-h6 q-pl-sm"},"Genral Info",-1),W=e("div",{class:"tt-spacer"},null,-1),X={class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary"},Y=e("div",{class:"text-h6 q-pl-sm"},"Notification",-1),Z=e("div",{class:"tt-spacer"},null,-1),ee={class:"text-center q-mt-xl"},pe={__name:"ProfileScreen",setup(x){const l=k(),i=N(),r=C(!1),m=()=>{l.back()},d=()=>{l.push({name:"my-address"})},h=()=>{l.push({name:"general-info"})},y=()=>{l.push({name:"my-orders"})},b=async()=>{localStorage.clear(),await l.push({name:"login"}),window.location.reload()};return(te,n)=>(v(),Q("div",P,[t(q,{class:"bg-grey-3"},{default:a(()=>[t(c,{class:"row items-center header-action-bar q-px-xs"},{default:a(()=>[e("div",T,[t(g,{round:"",unelevated:"",icon:"arrow_back",onClick:m}),U])]),_:1}),t(c,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:a(()=>[e("div",$,[t(S,{size:"80px",style:V({background:o(f)(o(i).user.name),color:o(I)(o(f)(o(i).user.name))})},{default:a(()=>[p(u(o(i).user.name.substring(0,2).toUpperCase()),1)]),_:1},8,["style"]),e("div",j,[e("div",E,u(o(i).user.name),1),e("div",G,[t(s,{size:"16px",name:"phone"}),p(" "+u(o(i).user.phone),1)])])]),e("div",L,[e("div",{class:"profile-card col q-mx-sm q-px-md q-py-lg bg-white text-center text-primary",onClick:y},[t(s,{size:"30px",name:"shopping_bag"}),R]),e("div",{class:"profile-card col q-mx-sm q-px-md q-py-lg bg-white text-center text-primary",onClick:n[0]||(n[0]=_=>r.value=!0)},[t(s,{size:"30px",name:"phone_in_talk"}),F])]),e("div",{class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary",onClick:d},[t(s,{size:"20px",name:"location_on"}),H,J,t(s,{size:"24px",name:"chevron_right"})]),e("div",{class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary",onClick:h},[t(s,{size:"20px",name:"info"}),K,W,t(s,{size:"24px",name:"chevron_right"})]),e("div",X,[t(s,{size:"20px",name:"notifications"}),Y,Z,t(s,{size:"24px",name:"chevron_right"})]),e("div",ee,[t(g,{class:"q-px-lg",unelevated:"",rounded:"",color:"red",onClick:b},{default:a(()=>[p(" Logout ")]),_:1})])]),_:1})]),_:1}),t(O,{modelValue:r.value,"onUpdate:modelValue":n[1]||(n[1]=_=>r.value=_)},null,8,["modelValue"])]))}};export{pe as default};
