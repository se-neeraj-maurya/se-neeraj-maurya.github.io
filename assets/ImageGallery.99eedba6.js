import{am as M,r as u,c as K,w as Q,o as Y,n as d,p,F as k,a9 as q,ac as U,f as l,s as r,Q as _,ad as E,q as g,aa as H,v as h,ao as J,ap as X}from"./index.15592ddb.js";import{Q as F}from"./QImg.465515b1.js";import{Q as Z,a as L}from"./QCard.f18e12f7.js";import{Q as S}from"./QSeparator.4e10e695.js";import{Q as W}from"./QCardActions.02f719a3.js";import{Q as ee}from"./QDialog.f0a2748f.js";import{c as A}from"./axios.boot.ef88ab99.js";import{u as ae}from"./adminStore.811258a6.js";const te=i=>(J("data-v-ed7fec56"),i=i(),X(),i),le={key:0,class:"q-mb-md preview-section"},se={key:1,class:"upload-section"},oe={class:"full-width"},re=te(()=>g("div",{class:"upload-text q-pb-sm"},"Upload Images",-1)),ie={class:"row"},V="dmsfm3yci",ne="k4zgfot1",ce="982483478999539",ue="I0eChqGfHW5t6mr47HgxOqIouqs",de={__name:"ImageGallery",props:{multiple:{type:Boolean,default:!1},existingFile:{type:Array,default:()=>[]}},emits:["upload"],setup(i,{emit:w}){const y=i;ae();const x=u(!1),z=K(()=>y.multiple?5:1),o=u([]),I=u([]),f=u(!1),B=u(""),C=u(),P=u([]);Q(()=>y.existingFile,t=>{o.value=t.map(a=>({url:a}))},{immediate:!0}),Q(()=>o.value,()=>{T()},{deep:!0});const R=()=>{C.value.click()},D=async t=>{const a=t.target.files[0];try{f.value=!0;const e=await j(a);I.value.push(URL.createObjectURL(a)),o.value.push({file:a,url:e.data.secure_url,public_id:e.data.public_id,signature:e.data.signature})}catch(e){console.log(e)}finally{f.value=!1}t.target.value=null},G=async(t,a)=>{await O(t.public_id,t.signature),I.value.splice(a,1),o.value.splice(a,1)},N=(t,a,e)=>new Promise((s,b)=>{const m=new Image;m.src=URL.createObjectURL(t),m.onload=()=>{const v=document.createElement("canvas");let n=m.width,c=m.height;n>c?n>a&&(c*=a/n,n=a):c>e&&(n*=e/c,c=e),v.width=n,v.height=c,v.getContext("2d").drawImage(m,0,0,n,c),v.toBlob($=>{s($)},t.type)},m.onerror=v=>{b(v)}}),O=async(t,a)=>{try{return await A.post(`https://api.cloudinary.com/v1_1/${V}/:image/destroy`,{public_id:t,signature:a,api_key:ce,api_secret:ue})}catch(e){throw console.error("Error deleteing image:",e),e}},j=async t=>{if(!t){alert("Please select a file first.");return}f.value=!0;const a=await N(t,800,600),e=new FormData;e.append("file",a),e.append("upload_preset",ne);try{const s=await A.post(`https://api.cloudinary.com/v1_1/${V}/image/upload`,e);return B.value=s.data.secure_url,s}catch(s){throw console.error("Error uploading image:",s),s}finally{f.value=!1}},T=()=>{y.multiple?w("upload",o.value):w("upload",o.value[0])};return Y(()=>{}),(t,a)=>(d(),p("div",null,[o.value.length?(d(),p("div",le,[(d(!0),p(k,null,q(o.value,(e,s)=>(d(),p("div",{key:s,class:U(["preview-item",{multiple:i.multiple}])},[l(F,{src:e.url,ratio:1,"no-native-menu":"",class:"rounded-borders"},{default:r(()=>[l(_,{round:"",color:"red",icon:"close",size:"sm",class:"absolute all-pointer-events",style:{top:"4px",right:"4px"},onClick:b=>G(e,s)},null,8,["onClick"])]),_:2},1032,["src"])],2))),128))])):E("",!0),o.value.length<z.value?(d(),p("div",se,[l(_,{onClick:R,outline:"",color:"primary",class:"upload-btn full-width",style:{height:"90px"},loading:f.value},{default:r(()=>[g("div",oe,[l(H,{name:"cloud_upload",size:"36px"})]),re]),_:1},8,["loading"]),g("input",{hidden:"",type:"file",ref_key:"uploader",ref:C,onChange:D},null,544)])):E("",!0),l(ee,{position:"bottom",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e)},{default:r(()=>[l(Z,{class:"dialog-radius-50"},{default:r(()=>[l(L,{class:"flex justify-center text-primary text-h5 q-px-xl q-py-lg"},{default:r(()=>[h(" Gallery ")]),_:1}),l(S),l(L,{style:{"max-height":"70vh"},class:"q-px-lg scroll"},{default:r(()=>[g("div",ie,[(d(!0),p(k,null,q(P.value,(e,s)=>(d(),p("div",{key:s,class:U(["col-4 q-pa-sm",{multiple:i.multiple}])},[l(F,{src:e.file_path,ratio:1,"no-native-menu":"",class:"rounded-borders"},null,8,["src"])],2))),128))])]),_:1}),l(S),l(W,{class:"q-px-lg row"},{default:r(()=>[l(_,{outline:"",unelvated:"",rounded:"",class:"col"},{default:r(()=>[h(" Cancel ")]),_:1}),l(_,{color:"primary",unelevated:"",rounded:"",class:"col"},{default:r(()=>[h(" Select ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var xe=M(de,[["__scopeId","data-v-ed7fec56"]]);export{xe as I};
