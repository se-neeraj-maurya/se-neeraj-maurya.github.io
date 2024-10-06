import{k as C,u as Q,r as m,n as w,t as x,s,f as t,q as o,Q as p}from"./index.5dbc4d9f.js";import{a as u,Q as b}from"./QCard.2022731b.js";import{Q as q}from"./QSeparator.534aecfa.js";import{Q as k}from"./QInput.950ed05b.js";import{Q as V}from"./QForm.a5275264.js";import{Q as B}from"./QPage.04ad7494.js";import"./QImg.daf9590e.js";import"./ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.ee0db098.js";import{I}from"./ImageGallery.c075be5d.js";import{u as N}from"./adminStore.0570ef5d.js";import"./use-dark.a1b71146.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.f625a164.js";import"./format.2a3572e1.js";import"./QCardActions.2a57d5fd.js";import"./QDialog.2b67d994.js";import"./axios.boot.ea71beab.js";const S={class:"row items-center"},F=o("div",{class:"text-h5 q-ml-md"},"New Category",-1),R=o("div",{class:"tt-spacer"},null,-1),A={class:"q-pa-md"},D={class:"q-mb-lg"},U={class:"text-center"},ae=Object.assign({name:"CategoryCreate"},{__name:"Create",setup(j){const r=C(),g=N(),d=Q(),n=m(),l=m(),c=m(),_=()=>{d.back()},f=e=>{l.value=e.url,console.log(e)},y=()=>{c.value.resetValidation()},v=()=>{c.value.validate().then(e=>{e&&l.value&&h()})},h=async()=>{const e=new FormData;e.append("title",n.value),e.append("description","description"),l.value&&e.append("image",l.value);try{r.loading.show({delay:100});const a=await g.CreateCategory(e);r.notify({progress:!0,position:"top",message:a.message,color:"green",timeout:2e3}),d.replace({name:"category-list"})}catch(a){r.notify({progress:!0,position:"top",message:a.data.message,color:"red",timeout:2e3})}finally{r.loading.hide()}};return(e,a)=>(w(),x(B,{class:"aa-category--page"},{default:s(()=>[t(b,{unelevated:"",class:"aa-category-page"},{default:s(()=>[t(u,{class:"row items-center header-action-bar q-px-xs"},{default:s(()=>[o("div",S,[t(p,{round:"",unelevated:"",icon:"arrow_back",onClick:_}),F]),R]),_:1}),t(q),t(u,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:s(()=>[t(V,{onSubmit:v,onReset:y,ref_key:"myForm",ref:c},{default:s(()=>[o("div",A,[t(k,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i),outlined:"",dense:"",placeholder:"Category Name",class:"q-mb-lg",rules:[i=>i&&i.length>0||"Category name is required"]},null,8,["modelValue","rules"]),o("div",D,[t(I,{onUpload:f})]),o("div",U,[t(p,{class:"full-width",unelevated:"",size:"16px",color:"primary",type:"submit",style:{width:"140px"},label:"Add Category"})])])]),_:1},512)]),_:1})]),_:1})]),_:1}))}});export{ae as default};
