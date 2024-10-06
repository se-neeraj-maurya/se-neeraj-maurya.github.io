import{u as $,r as _,c as V,n as x,p as T,f as s,s as n,q as e,Q as p,a9 as u,v as d,a7 as r,ab as b,t as Q}from"./index.5dbc4d9f.js";import{Q as U,a as z}from"./QCard.2022731b.js";import{Q as B}from"./QRadio.7fc2ddac.js";import{u as D}from"./cart-store.36ac37d2.js";import{_ as E}from"./ShippingAddress.b05ec0ad.js";import{u as I}from"./authStore.1b2a8f2d.js";import"./use-dark.a1b71146.js";import"./option-sizes.b8a6ec60.js";import"./use-form.f625a164.js";import"./axios.boot.ea71beab.js";import"./QSeparator.534aecfa.js";import"./QInput.950ed05b.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./QForm.a5275264.js";import"./QCardActions.2a57d5fd.js";import"./QDialog.2b67d994.js";const R={class:"wrapper-my-profile"},M={class:"row items-center"},j=e("div",{class:"text-h5 q-ml-md"},"Order Confirmation",-1),F={class:"profile-card col q-mx-md q-my-md q-px-md q-py-md bg-white"},G={class:"flex items-center"},H=e("div",{class:"text-h5 text-weight-medium"},"Address",-1),J=e("div",{class:"tt-spacer"},null,-1),K={class:"q-mt-md row no-wrap q-pr-md"},L={style:{"min-width":"30px"}},W={class:"text-h6 text-grey-8"},X=e("br",null,null,-1),Y={class:"profile-card col q-mx-md q-my-md q-px-md q-py-md flex items-center bg-white text-primary"},Z=e("div",{class:"text-h5 text-weight-medium"},"Total Pay :",-1),ee=e("div",{class:"tt-spacer"},null,-1),te={class:"text-h5 text-weight-bold"},se={class:"flex q-mx-sm"},ae=e("div",{class:"text-h6 q-mt-sm"},"Cash on delviry",-1),oe=e("div",{class:"text-h6 q-mt-sm"},"Online",-1),le={class:"text-center q-mt-xl q-px-lg"},ke={__name:"OrderConfirmationScreen",setup(re){const S=I(),y=D(),h=$(),a=_("cash"),m=_(!1),v=_(!1),O=()=>{h.replace({name:"my-cart"})},l=V(()=>S.address[0]),f=o=>{a.value=o},P=V(()=>y.cartItems.reduce((o,t)=>(t.isPublished&&(o=o+t.sellPrice*t.quantity),o),0)),A=async()=>{try{m.value=!0;const o={payment_mode:a.value};await y.placeOrder(o),h.replace({name:"success-confirmation"})}finally{m.value=!1}},N=()=>{v.value=!0};return(o,t)=>(x(),T("div",R,[s(E,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=c=>v.value=c),data:l.value,"is-update":!0},null,8,["modelValue","data"]),s(U,{class:"bg-grey-3"},{default:n(()=>[s(z,{class:"row items-center header-action-bar q-px-xs"},{default:n(()=>[e("div",M,[s(p,{round:"",unelevated:"",icon:"arrow_back",onClick:O}),j])]),_:1}),s(z,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:n(()=>{var c,q,g,w,C,k;return[e("div",F,[e("div",G,[H,J,s(p,{onClick:t[1]||(t[1]=i=>N()),color:"primary",size:"13px",flat:"",rounded:"","no-caps":"",unelevated:""},{default:n(()=>[s(u,{size:"13px",name:"edit",style:{"margin-right":"2px"}}),d(" Edit ")]),_:1})]),e("div",K,[e("div",L,[s(u,{size:"24px",name:"pin_drop",style:{"margin-right":"2px"}})]),e("p",W,[d(r((c=l.value)==null?void 0:c.name)+" || "+r((q=l.value)==null?void 0:q.phone)+" ",1),X,d(" "+r((g=l.value)==null?void 0:g.address_line1)+" "+r((w=l.value)==null?void 0:w.address_line2)+" "+r((C=l.value)==null?void 0:C.city)+" "+r((k=l.value)==null?void 0:k.postal_code),1)])])]),e("div",Y,[Z,ee,e("div",te,"\u20B9 "+r(P.value),1)]),e("div",se,[e("div",{class:b(["payment-type-card col q-mx-sm q-px-md q-py-lg bg-white text-center text-primary",{selected:a.value=="cash"}]),onClick:t[3]||(t[3]=i=>f("cash"))},[e("div",null,[s(B,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=i=>a.value=i),val:"cash",color:"primary",class:"radio-icon"},null,8,["modelValue"])]),s(u,{size:"30px",name:"money"}),ae],2),e("div",{class:b(["payment-type-card col q-mx-sm q-px-md q-py-lg bg-white text-center text-primary",{selected:a.value=="online"}]),onClick:t[5]||(t[5]=i=>f("online"))},[e("div",null,[s(B,{modelValue:a.value,"onUpdate:modelValue":t[4]||(t[4]=i=>a.value=i),val:"online",color:"primary",class:"radio-icon"},null,8,["modelValue"])]),s(u,{size:"30px",name:"credit_card"}),oe],2)]),e("div",le,[a.value=="online"?(x(),Q(p,{key:0,class:"full-width",color:"primary","no-caps":"",unelevated:"",rounded:"",loading:m.value},{default:n(()=>[d(" Make Payment ")]),_:1},8,["loading"])):(x(),Q(p,{key:1,class:"full-width",color:"primary","no-caps":"",unelevated:"",rounded:"",onClick:A,loading:m.value},{default:n(()=>[d(" Confirm Order ")]),_:1},8,["loading"]))])]}),_:1})]),_:1})]))}};export{ke as default};
