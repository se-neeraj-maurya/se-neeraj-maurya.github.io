import{l as N,m as Q,r as t,o as V,p as l,q as d,s as o,f as r,t as h,ai as g,aF as b,F as y,ah as C,x as k,v as L,Q as S,al as $}from"./index.7f71ea72.js";import{Q as x}from"./QSkeleton.f6d47279.js";import{_ as B}from"./ProductList2.d48e5b64.js";import{N as M}from"./NoData.43f01424.js";import{u as D}from"./globalStore.0ae12050.js";const F={class:"favorite-wrapper"},T={class:"q-pa-md col"},I={class:"col q-px-md"},R={class:"col q-px-md"},j=o("div",{class:"text-h5 q-ma-md"},"Search results",-1),E={key:1,class:"q-mt-lg text-center"},G=o("p",{class:"text-center text-h5 q-py-md"},"No Product available.",-1),U={class:"q-pa-md text-center"},W={__name:"SearchScreen",setup(z){const i=D();N(),Q();const p=t(!1),n=t([]),m=t(1),u=t(1),v=t(!1),f=t(),c=t(),q=a=>{i.openProductDetail(a)},_=async()=>{const a={page:1,search:c.value};try{p.value=!0;const e=await i.fetchProduct(a);n.value=e.data.list,m.value=e.data.total_pages,u.value=e.data.page}finally{p.value=!1}},P=async()=>{const a={page:u.value+1,search:c.value};try{v.value=!0;const e=await i.fetchProduct(a);n.value=n.value.concat(e.data.list),m.value=e.data.total_pages,u.value=e.data.page}finally{v.value=!1}},w=()=>{f.value&&clearTimeout(f.value),f.value=setTimeout(()=>{_()},500)};return V(()=>{_()}),(a,e)=>(l(),d("div",F,[o("div",T,[r(b,{outlined:"",rounded:"",dense:"",placeholder:"Search...",autofocus:"",clearable:"",modelValue:c.value,"onUpdate:modelValue":[e[1]||(e[1]=s=>c.value=s),e[2]||(e[2]=s=>w())],onClear:e[3]||(e[3]=s=>a.$router.push({name:"home"}))},{prepend:h(()=>[r(g,{onClick:e[0]||(e[0]=s=>a.$router.push({name:"home"})),name:"arrow_back"})]),append:h(()=>[r(g,{name:"search"})]),_:1},8,["modelValue"])]),p.value?(l(),d(y,{key:0},C(4,s=>o("div",{class:"col-6 q-mb-md q-px-md q-mt-md flex no-wrap justify-center",key:s},[o("div",I,[r(x,{height:"150px",square:""})]),o("div",R,[r(x,{height:"150px",square:""})])])),64)):(l(),d(y,{key:1},[j,n.value.length?(l(),k(B,{key:0,products:n.value,"onClick:detail":q},null,8,["products"])):(l(),d("div",E,[r(M),G])),o("div",U,[u.value<m.value?(l(),k(S,{key:0,class:"full-widh q-px-lg",color:"primary","no-caps":"",outline:"",unelevated:"",rounded:"",loading:v.value,onClick:P},{default:h(()=>[L(" Load More... ")]),_:1},8,["loading"])):$("",!0)])],64))]))}};export{W as default};
