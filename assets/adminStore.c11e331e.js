import{x as n}from"./index.96042976.js";import{a as o}from"./axios.boot.2e5d1b33.js";const p=n("adminStore",{state:()=>({categories:[],products:[]}),actions:{fetchConfig(){return new Promise((a,r)=>{o.get("config").then(t=>{const e=t.data.data.categories;this.categories=e,a(t.data)}).catch(t=>{r(t.response)})})},fetchGallery(){return new Promise((a,r)=>{o.get("get-gallery").then(t=>{a(t.data)}).catch(t=>{r(t.response)})})},getCustomerList(a){return new Promise((r,t)=>{o.post("get-users",a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},getSingleCustomer(a){return new Promise((r,t)=>{o.get("get-user/"+a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},CreateCategory(a){return new Promise((r,t)=>{o.post("create-category",a,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{const s=e.data;r(s)}).catch(e=>{t(e.response)})})},FetchCategory(){return new Promise((a,r)=>{o.get("get-category").then(t=>{const e=t.data.data;this.categories=e,a(t.data)}).catch(t=>{r(t.response)})})},DeleteCategory(a){return new Promise((r,t)=>{o.post("category-delete/"+a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},CreateUpdateProduct(a){return new Promise((r,t)=>{o.post("product-create",a).then(e=>{const s=e.data;r(s)}).catch(e=>{t(e.response)})})},uploadProductImage(a){return new Promise((r,t)=>{o.post("product-image-upload",a).then(e=>{const s=e.data;r(s)}).catch(e=>{t(e.response)})})},deleteProductImage(a){return new Promise((r,t)=>{o.post("product-image-delete/"+a).then(e=>{const s=e.data;r(s)}).catch(e=>{t(e.response)})})},FetchProducts(a){return new Promise((r,t)=>{o.get("products",a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},FetchSingleProduct(a){return new Promise((r,t)=>{o.get(`admin-product/${a}`).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},DeleteProduct(a){return new Promise((r,t)=>{o.post("product-delete/"+a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},UpdateProductStatus(a){return new Promise((r,t)=>{o.post("update-product-status",a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})}}});export{p as u};
