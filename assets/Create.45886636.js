import{am as _,n as r,p,F as b,a9 as y,ac as V,f as l,s as d,Q as v,ad as f,q as a,aa as Q,ao as w,ap as k,u as U,r as q,t as C}from"./index.c73ad5d1.js";import{a as g,Q as x}from"./QCard.f27ef106.js";import{Q as P}from"./QSeparator.0ae7e94f.js";import{Q as m}from"./QInput.4d258c5d.js";import{Q as I}from"./QSelect.3de4f74b.js";import{Q as F}from"./QToggle.0921c891.js";import{Q as A}from"./QPage.905abf71.js";import{Q as B}from"./QImg.1c1ad563.js";import{Q as L}from"./ImageUpload.vue_vue_type_style_index_0_scoped_true_lang.9d485165.js";import"./use-dark.008590ea.js";import"./uid.42677368.js";import"./focus-manager.02955f48.js";import"./use-form.6491fe21.js";import"./QChip.c8662ee6.js";import"./QItem.1687dd60.js";import"./QMenu.a25d15c1.js";import"./selection.eebcb6cc.js";import"./QDialog.2a776b35.js";import"./rtl.b51694b1.js";import"./format.2a3572e1.js";import"./option-sizes.8c53dc9d.js";const S={data(){return{previewUrls:[],files:[]}},props:{multiple:{type:Boolean,default:!1}},computed:{validLimit(){return this.multiple?5:1}},methods:{triggerFileUpload(){this.$refs.uploader.pickFiles()},onFilesAdded(o){let u=0;for(let e of o)u<this.validLimit&&(this.previewUrls.push(URL.createObjectURL(e)),this.files.push(e)),u++;this.emitFile(),this.$refs.uploader.reset()},removeImage(o){this.previewUrls.splice(o,1),this.files.splice(o,1),this.emitFile()},emitFile(){this.multiple?this.$emit("upload",this.files):this.$emit("upload",this.files[0])}}},N=o=>(w("data-v-0fde12d2"),o=o(),k(),o),$={key:0,class:"q-mb-md preview-section"},z={key:1,class:"upload-section"},O={class:"full-width"},R=N(()=>a("div",{class:"upload-text q-pb-sm"},"Upload Images",-1));function T(o,u,e,h,n,i){return r(),p("div",null,[n.previewUrls.length?(r(),p("div",$,[(r(!0),p(b,null,y(n.previewUrls,(c,t)=>(r(),p("div",{key:t,class:V(["preview-item",{multiple:e.multiple}])},[l(B,{src:c,ratio:1,"no-native-menu":"",class:"rounded-borders"},{default:d(()=>[l(v,{round:"",color:"red",icon:"close",size:"sm",class:"absolute all-pointer-events",style:{top:"4px",right:"4px"},onClick:s=>i.removeImage(t)},null,8,["onClick"])]),_:2},1032,["src"])],2))),128))])):f("",!0),n.files.length<i.validLimit?(r(),p("div",z,[l(v,{onClick:i.triggerFileUpload,outline:"",color:"primary",class:"upload-btn full-width",style:{height:"90px"}},{default:d(()=>[a("div",O,[l(Q,{name:"cloud_upload",size:"36px"})]),R]),_:1},8,["onClick"]),l(L,{ref:"uploader",url:"",accept:"image/*",onAdded:i.onFilesAdded,"auto-upload":!1,multiple:e.multiple,style:{display:"none"}},null,8,["onAdded","multiple"])])):f("",!0)])}var j=_(S,[["render",T],["__scopeId","data-v-0fde12d2"]]);const D={class:"row items-center"},E=a("div",{class:"text-h5 q-ml-md"},"Add New Customer",-1),G=a("div",{class:"tt-spacer"},null,-1),H={class:"q-pa-md product-detail"},J={class:"row q-gutter-x-md"},K={class:"col-6"},M={class:"col-6"},W={class:"text-center"},_e=Object.assign({name:"ProductCreate"},{__name:"Create",setup(o){const u=U(),e=q({title:null,description:null,sku:null,barcode:null,category:null,costPrice:null,sellPrice:null,quantity:null,isPublished:!1,images:[]}),h=["Google","Facebook","Twitter","Apple","Oracle"],n=c=>{e.value.images=c},i=()=>{u.back()};return(c,t)=>(r(),C(A,{class:"product-page"},{default:d(()=>[l(x,{unelevated:"",class:"aa-product-page"},{default:d(()=>[l(g,{class:"row items-center header-action-bar q-px-xs"},{default:d(()=>[a("div",D,[l(v,{round:"",unelevated:"",icon:"arrow_back",onClick:i}),E]),G]),_:1}),l(P),l(g,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:d(()=>[a("div",H,[l(m,{modelValue:e.value.title,"onUpdate:modelValue":t[0]||(t[0]=s=>e.value.title=s),outlined:"",dense:"",placeholder:"Product Name",class:"q-mb-lg"},null,8,["modelValue"]),l(m,{type:"textarea",modelValue:e.value.description,"onUpdate:modelValue":t[1]||(t[1]=s=>e.value.description=s),outlined:"",dense:"",placeholder:"Product Description",class:"q-mb-lg"},null,8,["modelValue"]),l(I,{modelValue:e.value.category,"onUpdate:modelValue":t[2]||(t[2]=s=>e.value.category=s),options:h,outlined:"",dense:"",placeholder:"Category",class:"q-mb-lg"},null,8,["modelValue"]),l(m,{type:"number",modelValue:e.value.quantity,"onUpdate:modelValue":t[3]||(t[3]=s=>e.value.quantity=s),outlined:"",dense:"",placeholder:"Quantity",class:"q-mb-lg"},null,8,["modelValue"]),a("div",J,[a("div",K,[l(m,{type:"number",modelValue:e.value.costPrice,"onUpdate:modelValue":t[4]||(t[4]=s=>e.value.costPrice=s),outlined:"",dense:"",placeholder:"Cost Price",class:"q-mb-lg"},null,8,["modelValue"])]),a("div",M,[l(m,{type:"number",modelValue:e.value.sellPrice,"onUpdate:modelValue":t[5]||(t[5]=s=>e.value.sellPrice=s),outlined:"",dense:"",placeholder:"Sell Price",class:"q-mb-lg"},null,8,["modelValue"])])]),l(F,{class:"q-mb-lg",modelValue:e.value.isPublished,"onUpdate:modelValue":t[6]||(t[6]=s=>e.value.isPublished=s),label:"Published"},null,8,["modelValue"]),l(j,{onChange:n}),a("div",W,[l(v,{class:"full-width",unelevated:"",size:"16px",color:"primary",style:{width:"140px"},label:"Add Product",onClick:c.showHelloToast},null,8,["onClick"])])])]),_:1})]),_:1})]),_:1}))}});export{_e as default};
