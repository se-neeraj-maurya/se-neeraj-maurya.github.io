import{P as p,Q as _,W as x,f as t,S as o,U as e,a6 as i,V as h,Y as s,Z as c}from"./index.3996516f.js";import{Q as q,a as r}from"./QCard.ac6d34ec.js";import"./use-dark.a5276646.js";const v={class:"wrapper-my-profile"},f={class:"row items-center"},u=e("div",{class:"text-h5 q-ml-md"},"My Profile",-1),g={class:"profile-card flex items-center q-ma-md q-pa-md bg-white"},y=e("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),b={class:"q-pl-md text-primary"},w=e("div",{class:"text-title"},"Neeraj Maurya",-1),k={class:"text-subtitle1 q-mt-sm"},z={class:"flex q-mx-sm"},C={class:"profile-card col q-mx-sm q-px-md q-py-lg bg-white text-center text-primary"},Q=e("div",{class:"text-h6 q-mt-sm"},"My Order",-1),B={class:"profile-card col q-mx-sm q-px-md q-py-lg bg-white text-center text-primary"},N=e("div",{class:"text-h6 q-mt-sm"},"Supports",-1),S=e("div",{class:"text-h6 q-pl-sm"},"My Address",-1),I=e("div",{class:"tt-spacer"},null,-1),M=e("div",{class:"text-h6 q-pl-sm"},"Genral Info",-1),V=e("div",{class:"tt-spacer"},null,-1),A={class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary"},P=e("div",{class:"text-h6 q-pl-sm"},"Notification",-1),G=e("div",{class:"tt-spacer"},null,-1),j={class:"text-center q-mt-xl"},W={__name:"ProfileScreen",setup(E){const a=p(),n=()=>{a.back()},l=()=>{a.push({name:"my-address"})},d=()=>{a.push({name:"general-info"})},m=()=>{localStorage.removeItem("mobile_no"),a.push({name:"login"})};return(L,O)=>(_(),x("div",v,[t(q,{class:"bg-grey-3"},{default:o(()=>[t(r,{class:"row items-center q-py-xs q-px-xs"},{default:o(()=>[e("div",f,[t(i,{round:"",unelevated:"",icon:"arrow_back",onClick:n}),u])]),_:1}),t(r,{style:{height:"calc(100vh - 52px)"},class:"scroll q-pa-none"},{default:o(()=>[e("div",g,[t(h,{size:"80px"},{default:o(()=>[y]),_:1}),e("div",b,[w,e("div",k,[t(s,{size:"16px",name:"phone"}),c(" +91 6392032056 ")])])]),e("div",z,[e("div",C,[t(s,{size:"30px",name:"shopping_bag"}),Q]),e("div",B,[t(s,{size:"30px",name:"phone_in_talk"}),N])]),e("div",{class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary",onClick:l},[t(s,{size:"20px",name:"location_on"}),S,I,t(s,{size:"24px",name:"chevron_right"})]),e("div",{class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary",onClick:d},[t(s,{size:"20px",name:"info"}),M,V,t(s,{size:"24px",name:"chevron_right"})]),e("div",A,[t(s,{size:"20px",name:"notifications"}),P,G,t(s,{size:"24px",name:"chevron_right"})]),e("div",j,[t(i,{color:"red",onClick:m},{default:o(()=>[c(" Logout ")]),_:1})])]),_:1})]),_:1})]))}};export{W as default};
