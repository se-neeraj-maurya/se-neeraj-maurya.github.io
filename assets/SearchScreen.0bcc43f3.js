import{u as Q,l as b,r as t,o as N,n as l,p as d,q as o,f as r,s as h,F as g,a8 as V,t as y,Q as C,ac as L,a9 as k,v as S}from"./index.5dbc4d9f.js";import{Q as $}from"./QInput.950ed05b.js";import{Q as x}from"./QSkeleton.b423cbfb.js";import{_ as B}from"./ProductList2.3599b6c7.js";import{N as M}from"./NoData.4f21d089.js";import{u as D}from"./globalStore.8b2473a1.js";import"./use-dark.a1b71146.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.f625a164.js";import"./QImg.daf9590e.js";import"./axios.boot.ea71beab.js";const T={class:"favorite-wrapper"},F={class:"q-pa-md col"},I={class:"col"},R={class:"col q-pl-sm full-width"},j=o("div",{class:"text-h5 q-ma-md"},"Search results",-1),E={key:1,class:"q-mt-lg text-center"},G=o("p",{class:"text-center text-h5 q-py-md"},"No Product available.",-1),U={class:"q-pa-md text-center"},oe={__name:"SearchScreen",setup(z){const i=D();Q(),b();const p=t(!1),n=t([]),m=t(1),u=t(1),v=t(!1),f=t(),c=t(),q=a=>{i.openProductDetail(a)},_=async()=>{const a={page:1,search:c.value};try{p.value=!0;const e=await i.fetchProduct(a);n.value=e.data.list,m.value=e.data.total_pages,u.value=e.data.page}finally{p.value=!1}},w=async()=>{const a={page:u.value+1,search:c.value};try{v.value=!0;const e=await i.fetchProduct(a);n.value=n.value.concat(e.data.list),m.value=e.data.total_pages,u.value=e.data.page}finally{v.value=!1}},P=()=>{f.value&&clearTimeout(f.value),f.value=setTimeout(()=>{_()},500)};return N(()=>{_()}),(a,e)=>(l(),d("div",T,[o("div",F,[r($,{outlined:"",rounded:"",dense:"",placeholder:"Search...",autofocus:"",clearable:"",modelValue:c.value,"onUpdate:modelValue":[e[1]||(e[1]=s=>c.value=s),e[2]||(e[2]=s=>P())],onClear:e[3]||(e[3]=s=>a.$router.push({name:"home"}))},{prepend:h(()=>[r(k,{onClick:e[0]||(e[0]=s=>a.$router.push({name:"home"})),name:"arrow_back"})]),append:h(()=>[r(k,{name:"search"})]),_:1},8,["modelValue"])]),p.value?(l(),d(g,{key:0},V(4,s=>o("div",{class:"col-6 q-mb-md q-px-md flex no-wrap justify-between",key:s},[o("div",I,[r(x,{height:"150px",width:"150px",square:""})]),o("div",R,[r(x,{height:"150px",width:"150px",square:""})])])),64)):(l(),d(g,{key:1},[j,n.value.length?(l(),y(B,{key:0,products:n.value,"onClick:detail":q},null,8,["products"])):(l(),d("div",E,[r(M),G])),o("div",U,[u.value<m.value?(l(),y(C,{key:0,class:"full-widh q-px-lg",color:"primary","no-caps":"",outline:"",unelevated:"",rounded:"",loading:v.value,onClick:w},{default:h(()=>[S(" Load More... ")]),_:1},8,["loading"])):L("",!0)])],64))]))}};export{oe as default};
