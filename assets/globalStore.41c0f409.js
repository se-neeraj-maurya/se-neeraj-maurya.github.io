import{y as o,z as a}from"./index.e93ee3cf.js";const i=o("globalStore",{state:()=>({loading:!1,success:[],errors:[],detailDialog:!1,product:{},categories:[],products:[]}),actions:{setError(e){this.errors=e},setMessage(e){this.success=e},clearMessage(e=5e3){clearTimeout(this.clear_time),this.clear_time=setTimeout(()=>{this.errors=[],this.success=[]},e)},stopTime(){clearTimeout(this.clear_time)},openProductDetail(e){this.product=e,this.detailDialog=!0},closeDetail(){this.detailDialog=!1},fetchCategory(){return new Promise((e,r)=>{a.get("get-category").then(s=>{const t=s.data.data;this.categories=t,e(s.data)}).catch(s=>{r(s.response)})})},fetchProduct(e){return new Promise((r,s)=>{a.get("all-product",{params:e}).then(t=>{r(t.data)}).catch(t=>{s(t.response)})})},fetchSingleProduct(e){return new Promise((r,s)=>{a.get(`product/${e}`).then(t=>{r(t.data)}).catch(t=>{s(t.response)})})},fetchProductByCategory(e){return new Promise((r,s)=>{a.get("product-category",{params:e}).then(t=>{r(t.data)}).catch(t=>{s(t.response)})})}}});export{i as u};
