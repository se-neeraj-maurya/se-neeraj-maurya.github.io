import{x as o}from"./index.5dbc4d9f.js";import{a}from"./axios.boot.ea71beab.js";const l=o("globalStore",{state:()=>({loading:!1,success:[],errors:[],detailDialog:!1,product:{},categories:[],products:[]}),actions:{setError(e){this.errors=e},setMessage(e){this.success=e},clearMessage(e=5e3){clearTimeout(this.clear_time),this.clear_time=setTimeout(()=>{this.errors=[],this.success=[]},e)},stopTime(){clearTimeout(this.clear_time)},openProductDetail(e){this.product=e,this.detailDialog=!0},closeDetail(){this.detailDialog=!1},fetchCategory(){return new Promise((e,s)=>{a.get("get-category").then(r=>{const t=r.data.data;this.categories=t,e(r.data)}).catch(r=>{s(r.response)})})},fetchProduct(e){return new Promise((s,r)=>{a.get("all-product",{params:e}).then(t=>{s(t.data)}).catch(t=>{r(t.response)})})},fetchSingleProduct(e){return new Promise((s,r)=>{a.get(`product/${e}`).then(t=>{s(t.data)}).catch(t=>{r(t.response)})})},fetchProductByCategory(e){return new Promise((s,r)=>{a.get("product-category",{params:e}).then(t=>{s(t.data)}).catch(t=>{r(t.response)})})}}});export{l as u};
