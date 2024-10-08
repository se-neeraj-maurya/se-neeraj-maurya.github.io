import{u as V,r as i,o as I,n as o,t as n,s,f as e,q as t,Q as P,p as u,a9 as Q,a5 as p,F as m,aa as k,a0 as D,a6 as F,a7 as _,a8 as h,ab as N}from"./index.96042976.js";import{a as y,Q as R}from"./QCard.9720e357.js";import{Q as T}from"./QSeparator.8fd22428.js";import{Q as f}from"./QSkeleton.70c58b3b.js";import{Q as U}from"./QInput.8968e4d6.js";import{Q as j,a as v}from"./QItem.151d36ee.js";import{Q as E}from"./QList.62ab0cd5.js";import{Q as M}from"./QPage.7478396b.js";import{A as b,a as O}from"./formatting.897fab98.js";import{u as $}from"./adminStore.c11e331e.js";import"./use-dark.f695e600.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.459ef16a.js";import"./axios.boot.2e5d1b33.js";const G={class:"row items-center"},H=t("div",{class:"text-h5 q-ml-md"},"All Customer",-1),J=t("div",{class:"tt-spacer"},null,-1),K={class:"lists"},W={class:"q-pl-sm full-width"},X={class:"text-weight-medium text-h6 q-mb-xs"},Y={class:"q-ma-md"},Z=["src"],aa={style:{"font-size":"18px"}},ea={class:"text-h6 q-mb-xs text-weight-medium"},xa=Object.assign({name:"ProductLists"},{__name:"Lists",setup(ta){const q=$(),g=V(),d=i(!1),C=i(1),w=i(1),S=i(1),c=i(),x=i([]),B=()=>{g.back()},L=r=>{g.push({name:"customer-detail",params:{id:r}})},z=async()=>{try{const r={page:1,search:c.value};d.value=!0;const l=await q.getCustomerList(r);x.value=l.data.list,C.value=l.data.page,w.value=l.data.total_pages,S.value=l.data.filtered_total}finally{d.value=!1}};return I(()=>{z()}),(r,l)=>(o(),n(M,{class:"aa-customer-list-page"},{default:s(()=>[e(R,{unelevated:"",class:"aa-customer-page"},{default:s(()=>[e(y,{class:"row items-center header-action-bar q-px-xs"},{default:s(()=>[t("div",G,[e(P,{round:"",unelevated:"",icon:"arrow_back",onClick:B}),H]),J]),_:1}),e(T),e(y,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:s(()=>[t("div",K,[d.value?(o(),u(m,{key:0},Q(5,a=>t("div",{class:"profile-card col q-mx-md q-mb-md q-px-md q-py-md flex no-wrap items-center bg-white",key:a},[t("div",null,[e(p,{size:"54px"},{default:s(()=>[e(f,{height:"55px",width:"55px",square:""})]),_:1})]),t("div",W,[t("div",X,[e(f,{height:"30px",square:""})]),t("div",null,[e(f)])])])),64)):(o(),u(m,{key:1},[t("div",Y,[e(U,{outlined:"",rounded:"",dense:"",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=a=>c.value=a),class:"search-input",placeholder:"Search Customer..."},{append:s(()=>[e(k,{name:"search"})]),_:1},8,["modelValue"])]),e(E,null,{default:s(()=>[(o(!0),u(m,null,Q(x.value,(a,A)=>D((o(),n(j,{key:"customer"+A,class:"border-b",clickable:"",onClick:sa=>L(a.id)},{default:s(()=>[e(v,{avatar:""},{default:s(()=>[a.image?(o(),n(p,{key:0,size:"54px"},{default:s(()=>[t("img",{src:a==null?void 0:a.image},null,8,Z)]),_:2},1024)):(o(),n(p,{key:1,size:"54px",style:F({background:_(b)(a.name),color:_(O)(_(b)(a.name))})},{default:s(()=>[t("span",aa,h(a.name.substring(0,2).toUpperCase()),1)]),_:2},1032,["style"]))]),_:2},1024),e(v,null,{default:s(()=>[t("div",ea,h(a==null?void 0:a.name),1),t("div",null,h(a==null?void 0:a.phone),1)]),_:2},1024),e(v,{side:""},{default:s(()=>[e(k,{size:"24px",name:"chevron_right"})]),_:1})]),_:2},1032,["onClick"])),[[N]])),128))]),_:1})],64))])]),_:1})]),_:1})]),_:1}))}});export{xa as default};
