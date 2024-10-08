import{k as C,u as Q,r as m,n as w,t as x,s,f as t,q as o,Q as p}from"./index.96042976.js";import{a as u,Q as b}from"./QCard.9720e357.js";import{Q as q}from"./QSeparator.8fd22428.js";import{Q as k}from"./QInput.8968e4d6.js";import{Q as V}from"./QForm.38d2e0e4.js";import{Q as B}from"./QPage.7478396b.js";import"./QImg.239cd7fe.js";import"./ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.de75a2ce.js";import{I}from"./ImageGallery.4a5dfa67.js";import{u as N}from"./adminStore.c11e331e.js";import"./use-dark.f695e600.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.459ef16a.js";import"./format.2a3572e1.js";import"./QCardActions.6eeba250.js";import"./QDialog.fb0a1d67.js";import"./axios.boot.2e5d1b33.js";const S={class:"row items-center"},F=o("div",{class:"text-h5 q-ml-md"},"New Category",-1),R=o("div",{class:"tt-spacer"},null,-1),A={class:"q-pa-md"},D={class:"q-mb-lg"},U={class:"text-center"},ae=Object.assign({name:"CategoryCreate"},{__name:"Create",setup(j){const r=C(),g=N(),d=Q(),n=m(),l=m(),c=m(),_=()=>{d.back()},f=e=>{l.value=e.url,console.log(e)},y=()=>{c.value.resetValidation()},v=()=>{c.value.validate().then(e=>{e&&l.value&&h()})},h=async()=>{const e=new FormData;e.append("title",n.value),e.append("description","description"),l.value&&e.append("image",l.value);try{r.loading.show({delay:100});const a=await g.CreateCategory(e);r.notify({progress:!0,position:"top",message:a.message,color:"green",timeout:2e3}),d.replace({name:"category-list"})}catch(a){r.notify({progress:!0,position:"top",message:a.data.message,color:"red",timeout:2e3})}finally{r.loading.hide()}};return(e,a)=>(w(),x(B,{class:"aa-category--page"},{default:s(()=>[t(b,{unelevated:"",class:"aa-category-page"},{default:s(()=>[t(u,{class:"row items-center header-action-bar q-px-xs"},{default:s(()=>[o("div",S,[t(p,{round:"",unelevated:"",icon:"arrow_back",onClick:_}),F]),R]),_:1}),t(q),t(u,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:s(()=>[t(V,{onSubmit:v,onReset:y,ref_key:"myForm",ref:c},{default:s(()=>[o("div",A,[t(k,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=i=>n.value=i),outlined:"",dense:"",placeholder:"Category Name",class:"q-mb-lg",rules:[i=>i&&i.length>0||"Category name is required"]},null,8,["modelValue","rules"]),o("div",D,[t(I,{onUpload:f})]),o("div",U,[t(p,{class:"full-width",unelevated:"",size:"16px",color:"primary",type:"submit",style:{width:"140px"},label:"Add Category"})])])]),_:1},512)]),_:1})]),_:1})]),_:1}))}});export{ae as default};
