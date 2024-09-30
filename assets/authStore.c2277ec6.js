import{x as u}from"./index.e4506442.js";import{g as o,a as n,s as c,b as i}from"./axios.boot.491fc198.js";const m=u("authStore",{state:()=>({user:o(),address:o()&&o().address?o().address:[]}),getters:{isAdmin(s){return s.user.role==1},isAddress(s){return s.address.length!=0}},actions:{CreateUser(s){return new Promise((t,a)=>{n.post("register",s).then(e=>{t(e.data)}).catch(e=>{a(e.response)})})},LoginUser(s){return new Promise((t,a)=>{n.post("login",s).then(e=>{const r=e.data.data;c(r.token),i(r.user),this.user=r.user,this.address=r.user.address,t(e.data)}).catch(e=>{a(e.response)})})},updateAddress(s){return new Promise((t,a)=>{n.put("shipping-address/"+s.id,s).then(e=>{const r=e.data.data,d={...this.user,address:[r]};this.address=[r],this.user=d,i(d),t(e.data)}).catch(e=>{a(e.response)})})},createAddress(s){return new Promise((t,a)=>{n.post("shipping-address",s).then(e=>{const r=e.data.data,d={...this.user,address:[r]};this.user=d,this.address=[r],i(d),t(e.data)}).catch(e=>{a(e.response)})})},updateProfile(s){return new Promise((t,a)=>{n.put("user-profile",s).then(e=>{const r=e.data.data,d={...this.user,name:r.name,email:r.email,description:r.description};this.user=d,i(d),t(e.data)}).catch(e=>{a(e.response)})})},updateProfilePicture(s){return new Promise((t,a)=>{n.put("user-profile-picture",s).then(e=>{const r=e.data.data,d={...this.user,image:r.image};this.user=d,i(d),t(e.data)}).catch(e=>{a(e.response)})})},LogOutUser(){localStorage.clear(),window.location.reload()}}});export{m as u};
