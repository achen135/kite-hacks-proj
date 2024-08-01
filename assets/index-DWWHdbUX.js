(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rf={exports:{}},Uo={},Nf={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gi=Symbol.for("react.element"),Hv=Symbol.for("react.portal"),Wv=Symbol.for("react.fragment"),Gv=Symbol.for("react.strict_mode"),Kv=Symbol.for("react.profiler"),qv=Symbol.for("react.provider"),Qv=Symbol.for("react.context"),Xv=Symbol.for("react.forward_ref"),Yv=Symbol.for("react.suspense"),Jv=Symbol.for("react.memo"),Zv=Symbol.for("react.lazy"),Ph=Symbol.iterator;function ey(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var Of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Df=Object.assign,Lf={};function Fr(t,e,n){this.props=t,this.context=e,this.refs=Lf,this.updater=n||Of}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xf(){}xf.prototype=Fr.prototype;function mu(t,e,n){this.props=t,this.context=e,this.refs=Lf,this.updater=n||Of}var vu=mu.prototype=new xf;vu.constructor=mu;Df(vu,Fr.prototype);vu.isPureReactComponent=!0;var Rh=Array.isArray,Mf=Object.prototype.hasOwnProperty,yu={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function jf(t,e,n){var r,i={},o=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)Mf.call(e,r)&&!Uf.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var h=Array(u),f=0;f<u;f++)h[f]=arguments[f+2];i.children=h}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Gi,type:t,key:o,ref:l,props:i,_owner:yu.current}}function ty(t,e){return{$$typeof:Gi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Gi}function ny(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nh=/\/+/g;function Nl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ny(""+t.key):e.toString(36)}function zs(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Gi:case Hv:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+Nl(l,0):r,Rh(i)?(n="",t!=null&&(n=t.replace(Nh,"$&/")+"/"),zs(i,e,n,"",function(f){return f})):i!=null&&(wu(i)&&(i=ty(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Nh,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",Rh(t))for(var u=0;u<t.length;u++){o=t[u];var h=r+Nl(o,u);l+=zs(o,e,n,h,i)}else if(h=ey(t),typeof h=="function")for(t=h.call(t),u=0;!(o=t.next()).done;)o=o.value,h=r+Nl(o,u++),l+=zs(o,e,n,h,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function vs(t,e,n){if(t==null)return t;var r=[],i=0;return zs(t,r,"","",function(o){return e.call(n,o,i++)}),r}function ry(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},bs={transition:null},iy={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:bs,ReactCurrentOwner:yu};function Ff(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:vs,forEach:function(t,e,n){vs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vs(t,function(){e++}),e},toArray:function(t){return vs(t,function(e){return e})||[]},only:function(t){if(!wu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Fr;H.Fragment=Wv;H.Profiler=Kv;H.PureComponent=mu;H.StrictMode=Gv;H.Suspense=Yv;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;H.act=Ff;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Df({},t.props),i=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=yu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(h in e)Mf.call(e,h)&&!Uf.hasOwnProperty(h)&&(r[h]=e[h]===void 0&&u!==void 0?u[h]:e[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){u=Array(h);for(var f=0;f<h;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Gi,type:t.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(t){return t={$$typeof:Qv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qv,_context:t},t.Consumer=t};H.createElement=jf;H.createFactory=function(t){var e=jf.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Xv,render:t}};H.isValidElement=wu;H.lazy=function(t){return{$$typeof:Zv,_payload:{_status:-1,_result:t},_init:ry}};H.memo=function(t,e){return{$$typeof:Jv,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=bs.transition;bs.transition={};try{t()}finally{bs.transition=e}};H.unstable_act=Ff;H.useCallback=function(t,e){return Me.current.useCallback(t,e)};H.useContext=function(t){return Me.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};H.useEffect=function(t,e){return Me.current.useEffect(t,e)};H.useId=function(){return Me.current.useId()};H.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Me.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};H.useRef=function(t){return Me.current.useRef(t)};H.useState=function(t){return Me.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Me.current.useTransition()};H.version="18.3.1";Nf.exports=H;var jo=Nf.exports;const sy=Vv(jo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=jo,ly=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),uy=Object.prototype.hasOwnProperty,cy=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hy={key:!0,ref:!0,__self:!0,__source:!0};function zf(t,e,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)uy.call(e,r)&&!hy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ly,type:t,key:o,ref:l,props:i,_owner:cy.current}}Uo.Fragment=ay;Uo.jsx=zf;Uo.jsxs=zf;Rf.exports=Uo;var x=Rf.exports,fa={},bf={exports:{}},qe={},$f={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,B){var V=F.length;F.push(B);e:for(;0<V;){var re=V-1>>>1,X=F[re];if(0<i(X,B))F[re]=B,F[V]=X,V=re;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],V=F.pop();if(V!==B){F[0]=V;e:for(var re=0,X=F.length,ae=X>>>1;re<ae;){var kt=2*(re+1)-1,Ct=F[kt],At=kt+1,Pt=F[At];if(0>i(Ct,V))At<X&&0>i(Pt,Ct)?(F[re]=Pt,F[At]=V,re=At):(F[re]=Ct,F[kt]=V,re=kt);else if(At<X&&0>i(Pt,V))F[re]=Pt,F[At]=V,re=At;else break e}}return B}function i(F,B){var V=F.sortIndex-B.sortIndex;return V!==0?V:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var h=[],f=[],I=1,A=null,k=3,O=!1,R=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var B=n(f);B!==null;){if(B.callback===null)r(f);else if(B.startTime<=F)r(f),B.sortIndex=B.expirationTime,e(h,B);else break;B=n(f)}}function N(F){if(D=!1,S(F),!R)if(n(h)!==null)R=!0,Vr(U);else{var B=n(f);B!==null&&Tt(N,B.startTime-F)}}function U(F,B){R=!1,D&&(D=!1,E(p),p=-1),O=!0;var V=k;try{for(S(B),A=n(h);A!==null&&(!(A.expirationTime>B)||F&&!_());){var re=A.callback;if(typeof re=="function"){A.callback=null,k=A.priorityLevel;var X=re(A.expirationTime<=B);B=t.unstable_now(),typeof X=="function"?A.callback=X:A===n(h)&&r(h),S(B)}else r(h);A=n(h)}if(A!==null)var ae=!0;else{var kt=n(f);kt!==null&&Tt(N,kt.startTime-B),ae=!1}return ae}finally{A=null,k=V,O=!1}}var j=!1,m=null,p=-1,g=5,y=-1;function _(){return!(t.unstable_now()-y<g)}function C(){if(m!==null){var F=t.unstable_now();y=F;var B=!0;try{B=m(!0,F)}finally{B?v():(j=!1,m=null)}}else j=!1}var v;if(typeof w=="function")v=function(){w(C)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,kn=Xe.port2;Xe.port1.onmessage=C,v=function(){kn.postMessage(null)}}else v=function(){b(C,0)};function Vr(F){m=F,j||(j=!0,v())}function Tt(F,B){p=b(function(){F(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){R||O||(R=!0,Vr(U))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(F){switch(k){case 1:case 2:case 3:var B=3;break;default:B=k}var V=k;k=B;try{return F()}finally{k=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=k;k=F;try{return B()}finally{k=V}},t.unstable_scheduleCallback=function(F,B,V){var re=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?re+V:re):V=re,F){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=V+X,F={id:I++,callback:B,priorityLevel:F,startTime:V,expirationTime:X,sortIndex:-1},V>re?(F.sortIndex=V,e(f,F),n(h)===null&&F===n(f)&&(D?(E(p),p=-1):D=!0,Tt(N,V-re))):(F.sortIndex=X,e(h,F),R||O||(R=!0,Vr(U))),F},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(F){var B=k;return function(){var V=k;k=B;try{return F.apply(this,arguments)}finally{k=V}}}})(Bf);$f.exports=Bf;var dy=$f.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=jo,Ke=dy;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vf=new Set,Ci={};function Qn(t,e){Rr(t,e),Rr(t+"Capture",e)}function Rr(t,e){for(Ci[t]=e,t=0;t<e.length;t++)Vf.add(e[t])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pa=Object.prototype.hasOwnProperty,py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},Dh={};function gy(t){return pa.call(Dh,t)?!0:pa.call(Oh,t)?!1:py.test(t)?Dh[t]=!0:(Oh[t]=!0,!1)}function my(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vy(t,e,n,r){if(e===null||typeof e>"u"||my(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function Eu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_u,Eu);we[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_u,Eu);we[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_u,Eu);we[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function Su(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vy(e,n,i,r)&&(n=null),r||i===null?gy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wt=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ys=Symbol.for("react.element"),sr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Iu=Symbol.for("react.strict_mode"),ga=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Wf=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Gf=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function ri(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,Ol;function hi(t){if(Ol===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ol=e&&e[1]||""}return`
`+Ol+t}var Dl=!1;function Ll(t,e){if(!t||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var h=`
`+i[l].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=l&&0<=u);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?hi(t):""}function yy(t){switch(t.tag){case 5:return hi(t.type);case 16:return hi("Lazy");case 13:return hi("Suspense");case 19:return hi("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function ya(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case or:return"Fragment";case sr:return"Portal";case ga:return"Profiler";case Iu:return"StrictMode";case ma:return"Suspense";case va:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wf:return(t.displayName||"Context")+".Consumer";case Hf:return(t._context.displayName||"Context")+".Provider";case Tu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ku:return e=t.displayName||null,e!==null?e:ya(t.type)||"Memo";case Yt:e=t._payload,t=t._init;try{return ya(t(e))}catch{}}return null}function wy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ya(e);case 8:return e===Iu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _y(t){var e=Kf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ws(t){t._valueTracker||(t._valueTracker=_y(t))}function qf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function to(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wa(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qf(t,e){e=e.checked,e!=null&&Su(t,"checked",e,!1)}function _a(t,e){Qf(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ea(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ea(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ea(t,e,n){(e!=="number"||to(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var di=Array.isArray;function wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(di(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function Xf(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Yf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Yf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _s,Jf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ai(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ey=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(t){Ey.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),gi[e]=gi[t]})});function Zf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||gi.hasOwnProperty(t)&&gi[t]?(""+e).trim():e+"px"}function ep(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Sy=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(t,e){if(e){if(Sy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function ka(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ca=null;function Cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Aa=null,_r=null,Er=null;function Fh(t){if(t=Qi(t)){if(typeof Aa!="function")throw Error(L(280));var e=t.stateNode;e&&(e=Bo(e),Aa(t.stateNode,t.type,e))}}function tp(t){_r?Er?Er.push(t):Er=[t]:_r=t}function np(){if(_r){var t=_r,e=Er;if(Er=_r=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function rp(t,e){return t(e)}function ip(){}var xl=!1;function sp(t,e,n){if(xl)return t(e,n);xl=!0;try{return rp(t,e,n)}finally{xl=!1,(_r!==null||Er!==null)&&(ip(),np())}}function Pi(t,e){var n=t.stateNode;if(n===null)return null;var r=Bo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Pa=!1;if(zt)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Pa=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Pa=!1}function Iy(t,e,n,r,i,o,l,u,h){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(I){this.onError(I)}}var mi=!1,no=null,ro=!1,Ra=null,Ty={onError:function(t){mi=!0,no=t}};function ky(t,e,n,r,i,o,l,u,h){mi=!1,no=null,Iy.apply(Ty,arguments)}function Cy(t,e,n,r,i,o,l,u,h){if(ky.apply(this,arguments),mi){if(mi){var f=no;mi=!1,no=null}else throw Error(L(198));ro||(ro=!0,Ra=f)}}function Xn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function op(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zh(t){if(Xn(t)!==t)throw Error(L(188))}function Ay(t){var e=t.alternate;if(!e){if(e=Xn(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zh(i),t;if(o===r)return zh(i),e;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function lp(t){return t=Ay(t),t!==null?ap(t):null}function ap(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ap(t);if(e!==null)return e;t=t.sibling}return null}var up=Ke.unstable_scheduleCallback,bh=Ke.unstable_cancelCallback,Py=Ke.unstable_shouldYield,Ry=Ke.unstable_requestPaint,ce=Ke.unstable_now,Ny=Ke.unstable_getCurrentPriorityLevel,Au=Ke.unstable_ImmediatePriority,cp=Ke.unstable_UserBlockingPriority,io=Ke.unstable_NormalPriority,Oy=Ke.unstable_LowPriority,hp=Ke.unstable_IdlePriority,Fo=null,wt=null;function Dy(t){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Fo,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:My,Ly=Math.log,xy=Math.LN2;function My(t){return t>>>=0,t===0?32:31-(Ly(t)/xy|0)|0}var Es=64,Ss=4194304;function fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function so(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=fi(u):(o&=l,o!==0&&(r=fi(o)))}else l=n&~i,l!==0?r=fi(l):o!==0&&(r=fi(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ht(e),i=1<<n,r|=t[n],e&=~i;return r}function Uy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-ht(o),u=1<<l,h=i[l];h===-1?(!(u&n)||u&r)&&(i[l]=Uy(u,e)):h<=e&&(t.expiredLanes|=u),o&=~u}}function Na(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dp(){var t=Es;return Es<<=1,!(Es&4194240)&&(Es=64),t}function Ml(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ki(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=n}function Fy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ht(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Pu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function fp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pp,Ru,gp,mp,vp,Oa=!1,Is=[],un=null,cn=null,hn=null,Ri=new Map,Ni=new Map,Zt=[],zy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Ri.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(e.pointerId)}}function si(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Qi(e),e!==null&&Ru(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function by(t,e,n,r,i){switch(e){case"focusin":return un=si(un,t,e,n,r,i),!0;case"dragenter":return cn=si(cn,t,e,n,r,i),!0;case"mouseover":return hn=si(hn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ri.set(o,si(Ri.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ni.set(o,si(Ni.get(o)||null,t,e,n,r,i)),!0}return!1}function yp(t){var e=Ln(t.target);if(e!==null){var n=Xn(e);if(n!==null){if(e=n.tag,e===13){if(e=op(n),e!==null){t.blockedOn=e,vp(t.priority,function(){gp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $s(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Da(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ca=r,n.target.dispatchEvent(r),Ca=null}else return e=Qi(n),e!==null&&Ru(e),t.blockedOn=n,!1;e.shift()}return!0}function Bh(t,e,n){$s(t)&&n.delete(e)}function $y(){Oa=!1,un!==null&&$s(un)&&(un=null),cn!==null&&$s(cn)&&(cn=null),hn!==null&&$s(hn)&&(hn=null),Ri.forEach(Bh),Ni.forEach(Bh)}function oi(t,e){t.blockedOn===e&&(t.blockedOn=null,Oa||(Oa=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,$y)))}function Oi(t){function e(i){return oi(i,t)}if(0<Is.length){oi(Is[0],t);for(var n=1;n<Is.length;n++){var r=Is[n];r.blockedOn===t&&(r.blockedOn=null)}}for(un!==null&&oi(un,t),cn!==null&&oi(cn,t),hn!==null&&oi(hn,t),Ri.forEach(e),Ni.forEach(e),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)yp(n),n.blockedOn===null&&Zt.shift()}var Sr=Wt.ReactCurrentBatchConfig,oo=!0;function By(t,e,n,r){var i=Q,o=Sr.transition;Sr.transition=null;try{Q=1,Nu(t,e,n,r)}finally{Q=i,Sr.transition=o}}function Vy(t,e,n,r){var i=Q,o=Sr.transition;Sr.transition=null;try{Q=4,Nu(t,e,n,r)}finally{Q=i,Sr.transition=o}}function Nu(t,e,n,r){if(oo){var i=Da(t,e,n,r);if(i===null)Wl(t,e,r,lo,n),$h(t,r);else if(by(i,t,e,n,r))r.stopPropagation();else if($h(t,r),e&4&&-1<zy.indexOf(t)){for(;i!==null;){var o=Qi(i);if(o!==null&&pp(o),o=Da(t,e,n,r),o===null&&Wl(t,e,r,lo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wl(t,e,r,null,n)}}var lo=null;function Da(t,e,n,r){if(lo=null,t=Cu(r),t=Ln(t),t!==null)if(e=Xn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=op(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lo=t,null}function wp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ny()){case Au:return 1;case cp:return 4;case io:case Oy:return 16;case hp:return 536870912;default:return 16}default:return 16}}var on=null,Ou=null,Bs=null;function _p(){if(Bs)return Bs;var t,e=Ou,n=e.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[o-r];r++);return Bs=i.slice(t,1<r?1-r:void 0)}function Vs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ts(){return!0}function Vh(){return!1}function Qe(t){function e(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ts:Vh,this.isPropagationStopped=Vh,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ts)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ts)},persist:function(){},isPersistent:Ts}),e}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=Qe(zr),qi=oe({},zr,{view:0,detail:0}),Hy=Qe(qi),Ul,jl,li,zo=oe({},qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(Ul=t.screenX-li.screenX,jl=t.screenY-li.screenY):jl=Ul=0,li=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),Hh=Qe(zo),Wy=oe({},zo,{dataTransfer:0}),Gy=Qe(Wy),Ky=oe({},qi,{relatedTarget:0}),Fl=Qe(Ky),qy=oe({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qy=Qe(qy),Xy=oe({},zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yy=Qe(Xy),Jy=oe({},zr,{data:0}),Wh=Qe(Jy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t0[t])?!!e[t]:!1}function Lu(){return n0}var r0=oe({},qi,{key:function(t){if(t.key){var e=Zy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(t){return t.type==="keypress"?Vs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i0=Qe(r0),s0=oe({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=Qe(s0),o0=oe({},qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),l0=Qe(o0),a0=oe({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Qe(a0),c0=oe({},zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Qe(c0),d0=[9,13,27,32],xu=zt&&"CompositionEvent"in window,vi=null;zt&&"documentMode"in document&&(vi=document.documentMode);var f0=zt&&"TextEvent"in window&&!vi,Ep=zt&&(!xu||vi&&8<vi&&11>=vi),Kh=" ",qh=!1;function Sp(t,e){switch(t){case"keyup":return d0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function p0(t,e){switch(t){case"compositionend":return Ip(e);case"keypress":return e.which!==32?null:(qh=!0,Kh);case"textInput":return t=e.data,t===Kh&&qh?null:t;default:return null}}function g0(t,e){if(lr)return t==="compositionend"||!xu&&Sp(t,e)?(t=_p(),Bs=Ou=on=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ep&&e.locale!=="ko"?null:e.data;default:return null}}var m0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!m0[t.type]:e==="textarea"}function Tp(t,e,n,r){tp(r),e=ao(e,"onChange"),0<e.length&&(n=new Du("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yi=null,Di=null;function v0(t){Mp(t,0)}function bo(t){var e=cr(t);if(qf(e))return t}function y0(t,e){if(t==="change")return e}var kp=!1;if(zt){var zl;if(zt){var bl="oninput"in document;if(!bl){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),bl=typeof Xh.oninput=="function"}zl=bl}else zl=!1;kp=zl&&(!document.documentMode||9<document.documentMode)}function Yh(){yi&&(yi.detachEvent("onpropertychange",Cp),Di=yi=null)}function Cp(t){if(t.propertyName==="value"&&bo(Di)){var e=[];Tp(e,Di,t,Cu(t)),sp(v0,e)}}function w0(t,e,n){t==="focusin"?(Yh(),yi=e,Di=n,yi.attachEvent("onpropertychange",Cp)):t==="focusout"&&Yh()}function _0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bo(Di)}function E0(t,e){if(t==="click")return bo(e)}function S0(t,e){if(t==="input"||t==="change")return bo(e)}function I0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:I0;function Li(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pa.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function Jh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Jh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jh(n)}}function Ap(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ap(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pp(){for(var t=window,e=to();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=to(t.document)}return e}function Mu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function T0(t){var e=Pp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ap(n.ownerDocument.documentElement,n)){if(r!==null&&Mu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Zh(n,o);var l=Zh(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k0=zt&&"documentMode"in document&&11>=document.documentMode,ar=null,La=null,wi=null,xa=!1;function ed(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xa||ar==null||ar!==to(r)||(r=ar,"selectionStart"in r&&Mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Li(wi,r)||(wi=r,r=ao(La,"onSelect"),0<r.length&&(e=new Du("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ar)))}function ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ur={animationend:ks("Animation","AnimationEnd"),animationiteration:ks("Animation","AnimationIteration"),animationstart:ks("Animation","AnimationStart"),transitionend:ks("Transition","TransitionEnd")},$l={},Rp={};zt&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function $o(t){if($l[t])return $l[t];if(!ur[t])return t;var e=ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rp)return $l[t]=e[n];return t}var Np=$o("animationend"),Op=$o("animationiteration"),Dp=$o("animationstart"),Lp=$o("transitionend"),xp=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(t,e){xp.set(t,e),Qn(e,[t])}for(var Bl=0;Bl<td.length;Bl++){var Vl=td[Bl],C0=Vl.toLowerCase(),A0=Vl[0].toUpperCase()+Vl.slice(1);En(C0,"on"+A0)}En(Np,"onAnimationEnd");En(Op,"onAnimationIteration");En(Dp,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Lp,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function nd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Cy(r,e,void 0,t),t.currentTarget=null}function Mp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var l=r.length-1;0<=l;l--){var u=r[l],h=u.instance,f=u.currentTarget;if(u=u.listener,h!==o&&i.isPropagationStopped())break e;nd(i,u,f),o=h}else for(l=0;l<r.length;l++){if(u=r[l],h=u.instance,f=u.currentTarget,u=u.listener,h!==o&&i.isPropagationStopped())break e;nd(i,u,f),o=h}}}if(ro)throw t=Ra,ro=!1,Ra=null,t}function ee(t,e){var n=e[za];n===void 0&&(n=e[za]=new Set);var r=t+"__bubble";n.has(r)||(Up(e,t,2,!1),n.add(r))}function Hl(t,e,n){var r=0;e&&(r|=4),Up(n,t,r,e)}var Cs="_reactListening"+Math.random().toString(36).slice(2);function xi(t){if(!t[Cs]){t[Cs]=!0,Vf.forEach(function(n){n!=="selectionchange"&&(P0.has(n)||Hl(n,!1,t),Hl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cs]||(e[Cs]=!0,Hl("selectionchange",!1,e))}}function Up(t,e,n,r){switch(wp(e)){case 1:var i=By;break;case 4:i=Vy;break;default:i=Nu}n=i.bind(null,e,n,t),i=void 0,!Pa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wl(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Ln(u),l===null)return;if(h=l.tag,h===5||h===6){r=o=l;continue e}u=u.parentNode}}r=r.return}sp(function(){var f=o,I=Cu(n),A=[];e:{var k=xp.get(t);if(k!==void 0){var O=Du,R=t;switch(t){case"keypress":if(Vs(n)===0)break e;case"keydown":case"keyup":O=i0;break;case"focusin":R="focus",O=Fl;break;case"focusout":R="blur",O=Fl;break;case"beforeblur":case"afterblur":O=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=l0;break;case Np:case Op:case Dp:O=Qy;break;case Lp:O=u0;break;case"scroll":O=Hy;break;case"wheel":O=h0;break;case"copy":case"cut":case"paste":O=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Gh}var D=(e&4)!==0,b=!D&&t==="scroll",E=D?k!==null?k+"Capture":null:k;D=[];for(var w=f,S;w!==null;){S=w;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,E!==null&&(N=Pi(w,E),N!=null&&D.push(Mi(w,N,S)))),b)break;w=w.return}0<D.length&&(k=new O(k,R,null,n,I),A.push({event:k,listeners:D}))}}if(!(e&7)){e:{if(k=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",k&&n!==Ca&&(R=n.relatedTarget||n.fromElement)&&(Ln(R)||R[bt]))break e;if((O||k)&&(k=I.window===I?I:(k=I.ownerDocument)?k.defaultView||k.parentWindow:window,O?(R=n.relatedTarget||n.toElement,O=f,R=R?Ln(R):null,R!==null&&(b=Xn(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(O=null,R=f),O!==R)){if(D=Hh,N="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=Gh,N="onPointerLeave",E="onPointerEnter",w="pointer"),b=O==null?k:cr(O),S=R==null?k:cr(R),k=new D(N,w+"leave",O,n,I),k.target=b,k.relatedTarget=S,N=null,Ln(I)===f&&(D=new D(E,w+"enter",R,n,I),D.target=S,D.relatedTarget=b,N=D),b=N,O&&R)t:{for(D=O,E=R,w=0,S=D;S;S=ir(S))w++;for(S=0,N=E;N;N=ir(N))S++;for(;0<w-S;)D=ir(D),w--;for(;0<S-w;)E=ir(E),S--;for(;w--;){if(D===E||E!==null&&D===E.alternate)break t;D=ir(D),E=ir(E)}D=null}else D=null;O!==null&&rd(A,k,O,D,!1),R!==null&&b!==null&&rd(A,b,R,D,!0)}}e:{if(k=f?cr(f):window,O=k.nodeName&&k.nodeName.toLowerCase(),O==="select"||O==="input"&&k.type==="file")var U=y0;else if(Qh(k))if(kp)U=S0;else{U=_0;var j=w0}else(O=k.nodeName)&&O.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(U=E0);if(U&&(U=U(t,f))){Tp(A,U,n,I);break e}j&&j(t,k,f),t==="focusout"&&(j=k._wrapperState)&&j.controlled&&k.type==="number"&&Ea(k,"number",k.value)}switch(j=f?cr(f):window,t){case"focusin":(Qh(j)||j.contentEditable==="true")&&(ar=j,La=f,wi=null);break;case"focusout":wi=La=ar=null;break;case"mousedown":xa=!0;break;case"contextmenu":case"mouseup":case"dragend":xa=!1,ed(A,n,I);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":ed(A,n,I)}var m;if(xu)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else lr?Sp(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Ep&&n.locale!=="ko"&&(lr||p!=="onCompositionStart"?p==="onCompositionEnd"&&lr&&(m=_p()):(on=I,Ou="value"in on?on.value:on.textContent,lr=!0)),j=ao(f,p),0<j.length&&(p=new Wh(p,t,null,n,I),A.push({event:p,listeners:j}),m?p.data=m:(m=Ip(n),m!==null&&(p.data=m)))),(m=f0?p0(t,n):g0(t,n))&&(f=ao(f,"onBeforeInput"),0<f.length&&(I=new Wh("onBeforeInput","beforeinput",null,n,I),A.push({event:I,listeners:f}),I.data=m))}Mp(A,e)})}function Mi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ao(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Pi(t,n),o!=null&&r.unshift(Mi(t,o,i)),o=Pi(t,e),o!=null&&r.push(Mi(t,o,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rd(t,e,n,r,i){for(var o=e._reactName,l=[];n!==null&&n!==r;){var u=n,h=u.alternate,f=u.stateNode;if(h!==null&&h===r)break;u.tag===5&&f!==null&&(u=f,i?(h=Pi(n,o),h!=null&&l.unshift(Mi(n,h,u))):i||(h=Pi(n,o),h!=null&&l.push(Mi(n,h,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var R0=/\r\n?/g,N0=/\u0000|\uFFFD/g;function id(t){return(typeof t=="string"?t:""+t).replace(R0,`
`).replace(N0,"")}function As(t,e,n){if(e=id(e),id(t)!==e&&n)throw Error(L(425))}function uo(){}var Ma=null,Ua=null;function ja(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,O0=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,D0=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(t){return sd.resolve(null).then(t).catch(L0)}:Fa;function L0(t){setTimeout(function(){throw t})}function Gl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function od(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var br=Math.random().toString(36).slice(2),yt="__reactFiber$"+br,Ui="__reactProps$"+br,bt="__reactContainer$"+br,za="__reactEvents$"+br,x0="__reactListeners$"+br,M0="__reactHandles$"+br;function Ln(t){var e=t[yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=od(t);t!==null;){if(n=t[yt])return n;t=od(t)}return e}t=n,n=t.parentNode}return null}function Qi(t){return t=t[yt]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function Bo(t){return t[Ui]||null}var ba=[],hr=-1;function Sn(t){return{current:t}}function te(t){0>hr||(t.current=ba[hr],ba[hr]=null,hr--)}function J(t,e){hr++,ba[hr]=t.current,t.current=e}var _n={},Re=Sn(_n),ze=Sn(!1),bn=_n;function Nr(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function be(t){return t=t.childContextTypes,t!=null}function co(){te(ze),te(Re)}function ld(t,e,n){if(Re.current!==_n)throw Error(L(168));J(Re,e),J(ze,n)}function jp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,wy(t)||"Unknown",i));return oe({},n,r)}function ho(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,bn=Re.current,J(Re,t),J(ze,ze.current),!0}function ad(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=jp(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,te(ze),te(Re),J(Re,t)):te(ze),J(ze,n)}var Dt=null,Vo=!1,Kl=!1;function Fp(t){Dt===null?Dt=[t]:Dt.push(t)}function U0(t){Vo=!0,Fp(t)}function In(){if(!Kl&&Dt!==null){Kl=!0;var t=0,e=Q;try{var n=Dt;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dt=null,Vo=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(t+1)),up(Au,In),i}finally{Q=e,Kl=!1}}return null}var dr=[],fr=0,fo=null,po=0,Je=[],Ze=0,$n=null,Lt=1,xt="";function Rn(t,e){dr[fr++]=po,dr[fr++]=fo,fo=t,po=e}function zp(t,e,n){Je[Ze++]=Lt,Je[Ze++]=xt,Je[Ze++]=$n,$n=t;var r=Lt;t=xt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var o=32-ht(e)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Lt=1<<32-ht(e)+i|n<<i|r,xt=o+t}else Lt=1<<o|n<<i|r,xt=t}function Uu(t){t.return!==null&&(Rn(t,1),zp(t,1,0))}function ju(t){for(;t===fo;)fo=dr[--fr],dr[fr]=null,po=dr[--fr],dr[fr]=null;for(;t===$n;)$n=Je[--Ze],Je[Ze]=null,xt=Je[--Ze],Je[Ze]=null,Lt=Je[--Ze],Je[Ze]=null}var We=null,Ve=null,ne=!1,ct=null;function bp(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ud(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,Ve=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$n!==null?{id:Lt,overflow:xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,Ve=null,!0):!1;default:return!1}}function $a(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ba(t){if(ne){var e=Ve;if(e){var n=e;if(!ud(t,e)){if($a(t))throw Error(L(418));e=dn(n.nextSibling);var r=We;e&&ud(t,e)?bp(r,n):(t.flags=t.flags&-4097|2,ne=!1,We=t)}}else{if($a(t))throw Error(L(418));t.flags=t.flags&-4097|2,ne=!1,We=t}}}function cd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function Ps(t){if(t!==We)return!1;if(!ne)return cd(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ja(t.type,t.memoizedProps)),e&&(e=Ve)){if($a(t))throw $p(),Error(L(418));for(;e;)bp(t,e),e=dn(e.nextSibling)}if(cd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=We?dn(t.stateNode.nextSibling):null;return!0}function $p(){for(var t=Ve;t;)t=dn(t.nextSibling)}function Or(){Ve=We=null,ne=!1}function Fu(t){ct===null?ct=[t]:ct.push(t)}var j0=Wt.ReactCurrentBatchConfig;function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Rs(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hd(t){var e=t._init;return e(t._payload)}function Bp(t){function e(E,w){if(t){var S=E.deletions;S===null?(E.deletions=[w],E.flags|=16):S.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=mn(E,w),E.index=0,E.sibling=null,E}function o(E,w,S){return E.index=S,t?(S=E.alternate,S!==null?(S=S.index,S<w?(E.flags|=2,w):S):(E.flags|=2,w)):(E.flags|=1048576,w)}function l(E){return t&&E.alternate===null&&(E.flags|=2),E}function u(E,w,S,N){return w===null||w.tag!==6?(w=ea(S,E.mode,N),w.return=E,w):(w=i(w,S),w.return=E,w)}function h(E,w,S,N){var U=S.type;return U===or?I(E,w,S.props.children,N,S.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Yt&&hd(U)===w.type)?(N=i(w,S.props),N.ref=ai(E,w,S),N.return=E,N):(N=Xs(S.type,S.key,S.props,null,E.mode,N),N.ref=ai(E,w,S),N.return=E,N)}function f(E,w,S,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=ta(S,E.mode,N),w.return=E,w):(w=i(w,S.children||[]),w.return=E,w)}function I(E,w,S,N,U){return w===null||w.tag!==7?(w=Fn(S,E.mode,N,U),w.return=E,w):(w=i(w,S),w.return=E,w)}function A(E,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=ea(""+w,E.mode,S),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ys:return S=Xs(w.type,w.key,w.props,null,E.mode,S),S.ref=ai(E,null,w),S.return=E,S;case sr:return w=ta(w,E.mode,S),w.return=E,w;case Yt:var N=w._init;return A(E,N(w._payload),S)}if(di(w)||ri(w))return w=Fn(w,E.mode,S,null),w.return=E,w;Rs(E,w)}return null}function k(E,w,S,N){var U=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:u(E,w,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ys:return S.key===U?h(E,w,S,N):null;case sr:return S.key===U?f(E,w,S,N):null;case Yt:return U=S._init,k(E,w,U(S._payload),N)}if(di(S)||ri(S))return U!==null?null:I(E,w,S,N,null);Rs(E,S)}return null}function O(E,w,S,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(S)||null,u(w,E,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ys:return E=E.get(N.key===null?S:N.key)||null,h(w,E,N,U);case sr:return E=E.get(N.key===null?S:N.key)||null,f(w,E,N,U);case Yt:var j=N._init;return O(E,w,S,j(N._payload),U)}if(di(N)||ri(N))return E=E.get(S)||null,I(w,E,N,U,null);Rs(w,N)}return null}function R(E,w,S,N){for(var U=null,j=null,m=w,p=w=0,g=null;m!==null&&p<S.length;p++){m.index>p?(g=m,m=null):g=m.sibling;var y=k(E,m,S[p],N);if(y===null){m===null&&(m=g);break}t&&m&&y.alternate===null&&e(E,m),w=o(y,w,p),j===null?U=y:j.sibling=y,j=y,m=g}if(p===S.length)return n(E,m),ne&&Rn(E,p),U;if(m===null){for(;p<S.length;p++)m=A(E,S[p],N),m!==null&&(w=o(m,w,p),j===null?U=m:j.sibling=m,j=m);return ne&&Rn(E,p),U}for(m=r(E,m);p<S.length;p++)g=O(m,E,p,S[p],N),g!==null&&(t&&g.alternate!==null&&m.delete(g.key===null?p:g.key),w=o(g,w,p),j===null?U=g:j.sibling=g,j=g);return t&&m.forEach(function(_){return e(E,_)}),ne&&Rn(E,p),U}function D(E,w,S,N){var U=ri(S);if(typeof U!="function")throw Error(L(150));if(S=U.call(S),S==null)throw Error(L(151));for(var j=U=null,m=w,p=w=0,g=null,y=S.next();m!==null&&!y.done;p++,y=S.next()){m.index>p?(g=m,m=null):g=m.sibling;var _=k(E,m,y.value,N);if(_===null){m===null&&(m=g);break}t&&m&&_.alternate===null&&e(E,m),w=o(_,w,p),j===null?U=_:j.sibling=_,j=_,m=g}if(y.done)return n(E,m),ne&&Rn(E,p),U;if(m===null){for(;!y.done;p++,y=S.next())y=A(E,y.value,N),y!==null&&(w=o(y,w,p),j===null?U=y:j.sibling=y,j=y);return ne&&Rn(E,p),U}for(m=r(E,m);!y.done;p++,y=S.next())y=O(m,E,p,y.value,N),y!==null&&(t&&y.alternate!==null&&m.delete(y.key===null?p:y.key),w=o(y,w,p),j===null?U=y:j.sibling=y,j=y);return t&&m.forEach(function(C){return e(E,C)}),ne&&Rn(E,p),U}function b(E,w,S,N){if(typeof S=="object"&&S!==null&&S.type===or&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ys:e:{for(var U=S.key,j=w;j!==null;){if(j.key===U){if(U=S.type,U===or){if(j.tag===7){n(E,j.sibling),w=i(j,S.props.children),w.return=E,E=w;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Yt&&hd(U)===j.type){n(E,j.sibling),w=i(j,S.props),w.ref=ai(E,j,S),w.return=E,E=w;break e}n(E,j);break}else e(E,j);j=j.sibling}S.type===or?(w=Fn(S.props.children,E.mode,N,S.key),w.return=E,E=w):(N=Xs(S.type,S.key,S.props,null,E.mode,N),N.ref=ai(E,w,S),N.return=E,E=N)}return l(E);case sr:e:{for(j=S.key;w!==null;){if(w.key===j)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(E,w.sibling),w=i(w,S.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=ta(S,E.mode,N),w.return=E,E=w}return l(E);case Yt:return j=S._init,b(E,w,j(S._payload),N)}if(di(S))return R(E,w,S,N);if(ri(S))return D(E,w,S,N);Rs(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,S),w.return=E,E=w):(n(E,w),w=ea(S,E.mode,N),w.return=E,E=w),l(E)):n(E,w)}return b}var Dr=Bp(!0),Vp=Bp(!1),go=Sn(null),mo=null,pr=null,zu=null;function bu(){zu=pr=mo=null}function $u(t){var e=go.current;te(go),t._currentValue=e}function Va(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ir(t,e){mo=t,zu=pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Fe=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(zu!==t)if(t={context:t,memoizedValue:e,next:null},pr===null){if(mo===null)throw Error(L(308));pr=t,mo.dependencies={lanes:0,firstContext:t}}else pr=pr.next=t;return e}var xn=null;function Bu(t){xn===null?xn=[t]:xn.push(t)}function Hp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bu(e)):(n.next=i.next,i.next=n),e.interleaved=n,$t(t,r)}function $t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$t(t,n)}return i=r.interleaved,i===null?(e.next=e,Bu(r)):(e.next=i.next,i.next=e),r.interleaved=e,$t(t,n)}function Hs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pu(t,n)}}function dd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vo(t,e,n,r){var i=t.updateQueue;Jt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,f=h.next;h.next=null,l===null?o=f:l.next=f,l=h;var I=t.alternate;I!==null&&(I=I.updateQueue,u=I.lastBaseUpdate,u!==l&&(u===null?I.firstBaseUpdate=f:u.next=f,I.lastBaseUpdate=h))}if(o!==null){var A=i.baseState;l=0,I=f=h=null,u=o;do{var k=u.lane,O=u.eventTime;if((r&k)===k){I!==null&&(I=I.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=t,D=u;switch(k=e,O=n,D.tag){case 1:if(R=D.payload,typeof R=="function"){A=R.call(O,A,k);break e}A=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=D.payload,k=typeof R=="function"?R.call(O,A,k):R,k==null)break e;A=oe({},A,k);break e;case 2:Jt=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,k=i.effects,k===null?i.effects=[u]:k.push(u))}else O={eventTime:O,lane:k,tag:u.tag,payload:u.payload,callback:u.callback,next:null},I===null?(f=I=O,h=A):I=I.next=O,l|=k;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;k=u,u=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(I===null&&(h=A),i.baseState=h,i.firstBaseUpdate=f,i.lastBaseUpdate=I,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Vn|=l,t.lanes=l,t.memoizedState=A}}function fd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Xi={},_t=Sn(Xi),ji=Sn(Xi),Fi=Sn(Xi);function Mn(t){if(t===Xi)throw Error(L(174));return t}function Hu(t,e){switch(J(Fi,e),J(ji,t),J(_t,Xi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ia(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ia(e,t)}te(_t),J(_t,e)}function Lr(){te(_t),te(ji),te(Fi)}function Gp(t){Mn(Fi.current);var e=Mn(_t.current),n=Ia(e,t.type);e!==n&&(J(ji,t),J(_t,n))}function Wu(t){ji.current===t&&(te(_t),te(ji))}var ie=Sn(0);function yo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function Gu(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Ws=Wt.ReactCurrentDispatcher,Ql=Wt.ReactCurrentBatchConfig,Bn=0,se=null,de=null,pe=null,wo=!1,_i=!1,zi=0,F0=0;function Ie(){throw Error(L(321))}function Ku(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function qu(t,e,n,r,i,o){if(Bn=o,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ws.current=t===null||t.memoizedState===null?B0:V0,t=n(r,i),_i){o=0;do{if(_i=!1,zi=0,25<=o)throw Error(L(301));o+=1,pe=de=null,e.updateQueue=null,Ws.current=H0,t=n(r,i)}while(_i)}if(Ws.current=_o,e=de!==null&&de.next!==null,Bn=0,pe=de=se=null,wo=!1,e)throw Error(L(300));return t}function Qu(){var t=zi!==0;return zi=0,t}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?se.memoizedState=pe=t:pe=pe.next=t,pe}function st(){if(de===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=pe===null?se.memoizedState:pe.next;if(e!==null)pe=e,de=t;else{if(t===null)throw Error(L(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?se.memoizedState=pe=t:pe=pe.next=t}return pe}function bi(t,e){return typeof e=="function"?e(t):e}function Xl(t){var e=st(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,h=null,f=o;do{var I=f.lane;if((Bn&I)===I)h!==null&&(h=h.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var A={lane:I,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};h===null?(u=h=A,l=r):h=h.next=A,se.lanes|=I,Vn|=I}f=f.next}while(f!==null&&f!==o);h===null?l=r:h.next=u,ft(r,e.memoizedState)||(Fe=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=h,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,se.lanes|=o,Vn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yl(t){var e=st(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);ft(o,e.memoizedState)||(Fe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Kp(){}function qp(t,e){var n=se,r=st(),i=e(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,Xu(Yp.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,$i(9,Xp.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(L(349));Bn&30||Qp(n,e,i)}return i}function Qp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Xp(t,e,n,r){e.value=n,e.getSnapshot=r,Jp(e)&&Zp(t)}function Yp(t,e,n){return n(function(){Jp(e)&&Zp(t)})}function Jp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Zp(t){var e=$t(t,1);e!==null&&dt(e,t,1,-1)}function pd(t){var e=vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:t},e.queue=t,t=t.dispatch=$0.bind(null,se,t),[e.memoizedState,t]}function $i(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eg(){return st().memoizedState}function Gs(t,e,n,r){var i=vt();se.flags|=t,i.memoizedState=$i(1|e,n,void 0,r===void 0?null:r)}function Ho(t,e,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(de!==null){var l=de.memoizedState;if(o=l.destroy,r!==null&&Ku(r,l.deps)){i.memoizedState=$i(e,n,o,r);return}}se.flags|=t,i.memoizedState=$i(1|e,n,o,r)}function gd(t,e){return Gs(8390656,8,t,e)}function Xu(t,e){return Ho(2048,8,t,e)}function tg(t,e){return Ho(4,2,t,e)}function ng(t,e){return Ho(4,4,t,e)}function rg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ig(t,e,n){return n=n!=null?n.concat([t]):null,Ho(4,4,rg.bind(null,e,t),n)}function Yu(){}function sg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ku(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function og(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ku(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lg(t,e,n){return Bn&21?(ft(n,e)||(n=dp(),se.lanes|=n,Vn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Fe=!0),t.memoizedState=n)}function z0(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=Ql.transition;Ql.transition={};try{t(!1),e()}finally{Q=n,Ql.transition=r}}function ag(){return st().memoizedState}function b0(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(t))cg(e,n);else if(n=Hp(t,e,n,r),n!==null){var i=xe();dt(n,t,r,i),hg(n,e,r)}}function $0(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(t))cg(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,ft(u,l)){var h=e.interleaved;h===null?(i.next=i,Bu(e)):(i.next=h.next,h.next=i),e.interleaved=i;return}}catch{}finally{}n=Hp(t,e,i,r),n!==null&&(i=xe(),dt(n,t,r,i),hg(n,e,r))}}function ug(t){var e=t.alternate;return t===se||e!==null&&e===se}function cg(t,e){_i=wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pu(t,n)}}var _o={readContext:it,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},B0={readContext:it,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:gd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gs(4194308,4,rg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gs(4,2,t,e)},useMemo:function(t,e){var n=vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=b0.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:pd,useDebugValue:Yu,useDeferredValue:function(t){return vt().memoizedState=t},useTransition:function(){var t=pd(!1),e=t[0];return t=z0.bind(null,t[1]),vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=vt();if(ne){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),ge===null)throw Error(L(349));Bn&30||Qp(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,gd(Yp.bind(null,r,o,t),[t]),r.flags|=2048,$i(9,Xp.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=vt(),e=ge.identifierPrefix;if(ne){var n=xt,r=Lt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=F0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V0={readContext:it,useCallback:sg,useContext:it,useEffect:Xu,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:Xl,useRef:eg,useState:function(){return Xl(bi)},useDebugValue:Yu,useDeferredValue:function(t){var e=st();return lg(e,de.memoizedState,t)},useTransition:function(){var t=Xl(bi)[0],e=st().memoizedState;return[t,e]},useMutableSource:Kp,useSyncExternalStore:qp,useId:ag,unstable_isNewReconciler:!1},H0={readContext:it,useCallback:sg,useContext:it,useEffect:Xu,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:og,useReducer:Yl,useRef:eg,useState:function(){return Yl(bi)},useDebugValue:Yu,useDeferredValue:function(t){var e=st();return de===null?e.memoizedState=t:lg(e,de.memoizedState,t)},useTransition:function(){var t=Yl(bi)[0],e=st().memoizedState;return[t,e]},useMutableSource:Kp,useSyncExternalStore:qp,useId:ag,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ha(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wo={isMounted:function(t){return(t=t._reactInternals)?Xn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=gn(t),o=Ft(r,i);o.payload=e,n!=null&&(o.callback=n),e=fn(t,o,i),e!==null&&(dt(e,t,i,r),Hs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=gn(t),o=Ft(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=fn(t,o,i),e!==null&&(dt(e,t,i,r),Hs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=gn(t),i=Ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=fn(t,i,r),e!==null&&(dt(e,t,r,n),Hs(e,t,r))}};function md(t,e,n,r,i,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,l):e.prototype&&e.prototype.isPureReactComponent?!Li(n,r)||!Li(i,o):!0}function dg(t,e,n){var r=!1,i=_n,o=e.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=be(e)?bn:Re.current,r=e.contextTypes,o=(r=r!=null)?Nr(t,i):_n),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function vd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wo.enqueueReplaceState(e,e.state,null)}function Wa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=be(e)?bn:Re.current,i.context=Nr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Ha(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wo.enqueueReplaceState(i,i.state,null),vo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e){try{var n="",r=e;do n+=yy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ga(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var W0=typeof WeakMap=="function"?WeakMap:Map;function fg(t,e,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){So||(So=!0,nu=r),Ga(t,e)},n}function pg(t,e,n){n=Ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ga(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ga(t,e),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function yd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new W0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=sw.bind(null,t,e,n),e.then(t,t))}function wd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _d(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ft(-1,1),e.tag=2,fn(n,e,1))),n.lanes|=1),t)}var G0=Wt.ReactCurrentOwner,Fe=!1;function Le(t,e,n,r){e.child=t===null?Vp(e,null,n,r):Dr(e,t.child,n,r)}function Ed(t,e,n,r,i){n=n.render;var o=e.ref;return Ir(e,i),r=qu(t,e,n,r,o,i),n=Qu(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(ne&&n&&Uu(e),e.flags|=1,Le(t,e,r,i),e.child)}function Sd(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!sc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,gg(t,e,o,r,i)):(t=Xs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Li,n(l,r)&&t.ref===e.ref)return Bt(t,e,i)}return e.flags|=1,t=mn(o,r),t.ref=e.ref,t.return=e,e.child=t}function gg(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Li(o,r)&&t.ref===e.ref)if(Fe=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Fe=!0);else return e.lanes=t.lanes,Bt(t,e,i)}return Ka(t,e,n,r,i)}function mg(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(mr,Be),Be|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(mr,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(mr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,J(mr,Be),Be|=r;return Le(t,e,i,n),e.child}function vg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ka(t,e,n,r,i){var o=be(n)?bn:Re.current;return o=Nr(e,o),Ir(e,i),n=qu(t,e,n,r,o,i),r=Qu(),t!==null&&!Fe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bt(t,e,i)):(ne&&r&&Uu(e),e.flags|=1,Le(t,e,n,i),e.child)}function Id(t,e,n,r,i){if(be(n)){var o=!0;ho(e)}else o=!1;if(Ir(e,i),e.stateNode===null)Ks(t,e),dg(e,n,r),Wa(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var h=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=it(f):(f=be(n)?bn:Re.current,f=Nr(e,f));var I=n.getDerivedStateFromProps,A=typeof I=="function"||typeof l.getSnapshotBeforeUpdate=="function";A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||h!==f)&&vd(e,l,r,f),Jt=!1;var k=e.memoizedState;l.state=k,vo(e,r,l,i),h=e.memoizedState,u!==r||k!==h||ze.current||Jt?(typeof I=="function"&&(Ha(e,n,I,r),h=e.memoizedState),(u=Jt||md(e,n,u,r,k,h,f))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=h),l.props=r,l.state=h,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,Wp(t,e),u=e.memoizedProps,f=e.type===e.elementType?u:at(e.type,u),l.props=f,A=e.pendingProps,k=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=it(h):(h=be(n)?bn:Re.current,h=Nr(e,h));var O=n.getDerivedStateFromProps;(I=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==A||k!==h)&&vd(e,l,r,h),Jt=!1,k=e.memoizedState,l.state=k,vo(e,r,l,i);var R=e.memoizedState;u!==A||k!==R||ze.current||Jt?(typeof O=="function"&&(Ha(e,n,O,r),R=e.memoizedState),(f=Jt||md(e,n,f,r,k,R,h)||!1)?(I||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,R,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,R,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),l.props=r,l.state=R,l.context=h,r=f):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&k===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&k===t.memoizedState||(e.flags|=1024),r=!1)}return qa(t,e,n,r,o,i)}function qa(t,e,n,r,i,o){vg(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&ad(e,n,!1),Bt(t,e,o);r=e.stateNode,G0.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=Dr(e,t.child,null,o),e.child=Dr(e,null,u,o)):Le(t,e,u,o),e.memoizedState=r.state,i&&ad(e,n,!0),e.child}function yg(t){var e=t.stateNode;e.pendingContext?ld(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ld(t,e.context,!1),Hu(t,e.containerInfo)}function Td(t,e,n,r,i){return Or(),Fu(i),e.flags|=256,Le(t,e,n,r),e.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Xa(t){return{baseLanes:t,cachePool:null,transitions:null}}function wg(t,e,n){var r=e.pendingProps,i=ie.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return Ba(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,o?(r=e.mode,o=e.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=qo(l,r,0,null),t=Fn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Xa(n),e.memoizedState=Qa,t):Ju(e,l));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return K0(t,e,l,r,u,i,n);if(o){o=r.fallback,l=e.mode,i=t.child,u=i.sibling;var h={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=h,e.deletions=null):(r=mn(i,h),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=mn(u,o):(o=Fn(o,l,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,l=t.child.memoizedState,l=l===null?Xa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=Qa,r}return o=t.child,t=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ju(t,e){return e=qo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ns(t,e,n,r){return r!==null&&Fu(r),Dr(e,t.child,null,n),t=Ju(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function K0(t,e,n,r,i,o,l){if(n)return e.flags&256?(e.flags&=-257,r=Jl(Error(L(422))),Ns(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=qo({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,l,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Dr(e,t.child,null,l),e.child.memoizedState=Xa(l),e.memoizedState=Qa,o);if(!(e.mode&1))return Ns(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(L(419)),r=Jl(o,r,void 0),Ns(t,e,l,r)}if(u=(l&t.childLanes)!==0,Fe||u){if(r=ge,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,$t(t,i),dt(r,t,i,-1))}return ic(),r=Jl(Error(L(421))),Ns(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ow.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ve=dn(i.nextSibling),We=e,ne=!0,ct=null,t!==null&&(Je[Ze++]=Lt,Je[Ze++]=xt,Je[Ze++]=$n,Lt=t.id,xt=t.overflow,$n=e),e=Ju(e,r.children),e.flags|=4096,e)}function kd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Va(t.return,e,n)}function Zl(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function _g(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Le(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kd(t,n,e);else if(t.tag===19)kd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&yo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Zl(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&yo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Zl(e,!0,n,null,o);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ks(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function q0(t,e,n){switch(e.tag){case 3:yg(e),Or();break;case 5:Gp(e);break;case 1:be(e.type)&&ho(e);break;case 4:Hu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(go,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?wg(t,e,n):(J(ie,ie.current&1),t=Bt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _g(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,mg(t,e,n)}return Bt(t,e,n)}var Eg,Ya,Sg,Ig;Eg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};Sg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(_t.current);var o=null;switch(n){case"input":i=wa(t,i),r=wa(t,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Sa(t,i),r=Sa(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=uo)}Ta(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Ci.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var h=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&h!==u&&(h!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(o||(o=[]),o.push(f,n)),n=h;else f==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(f,h)):f==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(f,""+h):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Ci.hasOwnProperty(f)?(h!=null&&f==="onScroll"&&ee("scroll",t),o||u===h||(o=[])):(o=o||[]).push(f,h))}n&&(o=o||[]).push("style",n);var f=o;(e.updateQueue=f)&&(e.flags|=4)}};Ig=function(t,e,n,r){n!==r&&(e.flags|=4)};function ui(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Q0(t,e,n){var r=e.pendingProps;switch(ju(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return be(e.type)&&co(),Te(e),null;case 3:return r=e.stateNode,Lr(),te(ze),te(Re),Gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ps(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(su(ct),ct=null))),Ya(t,e),Te(e),null;case 5:Wu(e);var i=Mn(Fi.current);if(n=e.type,t!==null&&e.stateNode!=null)Sg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Te(e),null}if(t=Mn(_t.current),Ps(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[yt]=e,r[Ui]=o,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<pi.length;i++)ee(pi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":xh(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":Uh(r,o),ee("invalid",r)}Ta(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&As(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&As(r.textContent,u,t),i=["children",""+u]):Ci.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":ws(r),Mh(r,o,!0);break;case"textarea":ws(r),jh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=uo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Yf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[yt]=e,t[Ui]=r,Eg(t,e,!1,!1),e.stateNode=t;e:{switch(l=ka(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<pi.length;i++)ee(pi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":xh(t,r),i=wa(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Uh(t,r),i=Sa(t,r),ee("invalid",t);break;default:i=r}Ta(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?ep(t,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Jf(t,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Ai(t,h):typeof h=="number"&&Ai(t,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ci.hasOwnProperty(o)?h!=null&&o==="onScroll"&&ee("scroll",t):h!=null&&Su(t,o,h,l))}switch(n){case"input":ws(t),Mh(t,r,!1);break;case"textarea":ws(t),jh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?wr(t,!!r.multiple,o,!1):r.defaultValue!=null&&wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)Ig(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Mn(Fi.current),Mn(_t.current),Ps(e)){if(r=e.stateNode,n=e.memoizedProps,r[yt]=e,(o=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:As(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&As(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=e,e.stateNode=r}return Te(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Ve!==null&&e.mode&1&&!(e.flags&128))$p(),Or(),e.flags|=98560,o=!1;else if(o=Ps(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(L(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[yt]=e}else Or(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),o=!1}else ct!==null&&(su(ct),ct=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?fe===0&&(fe=3):ic())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return Lr(),Ya(t,e),t===null&&xi(e.stateNode.containerInfo),Te(e),null;case 10:return $u(e.type._context),Te(e),null;case 17:return be(e.type)&&co(),Te(e),null;case 19:if(te(ie),o=e.memoizedState,o===null)return Te(e),null;if(r=(e.flags&128)!==0,l=o.rendering,l===null)if(r)ui(o,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=yo(t),l!==null){for(e.flags|=128,ui(o,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}o.tail!==null&&ce()>Mr&&(e.flags|=128,r=!0,ui(o,!1),e.lanes=4194304)}else{if(!r)if(t=yo(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ui(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ne)return Te(e),null}else 2*ce()-o.renderingStartTime>Mr&&n!==1073741824&&(e.flags|=128,r=!0,ui(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ce(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return rc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Be&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function X0(t,e){switch(ju(e),e.tag){case 1:return be(e.type)&&co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Lr(),te(ze),te(Re),Gu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wu(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Or()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Lr(),null;case 10:return $u(e.type._context),null;case 22:case 23:return rc(),null;case 24:return null;default:return null}}var Os=!1,Ce=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,z=null;function gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function Ja(t,e,n){try{n()}catch(r){le(t,e,r)}}var Cd=!1;function J0(t,e){if(Ma=oo,t=Pp(),Mu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,h=-1,f=0,I=0,A=t,k=null;t:for(;;){for(var O;A!==n||i!==0&&A.nodeType!==3||(u=l+i),A!==o||r!==0&&A.nodeType!==3||(h=l+r),A.nodeType===3&&(l+=A.nodeValue.length),(O=A.firstChild)!==null;)k=A,A=O;for(;;){if(A===t)break t;if(k===n&&++f===i&&(u=l),k===o&&++I===r&&(h=l),(O=A.nextSibling)!==null)break;A=k,k=A.parentNode}A=O}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ua={focusedElem:t,selectionRange:n},oo=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var D=R.memoizedProps,b=R.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?D:at(e.type,D),b);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(N){le(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return R=Cd,Cd=!1,R}function Ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ja(e,n,o)}i=i.next}while(i!==r)}}function Go(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Za(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tg(t){var e=t.alternate;e!==null&&(t.alternate=null,Tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yt],delete e[Ui],delete e[za],delete e[x0],delete e[M0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kg(t){return t.tag===5||t.tag===3||t.tag===4}function Ad(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=uo));else if(r!==4&&(t=t.child,t!==null))for(eu(t,e,n),t=t.sibling;t!==null;)eu(t,e,n),t=t.sibling}function tu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tu(t,e,n),t=t.sibling;t!==null;)tu(t,e,n),t=t.sibling}var ve=null,ut=!1;function Qt(t,e,n){for(n=n.child;n!==null;)Cg(t,e,n),n=n.sibling}function Cg(t,e,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:Ce||gr(n,e);case 6:var r=ve,i=ut;ve=null,Qt(t,e,n),ve=r,ut=i,ve!==null&&(ut?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ut?(t=ve,n=n.stateNode,t.nodeType===8?Gl(t.parentNode,n):t.nodeType===1&&Gl(t,n),Oi(t)):Gl(ve,n.stateNode));break;case 4:r=ve,i=ut,ve=n.stateNode.containerInfo,ut=!0,Qt(t,e,n),ve=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ja(n,e,l),i=i.next}while(i!==r)}Qt(t,e,n);break;case 1:if(!Ce&&(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){le(n,e,u)}Qt(t,e,n);break;case 21:Qt(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Qt(t,e,n),Ce=r):Qt(t,e,n);break;default:Qt(t,e,n)}}function Pd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Y0),e.forEach(function(r){var i=lw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,ut=!1;break e;case 3:ve=u.stateNode.containerInfo,ut=!0;break e;case 4:ve=u.stateNode.containerInfo,ut=!0;break e}u=u.return}if(ve===null)throw Error(L(160));Cg(o,l,i),ve=null,ut=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(f){le(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ag(e,t),e=e.sibling}function Ag(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),mt(t),r&4){try{Ei(3,t,t.return),Go(3,t)}catch(D){le(t,t.return,D)}try{Ei(5,t,t.return)}catch(D){le(t,t.return,D)}}break;case 1:lt(e,t),mt(t),r&512&&n!==null&&gr(n,n.return);break;case 5:if(lt(e,t),mt(t),r&512&&n!==null&&gr(n,n.return),t.flags&32){var i=t.stateNode;try{Ai(i,"")}catch(D){le(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,h=t.updateQueue;if(t.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Qf(i,o),ka(u,l);var f=ka(u,o);for(l=0;l<h.length;l+=2){var I=h[l],A=h[l+1];I==="style"?ep(i,A):I==="dangerouslySetInnerHTML"?Jf(i,A):I==="children"?Ai(i,A):Su(i,I,A,f)}switch(u){case"input":_a(i,o);break;case"textarea":Xf(i,o);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?wr(i,!!o.multiple,O,!1):k!==!!o.multiple&&(o.defaultValue!=null?wr(i,!!o.multiple,o.defaultValue,!0):wr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ui]=o}catch(D){le(t,t.return,D)}}break;case 6:if(lt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(D){le(t,t.return,D)}}break;case 3:if(lt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oi(e.containerInfo)}catch(D){le(t,t.return,D)}break;case 4:lt(e,t),mt(t);break;case 13:lt(e,t),mt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tc=ce())),r&4&&Pd(t);break;case 22:if(I=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(f=Ce)||I,lt(e,t),Ce=f):lt(e,t),mt(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!I&&t.mode&1)for(z=t,I=t.child;I!==null;){for(A=z=I;z!==null;){switch(k=z,O=k.child,k.tag){case 0:case 11:case 14:case 15:Ei(4,k,k.return);break;case 1:gr(k,k.return);var R=k.stateNode;if(typeof R.componentWillUnmount=="function"){r=k,n=k.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(D){le(r,n,D)}}break;case 5:gr(k,k.return);break;case 22:if(k.memoizedState!==null){Nd(A);continue}}O!==null?(O.return=k,z=O):Nd(A)}I=I.sibling}e:for(I=null,A=t;;){if(A.tag===5){if(I===null){I=A;try{i=A.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=A.stateNode,h=A.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=Zf("display",l))}catch(D){le(t,t.return,D)}}}else if(A.tag===6){if(I===null)try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(D){le(t,t.return,D)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;I===A&&(I=null),A=A.return}I===A&&(I=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:lt(e,t),mt(t),r&4&&Pd(t);break;case 21:break;default:lt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kg(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ai(i,""),r.flags&=-33);var o=Ad(t);tu(t,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Ad(t);eu(t,u,l);break;default:throw Error(L(161))}}catch(h){le(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z0(t,e,n){z=t,Pg(t)}function Pg(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Os;if(!l){var u=i.alternate,h=u!==null&&u.memoizedState!==null||Ce;u=Os;var f=Ce;if(Os=l,(Ce=h)&&!f)for(z=i;z!==null;)l=z,h=l.child,l.tag===22&&l.memoizedState!==null?Od(i):h!==null?(h.return=l,z=h):Od(i);for(;o!==null;)z=o,Pg(o),o=o.sibling;z=i,Os=u,Ce=f}Rd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Rd(t)}}function Rd(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||Go(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&fd(e,o,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fd(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var I=f.memoizedState;if(I!==null){var A=I.dehydrated;A!==null&&Oi(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ce||e.flags&512&&Za(e)}catch(k){le(e,e.return,k)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Nd(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function Od(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Go(4,e)}catch(h){le(e,n,h)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(h){le(e,i,h)}}var o=e.return;try{Za(e)}catch(h){le(e,o,h)}break;case 5:var l=e.return;try{Za(e)}catch(h){le(e,l,h)}}}catch(h){le(e,e.return,h)}if(e===t){z=null;break}var u=e.sibling;if(u!==null){u.return=e.return,z=u;break}z=e.return}}var ew=Math.ceil,Eo=Wt.ReactCurrentDispatcher,Zu=Wt.ReactCurrentOwner,tt=Wt.ReactCurrentBatchConfig,G=0,ge=null,he=null,ye=0,Be=0,mr=Sn(0),fe=0,Bi=null,Vn=0,Ko=0,ec=0,Si=null,je=null,tc=0,Mr=1/0,Ot=null,So=!1,nu=null,pn=null,Ds=!1,ln=null,Io=0,Ii=0,ru=null,qs=-1,Qs=0;function xe(){return G&6?ce():qs!==-1?qs:qs=ce()}function gn(t){return t.mode&1?G&2&&ye!==0?ye&-ye:j0.transition!==null?(Qs===0&&(Qs=dp()),Qs):(t=Q,t!==0||(t=window.event,t=t===void 0?16:wp(t.type)),t):1}function dt(t,e,n,r){if(50<Ii)throw Ii=0,ru=null,Error(L(185));Ki(t,n,r),(!(G&2)||t!==ge)&&(t===ge&&(!(G&2)&&(Ko|=n),fe===4&&en(t,ye)),$e(t,r),n===1&&G===0&&!(e.mode&1)&&(Mr=ce()+500,Vo&&In()))}function $e(t,e){var n=t.callbackNode;jy(t,e);var r=so(t,t===ge?ye:0);if(r===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?U0(Dd.bind(null,t)):Fp(Dd.bind(null,t)),D0(function(){!(G&6)&&In()}),n=null;else{switch(fp(r)){case 1:n=Au;break;case 4:n=cp;break;case 16:n=io;break;case 536870912:n=hp;break;default:n=io}n=Ug(n,Rg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rg(t,e){if(qs=-1,Qs=0,G&6)throw Error(L(327));var n=t.callbackNode;if(Tr()&&t.callbackNode!==n)return null;var r=so(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=To(t,r);else{e=r;var i=G;G|=2;var o=Og();(ge!==t||ye!==e)&&(Ot=null,Mr=ce()+500,jn(t,e));do try{rw();break}catch(u){Ng(t,u)}while(!0);bu(),Eo.current=o,G=i,he!==null?e=0:(ge=null,ye=0,e=fe)}if(e!==0){if(e===2&&(i=Na(t),i!==0&&(r=i,e=iu(t,i))),e===1)throw n=Bi,jn(t,0),en(t,r),$e(t,ce()),n;if(e===6)en(t,r);else{if(i=t.current.alternate,!(r&30)&&!tw(i)&&(e=To(t,r),e===2&&(o=Na(t),o!==0&&(r=o,e=iu(t,o))),e===1))throw n=Bi,jn(t,0),en(t,r),$e(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Nn(t,je,Ot);break;case 3:if(en(t,r),(r&130023424)===r&&(e=tc+500-ce(),10<e)){if(so(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fa(Nn.bind(null,t,je,Ot),e);break}Nn(t,je,Ot);break;case 4:if(en(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-ht(r);o=1<<l,l=e[l],l>i&&(i=l),r&=~o}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ew(r/1960))-r,10<r){t.timeoutHandle=Fa(Nn.bind(null,t,je,Ot),r);break}Nn(t,je,Ot);break;case 5:Nn(t,je,Ot);break;default:throw Error(L(329))}}}return $e(t,ce()),t.callbackNode===n?Rg.bind(null,t):null}function iu(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(jn(t,e).flags|=256),t=To(t,e),t!==2&&(e=je,je=n,e!==null&&su(e)),t}function su(t){je===null?je=t:je.push.apply(je,t)}function tw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function en(t,e){for(e&=~ec,e&=~Ko,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ht(e),r=1<<n;t[n]=-1,e&=~r}}function Dd(t){if(G&6)throw Error(L(327));Tr();var e=so(t,0);if(!(e&1))return $e(t,ce()),null;var n=To(t,e);if(t.tag!==0&&n===2){var r=Na(t);r!==0&&(e=r,n=iu(t,r))}if(n===1)throw n=Bi,jn(t,0),en(t,e),$e(t,ce()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nn(t,je,Ot),$e(t,ce()),null}function nc(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Mr=ce()+500,Vo&&In())}}function Hn(t){ln!==null&&ln.tag===0&&!(G&6)&&Tr();var e=G;G|=1;var n=tt.transition,r=Q;try{if(tt.transition=null,Q=1,t)return t()}finally{Q=r,tt.transition=n,G=e,!(G&6)&&In()}}function rc(){Be=mr.current,te(mr)}function jn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,O0(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(ju(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&co();break;case 3:Lr(),te(ze),te(Re),Gu();break;case 5:Wu(r);break;case 4:Lr();break;case 13:te(ie);break;case 19:te(ie);break;case 10:$u(r.type._context);break;case 22:case 23:rc()}n=n.return}if(ge=t,he=t=mn(t.current,null),ye=Be=e,fe=0,Bi=null,ec=Ko=Vn=0,je=Si=null,xn!==null){for(e=0;e<xn.length;e++)if(n=xn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}xn=null}return t}function Ng(t,e){do{var n=he;try{if(bu(),Ws.current=_o,wo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wo=!1}if(Bn=0,pe=de=se=null,_i=!1,zi=0,Zu.current=null,n===null||n.return===null){fe=1,Bi=e,he=null;break}e:{var o=t,l=n.return,u=n,h=e;if(e=ye,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=h,I=u,A=I.tag;if(!(I.mode&1)&&(A===0||A===11||A===15)){var k=I.alternate;k?(I.updateQueue=k.updateQueue,I.memoizedState=k.memoizedState,I.lanes=k.lanes):(I.updateQueue=null,I.memoizedState=null)}var O=wd(l);if(O!==null){O.flags&=-257,_d(O,l,u,o,e),O.mode&1&&yd(o,f,e),e=O,h=f;var R=e.updateQueue;if(R===null){var D=new Set;D.add(h),e.updateQueue=D}else R.add(h);break e}else{if(!(e&1)){yd(o,f,e),ic();break e}h=Error(L(426))}}else if(ne&&u.mode&1){var b=wd(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),_d(b,l,u,o,e),Fu(xr(h,u));break e}}o=h=xr(h,u),fe!==4&&(fe=2),Si===null?Si=[o]:Si.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=fg(o,h,e);dd(o,E);break e;case 1:u=h;var w=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(pn===null||!pn.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var N=pg(o,u,e);dd(o,N);break e}}o=o.return}while(o!==null)}Lg(n)}catch(U){e=U,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Og(){var t=Eo.current;return Eo.current=_o,t===null?_o:t}function ic(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(Vn&268435455)&&!(Ko&268435455)||en(ge,ye)}function To(t,e){var n=G;G|=2;var r=Og();(ge!==t||ye!==e)&&(Ot=null,jn(t,e));do try{nw();break}catch(i){Ng(t,i)}while(!0);if(bu(),G=n,Eo.current=r,he!==null)throw Error(L(261));return ge=null,ye=0,fe}function nw(){for(;he!==null;)Dg(he)}function rw(){for(;he!==null&&!Py();)Dg(he)}function Dg(t){var e=Mg(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?Lg(t):he=e,Zu.current=null}function Lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X0(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,he=null;return}}else if(n=Q0(n,e,Be),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);fe===0&&(fe=5)}function Nn(t,e,n){var r=Q,i=tt.transition;try{tt.transition=null,Q=1,iw(t,e,n,r)}finally{tt.transition=i,Q=r}return null}function iw(t,e,n,r){do Tr();while(ln!==null);if(G&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Fy(t,o),t===ge&&(he=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ds||(Ds=!0,Ug(io,function(){return Tr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var l=Q;Q=1;var u=G;G|=4,Zu.current=null,J0(t,n),Ag(n,t),T0(Ua),oo=!!Ma,Ua=Ma=null,t.current=n,Z0(n),Ry(),G=u,Q=l,tt.transition=o}else t.current=n;if(Ds&&(Ds=!1,ln=t,Io=i),o=t.pendingLanes,o===0&&(pn=null),Dy(n.stateNode),$e(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(So)throw So=!1,t=nu,nu=null,t;return Io&1&&t.tag!==0&&Tr(),o=t.pendingLanes,o&1?t===ru?Ii++:(Ii=0,ru=t):Ii=0,In(),null}function Tr(){if(ln!==null){var t=fp(Io),e=tt.transition,n=Q;try{if(tt.transition=null,Q=16>t?16:t,ln===null)var r=!1;else{if(t=ln,ln=null,Io=0,G&6)throw Error(L(331));var i=G;for(G|=4,z=t.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var f=u[h];for(z=f;z!==null;){var I=z;switch(I.tag){case 0:case 11:case 15:Ei(8,I,o)}var A=I.child;if(A!==null)A.return=I,z=A;else for(;z!==null;){I=z;var k=I.sibling,O=I.return;if(Tg(I),I===f){z=null;break}if(k!==null){k.return=O,z=k;break}z=O}}}var R=o.alternate;if(R!==null){var D=R.child;if(D!==null){R.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ei(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,z=E;break e}z=o.return}}var w=t.current;for(z=w;z!==null;){l=z;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,z=S;else e:for(l=w;z!==null;){if(u=z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Go(9,u)}}catch(U){le(u,u.return,U)}if(u===l){z=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,z=N;break e}z=u.return}}if(G=i,In(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Fo,t)}catch{}r=!0}return r}finally{Q=n,tt.transition=e}}return!1}function Ld(t,e,n){e=xr(n,e),e=fg(t,e,1),t=fn(t,e,1),e=xe(),t!==null&&(Ki(t,1,e),$e(t,e))}function le(t,e,n){if(t.tag===3)Ld(t,t,n);else for(;e!==null;){if(e.tag===3){Ld(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){t=xr(n,t),t=pg(e,t,1),e=fn(e,t,1),t=xe(),e!==null&&(Ki(e,1,t),$e(e,t));break}}e=e.return}}function sw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>ce()-tc?jn(t,0):ec|=n),$e(t,e)}function xg(t,e){e===0&&(t.mode&1?(e=Ss,Ss<<=1,!(Ss&130023424)&&(Ss=4194304)):e=1);var n=xe();t=$t(t,e),t!==null&&(Ki(t,e,n),$e(t,n))}function ow(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),xg(t,n)}function lw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),xg(t,n)}var Mg;Mg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)Fe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Fe=!1,q0(t,e,n);Fe=!!(t.flags&131072)}else Fe=!1,ne&&e.flags&1048576&&zp(e,po,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ks(t,e),t=e.pendingProps;var i=Nr(e,Re.current);Ir(e,n),i=qu(null,e,r,t,i,n);var o=Qu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,be(r)?(o=!0,ho(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vu(e),i.updater=Wo,e.stateNode=i,i._reactInternals=e,Wa(e,r,t,n),e=qa(null,e,r,!0,o,n)):(e.tag=0,ne&&o&&Uu(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ks(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=uw(r),t=at(r,t),i){case 0:e=Ka(null,e,r,t,n);break e;case 1:e=Id(null,e,r,t,n);break e;case 11:e=Ed(null,e,r,t,n);break e;case 14:e=Sd(null,e,r,at(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ka(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Id(t,e,r,i,n);case 3:e:{if(yg(e),t===null)throw Error(L(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Wp(t,e),vo(e,r,null,n);var l=e.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=xr(Error(L(423)),e),e=Td(t,e,r,n,i);break e}else if(r!==i){i=xr(Error(L(424)),e),e=Td(t,e,r,n,i);break e}else for(Ve=dn(e.stateNode.containerInfo.firstChild),We=e,ne=!0,ct=null,n=Vp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){e=Bt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return Gp(e),t===null&&Ba(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,ja(r,i)?l=null:o!==null&&ja(r,o)&&(e.flags|=32),vg(t,e),Le(t,e,l,n),e.child;case 6:return t===null&&Ba(e),null;case 13:return wg(t,e,n);case 4:return Hu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Dr(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ed(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,l=i.value,J(go,r._currentValue),r._currentValue=l,o!==null)if(ft(o.value,l)){if(o.children===i.children&&!ze.current){e=Bt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var h=u.firstContext;h!==null;){if(h.context===r){if(o.tag===1){h=Ft(-1,n&-n),h.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var I=f.pending;I===null?h.next=h:(h.next=I.next,I.next=h),f.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Va(o.return,n,e),u.lanes|=n;break}h=h.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(L(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Va(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ir(e,n),i=it(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Sd(t,e,r,i,n);case 15:return gg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ks(t,e),e.tag=1,be(r)?(t=!0,ho(e)):t=!1,Ir(e,n),dg(e,r,i),Wa(e,r,i,n),qa(null,e,r,!0,t,n);case 19:return _g(t,e,n);case 22:return mg(t,e,n)}throw Error(L(156,e.tag))};function Ug(t,e){return up(t,e)}function aw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new aw(t,e,n,r)}function sc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uw(t){if(typeof t=="function")return sc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tu)return 11;if(t===ku)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xs(t,e,n,r,i,o){var l=2;if(r=t,typeof t=="function")sc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case or:return Fn(n.children,i,o,e);case Iu:l=8,i|=8;break;case ga:return t=et(12,n,e,i|2),t.elementType=ga,t.lanes=o,t;case ma:return t=et(13,n,e,i),t.elementType=ma,t.lanes=o,t;case va:return t=et(19,n,e,i),t.elementType=va,t.lanes=o,t;case Gf:return qo(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hf:l=10;break e;case Wf:l=9;break e;case Tu:l=11;break e;case ku:l=14;break e;case Yt:l=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=et(l,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Fn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function qo(t,e,n,r){return t=et(22,t,r,e),t.elementType=Gf,t.lanes=n,t.stateNode={isHidden:!1},t}function ea(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function ta(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function oc(t,e,n,r,i,o,l,u,h){return t=new cw(t,e,n,u,h),e===1?(e=1,o===!0&&(e|=8)):e=0,o=et(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vu(o),t}function hw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function jg(t){if(!t)return _n;t=t._reactInternals;e:{if(Xn(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(be(n))return jp(t,n,e)}return e}function Fg(t,e,n,r,i,o,l,u,h){return t=oc(n,r,!0,t,i,o,l,u,h),t.context=jg(null),n=t.current,r=xe(),i=gn(n),o=Ft(r,i),o.callback=e??null,fn(n,o,i),t.current.lanes=i,Ki(t,i,r),$e(t,r),t}function Qo(t,e,n,r){var i=e.current,o=xe(),l=gn(i);return n=jg(n),e.context===null?e.context=n:e.pendingContext=n,e=Ft(o,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fn(i,e,l),t!==null&&(dt(t,i,l,o),Hs(t,i,l)),l}function ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lc(t,e){xd(t,e),(t=t.alternate)&&xd(t,e)}function dw(){return null}var zg=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}Xo.prototype.render=ac.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));Qo(t,e,null,null)};Xo.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hn(function(){Qo(null,t,null,null)}),e[bt]=null}};function Xo(t){this._internalRoot=t}Xo.prototype.unstable_scheduleHydration=function(t){if(t){var e=mp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zt.length&&e!==0&&e<Zt[n].priority;n++);Zt.splice(n,0,t),n===0&&yp(t)}};function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Md(){}function fw(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=ko(l);o.call(f)}}var l=Fg(e,r,t,0,null,!1,!1,"",Md);return t._reactRootContainer=l,t[bt]=l.current,xi(t.nodeType===8?t.parentNode:t),Hn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=ko(h);u.call(f)}}var h=oc(t,0,!1,null,null,!1,!1,"",Md);return t._reactRootContainer=h,t[bt]=h.current,xi(t.nodeType===8?t.parentNode:t),Hn(function(){Qo(e,h,n,r)}),h}function Jo(t,e,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var h=ko(l);u.call(h)}}Qo(e,l,t,i)}else l=fw(n,e,t,i,r);return ko(l)}pp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fi(e.pendingLanes);n!==0&&(Pu(e,n|1),$e(e,ce()),!(G&6)&&(Mr=ce()+500,In()))}break;case 13:Hn(function(){var r=$t(t,1);if(r!==null){var i=xe();dt(r,t,1,i)}}),lc(t,1)}};Ru=function(t){if(t.tag===13){var e=$t(t,134217728);if(e!==null){var n=xe();dt(e,t,134217728,n)}lc(t,134217728)}};gp=function(t){if(t.tag===13){var e=gn(t),n=$t(t,e);if(n!==null){var r=xe();dt(n,t,e,r)}lc(t,e)}};mp=function(){return Q};vp=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};Aa=function(t,e,n){switch(e){case"input":if(_a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Bo(r);if(!i)throw Error(L(90));qf(r),_a(r,i)}}}break;case"textarea":Xf(t,n);break;case"select":e=n.value,e!=null&&wr(t,!!n.multiple,e,!1)}};rp=nc;ip=Hn;var pw={usingClientEntryPoint:!1,Events:[Qi,cr,Bo,tp,np,nc]},ci={findFiberByHostInstance:Ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gw={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lp(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Fo=Ls.inject(gw),wt=Ls}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uc(e))throw Error(L(200));return hw(t,e,null,n)};qe.createRoot=function(t,e){if(!uc(t))throw Error(L(299));var n=!1,r="",i=zg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=oc(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,xi(t.nodeType===8?t.parentNode:t),new ac(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=lp(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Hn(t)};qe.hydrate=function(t,e,n){if(!Yo(e))throw Error(L(200));return Jo(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!uc(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=zg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=Fg(e,null,t,1,n??null,i,!1,o,l),t[bt]=e.current,xi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xo(e)};qe.render=function(t,e,n){if(!Yo(e))throw Error(L(200));return Jo(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(L(40));return t._reactRootContainer?(Hn(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};qe.unstable_batchedUpdates=nc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yo(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return Jo(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)}catch(t){console.error(t)}}bg(),bf.exports=qe;var mw=bf.exports,Ud=mw;fa.createRoot=Ud.createRoot,fa.hydrateRoot=Ud.hydrateRoot;var jd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],l=t[n++],u=t[n++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},Bg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],l=i+1<t.length,u=l?t[i+1]:0,h=i+2<t.length,f=h?t[i+2]:0,I=o>>2,A=(o&3)<<4|u>>4;let k=(u&15)<<2|f>>6,O=f&63;h||(O=64,l||(k=64)),r.push(n[I],n[A],n[k],n[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const A=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||u==null||f==null||A==null)throw new yw;const k=o<<2|u>>4;if(r.push(k),f!==64){const O=u<<4&240|f>>2;if(r.push(O),A!==64){const R=f<<6&192|A;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ww=function(t){const e=$g(t);return Bg.encodeByteArray(e,!0)},Co=function(t){return ww(t).replace(/\./g,"")},Vg=function(t){try{return Bg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=()=>_w().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof jd>"u")return;const t=jd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Iw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vg(t[1]);return e&&JSON.parse(e)},cc=()=>{try{return Ew()||Sw()||Iw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hg=t=>{var e,n;return(n=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tw=t=>{const e=Hg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wg=()=>{var t;return(t=cc())===null||t===void 0?void 0:t.config},Gg=t=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Co(JSON.stringify(n)),Co(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Aw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function Kg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rw(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qg(){try{return typeof indexedDB=="object"}catch{return!1}}function Qg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Nw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="FirebaseError";class gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ow,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?Dw(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new gt(i,u,r)}}function Dw(t,e){return t.replace(Lw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Lw=/\{\$([^}]+)}/g;function xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],l=e[i];if(Fd(o)&&Fd(l)){if(!Vi(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mw(t,e){const n=new Uw(t,e);return n.subscribe.bind(n)}class Uw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=na),i.error===void 0&&(i.error=na),i.complete===void 0&&(i.complete=na);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function na(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=1e3,zw=2,bw=4*60*60*1e3,$w=.5;function zd(t,e=Fw,n=zw){const r=e*Math.pow(n,t),i=Math.round($w*r*(Math.random()-.5)*2);return Math.min(bw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hw(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===On?void 0:t}function Hw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Gw={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Kw=q.INFO,qw={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Qw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zo{constructor(e){this.name=e,this._logLevel=Kw,this._logHandler=Qw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Xw=(t,e)=>e.some(n=>t instanceof n);let bd,$d;function Yw(){return bd||(bd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,ou=new WeakMap,Yg=new WeakMap,ra=new WeakMap,hc=new WeakMap;function Zw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(vn(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),hc.set(e,t),e}function e1(t){if(ou.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});ou.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ou.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function t1(t){lu=t(lu)}function n1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ia(this),e,...n);return Yg.set(r,e.sort?e.sort():[e]),vn(r)}:Jw().includes(t)?function(...e){return t.apply(ia(this),e),vn(Xg.get(this))}:function(...e){return vn(t.apply(ia(this),e))}}function r1(t){return typeof t=="function"?n1(t):(t instanceof IDBTransaction&&e1(t),Xw(t,Yw())?new Proxy(t,lu):t)}function vn(t){if(t instanceof IDBRequest)return Zw(t);if(ra.has(t))return ra.get(t);const e=r1(t);return e!==t&&(ra.set(t,e),hc.set(e,t)),e}const ia=t=>hc.get(t);function Jg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(t,e),u=vn(l);return r&&l.addEventListener("upgradeneeded",h=>{r(vn(l.result),h.oldVersion,h.newVersion,vn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const i1=["get","getKey","getAll","getAllKeys","count"],s1=["put","add","delete","clear"],sa=new Map;function Bd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sa.get(e))return sa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=s1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||i1.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[n](...u),i&&h.done]))[0]};return sa.set(e,o),o}t1(t=>({...t,get:(e,n,r)=>Bd(e,n)||t.get(e,n,r),has:(e,n)=>!!Bd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(l1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function l1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",Vd="0.10.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Zo("@firebase/app"),a1="@firebase/app-compat",u1="@firebase/analytics-compat",c1="@firebase/analytics",h1="@firebase/app-check-compat",d1="@firebase/app-check",f1="@firebase/auth",p1="@firebase/auth-compat",g1="@firebase/database",m1="@firebase/database-compat",v1="@firebase/functions",y1="@firebase/functions-compat",w1="@firebase/installations",_1="@firebase/installations-compat",E1="@firebase/messaging",S1="@firebase/messaging-compat",I1="@firebase/performance",T1="@firebase/performance-compat",k1="@firebase/remote-config",C1="@firebase/remote-config-compat",A1="@firebase/storage",P1="@firebase/storage-compat",R1="@firebase/firestore",N1="@firebase/vertexai-preview",O1="@firebase/firestore-compat",D1="firebase",L1="10.12.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="[DEFAULT]",x1={[au]:"fire-core",[a1]:"fire-core-compat",[c1]:"fire-analytics",[u1]:"fire-analytics-compat",[d1]:"fire-app-check",[h1]:"fire-app-check-compat",[f1]:"fire-auth",[p1]:"fire-auth-compat",[g1]:"fire-rtdb",[m1]:"fire-rtdb-compat",[v1]:"fire-fn",[y1]:"fire-fn-compat",[w1]:"fire-iid",[_1]:"fire-iid-compat",[E1]:"fire-fcm",[S1]:"fire-fcm-compat",[I1]:"fire-perf",[T1]:"fire-perf-compat",[k1]:"fire-rc",[C1]:"fire-rc-compat",[A1]:"fire-gcs",[P1]:"fire-gcs-compat",[R1]:"fire-fst",[O1]:"fire-fst-compat",[N1]:"fire-vertex","fire-js":"fire-js",[D1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=new Map,M1=new Map,cu=new Map;function Hd(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(cu.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;cu.set(e,t);for(const n of Ao.values())Hd(n,t);for(const n of M1.values())Hd(n,t);return!0}function Jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function an(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Yn("app","Firebase",U1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=L1;function Zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:uu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=Wg()),!n)throw yn.create("no-options");const o=Ao.get(i);if(o){if(Vi(n,o.options)&&Vi(r,o.config))return o;throw yn.create("duplicate-app",{appName:i})}const l=new Ww(i);for(const h of cu.values())l.addComponent(h);const u=new j1(n,r,l);return Ao.set(i,u),u}function dc(t=uu){const e=Ao.get(t);if(!e&&t===uu&&Wg())return Zg();if(!e)throw yn.create("no-app",{appName:t});return e}function nt(t,e,n){var r;let i=(r=x1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(u.join(" "));return}It(new pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="firebase-heartbeat-database",z1=1,Hi="firebase-heartbeat-store";let oa=null;function em(){return oa||(oa=Jg(F1,z1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),oa}async function b1(t){try{const n=(await em()).transaction(Hi),r=await n.objectStore(Hi).get(tm(t));return await n.done,r}catch(e){if(e instanceof gt)Wn.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Wd(t,e){try{const r=(await em()).transaction(Hi,"readwrite");await r.objectStore(Hi).put(e,tm(t)),await r.done}catch(n){if(n instanceof gt)Wn.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function tm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=1024,B1=30*24*60*60*1e3;class V1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new W1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Gd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=B1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gd(),{heartbeatsToSend:r,unsentEntries:i}=H1(this._heartbeatsCache.heartbeats),o=Co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Gd(){return new Date().toISOString().substring(0,10)}function H1(t,e=$1){const n=[];let r=t.slice();for(const i of t){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Kd(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class W1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qg()?Qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await b1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kd(t){return Co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(t){It(new pt("platform-logger",e=>new o1(e),"PRIVATE")),It(new pt("heartbeat",e=>new V1(e),"PRIVATE")),nt(au,Vd,t),nt(au,Vd,"esm2017"),nt("fire-js","")}G1("");var K1="firebase",q1="10.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(K1,q1,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const Q1={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function xs(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Ms(t){return t.toString().indexOf("`")===-1}Ms(t=>t``)||Ms(t=>t`\0`)||Ms(t=>t`\n`)||Ms(t=>t`\u0000`);xs``&&xs`\0`&&xs`\n`&&xs`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let nm="google#safe";function X1(){if(typeof window<"u")return window.trustedTypes}function rm(){var t;return nm!==""&&(t=X1())!==null&&t!==void 0?t:null}let Us;function Y1(){var t,e;if(Us===void 0)try{Us=(e=(t=rm())===null||t===void 0?void 0:t.createPolicy(nm,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{Us=null}return Us}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class im{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function qd(t){var e;const n=t,r=(e=Y1())===null||e===void 0?void 0:e.createScriptURL(n);return r??new im(n,Q1)}function J1(t){var e;if(!((e=rm())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof im)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Z1(t,...e){if(e.length===0)return qd(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return qd(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function e_(t){return t_("script",t)}function t_(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function n_(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=e_(e||window);n&&t.setAttribute("nonce",n)}function r_(t,e,n){t.src=J1(e),n_(t)}const sm="@firebase/installations",fc="0.6.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=1e4,lm=`w:${fc}`,am="FIS_v2",i_="https://firebaseinstallations.googleapis.com/v1",s_=60*60*1e3,o_="installations",l_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Gn=new Yn(o_,l_,a_);function um(t){return t instanceof gt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm({projectId:t}){return`${i_}/projects/${t}/installations`}function hm(t){return{token:t.token,requestStatus:2,expiresIn:c_(t.expiresIn),creationTime:Date.now()}}async function dm(t,e){const r=(await e.json()).error;return Gn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fm({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function u_(t,{refreshToken:e}){const n=fm(t);return n.append("Authorization",h_(e)),n}async function pm(t){const e=await t();return e.status>=500&&e.status<600?t():e}function c_(t){return Number(t.replace("s","000"))}function h_(t){return`${am} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=cm(t),i=fm(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const l={fid:n,authVersion:am,appId:t.appId,sdkVersion:lm},u={method:"POST",headers:i,body:JSON.stringify(l)},h=await pm(()=>fetch(r,u));if(h.ok){const f=await h.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:hm(f.authToken)}}else throw await dm("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=/^[cdef][\w-]{21}$/,hu="";function g_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=m_(t);return p_.test(n)?n:hu}catch{return hu}}function m_(t){return f_(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=new Map;function vm(t,e){const n=el(t);ym(n,e),v_(n,e)}function ym(t,e){const n=mm.get(t);if(n)for(const r of n)r(e)}function v_(t,e){const n=y_();n&&n.postMessage({key:t,fid:e}),w_()}let Un=null;function y_(){return!Un&&"BroadcastChannel"in self&&(Un=new BroadcastChannel("[Firebase] FID Change"),Un.onmessage=t=>{ym(t.data.key,t.data.fid)}),Un}function w_(){mm.size===0&&Un&&(Un.close(),Un=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="firebase-installations-database",E_=1,Kn="firebase-installations-store";let la=null;function pc(){return la||(la=Jg(__,E_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Kn)}}})),la}async function Po(t,e){const n=el(t),i=(await pc()).transaction(Kn,"readwrite"),o=i.objectStore(Kn),l=await o.get(n);return await o.put(e,n),await i.done,(!l||l.fid!==e.fid)&&vm(t,e.fid),e}async function wm(t){const e=el(t),r=(await pc()).transaction(Kn,"readwrite");await r.objectStore(Kn).delete(e),await r.done}async function tl(t,e){const n=el(t),i=(await pc()).transaction(Kn,"readwrite"),o=i.objectStore(Kn),l=await o.get(n),u=e(l);return u===void 0?await o.delete(n):await o.put(u,n),await i.done,u&&(!l||l.fid!==u.fid)&&vm(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t){let e;const n=await tl(t.appConfig,r=>{const i=S_(r),o=I_(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===hu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function S_(t){const e=t||{fid:g_(),registrationStatus:0};return _m(e)}function I_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=T_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:k_(t)}:{installationEntry:e}}async function T_(t,e){try{const n=await d_(t,e);return Po(t.appConfig,n)}catch(n){throw um(n)&&n.customData.serverCode===409?await wm(t.appConfig):await Po(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function k_(t){let e=await Qd(t.appConfig);for(;e.registrationStatus===1;)await gm(100),e=await Qd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gc(t);return r||n}return e}function Qd(t){return tl(t,e=>{if(!e)throw Gn.create("installation-not-found");return _m(e)})}function _m(t){return C_(t)?{fid:t.fid,registrationStatus:0}:t}function C_(t){return t.registrationStatus===1&&t.registrationTime+om<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_({appConfig:t,heartbeatServiceProvider:e},n){const r=P_(t,n),i=u_(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const l={installation:{sdkVersion:lm,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(l)},h=await pm(()=>fetch(r,u));if(h.ok){const f=await h.json();return hm(f)}else throw await dm("Generate Auth Token",h)}function P_(t,{fid:e}){return`${cm(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(t,e=!1){let n;const r=await tl(t.appConfig,o=>{if(!Em(o))throw Gn.create("not-registered");const l=o.authToken;if(!e&&O_(l))return o;if(l.requestStatus===1)return n=R_(t,e),o;{if(!navigator.onLine)throw Gn.create("app-offline");const u=L_(o);return n=N_(t,u),u}});return n?await n:r.authToken}async function R_(t,e){let n=await Xd(t.appConfig);for(;n.authToken.requestStatus===1;)await gm(100),n=await Xd(t.appConfig);const r=n.authToken;return r.requestStatus===0?mc(t,e):r}function Xd(t){return tl(t,e=>{if(!Em(e))throw Gn.create("not-registered");const n=e.authToken;return x_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function N_(t,e){try{const n=await A_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Po(t.appConfig,r),n}catch(n){if(um(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await wm(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Po(t.appConfig,r)}throw n}}function Em(t){return t!==void 0&&t.registrationStatus===2}function O_(t){return t.requestStatus===2&&!D_(t)}function D_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s_}function L_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function x_(t){return t.requestStatus===1&&t.requestTime+om<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M_(t){const e=t,{installationEntry:n,registrationPromise:r}=await gc(e);return r?r.catch(console.error):mc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e=!1){const n=t;return await j_(n),(await mc(n,e)).token}async function j_(t){const{registrationPromise:e}=await gc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t){if(!t||!t.options)throw aa("App Configuration");if(!t.name)throw aa("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw aa(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function aa(t){return Gn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="installations",z_="installations-internal",b_=t=>{const e=t.getProvider("app").getImmediate(),n=F_(e),r=Jn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$_=t=>{const e=t.getProvider("app").getImmediate(),n=Jn(e,Sm).getImmediate();return{getId:()=>M_(n),getToken:i=>U_(n,i)}};function B_(){It(new pt(Sm,b_,"PUBLIC")),It(new pt(z_,$_,"PRIVATE"))}B_();nt(sm,fc);nt(sm,fc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="analytics",V_="firebase_id",H_="origin",W_=60*1e3,G_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",K_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge=new Zo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function q_(t,e){const n=document.createElement("script"),r=Z1`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;r_(n,r),n.async=!0,document.head.appendChild(n)}function Q_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function X_(t,e,n,r,i,o){const l=r[i];try{if(l)await e[l];else{const h=(await Im(n)).find(f=>f.measurementId===i);h&&await e[h.appId]}}catch(u){Ge.error(u)}t("config",i,o)}async function Y_(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const u=await Im(n);for(const h of l){const f=u.find(A=>A.measurementId===h),I=f&&e[f.appId];if(I)o.push(I);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Ge.error(o)}}function J_(t,e,n,r){async function i(o,...l){try{if(o==="event"){const[u,h]=l;await Y_(t,e,n,u,h)}else if(o==="config"){const[u,h]=l;await X_(t,e,n,r,u,h)}else if(o==="consent"){const[u,h]=l;t("consent",u,h)}else if(o==="get"){const[u,h,f]=l;t("get",u,h,f)}else if(o==="set"){const[u]=l;t("set",u)}else t(o,...l)}catch(u){Ge.error(u)}}return i}function Z_(t,e,n,r,i){let o=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=J_(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function eE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(K_)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new Yn("analytics","Analytics",tE);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=30,rE=1e3;class iE{constructor(e={},n=rE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Tm=new iE;function sE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function oE(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:sE(r)},o=G_.replace("{app-id}",n),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let u="";try{const h=await l.json();!((e=h.error)===null||e===void 0)&&e.message&&(u=h.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function lE(t,e=Tm,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw rt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw rt.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new cE;return setTimeout(async()=>{u.abort()},W_),km({appId:r,apiKey:i,measurementId:o},l,u,e)}async function km(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Tm){var o;const{appId:l,measurementId:u}=t;try{await aE(r,e)}catch(h){if(u)return Ge.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:u};throw h}try{const h=await oE(t);return i.deleteThrottleMetadata(l),h}catch(h){const f=h;if(!uE(f)){if(i.deleteThrottleMetadata(l),u)return Ge.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw h}const I=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?zd(n,i.intervalMillis,nE):zd(n,i.intervalMillis),A={throttleEndTimeMillis:Date.now()+I,backoffCount:n+1};return i.setThrottleMetadata(l,A),Ge.debug(`Calling attemptFetch again in ${I} millis`),km(t,A,r,i)}}function aE(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uE(t){if(!(t instanceof gt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class cE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hE(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,l=Object.assign(Object.assign({},r),{send_to:o});t("event",n,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(){if(qg())try{await Qg()}catch(t){return Ge.warn(rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ge.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fE(t,e,n,r,i,o,l){var u;const h=lE(t);h.then(O=>{n[O.measurementId]=O.appId,t.options.measurementId&&O.measurementId!==t.options.measurementId&&Ge.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>Ge.error(O)),e.push(h);const f=dE().then(O=>{if(O)return r.getId()}),[I,A]=await Promise.all([h,f]);eE(o)||q_(o,I.measurementId),i("js",new Date);const k=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return k[H_]="firebase",k.update=!0,A!=null&&(k[V_]=A),i("config",I.measurementId,k),I.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.app=e}_delete(){return delete Ti[this.app.options.appId],Promise.resolve()}}let Ti={},Yd=[];const Jd={};let ua="dataLayer",gE="gtag",Zd,Cm,ef=!1;function mE(){const t=[];if(Kg()&&t.push("This is a browser extension environment."),Nw()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:e});Ge.warn(n.message)}}function vE(t,e,n){mE();const r=t.options.appId;if(!r)throw rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ge.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Ti[r]!=null)throw rt.create("already-exists",{id:r});if(!ef){Q_(ua);const{wrappedGtag:o,gtagCore:l}=Z_(Ti,Yd,Jd,ua,gE);Cm=o,Zd=l,ef=!0}return Ti[r]=fE(t,Yd,Jd,e,Zd,ua,n),new pE(t)}function yE(t=dc()){t=Tn(t);const e=Jn(t,Ro);return e.isInitialized()?e.getImmediate():wE(t)}function wE(t,e={}){const n=Jn(t,Ro);if(n.isInitialized()){const i=n.getImmediate();if(Vi(e,n.getOptions()))return i;throw rt.create("already-initialized")}return n.initialize({options:e})}function _E(t,e,n,r){t=Tn(t),hE(Cm,Ti[t.app.options.appId],e,n,r).catch(i=>Ge.error(i))}const tf="@firebase/analytics",nf="0.10.6";function EE(){It(new pt(Ro,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return vE(r,i,n)},"PUBLIC")),It(new pt("analytics-internal",t,"PRIVATE")),nt(tf,nf),nt(tf,nf,"esm2017");function t(e){try{const n=e.getProvider(Ro).getImmediate();return{logEvent:(r,i,o)=>_E(n,r,i,o)}}catch(n){throw rt.create("interop-component-reg-failed",{reason:n})}}}EE();function vc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Am(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SE=Am,Pm=new Yn("auth","Firebase",Am());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Zo("@firebase/auth");function IE(t,...e){No.logLevel<=q.WARN&&No.warn(`Auth (${$r}): ${t}`,...e)}function Ys(t,...e){No.logLevel<=q.ERROR&&No.error(`Auth (${$r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw yc(t,...e)}function Et(t,...e){return yc(t,...e)}function Rm(t,e,n){const r=Object.assign(Object.assign({},SE()),{[e]:n});return new Yn("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return Rm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pm.create(t,...e)}function $(t,e,...n){if(!t)throw yc(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ys(e),new Error(e)}function Ht(t,e){t||Mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TE(){return rf()==="http:"||rf()==="https:"}function rf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TE()||Kg()||"connection"in navigator)?navigator.onLine:!0}function CE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=Aw()||Pw()}get(){return kE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=new Ji(3e4,6e4);function _c(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Br(t,e,n,r,i={}){return Om(t,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const u=Yi(Object.assign({key:t.config.apiKey},l)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),Nm.fetch()(Dm(t,t.config.apiHost,n,u),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},o))})}async function Om(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AE),e);try{const i=new NE(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw js(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,f]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw js(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw js(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw js(t,"user-disabled",l);const I=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Rm(t,I,f);Vt(t,I)}}catch(i){if(i instanceof gt)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function RE(t,e,n,r,i={}){const o=await Br(t,e,n,r,i);return"mfaPendingCredential"in o&&Vt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Dm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wc(t.config,i):`${t.config.apiScheme}://${i}`}class NE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),PE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function js(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e){return Br(t,"POST","/v1/accounts:delete",e)}async function Lm(t,e){return Br(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DE(t,e=!1){const n=Tn(t),r=await n.getIdToken(e),i=Ec(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ki(ca(i.auth_time)),issuedAtTime:ki(ca(i.iat)),expirationTime:ki(ca(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function Ec(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vg(n);return i?JSON.parse(i):(Ys("Failed to decode base64 JWT payload"),null)}catch(i){return Ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sf(t){const e=Ec(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gt&&LE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ki(this.lastLoginAt),this.creationTime=ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wi(t,Lm(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?xm(o.providerUserInfo):[],u=UE(t.providerData,l),h=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),I=h?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fu(o.createdAt,o.lastLoginAt),isAnonymous:I};Object.assign(t,A)}async function ME(t){const e=Tn(t);await Oo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xm(t){return t.map(e=>{var{providerId:n}=e,r=vc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){const n=await Om(t,{},async()=>{const r=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,l=Dm(t,i,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Nm.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FE(t,e){return Br(t,"POST","/v2/accounts:revokeToken",_c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=sf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await jE(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new kr;return r&&($(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&($(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kr,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new fu(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DE(this,e)}reload(){return ME(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Wi(this,OE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,l,u,h,f,I;const A=(r=n.displayName)!==null&&r!==void 0?r:void 0,k=(i=n.email)!==null&&i!==void 0?i:void 0,O=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,D=(u=n.tenantId)!==null&&u!==void 0?u:void 0,b=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,E=(f=n.createdAt)!==null&&f!==void 0?f:void 0,w=(I=n.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:S,emailVerified:N,isAnonymous:U,providerData:j,stsTokenManager:m}=n;$(S&&m,e,"internal-error");const p=kr.fromJSON(this.name,m);$(typeof S=="string",e,"internal-error"),Xt(A,e.name),Xt(k,e.name),$(typeof N=="boolean",e,"internal-error"),$(typeof U=="boolean",e,"internal-error"),Xt(O,e.name),Xt(R,e.name),Xt(D,e.name),Xt(b,e.name),Xt(E,e.name),Xt(w,e.name);const g=new Ut({uid:S,auth:e,email:k,emailVerified:N,displayName:A,isAnonymous:U,photoURL:R,phoneNumber:O,tenantId:D,stsTokenManager:p,createdAt:E,lastLoginAt:w});return j&&Array.isArray(j)&&(g.providerData=j.map(y=>Object.assign({},y))),b&&(g._redirectEventId=b),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new kr;i.updateFromServerResponse(n);const o=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?xm(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new kr;u.updateFromIdToken(r);const h=new Ut({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,f),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new Map;function jt(t){Ht(t instanceof Function,"Expected a class definition");let e=of.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,of.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mm.type="NONE";const lf=Mm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e,n){return`firebase:${t}:${e}:${n}`}class Cr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Js(this.userKey,i.apiKey,o),this.fullPersistenceKey=Js("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cr(jt(lf),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||jt(lf);const l=Js(r,e.config.apiKey,e.name);let u=null;for(const f of n)try{const I=await f._get(l);if(I){const A=Ut._fromJSON(e,I);f!==o&&(u=A),o=f;break}}catch{}const h=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Cr(o,e,r):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new Cr(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Um(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bm(e))return"Blackberry";if($m(e))return"Webos";if(Sc(e))return"Safari";if((e.includes("chrome/")||jm(e))&&!e.includes("edge/"))return"Chrome";if(zm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Um(t=Ne()){return/firefox\//i.test(t)}function Sc(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jm(t=Ne()){return/crios\//i.test(t)}function Fm(t=Ne()){return/iemobile/i.test(t)}function zm(t=Ne()){return/android/i.test(t)}function bm(t=Ne()){return/blackberry/i.test(t)}function $m(t=Ne()){return/webos/i.test(t)}function nl(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zE(t=Ne()){var e;return nl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bE(){return Rw()&&document.documentMode===10}function Bm(t=Ne()){return nl(t)||zm(t)||$m(t)||bm(t)||/windows phone/i.test(t)||Fm(t)}function $E(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e=[]){let n;switch(t){case"Browser":n=af(Ne());break;case"Worker":n=`${af(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((l,u)=>{try{const h=e(o);l(h)}catch(h){u(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(t,e={}){return Br(t,"GET","/v2/passwordPolicy",_c(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=6;class WE{constructor(e){var n,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:HE,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uf(this),this.idTokenSubscription=new uf(this),this.beforeStateQueue=new BE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Cr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lm(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(an(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(an(this.app))return Promise.reject(zn(this));const n=e?Tn(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return an(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VE(this),n=new WE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Cr.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ic(t){return Tn(t)}class uf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mw(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KE(t){Tc=t}function qE(t){return Tc.loadJS(t)}function QE(){return Tc.gapiScript}function XE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t,e){const n=Jn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Vi(o,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function JE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZE(t,e,n){const r=Ic(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Hm(e),{host:l,port:u}=eS(e),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${l}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),tS()}function Hm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eS(t){const e=Hm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:cf(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:cf(l)}}}function cf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t,e){return RE(t,"POST","/v1/accounts:signInWithIdp",_c(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="http://localhost";class qn extends Wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=vc(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new qn(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Ar(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ar(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ar(e,n)}buildRequest(){const e={requestUri:nS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Gm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Zi{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Zi{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Zi{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Ut._fromIdTokenResponse(e,r,i),l=hf(r);return new Ur({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hf(r);return new Ur({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends gt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Do.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Do(e,n,r,i)}}function Km(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Do._fromErrorAndOperation(t,o,e,r):o})}async function rS(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(t,e,n=!1){const{auth:r}=t;if(an(r.app))return Promise.reject(zn(r));const i="reauthenticate";try{const o=await Wi(t,Km(r,i,e,t),n);$(o.idToken,r,"internal-error");const l=Ec(o.idToken);$(l,r,"internal-error");const{sub:u}=l;return $(t.uid===u,r,"user-mismatch"),Ur._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(t,e,n=!1){if(an(t.app))return Promise.reject(zn(t));const r="signIn",i=await Km(t,r,e),o=await Ur._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function oS(t,e,n,r){return Tn(t).onIdTokenChanged(e,n,r)}function lS(t,e,n){return Tn(t).beforeAuthStateChanged(e,n)}const Lo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lo,"1"),this.storage.removeItem(Lo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(){const t=Ne();return Sc(t)||nl(t)}const uS=1e3,cS=10;class Qm extends qm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aS()&&$E(),this.fallbackToPolling=Bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);bE()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qm.type="LOCAL";const hS=Qm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends qm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xm.type="SESSION";const Ym=Xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async f=>f(n.origin,o)),h=await dS(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const f=kc("",20);i.port1.start();const I=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(A){const k=A;if(k.data.eventId===f)switch(k.data.status){case"ack":clearTimeout(I),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(k.data.response);break;default:clearTimeout(I),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function pS(t){St().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vS(){return Jm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="firebaseLocalStorageDb",yS=1,xo="firebaseLocalStorage",ev="fbase_key";class es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function il(t,e){return t.transaction([xo],e?"readwrite":"readonly").objectStore(xo)}function wS(){const t=indexedDB.deleteDatabase(Zm);return new es(t).toPromise()}function pu(){const t=indexedDB.open(Zm,yS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xo,{keyPath:ev})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xo)?e(r):(r.close(),await wS(),e(await pu()))})})}async function df(t,e,n){const r=il(t,!0).put({[ev]:e,value:n});return new es(r).toPromise()}async function _S(t,e){const n=il(t,!1).get(e),r=await new es(n).toPromise();return r===void 0?null:r.value}function ff(t,e){const n=il(t,!0).delete(e);return new es(n).toPromise()}const ES=800,SS=3;class tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rl._getInstance(vS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new fS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pu();return await df(e,Lo,"1"),await ff(e,Lo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>_S(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=il(i,!1).getAll();return new es(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ES)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tv.type="LOCAL";const IS=tv;new Ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t,e){return e?jt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ar(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ar(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return sS(t.auth,new Cc(t),t.bypassAuthState)}function CS(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),iS(n,new Cc(t),t.bypassAuthState)}async function AS(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),rS(n,new Cc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return AS;case"reauthViaPopup":case"reauthViaRedirect":return CS;default:Vt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=new Ji(2e3,1e4);class vr extends nv{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,vr.currentPopupAction&&vr.currentPopupAction.cancel(),vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=kc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PS.get())};e()}}vr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="pendingRedirect",Zs=new Map;class NS extends nv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zs.get(this.auth._key());if(!e){try{const r=await OS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zs.set(this.auth._key(),e)}return this.bypassAuthState||Zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(t,e){const n=xS(e),r=LS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function DS(t,e){Zs.set(t._key(),e)}function LS(t){return jt(t._redirectPersistence)}function xS(t){return Js(RS,t.config.apiKey,t.name)}async function MS(t,e,n=!1){if(an(t.app))return Promise.reject(zn(t));const r=Ic(t),i=TS(r,e),l=await new NS(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=US&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(e))}saveEventToCache(e){this.cachedEventUids.add(pf(e)),this.lastProcessedEventTime=Date.now()}}function pf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e={}){return Br(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$S=/^https?/;async function BS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zS(t);for(const n of e)try{if(VS(n))return}catch{}Vt(t,"unauthorized-domain")}function VS(t){const e=du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!$S.test(n))return!1;if(bS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new Ji(3e4,6e4);function gf(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WS(t){return new Promise((e,n)=>{var r,i,o;function l(){gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gf(),n(Et(t,"network-request-failed"))},timeout:HS.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)l();else{const u=XE("iframefcb");return St()[u]=()=>{gapi.load?l():n(Et(t,"network-request-failed"))},qE(`${QE()}?onload=${u}`).catch(h=>n(h))}}).catch(e=>{throw eo=null,e})}let eo=null;function GS(t){return eo=eo||WS(t),eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=new Ji(5e3,15e3),qS="__/auth/iframe",QS="emulator/auth/iframe",XS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JS(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wc(e,QS):`https://${t.config.authDomain}/${qS}`,r={apiKey:e.apiKey,appName:t.name,v:$r},i=YS.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Yi(r).slice(1)}`}async function ZS(t){const e=await GS(t),n=St().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:JS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=Et(t,"network-request-failed"),u=St().setTimeout(()=>{o(l)},KS.get());function h(){St().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tI=500,nI=600,rI="_blank",iI="http://localhost";class mf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sI(t,e,n,r=tI,i=nI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},eI),{width:r.toString(),height:i.toString(),top:o,left:l}),f=Ne().toLowerCase();n&&(u=jm(f)?rI:n),Um(f)&&(e=e||iI,h.scrollbars="yes");const I=Object.entries(h).reduce((k,[O,R])=>`${k}${O}=${R},`,"");if(zE(f)&&u!=="_self")return oI(e||"",u),new mf(null);const A=window.open(e||"",u,I);$(A,t,"popup-blocked");try{A.focus()}catch{}return new mf(A)}function oI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="__/auth/handler",aI="emulator/auth/handler",uI=encodeURIComponent("fac");async function vf(t,e,n,r,i,o){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:i};if(e instanceof Gm){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",xw(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,A]of Object.entries({}))l[I]=A}if(e instanceof Zi){const I=e.getScopes().filter(A=>A!=="");I.length>0&&(l.scopes=I.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const I of Object.keys(u))u[I]===void 0&&delete u[I];const h=await t._getAppCheckToken(),f=h?`#${uI}=${encodeURIComponent(h)}`:"";return`${cI(t)}?${Yi(u).slice(1)}${f}`}function cI({config:t}){return t.emulator?wc(t,aI):`https://${t.authDomain}/${lI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="webStorageSupport";class hI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=MS,this._overrideRedirectResult=DS}async _openPopup(e,n,r,i){var o;Ht((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await vf(e,n,r,du(),i);return sI(e,l,kc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await vf(e,n,r,du(),i);return pS(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZS(e),r=new jS(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ha,{type:ha},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ha];l!==void 0&&n(!!l),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bm()||Sc()||nl()}}const dI=hI;var yf="@firebase/auth",wf="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gI(t){It(new pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;$(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vm(t)},f=new GE(r,i,o,h);return JE(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),It(new pt("auth-internal",e=>{const n=Ic(e.getProvider("auth").getImmediate());return(r=>new fI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(yf,wf,pI(t)),nt(yf,wf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=5*60,vI=Gg("authIdTokenMaxAge")||mI;let _f=null;const yI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vI)return;const i=n==null?void 0:n.token;_f!==i&&(_f=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wI(t=dc()){const e=Jn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YE(t,{popupRedirectResolver:dI,persistence:[IS,hS,Ym]}),r=Gg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=yI(o.toString());lS(n,l,()=>l(n.currentUser)),oS(n,u=>l(u))}}const i=Hg("auth");return i&&ZE(n,`http://${i}`),n}function _I(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Et("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",_I().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gI("Browser");var Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,p){function g(){}g.prototype=p.prototype,m.D=p.prototype,m.prototype=new g,m.prototype.constructor=m,m.C=function(y,_,C){for(var v=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)v[Xe-2]=arguments[Xe];return p.prototype[_].apply(y,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var _=0;16>_;++_)y[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;16>_;++_)y[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=m.g[0],g=m.g[1],_=m.g[2];var C=m.g[3],v=p+(C^g&(_^C))+y[0]+3614090360&4294967295;p=g+(v<<7&4294967295|v>>>25),v=C+(_^p&(g^_))+y[1]+3905402710&4294967295,C=p+(v<<12&4294967295|v>>>20),v=_+(g^C&(p^g))+y[2]+606105819&4294967295,_=C+(v<<17&4294967295|v>>>15),v=g+(p^_&(C^p))+y[3]+3250441966&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(C^g&(_^C))+y[4]+4118548399&4294967295,p=g+(v<<7&4294967295|v>>>25),v=C+(_^p&(g^_))+y[5]+1200080426&4294967295,C=p+(v<<12&4294967295|v>>>20),v=_+(g^C&(p^g))+y[6]+2821735955&4294967295,_=C+(v<<17&4294967295|v>>>15),v=g+(p^_&(C^p))+y[7]+4249261313&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(C^g&(_^C))+y[8]+1770035416&4294967295,p=g+(v<<7&4294967295|v>>>25),v=C+(_^p&(g^_))+y[9]+2336552879&4294967295,C=p+(v<<12&4294967295|v>>>20),v=_+(g^C&(p^g))+y[10]+4294925233&4294967295,_=C+(v<<17&4294967295|v>>>15),v=g+(p^_&(C^p))+y[11]+2304563134&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(C^g&(_^C))+y[12]+1804603682&4294967295,p=g+(v<<7&4294967295|v>>>25),v=C+(_^p&(g^_))+y[13]+4254626195&4294967295,C=p+(v<<12&4294967295|v>>>20),v=_+(g^C&(p^g))+y[14]+2792965006&4294967295,_=C+(v<<17&4294967295|v>>>15),v=g+(p^_&(C^p))+y[15]+1236535329&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(_^C&(g^_))+y[1]+4129170786&4294967295,p=g+(v<<5&4294967295|v>>>27),v=C+(g^_&(p^g))+y[6]+3225465664&4294967295,C=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(C^p))+y[11]+643717713&4294967295,_=C+(v<<14&4294967295|v>>>18),v=g+(C^p&(_^C))+y[0]+3921069994&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^C&(g^_))+y[5]+3593408605&4294967295,p=g+(v<<5&4294967295|v>>>27),v=C+(g^_&(p^g))+y[10]+38016083&4294967295,C=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(C^p))+y[15]+3634488961&4294967295,_=C+(v<<14&4294967295|v>>>18),v=g+(C^p&(_^C))+y[4]+3889429448&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^C&(g^_))+y[9]+568446438&4294967295,p=g+(v<<5&4294967295|v>>>27),v=C+(g^_&(p^g))+y[14]+3275163606&4294967295,C=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(C^p))+y[3]+4107603335&4294967295,_=C+(v<<14&4294967295|v>>>18),v=g+(C^p&(_^C))+y[8]+1163531501&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^C&(g^_))+y[13]+2850285829&4294967295,p=g+(v<<5&4294967295|v>>>27),v=C+(g^_&(p^g))+y[2]+4243563512&4294967295,C=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(C^p))+y[7]+1735328473&4294967295,_=C+(v<<14&4294967295|v>>>18),v=g+(C^p&(_^C))+y[12]+2368359562&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(g^_^C)+y[5]+4294588738&4294967295,p=g+(v<<4&4294967295|v>>>28),v=C+(p^g^_)+y[8]+2272392833&4294967295,C=p+(v<<11&4294967295|v>>>21),v=_+(C^p^g)+y[11]+1839030562&4294967295,_=C+(v<<16&4294967295|v>>>16),v=g+(_^C^p)+y[14]+4259657740&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^C)+y[1]+2763975236&4294967295,p=g+(v<<4&4294967295|v>>>28),v=C+(p^g^_)+y[4]+1272893353&4294967295,C=p+(v<<11&4294967295|v>>>21),v=_+(C^p^g)+y[7]+4139469664&4294967295,_=C+(v<<16&4294967295|v>>>16),v=g+(_^C^p)+y[10]+3200236656&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^C)+y[13]+681279174&4294967295,p=g+(v<<4&4294967295|v>>>28),v=C+(p^g^_)+y[0]+3936430074&4294967295,C=p+(v<<11&4294967295|v>>>21),v=_+(C^p^g)+y[3]+3572445317&4294967295,_=C+(v<<16&4294967295|v>>>16),v=g+(_^C^p)+y[6]+76029189&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^C)+y[9]+3654602809&4294967295,p=g+(v<<4&4294967295|v>>>28),v=C+(p^g^_)+y[12]+3873151461&4294967295,C=p+(v<<11&4294967295|v>>>21),v=_+(C^p^g)+y[15]+530742520&4294967295,_=C+(v<<16&4294967295|v>>>16),v=g+(_^C^p)+y[2]+3299628645&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(_^(g|~C))+y[0]+4096336452&4294967295,p=g+(v<<6&4294967295|v>>>26),v=C+(g^(p|~_))+y[7]+1126891415&4294967295,C=p+(v<<10&4294967295|v>>>22),v=_+(p^(C|~g))+y[14]+2878612391&4294967295,_=C+(v<<15&4294967295|v>>>17),v=g+(C^(_|~p))+y[5]+4237533241&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~C))+y[12]+1700485571&4294967295,p=g+(v<<6&4294967295|v>>>26),v=C+(g^(p|~_))+y[3]+2399980690&4294967295,C=p+(v<<10&4294967295|v>>>22),v=_+(p^(C|~g))+y[10]+4293915773&4294967295,_=C+(v<<15&4294967295|v>>>17),v=g+(C^(_|~p))+y[1]+2240044497&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~C))+y[8]+1873313359&4294967295,p=g+(v<<6&4294967295|v>>>26),v=C+(g^(p|~_))+y[15]+4264355552&4294967295,C=p+(v<<10&4294967295|v>>>22),v=_+(p^(C|~g))+y[6]+2734768916&4294967295,_=C+(v<<15&4294967295|v>>>17),v=g+(C^(_|~p))+y[13]+1309151649&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~C))+y[4]+4149444226&4294967295,p=g+(v<<6&4294967295|v>>>26),v=C+(g^(p|~_))+y[11]+3174756917&4294967295,C=p+(v<<10&4294967295|v>>>22),v=_+(p^(C|~g))+y[2]+718787259&4294967295,_=C+(v<<15&4294967295|v>>>17),v=g+(C^(_|~p))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+p&4294967295,m.g[1]=m.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+C&4294967295}r.prototype.u=function(m,p){p===void 0&&(p=m.length);for(var g=p-this.blockSize,y=this.B,_=this.h,C=0;C<p;){if(_==0)for(;C<=g;)i(this,m,C),C+=this.blockSize;if(typeof m=="string"){for(;C<p;)if(y[_++]=m.charCodeAt(C++),_==this.blockSize){i(this,y),_=0;break}}else for(;C<p;)if(y[_++]=m[C++],_==this.blockSize){i(this,y),_=0;break}}this.h=_,this.o+=p},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var p=1;p<m.length-8;++p)m[p]=0;var g=8*this.o;for(p=m.length-8;p<m.length;++p)m[p]=g&255,g/=256;for(this.u(m),m=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)m[g++]=this.g[p]>>>y&255;return m};function o(m,p){var g=u;return Object.prototype.hasOwnProperty.call(g,m)?g[m]:g[m]=p(m)}function l(m,p){this.h=p;for(var g=[],y=!0,_=m.length-1;0<=_;_--){var C=m[_]|0;y&&C==p||(g[_]=C,y=!1)}this.g=g}var u={};function h(m){return-128<=m&&128>m?o(m,function(p){return new l([p|0],0>p?-1:0)}):new l([m|0],0>m?-1:0)}function f(m){if(isNaN(m)||!isFinite(m))return A;if(0>m)return b(f(-m));for(var p=[],g=1,y=0;m>=g;y++)p[y]=m/g|0,g*=4294967296;return new l(p,0)}function I(m,p){if(m.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(m.charAt(0)=="-")return b(I(m.substring(1),p));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=A,_=0;_<m.length;_+=8){var C=Math.min(8,m.length-_),v=parseInt(m.substring(_,_+C),p);8>C?(C=f(Math.pow(p,C)),y=y.j(C).add(f(v))):(y=y.j(g),y=y.add(f(v)))}return y}var A=h(0),k=h(1),O=h(16777216);t=l.prototype,t.m=function(){if(D(this))return-b(this).m();for(var m=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);m+=(0<=y?y:4294967296+y)*p,p*=4294967296}return m},t.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(D(this))return"-"+b(this).toString(m);for(var p=f(Math.pow(m,6)),g=this,y="";;){var _=N(g,p).g;g=E(g,_.j(p));var C=((0<g.g.length?g.g[0]:g.h)>>>0).toString(m);if(g=_,R(g))return C+y;for(;6>C.length;)C="0"+C;y=C+y}},t.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var p=0;p<m.g.length;p++)if(m.g[p]!=0)return!1;return!0}function D(m){return m.h==-1}t.l=function(m){return m=E(this,m),D(m)?-1:R(m)?0:1};function b(m){for(var p=m.g.length,g=[],y=0;y<p;y++)g[y]=~m.g[y];return new l(g,~m.h).add(k)}t.abs=function(){return D(this)?b(this):this},t.add=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0,_=0;_<=p;_++){var C=y+(this.i(_)&65535)+(m.i(_)&65535),v=(C>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);y=v>>>16,C&=65535,v&=65535,g[_]=v<<16|C}return new l(g,g[g.length-1]&-2147483648?-1:0)};function E(m,p){return m.add(b(p))}t.j=function(m){if(R(this)||R(m))return A;if(D(this))return D(m)?b(this).j(b(m)):b(b(this).j(m));if(D(m))return b(this.j(b(m)));if(0>this.l(O)&&0>m.l(O))return f(this.m()*m.m());for(var p=this.g.length+m.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<m.g.length;_++){var C=this.i(y)>>>16,v=this.i(y)&65535,Xe=m.i(_)>>>16,kn=m.i(_)&65535;g[2*y+2*_]+=v*kn,w(g,2*y+2*_),g[2*y+2*_+1]+=C*kn,w(g,2*y+2*_+1),g[2*y+2*_+1]+=v*Xe,w(g,2*y+2*_+1),g[2*y+2*_+2]+=C*Xe,w(g,2*y+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function w(m,p){for(;(m[p]&65535)!=m[p];)m[p+1]+=m[p]>>>16,m[p]&=65535,p++}function S(m,p){this.g=m,this.h=p}function N(m,p){if(R(p))throw Error("division by zero");if(R(m))return new S(A,A);if(D(m))return p=N(b(m),p),new S(b(p.g),b(p.h));if(D(p))return p=N(m,b(p)),new S(b(p.g),p.h);if(30<m.g.length){if(D(m)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var g=k,y=p;0>=y.l(m);)g=U(g),y=U(y);var _=j(g,1),C=j(y,1);for(y=j(y,2),g=j(g,2);!R(y);){var v=C.add(y);0>=v.l(m)&&(_=_.add(g),C=v),y=j(y,1),g=j(g,1)}return p=E(m,_.j(p)),new S(_,p)}for(_=A;0<=m.l(p);){for(g=Math.max(1,Math.floor(m.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),C=f(g),v=C.j(p);D(v)||0<v.l(m);)g-=y,C=f(g),v=C.j(p);R(C)&&(C=k),_=_.add(C),m=E(m,v)}return new S(_,m)}t.A=function(m){return N(this,m).h},t.and=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&m.i(y);return new l(g,this.h&m.h)},t.or=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|m.i(y);return new l(g,this.h|m.h)},t.xor=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^m.i(y);return new l(g,this.h^m.h)};function U(m){for(var p=m.g.length+1,g=[],y=0;y<p;y++)g[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(g,m.h)}function j(m,p){var g=p>>5;p%=32;for(var y=m.g.length-g,_=[],C=0;C<y;C++)_[C]=0<p?m.i(C+g)>>>p|m.i(C+g+1)<<32-p:m.i(C+g);return new l(_,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=I,iv=l}).apply(typeof Ef<"u"?Ef:typeof self<"u"?self:typeof window<"u"?window:{});var Fs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fs=="object"&&Fs];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=n(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var T=s[d];if(!(T in c))break e;c=c[T]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,T={next:function(){if(!d&&c<s.length){var P=c++;return{value:a(P,s[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function I(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function k(s,a,c){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,k.apply(null,arguments)}function O(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function R(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,T,P){for(var M=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)M[Y-2]=arguments[Y];return a.prototype[T].apply(d,M)}}function D(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function b(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const T=s.length||0,P=d.length||0;s.length=T+P;for(let M=0;M<P;M++)s[T+M]=d[M]}else s.push(d)}}class E{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function w(s){return/^[\s\xa0]*$/.test(s)}function S(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function N(s){return N[" "](s),s}N[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function m(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(c in d)s[c]=d[c];for(let P=0;P<g.length;P++)c=g[P],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function _(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function C(s){u.setTimeout(()=>{throw s},0)}function v(){var s=B;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Xe{constructor(){this.h=this.g=null}add(a,c){const d=kn.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var kn=new E(()=>new Vr,s=>s.reset());class Vr{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,F=!1,B=new Xe,V=()=>{const s=u.Promise.resolve(void 0);Tt=()=>{s.then(re)}};var re=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(c){C(c)}var a=kn;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}F=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var kt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Ct(s,a){if(ae.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(U){e:{try{N(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:At[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ct.aa.h.call(this)}}R(Ct,ae);var At={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),cv=0;function hv(s,a,c,d,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=T,this.key=++cv,this.da=this.fa=!1}function ns(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function rs(s){this.src=s,this.g={},this.h=0}rs.prototype.add=function(s,a,c,d,T){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var M=ol(s,a,d,T);return-1<M?(a=s[M],c||(a.fa=!1)):(a=new hv(a,this.src,P,!!d,T),a.fa=c,s.push(a)),a};function sl(s,a){var c=a.type;if(c in s.g){var d=s.g[c],T=Array.prototype.indexOf.call(d,a,void 0),P;(P=0<=T)&&Array.prototype.splice.call(d,T,1),P&&(ns(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function ol(s,a,c,d){for(var T=0;T<s.length;++T){var P=s[T];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==d)return T}return-1}var ll="closure_lm_"+(1e6*Math.random()|0),al={};function Oc(s,a,c,d,T){if(Array.isArray(a)){for(var P=0;P<a.length;P++)Oc(s,a[P],c,d,T);return null}return c=xc(c),s&&s[Pt]?s.K(a,c,f(d)?!!d.capture:!!d,T):dv(s,a,c,!1,d,T)}function dv(s,a,c,d,T,P){if(!a)throw Error("Invalid event type");var M=f(T)?!!T.capture:!!T,Y=cl(s);if(Y||(s[ll]=Y=new rs(s)),c=Y.add(a,c,d,M,P),c.proxy)return c;if(d=fv(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)kt||(T=M),T===void 0&&(T=!1),s.addEventListener(a.toString(),d,T);else if(s.attachEvent)s.attachEvent(Lc(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function fv(){function s(c){return a.call(s.src,s.listener,c)}const a=pv;return s}function Dc(s,a,c,d,T){if(Array.isArray(a))for(var P=0;P<a.length;P++)Dc(s,a[P],c,d,T);else d=f(d)?!!d.capture:!!d,c=xc(c),s&&s[Pt]?(s=s.i,a=String(a).toString(),a in s.g&&(P=s.g[a],c=ol(P,c,d,T),-1<c&&(ns(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[a],s.h--)))):s&&(s=cl(s))&&(a=s.g[a.toString()],s=-1,a&&(s=ol(a,c,d,T)),(c=-1<s?a[s]:null)&&ul(c))}function ul(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Pt])sl(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(Lc(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=cl(a))?(sl(c,s),c.h==0&&(c.src=null,a[ll]=null)):ns(s)}}}function Lc(s){return s in al?al[s]:al[s]="on"+s}function pv(s,a){if(s.da)s=!0;else{a=new Ct(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&ul(s),s=c.call(d,a)}return s}function cl(s){return s=s[ll],s instanceof rs?s:null}var hl="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(s){return typeof s=="function"?s:(s[hl]||(s[hl]=function(a){return s.handleEvent(a)}),s[hl])}function _e(){X.call(this),this.i=new rs(this),this.M=this,this.F=null}R(_e,X),_e.prototype[Pt]=!0,_e.prototype.removeEventListener=function(s,a,c,d){Dc(this,s,a,c,d)};function Oe(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new ae(a,s);else if(a instanceof ae)a.target=a.target||s;else{var T=a;a=new ae(d,s),y(a,T)}if(T=!0,c)for(var P=c.length-1;0<=P;P--){var M=a.g=c[P];T=is(M,d,!0,a)&&T}if(M=a.g=s,T=is(M,d,!0,a)&&T,T=is(M,d,!1,a)&&T,c)for(P=0;P<c.length;P++)M=a.g=c[P],T=is(M,d,!1,a)&&T}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)ns(c[d]);delete s.g[a],s.h--}}this.F=null},_e.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},_e.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function is(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,P=0;P<a.length;++P){var M=a[P];if(M&&!M.da&&M.capture==c){var Y=M.listener,me=M.ha||M.src;M.fa&&sl(s.i,M),T=Y.call(me,d)!==!1&&T}}return T&&!d.defaultPrevented}function Mc(s,a,c){if(typeof s=="function")c&&(s=k(s,c));else if(s&&typeof s.handleEvent=="function")s=k(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Uc(s){s.g=Mc(()=>{s.g=null,s.i&&(s.i=!1,Uc(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class gv extends X{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Uc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hr(s){X.call(this),this.h=s,this.g={}}R(Hr,X);var jc=[];function Fc(s){j(s.g,function(a,c){this.g.hasOwnProperty(c)&&ul(a)},s),s.g={}}Hr.prototype.N=function(){Hr.aa.N.call(this),Fc(this)},Hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dl=u.JSON.stringify,mv=u.JSON.parse,vv=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function fl(){}fl.prototype.h=null;function zc(s){return s.h||(s.h=s.i())}function yv(){}var Wr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pl(){ae.call(this,"d")}R(pl,ae);function gl(){ae.call(this,"c")}R(gl,ae);var Zn={},bc=null;function ml(){return bc=bc||new _e}Zn.La="serverreachability";function $c(s){ae.call(this,Zn.La,s)}R($c,ae);function Gr(s){const a=ml();Oe(a,new $c(a))}Zn.STAT_EVENT="statevent";function Bc(s,a){ae.call(this,Zn.STAT_EVENT,s),this.stat=a}R(Bc,ae);function De(s){const a=ml();Oe(a,new Bc(a,s))}Zn.Ma="timingevent";function Vc(s,a){ae.call(this,Zn.Ma,s),this.size=a}R(Vc,ae);function Kr(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function qr(){this.g=!0}qr.prototype.xa=function(){this.g=!1};function wv(s,a,c,d,T,P){s.info(function(){if(s.g)if(P)for(var M="",Y=P.split("&"),me=0;me<Y.length;me++){var K=Y[me].split("=");if(1<K.length){var Ee=K[0];K=K[1];var Se=Ee.split("_");M=2<=Se.length&&Se[1]=="type"?M+(Ee+"="+K+"&"):M+(Ee+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+c+`
`+M})}function _v(s,a,c,d,T,P,M){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+c+`
`+P+" "+M})}function er(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Sv(s,c)+(d?" "+d:"")})}function Ev(s,a){s.info(function(){return"TIMEOUT: "+a})}qr.prototype.info=function(){};function Sv(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<T.length;M++)T[M]=""}}}}return dl(c)}catch{return a}}var vl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yl;function ss(){}R(ss,fl),ss.prototype.g=function(){return new XMLHttpRequest},ss.prototype.i=function(){return{}},yl=new ss;function Gt(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new Hr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hc}function Hc(){this.i=null,this.g="",this.h=!1}var Wc={},wl={};function _l(s,a,c){s.L=1,s.v=us(Rt(a)),s.m=c,s.P=!0,Gc(s,null)}function Gc(s,a){s.F=Date.now(),os(s),s.A=Rt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),oh(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Hc,s.g=Th(s.j,c?a:null,!s.m),0<s.O&&(s.M=new gv(k(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(jc[0]=T.toString()),T=jc);for(var P=0;P<T.length;P++){var M=Oc(c,T[P],d||a.handleEvent,!1,a.h||a);if(!M)break;a.g[M.key]=M}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Gr(),wv(s.i,s.u,s.A,s.l,s.R,s.m)}Gt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Gt.prototype.Y=function(s){try{if(s==this.g)e:{const Se=Nt(this.g);var a=this.g.Ba();const rr=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||fh(this.g)))){this.J||Se!=4||a==7||(a==8||0>=rr?Gr(3):Gr(2)),El(this);var c=this.g.Z();this.X=c;t:if(Kc(this)){var d=fh(this.g);s="";var T=d.length,P=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Qr(this);var M="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(P&&a==T-1)});d.length=0,this.h.g+=s,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=c==200,_v(this.i,this.u,this.A,this.l,this.R,Se,c),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,me=this.g;if((Y=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Y)){var K=Y;break t}}K=null}if(c=K)er(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,c);else{this.o=!1,this.s=3,De(12),Cn(this),Qr(this);break e}}if(this.P){c=!0;let ot;for(;!this.J&&this.C<M.length;)if(ot=Tv(this,M),ot==wl){Se==4&&(this.s=4,De(14),c=!1),er(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==Wc){this.s=4,De(15),er(this.i,this.l,M,"[Invalid Chunk]"),c=!1;break}else er(this.i,this.l,ot,null),Sl(this,ot);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||M.length!=0||this.h.h||(this.s=1,De(16),c=!1),this.o=this.o&&c,!c)er(this.i,this.l,M,"[Invalid Chunked Response]"),Cn(this),Qr(this);else if(0<M.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Pl(Ee),Ee.M=!0,De(11))}}else er(this.i,this.l,M,null),Sl(this,M);Se==4&&Cn(this),this.o&&!this.J&&(Se==4?_h(this.j,this):(this.o=!1,os(this)))}else $v(this.g),c==400&&0<M.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Cn(this),Qr(this)}}}catch{}finally{}};function Kc(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Tv(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?wl:(c=Number(a.substring(c,d)),isNaN(c)?Wc:(d+=1,d+c>a.length?wl:(a=a.slice(d,d+c),s.C=d+c,a)))}Gt.prototype.cancel=function(){this.J=!0,Cn(this)};function os(s){s.S=Date.now()+s.I,qc(s,s.I)}function qc(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Kr(k(s.ba,s),a)}function El(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Gt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ev(this.i,this.A),this.L!=2&&(Gr(),De(17)),Cn(this),this.s=2,Qr(this)):qc(this,this.S-s)};function Qr(s){s.j.G==0||s.J||_h(s.j,s)}function Cn(s){El(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Fc(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Sl(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Il(c.h,s))){if(!s.K&&Il(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)gs(c),fs(c);else break e;Al(c),De(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=Kr(k(c.Za,c),6e3));if(1>=Yc(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Pn(c,11)}else if((s.K||c.g==s)&&gs(c),!w(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let K=T[a];if(c.T=K[0],K=K[1],c.G==2)if(K[0]=="c"){c.K=K[1],c.ia=K[2];const Ee=K[3];Ee!=null&&(c.la=Ee,c.j.info("VER="+c.la));const Se=K[4];Se!=null&&(c.Aa=Se,c.j.info("SVER="+c.Aa));const rr=K[5];rr!=null&&typeof rr=="number"&&0<rr&&(d=1.5*rr,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const ot=s.g;if(ot){const ms=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var P=d.h;P.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Tl(P,P.h),P.h=null))}if(d.D){const Rl=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Rl&&(d.ya=Rl,Z(d.I,d.D,Rl))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var M=s;if(d.qa=Ih(d,d.J?d.ia:null,d.W),M.K){Jc(d.h,M);var Y=M,me=d.L;me&&(Y.I=me),Y.B&&(El(Y),os(Y)),d.g=M}else yh(d);0<c.i.length&&ps(c)}else K[0]!="stop"&&K[0]!="close"||Pn(c,7);else c.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Pn(c,7):Cl(c):K[0]!="noop"&&c.l&&c.l.ta(K),c.v=0)}}Gr(4)}catch{}}var kv=class{constructor(s,a){this.g=s,this.map=a}};function Qc(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xc(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Yc(s){return s.h?1:s.g?s.g.size:0}function Il(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Tl(s,a){s.g?s.g.add(a):s.h=a}function Jc(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Qc.prototype.cancel=function(){if(this.i=Zc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Zc(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return D(s.i)}function Cv(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function Av(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function eh(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Av(s),d=Cv(s),T=d.length,P=0;P<T;P++)a.call(void 0,d[P],c&&c[P],s)}var th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pv(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),T=null;if(0<=d){var P=s[c].substring(0,d);T=s[c].substring(d+1)}else P=s[c];a(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function An(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof An){this.h=s.h,ls(this,s.j),this.o=s.o,this.g=s.g,as(this,s.s),this.l=s.l;var a=s.i,c=new Jr;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),nh(this,c),this.m=s.m}else s&&(a=String(s).match(th))?(this.h=!1,ls(this,a[1]||"",!0),this.o=Xr(a[2]||""),this.g=Xr(a[3]||"",!0),as(this,a[4]),this.l=Xr(a[5]||"",!0),nh(this,a[6]||"",!0),this.m=Xr(a[7]||"")):(this.h=!1,this.i=new Jr(null,this.h))}An.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Yr(a,rh,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Yr(a,rh,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Yr(c,c.charAt(0)=="/"?Ov:Nv,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Yr(c,Lv)),s.join("")};function Rt(s){return new An(s)}function ls(s,a,c){s.j=c?Xr(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function as(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function nh(s,a,c){a instanceof Jr?(s.i=a,xv(s.i,s.h)):(c||(a=Yr(a,Dv)),s.i=new Jr(a,s.h))}function Z(s,a,c){s.i.set(a,c)}function us(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Xr(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Yr(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Rv),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Rv(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var rh=/[#\/\?@]/g,Nv=/[#\?:]/g,Ov=/[#\?]/g,Dv=/[#\?@]/g,Lv=/#/g;function Jr(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Kt(s){s.g||(s.g=new Map,s.h=0,s.i&&Pv(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=Jr.prototype,t.add=function(s,a){Kt(this),this.i=null,s=tr(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function ih(s,a){Kt(s),a=tr(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function sh(s,a){return Kt(s),a=tr(s,a),s.g.has(a)}t.forEach=function(s,a){Kt(this),this.g.forEach(function(c,d){c.forEach(function(T){s.call(a,T,d,this)},this)},this)},t.na=function(){Kt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const T=s[d];for(let P=0;P<T.length;P++)c.push(a[d])}return c},t.V=function(s){Kt(this);let a=[];if(typeof s=="string")sh(this,s)&&(a=a.concat(this.g.get(tr(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},t.set=function(s,a){return Kt(this),this.i=null,s=tr(this,s),sh(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},t.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function oh(s,a,c){ih(s,a),0<c.length&&(s.i=null,s.g.set(tr(s,a),D(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const P=encodeURIComponent(String(d)),M=this.V(d);for(d=0;d<M.length;d++){var T=P;M[d]!==""&&(T+="="+encodeURIComponent(String(M[d]))),s.push(T)}}return this.i=s.join("&")};function tr(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function xv(s,a){a&&!s.j&&(Kt(s),s.i=null,s.g.forEach(function(c,d){var T=d.toLowerCase();d!=T&&(ih(this,d),oh(this,T,c))},s)),s.j=a}function Mv(s,a){const c=new qr;if(u.Image){const d=new Image;d.onload=O(qt,c,"TestLoadImage: loaded",!0,a,d),d.onerror=O(qt,c,"TestLoadImage: error",!1,a,d),d.onabort=O(qt,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=O(qt,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Uv(s,a){const c=new qr,d=new AbortController,T=setTimeout(()=>{d.abort(),qt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(P=>{clearTimeout(T),P.ok?qt(c,"TestPingServer: ok",!0,a):qt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),qt(c,"TestPingServer: error",!1,a)})}function qt(s,a,c,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(c)}catch{}}function jv(){this.g=new vv}function Fv(s,a,c){const d=c||"";try{eh(s,function(T,P){let M=T;f(T)&&(M=dl(T)),a.push(d+P+"="+encodeURIComponent(M))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function cs(s){this.l=s.Ub||null,this.j=s.eb||!1}R(cs,fl),cs.prototype.g=function(){return new hs(this.l,this.j)},cs.prototype.i=function(s){return function(){return s}}({});function hs(s,a){_e.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(hs,_e),t=hs.prototype,t.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,ei(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zr(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lh(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function lh(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Zr(this):ei(this),this.readyState==3&&lh(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,Zr(this))},t.Qa=function(s){this.g&&(this.response=s,Zr(this))},t.ga=function(){this.g&&Zr(this)};function Zr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ei(s)}t.setRequestHeader=function(s,a){this.u.append(s,a)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function ei(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function ah(s){let a="";return j(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function kl(s,a,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=ah(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Z(s,a,c))}function ue(s){_e.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ue,_e);var zv=/^https?$/i,bv=["POST","PUT"];t=ue.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yl.g(),this.v=this.o?zc(this.o):zc(yl),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(P){uh(this,P);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)c.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())c.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(bv,a,void 0))||d||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of c)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dh(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){uh(this,P)}};function uh(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ch(s),ds(s)}function ch(s){s.A||(s.A=!0,Oe(s,"complete"),Oe(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Oe(this,"complete"),Oe(this,"abort"),ds(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ds(this,!0)),ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hh(this):this.bb())},t.bb=function(){hh(this)};function hh(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)Mc(s.Ea,0,s);else if(Oe(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const M=s.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var d;if(d=M===0){var T=String(s.D).match(th)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),d=!zv.test(T?T.toLowerCase():"")}c=d}if(c)Oe(s,"complete"),Oe(s,"success");else{s.m=6;try{var P=2<Nt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",ch(s)}}finally{ds(s)}}}}function ds(s,a){if(s.g){dh(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Oe(s,"ready");try{c.onreadystatechange=d}catch{}}}function dh(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),mv(a)}};function fh(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function $v(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(w(s[d]))continue;var c=_(s[d]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[T]||[];a[T]=P,P.push(c)}m(a,function(d){return d.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ti(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function ph(s){this.Aa=0,this.i=[],this.j=new qr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ti("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ti("baseRetryDelayMs",5e3,s),this.cb=ti("retryDelaySeedMs",1e4,s),this.Wa=ti("forwardChannelMaxRetries",2,s),this.wa=ti("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Qc(s&&s.concurrentRequestLimit),this.Da=new jv,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ph.prototype,t.la=8,t.G=1,t.connect=function(s,a,c,d){De(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Ih(this,null,this.W),ps(this)};function Cl(s){if(gh(s),s.G==3){var a=s.U++,c=Rt(s.I);if(Z(c,"SID",s.K),Z(c,"RID",a),Z(c,"TYPE","terminate"),ni(s,c),a=new Gt(s,s.j,a),a.L=2,a.v=us(Rt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Th(a.j,null),a.g.ea(a.v)),a.F=Date.now(),os(a)}Sh(s)}function fs(s){s.g&&(Pl(s),s.g.cancel(),s.g=null)}function gh(s){fs(s),s.u&&(u.clearTimeout(s.u),s.u=null),gs(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function ps(s){if(!Xc(s.h)&&!s.s){s.s=!0;var a=s.Ga;Tt||V(),F||(Tt(),F=!0),B.add(a,s),s.B=0}}function Bv(s,a){return Yc(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Kr(k(s.Ga,s,a),Eh(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Gt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=p(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=vh(this,T,a),c=Rt(this.I),Z(c,"RID",s),Z(c,"CVER",22),this.D&&Z(c,"X-HTTP-Session-Id",this.D),ni(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(ah(P)))+"&"+a:this.m&&kl(c,this.m,P)),Tl(this.h,T),this.Ua&&Z(c,"TYPE","init"),this.P?(Z(c,"$req",a),Z(c,"SID","null"),T.T=!0,_l(T,c,null)):_l(T,c,a),this.G=2}}else this.G==3&&(s?mh(this,s):this.i.length==0||Xc(this.h)||mh(this))};function mh(s,a){var c;a?c=a.l:c=s.U++;const d=Rt(s.I);Z(d,"SID",s.K),Z(d,"RID",c),Z(d,"AID",s.T),ni(s,d),s.m&&s.o&&kl(d,s.m,s.o),c=new Gt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=vh(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Tl(s.h,c),_l(c,d,a)}function ni(s,a){s.H&&j(s.H,function(c,d){Z(a,d,c)}),s.l&&eh({},function(c,d){Z(a,d,c)})}function vh(s,a,c){c=Math.min(s.i.length,c);var d=s.l?k(s.l.Na,s.l,s):null;e:{var T=s.i;let P=-1;for(;;){const M=["count="+c];P==-1?0<c?(P=T[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let Y=!0;for(let me=0;me<c;me++){let K=T[me].g;const Ee=T[me].map;if(K-=P,0>K)P=Math.max(0,T[me].g-100),Y=!1;else try{Fv(Ee,M,"req"+K+"_")}catch{d&&d(Ee)}}if(Y){d=M.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,d}function yh(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Tt||V(),F||(Tt(),F=!0),B.add(a,s),s.v=0}}function Al(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Kr(k(s.Fa,s),Eh(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,wh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Kr(k(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),fs(this),wh(this))};function Pl(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function wh(s){s.g=new Gt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Rt(s.qa);Z(a,"RID","rpc"),Z(a,"SID",s.K),Z(a,"AID",s.T),Z(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(a,"TO",s.ja),Z(a,"TYPE","xmlhttp"),ni(s,a),s.m&&s.o&&kl(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=us(Rt(a)),c.m=null,c.P=!0,Gc(c,s)}t.Za=function(){this.C!=null&&(this.C=null,fs(this),Al(this),De(19))};function gs(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function _h(s,a){var c=null;if(s.g==a){gs(s),Pl(s),s.g=null;var d=2}else if(Il(s.h,a))c=a.D,Jc(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;d=ml(),Oe(d,new Vc(d,c)),ps(s)}else yh(s);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&Bv(s,a)||d==2&&Al(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Pn(s,5);break;case 4:Pn(s,10);break;case 3:Pn(s,6);break;default:Pn(s,2)}}}function Eh(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Pn(s,a){if(s.j.info("Error code "+a),a==2){var c=k(s.fb,s),d=s.Xa;const T=!d;d=new An(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ls(d,"https"),us(d),T?Mv(d.toString(),c):Uv(d.toString(),c)}else De(2);s.G=0,s.l&&s.l.sa(a),Sh(s),gh(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Sh(s){if(s.G=0,s.ka=[],s.l){const a=Zc(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,D(s.i),s.i.length=0),s.l.ra()}}function Ih(s,a,c){var d=c instanceof An?Rt(c):new An(c);if(d.g!="")a&&(d.g=a+"."+d.g),as(d,d.s);else{var T=u.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var P=new An(null);d&&ls(P,d),a&&(P.g=a),T&&as(P,T),c&&(P.l=c),d=P}return c=s.D,a=s.ya,c&&a&&Z(d,c,a),Z(d,"VER",s.la),ni(s,d),d}function Th(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ue(new cs({eb:c})):new ue(s.pa),a.Ha(s.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kh(){}t=kh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ye(s,a){_e.call(this),this.g=new ph(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!w(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!w(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new nr(this)}R(Ye,_e),Ye.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ye.prototype.close=function(){Cl(this.g)},Ye.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=dl(s),s=c);a.i.push(new kv(a.Ya++,s)),a.G==3&&ps(a)},Ye.prototype.N=function(){this.g.l=null,delete this.j,Cl(this.g),delete this.g,Ye.aa.N.call(this)};function Ch(s){pl.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}R(Ch,pl);function Ah(){gl.call(this),this.status=1}R(Ah,gl);function nr(s){this.g=s}R(nr,kh),nr.prototype.ua=function(){Oe(this.g,"a")},nr.prototype.ta=function(s){Oe(this.g,new Ch(s))},nr.prototype.sa=function(s){Oe(this.g,new Ah)},nr.prototype.ra=function(){Oe(this.g,"b")},Ye.prototype.send=Ye.prototype.o,Ye.prototype.open=Ye.prototype.m,Ye.prototype.close=Ye.prototype.close,vl.NO_ERROR=0,vl.TIMEOUT=8,vl.HTTP_ERROR=6,Iv.COMPLETE="complete",yv.EventType=Wr,Wr.OPEN="a",Wr.CLOSE="b",Wr.ERROR="c",Wr.MESSAGE="d",_e.prototype.listen=_e.prototype.K,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha}).apply(typeof Fs<"u"?Fs:typeof self<"u"?self:typeof window<"u"?window:{});const Sf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Zo("@firebase/firestore");function He(t,...e){if(jr.logLevel<=q.DEBUG){const n=e.map(Pc);jr.debug(`Firestore (${ts}): ${t}`,...n)}}function Ac(t,...e){if(jr.logLevel<=q.ERROR){const n=e.map(Pc);jr.error(`Firestore (${ts}): ${t}`,...n)}}function EI(t,...e){if(jr.logLevel<=q.WARN){const n=e.map(Pc);jr.warn(`Firestore (${ts}): ${t}`,...n)}}function Pc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw Ac(e),new Error(e)}function gu(t,e){t||Rc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pe extends gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class II{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TI{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{He("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(He("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pr)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(He("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(gu(typeof r.accessToken=="string"),new sv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return gu(e===null||typeof e=="string"),new ke(e)}}class kI{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new kI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&He("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,He("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{He("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):He("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(gu(typeof n.token=="string"),this.R=n.token,new AI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RI(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ov(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r,i,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=f}}class Mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var If,W;(W=If||(If={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new iv([4294967295,4294967295],0);function da(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&He("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const l=Date.now()+r,u=new Nc(e,n,l,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Pe(Ae.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function LI(t,e){if(Ac("AsyncQueue",`${e}: ${t}`),ov(t))return new Pe(Ae.UNAVAILABLE,`${e}: ${t}`);throw t}var Tf,kf;(kf=Tf||(Tf={})).J_="default",kf.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=NI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{He("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(He("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pe(Ae.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=LI(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;function MI(t,e,n,r){if(e===!0&&r===!0)throw new Pe(Ae.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function UI(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Rc()}function jI(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Pe(Ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=UI(t);throw new Pe(Ae.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Pe(Ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Pe(Ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Pe(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Pe(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Pe(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class av{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pe(Ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Pe(Ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SI;switch(r.type){case"firstParty":return new CI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Pe(Ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cf.get(n);r&&(He("ComponentProvider","Removing Datastore"),Cf.delete(n),r.terminate())}(this),Promise.resolve()}}function FI(t,e,n,r={}){var i;const o=(t=jI(t,av))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&EI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=ke.MOCK_USER;else{u=Cw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Pe(Ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new ke(f)}t._authCredentials=new II(new sv(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new DI(this,"async_queue_retry"),this.hu=()=>{const n=da();n&&He("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=da();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=da();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Pr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ov(e))throw e;He("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Ac("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Nc.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&Rc()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class bI extends av{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new zI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||BI(this),this._firestoreClient.terminate()}}function $I(t,e){const n=typeof t=="object"?t:dc(),r=typeof t=="string"?t:"(default)",i=Jn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Tw("firestore");o&&FI(i,...o)}return i}function BI(t){var e,n,r;const i=t._freezeSettings(),o=function(u,h,f,I){return new OI(u,h,f,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,lv(I.experimentalLongPollingOptions),I.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new xI(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){ts=i})($r),It(new pt("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new bI(new TI(r.getProvider("auth-internal")),new PI(r.getProvider("app-check-internal")),function(f,I){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Pe(Ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(f.options.projectId,I)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),nt(Sf,"4.6.4",e),nt(Sf,"4.6.4","esm2017")})();const VI={apiKey:"AIzaSyAags0zeuWO7Ss7Nahdn72KJu5PtrGz4GQ",authDomain:"kite-hacks.firebaseapp.com",projectId:"kite-hacks",storageBucket:"kite-hacks.appspot.com",messagingSenderId:"499816998445",appId:"1:499816998445:web:88cd530ad1e5aefbe8baa4",measurementId:"G-L5M0GQS19Y"},uv=Zg(VI);yE(uv);wI();$I(uv);function HI(t,e,n,r){function i(o){return o instanceof n?o:new n(function(l){l(o)})}return new(n||(n=Promise))(function(o,l){function u(I){try{f(r.next(I))}catch(A){l(A)}}function h(I){try{f(r.throw(I))}catch(A){l(A)}}function f(I){I.done?o(I.value):i(I.value).then(u,h)}f((r=r.apply(t,[])).next())})}function WI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var GI=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,o;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(o=Object.keys(e),r=o.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,o[i]))return!1;for(i=r;i--!==0;){var l=o[i];if(!t(e[l],n[l]))return!1}return!0}return e!==e&&n!==n},KI=WI(GI);const Pf="__googleMapsScriptId";var yr;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(yr||(yr={}));class Dn{constructor({apiKey:e,authReferrerPolicy:n,channel:r,client:i,id:o=Pf,language:l,libraries:u=[],mapIds:h,nonce:f,region:I,retries:A=3,url:k="https://maps.googleapis.com/maps/api/js",version:O}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=n,this.channel=r,this.client=i,this.id=o||Pf,this.language=l,this.libraries=u,this.mapIds=h,this.nonce=f,this.region=I,this.retries=A,this.url=k,this.version=O,Dn.instance){if(!KI(this.options,Dn.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Dn.instance.options)}`);return Dn.instance}Dn.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?yr.FAILURE:this.done?yr.SUCCESS:this.loading?yr.LOADING:yr.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,n)=>{this.loadCallback(r=>{r?n(r.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,n;if(document.getElementById(this.id)){this.callback();return}const r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(o=>!r[o]&&delete r[o]),!((n=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||n===void 0)&&n.importLibrary||(o=>{let l,u,h,f="The Google Maps JavaScript API",I="google",A="importLibrary",k="__ib__",O=document,R=window;R=R[I]||(R[I]={});const D=R.maps||(R.maps={}),b=new Set,E=new URLSearchParams,w=()=>l||(l=new Promise((S,N)=>HI(this,void 0,void 0,function*(){var U;yield u=O.createElement("script"),u.id=this.id,E.set("libraries",[...b]+"");for(h in o)E.set(h.replace(/[A-Z]/g,j=>"_"+j[0].toLowerCase()),o[h]);E.set("callback",I+".maps."+k),u.src=this.url+"?"+E,D[k]=S,u.onerror=()=>l=N(Error(f+" could not load.")),u.nonce=this.nonce||((U=O.querySelector("script[nonce]"))===null||U===void 0?void 0:U.nonce)||"",O.head.append(u)})));D[A]?console.warn(f+" only loads once. Ignoring:",o):D[A]=(S,...N)=>b.add(S)&&w().then(()=>D[A](S,...N))})(r);const i=this.libraries.map(o=>this.importLibrary(o));i.length||i.push(this.importLibrary("core")),Promise.all(i).then(()=>this.callback(),o=>{const l=new ErrorEvent("error",{error:o});this.loadErrorCallback(l)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const n=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${n} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}new Dn({apiKey:"AIzaSyDke7TnWgeC1dt3gJtlucR5oHizjjSeVHE",version:"weekly"});const qI=()=>x.jsx("div",{className:"hero-container",children:x.jsx("div",{className:"hero-bg",children:x.jsxs("div",{className:"hero-content-container",children:[x.jsx("h1",{children:"EVERYONE DESERVES TO EAT"}),x.jsxs("div",{className:"hero-cta",children:[x.jsx("p",{children:"Help solve our worldwide food distribution crisis today"}),x.jsx("button",{children:"Start Helping"})]})]})})}),QI=()=>x.jsx("div",{className:"mission-section-wrapper",id:"mission",children:x.jsxs("section",{className:"mission-container",children:[x.jsx("div",{class:"custom-shape-divider-top-1722479496",children:x.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:x.jsx("path",{d:"M649.97 0L550.03 0 599.91 54.12 649.97 0z",class:"shape-fill"})})}),x.jsx("div",{className:"mission-img-container",children:x.jsx("img",{src:"src\\assets\\images\\missionpic.jpg"})}),x.jsxs("div",{className:"mission-text-container",children:[x.jsx("h1",{children:"Our Mission"}),x.jsx("p",{children:"At [Your WebApp Name], we aim to create a more equitable and sustainable food distribution system. We strive to bridge the gap between surplus food from local businesses—such as restaurants and grocery stores—and the critical needs of food donation centers, homeless shelters, and food banks in our communities."})]})]})}),XI=()=>x.jsx("div",{className:"impact-bg",id:"impact",children:x.jsxs("section",{className:"impact-container",children:[x.jsx("h1",{children:"Our Impact"}),x.jsxs("div",{className:"impact-card-container",children:[x.jsxs("div",{className:"impact-card",id:"card1",children:[x.jsx("h1",{children:"Helping the Climate"}),x.jsx("p",{children:"Food waste accounts for about 8-10% of global greenhouse gas emissions. Reducing food waste could mitigate up to 4.4 gigatons of CO2 equivalent annually."})]}),x.jsxs("div",{className:"impact-card",id:"card2",children:[x.jsx("h1",{children:"Solving the food crisis"}),x.jsx("p",{children:"In developed countries, up to 40% of food is wasted, which, if redistributed, could feed around 2 billion people , more than twice the number of undernourished individuals worldwide."})]}),x.jsxs("div",{className:"impact-card",id:"card3",children:[x.jsx("h1",{children:"The Price of Food Waste"}),x.jsx("p",{children:"The annual economic cost of food waste is estimated to be about $1 trillion globally. Reducing food waste through efficient distribution can save substantial amounts of money for businesses and governments."})]})]})]})}),YI=()=>x.jsx("div",{className:"contact-bg",id:"contact",children:x.jsxs("section",{className:"contact-container",children:[x.jsxs("div",{className:"contact-info-container",children:[x.jsx("h1",{children:"Get In Contact"}),x.jsx("p",{children:"Got questions or having any issues? Get in contact with us!"}),x.jsxs("div",{className:"contact-option",children:[x.jsx("img",{className:"contact-icon",src:"src\\assets\\icons\\email.png"}),x.jsx("p",{children:"contact.us.food4everyone@gmail.com"})]}),x.jsxs("div",{className:"contact-option",children:[x.jsx("img",{className:"contact-icon",src:"src\\assets\\icons\\phone.png"}),x.jsx("p",{children:"(609) 813-0834"})]})]}),x.jsxs("div",{className:"contact-form-container",children:[x.jsx("h1",{children:"Write Us A Message"}),x.jsxs("form",{action:"https://api.web3forms.com/submit",method:"POST",children:[x.jsx("input",{type:"hidden",name:"access_key",value:"43bee1f5-97cf-4b22-bd84-d85663d1d921"}),x.jsxs("div",{className:"contact-input",children:[x.jsx("p",{children:"Email"}),x.jsx("input",{type:"email",name:"email",placeholder:"Enter your email"})]}),x.jsxs("div",{className:"contact-input",children:[x.jsx("p",{children:"Name"}),x.jsx("input",{name:"name",placeholder:"Enter a name"})]}),x.jsxs("div",{className:"contact-input",children:[x.jsx("p",{children:"Message"}),x.jsx("textarea",{name:"message",placeholder:"Write a message",rows:4})]}),x.jsx("div",{className:"contact-submit-container",children:x.jsx("button",{type:"submit",children:"Send"})})]})]})]})}),JI=()=>{const[t,e]=jo.useState(!1),n=()=>{e(!t)};return x.jsxs("div",{className:"header-container",children:[x.jsxs("ul",{className:"header-sitemap",children:[x.jsx("li",{children:x.jsx("a",{href:"#mission",children:"Mission"})}),x.jsx("li",{children:x.jsx("a",{href:"#impact",children:"Impact"})}),x.jsx("li",{children:x.jsx("a",{href:"#contact",children:"Contact"})})]}),x.jsxs("div",{className:`sidebar ${t?"Open":""}`,children:[x.jsx("a",{href:"#mission",onClick:n,children:"MISSION"}),x.jsx("a",{href:"#impact",onClick:n,children:"STORY"}),x.jsx("a",{href:"#contact",onClick:n,children:"STATS"}),x.jsx("button",{onClick:n,children:x.jsx("img",{src:"src\\assets\\icons\\close.png",alt:"close"})})]}),x.jsx("button",{className:"header-menu",onClick:n,children:x.jsx("img",{src:"src\\assets\\icons\\menu.png",alt:"menu"})})]})},ZI=()=>x.jsxs(x.Fragment,{children:[x.jsx(JI,{}),x.jsx(qI,{}),x.jsx(QI,{}),x.jsx(XI,{}),x.jsx(YI,{})]});function eT(){return x.jsx(x.Fragment,{children:x.jsx(ZI,{})})}fa.createRoot(document.getElementById("root")).render(x.jsx(sy.StrictMode,{children:x.jsx(eT,{})}));
