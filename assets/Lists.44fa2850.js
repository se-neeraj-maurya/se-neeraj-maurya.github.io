import{u as V,r as i,o as I,n as o,t as n,s,f as e,q as t,Q as P,p as u,a8 as Q,a4 as p,F as m,a9 as k,$ as D,a5 as F,a6 as _,a7 as h,aa as N}from"./index.5dbc4d9f.js";import{a as y,Q as R}from"./QCard.2022731b.js";import{Q as T}from"./QSeparator.534aecfa.js";import{Q as f}from"./QSkeleton.b423cbfb.js";import{Q as U}from"./QInput.950ed05b.js";import{Q as $,a as v}from"./QItem.8c4d6b3d.js";import{Q as j}from"./QList.afbfdbad.js";import{Q as E}from"./QPage.04ad7494.js";import{A as q,a as M}from"./formatting.897fab98.js";import{u as O}from"./adminStore.0570ef5d.js";import"./use-dark.a1b71146.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.f625a164.js";import"./axios.boot.ea71beab.js";const G={class:"row items-center"},H=t("div",{class:"text-h5 q-ml-md"},"All Customer",-1),J=t("div",{class:"tt-spacer"},null,-1),K={class:"lists"},W={class:"q-pl-sm full-width"},X={class:"text-weight-medium text-h6 q-mb-xs"},Y={class:"q-ma-md"},Z=["src"],aa={style:{"font-size":"18px"}},ea={class:"text-h6 q-mb-xs text-weight-medium"},xa=Object.assign({name:"ProductLists"},{__name:"Lists",setup(ta){const C=O(),g=V(),d=i(!1),b=i(1),w=i(1),S=i(1),c=i(),x=i([]),B=()=>{g.back()},L=r=>{g.push({name:"customer-detail",params:{id:r}})},z=async()=>{try{const r={page:1,search:c.value};d.value=!0;const l=await C.getCustomerList(r);x.value=l.data.list,b.value=l.data.page,w.value=l.data.total_pages,S.value=l.data.filtered_total}finally{d.value=!1}};return I(()=>{z()}),(r,l)=>(o(),n(E,{class:"aa-customer-list-page"},{default:s(()=>[e(R,{unelevated:"",class:"aa-customer-page"},{default:s(()=>[e(y,{class:"row items-center header-action-bar q-px-xs"},{default:s(()=>[t("div",G,[e(P,{round:"",unelevated:"",icon:"arrow_back",onClick:B}),H]),J]),_:1}),e(T),e(y,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:s(()=>[t("div",K,[d.value?(o(),u(m,{key:0},Q(5,a=>t("div",{class:"profile-card col q-mx-md q-mb-md q-px-md q-py-md flex no-wrap items-center bg-white",key:a},[t("div",null,[e(p,{size:"54px"},{default:s(()=>[e(f,{height:"55px",width:"55px",square:""})]),_:1})]),t("div",W,[t("div",X,[e(f,{height:"30px",square:""})]),t("div",null,[e(f)])])])),64)):(o(),u(m,{key:1},[t("div",Y,[e(U,{outlined:"",rounded:"",dense:"",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=a=>c.value=a),class:"search-input",placeholder:"Search Customer..."},{append:s(()=>[e(k,{name:"search"})]),_:1},8,["modelValue"])]),e(j,null,{default:s(()=>[(o(!0),u(m,null,Q(x.value,(a,A)=>D((o(),n($,{key:"customer"+A,class:"border-b",clickable:"",onClick:sa=>L(a.id)},{default:s(()=>[e(v,{avatar:""},{default:s(()=>[a.image?(o(),n(p,{key:0,size:"54px"},{default:s(()=>[t("img",{src:a==null?void 0:a.image},null,8,Z)]),_:2},1024)):(o(),n(p,{key:1,size:"54px",style:F({background:_(q)(a.name),color:_(M)(_(q)(a.name))})},{default:s(()=>[t("span",aa,h(a.name.substring(0,2).toUpperCase()),1)]),_:2},1032,["style"]))]),_:2},1024),e(v,null,{default:s(()=>[t("div",ea,h(a==null?void 0:a.name),1),t("div",null,h(a==null?void 0:a.phone),1)]),_:2},1024),e(v,{side:""},{default:s(()=>[e(k,{size:"24px",name:"chevron_right"})]),_:1})]),_:2},1032,["onClick"])),[[N]])),128))]),_:1})],64))])]),_:1})]),_:1})]),_:1}))}});export{xa as default};
