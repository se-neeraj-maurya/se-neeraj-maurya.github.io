import{h as m,r as v,c as p}from"./capacitor.674cedbf.js";import"./index.19c34057.js";var h=globalThis&&globalThis.__awaiter||function(l,i,n,c){function r(t){return t instanceof n?t:new n(function(o){o(t)})}return new(n||(n=Promise))(function(t,o){function u(a){try{e(c.next(a))}catch(d){o(d)}}function s(a){try{e(c.throw(a))}catch(d){o(d)}}function e(a){a.done?t(a.value):r(a.value).then(u,s)}e((c=c.apply(l,i||[])).next())})},f=globalThis&&globalThis.__generator||function(l,i){var n={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},c,r,t,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(a){return s([e,a])}}function s(e){if(c)throw new TypeError("Generator is already executing.");for(;o&&(o=0,e[0]&&(n=0)),n;)try{if(c=1,r&&(t=e[0]&2?r.return:e[0]?r.throw||((t=r.return)&&t.call(r),0):r.next)&&!(t=t.call(r,e[1])).done)return t;switch(r=0,t&&(e=[e[0]&2,t.value]),e[0]){case 0:case 1:t=e;break;case 4:return n.label++,{value:e[1],done:!1};case 5:n.label++,r=e[1],e=[0];continue;case 7:e=n.ops.pop(),n.trys.pop();continue;default:if(t=n.trys,!(t=t.length>0&&t[t.length-1])&&(e[0]===6||e[0]===2)){n=0;continue}if(e[0]===3&&(!t||e[1]>t[0]&&e[1]<t[3])){n.label=e[1];break}if(e[0]===6&&n.label<t[1]){n.label=t[1],t=e;break}if(t&&n.label<t[2]){n.label=t[2],n.ops.push(e);break}t[2]&&n.ops.pop(),n.trys.pop();continue}e=i.call(l,n)}catch(a){e=[6,a],r=0}finally{c=t=0}if(e[0]&5)throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}},b=":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:600px;height:600px}",x=function(){function l(i){v(this,i),this.onPhoto=p(this,"onPhoto",7),this.noDeviceError=p(this,"noDeviceError",7),this.facingMode="user",this.hidePicker=!1}return l.prototype.present=function(){return h(this,void 0,void 0,function(){var i,n=this;return f(this,function(c){return i=document.createElement("pwa-camera-modal-instance"),i.facingMode=this.facingMode,i.hidePicker=this.hidePicker,i.addEventListener("onPhoto",function(r){return h(n,void 0,void 0,function(){var t;return f(this,function(o){return this._modal?(t=r.detail,this.onPhoto.emit(t),[2]):[2]})})}),i.addEventListener("noDeviceError",function(r){return h(n,void 0,void 0,function(){return f(this,function(t){return this.noDeviceError.emit(r),[2]})})}),document.body.append(i),this._modal=i,[2]})})},l.prototype.dismiss=function(){return h(this,void 0,void 0,function(){return f(this,function(i){return this._modal?(this._modal&&this._modal.parentNode.removeChild(this._modal),this._modal=null,[2]):[2]})})},l.prototype.render=function(){return m("div",null)},l}();x.style=b;export{x as pwa_camera_modal};
