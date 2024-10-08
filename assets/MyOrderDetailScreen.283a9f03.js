import{u as V,l as F,r as C,c as L,o as R,n as o,p as r,f as i,s as d,q as e,Q as T,F as c,a9 as D,a8 as t,a7 as A,v as n,aa as h}from"./index.c73ad5d1.js";import{Q as E,a as O}from"./QCard.f27ef106.js";import{Q as m}from"./QSkeleton.c57ae26c.js";import{Q as P}from"./QChip.c8662ee6.js";import{Q as U}from"./QImg.1c1ad563.js";import{S as G}from"./formatting.897fab98.js";import{u as H}from"./cart-store.24769fea.js";import"./use-dark.008590ea.js";import"./axios.boot.7a3cb386.js";const J={class:"wrapper-my-profile"},K={class:"row items-center"},W=e("div",{class:"text-h5 q-ml-md"},"Order Details",-1),X={class:"q-px-lg q-mb-md"},Y={class:"profile-card col q-mx-md q-px-md q-py-md bg-white"},Z={class:"text-h5 flex items-center justify-between q-mb-lg"},$={class:"q-pl-sm"},ee={class:"text-weight-medium text-h6 q-mb-xs"},te=e("div",{class:"tt-spacer"},null,-1),se={class:"text-h5 text-weight-medium text-primary"},ae={class:"profile-card col q-mx-md q-my-md q-px-md q-py-md bg-white"},ie={class:"text-h5 flex items-center justify-between"},oe=e("div",null,"Total",-1),re={class:"text-h5 text-weight-medium text-primary"},le={class:"profile-card col q-mx-md q-my-md q-px-md q-py-md bg-white"},de=e("div",{class:"text-h5 flex items-center justify-between q-mb-lg"},[e("div",null,"Order Details")],-1),ce={class:"q-mt-lg"},ne=e("div",{class:"text-grey q-mb-xs"},"Order ID",-1),me={class:"text-grey-800 text-weight-medium text-h6"},_e={class:"q-mt-lg"},ue=e("div",{class:"text-grey q-mb-xs"},"Payment Mode",-1),he={class:"text-grey-800 text-weight-medium text-h6"},pe={class:"q-mt-lg"},xe=e("div",{class:"text-grey q-mb-xs"},"Order Date",-1),ge={class:"text-grey-800 text-weight-medium text-h6"},ve={class:"q-mt-lg"},ye=e("div",{class:"text-grey q-mb-sm"},"Delivery Address",-1),qe={class:"text-grey-800 text-weight-medium text-h6 q-mb-sm"},fe={class:"text-grey-800 text-weight-medium text-h6 q-mb-sm"},be={class:"text-grey-800 text-weight-medium text-h6"},ze={__name:"MyOrderDetailScreen",setup(we){const B=V(),I=F(),j=H(),s=C({}),_=C(!0),z=()=>{B.back()},M=async()=>{try{_.value=!0;const l=I.params.id,u=await j.getSingleOrder(l);s.value=u.data,console.log(u)}finally{_.value=!1}},N=L(()=>{var l;return(l=s.value)!=null&&l.items?s.value.items.length:null});return R(()=>{M()}),(l,u)=>(o(),r("div",J,[i(E,{class:"bg-grey-3"},{default:d(()=>[i(O,{class:"row items-center header-action-bar q-px-xs"},{default:d(()=>[e("div",K,[i(T,{round:"",unelevated:"",icon:"arrow_back",onClick:z}),W])]),_:1}),i(O,{style:{height:"calc(100vh - 66px)"},class:"scroll q-pa-none"},{default:d(()=>{var p,x,g,v,y,q,f,b,w,Q,k,S;return[_.value?(o(),r(c,{key:0},[(o(),r(c,null,D(2,a=>e("div",{class:"q-px-lg q-mb-md",key:a},[i(m,{height:"50px",square:""}),i(m,{height:"30px",type:"text",class:"text-subtitle1"}),i(m,{height:"30px",type:"text",class:"text-subtitle1"})])),64)),e("div",X,[i(m,{height:"250px",square:""})])],64)):(o(),r(c,{key:1},[e("div",Y,[e("div",Z,[e("div",null,"("+t(N.value)+") Items in order",1),i(P,{color:A(G)((p=s.value)==null?void 0:p.status),"text-color":"white"},{default:d(()=>{var a;return[n(t((a=s.value)==null?void 0:a.status.toUpperCase()),1)]}),_:1},8,["color"])]),(o(!0),r(c,null,D((x=s.value)==null?void 0:x.items,a=>(o(),r("div",{class:"flex items-center q-mt-lg",key:a.name},[e("div",null,[i(U,{class:"rounded-borders",style:{width:"60px"},src:a.image},null,8,["src"])]),e("div",$,[e("div",ee,t(a.name),1),e("div",null,t(a.quantity)+" Quantity",1),e("div",null," \u20B9"+t(a.price)+" /"+t(a.uomQty)+" "+t(a.uom),1)]),te,e("div",se," \u20B9 "+t(a.price*a.quantity),1)]))),128))]),e("div",ae,[e("div",ie,[oe,e("div",re," \u20B9 "+t(s.value.total_price),1)])]),e("div",le,[de,e("div",ce,[ne,e("p",me," #"+t(s.value.barcode),1)]),e("div",_e,[ue,e("p",he,t(s.value.payment_mode),1)]),e("div",pe,[xe,e("p",ge,t(s.value.created_at_formated),1)]),e("div",ve,[ye,e("p",qe,[i(h,{size:"16px",name:"person",style:{"margin-right":"2px"}}),n(" "+t((v=(g=s.value)==null?void 0:g.shipping_address)==null?void 0:v.name),1)]),e("p",fe,[i(h,{size:"16px",name:"phone",style:{"margin-right":"2px"}}),n(" "+t((q=(y=s.value)==null?void 0:y.shipping_address)==null?void 0:q.phone),1)]),e("p",be,[i(h,{size:"16px",name:"pin_drop",style:{"margin-right":"2px"}}),n(" "+t((b=(f=s.value)==null?void 0:f.shipping_address)==null?void 0:b.address_line1)+" "+t((Q=(w=s.value)==null?void 0:w.shipping_address)==null?void 0:Q.address_line2)+" "+t((S=(k=s.value)==null?void 0:k.shipping_address)==null?void 0:S.postal_code),1)])])])],64))]}),_:1})]),_:1})]))}};export{ze as default};
