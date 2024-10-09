import{l as E,m as R,r as u,o as T,p as r,x as y,t as a,f as e,aw as v,ax as i,s as d,Q as _,v as c,ay as q,q as x,ad as $,ac as V,al as P,ag as n,F as j,ah as G,az as M,a1 as O}from"./index.85b4eabb.js";import{Q as C}from"./QSkeleton.8b35fb2e.js";import{Q as Y,a as I}from"./QItem.bb4b5915.js";import{Q as H}from"./QToggle.fc2ee63b.js";import{Q as J}from"./QCardActions.b7aaf9b3.js";import{Q as K}from"./QPage.f75849b8.js";import{C as W}from"./ClosePopup.1d3c12f1.js";import{u as X}from"./adminStore.394d471e.js";import{I as Z}from"./ImageGallery.a2c516ba.js";import"./option-sizes.79a54e45.js";const ee={class:"row items-center"},ae=d("div",{class:"text-h5 q-ml-md"},"Products Detail",-1),te=d("div",{class:"tt-spacer"},null,-1),se={key:0,class:"q-ma-md"},le={key:1,class:"lists q-pa-md"},oe={class:"q-mb-md"},de=d("span",{class:"text-weight-medium"},"Sell Price :",-1),re={class:"q-mb-md"},ie=d("span",{class:"text-weight-medium"},"Cost Price :",-1),ce={class:"q-mb-md ellipsis"},ue=d("span",{class:"text-weight-medium"},"Stock :",-1),ne={class:"q-mb-md"},me=d("span",{class:"text-weight-medium"},"Unit :",-1),pe=d("div",{class:"text-weight-medium q-mb-sm"},"Description :",-1),ve=["onClick"],_e=d("span",{class:"q-ml-sm text-h5 text-center"},"Are you sure want to delete Image.",-1),Ie=Object.assign({name:"ProductLists"},{__name:"ListDetail",setup(fe){const m=X(),S=E(),b=R(),t=u({}),p=u(!0),f=u([]),g=u(!1),k=u(0),w=u(-1),h=u(!1),D=async(s,l)=>{try{const o={id:s,status:l},Q=await m.UpdateProductStatus(o);$q.notify({progress:!0,position:"top",message:Q.message,color:"green",timeout:2e3})}catch(o){console.error(o)}finally{}},A=async s=>{try{p.value=!0;const l=await m.FetchSingleProduct(s);t.value=l.data}finally{p.value=!1}},B=()=>{S.back()},L=()=>{const s=b.params.id;S.push({name:"product-update",params:{id:s}})},N=s=>{console.log(s),s&&Array.isArray(s)&&(f.value=s.map(l=>l.url))},U=async()=>{try{const s=b.params.id;p.value=!0;const l={id:s,images:f.value};await m.uploadProductImage(l);const o=await m.FetchSingleProduct(s);t.value=o.data,f.value=[]}finally{p.value=!1}},F=(s,l)=>{k.value=s,w.value=l,h.value=!0},z=async()=>{g.value=!0;try{await m.deleteProductImage(k.value),t.value.images.splice(w.value,1),k.value=0,w.value=-1,h.value=!1}catch(s){console.error(s)}finally{g.value=!1}};return T(()=>{const s=b.params.id;A(s)}),(s,l)=>(r(),y(K,{class:"aa-product-list-page"},{default:a(()=>[e(v,{unelevated:"",class:"aa-product-page"},{default:a(()=>[e(i,{class:"row items-center header-action-bar q-px-xs"},{default:a(()=>[d("div",ee,[e(_,{round:"",unelevated:"",icon:"arrow_back",onClick:B}),ae]),te,e(_,{class:"q-mr-md",rounded:"",outline:"",unelevated:"",onClick:L},{default:a(()=>[c("Edit")]),_:1})]),_:1}),e(q),e(i,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none bg-grey-4"},{default:a(()=>[p.value?(r(),x("div",se,[e(C,{class:"q-mb-lg",height:"200px",square:""}),e(C,{class:"q-mb-lg",height:"150px",square:""}),e(C,{height:"100px"})])):(r(),x("div",le,[e(v,{class:"my-card q-mb-md",flat:"",bordered:""},{default:a(()=>[e(Y,null,{default:a(()=>[e(I,{avatar:""},{default:a(()=>[t.value.images&&t.value.images.length?(r(),y($,{key:0,square:""},{default:a(()=>[e(V,{src:t.value.images[0].file_path},null,8,["src"])]),_:1})):P("",!0)]),_:1}),e(I,{class:"ellipsis text-weight-medium"},{default:a(()=>[c(n(t.value.name),1)]),_:1}),e(I,{side:""},{default:a(()=>[e(H,{"onUpdate:modelValue":[l[0]||(l[0]=o=>D(t.value.id,o)),l[1]||(l[1]=o=>t.value.isPublished=o)],modelValue:t.value.isPublished},null,8,["modelValue"])]),_:1})]),_:1}),e(q),e(i,{horizontal:""},{default:a(()=>[e(i,{class:"col q-pa-md"},{default:a(()=>[d("div",oe,[de,c(" "+n(t.value.sellPrice),1)]),d("div",re,[ie,c(" "+n(t.value.costPrice?t.value.costPrice:"--"),1)])]),_:1}),e(q,{vertical:""}),e(i,{class:"col q-pa-md"},{default:a(()=>[d("div",ce,[ue,c(" "+n(t.value.stock?t.value.stock:"--"),1)]),d("div",ne,[me,c(" "+n(t.value.uomQty)+" "+n(t.value.uom),1)])]),_:1})]),_:1}),e(q),e(i,{class:"col q-pa-md"},{default:a(()=>[pe,c(" "+n(t.value.description),1)]),_:1})]),_:1}),e(v,{class:"my-card row q-mb-md q-pa-md",flat:"",bordered:""},{default:a(()=>[(r(!0),x(j,null,G(t.value.images,(o,Q)=>(r(),y(i,{class:"col-6 rounded-borders",style:{border:"1px solid grey"},key:o.file_path},{default:a(()=>[e(V,{src:o.file_path},null,8,["src"]),t.value.images.length>1?(r(),x("div",{key:0,onClick:ge=>F(o.id,Q),class:"text-red text-center q-mt-sm"}," Delete ",8,ve)):P("",!0)]),_:2},1024))),128))]),_:1}),e(v,{class:"q-mb-md q-pa-md",flat:"",bordered:""},{default:a(()=>[e(Z,{multiple:"",onUpload:N}),f.value.length?(r(),y(_,{key:0,color:"primary",outline:"",class:"q-mt-md full-width",onClick:U},{default:a(()=>[c("Click to upload")]),_:1})):P("",!0)]),_:1})]))]),_:1})]),_:1}),e(M,{modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=o=>h.value=o),persistent:""},{default:a(()=>[e(v,{class:"q-pa-md"},{default:a(()=>[e(i,{class:"row items-center"},{default:a(()=>[_e]),_:1}),e(J,{align:"center"},{default:a(()=>[O(e(_,{outline:"",disable:g.value,class:"q-mx-md",label:"No",color:"red"},null,8,["disable"]),[[W]]),e(_,{class:"q-mx-md",label:"Yes",color:"red",loading:g.value,onClick:z},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Ie as default};
