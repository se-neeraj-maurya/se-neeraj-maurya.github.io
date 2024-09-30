import{u as R,l as T,r as u,o as Y,n as d,t as y,s as a,f as e,q as r,Q as v,v as i,p as q,a2 as $,aa as P,a5 as n,F as j,a6 as z,Y as G}from"./index.e4506442.js";import{a as c,Q as f}from"./QCard.654a06cc.js";import{Q as b}from"./QSeparator.bb25cabe.js";import{Q as C}from"./QSkeleton.988a5daa.js";import{Q as V}from"./QImg.41d90a0b.js";import{Q as M,a as I}from"./QItem.b05542e0.js";import{Q as O}from"./QToggle.4302f139.js";import{Q as H}from"./QCardActions.d5bc900a.js";import{Q as J}from"./QDialog.ebf329ce.js";import{Q as K}from"./QPage.f0715e16.js";import{C as W}from"./ClosePopup.3a6145a3.js";import{u as X}from"./adminStore.81006aa5.js";import{I as Z}from"./ImageGallery.99b72fc9.js";import"./use-dark.94287824.js";import"./option-sizes.71d2737a.js";import"./use-form.bfe53f73.js";import"./focus-manager.02955f48.js";import"./axios.boot.491fc198.js";const ee={class:"row items-center"},ae=r("div",{class:"text-h5 q-ml-md"},"Products Detail",-1),te=r("div",{class:"tt-spacer"},null,-1),se={key:0,class:"q-ma-md"},le={key:1,class:"lists q-pa-md"},oe={class:"q-mb-md"},re=r("span",{class:"text-weight-medium"},"Sell Price :",-1),de={class:"q-mb-md"},ie=r("span",{class:"text-weight-medium"},"Cost Price :",-1),ce={class:"q-mb-md ellipsis"},ue=r("span",{class:"text-weight-medium"},"Stock :",-1),ne={class:"q-mb-md"},me=r("span",{class:"text-weight-medium"},"Unit :",-1),pe=r("div",{class:"text-weight-medium q-mb-sm"},"Description :",-1),ve=["onClick"],fe=r("span",{class:"q-ml-sm text-h5 text-center"},"Are you sure want to delete Image.",-1),Ue=Object.assign({name:"ProductLists"},{__name:"ListDetail",setup(_e){const m=X(),S=R(),x=T(),t=u({}),p=u(!0),_=u([]),g=u(!1),Q=u(0),k=u(-1),h=u(!1),D=async(s,l)=>{try{const o={id:s,status:l},w=await m.UpdateProductStatus(o);$q.notify({progress:!0,position:"top",message:w.message,color:"green",timeout:2e3})}catch(o){console.error(o)}finally{}},A=async s=>{try{p.value=!0;const l=await m.FetchSingleProduct(s);t.value=l.data}finally{p.value=!1}},B=()=>{S.back()},L=()=>{const s=x.params.id;S.push({name:"product-update",params:{id:s}})},N=s=>{console.log(s),s&&Array.isArray(s)&&(_.value=s.map(l=>l.url))},U=async()=>{try{const s=x.params.id;p.value=!0;const l={id:s,images:_.value};await m.uploadProductImage(l);const o=await m.FetchSingleProduct(s);t.value=o.data,_.value=[]}finally{p.value=!1}},F=(s,l)=>{Q.value=s,k.value=l,h.value=!0},E=async()=>{g.value=!0;try{await m.deleteProductImage(Q.value),t.value.images.splice(k.value,1),Q.value=0,k.value=-1,h.value=!1}catch(s){console.error(s)}finally{g.value=!1}};return Y(()=>{const s=x.params.id;A(s)}),(s,l)=>(d(),y(K,{class:"aa-product-list-page"},{default:a(()=>[e(f,{unelevated:"",class:"aa-product-page"},{default:a(()=>[e(c,{class:"row items-center header-action-bar q-px-xs"},{default:a(()=>[r("div",ee,[e(v,{round:"",unelevated:"",icon:"arrow_back",onClick:B}),ae]),te,e(v,{class:"q-mr-md",rounded:"",outline:"",unelevated:"",onClick:L},{default:a(()=>[i("Edit")]),_:1})]),_:1}),e(b),e(c,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none bg-grey-4"},{default:a(()=>[p.value?(d(),q("div",se,[e(C,{class:"q-mb-lg",height:"200px",square:""}),e(C,{class:"q-mb-lg",height:"150px",square:""}),e(C,{height:"100px"})])):(d(),q("div",le,[e(f,{class:"my-card q-mb-md",flat:"",bordered:""},{default:a(()=>[e(M,null,{default:a(()=>[e(I,{avatar:""},{default:a(()=>[t.value.images&&t.value.images.length?(d(),y($,{key:0,square:""},{default:a(()=>[e(V,{src:t.value.images[0].file_path},null,8,["src"])]),_:1})):P("",!0)]),_:1}),e(I,{class:"ellipsis text-weight-medium"},{default:a(()=>[i(n(t.value.name),1)]),_:1}),e(I,{side:""},{default:a(()=>[e(O,{"onUpdate:modelValue":[l[0]||(l[0]=o=>D(t.value.id,o)),l[1]||(l[1]=o=>t.value.isPublished=o)],modelValue:t.value.isPublished},null,8,["modelValue"])]),_:1})]),_:1}),e(b),e(c,{horizontal:""},{default:a(()=>[e(c,{class:"col q-pa-md"},{default:a(()=>[r("div",oe,[re,i(" "+n(t.value.sellPrice),1)]),r("div",de,[ie,i(" "+n(t.value.costPrice?t.value.costPrice:"--"),1)])]),_:1}),e(b,{vertical:""}),e(c,{class:"col q-pa-md"},{default:a(()=>[r("div",ce,[ue,i(" "+n(t.value.stock?t.value.stock:"--"),1)]),r("div",ne,[me,i(" "+n(t.value.uomQty)+" "+n(t.value.uom),1)])]),_:1})]),_:1}),e(b),e(c,{class:"col q-pa-md"},{default:a(()=>[pe,i(" "+n(t.value.description),1)]),_:1})]),_:1}),e(f,{class:"my-card row q-mb-md q-pa-md",flat:"",bordered:""},{default:a(()=>[(d(!0),q(j,null,z(t.value.images,(o,w)=>(d(),y(c,{class:"col-6 rounded-borders",style:{border:"1px solid grey"},key:o.file_path},{default:a(()=>[e(V,{src:o.file_path},null,8,["src"]),t.value.images.length>1?(d(),q("div",{key:0,onClick:ge=>F(o.id,w),class:"text-red text-center q-mt-sm"}," Delete ",8,ve)):P("",!0)]),_:2},1024))),128))]),_:1}),e(f,{class:"q-mb-md q-pa-md",flat:"",bordered:""},{default:a(()=>[e(Z,{multiple:"",onUpload:N}),_.value.length?(d(),y(v,{key:0,color:"primary",outline:"",class:"q-mt-md full-width",onClick:U},{default:a(()=>[i("Click to upload")]),_:1})):P("",!0)]),_:1})]))]),_:1})]),_:1}),e(J,{modelValue:h.value,"onUpdate:modelValue":l[2]||(l[2]=o=>h.value=o),persistent:""},{default:a(()=>[e(f,{class:"q-pa-md"},{default:a(()=>[e(c,{class:"row items-center"},{default:a(()=>[fe]),_:1}),e(H,{align:"center"},{default:a(()=>[G(e(v,{outline:"",disable:g.value,class:"q-mx-md",label:"No",color:"red"},null,8,["disable"]),[[W]]),e(v,{class:"q-mx-md",label:"Yes",color:"red",loading:g.value,onClick:E},null,8,["loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Ue as default};
