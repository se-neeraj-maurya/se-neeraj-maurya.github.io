import{k as B,u as I,l as N,r as n,o as L,n as v,t as M,s as i,f as s,q as a,Q as f,a8 as p,a7 as R,aX as z,aY as A,v as y,p as D,ad as F}from"./index.c73ad5d1.js";import{a as P,Q as G}from"./QCard.f27ef106.js";import{Q as O}from"./QSeparator.0ae7e94f.js";import{Q as r}from"./QInput.4d258c5d.js";import{Q as j}from"./QImg.1c1ad563.js";import{Q as K,a as _}from"./QItem.1687dd60.js";import{Q as h,a as q}from"./QSelect.3de4f74b.js";import{Q as T}from"./QToggle.0921c891.js";import{Q as $}from"./QForm.40f5f0c2.js";import{Q as E}from"./QPage.905abf71.js";import{I as W}from"./ImageGallery.b86aa7a0.js";import{u as X}from"./adminStore.b68fef75.js";import"./use-dark.008590ea.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.6491fe21.js";import"./QChip.c8662ee6.js";import"./QMenu.a25d15c1.js";import"./selection.eebcb6cc.js";import"./QDialog.2a776b35.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";import"./option-sizes.8c53dc9d.js";import"./QCardActions.187f4417.js";import"./axios.boot.7a3cb386.js";const Y={class:"row items-center"},H={class:"text-h5 q-ml-md"},J=a("div",{class:"tt-spacer"},null,-1),Z={class:"q-pa-md product-detail"},ee=a("label",{class:"q-label"},"Product Name",-1),te=a("label",{class:"q-label"},"Description",-1),oe=a("label",{class:"q-label"},"Category ",-1),le={class:"row q-gutter"},se={class:"col-6 q-pr-sm"},ae=a("label",{class:"q-label"},"Stock",-1),ie={class:"col-6 q-pl-sm"},re=a("label",{class:"q-label"},"Unit",-1),ue={class:"row q-gutter"},de={class:"col-6 q-pr-sm"},ne=a("label",{class:"q-label"},"Cost Price",-1),ce={class:"col-6 q-pl-sm"},me=a("label",{class:"q-label"},"Sell Price",-1),pe={class:"col-6 q-pr-sm"},ge=a("label",{class:"q-label"},"Compare Price",-1),be={key:0,class:"q-mb-lg"},ve={class:"text-center"},je=Object.assign({name:"ProductCreateOrUpdate"},{__name:"CreateOrUpdate",setup(fe){const c=X(),d=B(),g=I(),b=N(),m=n(),V=n([{unit:"piece",title:"Piece",description:"Individual items, e.g., clothing, electronics, makeup"},{unit:"pack",title:"Pack",description:"Multiple items sold together, e.g., batteries, stationery, notebooks"},{unit:"set",title:"Set",description:"Bundled items sold as a group, e.g., kitchenware, tools, furniture"},{unit:"KG",title:"Kilogram",abbreviation:"kg",description:"Weight-based products, e.g., fruits, grains"},{unit:"g",title:"Gram",abbreviation:"g",description:"Smaller weight-based items, e.g., spices, snacks"},{unit:"L",title:"Liter",abbreviation:"L",description:"Liquids measured by volume, e.g., milk, juice"},{unit:"ml",title:"Milliliter",abbreviation:"ml",description:"Small quantities of liquids, e.g., syrups, cosmetics"},{unit:"carton",title:"Carton",description:"Bulk items, e.g., canned goods, beverages"},{unit:"pair",title:"Pair",description:"Items sold in pairs, e.g., shoes, socks"},{unit:"size",title:"Size",description:"Sizing units for clothing, e.g., Small, Medium, Large"},{unit:"box",title:"Box",description:"Bundles or sets of electronics, e.g., camera sets, home theater systems"},{unit:"bottle",title:"Bottle",description:"Liquid or cream-based products, e.g., lotions, foundations"},{unit:"compact",title:"Compact",description:"Pressed powders or similar cosmetic products"}]),k=c.categories,u=n(),l=n({name:null,description:null,sku:null,uomQty:1,uom:"kg",barcode:null,category:null,costPrice:null,sellPrice:null,comparePrice:null,stock:null,discount:null,isPublished:!1,images:[]}),Q=()=>{m.value.resetValidation()},S=t=>{t&&Array.isArray(t)&&(l.value.images=t.map(o=>o.url))},w=()=>{g.back()},C=()=>{m.value.validate().then(t=>{if(!u.value&&!l.value.images.length){d.notify({progress:!0,type:"negative",position:"top",message:"Product image is required.",color:"red",timeout:2e3});return}t&&U()})},U=async()=>{try{const t=l.value;d.loading.show({delay:100});const o=await c.CreateUpdateProduct(t);d.notify({progress:!0,type:"positive",position:"top",message:o.message,color:"green",timeout:2e3}),g.replace({name:"product-list"})}catch(t){d.notify({progress:!0,position:"top",type:"negative",message:t.data.message,color:"red",timeout:2e3})}finally{d.loading.hide()}},x=async()=>{try{const t=await c.FetchSingleProduct(u.value),o={id:t.data.id,name:t.data.name,description:t.data.description,sku:t.data.sku,uom:t.data.uom,uomQty:t.data.uomQty,category:t.data.category,costPrice:t.data.costPrice,sellPrice:t.data.sellPrice,comparePrice:t.data.comparePrice,stock:t.data.stock,isPublished:t.data.isPublished,discount:t.data.discount,images:[]};l.value=o}catch(t){console.log(t)}};return L(()=>{b.name=="product-update"&&(u.value=b.params.id,x())}),(t,o)=>(v(),M(E,{class:"product-page"},{default:i(()=>[s(G,{unelevated:"",class:"aa-product-page"},{default:i(()=>[s(P,{class:"row items-center header-action-bar q-px-xs"},{default:i(()=>[a("div",Y,[s(f,{round:"",unelevated:"",icon:"arrow_back",onClick:w}),a("div",H,p(u.value?"Update":"Add New")+" Product ",1)]),J]),_:1}),s(O),s(P,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:i(()=>[s($,{onSubmit:C,onReset:Q,ref_key:"myForm",ref:m},{default:i(()=>[a("div",Z,[a("div",null,[ee,s(r,{modelValue:l.value.name,"onUpdate:modelValue":o[0]||(o[0]=e=>l.value.name=e),outlined:"",dense:"",placeholder:"Product Name",class:"q-mb-sm",rules:[e=>e&&e.length>0||"Product name is required"]},null,8,["modelValue","rules"])]),te,s(r,{type:"textarea",modelValue:l.value.description,"onUpdate:modelValue":o[1]||(o[1]=e=>l.value.description=e),outlined:"",dense:"",placeholder:"Product Description",class:"q-mb-lg"},null,8,["modelValue"]),oe,s(h,{modelValue:l.value.category,"onUpdate:modelValue":o[2]||(o[2]=e=>l.value.category=e),options:R(k),"option-value":"title","option-label":"title","emit-value":"",outlined:"",dense:"",placeholder:"Category",class:"q-mb-lg"},{option:i(e=>[s(K,z(A(e.itemProps)),{default:i(()=>[s(_,{avatar:""},{default:i(()=>[s(j,{src:e.opt.image},null,8,["src"])]),_:2},1024),s(_,null,{default:i(()=>[s(q,null,{default:i(()=>[y(p(e.opt.title),1)]),_:2},1024),s(q,{caption:""},{default:i(()=>[y(p(e.opt.description),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options"]),a("div",le,[a("div",se,[ae,s(r,{type:"number",modelValue:l.value.stock,"onUpdate:modelValue":o[3]||(o[3]=e=>l.value.stock=e),modelModifiers:{number:!0},outlined:"",dense:"",placeholder:"Stock",class:"q-mb-lg"},null,8,["modelValue"])]),a("div",ie,[re,s(r,{modelValue:l.value.uomQty,"onUpdate:modelValue":o[5]||(o[5]=e=>l.value.uomQty=e),modelModifiers:{number:!0},outlined:"",dense:"",mask:"####",class:"q-mb-lg hide-spin",rules:[e=>e&&Number(e)>0||"Required"]},{after:i(()=>[s(h,{borderless:"",style:{width:"80px"},modelValue:l.value.uom,"onUpdate:modelValue":o[4]||(o[4]=e=>l.value.uom=e),options:V.value,"option-value":"unit","option-label":"title","options-dense":"",outlined:"","emit-value":"",dense:"",class:"ellipsis"},null,8,["modelValue","options"])]),_:1},8,["modelValue","rules"])])]),a("div",ue,[a("div",de,[ne,s(r,{type:"number",modelValue:l.value.costPrice,"onUpdate:modelValue":o[6]||(o[6]=e=>l.value.costPrice=e),modelModifiers:{number:!0},outlined:"",dense:"",placeholder:"Cost Price",rules:[e=>e&&Number(e)>0||"Cost price is required"]},null,8,["modelValue","rules"])]),a("div",ce,[me,s(r,{type:"number",modelValue:l.value.sellPrice,"onUpdate:modelValue":o[7]||(o[7]=e=>l.value.sellPrice=e),modelModifiers:{number:!0},outlined:"",dense:"",placeholder:"Sell Price",rules:[e=>e&&Number(e)>0||"Sell price is required"]},null,8,["modelValue","rules"])]),a("div",pe,[ge,s(r,{type:"number",modelValue:l.value.comparePrice,"onUpdate:modelValue":o[8]||(o[8]=e=>l.value.comparePrice=e),modelModifiers:{number:!0},outlined:"",dense:"",placeholder:"Compare Price"},null,8,["modelValue"])])]),s(T,{class:"q-mb-lg",modelValue:l.value.isPublished,"onUpdate:modelValue":o[9]||(o[9]=e=>l.value.isPublished=e),label:"Published"},null,8,["modelValue"]),u.value?F("",!0):(v(),D("div",be,[s(W,{multiple:"",onUpload:S})])),a("div",ve,[s(f,{class:"full-width",unelevated:"",size:"16px",color:"primary",type:"submit",style:{width:"140px"},label:`${u.value?"Update":"Add"} Product`},null,8,["label"])])])]),_:1},512)]),_:1})]),_:1})]),_:1}))}});export{je as default};
