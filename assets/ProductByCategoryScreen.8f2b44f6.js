import{Q as g}from"./QSkeleton.8b35fb2e.js";import{l as C,m as N,r as l,c as w,o as L,p as t,q as c,F as y,ah as b,s as o,ag as D,x as _,f as n,t as f,v as h,Q as x,al as M}from"./index.85b4eabb.js";import{_ as Q}from"./ProductList2.e211c602.js";import{N as S}from"./NoData.54acfb85.js";import{u as V}from"./globalStore.2c6ed0bd.js";const $={class:"favorite-wrapper"},F={class:"col q-px-md"},G={class:"col q-px-md"},R={class:"text-h5 text-center q-ma-md"},j={key:1,class:"q-mt-lg text-center"},A=o("p",{class:"text-center text-h5 q-py-md"},"No Product available.",-1),E={class:"q-pa-md text-center"},O={__name:"ProductByCategoryScreen",setup(T){const u=V();C();const k=N(),d=l(!1),s=l([]),i=l(1),r=l(1),p=l(!1),q=a=>{u.openProductDetail(a)},m=w(()=>k.params.category.replaceAll("-"," ")),P=async()=>{const a={page:1,category:m.value};try{d.value=!0;const e=await u.fetchProductByCategory(a);s.value=e.data.list,i.value=e.data.total_pages,r.value=e.data.page}finally{d.value=!1}},B=async()=>{const a={page:r.value+1,category:m.value};try{p.value=!0;const e=await u.fetchProductByCategory(a);s.value=s.value.concat(e.data.list),i.value=e.data.total_pages,r.value=e.data.page}finally{p.value=!1}};return L(()=>{P()}),(a,e)=>(t(),c("div",$,[d.value?(t(),c(y,{key:0},b(4,v=>o("div",{class:"col-6 q-mb-md q-px-md q-mt-md flex no-wrap justify-center",key:v},[o("div",F,[n(g,{height:"150px",square:""})]),o("div",G,[n(g,{height:"150px",square:""})])])),64)):(t(),c(y,{key:1},[o("div",R,D(m.value),1),s.value.length?(t(),_(Q,{key:0,products:s.value,"onClick:detail":q},null,8,["products"])):(t(),c("div",j,[n(S),A,n(x,{onClick:e[0]||(e[0]=v=>a.$router.push({name:"home"})),class:"q-px-xl",outline:"",color:"primary","no-caps":"",unelevated:"",rounded:""},{default:f(()=>[h(" Go to home ")]),_:1})])),o("div",E,[r.value<i.value?(t(),_(x,{key:0,class:"full-widh q-px-lg",color:"primary","no-caps":"",outline:"",unelevated:"",rounded:"",loading:p.value,onClick:B},{default:f(()=>[h(" Load More... ")]),_:1},8,["loading"])):M("",!0)])],64))]))}};export{O as default};
