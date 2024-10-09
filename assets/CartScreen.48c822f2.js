import{k as $,r as z,l as A,c as k,o as D,p as r,x as g,t as n,f as o,ax as C,s as t,Q as m,ay as p,af as w,q as d,v as x,F as h,ah as F,aE as V,am as b,ac as M,ag as c,al as P,aw as E}from"./index.85b4eabb.js";import{Q as O}from"./QCardActions.b7aaf9b3.js";import{N as R}from"./NoData.54acfb85.js";import{u as H}from"./cart-store.17921f79.js";const L={class:"row items-center"},Y=t("div",{class:"text-h5 q-ml-md"},"My Cart",-1),j=t("div",{class:"tt-spacer"},null,-1),G={key:0,class:"q-mt-lg text-center"},J=t("p",{class:"text-center text-h5 q-py-xl"},"Your cart is empty",-1),K={class:"q-pa-md product-detail"},U=["onClick"],W={class:"title text-h6 text-grey-8 ellipsis"},X={class:"price text-body-1 q-mt-sm text-weight-medium"},Z={key:0,class:"gross-price text-body-1"},tt={key:0,class:"text-red"},et=t("div",{class:"tt-spacer"},null,-1),st={style:{width:"95px","min-width":"95px"},class:"q-pl-md row items-center"},at={class:"text-center text-h5",style:{width:"30px"}},ot={class:"q-mt-md"},lt={class:"flex text-weight-medium q-py-sm q-px-md"},it=t("div",null,"SubTotal",-1),ct=t("div",{class:"tt-spacer"},null,-1),rt=t("div",{class:"flex text-weight-medium q-py-sm q-px-md"},[t("div",null,"Delivery Charges"),t("div",{class:"tt-spacer"}),t("div",{class:"text-uppercase"},"Free")],-1),nt={class:"flex text-weight-medium text-red q-py-sm q-px-md"},dt=t("div",null,"Discount",-1),ut=t("div",{class:"tt-spacer"},null,-1),mt={class:"flex text-primary text-weight-bold text-h6 q-py-sm q-px-md"},_t=t("div",null,"Total",-1),pt=t("div",{class:"tt-spacer"},null,-1),ht=t("div",null,"Total Amount",-1),vt={class:"text-h5 text-weight-bold"},yt=t("div",{class:"tt-spacer"},null,-1),xt=t("span",{style:{"font-weight":"400","letter-spacing":"0.65px"},class:"q-mr-xs q-px-md text-capitalize"},"Order Now ",-1),wt={__name:"CartScreen",setup(ft){const I=$(),l=H(),u=z([]),v=A(),Q=()=>{v.push({name:"home"})},S=()=>{v.push({name:"home"})},_=k(()=>l.cartItems.reduce((a,s)=>(s.isPublished&&(a=a+s.sellPrice*s.quantity),a),0)),f=k(()=>l.cartItems.reduce((a,s)=>{if(s.isPublished){const e=s.comparePrice?s.comparePrice:s.sellPrice;a=a+e*s.quantity}return a},0)),N=async(a,s)=>{const e=--l.cartItems[s].quantity;if(l.cartItems[s].quantity<=0){q(a,s);return}else{const i={product_id:a.product_id,quantity:e};try{u.value[s]=!0,await l.updateCart(i)}finally{u.value[s]=!1}}},B=async(a,s)=>{if(a.stock==l.cartItems[s].quantity){I.notify({progress:!0,type:"negative",position:"top",message:`Only ${a.stock} items available.`,color:"red",timeout:2e3});return}const e=++l.cartItems[s].quantity,i={product_id:a.product_id,quantity:e};try{u.value[s]=!0,await l.updateCart(i)}finally{u.value[s]=!1}},q=async(a,s)=>{try{l.removeFromCart(a),l.cartItems.splice(s,1)}catch(e){console.log(e)}},T=()=>{v.replace({name:"order-confirmation"})};return D(()=>{l.fetchCartItem()}),(a,s)=>(r(),g(E,{flat:""},{default:n(()=>[o(C,{class:"row items-center header-action-bar q-px-xs"},{default:n(()=>[t("div",L,[o(m,{round:"",unelevated:"",icon:"arrow_back",onClick:Q}),Y]),j]),_:1}),o(p),w(l).cartItems.length==0?(r(),d("div",G,[o(R),J,o(m,{onClick:S,class:"q-px-xl",outline:"",color:"primary","no-caps":"",unelevated:"",rounded:""},{default:n(()=>[x(" Shop Now ")]),_:1})])):(r(),d(h,{key:1},[o(C,{style:{height:"calc(100vh - 124px)"},class:"scroll q-pa-none"},{default:n(()=>[t("div",K,[(r(!0),d(h,null,F(w(l).cartItems,(e,i)=>(r(),d(h,{key:"product-key"+i},[t("div",{class:"cart-product items-center q-py-sm",onClick:V(y=>a.$emit("click:detail",e),["prevent","stop"])},[t("div",{style:{width:"60px"},class:b({"out-of-stock":!e.isPublished})},[o(M,{class:"rounded-borders product-thumbnail",style:{width:"60px"},src:e.thumbnail},null,8,["src"])],2),t("div",{class:b(["product-detail ellipsis q-pl-sm",{"out-of-stock":!e.isPublished}])},[t("div",W,c(e.name),1),t("div",X,[x(" \u20B9 "+c(e.sellPrice)+" / "+c(e.uomQty)+" "+c(e.uom)+" ",1),t("div",null,[e.comparePrice?(r(),d("span",Z," \u20B9 "+c(e.comparePrice),1)):P("",!0)])]),e.isPublished==0?(r(),d("div",tt," Sorry product is out of stock ")):P("",!0)],2),et,t("div",st,[e.isPublished==0?(r(),g(m,{key:0,color:"red",rounded:"",unelevated:"",size:"sm",onClick:y=>q(e,i)},{default:n(()=>[x("Remove")]),_:2},1032,["onClick"])):(r(),d(h,{key:1},[o(m,{color:"primary",round:"",unelevated:"",icon:"remove",size:"xs",loading:u.value[i],onClick:y=>N(e,i)},null,8,["loading","onClick"]),t("div",at,c(e.quantity),1),o(m,{color:"primary",round:"",unelevated:"",icon:"add",size:"xs",loading:u.value[i],onClick:y=>B(e,i)},null,8,["loading","onClick"])],64))])],8,U),o(p)],64))),128)),t("div",ot,[t("div",lt,[it,ct,t("div",null,"\u20B9 "+c(f.value),1)]),rt,t("div",nt,[dt,ut,t("div",null,"\u20B9 "+c(f.value-_.value),1)]),o(p),t("div",mt,[_t,pt,t("div",null,"\u20B9 "+c(_.value),1)])])])]),_:1}),o(p),o(O,{class:"q-mx-md"},{default:n(()=>[t("div",null,[ht,t("div",vt,"\u20B9 "+c(_.value),1)]),yt,o(m,{unelevated:"","no-caps":"",rounded:"",color:"primary",disabled:!_.value,onClick:T},{default:n(()=>[xt]),_:1},8,["disabled"])]),_:1})],64))]),_:1}))}};export{wt as default};
