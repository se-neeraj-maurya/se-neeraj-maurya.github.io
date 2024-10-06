import{y as E,r as P,af as q,V as A,X as V,o as B,h as I,z as R,g as Q,aC as j,S as p,a0 as D,aJ as O}from"./index.4b170bd6.js";import{b as k}from"./focus-manager.02955f48.js";var M=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:C,emit:l}){const F=Q(),u=P(null);let s=0;const i=[];function d(e){const a=typeof e=="boolean"?e:r.noErrorFocus!==!0,f=++s,x=(t,o)=>{l("validation"+(t===!0?"Success":"Error"),o)},h=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(r.greedy===!0?Promise.all(i.map(h)).then(t=>t.filter(o=>o.valid!==!0)):i.reduce((t,o)=>t.then(()=>h(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return f===s&&x(!0),!0;if(f===s){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),x(!1,o),a===!0){const g=t.find(({comp:S})=>typeof S.focus=="function"&&j(S.$)===!1);g!==void 0&&g.comp.focus()}}return!1})}function v(){s++,i.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function m(e){e!==void 0&&p(e);const a=s+1;d().then(f=>{a===s&&f===!0&&(r.onSubmit!==void 0?l("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&p(e),l("reset"),D(()=>{v(),r.autofocus===!0&&r.noResetFocus!==!0&&c()})}function c(){k(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),a=>a.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}q(O,{bindComponent(e){i.push(e)},unbindComponent(e){const a=i.indexOf(e);a>-1&&i.splice(a,1)}});let y=!1;return A(()=>{y=!0}),V(()=>{y===!0&&r.autofocus===!0&&c()}),B(()=>{r.autofocus===!0&&c()}),Object.assign(F.proxy,{validate:d,resetValidation:v,submit:m,reset:b,focus:c,getValidationComponents:()=>i}),()=>I("form",{class:"q-form",ref:u,onSubmit:m,onReset:b},R(C.default))}});export{M as Q};
