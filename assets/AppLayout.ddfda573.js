import{k as y,u as k,l as S,r as c,o as C,m as A,n as a,p as l,q as s,f as E,s as b,Q as x,t as B,P as N,E as I,v as L}from"./index.15592ddb.js";import{u as P}from"./globalStore.fc47424b.js";import{u as Q}from"./adminStore.811258a6.js";import{u as R}from"./cart-store.02381aa7.js";import"./axios.boot.ef88ab99.js";const T={key:0,class:"initial-loader"},V=s("div",{class:"loader"},null,-1),$=[V],q={key:1,class:"initial-loader"},O={class:"text-center"},j=s("p",null,"Something went wrong!",-1),K=Object.assign({name:"AppLayout"},{__name:"AppLayout",setup(G){const u=R(),d=Q(),p=y(),m=P(),n=k(),f=S(),o=c(!0),r=c(!1),i=!!localStorage.getItem("access-token"),_=JSON.parse(localStorage.getItem("user"));i||n.replace({name:"login"});const h=async()=>{try{o.value=!0,await d.fetchConfig(),i&&await u.fetchCartItem(),await m.fetchCategory(),w()}catch(e){console.log(e),r.value=!0}finally{o.value=!1}};["app","layout"].includes(f.name)&&n.replace({name:"home"});const v=()=>{window.location.reload(!0)},w=()=>{window.Pusher=N,window.Echo=new I({broadcaster:"pusher",key:"515f854c89b9657065f7",cluster:"ap2",forceTLS:!0});var e=window.Echo.channel("order-notification");e.listen(`.order-event-${_.role}`,function(t){p.notify({progress:!0,type:"positive",position:"top",message:t.title,timeout:1e4})})};return C(()=>{h()}),(e,t)=>{const g=A("router-view");return o.value?(a(),l("div",T,$)):r.value?(a(),l("div",q,[s("div",O,[j,E(x,{outline:"",rounded:"",onClick:t[0]||(t[0]=J=>v())},{default:b(()=>[L(" Try Again! ")]),_:1})])])):(a(),B(g,{key:2}))}}});export{K as default};
