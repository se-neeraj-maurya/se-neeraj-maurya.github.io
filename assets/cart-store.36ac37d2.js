import{x as c}from"./index.5dbc4d9f.js";import{a as s}from"./axios.boot.ea71beab.js";const h=c("cart",{state:()=>({dialog:!1,cartItems:[],orders:[],adminOrders:[]}),actions:{fetchCartItem(){return new Promise((r,a)=>{s.get("get-cart-product").then(t=>{const e=t.data.data;this.cartItems=e,r(t.data)}).catch(t=>{a(t.response)})})},addToCart(r,a){return new Promise((t,e)=>{s.post("add-cart",r).then(d=>{const n=d.data.data,o={name:a.name,sellPrice:a.sellPrice,thumbnail:a.images[0].file_path,product_id:a.id,quantity:n.quantity,id:n.id};this.cartItems.push(o),t(d.data)}).catch(d=>{e(d.response)})})},updateCart(r){return new Promise((a,t)=>{s.post("update-cart",r).then(e=>{a(e.data)}).catch(e=>{t(e.response)})})},removeFromCart(r){return new Promise((a,t)=>{s.delete(`delete-cart/${r.product_id}`).then(e=>{a(e.data)}).catch(e=>{t(e.response)})})},placeOrder(r){return new Promise((a,t)=>{s.post("order-product",r).then(e=>{this.cartItems=[],a(e.data)}).catch(e=>{t(e.response)})})},getOrders(){return new Promise((r,a)=>{s.get("get-orders").then(t=>{const e=t.data.data;this.orders=e,r(t.data)}).catch(t=>{a(t.response)})})},getSingleOrder(r){return new Promise((a,t)=>{s.get(`get-orders/${r}`).then(e=>{e.data.data,a(e.data)}).catch(e=>{t(e.response)})})},getAdminOrders(r){return new Promise((a,t)=>{s.post("get-admin-orders",r).then(e=>{a(e.data)}).catch(e=>{t(e.response)})})},getAdminSingleOrder(r){return new Promise((a,t)=>{s.get(`get-admin-orders/${r}`).then(e=>{e.data.data,a(e.data)}).catch(e=>{t(e.response)})})},updateOrderStatus(r){return new Promise((a,t)=>{s.post("update-order-status",r).then(e=>{a(e.data)}).catch(e=>{t(e.response)})})}}});export{h as u};
