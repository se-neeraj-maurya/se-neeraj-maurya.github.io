import{_ as o}from"./ProductList2.bfb009a2.js";import{u as l}from"./globalStore.89ad5d96.js";import{u as n,n as d,p,f as s,a4 as r,q as c}from"./index.e4506442.js";import{n as a}from"./db.eb94c5fc.js";import"./QImg.41d90a0b.js";import"./axios.boot.491fc198.js";const m={class:"favorite-wrapper"},u=c("div",{class:"text-h5 q-ml-md"},"My Favorites",-1),_=c("div",{class:"text-title q-mt-lg q-px-md"},"Similar Products",-1),P={__name:"FavoriteScreen",setup(f){const i=l();n();const t=e=>{i.openProductDetail(e.id)};return(e,v)=>(d(),p("div",m,[u,s(o,{products:r(a),"onClick:detail":t},null,8,["products"]),_,s(o,{products:r(a),"onClick:detail":t},null,8,["products"])]))}};export{P as default};
