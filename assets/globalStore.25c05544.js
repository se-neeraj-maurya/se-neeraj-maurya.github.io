import{Q as n}from"./QImg.d7945a96.js";import{c as u,Q as i,W as o,F as _,X as p,ag as h,U as e,f as m,_ as r,ah as g}from"./index.a9435c72.js";import{g as v}from"./db.d28dbbee.js";const f={class:"flex product-container"},y=["onClick"],k={class:"card-inner"},x={class:"product-detail q-pa-sm"},b={class:"title text-subtitle1 ellipsis text-grey-8"},D={class:"row items-center"},w={class:"price text-body-1 text-weight-medium"},L=e("div",{class:"tt-spacer"},null,-1),C={__name:"ProductList2",props:{products:{type:Array}},emits:["click:detail"],setup(t,{emit:P}){const a=t,c=u(()=>a.products);return(l,S)=>(i(),o("div",f,[(i(!0),o(_,null,p(c.value,(s,d)=>(i(),o("div",{class:"product-card",key:"product-key"+d,onClick:h(T=>l.$emit("click:detail",s),["prevent","stop"])},[e("div",k,[m(n,{class:"rounded-borders product-thumbnail",style:{height:"100px",width:"100%"},src:s.thumbnail},null,8,["src"]),e("div",x,[e("div",b,r(s.title),1),e("div",D,[e("div",w," \u20B9 "+r(s.price),1),L])])])],8,y))),128))]))}},E=g("globalStore",{state:()=>({loading:!1,success:[],errors:[],detailDialog:!1,product:{}}),actions:{setError(t){this.errors=t},setMessage(t){this.success=t},clearMessage(t=5e3){clearTimeout(this.clear_time),this.clear_time=setTimeout(()=>{this.errors=[],this.success=[]},t)},stopTime(){clearTimeout(this.clear_time)},openProductDetail(t){this.product=v(t),this.detailDialog=!0,console.log(this.detailDialog)},closeDetail(){this.detailDialog=!1}}});export{C as _,E as u};
