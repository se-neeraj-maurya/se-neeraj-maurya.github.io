import{Q as g}from"./QSkeleton.70c58b3b.js";import{u as C,l as N,r,c as w,o as L,n as a,p as c,F as y,a9 as b,q as o,a8 as D,t as _,f as n,s as f,Q as h,ad as M,v as x}from"./index.96042976.js";import{_ as Q}from"./ProductList2.fa58564d.js";import{N as S}from"./NoData.e1cdeaa5.js";import{u as V}from"./globalStore.765c6db7.js";import"./use-dark.f695e600.js";import"./QImg.239cd7fe.js";import"./axios.boot.2e5d1b33.js";const $={class:"favorite-wrapper"},F={class:"col q-px-md"},G={class:"col q-px-md"},R={class:"text-h5 text-center q-ma-md"},j={key:1,class:"q-mt-lg text-center"},A=o("p",{class:"text-center text-h5 q-py-md"},"No Product available.",-1),E={class:"q-pa-md text-center"},X={__name:"ProductByCategoryScreen",setup(T){const u=V();C();const k=N(),d=r(!1),s=r([]),i=r(1),l=r(1),p=r(!1),q=t=>{u.openProductDetail(t)},m=w(()=>k.params.category.replaceAll("-"," ")),P=async()=>{const t={page:1,category:m.value};try{d.value=!0;const e=await u.fetchProductByCategory(t);s.value=e.data.list,i.value=e.data.total_pages,l.value=e.data.page}finally{d.value=!1}},B=async()=>{const t={page:l.value+1,category:m.value};try{p.value=!0;const e=await u.fetchProductByCategory(t);s.value=s.value.concat(e.data.list),i.value=e.data.total_pages,l.value=e.data.page}finally{p.value=!1}};return L(()=>{P()}),(t,e)=>(a(),c("div",$,[d.value?(a(),c(y,{key:0},b(4,v=>o("div",{class:"col-6 q-mb-md q-px-md q-mt-md flex no-wrap justify-center",key:v},[o("div",F,[n(g,{height:"150px",square:""})]),o("div",G,[n(g,{height:"150px",square:""})])])),64)):(a(),c(y,{key:1},[o("div",R,D(m.value),1),s.value.length?(a(),_(Q,{key:0,products:s.value,"onClick:detail":q},null,8,["products"])):(a(),c("div",j,[n(S),A,n(h,{onClick:e[0]||(e[0]=v=>t.$router.push({name:"home"})),class:"q-px-xl",outline:"",color:"primary","no-caps":"",unelevated:"",rounded:""},{default:f(()=>[x(" Go to home ")]),_:1})])),o("div",E,[l.value<i.value?(a(),_(h,{key:0,class:"full-widh q-px-lg",color:"primary","no-caps":"",outline:"",unelevated:"",rounded:"",loading:p.value,onClick:B},{default:f(()=>[x(" Load More... ")]),_:1},8,["loading"])):M("",!0)])],64))]))}};export{X as default};
