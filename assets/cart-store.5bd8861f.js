import{y as c,z as s}from"./index.7f71ea72.js";const h=c("cart",{state:()=>({dialog:!1,cartItems:[],orders:[],adminOrders:[]}),actions:{fetchCartItem(){return new Promise((a,r)=>{s.get("get-cart-product").then(t=>{const e=t.data.data;this.cartItems=e,a(t.data)}).catch(t=>{r(t.response)})})},addToCart(a,r){return new Promise((t,e)=>{s.post("add-cart",a).then(n=>{const d=n.data.data,o={name:r.name,sellPrice:r.sellPrice,thumbnail:r.images[0].file_path,product_id:r.id,quantity:d.quantity,id:d.id};this.cartItems.push(o),t(n.data)}).catch(n=>{e(n.response)})})},updateCart(a){return new Promise((r,t)=>{s.post("update-cart",a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},removeFromCart(a){return new Promise((r,t)=>{s.delete(`delete-cart/${a.product_id}`).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},placeOrder(a){return new Promise((r,t)=>{s.post("order-product",a).then(e=>{this.cartItems=[],r(e.data)}).catch(e=>{t(e.response)})})},placeOrderSingle(a){return new Promise((r,t)=>{s.post("order-single-product",a).then(e=>{this.cartItems=[],r(e.data)}).catch(e=>{t(e.response)})})},getOrders(){return new Promise((a,r)=>{s.get("get-orders").then(t=>{const e=t.data.data;this.orders=e,a(t.data)}).catch(t=>{r(t.response)})})},getSingleOrder(a){return new Promise((r,t)=>{s.get(`get-orders/${a}`).then(e=>{e.data.data,r(e.data)}).catch(e=>{t(e.response)})})},getAdminOrders(a){return new Promise((r,t)=>{s.post("get-admin-orders",a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})},getAdminSingleOrder(a){return new Promise((r,t)=>{s.get(`get-admin-orders/${a}`).then(e=>{e.data.data,r(e.data)}).catch(e=>{t(e.response)})})},updateOrderStatus(a){return new Promise((r,t)=>{s.post("update-order-status",a).then(e=>{r(e.data)}).catch(e=>{t(e.response)})})}}});export{h as u};
