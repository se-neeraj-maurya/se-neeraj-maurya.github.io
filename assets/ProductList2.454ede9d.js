import{Q as _}from"./QImg.1c1ad563.js";import{c as m,n as i,p as a,F as p,a9 as u,aq as h,q as t,f as v,a8 as s,v as y,ad as x}from"./index.c73ad5d1.js";import{u as k}from"./globalStore.da87f570.js";const b={class:"flex product-container"},f=["onClick"],g={class:"card-inner"},q={class:"product-detail q-pa-sm"},P={class:"title text-subtitle1 ellipsis text-weight-medium"},w={class:"title text-subtitle1 ellipsis text-grey-8 q-pb-sm"},L={class:"row items-center"},N={class:"price text-subtitle1"},V={key:0,class:"gross-price q-pl-sm"},A={__name:"ProductList2",props:{products:{type:Array}},emits:["click:detail"],setup(r,{emit:B}){const c=r;k();const l=m(()=>c.products);return(n,C)=>(i(),a("div",b,[(i(!0),a(p,null,u(l.value,(e,d)=>{var o;return i(),a("div",{class:"product-card",key:"product-key"+d,onClick:h(Q=>n.$emit("click:detail",e),["prevent","stop"])},[t("div",g,[v(_,{class:"rounded-borders product-thumbnail",style:{height:"100px",width:"100%"},src:(o=e==null?void 0:e.thumbnail)==null?void 0:o.file_path},null,8,["src"]),t("div",q,[t("div",P,s(e.name),1),t("div",w,s(e.uomQty)+" "+s(e.uom),1),t("div",L,[t("div",N,[y(" \u20B9 "+s(e.sellPrice)+" ",1),e.comparePrice?(i(),a("span",V," \u20B9 "+s(e.comparePrice),1)):x("",!0)])])])])],8,f)}),128))]))}};export{A as _};
