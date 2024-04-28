import{i as ze,e as ee,r as w,a as g,o as U,k as G,H as me,I as De,R as Oe,h as m,J as ve,K as je,L as We,Q as X,A as Qe,g as ne,M as Fe,N as Ve,v as He,c as Te,n as Ke,O as fe,q as be,P as te,S as he,w as N,p as Ne,T as Ue,U as Ge,b as Xe}from"./index.10a1d54a.js";let Je=0;const nt=["click","keydown"],at={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Je++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function lt(e,L,d,i){const l=ze(me,ee);if(l===ee)return console.error("QTab/QRouteTab component needs to be child of QTabs"),ee;const{proxy:x}=ne(),_=w(null),I=w(null),v=w(null),f=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),q=g(()=>l.currentModel.value===e.name),z=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(q.value===!0?" q-tab--active"+(l.tabProps.value.activeClass?" "+l.tabProps.value.activeClass:"")+(l.tabProps.value.activeColor?` text-${l.tabProps.value.activeColor}`:"")+(l.tabProps.value.activeBgColor?` bg-${l.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&l.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||l.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(i!==void 0?i.linkClass.value:"")),E=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(l.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=g(()=>e.disable===!0||l.hasFocus.value===!0||q.value===!1&&l.hasActiveTab.value===!0?-1:e.tabindex||0);function k(o,T){if(T!==!0&&_.value!==null&&_.value.focus(),e.disable===!0){i!==void 0&&i.hasRouterLink.value===!0&&ve(o);return}if(i===void 0){l.updateModel({name:e.name}),d("click",o);return}if(i.hasRouterLink.value===!0){const C=(b={})=>{let R;const S=b.to===void 0||Fe(b.to,e.to)===!0?l.avoidRouteWatcher=Ve():null;return i.navigateToRouterLink(o,{...b,returnRouterError:!0}).catch($=>{R=$}).then($=>{if(S===l.avoidRouteWatcher&&(l.avoidRouteWatcher=!1,R===void 0&&($===void 0||$.message!==void 0&&$.message.startsWith("Avoided redundant navigation")===!0)&&l.updateModel({name:e.name})),b.returnRouterError===!0)return R!==void 0?Promise.reject(R):$})};d("click",o,C),o.defaultPrevented!==!0&&C();return}d("click",o)}function A(o){je(o,[13,32])?k(o,!0):We(o)!==!0&&o.keyCode>=35&&o.keyCode<=40&&o.altKey!==!0&&o.metaKey!==!0&&l.onKbdNavigate(o.keyCode,x.$el)===!0&&ve(o),d("keydown",o)}function W(){const o=l.tabProps.value.narrowIndicator,T=[],C=m("div",{ref:v,class:["q-tab__indicator",l.tabProps.value.indicatorClass]});e.icon!==void 0&&T.push(m(X,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&T.push(m("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&T.push(e.alertIcon!==void 0?m(X,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):m("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),o===!0&&T.push(C);const b=[m("div",{class:"q-focus-helper",tabindex:-1,ref:_}),m("div",{class:E.value},Qe(L.default,T))];return o===!1&&b.push(C),b}const D={name:g(()=>e.name),rootRef:I,tabIndicatorRef:v,routeData:i};U(()=>{l.unregisterTab(D)}),G(()=>{l.registerTab(D)});function Q(o,T){const C={ref:I,class:z.value,tabindex:y.value,role:"tab","aria-selected":q.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:k,onKeydown:A,...T};return De(m(o,C,W()),[[Oe,f.value]])}return{renderTab:Q,$tabs:l}}function Ye(){const e=w(!He.value);return e.value===!1&&G(()=>{e.value=!0}),e}const we=typeof ResizeObserver!="undefined",ge=we===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ze=Te({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:L}){let d=null,i,l={width:-1,height:-1};function x(v){v===!0||e.debounce===0||e.debounce==="0"?_():d===null&&(d=setTimeout(_,e.debounce))}function _(){if(d!==null&&(clearTimeout(d),d=null),i){const{offsetWidth:v,offsetHeight:f}=i;(v!==l.width||f!==l.height)&&(l={width:v,height:f},L("resize",l))}}const{proxy:I}=ne();if(I.trigger=x,we===!0){let v;const f=q=>{i=I.$el.parentNode,i?(v=new ResizeObserver(x),v.observe(i),_()):q!==!0&&fe(()=>{f(!0)})};return G(()=>{f()}),U(()=>{d!==null&&clearTimeout(d),v!==void 0&&(v.disconnect!==void 0?v.disconnect():i&&v.unobserve(i))}),Ke}else{let q=function(){d!==null&&(clearTimeout(d),d=null),f!==void 0&&(f.removeEventListener!==void 0&&f.removeEventListener("resize",x,be.passive),f=void 0)},z=function(){q(),i&&i.contentDocument&&(f=i.contentDocument.defaultView,f.addEventListener("resize",x,be.passive),_())};const v=Ye();let f;return G(()=>{fe(()=>{i=I.$el,i&&z()})}),U(q),()=>{if(v.value===!0)return m("object",{style:ge.style,tabindex:-1,type:"text/html",data:ge.url,"aria-hidden":"true",onLoad:z})}}}});let ye=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const L=document.createElement("div");Object.assign(L.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(L),e.scrollLeft=-1e3,ye=e.scrollLeft>=0,e.remove()}function pe(e,L,d){const i=d===!0?["left","right"]:["top","bottom"];return`absolute-${L===!0?i[0]:i[1]}${e?` text-${e}`:""}`}const et=["left","center","right","justify"];var ot=Te({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>et.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:L,emit:d}){const{proxy:i}=ne(),{$q:l}=i,{registerTick:x}=te(),{registerTick:_}=te(),{registerTick:I}=te(),{registerTimeout:v,removeTimeout:f}=he(),{registerTimeout:q,removeTimeout:z}=he(),E=w(null),y=w(null),k=w(e.modelValue),A=w(!1),W=w(!0),D=w(!1),Q=w(!1),o=[],T=w(0),C=w(!1);let b=null,R=null,S;const $=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:pe(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ce=g(()=>{const t=T.value,n=k.value;for(let a=0;a<t;a++)if(o[a].name.value===n)return!0;return!1}),qe=g(()=>`q-tabs__content--align-${A.value===!0?"left":Q.value===!0?"justify":e.align}`),Re=g(()=>`q-tabs row no-wrap items-center q-tabs--${A.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Le=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+qe.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),F=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),V=g(()=>e.vertical!==!0&&l.lang.rtl===!0),J=g(()=>ye===!1&&V.value===!0);N(V,j),N(()=>e.modelValue,t=>{Y({name:t,setCurrent:!0,skipEmit:!0})}),N(()=>e.outsideArrows,H);function Y({name:t,setCurrent:n,skipEmit:a}){k.value!==t&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(_e(k.value,t),k.value=t))}function H(){x(()=>{ae({width:E.value.offsetWidth,height:E.value.offsetHeight})})}function ae(t){if(F.value===void 0||y.value===null)return;const n=t[F.value.container],a=Math.min(y.value[F.value.scroll],Array.prototype.reduce.call(y.value.children,(c,u)=>c+(u[F.value.content]||0),0)),s=n>0&&a>n;A.value=s,s===!0&&_(j),Q.value=n<parseInt(e.breakpoint,10)}function _e(t,n){const a=t!=null&&t!==""?o.find(c=>c.name.value===t):null,s=n!=null&&n!==""?o.find(c=>c.name.value===n):null;if(a&&s){const c=a.tabIndicatorRef.value,u=s.tabIndicatorRef.value;b!==null&&(clearTimeout(b),b=null),c.style.transition="none",c.style.transform="none",u.style.transition="none",u.style.transform="none";const r=c.getBoundingClientRect(),h=u.getBoundingClientRect();u.style.transform=e.vertical===!0?`translate3d(0,${r.top-h.top}px,0) scale3d(1,${h.height?r.height/h.height:1},1)`:`translate3d(${r.left-h.left}px,0,0) scale3d(${h.width?r.width/h.width:1},1,1)`,I(()=>{b=setTimeout(()=>{b=null,u.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",u.style.transform="none"},70)})}s&&A.value===!0&&O(s.rootRef.value)}function O(t){const{left:n,width:a,top:s,height:c}=y.value.getBoundingClientRect(),u=t.getBoundingClientRect();let r=e.vertical===!0?u.top-s:u.left-n;if(r<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(r),j();return}r+=e.vertical===!0?u.height-c:u.width-a,r>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(r),j())}function j(){const t=y.value;if(t===null)return;const n=t.getBoundingClientRect(),a=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);V.value===!0?(W.value=Math.ceil(a+n.width)<t.scrollWidth-1,D.value=a>0):(W.value=a>0,D.value=e.vertical===!0?Math.ceil(a+n.height)<t.scrollHeight:Math.ceil(a+n.width)<t.scrollWidth)}function le(t){R!==null&&clearInterval(R),R=setInterval(()=>{Pe(t)===!0&&B()},5)}function oe(){le(J.value===!0?Number.MAX_SAFE_INTEGER:0)}function re(){le(J.value===!0?0:Number.MAX_SAFE_INTEGER)}function B(){R!==null&&(clearInterval(R),R=null)}function ke(t,n){const a=Array.prototype.filter.call(y.value.children,h=>h===n||h.matches&&h.matches(".q-tab.q-focusable")===!0),s=a.length;if(s===0)return;if(t===36)return O(a[0]),a[0].focus(),!0;if(t===35)return O(a[s-1]),a[s-1].focus(),!0;const c=t===(e.vertical===!0?38:37),u=t===(e.vertical===!0?40:39),r=c===!0?-1:u===!0?1:void 0;if(r!==void 0){const h=V.value===!0?-1:1,P=a.indexOf(n)+r*h;return P>=0&&P<s&&(O(a[P]),a[P].focus({preventScroll:!0})),!0}}const Se=g(()=>J.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Pe(t){const n=y.value,{get:a,set:s}=Se.value;let c=!1,u=a(n);const r=t<u?-1:1;return u+=r*5,u<0?(c=!0,u=0):(r===-1&&u<=t||r===1&&u>=t)&&(c=!0,u=t),s(n,u),j(),c}function ie(t,n){for(const a in t)if(t[a]!==n[a])return!1;return!0}function xe(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const a=o.filter(r=>r.routeData!==void 0&&r.routeData.hasRouterLink.value===!0),{hash:s,query:c}=i.$route,u=Object.keys(c).length;for(const r of a){const h=r.routeData.exact.value===!0;if(r.routeData[h===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:P,query:Z,matched:Me,href:Ee}=r.routeData.resolvedLink.value,p=Object.keys(Z).length;if(h===!0){if(P!==s||p!==u||ie(c,Z)===!1)continue;t=r.name.value;break}if(P!==""&&P!==s||p!==0&&ie(Z,c)===!1)continue;const M={matchedLen:Me.length,queryDiff:u-p,hrefLen:Ee.length-P.length};if(M.matchedLen>n.matchedLen){t=r.name.value,n=M;continue}else if(M.matchedLen!==n.matchedLen)continue;if(M.queryDiff<n.queryDiff)t=r.name.value,n=M;else if(M.queryDiff!==n.queryDiff)continue;M.hrefLen>n.hrefLen&&(t=r.name.value,n=M)}t===null&&o.some(r=>r.routeData===void 0&&r.name.value===k.value)===!0||Y({name:t,setCurrent:!0})}function Ie(t){if(f(),C.value!==!0&&E.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&E.value.contains(n)===!0&&(C.value=!0,A.value===!0&&O(n))}}function Ae(){v(()=>{C.value=!1},30)}function K(){se.avoidRouteWatcher===!1?q(xe):z()}function ue(){if(S===void 0){const t=N(()=>i.$route.fullPath,K);S=()=>{t(),S=void 0}}}function $e(t){o.push(t),T.value++,H(),t.routeData===void 0||i.$route===void 0?q(()=>{if(A.value===!0){const n=k.value,a=n!=null&&n!==""?o.find(s=>s.name.value===n):null;a&&O(a.rootRef.value)}}):(ue(),t.routeData.hasRouterLink.value===!0&&K())}function Be(t){o.splice(o.indexOf(t),1),T.value--,H(),S!==void 0&&t.routeData!==void 0&&(o.every(n=>n.routeData===void 0)===!0&&S(),K())}const se={currentModel:k,tabProps:$,hasFocus:C,hasActiveTab:Ce,registerTab:$e,unregisterTab:Be,verifyRouteModel:K,updateModel:Y,onKbdNavigate:ke,avoidRouteWatcher:!1};Ne(me,se);function ce(){b!==null&&clearTimeout(b),B(),S!==void 0&&S()}let de;return U(ce),Ue(()=>{de=S!==void 0,ce()}),Ge(()=>{de===!0&&ue(),H()}),()=>m("div",{ref:E,class:Re.value,role:"tablist",onFocusin:Ie,onFocusout:Ae},[m(Ze,{onResize:ae}),m("div",{ref:y,class:Le.value,onScroll:j},Xe(L.default)),m(X,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(W.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||l.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:oe,onTouchstartPassive:oe,onMouseupPassive:B,onMouseleavePassive:B,onTouchendPassive:B}),m(X,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||l.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:re,onTouchstartPassive:re,onMouseupPassive:B,onMouseleavePassive:B,onTouchendPassive:B})])}});export{Ze as Q,nt as a,lt as b,ot as c,at as u};
