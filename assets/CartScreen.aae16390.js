import{k as B,r as P,u as $,c as z,o as T,n as i,t as k,s as c,f as o,q as e,Q as d,a4 as q,p as u,v as C,F as p,a6 as V,an as A,a9 as x,a5 as m,aa as F}from"./index.e4506442.js";import{Q as M,a as g}from"./QCard.654a06cc.js";import{Q as y}from"./QSeparator.bb25cabe.js";import{Q as D}from"./QImg.41d90a0b.js";import{Q as O}from"./QCardActions.d5bc900a.js";import{N as R}from"./NoData.16358c9d.js";import{u as E}from"./cart-store.39e945a6.js";import"./use-dark.94287824.js";import"./axios.boot.491fc198.js";const H={class:"row items-center"},L=e("div",{class:"text-h5 q-ml-md"},"My Cart",-1),Y=e("div",{class:"tt-spacer"},null,-1),j={key:0,class:"q-mt-lg text-center"},G=e("p",{class:"text-center text-h5 q-py-xl"},"Your cart is empty",-1),J={class:"q-pa-md product-detail"},K=["onClick"],U={class:"title text-h6 text-grey-8 ellipsis"},W={class:"price text-body-1 q-mt-sm text-weight-medium"},X={key:0,class:"text-red"},Z=e("div",{class:"tt-spacer"},null,-1),tt={style:{width:"95px","min-width":"95px"},class:"q-pl-md row items-center"},et={class:"text-center text-h5",style:{width:"30px"}},st=e("div",null,"Total Amount",-1),at={class:"text-h5 text-weight-bold"},ot=e("div",{class:"tt-spacer"},null,-1),rt=e("span",{style:{"font-weight":"400","letter-spacing":"0.65px"},class:"q-mr-xs q-px-md text-capitalize"},"Order Now ",-1),yt={__name:"CartScreen",setup(lt){const w=B(),r=E(),n=P([]),_=$(),b=()=>{_.push({name:"home"})},Q=()=>{_.push({name:"home"})},v=z(()=>r.cartItems.reduce((a,s)=>(s.isPublished&&(a=a+s.sellPrice*s.quantity),a),0)),I=async(a,s)=>{const t=--r.cartItems[s].quantity;if(r.cartItems[s].quantity<=0){f(a,s);return}else{const l={product_id:a.product_id,quantity:t};try{n.value[s]=!0,await r.updateCart(l)}finally{n.value[s]=!1}}},N=async(a,s)=>{if(a.stock==r.cartItems[s].quantity){w.notify({progress:!0,type:"negative",position:"top",message:`Only ${a.stock} items available.`,color:"red",timeout:2e3});return}const t=++r.cartItems[s].quantity,l={product_id:a.product_id,quantity:t};try{n.value[s]=!0,await r.updateCart(l)}finally{n.value[s]=!1}},f=async(a,s)=>{try{r.removeFromCart(a),r.cartItems.splice(s,1)}catch(t){console.log(t)}},S=()=>{_.replace({name:"order-confirmation"})};return T(()=>{r.fetchCartItem()}),(a,s)=>(i(),k(M,{flat:""},{default:c(()=>[o(g,{class:"row items-center header-action-bar q-px-xs"},{default:c(()=>[e("div",H,[o(d,{round:"",unelevated:"",icon:"arrow_back",onClick:b}),L]),Y]),_:1}),o(y),q(r).cartItems.length==0?(i(),u("div",j,[o(R),G,o(d,{onClick:Q,class:"q-px-xl",outline:"",color:"primary","no-caps":"",unelevated:"",rounded:""},{default:c(()=>[C(" Shop Now ")]),_:1})])):(i(),u(p,{key:1},[o(g,{style:{height:"calc(100vh - 124px)"},class:"scroll q-pa-none"},{default:c(()=>[e("div",J,[(i(!0),u(p,null,V(q(r).cartItems,(t,l)=>(i(),u(p,{key:"product-key"+l},[e("div",{class:"cart-product items-center q-py-sm",onClick:A(h=>a.$emit("click:detail",t),["prevent","stop"])},[e("div",{style:{width:"60px"},class:x({"out-of-stock":!t.isPublished})},[o(D,{class:"rounded-borders product-thumbnail",style:{width:"60px"},src:t.thumbnail},null,8,["src"])],2),e("div",{class:x(["product-detail ellipsis q-pl-sm",{"out-of-stock":!t.isPublished}])},[e("div",U,m(t.name),1),e("div",W," \u20B9 "+m(t.sellPrice)+" / "+m(t.uomQty)+" "+m(t.uom),1),t.isPublished==0?(i(),u("div",X," Sorry product is out of stock ")):F("",!0)],2),Z,e("div",tt,[t.isPublished==0?(i(),k(d,{key:0,color:"red",rounded:"",unelevated:"",size:"sm",onClick:h=>f(t,l)},{default:c(()=>[C("Remove")]),_:2},1032,["onClick"])):(i(),u(p,{key:1},[o(d,{color:"primary",round:"",unelevated:"",icon:"remove",size:"xs",loading:n.value[l],onClick:h=>I(t,l)},null,8,["loading","onClick"]),e("div",et,m(t.quantity),1),o(d,{color:"primary",round:"",unelevated:"",icon:"add",size:"xs",loading:n.value[l],onClick:h=>N(t,l)},null,8,["loading","onClick"])],64))])],8,K),o(y)],64))),128))])]),_:1}),o(y),o(O,{class:"q-mx-md"},{default:c(()=>[e("div",null,[st,e("div",at,"\u20B9 "+m(v.value),1)]),ot,o(d,{unelevated:"","no-caps":"",rounded:"",color:"primary",disabled:!v.value,onClick:S},{default:c(()=>[rt]),_:1},8,["disabled"])]),_:1})],64))]),_:1}))}};export{yt as default};
