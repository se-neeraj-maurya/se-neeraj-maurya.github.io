import{am as V,r as m,l as A,u as N,c as $,o as U,n as o,p as l,q as t,f as c,Q as g,t as _,s as v,a8 as n,v as y,ad as f,F as W,a9 as R,ao as j,ap as D}from"./index.cb068a47.js";import{Q as d}from"./QSkeleton.fbf6f48f.js";import{Q as F}from"./QImg.bacbfb84.js";import{Q as M,a as O}from"./QCarousel.7a1a8996.js";import{u as T}from"./globalStore.d93cb0fa.js";import"./use-dark.fc2509f2.js";import"./selection.1188b338.js";import"./axios.boot.0336990f.js";const h=i=>(j("data-v-3078c49d"),i=i(),D(),i),z={class:"row items-center header-action-bar q-px-xs"},E={class:"row items-center"},G=h(()=>t("div",{class:"text-h5 q-ml-md"},"Back",-1)),L=h(()=>t("div",{class:"tt-spacer"},null,-1)),H={class:"scroll"},J={key:0,class:"q-pa-md"},K={key:1,class:"q-pa-md product-detail"},X={class:""},Y={class:"text-h5 text-weight-medium q-mt-sm"},Z={class:"text- text-grey-8 q-mt-sm"},ee={class:"flex item-center q-my-md"},te={class:"text-h6"},ae={key:0,class:"gross-price q-pl-sm"},se=h(()=>t("div",{class:"tt-spacer"},null,-1)),oe={key:0,class:"q-mt-sm"},re={class:"q-pa-lg"},le={__name:"WhatsappShare",setup(i){const x=T(),u=m(!1),w=A(),k=N(),p=m(),e=m({}),q=$(()=>e.value&&e.value.images?e.value.images.map(a=>a.file_path):[]),S=()=>{k.push({name:"home"})},b=async a=>{u.value=!0;try{const s=await x.fetchSingleProduct(a);e.value=s.data,p.value=e.value.images[0].file_path,C()}catch(s){console.log(s)}finally{u.value=!1}},Q=a=>{const s=a.name,r=a.sellPrice;a.description;const B=a.images[0].file_path,I=`Check out this product: ${s}
Price: ${r}
See the image: ${B}`,P=`https://api.whatsapp.com/send?text=${encodeURIComponent(I)}`;window.open(P,"_blank")},C=()=>{document.querySelector('meta[property="og:title"]').setAttribute("content",e.value.name),document.querySelector('meta[property="og:description"]').setAttribute("content",e.value.description),document.querySelector('meta[property="og:image"]').setAttribute("content",e.value.images[0].file_path),document.querySelector('meta[property="og:url"]').setAttribute("content",window.location.href),document.querySelector('meta[property="og:type"]').setAttribute("content","website")};return U(()=>{const a=w.params.id;b(a)}),(a,s)=>(o(),l("div",null,[t("div",z,[t("div",E,[c(g,{round:"",unelevated:"",icon:"arrow_back",onClick:S}),G]),L]),t("div",H,[t("div",null,[u.value?(o(),_(d,{key:0,height:"200px",square:""})):(o(),_(M,{key:1,modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=r=>p.value=r),"transition-prev":"jump-right","transition-next":"jump-left",swipeable:"",animated:"","control-color":"white","prev-icon":"arrow_left","next-icon":"arrow_right",navigation:"",infinite:"","keep-alive":"",autoplay:2e3,class:"detail-carousel"},{default:v(()=>[(o(!0),l(W,null,R(q.value,r=>(o(),_(O,{key:r,name:r},{default:v(()=>[c(F,{class:"rounded-borders",fit:"contain",src:r,loading:"lazy","spinner-color":"white",height:"200px"},null,8,["src"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]))]),u.value?(o(),l("div",J,[c(d,{type:"text",class:"text-subtitle1"}),c(d,{type:"text",class:"text-subtitle1"}),c(d,{type:"text",class:"text-subtitle1"})])):(o(),l("div",K,[t("div",X,[t("div",Y,n(e.value.name),1),t("div",Z,n(e.value.uomQty)+" "+n(e.value.uom),1)]),t("div",ee,[t("div",te,[y(" \u20B9 "+n(e.value.sellPrice)+" ",1),e.value.comparePrice?(o(),l("span",ae," \u20B9 "+n(e.value.comparePrice),1)):f("",!0)]),se]),e.value.description?(o(),l("p",oe,n(e.value.description),1)):f("",!0)]))]),t("div",re,[c(g,{unelevated:"",rounded:"",class:"q-px-lg full-width",color:"primary",onClick:s[1]||(s[1]=r=>Q(e.value))},{default:v(()=>[y(" Order Now ")]),_:1})])]))}};var ve=V(le,[["__scopeId","data-v-3078c49d"]]);export{ve as default};
