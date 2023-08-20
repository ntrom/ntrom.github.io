import{S as He,r as $,T as Se,t as te,b as N,p as j,w as H,o as de,a as k,g as V,x as I,l as U,U as oe,C as Ce,V as We,h as G,W as Me,c as P,X as fe,j as Le,Y as Pe,s as $e}from"./index.204ee7b8.js";import{v as ke,f as he,c as qe,h as Ae}from"./QIcon.a8c33a32.js";import{g as Ve,c as le}from"./QSpinner.8636b2c4.js";function X(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),He.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const ze={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function De({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:o,proxy:n,emit:s}=V(),i=$(null);let r=null;function u(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const c={};l===void 0&&(Object.assign(c,{hide(a){n.hide(a)},toggle(a){n.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Se(a,13)===!0&&c.toggle(a)},contextClick(a){n.hide(a),te(a),N(()=>{n.show(a),a.qAnchorHandled=!0})},prevent:te,mobileTouch(a){if(c.mobileCleanup(a),u(a)!==!0)return;n.hide(a),i.value.classList.add("non-selectable");const d=a.target;j(c,"anchor",[[d,"touchmove","mobileCleanup","passive"],[d,"touchend","mobileCleanup","passive"],[d,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,n.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&X()}}),l=function(a=o.contextMenu){if(o.noParentEvent===!0||i.value===null)return;let d;a===!0?n.$q.platform.is.mobile===!0?d=[[i.value,"touchstart","mobileTouch","passive"]]:d=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:d=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],j(c,"anchor",d)});function h(){I(c,"anchor")}function b(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function p(){if(o.target===!1||o.target===""||n.$el.parentNode===null)i.value=null;else if(o.target===!0)b(n.$el.parentNode);else{let a=o.target;if(typeof o.target=="string")try{a=document.querySelector(o.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${o.target}" not found`))}}return H(()=>o.contextMenu,a=>{i.value!==null&&(h(),l(a))}),H(()=>o.target,()=>{i.value!==null&&h(),p()}),H(()=>o.noParentEvent,a=>{i.value!==null&&(a===!0?h():l())}),de(()=>{p(),t!==!0&&o.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),k(()=>{r!==null&&clearTimeout(r),h()}),{anchorEl:i,canShow:u,anchorEvents:c}}function Ne(e,t){const l=$(null);let o;function n(r,u){const c=`${u!==void 0?"add":"remove"}EventListener`,h=u!==void 0?u:o;r!==window&&r[c]("scroll",h,U.passive),window[c]("scroll",h,U.passive),o=u}function s(){l.value!==null&&(n(l.value),l.value=null)}const i=H(()=>e.noParentEvent,()=>{l.value!==null&&(s(),t())});return k(i),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:n}}const je={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Oe=["beforeShow","show","beforeHide","hide"];function Fe({showing:e,canShow:t,hideOnRouteChange:l,handleShow:o,handleHide:n,processOnMount:s}){const i=V(),{props:r,emit:u,proxy:c}=i;let h;function b(f){e.value===!0?d(f):p(f)}function p(f){if(r.disable===!0||f!==void 0&&f.qAnchorHandled===!0||t!==void 0&&t(f)!==!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!0),h=f,N(()=>{h===f&&(h=void 0)})),(r.modelValue===null||v===!1)&&a(f)}function a(f){e.value!==!0&&(e.value=!0,u("beforeShow",f),o!==void 0?o(f):u("show",f))}function d(f){if(r.disable===!0)return;const v=r["onUpdate:modelValue"]!==void 0;v===!0&&(u("update:modelValue",!1),h=f,N(()=>{h===f&&(h=void 0)})),(r.modelValue===null||v===!1)&&y(f)}function y(f){e.value!==!1&&(e.value=!1,u("beforeHide",f),n!==void 0?n(f):u("hide",f))}function E(f){r.disable===!0&&f===!0?r["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):f===!0!==e.value&&(f===!0?a:y)(h)}H(()=>r.modelValue,E),l!==void 0&&ke(i)===!0&&H(()=>c.$route.fullPath,()=>{l.value===!0&&e.value===!0&&d()}),s===!0&&de(()=>{E(r.modelValue)});const M={show:p,hide:d,toggle:b};return Object.assign(c,M),M}let z=[],O=[];function me(e){O=O.filter(t=>t!==e)}function Re(e){me(e),O.push(e)}function ne(e){me(e),O.length===0&&z.length!==0&&(z[z.length-1](),z=[])}let Qe=1,Be=document.body;function Ie(e,t){const l=document.createElement("div");if(l.id=t!==void 0?`q-portal--${t}--${Qe++}`:e,oe.globalNodes!==void 0){const o=oe.globalNodes.class;o!==void 0&&(l.className=o)}return Be.appendChild(l),l}function Ue(e){e.remove()}const A=[];function Ge(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Xe(e,t,l,o){const n=$(!1),s=$(!1);let i=null;const r={},u=o==="dialog"&&Ge(e);function c(b){if(b===!0){ne(r),s.value=!0;return}s.value=!1,n.value===!1&&(u===!1&&i===null&&(i=Ie(!1,o)),n.value=!0,A.push(e.proxy),Re(r))}function h(b){if(s.value=!1,b!==!0)return;ne(r),n.value=!1;const p=A.indexOf(e.proxy);p!==-1&&A.splice(p,1),i!==null&&(Ue(i),i=null)}return Ce(()=>{h(!0)}),e.proxy.__qPortal=!0,We(e.proxy,"contentEl",()=>t.value),{showPortal:c,hidePortal:h,portalIsActive:n,portalIsAccessible:s,renderPortal:()=>u===!0?l():n.value===!0?[G(Me,{to:i},l())]:void 0}}const Ye={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function _e(e,t=()=>{},l=()=>{}){return{transitionProps:P(()=>{const o=`q-transition--${e.transitionShow||t()}`,n=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${n}-leave-from`,leaveActiveClass:`${n}-leave-active`,leaveToClass:`${n}-leave-to`}}),transitionStyle:P(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ke(){let e;const t=V();function l(){e=void 0}return fe(l),k(l),{removeTick:l,registerTick(o){e=o,N(()=>{e===o&&(he(t)===!1&&e(),e=void 0)})}}}function Je(){let e=null;const t=V();function l(){e!==null&&(clearTimeout(e),e=null)}return fe(l),k(l),{removeTimeout:l,registerTimeout(o,n){l(),he(t)===!1&&(e=setTimeout(o,n))}}}const Ze=[null,document,document.body,document.scrollingElement,document.documentElement];function et(e,t){let l=Ve(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return Ze.includes(l)?window:l}function ct(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function dt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let D;function tt(){if(D!==void 0)return D;const e=document.createElement("p"),t=document.createElement("div");le(e,{width:"100%",height:"200px"}),le(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=t.clientWidth),t.remove(),D=l-o,D}function ft(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{notPassiveCapture:F}=U,W=[];function R(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=A.length-1;for(;l>=0;){const o=A[l].$;if(o.type.name==="QTooltip"){l--;continue}if(o.type.name!=="QDialog")break;if(o.props.seamless!==!0)return;l--}for(let o=W.length-1;o>=0;o--){const n=W[o];if((n.anchorEl.value===null||n.anchorEl.value.contains(t)===!1)&&(t===document.body||n.innerRef.value!==null&&n.innerRef.value.contains(t)===!1))e.qClickOutside=!0,n.onClickOutside(e);else return}}function ot(e){W.push(e),W.length===1&&(document.addEventListener("mousedown",R,F),document.addEventListener("touchstart",R,F))}function ie(e){const t=W.findIndex(l=>l===e);t>-1&&(W.splice(t,1),W.length===0&&(document.removeEventListener("mousedown",R,F),document.removeEventListener("touchstart",R,F)))}let ae,re;function ue(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function lt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const Y={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{Y[`${e}#ltr`]=e,Y[`${e}#rtl`]=e});function se(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:Y[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function nt(e,t){let{top:l,left:o,right:n,bottom:s,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],o-=t[0],s+=t[1],n+=t[0],i+=t[0],r+=t[1]),{top:l,bottom:s,height:r,left:o,right:n,width:i,middle:o+(n-o)/2,center:l+(s-l)/2}}function it(e,t,l){let{top:o,left:n}=e.getBoundingClientRect();return o+=t.top,n+=t.left,l!==void 0&&(o+=l[1],n+=l[0]),{top:o,bottom:o+1,height:1,left:n,right:n+1,width:1,middle:n,center:o}}function at(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ce(e,t,l,o){return{top:e[l.vertical]-t[o.vertical],left:e[l.horizontal]-t[o.horizontal]}}function ve(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ve(e,t+1)},10);return}const{targetEl:l,offset:o,anchorEl:n,anchorOrigin:s,selfOrigin:i,absoluteOffset:r,fit:u,cover:c,maxHeight:h,maxWidth:b}=e;if(Le.is.ios===!0&&window.visualViewport!==void 0){const L=document.body.style,{offsetLeft:w,offsetTop:x}=window.visualViewport;w!==ae&&(L.setProperty("--q-pe-left",w+"px"),ae=w),x!==re&&(L.setProperty("--q-pe-top",x+"px"),re=x)}const{scrollLeft:p,scrollTop:a}=l,d=r===void 0?nt(n,c===!0?[0,0]:o):it(n,r,o);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:y,offsetHeight:E}=l,{elWidth:M,elHeight:f}=u===!0||c===!0?{elWidth:Math.max(d.width,y),elHeight:c===!0?Math.max(d.height,E):E}:{elWidth:y,elHeight:E};let v={maxWidth:b,maxHeight:h};(u===!0||c===!0)&&(v.minWidth=d.width+"px",c===!0&&(v.minHeight=d.height+"px")),Object.assign(l.style,v);const S=at(M,f);let m=ce(d,S,s,i);if(r===void 0||o===void 0)B(m,d,S,s,i);else{const{top:L,left:w}=m;B(m,d,S,s,i);let x=!1;if(m.top!==L){x=!0;const T=2*o[1];d.center=d.top-=T,d.bottom-=T+2}if(m.left!==w){x=!0;const T=2*o[0];d.middle=d.left-=T,d.right-=T+2}x===!0&&(m=ce(d,S,s,i),B(m,d,S,s,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",d.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",d.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==p&&(l.scrollLeft=p)}function B(e,t,l,o,n){const s=l.bottom,i=l.right,r=tt(),u=window.innerHeight-r,c=document.body.clientWidth;if(e.top<0||e.top+s>u)if(n.vertical==="center")e.top=t[o.vertical]>u/2?Math.max(0,u-s):0,e.maxHeight=Math.min(s,u);else if(t[o.vertical]>u/2){const h=Math.min(u,o.vertical==="center"?t.center:o.vertical===n.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,h),e.top=Math.max(0,h-s)}else e.top=Math.max(0,o.vertical==="center"?t.center:o.vertical===n.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,u-e.top);if(e.left<0||e.left+i>c)if(e.maxWidth=Math.min(i,c),n.horizontal==="middle")e.left=t[o.horizontal]>c/2?Math.max(0,c-i):0;else if(t[o.horizontal]>c/2){const h=Math.min(c,o.horizontal==="middle"?t.middle:o.horizontal===n.horizontal?t.right:t.left);e.maxWidth=Math.min(i,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,o.horizontal==="middle"?t.middle:o.horizontal===n.horizontal?t.left:t.right),e.maxWidth=Math.min(i,c-e.left)}var ht=qe({name:"QTooltip",inheritAttrs:!1,props:{...ze,...je,...Ye,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ue},self:{type:String,default:"top middle",validator:ue},offset:{type:Array,default:()=>[14,14],validator:lt},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...Oe],setup(e,{slots:t,emit:l,attrs:o}){let n,s;const i=V(),{proxy:{$q:r}}=i,u=$(null),c=$(!1),h=P(()=>se(e.anchor,r.lang.rtl)),b=P(()=>se(e.self,r.lang.rtl)),p=P(()=>e.persistent!==!0),{registerTick:a,removeTick:d}=Ke(),{registerTimeout:y}=Je(),{transitionProps:E,transitionStyle:M}=_e(e),{localScrollTarget:f,changeScrollEvent:v,unconfigureScrollTarget:S}=Ne(e,Z),{anchorEl:m,canShow:L,anchorEvents:w}=De({showing:c,configureAnchorEl:xe}),{show:x,hide:T}=Fe({showing:c,canShow:L,handleShow:pe,handleHide:be,hideOnRouteChange:p,processOnMount:!0});Object.assign(w,{delayShow:we,delayHide:ye});const{showPortal:_,hidePortal:K,renderPortal:ge}=Xe(i,u,Ee,"tooltip");if(r.platform.is.mobile===!0){const g={anchorEl:m,innerRef:u,onClickOutside(C){return T(C),C.target.classList.contains("q-dialog__backdrop")&&$e(C),!0}},Q=P(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);H(Q,C=>{(C===!0?ot:ie)(g)}),k(()=>{ie(g)})}function pe(g){_(),a(()=>{s=new MutationObserver(()=>q()),s.observe(u.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),q(),Z()}),n===void 0&&(n=H(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,q)),y(()=>{_(!0),l("show",g)},e.transitionDuration)}function be(g){d(),K(),J(),y(()=>{K(!0),l("hide",g)},e.transitionDuration)}function J(){s!==void 0&&(s.disconnect(),s=void 0),n!==void 0&&(n(),n=void 0),S(),I(w,"tooltipTemp")}function q(){ve({targetEl:u.value,offset:e.offset,anchorEl:m.value,anchorOrigin:h.value,selfOrigin:b.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function we(g){if(r.platform.is.mobile===!0){X(),document.body.classList.add("non-selectable");const Q=m.value,C=["touchmove","touchcancel","touchend","click"].map(ee=>[Q,ee,"delayHide","passiveCapture"]);j(w,"tooltipTemp",C)}y(()=>{x(g)},e.delay)}function ye(g){r.platform.is.mobile===!0&&(I(w,"tooltipTemp"),X(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),y(()=>{T(g)},e.hideDelay)}function xe(){if(e.noParentEvent===!0||m.value===null)return;const g=r.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];j(w,"anchor",g)}function Z(){if(m.value!==null||e.scrollTarget!==void 0){f.value=et(m.value,e.scrollTarget);const g=e.noParentEvent===!0?q:T;v(f.value,g)}}function Te(){return c.value===!0?G("div",{...o,ref:u,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",o.class],style:[o.style,M.value],role:"tooltip"},Ae(t.default)):null}function Ee(){return G(Pe,E.value,Te)}return k(J),Object.assign(i.proxy,{updatePosition:q}),ge}});export{ht as Q,ct as a,Oe as b,X as c,Je as d,Fe as e,et as f,dt as g,ft as h,tt as i,je as u};
