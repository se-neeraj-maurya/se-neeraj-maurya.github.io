import{l as V,r as n,o as I,p as o,x as r,t as s,f as e,aw as P,ax as k,s as t,Q as D,ay as F,q as u,F as p,ah as y,ad as m,aF as j,ai as Q,a1 as N,ae as R,af as _,ag as h,aj as T}from"./index.e93ee3cf.js";import{Q as f}from"./QSkeleton.31e066be.js";import{Q as U,a as v}from"./QItem.75c412cf.js";import{Q as E}from"./QList.cb7bdfd6.js";import{Q as M}from"./QPage.8a16f10e.js";import{A as q,a as O}from"./formatting.897fab98.js";import{u as $}from"./adminStore.0c3ba237.js";const G={class:"row items-center"},H=t("div",{class:"text-h5 q-ml-md"},"All Customer",-1),J=t("div",{class:"tt-spacer"},null,-1),K={class:"lists"},W={class:"q-pl-sm full-width"},X={class:"text-weight-medium text-h6 q-mb-xs"},Y={class:"q-ma-md"},Z=["src"],aa={style:{"font-size":"18px"}},ea={class:"text-h6 q-mb-xs text-weight-medium"},ua=Object.assign({name:"ProductLists"},{__name:"Lists",setup(ta){const C=$(),g=V(),d=n(!1),b=n(1),w=n(1),S=n(1),c=n(),x=n([]),B=()=>{g.back()},L=i=>{g.push({name:"customer-detail",params:{id:i}})},z=async()=>{try{const i={page:1,search:c.value};d.value=!0;const l=await C.getCustomerList(i);x.value=l.data.list,b.value=l.data.page,w.value=l.data.total_pages,S.value=l.data.filtered_total}finally{d.value=!1}};return I(()=>{z()}),(i,l)=>(o(),r(M,{class:"aa-customer-list-page"},{default:s(()=>[e(P,{unelevated:"",class:"aa-customer-page"},{default:s(()=>[e(k,{class:"row items-center header-action-bar q-px-xs"},{default:s(()=>[t("div",G,[e(D,{round:"",unelevated:"",icon:"arrow_back",onClick:B}),H]),J]),_:1}),e(F),e(k,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:s(()=>[t("div",K,[d.value?(o(),u(p,{key:0},y(5,a=>t("div",{class:"profile-card col q-mx-md q-mb-md q-px-md q-py-md flex no-wrap items-center bg-white",key:a},[t("div",null,[e(m,{size:"54px"},{default:s(()=>[e(f,{height:"55px",width:"55px",square:""})]),_:1})]),t("div",W,[t("div",X,[e(f,{height:"30px",square:""})]),t("div",null,[e(f)])])])),64)):(o(),u(p,{key:1},[t("div",Y,[e(j,{outlined:"",rounded:"",dense:"",modelValue:c.value,"onUpdate:modelValue":l[0]||(l[0]=a=>c.value=a),class:"search-input",placeholder:"Search Customer..."},{append:s(()=>[e(Q,{name:"search"})]),_:1},8,["modelValue"])]),e(E,null,{default:s(()=>[(o(!0),u(p,null,y(x.value,(a,A)=>N((o(),r(U,{key:"customer"+A,class:"border-b",clickable:"",onClick:sa=>L(a.id)},{default:s(()=>[e(v,{avatar:""},{default:s(()=>[a.image?(o(),r(m,{key:0,size:"54px"},{default:s(()=>[t("img",{src:a==null?void 0:a.image},null,8,Z)]),_:2},1024)):(o(),r(m,{key:1,size:"54px",style:R({background:_(q)(a.name),color:_(O)(_(q)(a.name))})},{default:s(()=>[t("span",aa,h(a.name.substring(0,2).toUpperCase()),1)]),_:2},1032,["style"]))]),_:2},1024),e(v,null,{default:s(()=>[t("div",ea,h(a==null?void 0:a.name),1),t("div",null,h(a==null?void 0:a.phone),1)]),_:2},1024),e(v,{side:""},{default:s(()=>[e(Q,{size:"24px",name:"chevron_right"})]),_:1})]),_:2},1032,["onClick"])),[[T]])),128))]),_:1})],64))])]),_:1})]),_:1})]),_:1}))}});export{ua as default};
