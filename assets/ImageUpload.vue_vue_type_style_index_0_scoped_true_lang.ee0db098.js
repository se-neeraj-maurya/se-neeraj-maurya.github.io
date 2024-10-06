import{aQ as me,y as ne,aR as ge,c as h,h as s,aS as _e,g as V,r as z,R as ie,V as se,J as he,aE as be,ah as Fe,aT as ye,w as Se,C as qe,b as xe,aG as ke,aU as ze,ar as le,a9 as we,Q as re,aV as Ue}from"./index.5dbc4d9f.js";import{b as Ce,h as ue}from"./format.2a3572e1.js";import{u as Be,a as Re}from"./use-dark.a1b71146.js";const Ee={...me,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:a=>a>=0&&a<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},G=50,de=2*G,ce=de*Math.PI,Pe=Math.round(ce*1e3)/1e3;var je=ne({name:"QCircularProgress",props:{...Ee,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(a,{slots:f}){const{proxy:{$q:u}}=V(),r=ge(a),o=h(()=>{const F=(u.lang.rtl===!0?-1:1)*a.angle;return{transform:a.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-F}deg)`:`rotate3d(0, 0, 1, ${F-90}deg)`}}),p=h(()=>a.instantFeedback!==!0&&a.indeterminate!==!0?{transition:`stroke-dashoffset ${a.animationSpeed}ms ease 0s, stroke ${a.animationSpeed}ms ease`}:""),b=h(()=>de/(1-a.thickness/2)),w=h(()=>`${b.value/2} ${b.value/2} ${b.value} ${b.value}`),B=h(()=>Ce(a.value,a.min,a.max)),R=h(()=>ce*(1-(B.value-a.min)/(a.max-a.min))),U=h(()=>a.thickness/2*b.value);function E({thickness:F,offset:x,color:e,cls:m,rounded:k}){return s("circle",{class:"q-circular-progress__"+m+(e!==void 0?` text-${e}`:""),style:p.value,fill:"transparent",stroke:"currentColor","stroke-width":F,"stroke-dasharray":Pe,"stroke-dashoffset":x,"stroke-linecap":k,cx:b.value,cy:b.value,r:G})}return()=>{const F=[];a.centerColor!==void 0&&a.centerColor!=="transparent"&&F.push(s("circle",{class:`q-circular-progress__center text-${a.centerColor}`,fill:"currentColor",r:G-U.value/2,cx:b.value,cy:b.value})),a.trackColor!==void 0&&a.trackColor!=="transparent"&&F.push(E({cls:"track",thickness:U.value,offset:0,color:a.trackColor})),F.push(E({cls:"circle",thickness:U.value,offset:R.value,color:a.color,rounded:a.rounded===!0?"round":void 0}));const x=[s("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:w.value,"aria-hidden":"true"},F)];return a.showValue===!0&&x.push(s("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:a.fontSize}},f.default!==void 0?f.default():[s("div",B.value)])),s("div",{class:`q-circular-progress q-circular-progress--${a.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":a.min,"aria-valuemax":a.max,"aria-valuenow":a.indeterminate===!0?void 0:B.value},_e(f.internal,x))}}});function Q(a,f,u,r){const o=[];return a.forEach(p=>{r(p)===!0?o.push(p):f.push({failedPropValidation:u,file:p})}),o}function H(a){a&&a.dataTransfer&&(a.dataTransfer.dropEffect="copy"),se(a)}const Le={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ne=["rejected"];function Oe({editable:a,dnd:f,getFileInput:u,addFilesToQueue:r}){const{props:o,emit:p,proxy:b}=V(),w=z(null),B=h(()=>o.accept!==void 0?o.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),R=h(()=>parseInt(o.maxFiles,10)),U=h(()=>parseInt(o.maxTotalSize,10));function E(l){if(a.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&ie(l);else{const S=u();S&&S!==l.target&&S.click(l)}}function F(l){a.value&&l&&r(null,l)}function x(l,S,O,T){let i=Array.from(S||l.target.files);const g=[],C=()=>{g.length!==0&&p("rejected",g)};if(o.accept!==void 0&&B.value.indexOf("*/")===-1&&(i=Q(i,g,"accept",d=>B.value.some(_=>d.type.toUpperCase().startsWith(_)||d.name.toUpperCase().endsWith(_))),i.length===0))return C();if(o.maxFileSize!==void 0){const d=parseInt(o.maxFileSize,10);if(i=Q(i,g,"max-file-size",_=>_.size<=d),i.length===0)return C()}if(o.multiple!==!0&&i.length!==0&&(i=[i[0]]),i.forEach(d=>{d.__key=d.webkitRelativePath+d.lastModified+d.name+d.size}),T===!0){const d=O.map(_=>_.__key);i=Q(i,g,"duplicate",_=>d.includes(_.__key)===!1)}if(i.length===0)return C();if(o.maxTotalSize!==void 0){let d=T===!0?O.reduce((_,j)=>_+j.size,0):0;if(i=Q(i,g,"max-total-size",_=>(d+=_.size,d<=U.value)),i.length===0)return C()}if(typeof o.filter=="function"){const d=o.filter(i);i=Q(i,g,"filter",_=>d.includes(_))}if(o.maxFiles!==void 0){let d=T===!0?O.length:0;if(i=Q(i,g,"max-files",()=>(d++,d<=R.value)),i.length===0)return C()}if(C(),i.length!==0)return i}function e(l){H(l),f.value!==!0&&(f.value=!0)}function m(l){se(l),(l.relatedTarget!==null||he.is.safari!==!0?l.relatedTarget!==w.value:document.elementsFromPoint(l.clientX,l.clientY).includes(w.value)===!1)===!0&&(f.value=!1)}function k(l){H(l);const S=l.dataTransfer.files;S.length!==0&&r(null,S),f.value=!1}function v(l){if(f.value===!0)return s("div",{ref:w,class:`q-${l}__dnd absolute-full`,onDragenter:H,onDragover:H,onDragleave:m,onDrop:k})}return Object.assign(b,{pickFiles:E,addFiles:F}),{pickFiles:E,addFiles:F,onDragover:e,onDragleave:m,processFiles:x,getDndNode:v,maxFilesNumber:R,maxTotalSizeNumber:U}}function oe(a){return(a*100).toFixed(2)+"%"}const Te={...Be,...Le,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},ve=[...Ne,"start","finish","added","removed"];function $e(a,f){const u=V(),{props:r,slots:o,emit:p,proxy:b}=u,{$q:w}=b,B=Re(r,w);function R(t,c,y){if(t.__status=c,c==="idle"){t.__uploaded=0,t.__progress=0,t.__sizeLabel=ue(t.size),t.__progressLabel="0.00%";return}if(c==="failed"){b.$forceUpdate();return}t.__uploaded=c==="uploaded"?t.size:y,t.__progress=c==="uploaded"?1:Math.min(.9999,t.__uploaded/t.size),t.__progressLabel=oe(t.__progress),b.$forceUpdate()}const U=h(()=>r.disable!==!0&&r.readonly!==!0),E=z(!1),F=z(null),x=z(null),e={files:z([]),queuedFiles:z([]),uploadedFiles:z([]),uploadedSize:z(0),updateFileStatus:R,isAlive:()=>be(u)===!1},{pickFiles:m,addFiles:k,onDragover:v,onDragleave:l,processFiles:S,getDndNode:O,maxFilesNumber:T,maxTotalSizeNumber:i}=Oe({editable:U,dnd:E,getFileInput:K,addFilesToQueue:Z});Object.assign(e,a({props:r,slots:o,emit:p,helpers:e,exposeApi:t=>{Object.assign(e,t)}})),e.isBusy===void 0&&(e.isBusy=z(!1));const g=z(0),C=h(()=>g.value===0?0:e.uploadedSize.value/g.value),d=h(()=>oe(C.value)),_=h(()=>ue(g.value)),j=h(()=>U.value===!0&&e.isUploading.value!==!0&&(r.multiple===!0||e.queuedFiles.value.length===0)&&(r.maxFiles===void 0||e.files.value.length<T.value)&&(r.maxTotalSize===void 0||g.value<i.value)),n=h(()=>U.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);Fe(ye,ae);const $=h(()=>"q-uploader column no-wrap"+(B.value===!0?" q-uploader--dark q-dark":"")+(r.bordered===!0?" q-uploader--bordered":"")+(r.square===!0?" q-uploader--square no-border-radius":"")+(r.flat===!0?" q-uploader--flat no-shadow":"")+(r.disable===!0?" disabled q-uploader--disable":"")+(E.value===!0?" q-uploader--dnd":"")),D=h(()=>"q-uploader__header"+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:""));Se(e.isUploading,(t,c)=>{c===!1&&t===!0?p("start"):c===!0&&t===!1&&p("finish")});function I(){r.disable===!1&&(e.abort(),e.uploadedSize.value=0,g.value=0,J(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function P(){r.disable===!1&&Y(["uploaded"],()=>{e.uploadedFiles.value=[]})}function W(){Y(["idle","failed"],({size:t})=>{g.value-=t,e.queuedFiles.value=[]})}function Y(t,c){if(r.disable===!0)return;const y={files:[],size:0},L=e.files.value.filter(q=>t.indexOf(q.__status)===-1?!0:(y.size+=q.size,y.files.push(q),q.__img!==void 0&&window.URL.revokeObjectURL(q.__img.src),!1));y.files.length!==0&&(e.files.value=L,c(y),p("removed",y.files))}function X(t){r.disable||(t.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(c=>c.__key!==t.__key):t.__status==="uploading"?t.__abort():g.value-=t.size,e.files.value=e.files.value.filter(c=>c.__key!==t.__key?!0:(c.__img!==void 0&&window.URL.revokeObjectURL(c.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(c=>c.__key!==t.__key),p("removed",[t]))}function J(){e.files.value.forEach(t=>{t.__img!==void 0&&window.URL.revokeObjectURL(t.__img.src)})}function K(){return x.value||F.value.getElementsByClassName("q-uploader__input")[0]}function Z(t,c){const y=S(t,c,e.files.value,!0),L=K();L!=null&&(L.value=""),y!==void 0&&(y.forEach(q=>{if(e.updateFileStatus(q,"idle"),g.value+=q.size,r.noThumbnails!==!0&&q.type.toUpperCase().startsWith("IMAGE")){const te=new Image;te.src=window.URL.createObjectURL(q),q.__img=te}}),e.files.value=e.files.value.concat(y),e.queuedFiles.value=e.queuedFiles.value.concat(y),p("added",y),r.autoUpload===!0&&e.upload())}function ee(){n.value===!0&&e.upload()}function M(t,c,y){if(t===!0){const L={type:"a",key:c,icon:w.iconSet.uploader[c],flat:!0,dense:!0};let q;return c==="add"?(L.onClick=m,q=ae):L.onClick=y,s(re,L,q)}}function ae(){return s("input",{ref:x,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:r.accept,multiple:r.multiple===!0?"multiple":void 0,capture:r.capture,onMousedown:ie,onClick:m,onChange:Z})}function fe(){return o.header!==void 0?o.header(A):[s("div",{class:"q-uploader__header-content column"},[s("div",{class:"flex flex-center no-wrap q-gutter-xs"},[M(e.queuedFiles.value.length!==0,"removeQueue",W),M(e.uploadedFiles.value.length!==0,"removeUploaded",P),e.isUploading.value===!0?s(le,{class:"q-uploader__spinner"}):null,s("div",{class:"col column justify-center"},[r.label!==void 0?s("div",{class:"q-uploader__title"},[r.label]):null,s("div",{class:"q-uploader__subtitle"},[_.value+" / "+d.value])]),M(j.value,"add"),M(r.hideUploadBtn===!1&&n.value===!0,"upload",e.upload),M(e.isUploading.value,"clear",e.abort)])])]}function pe(){return o.list!==void 0?o.list(A):e.files.value.map(t=>s("div",{key:t.__key,class:"q-uploader__file relative-position"+(r.noThumbnails!==!0&&t.__img!==void 0?" q-uploader__file--img":"")+(t.__status==="failed"?" q-uploader__file--failed":t.__status==="uploaded"?" q-uploader__file--uploaded":""),style:r.noThumbnails!==!0&&t.__img!==void 0?{backgroundImage:'url("'+t.__img.src+'")'}:null},[s("div",{class:"q-uploader__file-header row flex-center no-wrap"},[t.__status==="failed"?s(we,{class:"q-uploader__file-status",name:w.iconSet.type.negative,color:"negative"}):null,s("div",{class:"q-uploader__file-header-content col"},[s("div",{class:"q-uploader__title"},[t.name]),s("div",{class:"q-uploader__subtitle row items-center no-wrap"},[t.__sizeLabel+" / "+t.__progressLabel])]),t.__status==="uploading"?s(je,{value:t.__progress,min:0,max:1,indeterminate:t.__progress===0}):s(re,{round:!0,dense:!0,flat:!0,icon:w.iconSet.uploader[t.__status==="uploaded"?"done":"clear"],onClick:()=>{X(t)}})])]))}qe(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&J()});const A={};for(const t in e)xe(e[t])===!0?ke(A,t,()=>e[t].value):A[t]=e[t];return Object.assign(A,{upload:ee,reset:I,removeUploadedFiles:P,removeQueuedFiles:W,removeFile:X,pickFiles:m,addFiles:k}),ze(A,{canAddFiles:()=>j.value,canUpload:()=>n.value,uploadSizeLabel:()=>_.value,uploadProgressLabel:()=>d.value}),f({...e,upload:ee,reset:I,removeUploadedFiles:P,removeQueuedFiles:W,removeFile:X,pickFiles:m,addFiles:k,canAddFiles:j,canUpload:n,uploadSizeLabel:_,uploadProgressLabel:d}),()=>{const t=[s("div",{class:D.value},fe()),s("div",{class:"q-uploader__list scroll"},pe()),O("uploader")];e.isBusy.value===!0&&t.push(s("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[s(le)]));const c={ref:F,class:$.value};return j.value===!0&&Object.assign(c,{onDragover:v,onDragleave:l}),s("div",c,t)}}const De=()=>!0;function Ie(a){const f={};return a.forEach(u=>{f[u]=De}),f}const Ae=Ie(ve);var Qe=({name:a,props:f,emits:u,injectPlugin:r})=>ne({name:a,props:{...Te,...f},emits:Ue(u)===!0?{...Ae,...u}:[...ve,...u],setup(o,{expose:p}){return $e(r,p)}});function N(a){return typeof a=="function"?a:()=>a}const Me={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>a=>a.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},We=["factoryFailed","uploaded","failed","uploading"];function He({props:a,emit:f,helpers:u}){const r=z([]),o=z([]),p=z(0),b=h(()=>({url:N(a.url),method:N(a.method),headers:N(a.headers),formFields:N(a.formFields),fieldName:N(a.fieldName),withCredentials:N(a.withCredentials),sendRaw:N(a.sendRaw),batch:N(a.batch)})),w=h(()=>p.value>0),B=h(()=>o.value.length!==0);let R;function U(){r.value.forEach(e=>{e.abort()}),o.value.length!==0&&(R=!0)}function E(){const e=u.queuedFiles.value.slice(0);u.queuedFiles.value=[],b.value.batch(e)?F(e):e.forEach(m=>{F([m])})}function F(e){if(p.value++,typeof a.factory!="function"){x(e,{});return}const m=a.factory(e);if(!m)f("factoryFailed",new Error("QUploader: factory() does not return properly"),e),p.value--;else if(typeof m.catch=="function"&&typeof m.then=="function"){o.value.push(m);const k=v=>{u.isAlive()===!0&&(o.value=o.value.filter(l=>l!==m),o.value.length===0&&(R=!1),u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(l=>{u.updateFileStatus(l,"failed")}),f("factoryFailed",v,e),p.value--)};m.then(v=>{R===!0?k(new Error("Aborted")):u.isAlive()===!0&&(o.value=o.value.filter(l=>l!==m),x(e,v))}).catch(k)}else x(e,m||{})}function x(e,m){const k=new FormData,v=new XMLHttpRequest,l=(n,$)=>m[n]!==void 0?N(m[n])($):b.value[n]($),S=l("url",e);if(!S){console.error("q-uploader: invalid or no URL specified"),p.value--;return}const O=l("formFields",e);O!==void 0&&O.forEach(n=>{k.append(n.name,n.value)});let T=0,i=0,g=0,C=0,d;v.upload.addEventListener("progress",n=>{if(d===!0)return;const $=Math.min(C,n.loaded);u.uploadedSize.value+=$-g,g=$;let D=g-i;for(let I=T;D>0&&I<e.length;I++){const P=e[I];if(D>P.size)D-=P.size,T++,i+=P.size,u.updateFileStatus(P,"uploading",P.size);else{u.updateFileStatus(P,"uploading",D);return}}},!1),v.onreadystatechange=()=>{v.readyState<4||(v.status&&v.status<400?(u.uploadedFiles.value=u.uploadedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"uploaded")}),f("uploaded",{files:e,xhr:v})):(d=!0,u.uploadedSize.value-=g,u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"failed")}),f("failed",{files:e,xhr:v})),p.value--,r.value=r.value.filter(n=>n!==v))},v.open(l("method",e),S),l("withCredentials",e)===!0&&(v.withCredentials=!0);const _=l("headers",e);_!==void 0&&_.forEach(n=>{v.setRequestHeader(n.name,n.value)});const j=l("sendRaw",e);e.forEach(n=>{u.updateFileStatus(n,"uploading",0),j!==!0&&k.append(l("fieldName",n),n,n.name),n.xhr=v,n.__abort=()=>{v.abort()},C+=n.size}),f("uploading",{files:e,xhr:v}),r.value.push(v),j===!0?v.send(new Blob(e)):v.send(k)}return{isUploading:w,isBusy:B,abort:U,upload:E}}var Xe={name:"QUploader",props:Me,emits:We,injectPlugin:He},Je=Qe(Xe);export{Je as Q};
