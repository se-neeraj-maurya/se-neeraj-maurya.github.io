import{aH as ye,k as ve,aI as Se,c as h,h as d,aJ as ke,g as ee,r as z,C as fe,G as pe,v as xe,aw as qe,ac as we,aK as ze,w as Ue,p as Ce,b as Be,ax as Ie,aL as Re,aj as se,Y as me,a6 as G,aM as Le,Q as X,W as V,F as Ee,X as Ne,f as W,S as ie,a5 as Pe,U as J,a8 as je,a9 as $e}from"./index.3996516f.js";import{Q as Ae}from"./QImg.f1190cbe.js";import{b as Oe,h as de}from"./format.2a3572e1.js";import{u as De,a as Te}from"./use-dark.a5276646.js";import{_ as Qe}from"./plugin-vue_export-helper.21dcd24c.js";const Me={...ye,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:t=>t>=0&&t<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},Z=50,_e=2*Z,ge=_e*Math.PI,We=Math.round(ge*1e3)/1e3;var He=ve({name:"QCircularProgress",props:{...Me,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(t,{slots:i}){const{proxy:{$q:u}}=ee(),r=Se(t),o=h(()=>{const F=(u.lang.rtl===!0?-1:1)*t.angle;return{transform:t.reverse!==(u.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-F}deg)`:`rotate3d(0, 0, 1, ${F-90}deg)`}}),c=h(()=>t.instantFeedback!==!0&&t.indeterminate!==!0?{transition:`stroke-dashoffset ${t.animationSpeed}ms ease 0s, stroke ${t.animationSpeed}ms ease`}:""),b=h(()=>_e/(1-t.thickness/2)),y=h(()=>`${b.value/2} ${b.value/2} ${b.value} ${b.value}`),C=h(()=>Oe(t.value,t.min,t.max)),I=h(()=>ge*(1-(C.value-t.min)/(t.max-t.min))),U=h(()=>t.thickness/2*b.value);function R({thickness:F,offset:q,color:e,cls:m,rounded:w}){return d("circle",{class:"q-circular-progress__"+m+(e!==void 0?` text-${e}`:""),style:c.value,fill:"transparent",stroke:"currentColor","stroke-width":F,"stroke-dasharray":We,"stroke-dashoffset":q,"stroke-linecap":w,cx:b.value,cy:b.value,r:Z})}return()=>{const F=[];t.centerColor!==void 0&&t.centerColor!=="transparent"&&F.push(d("circle",{class:`q-circular-progress__center text-${t.centerColor}`,fill:"currentColor",r:Z-U.value/2,cx:b.value,cy:b.value})),t.trackColor!==void 0&&t.trackColor!=="transparent"&&F.push(R({cls:"track",thickness:U.value,offset:0,color:t.trackColor})),F.push(R({cls:"circle",thickness:U.value,offset:I.value,color:t.color,rounded:t.rounded===!0?"round":void 0}));const q=[d("svg",{class:"q-circular-progress__svg",style:o.value,viewBox:y.value,"aria-hidden":"true"},F)];return t.showValue===!0&&q.push(d("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:t.fontSize}},i.default!==void 0?i.default():[d("div",C.value)])),d("div",{class:`q-circular-progress q-circular-progress--${t.indeterminate===!0?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.indeterminate===!0?void 0:C.value},ke(i.internal,q))}}});function Q(t,i,u,r){const o=[];return t.forEach(c=>{r(c)===!0?o.push(c):i.push({failedPropValidation:u,file:c})}),o}function Y(t){t&&t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),pe(t)}const Xe={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ve=["rejected"];function Ye({editable:t,dnd:i,getFileInput:u,addFilesToQueue:r}){const{props:o,emit:c,proxy:b}=ee(),y=z(null),C=h(()=>o.accept!==void 0?o.accept.split(",").map(l=>(l=l.trim(),l==="*"?"*/":(l.endsWith("/*")&&(l=l.slice(0,l.length-1)),l.toUpperCase()))):null),I=h(()=>parseInt(o.maxFiles,10)),U=h(()=>parseInt(o.maxTotalSize,10));function R(l){if(t.value)if(l!==Object(l)&&(l={target:null}),l.target!==null&&l.target.matches('input[type="file"]')===!0)l.clientX===0&&l.clientY===0&&fe(l);else{const k=u();k&&k!==l.target&&k.click(l)}}function F(l){t.value&&l&&r(null,l)}function q(l,k,j,$){let s=Array.from(k||l.target.files);const _=[],B=()=>{_.length!==0&&c("rejected",_)};if(o.accept!==void 0&&C.value.indexOf("*/")===-1&&(s=Q(s,_,"accept",v=>C.value.some(g=>v.type.toUpperCase().startsWith(g)||v.name.toUpperCase().endsWith(g))),s.length===0))return B();if(o.maxFileSize!==void 0){const v=parseInt(o.maxFileSize,10);if(s=Q(s,_,"max-file-size",g=>g.size<=v),s.length===0)return B()}if(o.multiple!==!0&&s.length!==0&&(s=[s[0]]),s.forEach(v=>{v.__key=v.webkitRelativePath+v.lastModified+v.name+v.size}),$===!0){const v=j.map(g=>g.__key);s=Q(s,_,"duplicate",g=>v.includes(g.__key)===!1)}if(s.length===0)return B();if(o.maxTotalSize!==void 0){let v=$===!0?j.reduce((g,E)=>g+E.size,0):0;if(s=Q(s,_,"max-total-size",g=>(v+=g.size,v<=U.value)),s.length===0)return B()}if(typeof o.filter=="function"){const v=o.filter(s);s=Q(s,_,"filter",g=>v.includes(g))}if(o.maxFiles!==void 0){let v=$===!0?j.length:0;if(s=Q(s,_,"max-files",()=>(v++,v<=I.value)),s.length===0)return B()}if(B(),s.length!==0)return s}function e(l){Y(l),i.value!==!0&&(i.value=!0)}function m(l){pe(l),(l.relatedTarget!==null||xe.is.safari!==!0?l.relatedTarget!==y.value:document.elementsFromPoint(l.clientX,l.clientY).includes(y.value)===!1)===!0&&(i.value=!1)}function w(l){Y(l);const k=l.dataTransfer.files;k.length!==0&&r(null,k),i.value=!1}function p(l){if(i.value===!0)return d("div",{ref:y,class:`q-${l}__dnd absolute-full`,onDragenter:Y,onDragover:Y,onDragleave:m,onDrop:w})}return Object.assign(b,{pickFiles:R,addFiles:F}),{pickFiles:R,addFiles:F,onDragover:e,onDragleave:m,processFiles:q,getDndNode:p,maxFilesNumber:I,maxTotalSizeNumber:U}}function ce(t){return(t*100).toFixed(2)+"%"}const Ge={...De,...Xe,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},he=[...Ve,"start","finish","added","removed"];function Ke(t,i){const u=ee(),{props:r,slots:o,emit:c,proxy:b}=u,{$q:y}=b,C=Te(r,y);function I(a,f,S){if(a.__status=f,f==="idle"){a.__uploaded=0,a.__progress=0,a.__sizeLabel=de(a.size),a.__progressLabel="0.00%";return}if(f==="failed"){b.$forceUpdate();return}a.__uploaded=f==="uploaded"?a.size:S,a.__progress=f==="uploaded"?1:Math.min(.9999,a.__uploaded/a.size),a.__progressLabel=ce(a.__progress),b.$forceUpdate()}const U=h(()=>r.disable!==!0&&r.readonly!==!0),R=z(!1),F=z(null),q=z(null),e={files:z([]),queuedFiles:z([]),uploadedFiles:z([]),uploadedSize:z(0),updateFileStatus:I,isAlive:()=>qe(u)===!1},{pickFiles:m,addFiles:w,onDragover:p,onDragleave:l,processFiles:k,getDndNode:j,maxFilesNumber:$,maxTotalSizeNumber:s}=Ye({editable:U,dnd:R,getFileInput:le,addFilesToQueue:re});Object.assign(e,t({props:r,slots:o,emit:c,helpers:e,exposeApi:a=>{Object.assign(e,a)}})),e.isBusy===void 0&&(e.isBusy=z(!1));const _=z(0),B=h(()=>_.value===0?0:e.uploadedSize.value/_.value),v=h(()=>ce(B.value)),g=h(()=>de(_.value)),E=h(()=>U.value===!0&&e.isUploading.value!==!0&&(r.multiple===!0||e.queuedFiles.value.length===0)&&(r.maxFiles===void 0||e.files.value.length<$.value)&&(r.maxTotalSize===void 0||_.value<s.value)),n=h(()=>U.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);we(ze,ue);const A=h(()=>"q-uploader column no-wrap"+(C.value===!0?" q-uploader--dark q-dark":"")+(r.bordered===!0?" q-uploader--bordered":"")+(r.square===!0?" q-uploader--square no-border-radius":"")+(r.flat===!0?" q-uploader--flat no-shadow":"")+(r.disable===!0?" disabled q-uploader--disable":"")+(R.value===!0?" q-uploader--dnd":"")),O=h(()=>"q-uploader__header"+(r.color!==void 0?` bg-${r.color}`:"")+(r.textColor!==void 0?` text-${r.textColor}`:""));Ue(e.isUploading,(a,f)=>{f===!1&&a===!0?c("start"):f===!0&&a===!1&&c("finish")});function D(){r.disable===!1&&(e.abort(),e.uploadedSize.value=0,_.value=0,ae(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function L(){r.disable===!1&&te(["uploaded"],()=>{e.uploadedFiles.value=[]})}function H(){te(["idle","failed"],({size:a})=>{_.value-=a,e.queuedFiles.value=[]})}function te(a,f){if(r.disable===!0)return;const S={files:[],size:0},N=e.files.value.filter(x=>a.indexOf(x.__status)===-1?!0:(S.size+=x.size,S.files.push(x),x.__img!==void 0&&window.URL.revokeObjectURL(x.__img.src),!1));S.files.length!==0&&(e.files.value=N,f(S),c("removed",S.files))}function K(a){r.disable||(a.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(f=>f.__key!==a.__key):a.__status==="uploading"?a.__abort():_.value-=a.size,e.files.value=e.files.value.filter(f=>f.__key!==a.__key?!0:(f.__img!==void 0&&window.URL.revokeObjectURL(f.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(f=>f.__key!==a.__key),c("removed",[a]))}function ae(){e.files.value.forEach(a=>{a.__img!==void 0&&window.URL.revokeObjectURL(a.__img.src)})}function le(){return q.value||F.value.getElementsByClassName("q-uploader__input")[0]}function re(a,f){const S=k(a,f,e.files.value,!0),N=le();N!=null&&(N.value=""),S!==void 0&&(S.forEach(x=>{if(e.updateFileStatus(x,"idle"),_.value+=x.size,r.noThumbnails!==!0&&x.type.toUpperCase().startsWith("IMAGE")){const ne=new Image;ne.src=window.URL.createObjectURL(x),x.__img=ne}}),e.files.value=e.files.value.concat(S),e.queuedFiles.value=e.queuedFiles.value.concat(S),c("added",S),r.autoUpload===!0&&e.upload())}function oe(){n.value===!0&&e.upload()}function M(a,f,S){if(a===!0){const N={type:"a",key:f,icon:y.iconSet.uploader[f],flat:!0,dense:!0};let x;return f==="add"?(N.onClick=m,x=ue):N.onClick=S,d(G,N,x)}}function ue(){return d("input",{ref:q,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:r.accept,multiple:r.multiple===!0?"multiple":void 0,capture:r.capture,onMousedown:fe,onClick:m,onChange:re})}function be(){return o.header!==void 0?o.header(T):[d("div",{class:"q-uploader__header-content column"},[d("div",{class:"flex flex-center no-wrap q-gutter-xs"},[M(e.queuedFiles.value.length!==0,"removeQueue",H),M(e.uploadedFiles.value.length!==0,"removeUploaded",L),e.isUploading.value===!0?d(se,{class:"q-uploader__spinner"}):null,d("div",{class:"col column justify-center"},[r.label!==void 0?d("div",{class:"q-uploader__title"},[r.label]):null,d("div",{class:"q-uploader__subtitle"},[g.value+" / "+v.value])]),M(E.value,"add"),M(r.hideUploadBtn===!1&&n.value===!0,"upload",e.upload),M(e.isUploading.value,"clear",e.abort)])])]}function Fe(){return o.list!==void 0?o.list(T):e.files.value.map(a=>d("div",{key:a.__key,class:"q-uploader__file relative-position"+(r.noThumbnails!==!0&&a.__img!==void 0?" q-uploader__file--img":"")+(a.__status==="failed"?" q-uploader__file--failed":a.__status==="uploaded"?" q-uploader__file--uploaded":""),style:r.noThumbnails!==!0&&a.__img!==void 0?{backgroundImage:'url("'+a.__img.src+'")'}:null},[d("div",{class:"q-uploader__file-header row flex-center no-wrap"},[a.__status==="failed"?d(me,{class:"q-uploader__file-status",name:y.iconSet.type.negative,color:"negative"}):null,d("div",{class:"q-uploader__file-header-content col"},[d("div",{class:"q-uploader__title"},[a.name]),d("div",{class:"q-uploader__subtitle row items-center no-wrap"},[a.__sizeLabel+" / "+a.__progressLabel])]),a.__status==="uploading"?d(He,{value:a.__progress,min:0,max:1,indeterminate:a.__progress===0}):d(G,{round:!0,dense:!0,flat:!0,icon:y.iconSet.uploader[a.__status==="uploaded"?"done":"clear"],onClick:()=>{K(a)}})])]))}Ce(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&ae()});const T={};for(const a in e)Be(e[a])===!0?Ie(T,a,()=>e[a].value):T[a]=e[a];return Object.assign(T,{upload:oe,reset:D,removeUploadedFiles:L,removeQueuedFiles:H,removeFile:K,pickFiles:m,addFiles:w}),Re(T,{canAddFiles:()=>E.value,canUpload:()=>n.value,uploadSizeLabel:()=>g.value,uploadProgressLabel:()=>v.value}),i({...e,upload:oe,reset:D,removeUploadedFiles:L,removeQueuedFiles:H,removeFile:K,pickFiles:m,addFiles:w,canAddFiles:E,canUpload:n,uploadSizeLabel:g,uploadProgressLabel:v}),()=>{const a=[d("div",{class:O.value},be()),d("div",{class:"q-uploader__list scroll"},Fe()),j("uploader")];e.isBusy.value===!0&&a.push(d("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[d(se)]));const f={ref:F,class:A.value};return E.value===!0&&Object.assign(f,{onDragover:p,onDragleave:l}),d("div",f,a)}}const Je=()=>!0;function Ze(t){const i={};return t.forEach(u=>{i[u]=Je}),i}const et=Ze(he);var tt=({name:t,props:i,emits:u,injectPlugin:r})=>ve({name:t,props:{...Ge,...i},emits:Le(u)===!0?{...et,...u}:[...he,...u],setup(o,{expose:c}){return Ke(r,c)}});function P(t){return typeof t=="function"?t:()=>t}const at={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>t=>t.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},lt=["factoryFailed","uploaded","failed","uploading"];function rt({props:t,emit:i,helpers:u}){const r=z([]),o=z([]),c=z(0),b=h(()=>({url:P(t.url),method:P(t.method),headers:P(t.headers),formFields:P(t.formFields),fieldName:P(t.fieldName),withCredentials:P(t.withCredentials),sendRaw:P(t.sendRaw),batch:P(t.batch)})),y=h(()=>c.value>0),C=h(()=>o.value.length!==0);let I;function U(){r.value.forEach(e=>{e.abort()}),o.value.length!==0&&(I=!0)}function R(){const e=u.queuedFiles.value.slice(0);u.queuedFiles.value=[],b.value.batch(e)?F(e):e.forEach(m=>{F([m])})}function F(e){if(c.value++,typeof t.factory!="function"){q(e,{});return}const m=t.factory(e);if(!m)i("factoryFailed",new Error("QUploader: factory() does not return properly"),e),c.value--;else if(typeof m.catch=="function"&&typeof m.then=="function"){o.value.push(m);const w=p=>{u.isAlive()===!0&&(o.value=o.value.filter(l=>l!==m),o.value.length===0&&(I=!1),u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(l=>{u.updateFileStatus(l,"failed")}),i("factoryFailed",p,e),c.value--)};m.then(p=>{I===!0?w(new Error("Aborted")):u.isAlive()===!0&&(o.value=o.value.filter(l=>l!==m),q(e,p))}).catch(w)}else q(e,m||{})}function q(e,m){const w=new FormData,p=new XMLHttpRequest,l=(n,A)=>m[n]!==void 0?P(m[n])(A):b.value[n](A),k=l("url",e);if(!k){console.error("q-uploader: invalid or no URL specified"),c.value--;return}const j=l("formFields",e);j!==void 0&&j.forEach(n=>{w.append(n.name,n.value)});let $=0,s=0,_=0,B=0,v;p.upload.addEventListener("progress",n=>{if(v===!0)return;const A=Math.min(B,n.loaded);u.uploadedSize.value+=A-_,_=A;let O=_-s;for(let D=$;O>0&&D<e.length;D++){const L=e[D];if(O>L.size)O-=L.size,$++,s+=L.size,u.updateFileStatus(L,"uploading",L.size);else{u.updateFileStatus(L,"uploading",O);return}}},!1),p.onreadystatechange=()=>{p.readyState<4||(p.status&&p.status<400?(u.uploadedFiles.value=u.uploadedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"uploaded")}),i("uploaded",{files:e,xhr:p})):(v=!0,u.uploadedSize.value-=_,u.queuedFiles.value=u.queuedFiles.value.concat(e),e.forEach(n=>{u.updateFileStatus(n,"failed")}),i("failed",{files:e,xhr:p})),c.value--,r.value=r.value.filter(n=>n!==p))},p.open(l("method",e),k),l("withCredentials",e)===!0&&(p.withCredentials=!0);const g=l("headers",e);g!==void 0&&g.forEach(n=>{p.setRequestHeader(n.name,n.value)});const E=l("sendRaw",e);e.forEach(n=>{u.updateFileStatus(n,"uploading",0),E!==!0&&w.append(l("fieldName",n),n,n.name),n.xhr=p,n.__abort=()=>{p.abort()},B+=n.size}),i("uploading",{files:e,xhr:p}),r.value.push(p),E===!0?p.send(new Blob(e)):p.send(w)}return{isUploading:y,isBusy:C,abort:U,upload:R}}var ot={name:"QUploader",props:at,emits:lt,injectPlugin:rt},ut=tt(ot);const nt={data(){return{previewUrls:[],files:[]}},methods:{triggerFileUpload(){this.$refs.uploader.pickFiles()},onFilesAdded(t){for(let i of t)this.previewUrls.push(URL.createObjectURL(i)),this.files.push(i);this.emitFile(),this.$refs.uploader.reset()},removeImage(t){this.previewUrls.splice(t,1),this.files.splice(t,1),this.emitFile()},emitFile(){this.$emit("change",this.files)}}},st=t=>(je("data-v-095747c1"),t=t(),$e(),t),it={key:0,class:"q-mb-md preview-section"},dt={class:"upload-section"},ct={class:"full-width"},vt=st(()=>J("div",{class:"upload-text q-pb-sm"},"Upload Images",-1));function ft(t,i,u,r,o,c){return X(),V("div",null,[o.previewUrls.length?(X(),V("div",it,[(X(!0),V(Ee,null,Ne(o.previewUrls,(b,y)=>(X(),V("div",{key:y,class:"preview-item"},[W(Ae,{src:b,ratio:1,"no-native-menu":"",class:"rounded-borders"},{default:ie(()=>[W(G,{round:"",color:"red",icon:"close",size:"sm",class:"absolute all-pointer-events",style:{top:"4px",right:"4px"},onClick:C=>c.removeImage(y)},null,8,["onClick"])]),_:2},1032,["src"])]))),128))])):Pe("",!0),J("div",dt,[W(G,{onClick:c.triggerFileUpload,outline:"",color:"primary",class:"upload-btn full-width",style:{height:"90px"}},{default:ie(()=>[J("div",ct,[W(me,{name:"cloud_upload",size:"36px"})]),vt]),_:1},8,["onClick"]),W(ut,{ref:"uploader",url:"",accept:"image/*",onAdded:c.onFilesAdded,"auto-upload":!1,multiple:"",style:{display:"none"}},null,8,["onAdded"])])])}var bt=Qe(nt,[["render",ft],["__scopeId","data-v-095747c1"]]);export{bt as I};
