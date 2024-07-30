(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $v(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cf={exports:{}},xo={},Af={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),Bv=Symbol.for("react.portal"),Vv=Symbol.for("react.fragment"),bv=Symbol.for("react.strict_mode"),Hv=Symbol.for("react.profiler"),Wv=Symbol.for("react.provider"),Gv=Symbol.for("react.context"),Kv=Symbol.for("react.forward_ref"),qv=Symbol.for("react.suspense"),Qv=Symbol.for("react.memo"),Xv=Symbol.for("react.lazy"),Ch=Symbol.iterator;function Yv(e){return e===null||typeof e!="object"?null:(e=Ch&&e[Ch]||e["@@iterator"],typeof e=="function"?e:null)}var Pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rf=Object.assign,Nf={};function Ur(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Pf}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Of(){}Of.prototype=Ur.prototype;function fu(e,t,n){this.props=e,this.context=t,this.refs=Nf,this.updater=n||Pf}var pu=fu.prototype=new Of;pu.constructor=fu;Rf(pu,Ur.prototype);pu.isPureReactComponent=!0;var Ah=Array.isArray,Df=Object.prototype.hasOwnProperty,gu={current:null},Lf={key:!0,ref:!0,__self:!0,__source:!0};function xf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Df.call(t,r)&&!Lf.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var h=Array(u),p=0;p<u;p++)h[p]=arguments[p+2];i.children=h}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Hi,type:e,key:o,ref:l,props:i,_owner:gu.current}}function Jv(e,t){return{$$typeof:Hi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hi}function Zv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ph=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zv(""+e.key):t.toString(36)}function Fs(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Hi:case Bv:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+Al(l,0):r,Ah(i)?(n="",e!=null&&(n=e.replace(Ph,"$&/")+"/"),Fs(i,t,n,"",function(p){return p})):i!=null&&(mu(i)&&(i=Jv(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Ph,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Ah(e))for(var u=0;u<e.length;u++){o=e[u];var h=r+Al(o,u);l+=Fs(o,t,n,h,i)}else if(h=Yv(e),typeof h=="function")for(e=h.call(e),u=0;!(o=e.next()).done;)o=o.value,h=r+Al(o,u++),l+=Fs(o,t,n,h,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function gs(e,t,n){if(e==null)return e;var r=[],i=0;return Fs(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},js={transition:null},ty={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:js,ReactCurrentOwner:gu};function Mf(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:gs,forEach:function(e,t,n){gs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gs(e,function(){t++}),t},toArray:function(e){return gs(e,function(t){return t})||[]},only:function(e){if(!mu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=Ur;b.Fragment=Vv;b.Profiler=Hv;b.PureComponent=fu;b.StrictMode=bv;b.Suspense=qv;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ty;b.act=Mf;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Rf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=gu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(h in t)Df.call(t,h)&&!Lf.hasOwnProperty(h)&&(r[h]=t[h]===void 0&&u!==void 0?u[h]:t[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){u=Array(h);for(var p=0;p<h;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:Hi,type:e.type,key:i,ref:o,props:r,_owner:l}};b.createContext=function(e){return e={$$typeof:Gv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wv,_context:e},e.Consumer=e};b.createElement=xf;b.createFactory=function(e){var t=xf.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:Kv,render:e}};b.isValidElement=mu;b.lazy=function(e){return{$$typeof:Xv,_payload:{_status:-1,_result:e},_init:ey}};b.memo=function(e,t){return{$$typeof:Qv,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=js.transition;js.transition={};try{e()}finally{js.transition=t}};b.unstable_act=Mf;b.useCallback=function(e,t){return xe.current.useCallback(e,t)};b.useContext=function(e){return xe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};b.useEffect=function(e,t){return xe.current.useEffect(e,t)};b.useId=function(){return xe.current.useId()};b.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return xe.current.useMemo(e,t)};b.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};b.useRef=function(e){return xe.current.useRef(e)};b.useState=function(e){return xe.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return xe.current.useTransition()};b.version="18.3.1";Af.exports=b;var vu=Af.exports;const ny=$v(vu);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=vu,iy=Symbol.for("react.element"),sy=Symbol.for("react.fragment"),oy=Object.prototype.hasOwnProperty,ly=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ay={key:!0,ref:!0,__self:!0,__source:!0};function Uf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)oy.call(t,r)&&!ay.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iy,type:e,key:o,ref:l,props:i,_owner:ly.current}}xo.Fragment=sy;xo.jsx=Uf;xo.jsxs=Uf;Cf.exports=xo;var vt=Cf.exports,ca={},Ff={exports:{}},Ke={},jf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,B){var V=F.length;F.push(B);e:for(;0<V;){var ne=V-1>>>1,Q=F[ne];if(0<i(Q,B))F[ne]=B,F[V]=Q,V=ne;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var B=F[0],V=F.pop();if(V!==B){F[0]=V;e:for(var ne=0,Q=F.length,le=Q>>>1;ne<le;){var kt=2*(ne+1)-1,Ct=F[kt],At=kt+1,Pt=F[At];if(0>i(Ct,V))At<Q&&0>i(Pt,Ct)?(F[ne]=Pt,F[At]=V,ne=At):(F[ne]=Ct,F[kt]=V,ne=kt);else if(At<Q&&0>i(Pt,V))F[ne]=Pt,F[At]=V,ne=At;else break e}}return B}function i(F,B){var V=F.sortIndex-B.sortIndex;return V!==0?V:F.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();e.unstable_now=function(){return l.now()-u}}var h=[],p=[],k=1,A=null,C=3,O=!1,R=!1,L=!1,z=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(F){for(var B=n(p);B!==null;){if(B.callback===null)r(p);else if(B.startTime<=F)r(p),B.sortIndex=B.expirationTime,t(h,B);else break;B=n(p)}}function N(F){if(L=!1,S(F),!R)if(n(h)!==null)R=!0,Br(M);else{var B=n(p);B!==null&&Tt(N,B.startTime-F)}}function M(F,B){R=!1,L&&(L=!1,E(f),f=-1),O=!0;var V=C;try{for(S(B),A=n(h);A!==null&&(!(A.expirationTime>B)||F&&!_());){var ne=A.callback;if(typeof ne=="function"){A.callback=null,C=A.priorityLevel;var Q=ne(A.expirationTime<=B);B=e.unstable_now(),typeof Q=="function"?A.callback=Q:A===n(h)&&r(h),S(B)}else r(h);A=n(h)}if(A!==null)var le=!0;else{var kt=n(p);kt!==null&&Tt(N,kt.startTime-B),le=!1}return le}finally{A=null,C=V,O=!1}}var U=!1,m=null,f=-1,g=5,y=-1;function _(){return!(e.unstable_now()-y<g)}function T(){if(m!==null){var F=e.unstable_now();y=F;var B=!0;try{B=m(!0,F)}finally{B?v():(U=!1,m=null)}}else U=!1}var v;if(typeof w=="function")v=function(){w(T)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,kn=Qe.port2;Qe.port1.onmessage=T,v=function(){kn.postMessage(null)}}else v=function(){z(T,0)};function Br(F){m=F,U||(U=!0,v())}function Tt(F,B){f=z(function(){F(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){R||O||(R=!0,Br(M))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(F){switch(C){case 1:case 2:case 3:var B=3;break;default:B=C}var V=C;C=B;try{return F()}finally{C=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,B){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var V=C;C=F;try{return B()}finally{C=V}},e.unstable_scheduleCallback=function(F,B,V){var ne=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ne+V:ne):V=ne,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=V+Q,F={id:k++,callback:B,priorityLevel:F,startTime:V,expirationTime:Q,sortIndex:-1},V>ne?(F.sortIndex=V,t(p,F),n(h)===null&&F===n(p)&&(L?(E(f),f=-1):L=!0,Tt(N,V-ne))):(F.sortIndex=Q,t(h,F),R||O||(R=!0,Br(M))),F},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(F){var B=C;return function(){var V=C;C=B;try{return F.apply(this,arguments)}finally{C=V}}}})(zf);jf.exports=zf;var uy=jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy=vu,Ge=uy;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $f=new Set,Ti={};function qn(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Ti[e]=t,e=0;e<t.length;e++)$f.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=Object.prototype.hasOwnProperty,hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Nh={};function dy(e){return ha.call(Nh,e)?!0:ha.call(Rh,e)?!1:hy.test(e)?Nh[e]=!0:(Rh[e]=!0,!1)}function fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function py(e,t,n,r){if(t===null||typeof t>"u"||fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var yu=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yu,wu);ye[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yu,wu);ye[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yu,wu);ye[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function _u(e,t,n,r){var i=ye.hasOwnProperty(t)?ye[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(py(t,n,i,r)&&(n=null),r||i===null?dy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ms=Symbol.for("react.element"),ir=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Eu=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),Bf=Symbol.for("react.provider"),Vf=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),pa=Symbol.for("react.suspense_list"),Iu=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),bf=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function ti(e){return e===null||typeof e!="object"?null:(e=Oh&&e[Oh]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Pl;function ui(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Rl=!1;function Nl(e,t){if(!e||Rl)return"";Rl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var h=`
`+i[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=l&&0<=u);break}}}finally{Rl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ui(e):""}function gy(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function ga(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case ir:return"Portal";case da:return"Profiler";case Eu:return"StrictMode";case fa:return"Suspense";case pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vf:return(e.displayName||"Context")+".Consumer";case Bf:return(e._context.displayName||"Context")+".Provider";case Su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Iu:return t=e.displayName||null,t!==null?t:ga(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return ga(e(t))}catch{}}return null}function my(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ga(t);case 8:return t===Eu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vy(e){var t=Hf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vs(e){e._valueTracker||(e._valueTracker=vy(e))}function Wf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Dh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gf(e,t){t=t.checked,t!=null&&_u(e,"checked",t,!1)}function va(e,t){Gf(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||Zs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ci=Array.isArray;function vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(ci(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function Kf(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Mh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ys,Qf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ys=ys||document.createElement("div"),ys.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ys.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(fi).forEach(function(e){yy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fi[t]=fi[e]})});function Xf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fi.hasOwnProperty(e)&&fi[e]?(""+t).trim():t+"px"}function Yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wy=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(e,t){if(t){if(wy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Sa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ia=null;function Tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ta=null,yr=null,wr=null;function Uh(e){if(e=Ki(e)){if(typeof Ta!="function")throw Error(D(280));var t=e.stateNode;t&&(t=zo(t),Ta(e.stateNode,e.type,t))}}function Jf(e){yr?wr?wr.push(e):wr=[e]:yr=e}function Zf(){if(yr){var e=yr,t=wr;if(wr=yr=null,Uh(e),t)for(e=0;e<t.length;e++)Uh(t[e])}}function ep(e,t){return e(t)}function tp(){}var Ol=!1;function np(e,t,n){if(Ol)return e(t,n);Ol=!0;try{return ep(e,t,n)}finally{Ol=!1,(yr!==null||wr!==null)&&(tp(),Zf())}}function Ci(e,t){var n=e.stateNode;if(n===null)return null;var r=zo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ka=!1;if(zt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){ka=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{ka=!1}function _y(e,t,n,r,i,o,l,u,h){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(k){this.onError(k)}}var pi=!1,eo=null,to=!1,Ca=null,Ey={onError:function(e){pi=!0,eo=e}};function Sy(e,t,n,r,i,o,l,u,h){pi=!1,eo=null,_y.apply(Ey,arguments)}function Iy(e,t,n,r,i,o,l,u,h){if(Sy.apply(this,arguments),pi){if(pi){var p=eo;pi=!1,eo=null}else throw Error(D(198));to||(to=!0,Ca=p)}}function Qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function rp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fh(e){if(Qn(e)!==e)throw Error(D(188))}function Ty(e){var t=e.alternate;if(!t){if(t=Qn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Fh(i),e;if(o===r)return Fh(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function ip(e){return e=Ty(e),e!==null?sp(e):null}function sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sp(e);if(t!==null)return t;e=e.sibling}return null}var op=Ge.unstable_scheduleCallback,jh=Ge.unstable_cancelCallback,ky=Ge.unstable_shouldYield,Cy=Ge.unstable_requestPaint,ue=Ge.unstable_now,Ay=Ge.unstable_getCurrentPriorityLevel,ku=Ge.unstable_ImmediatePriority,lp=Ge.unstable_UserBlockingPriority,no=Ge.unstable_NormalPriority,Py=Ge.unstable_LowPriority,ap=Ge.unstable_IdlePriority,Mo=null,wt=null;function Ry(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Mo,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Dy,Ny=Math.log,Oy=Math.LN2;function Dy(e){return e>>>=0,e===0?32:31-(Ny(e)/Oy|0)|0}var ws=64,_s=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=hi(u):(o&=l,o!==0&&(r=hi(o)))}else l=n&~i,l!==0?r=hi(l):o!==0&&(r=hi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),i=1<<n,r|=e[n],t&=~i;return r}function Ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-ct(o),u=1<<l,h=i[l];h===-1?(!(u&n)||u&r)&&(i[l]=Ly(u,t)):h<=t&&(e.expiredLanes|=u),o&=~u}}function Aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function up(){var e=ws;return ws<<=1,!(ws&4194240)&&(ws=64),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function My(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ct(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function cp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hp,Au,dp,fp,pp,Pa=!1,Es=[],un=null,cn=null,hn=null,Ai=new Map,Pi=new Map,Zt=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(t.pointerId)}}function ri(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Au(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fy(e,t,n,r,i){switch(t){case"focusin":return un=ri(un,e,t,n,r,i),!0;case"dragenter":return cn=ri(cn,e,t,n,r,i),!0;case"mouseover":return hn=ri(hn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ai.set(o,ri(Ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pi.set(o,ri(Pi.get(o)||null,e,t,n,r,i)),!0}return!1}function gp(e){var t=Dn(e.target);if(t!==null){var n=Qn(t);if(n!==null){if(t=n.tag,t===13){if(t=rp(n),t!==null){e.blockedOn=t,pp(e.priority,function(){dp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ia=r,n.target.dispatchEvent(r),Ia=null}else return t=Ki(n),t!==null&&Au(t),e.blockedOn=n,!1;t.shift()}return!0}function $h(e,t,n){zs(e)&&n.delete(t)}function jy(){Pa=!1,un!==null&&zs(un)&&(un=null),cn!==null&&zs(cn)&&(cn=null),hn!==null&&zs(hn)&&(hn=null),Ai.forEach($h),Pi.forEach($h)}function ii(e,t){e.blockedOn===t&&(e.blockedOn=null,Pa||(Pa=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,jy)))}function Ri(e){function t(i){return ii(i,e)}if(0<Es.length){ii(Es[0],e);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&ii(un,e),cn!==null&&ii(cn,e),hn!==null&&ii(hn,e),Ai.forEach(t),Pi.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)gp(n),n.blockedOn===null&&Zt.shift()}var _r=Wt.ReactCurrentBatchConfig,io=!0;function zy(e,t,n,r){var i=q,o=_r.transition;_r.transition=null;try{q=1,Pu(e,t,n,r)}finally{q=i,_r.transition=o}}function $y(e,t,n,r){var i=q,o=_r.transition;_r.transition=null;try{q=4,Pu(e,t,n,r)}finally{q=i,_r.transition=o}}function Pu(e,t,n,r){if(io){var i=Ra(e,t,n,r);if(i===null)Vl(e,t,r,so,n),zh(e,r);else if(Fy(i,e,t,n,r))r.stopPropagation();else if(zh(e,r),t&4&&-1<Uy.indexOf(e)){for(;i!==null;){var o=Ki(i);if(o!==null&&hp(o),o=Ra(e,t,n,r),o===null&&Vl(e,t,r,so,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var so=null;function Ra(e,t,n,r){if(so=null,e=Tu(r),e=Dn(e),e!==null)if(t=Qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=rp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return so=e,null}function mp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ay()){case ku:return 1;case lp:return 4;case no:case Py:return 16;case ap:return 536870912;default:return 16}default:return 16}}var on=null,Ru=null,$s=null;function vp(){if($s)return $s;var e,t=Ru,n=t.length,r,i="value"in on?on.value:on.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return $s=i.slice(e,1<r?1-r:void 0)}function Bs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function Bh(){return!1}function qe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ss:Bh,this.isPropagationStopped=Bh,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=qe(Fr),Gi=se({},Fr,{view:0,detail:0}),By=qe(Gi),Ll,xl,si,Uo=se({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Ll=e.screenX-si.screenX,xl=e.screenY-si.screenY):xl=Ll=0,si=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Vh=qe(Uo),Vy=se({},Uo,{dataTransfer:0}),by=qe(Vy),Hy=se({},Gi,{relatedTarget:0}),Ml=qe(Hy),Wy=se({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=qe(Wy),Ky=se({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qy=qe(Ky),Qy=se({},Fr,{data:0}),bh=qe(Qy),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jy[e])?!!t[e]:!1}function Ou(){return Zy}var e0=se({},Gi,{key:function(e){if(e.key){var t=Xy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t0=qe(e0),n0=se({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=qe(n0),r0=se({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),i0=qe(r0),s0=se({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=qe(s0),l0=se({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a0=qe(l0),u0=[9,13,27,32],Du=zt&&"CompositionEvent"in window,gi=null;zt&&"documentMode"in document&&(gi=document.documentMode);var c0=zt&&"TextEvent"in window&&!gi,yp=zt&&(!Du||gi&&8<gi&&11>=gi),Wh=" ",Gh=!1;function wp(e,t){switch(e){case"keyup":return u0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var or=!1;function h0(e,t){switch(e){case"compositionend":return _p(t);case"keypress":return t.which!==32?null:(Gh=!0,Wh);case"textInput":return e=t.data,e===Wh&&Gh?null:e;default:return null}}function d0(e,t){if(or)return e==="compositionend"||!Du&&wp(e,t)?(e=vp(),$s=Ru=on=null,or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yp&&t.locale!=="ko"?null:t.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f0[e.type]:t==="textarea"}function Ep(e,t,n,r){Jf(r),t=oo(t,"onChange"),0<t.length&&(n=new Nu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mi=null,Ni=null;function p0(e){Dp(e,0)}function Fo(e){var t=ur(e);if(Wf(t))return e}function g0(e,t){if(e==="change")return t}var Sp=!1;if(zt){var Ul;if(zt){var Fl="oninput"in document;if(!Fl){var qh=document.createElement("div");qh.setAttribute("oninput","return;"),Fl=typeof qh.oninput=="function"}Ul=Fl}else Ul=!1;Sp=Ul&&(!document.documentMode||9<document.documentMode)}function Qh(){mi&&(mi.detachEvent("onpropertychange",Ip),Ni=mi=null)}function Ip(e){if(e.propertyName==="value"&&Fo(Ni)){var t=[];Ep(t,Ni,e,Tu(e)),np(p0,t)}}function m0(e,t,n){e==="focusin"?(Qh(),mi=t,Ni=n,mi.attachEvent("onpropertychange",Ip)):e==="focusout"&&Qh()}function v0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Ni)}function y0(e,t){if(e==="click")return Fo(t)}function w0(e,t){if(e==="input"||e==="change")return Fo(t)}function _0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:_0;function Oi(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ha.call(t,i)||!dt(e[i],t[i]))return!1}return!0}function Xh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yh(e,t){var n=Xh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xh(n)}}function Tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function kp(){for(var e=window,t=Zs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zs(e.document)}return t}function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function E0(e){var t=kp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tp(n.ownerDocument.documentElement,n)){if(r!==null&&Lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Yh(n,o);var l=Yh(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S0=zt&&"documentMode"in document&&11>=document.documentMode,lr=null,Na=null,vi=null,Oa=!1;function Jh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oa||lr==null||lr!==Zs(r)||(r=lr,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&Oi(vi,r)||(vi=r,r=oo(Na,"onSelect"),0<r.length&&(t=new Nu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=lr)))}function Is(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionend:Is("Transition","TransitionEnd")},jl={},Cp={};zt&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function jo(e){if(jl[e])return jl[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cp)return jl[e]=t[n];return e}var Ap=jo("animationend"),Pp=jo("animationiteration"),Rp=jo("animationstart"),Np=jo("transitionend"),Op=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function En(e,t){Op.set(e,t),qn(t,[e])}for(var zl=0;zl<Zh.length;zl++){var $l=Zh[zl],I0=$l.toLowerCase(),T0=$l[0].toUpperCase()+$l.slice(1);En(I0,"on"+T0)}En(Ap,"onAnimationEnd");En(Pp,"onAnimationIteration");En(Rp,"onAnimationStart");En("dblclick","onDoubleClick");En("focusin","onFocus");En("focusout","onBlur");En(Np,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function ed(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Iy(r,t,void 0,e),e.currentTarget=null}function Dp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var u=r[l],h=u.instance,p=u.currentTarget;if(u=u.listener,h!==o&&i.isPropagationStopped())break e;ed(i,u,p),o=h}else for(l=0;l<r.length;l++){if(u=r[l],h=u.instance,p=u.currentTarget,u=u.listener,h!==o&&i.isPropagationStopped())break e;ed(i,u,p),o=h}}}if(to)throw e=Ca,to=!1,Ca=null,e}function Z(e,t){var n=t[Ua];n===void 0&&(n=t[Ua]=new Set);var r=e+"__bubble";n.has(r)||(Lp(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),Lp(n,e,r,t)}var Ts="_reactListening"+Math.random().toString(36).slice(2);function Di(e){if(!e[Ts]){e[Ts]=!0,$f.forEach(function(n){n!=="selectionchange"&&(k0.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ts]||(t[Ts]=!0,Bl("selectionchange",!1,t))}}function Lp(e,t,n,r){switch(mp(t)){case 1:var i=zy;break;case 4:i=$y;break;default:i=Pu}n=i.bind(null,t,n,e),i=void 0,!ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Dn(u),l===null)return;if(h=l.tag,h===5||h===6){r=o=l;continue e}u=u.parentNode}}r=r.return}np(function(){var p=o,k=Tu(n),A=[];e:{var C=Op.get(e);if(C!==void 0){var O=Nu,R=e;switch(e){case"keypress":if(Bs(n)===0)break e;case"keydown":case"keyup":O=t0;break;case"focusin":R="focus",O=Ml;break;case"focusout":R="blur",O=Ml;break;case"beforeblur":case"afterblur":O=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=by;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=i0;break;case Ap:case Pp:case Rp:O=Gy;break;case Np:O=o0;break;case"scroll":O=By;break;case"wheel":O=a0;break;case"copy":case"cut":case"paste":O=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Hh}var L=(t&4)!==0,z=!L&&e==="scroll",E=L?C!==null?C+"Capture":null:C;L=[];for(var w=p,S;w!==null;){S=w;var N=S.stateNode;if(S.tag===5&&N!==null&&(S=N,E!==null&&(N=Ci(w,E),N!=null&&L.push(Li(w,N,S)))),z)break;w=w.return}0<L.length&&(C=new O(C,R,null,n,k),A.push({event:C,listeners:L}))}}if(!(t&7)){e:{if(C=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",C&&n!==Ia&&(R=n.relatedTarget||n.fromElement)&&(Dn(R)||R[$t]))break e;if((O||C)&&(C=k.window===k?k:(C=k.ownerDocument)?C.defaultView||C.parentWindow:window,O?(R=n.relatedTarget||n.toElement,O=p,R=R?Dn(R):null,R!==null&&(z=Qn(R),R!==z||R.tag!==5&&R.tag!==6)&&(R=null)):(O=null,R=p),O!==R)){if(L=Vh,N="onMouseLeave",E="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(L=Hh,N="onPointerLeave",E="onPointerEnter",w="pointer"),z=O==null?C:ur(O),S=R==null?C:ur(R),C=new L(N,w+"leave",O,n,k),C.target=z,C.relatedTarget=S,N=null,Dn(k)===p&&(L=new L(E,w+"enter",R,n,k),L.target=S,L.relatedTarget=z,N=L),z=N,O&&R)t:{for(L=O,E=R,w=0,S=L;S;S=rr(S))w++;for(S=0,N=E;N;N=rr(N))S++;for(;0<w-S;)L=rr(L),w--;for(;0<S-w;)E=rr(E),S--;for(;w--;){if(L===E||E!==null&&L===E.alternate)break t;L=rr(L),E=rr(E)}L=null}else L=null;O!==null&&td(A,C,O,L,!1),R!==null&&z!==null&&td(A,z,R,L,!0)}}e:{if(C=p?ur(p):window,O=C.nodeName&&C.nodeName.toLowerCase(),O==="select"||O==="input"&&C.type==="file")var M=g0;else if(Kh(C))if(Sp)M=w0;else{M=v0;var U=m0}else(O=C.nodeName)&&O.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(M=y0);if(M&&(M=M(e,p))){Ep(A,M,n,k);break e}U&&U(e,C,p),e==="focusout"&&(U=C._wrapperState)&&U.controlled&&C.type==="number"&&ya(C,"number",C.value)}switch(U=p?ur(p):window,e){case"focusin":(Kh(U)||U.contentEditable==="true")&&(lr=U,Na=p,vi=null);break;case"focusout":vi=Na=lr=null;break;case"mousedown":Oa=!0;break;case"contextmenu":case"mouseup":case"dragend":Oa=!1,Jh(A,n,k);break;case"selectionchange":if(S0)break;case"keydown":case"keyup":Jh(A,n,k)}var m;if(Du)e:{switch(e){case"compositionstart":var f="onCompositionStart";break e;case"compositionend":f="onCompositionEnd";break e;case"compositionupdate":f="onCompositionUpdate";break e}f=void 0}else or?wp(e,n)&&(f="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(f="onCompositionStart");f&&(yp&&n.locale!=="ko"&&(or||f!=="onCompositionStart"?f==="onCompositionEnd"&&or&&(m=vp()):(on=k,Ru="value"in on?on.value:on.textContent,or=!0)),U=oo(p,f),0<U.length&&(f=new bh(f,e,null,n,k),A.push({event:f,listeners:U}),m?f.data=m:(m=_p(n),m!==null&&(f.data=m)))),(m=c0?h0(e,n):d0(e,n))&&(p=oo(p,"onBeforeInput"),0<p.length&&(k=new bh("onBeforeInput","beforeinput",null,n,k),A.push({event:k,listeners:p}),k.data=m))}Dp(A,t)})}function Li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ci(e,n),o!=null&&r.unshift(Li(e,o,i)),o=Ci(e,t),o!=null&&r.push(Li(e,o,i))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function td(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var u=n,h=u.alternate,p=u.stateNode;if(h!==null&&h===r)break;u.tag===5&&p!==null&&(u=p,i?(h=Ci(n,o),h!=null&&l.unshift(Li(n,h,u))):i||(h=Ci(n,o),h!=null&&l.push(Li(n,h,u)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var C0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function nd(e){return(typeof e=="string"?e:""+e).replace(C0,`
`).replace(A0,"")}function ks(e,t,n){if(t=nd(t),nd(e)!==t&&n)throw Error(D(425))}function lo(){}var Da=null,La=null;function xa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,rd=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof rd<"u"?function(e){return rd.resolve(null).then(e).catch(N0)}:Ma;function N0(e){setTimeout(function(){throw e})}function bl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ri(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ri(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var jr=Math.random().toString(36).slice(2),yt="__reactFiber$"+jr,xi="__reactProps$"+jr,$t="__reactContainer$"+jr,Ua="__reactEvents$"+jr,O0="__reactListeners$"+jr,D0="__reactHandles$"+jr;function Dn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=id(e);e!==null;){if(n=e[yt])return n;e=id(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[yt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function zo(e){return e[xi]||null}var Fa=[],cr=-1;function Sn(e){return{current:e}}function ee(e){0>cr||(e.current=Fa[cr],Fa[cr]=null,cr--)}function Y(e,t){cr++,Fa[cr]=e.current,e.current=t}var _n={},Pe=Sn(_n),je=Sn(!1),zn=_n;function Pr(e,t){var n=e.type.contextTypes;if(!n)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function ao(){ee(je),ee(Pe)}function sd(e,t,n){if(Pe.current!==_n)throw Error(D(168));Y(Pe,t),Y(je,n)}function xp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,my(e)||"Unknown",i));return se({},n,r)}function uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,zn=Pe.current,Y(Pe,e),Y(je,je.current),!0}function od(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=xp(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,ee(je),ee(Pe),Y(Pe,e)):ee(je),Y(je,n)}var Dt=null,$o=!1,Hl=!1;function Mp(e){Dt===null?Dt=[e]:Dt.push(e)}function L0(e){$o=!0,Mp(e)}function In(){if(!Hl&&Dt!==null){Hl=!0;var e=0,t=q;try{var n=Dt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,$o=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),op(ku,In),i}finally{q=t,Hl=!1}}return null}var hr=[],dr=0,co=null,ho=0,Ye=[],Je=0,$n=null,Lt=1,xt="";function Rn(e,t){hr[dr++]=ho,hr[dr++]=co,co=e,ho=t}function Up(e,t,n){Ye[Je++]=Lt,Ye[Je++]=xt,Ye[Je++]=$n,$n=e;var r=Lt;e=xt;var i=32-ct(r)-1;r&=~(1<<i),n+=1;var o=32-ct(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Lt=1<<32-ct(t)+i|n<<i|r,xt=o+e}else Lt=1<<o|n<<i|r,xt=e}function xu(e){e.return!==null&&(Rn(e,1),Up(e,1,0))}function Mu(e){for(;e===co;)co=hr[--dr],hr[dr]=null,ho=hr[--dr],hr[dr]=null;for(;e===$n;)$n=Ye[--Je],Ye[Je]=null,xt=Ye[--Je],Ye[Je]=null,Lt=Ye[--Je],Ye[Je]=null}var He=null,Ve=null,te=!1,ut=null;function Fp(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ld(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ve=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$n!==null?{id:Lt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ve=null,!0):!1;default:return!1}}function ja(e){return(e.mode&1)!==0&&(e.flags&128)===0}function za(e){if(te){var t=Ve;if(t){var n=t;if(!ld(e,t)){if(ja(e))throw Error(D(418));t=dn(n.nextSibling);var r=He;t&&ld(e,t)?Fp(r,n):(e.flags=e.flags&-4097|2,te=!1,He=e)}}else{if(ja(e))throw Error(D(418));e.flags=e.flags&-4097|2,te=!1,He=e}}}function ad(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Cs(e){if(e!==He)return!1;if(!te)return ad(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!xa(e.type,e.memoizedProps)),t&&(t=Ve)){if(ja(e))throw jp(),Error(D(418));for(;t;)Fp(e,t),t=dn(t.nextSibling)}if(ad(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=He?dn(e.stateNode.nextSibling):null;return!0}function jp(){for(var e=Ve;e;)e=dn(e.nextSibling)}function Rr(){Ve=He=null,te=!1}function Uu(e){ut===null?ut=[e]:ut.push(e)}var x0=Wt.ReactCurrentBatchConfig;function oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function As(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ud(e){var t=e._init;return t(e._payload)}function zp(e){function t(E,w){if(e){var S=E.deletions;S===null?(E.deletions=[w],E.flags|=16):S.push(w)}}function n(E,w){if(!e)return null;for(;w!==null;)t(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=mn(E,w),E.index=0,E.sibling=null,E}function o(E,w,S){return E.index=S,e?(S=E.alternate,S!==null?(S=S.index,S<w?(E.flags|=2,w):S):(E.flags|=2,w)):(E.flags|=1048576,w)}function l(E){return e&&E.alternate===null&&(E.flags|=2),E}function u(E,w,S,N){return w===null||w.tag!==6?(w=Yl(S,E.mode,N),w.return=E,w):(w=i(w,S),w.return=E,w)}function h(E,w,S,N){var M=S.type;return M===sr?k(E,w,S.props.children,N,S.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yt&&ud(M)===w.type)?(N=i(w,S.props),N.ref=oi(E,w,S),N.return=E,N):(N=qs(S.type,S.key,S.props,null,E.mode,N),N.ref=oi(E,w,S),N.return=E,N)}function p(E,w,S,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Jl(S,E.mode,N),w.return=E,w):(w=i(w,S.children||[]),w.return=E,w)}function k(E,w,S,N,M){return w===null||w.tag!==7?(w=Fn(S,E.mode,N,M),w.return=E,w):(w=i(w,S),w.return=E,w)}function A(E,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Yl(""+w,E.mode,S),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ms:return S=qs(w.type,w.key,w.props,null,E.mode,S),S.ref=oi(E,null,w),S.return=E,S;case ir:return w=Jl(w,E.mode,S),w.return=E,w;case Yt:var N=w._init;return A(E,N(w._payload),S)}if(ci(w)||ti(w))return w=Fn(w,E.mode,S,null),w.return=E,w;As(E,w)}return null}function C(E,w,S,N){var M=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return M!==null?null:u(E,w,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ms:return S.key===M?h(E,w,S,N):null;case ir:return S.key===M?p(E,w,S,N):null;case Yt:return M=S._init,C(E,w,M(S._payload),N)}if(ci(S)||ti(S))return M!==null?null:k(E,w,S,N,null);As(E,S)}return null}function O(E,w,S,N,M){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(S)||null,u(w,E,""+N,M);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ms:return E=E.get(N.key===null?S:N.key)||null,h(w,E,N,M);case ir:return E=E.get(N.key===null?S:N.key)||null,p(w,E,N,M);case Yt:var U=N._init;return O(E,w,S,U(N._payload),M)}if(ci(N)||ti(N))return E=E.get(S)||null,k(w,E,N,M,null);As(w,N)}return null}function R(E,w,S,N){for(var M=null,U=null,m=w,f=w=0,g=null;m!==null&&f<S.length;f++){m.index>f?(g=m,m=null):g=m.sibling;var y=C(E,m,S[f],N);if(y===null){m===null&&(m=g);break}e&&m&&y.alternate===null&&t(E,m),w=o(y,w,f),U===null?M=y:U.sibling=y,U=y,m=g}if(f===S.length)return n(E,m),te&&Rn(E,f),M;if(m===null){for(;f<S.length;f++)m=A(E,S[f],N),m!==null&&(w=o(m,w,f),U===null?M=m:U.sibling=m,U=m);return te&&Rn(E,f),M}for(m=r(E,m);f<S.length;f++)g=O(m,E,f,S[f],N),g!==null&&(e&&g.alternate!==null&&m.delete(g.key===null?f:g.key),w=o(g,w,f),U===null?M=g:U.sibling=g,U=g);return e&&m.forEach(function(_){return t(E,_)}),te&&Rn(E,f),M}function L(E,w,S,N){var M=ti(S);if(typeof M!="function")throw Error(D(150));if(S=M.call(S),S==null)throw Error(D(151));for(var U=M=null,m=w,f=w=0,g=null,y=S.next();m!==null&&!y.done;f++,y=S.next()){m.index>f?(g=m,m=null):g=m.sibling;var _=C(E,m,y.value,N);if(_===null){m===null&&(m=g);break}e&&m&&_.alternate===null&&t(E,m),w=o(_,w,f),U===null?M=_:U.sibling=_,U=_,m=g}if(y.done)return n(E,m),te&&Rn(E,f),M;if(m===null){for(;!y.done;f++,y=S.next())y=A(E,y.value,N),y!==null&&(w=o(y,w,f),U===null?M=y:U.sibling=y,U=y);return te&&Rn(E,f),M}for(m=r(E,m);!y.done;f++,y=S.next())y=O(m,E,f,y.value,N),y!==null&&(e&&y.alternate!==null&&m.delete(y.key===null?f:y.key),w=o(y,w,f),U===null?M=y:U.sibling=y,U=y);return e&&m.forEach(function(T){return t(E,T)}),te&&Rn(E,f),M}function z(E,w,S,N){if(typeof S=="object"&&S!==null&&S.type===sr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ms:e:{for(var M=S.key,U=w;U!==null;){if(U.key===M){if(M=S.type,M===sr){if(U.tag===7){n(E,U.sibling),w=i(U,S.props.children),w.return=E,E=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yt&&ud(M)===U.type){n(E,U.sibling),w=i(U,S.props),w.ref=oi(E,U,S),w.return=E,E=w;break e}n(E,U);break}else t(E,U);U=U.sibling}S.type===sr?(w=Fn(S.props.children,E.mode,N,S.key),w.return=E,E=w):(N=qs(S.type,S.key,S.props,null,E.mode,N),N.ref=oi(E,w,S),N.return=E,E=N)}return l(E);case ir:e:{for(U=S.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(E,w.sibling),w=i(w,S.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else t(E,w);w=w.sibling}w=Jl(S,E.mode,N),w.return=E,E=w}return l(E);case Yt:return U=S._init,z(E,w,U(S._payload),N)}if(ci(S))return R(E,w,S,N);if(ti(S))return L(E,w,S,N);As(E,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,S),w.return=E,E=w):(n(E,w),w=Yl(S,E.mode,N),w.return=E,E=w),l(E)):n(E,w)}return z}var Nr=zp(!0),$p=zp(!1),fo=Sn(null),po=null,fr=null,Fu=null;function ju(){Fu=fr=po=null}function zu(e){var t=fo.current;ee(fo),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){po=e,Fu=fr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Fu!==e)if(e={context:e,memoizedValue:t,next:null},fr===null){if(po===null)throw Error(D(308));fr=e,po.dependencies={lanes:0,firstContext:e}}else fr=fr.next=e;return t}var Ln=null;function $u(e){Ln===null?Ln=[e]:Ln.push(e)}function Bp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$u(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Jt=!1;function Bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,$u(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cu(e,n)}}function cd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function go(e,t,n,r){var i=e.updateQueue;Jt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,p=h.next;h.next=null,l===null?o=p:l.next=p,l=h;var k=e.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==l&&(u===null?k.firstBaseUpdate=p:u.next=p,k.lastBaseUpdate=h))}if(o!==null){var A=i.baseState;l=0,k=p=h=null,u=o;do{var C=u.lane,O=u.eventTime;if((r&C)===C){k!==null&&(k=k.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=e,L=u;switch(C=t,O=n,L.tag){case 1:if(R=L.payload,typeof R=="function"){A=R.call(O,A,C);break e}A=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=L.payload,C=typeof R=="function"?R.call(O,A,C):R,C==null)break e;A=se({},A,C);break e;case 2:Jt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,C=i.effects,C===null?i.effects=[u]:C.push(u))}else O={eventTime:O,lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(p=k=O,h=A):k=k.next=O,l|=C;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;C=u,u=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);if(k===null&&(h=A),i.baseState=h,i.firstBaseUpdate=p,i.lastBaseUpdate=k,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Vn|=l,e.lanes=l,e.memoizedState=A}}function hd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var qi={},_t=Sn(qi),Mi=Sn(qi),Ui=Sn(qi);function xn(e){if(e===qi)throw Error(D(174));return e}function Vu(e,t){switch(Y(Ui,t),Y(Mi,e),Y(_t,qi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_a(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_a(t,e)}ee(_t),Y(_t,t)}function Or(){ee(_t),ee(Mi),ee(Ui)}function bp(e){xn(Ui.current);var t=xn(_t.current),n=_a(t,e.type);t!==n&&(Y(Mi,e),Y(_t,n))}function bu(e){Mi.current===e&&(ee(_t),ee(Mi))}var re=Sn(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Hu(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var bs=Wt.ReactCurrentDispatcher,Gl=Wt.ReactCurrentBatchConfig,Bn=0,ie=null,he=null,fe=null,vo=!1,yi=!1,Fi=0,M0=0;function Se(){throw Error(D(321))}function Wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function Gu(e,t,n,r,i,o){if(Bn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bs.current=e===null||e.memoizedState===null?z0:$0,e=n(r,i),yi){o=0;do{if(yi=!1,Fi=0,25<=o)throw Error(D(301));o+=1,fe=he=null,t.updateQueue=null,bs.current=B0,e=n(r,i)}while(yi)}if(bs.current=yo,t=he!==null&&he.next!==null,Bn=0,fe=he=ie=null,vo=!1,t)throw Error(D(300));return e}function Ku(){var e=Fi!==0;return Fi=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?ie.memoizedState=fe=e:fe=fe.next=e,fe}function it(){if(he===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=fe===null?ie.memoizedState:fe.next;if(t!==null)fe=t,he=e;else{if(e===null)throw Error(D(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},fe===null?ie.memoizedState=fe=e:fe=fe.next=e}return fe}function ji(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=it(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,h=null,p=o;do{var k=p.lane;if((Bn&k)===k)h!==null&&(h=h.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var A={lane:k,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};h===null?(u=h=A,l=r):h=h.next=A,ie.lanes|=k,Vn|=k}p=p.next}while(p!==null&&p!==o);h===null?l=r:h.next=u,dt(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=h,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,Vn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=it(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);dt(o,t.memoizedState)||(Fe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Hp(){}function Wp(e,t){var n=ie,r=it(),i=t(),o=!dt(r.memoizedState,i);if(o&&(r.memoizedState=i,Fe=!0),r=r.queue,qu(qp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,zi(9,Kp.bind(null,n,r,i,t),void 0,null),pe===null)throw Error(D(349));Bn&30||Gp(n,t,i)}return i}function Gp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kp(e,t,n,r){t.value=n,t.getSnapshot=r,Qp(t)&&Xp(e)}function qp(e,t,n){return n(function(){Qp(t)&&Xp(e)})}function Qp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Xp(e){var t=Bt(e,1);t!==null&&ht(t,e,1,-1)}function dd(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},t.queue=e,e=e.dispatch=j0.bind(null,ie,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yp(){return it().memoizedState}function Hs(e,t,n,r){var i=mt();ie.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function Bo(e,t,n,r){var i=it();r=r===void 0?null:r;var o=void 0;if(he!==null){var l=he.memoizedState;if(o=l.destroy,r!==null&&Wu(r,l.deps)){i.memoizedState=zi(t,n,o,r);return}}ie.flags|=e,i.memoizedState=zi(1|t,n,o,r)}function fd(e,t){return Hs(8390656,8,e,t)}function qu(e,t){return Bo(2048,8,e,t)}function Jp(e,t){return Bo(4,2,e,t)}function Zp(e,t){return Bo(4,4,e,t)}function eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tg(e,t,n){return n=n!=null?n.concat([e]):null,Bo(4,4,eg.bind(null,t,e),n)}function Qu(){}function ng(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rg(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ig(e,t,n){return Bn&21?(dt(n,t)||(n=up(),ie.lanes|=n,Vn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n)}function U0(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{q=n,Gl.transition=r}}function sg(){return it().memoizedState}function F0(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},og(e))lg(t,n);else if(n=Bp(e,t,n,r),n!==null){var i=Le();ht(n,e,r,i),ag(n,t,r)}}function j0(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(og(e))lg(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,dt(u,l)){var h=t.interleaved;h===null?(i.next=i,$u(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}finally{}n=Bp(e,t,i,r),n!==null&&(i=Le(),ht(n,e,r,i),ag(n,t,r))}}function og(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function lg(e,t){yi=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ag(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cu(e,n)}}var yo={readContext:rt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},z0={readContext:rt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hs(4194308,4,eg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hs(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F0.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:dd,useDebugValue:Qu,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=dd(!1),t=e[0];return e=U0.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=mt();if(te){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),pe===null)throw Error(D(349));Bn&30||Gp(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,fd(qp.bind(null,r,o,e),[e]),r.flags|=2048,zi(9,Kp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=pe.identifierPrefix;if(te){var n=xt,r=Lt;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$0={readContext:rt,useCallback:ng,useContext:rt,useEffect:qu,useImperativeHandle:tg,useInsertionEffect:Jp,useLayoutEffect:Zp,useMemo:rg,useReducer:Kl,useRef:Yp,useState:function(){return Kl(ji)},useDebugValue:Qu,useDeferredValue:function(e){var t=it();return ig(t,he.memoizedState,e)},useTransition:function(){var e=Kl(ji)[0],t=it().memoizedState;return[e,t]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:sg,unstable_isNewReconciler:!1},B0={readContext:rt,useCallback:ng,useContext:rt,useEffect:qu,useImperativeHandle:tg,useInsertionEffect:Jp,useLayoutEffect:Zp,useMemo:rg,useReducer:ql,useRef:Yp,useState:function(){return ql(ji)},useDebugValue:Qu,useDeferredValue:function(e){var t=it();return he===null?t.memoizedState=e:ig(t,he.memoizedState,e)},useTransition:function(){var e=ql(ji)[0],t=it().memoizedState;return[e,t]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:sg,unstable_isNewReconciler:!1};function lt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ba(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vo={isMounted:function(e){return(e=e._reactInternals)?Qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=gn(e),o=jt(r,i);o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(ht(t,e,i,r),Vs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=gn(e),o=jt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=fn(e,o,i),t!==null&&(ht(t,e,i,r),Vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=gn(e),i=jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=fn(e,i,r),t!==null&&(ht(t,e,r,n),Vs(t,e,r))}};function pd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function ug(e,t,n){var r=!1,i=_n,o=t.contextType;return typeof o=="object"&&o!==null?o=rt(o):(i=ze(t)?zn:Pe.current,r=t.contextTypes,o=(r=r!=null)?Pr(e,i):_n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function gd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vo.enqueueReplaceState(t,t.state,null)}function Va(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Bu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=rt(o):(o=ze(t)?zn:Pe.current,i.context=Pr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ba(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vo.enqueueReplaceState(i,i.state,null),go(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var n="",r=t;do n+=gy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ba(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function cg(e,t,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_o||(_o=!0,Za=r),ba(e,t)},n}function hg(e,t,n){n=jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ba(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ba(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new V0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=nw.bind(null,e,t,n),t.then(e,e))}function vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function yd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var b0=Wt.ReactCurrentOwner,Fe=!1;function De(e,t,n,r){t.child=e===null?$p(t,null,n,r):Nr(t,e.child,n,r)}function wd(e,t,n,r,i){n=n.render;var o=t.ref;return Er(t,i),r=Gu(e,t,n,r,o,i),n=Ku(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(te&&n&&xu(t),t.flags|=1,De(e,t,r,i),t.child)}function _d(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!rc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dg(e,t,o,r,i)):(e=qs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(l,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=mn(o,r),e.ref=t.ref,e.return=t,t.child=e}function dg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return Ha(e,t,n,r,i)}function fg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(gr,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(gr,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(gr,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(gr,Be),Be|=r;return De(e,t,i,n),t.child}function pg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ha(e,t,n,r,i){var o=ze(n)?zn:Pe.current;return o=Pr(t,o),Er(t,i),n=Gu(e,t,n,r,o,i),r=Ku(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(te&&r&&xu(t),t.flags|=1,De(e,t,n,i),t.child)}function Ed(e,t,n,r,i){if(ze(n)){var o=!0;uo(t)}else o=!1;if(Er(t,i),t.stateNode===null)Ws(e,t),ug(t,n,r),Va(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,u=t.memoizedProps;l.props=u;var h=l.context,p=n.contextType;typeof p=="object"&&p!==null?p=rt(p):(p=ze(n)?zn:Pe.current,p=Pr(t,p));var k=n.getDerivedStateFromProps,A=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||h!==p)&&gd(t,l,r,p),Jt=!1;var C=t.memoizedState;l.state=C,go(t,r,l,i),h=t.memoizedState,u!==r||C!==h||je.current||Jt?(typeof k=="function"&&(Ba(t,n,k,r),h=t.memoizedState),(u=Jt||pd(t,n,u,r,C,h,p))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=h),l.props=r,l.state=h,l.context=p,r=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Vp(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:lt(t.type,u),l.props=p,A=t.pendingProps,C=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=rt(h):(h=ze(n)?zn:Pe.current,h=Pr(t,h));var O=n.getDerivedStateFromProps;(k=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==A||C!==h)&&gd(t,l,r,h),Jt=!1,C=t.memoizedState,l.state=C,go(t,r,l,i);var R=t.memoizedState;u!==A||C!==R||je.current||Jt?(typeof O=="function"&&(Ba(t,n,O,r),R=t.memoizedState),(p=Jt||pd(t,n,p,r,C,R,h)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,R,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,R,h)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=R),l.props=r,l.state=R,l.context=h,r=p):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&C===e.memoizedState||(t.flags|=1024),r=!1)}return Wa(e,t,n,r,o,i)}function Wa(e,t,n,r,i,o){pg(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&od(t,n,!1),Vt(e,t,o);r=t.stateNode,b0.current=t;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Nr(t,e.child,null,o),t.child=Nr(t,null,u,o)):De(e,t,u,o),t.memoizedState=r.state,i&&od(t,n,!0),t.child}function gg(e){var t=e.stateNode;t.pendingContext?sd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sd(e,t.context,!1),Vu(e,t.containerInfo)}function Sd(e,t,n,r,i){return Rr(),Uu(i),t.flags|=256,De(e,t,n,r),t.child}var Ga={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function mg(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Y(re,i&1),e===null)return za(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Wo(l,r,0,null),e=Fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ka(n),t.memoizedState=Ga,e):Xu(t,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return H0(e,t,l,r,u,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,u=i.sibling;var h={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=h,t.deletions=null):(r=mn(i,h),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=mn(u,o):(o=Fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ka(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ga,r}return o=e.child,e=o.sibling,r=mn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Xu(e,t){return t=Wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ps(e,t,n,r){return r!==null&&Uu(r),Nr(t,e.child,null,n),e=Xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(D(422))),Ps(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Wo({mode:"visible",children:r.children},i,0,null),o=Fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Nr(t,e.child,null,l),t.child.memoizedState=Ka(l),t.memoizedState=Ga,o);if(!(t.mode&1))return Ps(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(D(419)),r=Ql(o,r,void 0),Ps(e,t,l,r)}if(u=(l&e.childLanes)!==0,Fe||u){if(r=pe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Bt(e,i),ht(r,e,i,-1))}return nc(),r=Ql(Error(D(421))),Ps(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ve=dn(i.nextSibling),He=t,te=!0,ut=null,e!==null&&(Ye[Je++]=Lt,Ye[Je++]=xt,Ye[Je++]=$n,Lt=e.id,xt=e.overflow,$n=t),t=Xu(t,r.children),t.flags|=4096,t)}function Id(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function Xl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Id(e,n,t);else if(e.tag===19)Id(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xl(t,!0,n,null,o);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ws(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W0(e,t,n){switch(t.tag){case 3:gg(t),Rr();break;case 5:bp(t);break;case 1:ze(t.type)&&uo(t);break;case 4:Vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Y(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?mg(e,t,n):(Y(re,re.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);Y(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,fg(e,t,n)}return Vt(e,t,n)}var yg,qa,wg,_g;yg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qa=function(){};wg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,xn(_t.current);var o=null;switch(n){case"input":i=ma(e,i),r=ma(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=wa(e,i),r=wa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}Ea(n,r);var l;n=null;for(p in i)if(!r.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var u=i[p];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Ti.hasOwnProperty(p)?o||(o=[]):(o=o||[]).push(p,null));for(p in r){var h=r[p];if(u=i!=null?i[p]:void 0,r.hasOwnProperty(p)&&h!==u&&(h!=null||u!=null))if(p==="style")if(u){for(l in u)!u.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&u[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(o||(o=[]),o.push(p,n)),n=h;else p==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(o=o||[]).push(p,h)):p==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(p,""+h):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Ti.hasOwnProperty(p)?(h!=null&&p==="onScroll"&&Z("scroll",e),o||u===h||(o=[])):(o=o||[]).push(p,h))}n&&(o=o||[]).push("style",n);var p=o;(t.updateQueue=p)&&(t.flags|=4)}};_g=function(e,t,n,r){n!==r&&(t.flags|=4)};function li(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function G0(e,t,n){var r=t.pendingProps;switch(Mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return ze(t.type)&&ao(),Ie(t),null;case 3:return r=t.stateNode,Or(),ee(je),ee(Pe),Hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Cs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ut!==null&&(nu(ut),ut=null))),qa(e,t),Ie(t),null;case 5:bu(t);var i=xn(Ui.current);if(n=t.type,e!==null&&t.stateNode!=null)wg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ie(t),null}if(e=xn(_t.current),Cs(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[yt]=t,r[xi]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)Z(di[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Dh(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":xh(r,o),Z("invalid",r)}Ea(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&ks(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ks(r.textContent,u,e),i=["children",""+u]):Ti.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&Z("scroll",r)}switch(n){case"input":vs(r),Lh(r,o,!0);break;case"textarea":vs(r),Mh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[yt]=t,e[xi]=r,yg(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sa(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)Z(di[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":Dh(e,r),i=ma(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",e);break;case"textarea":xh(e,r),i=wa(e,r),Z("invalid",e);break;default:i=r}Ea(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var h=u[o];o==="style"?Yf(e,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Qf(e,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&ki(e,h):typeof h=="number"&&ki(e,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ti.hasOwnProperty(o)?h!=null&&o==="onScroll"&&Z("scroll",e):h!=null&&_u(e,o,h,l))}switch(n){case"input":vs(e),Lh(e,r,!1);break;case"textarea":vs(e),Mh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)_g(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=xn(Ui.current),xn(_t.current),Cs(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(o=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:ks(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ks(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return Ie(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ve!==null&&t.mode&1&&!(t.flags&128))jp(),Rr(),t.flags|=98560,o=!1;else if(o=Cs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[yt]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ie(t),o=!1}else ut!==null&&(nu(ut),ut=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?de===0&&(de=3):nc())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Or(),qa(e,t),e===null&&Di(t.stateNode.containerInfo),Ie(t),null;case 10:return zu(t.type._context),Ie(t),null;case 17:return ze(t.type)&&ao(),Ie(t),null;case 19:if(ee(re),o=t.memoizedState,o===null)return Ie(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)li(o,!1);else{if(de!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=mo(e),l!==null){for(t.flags|=128,li(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Lr&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),li(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!te)return Ie(t),null}else 2*ue()-o.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,li(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=re.current,Y(re,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return tc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function K0(e,t){switch(Mu(t),t.tag){case 1:return ze(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),ee(je),ee(Pe),Hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return bu(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Or(),null;case 10:return zu(t.type._context),null;case 22:case 23:return tc(),null;case 24:return null;default:return null}}var Rs=!1,ke=!1,q0=typeof WeakSet=="function"?WeakSet:Set,j=null;function pr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Qa(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Td=!1;function Q0(e,t){if(Da=io,e=kp(),Lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,h=-1,p=0,k=0,A=e,C=null;t:for(;;){for(var O;A!==n||i!==0&&A.nodeType!==3||(u=l+i),A!==o||r!==0&&A.nodeType!==3||(h=l+r),A.nodeType===3&&(l+=A.nodeValue.length),(O=A.firstChild)!==null;)C=A,A=O;for(;;){if(A===e)break t;if(C===n&&++p===i&&(u=l),C===o&&++k===r&&(h=l),(O=A.nextSibling)!==null)break;A=C,C=A.parentNode}A=O}n=u===-1||h===-1?null:{start:u,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(La={focusedElem:e,selectionRange:n},io=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var R=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var L=R.memoizedProps,z=R.memoizedState,E=t.stateNode,w=E.getSnapshotBeforeUpdate(t.elementType===t.type?L:lt(t.type,L),z);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){oe(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return R=Td,Td=!1,R}function wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Qa(t,n,o)}i=i.next}while(i!==r)}}function bo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eg(e){var t=e.alternate;t!==null&&(e.alternate=null,Eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[xi],delete t[Ua],delete t[O0],delete t[D0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sg(e){return e.tag===5||e.tag===3||e.tag===4}function kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(Ya(e,t,n),e=e.sibling;e!==null;)Ya(e,t,n),e=e.sibling}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}var me=null,at=!1;function Qt(e,t,n){for(n=n.child;n!==null;)Ig(e,t,n),n=n.sibling}function Ig(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Mo,n)}catch{}switch(n.tag){case 5:ke||pr(n,t);case 6:var r=me,i=at;me=null,Qt(e,t,n),me=r,at=i,me!==null&&(at?(e=me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(at?(e=me,n=n.stateNode,e.nodeType===8?bl(e.parentNode,n):e.nodeType===1&&bl(e,n),Ri(e)):bl(me,n.stateNode));break;case 4:r=me,i=at,me=n.stateNode.containerInfo,at=!0,Qt(e,t,n),me=r,at=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Qa(n,t,l),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!ke&&(pr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){oe(n,t,u)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Qt(e,t,n),ke=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new q0),t.forEach(function(r){var i=iw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ot(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,u=l;e:for(;u!==null;){switch(u.tag){case 5:me=u.stateNode,at=!1;break e;case 3:me=u.stateNode.containerInfo,at=!0;break e;case 4:me=u.stateNode.containerInfo,at=!0;break e}u=u.return}if(me===null)throw Error(D(160));Ig(o,l,i),me=null,at=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(p){oe(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tg(t,e),t=t.sibling}function Tg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ot(t,e),gt(e),r&4){try{wi(3,e,e.return),bo(3,e)}catch(L){oe(e,e.return,L)}try{wi(5,e,e.return)}catch(L){oe(e,e.return,L)}}break;case 1:ot(t,e),gt(e),r&512&&n!==null&&pr(n,n.return);break;case 5:if(ot(t,e),gt(e),r&512&&n!==null&&pr(n,n.return),e.flags&32){var i=e.stateNode;try{ki(i,"")}catch(L){oe(e,e.return,L)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&Gf(i,o),Sa(u,l);var p=Sa(u,o);for(l=0;l<h.length;l+=2){var k=h[l],A=h[l+1];k==="style"?Yf(i,A):k==="dangerouslySetInnerHTML"?Qf(i,A):k==="children"?ki(i,A):_u(i,k,A,p)}switch(u){case"input":va(i,o);break;case"textarea":Kf(i,o);break;case"select":var C=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?vr(i,!!o.multiple,O,!1):C!==!!o.multiple&&(o.defaultValue!=null?vr(i,!!o.multiple,o.defaultValue,!0):vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[xi]=o}catch(L){oe(e,e.return,L)}}break;case 6:if(ot(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(L){oe(e,e.return,L)}}break;case 3:if(ot(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ri(t.containerInfo)}catch(L){oe(e,e.return,L)}break;case 4:ot(t,e),gt(e);break;case 13:ot(t,e),gt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zu=ue())),r&4&&Cd(e);break;case 22:if(k=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(p=ke)||k,ot(t,e),ke=p):ot(t,e),gt(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!k&&e.mode&1)for(j=e,k=e.child;k!==null;){for(A=j=k;j!==null;){switch(C=j,O=C.child,C.tag){case 0:case 11:case 14:case 15:wi(4,C,C.return);break;case 1:pr(C,C.return);var R=C.stateNode;if(typeof R.componentWillUnmount=="function"){r=C,n=C.return;try{t=r,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(L){oe(r,n,L)}}break;case 5:pr(C,C.return);break;case 22:if(C.memoizedState!==null){Pd(A);continue}}O!==null?(O.return=C,j=O):Pd(A)}k=k.sibling}e:for(k=null,A=e;;){if(A.tag===5){if(k===null){k=A;try{i=A.stateNode,p?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=A.stateNode,h=A.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=Xf("display",l))}catch(L){oe(e,e.return,L)}}}else if(A.tag===6){if(k===null)try{A.stateNode.nodeValue=p?"":A.memoizedProps}catch(L){oe(e,e.return,L)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===e)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===e)break e;for(;A.sibling===null;){if(A.return===null||A.return===e)break e;k===A&&(k=null),A=A.return}k===A&&(k=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:ot(t,e),gt(e),r&4&&Cd(e);break;case 21:break;default:ot(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var o=kd(e);Ja(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=kd(e);Ya(e,u,l);break;default:throw Error(D(161))}}catch(h){oe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function X0(e,t,n){j=e,kg(e)}function kg(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Rs;if(!l){var u=i.alternate,h=u!==null&&u.memoizedState!==null||ke;u=Rs;var p=ke;if(Rs=l,(ke=h)&&!p)for(j=i;j!==null;)l=j,h=l.child,l.tag===22&&l.memoizedState!==null?Rd(i):h!==null?(h.return=l,j=h):Rd(i);for(;o!==null;)j=o,kg(o),o=o.sibling;j=i,Rs=u,ke=p}Ad(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,j=o):Ad(e)}}function Ad(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||bo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hd(t,l,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var k=p.memoizedState;if(k!==null){var A=k.dehydrated;A!==null&&Ri(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}ke||t.flags&512&&Xa(t)}catch(C){oe(t,t.return,C)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Pd(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Rd(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{bo(4,t)}catch(h){oe(t,n,h)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(h){oe(t,i,h)}}var o=t.return;try{Xa(t)}catch(h){oe(t,o,h)}break;case 5:var l=t.return;try{Xa(t)}catch(h){oe(t,l,h)}}}catch(h){oe(t,t.return,h)}if(t===e){j=null;break}var u=t.sibling;if(u!==null){u.return=t.return,j=u;break}j=t.return}}var Y0=Math.ceil,wo=Wt.ReactCurrentDispatcher,Yu=Wt.ReactCurrentOwner,et=Wt.ReactCurrentBatchConfig,W=0,pe=null,ce=null,ve=0,Be=0,gr=Sn(0),de=0,$i=null,Vn=0,Ho=0,Ju=0,_i=null,Ue=null,Zu=0,Lr=1/0,Ot=null,_o=!1,Za=null,pn=null,Ns=!1,ln=null,Eo=0,Ei=0,eu=null,Gs=-1,Ks=0;function Le(){return W&6?ue():Gs!==-1?Gs:Gs=ue()}function gn(e){return e.mode&1?W&2&&ve!==0?ve&-ve:x0.transition!==null?(Ks===0&&(Ks=up()),Ks):(e=q,e!==0||(e=window.event,e=e===void 0?16:mp(e.type)),e):1}function ht(e,t,n,r){if(50<Ei)throw Ei=0,eu=null,Error(D(185));Wi(e,n,r),(!(W&2)||e!==pe)&&(e===pe&&(!(W&2)&&(Ho|=n),de===4&&en(e,ve)),$e(e,r),n===1&&W===0&&!(t.mode&1)&&(Lr=ue()+500,$o&&In()))}function $e(e,t){var n=e.callbackNode;xy(e,t);var r=ro(e,e===pe?ve:0);if(r===0)n!==null&&jh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jh(n),t===1)e.tag===0?L0(Nd.bind(null,e)):Mp(Nd.bind(null,e)),R0(function(){!(W&6)&&In()}),n=null;else{switch(cp(r)){case 1:n=ku;break;case 4:n=lp;break;case 16:n=no;break;case 536870912:n=ap;break;default:n=no}n=Lg(n,Cg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cg(e,t){if(Gs=-1,Ks=0,W&6)throw Error(D(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=ro(e,e===pe?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=W;W|=2;var o=Pg();(pe!==e||ve!==t)&&(Ot=null,Lr=ue()+500,Un(e,t));do try{ew();break}catch(u){Ag(e,u)}while(!0);ju(),wo.current=o,W=i,ce!==null?t=0:(pe=null,ve=0,t=de)}if(t!==0){if(t===2&&(i=Aa(e),i!==0&&(r=i,t=tu(e,i))),t===1)throw n=$i,Un(e,0),en(e,r),$e(e,ue()),n;if(t===6)en(e,r);else{if(i=e.current.alternate,!(r&30)&&!J0(i)&&(t=So(e,r),t===2&&(o=Aa(e),o!==0&&(r=o,t=tu(e,o))),t===1))throw n=$i,Un(e,0),en(e,r),$e(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Nn(e,Ue,Ot);break;case 3:if(en(e,r),(r&130023424)===r&&(t=Zu+500-ue(),10<t)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ma(Nn.bind(null,e,Ue,Ot),t);break}Nn(e,Ue,Ot);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-ct(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Y0(r/1960))-r,10<r){e.timeoutHandle=Ma(Nn.bind(null,e,Ue,Ot),r);break}Nn(e,Ue,Ot);break;case 5:Nn(e,Ue,Ot);break;default:throw Error(D(329))}}}return $e(e,ue()),e.callbackNode===n?Cg.bind(null,e):null}function tu(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=So(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&nu(t)),e}function nu(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function J0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!dt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~Ju,t&=~Ho,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function Nd(e){if(W&6)throw Error(D(327));Sr();var t=ro(e,0);if(!(t&1))return $e(e,ue()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=Aa(e);r!==0&&(t=r,n=tu(e,r))}if(n===1)throw n=$i,Un(e,0),en(e,t),$e(e,ue()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,Ue,Ot),$e(e,ue()),null}function ec(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Lr=ue()+500,$o&&In())}}function bn(e){ln!==null&&ln.tag===0&&!(W&6)&&Sr();var t=W;W|=1;var n=et.transition,r=q;try{if(et.transition=null,q=1,e)return e()}finally{q=r,et.transition=n,W=t,!(W&6)&&In()}}function tc(){Be=gr.current,ee(gr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P0(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:Or(),ee(je),ee(Pe),Hu();break;case 5:bu(r);break;case 4:Or();break;case 13:ee(re);break;case 19:ee(re);break;case 10:zu(r.type._context);break;case 22:case 23:tc()}n=n.return}if(pe=e,ce=e=mn(e.current,null),ve=Be=t,de=0,$i=null,Ju=Ho=Vn=0,Ue=_i=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ln=null}return e}function Ag(e,t){do{var n=ce;try{if(ju(),bs.current=yo,vo){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vo=!1}if(Bn=0,fe=he=ie=null,yi=!1,Fi=0,Yu.current=null,n===null||n.return===null){de=1,$i=t,ce=null;break}e:{var o=e,l=n.return,u=n,h=t;if(t=ve,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var p=h,k=u,A=k.tag;if(!(k.mode&1)&&(A===0||A===11||A===15)){var C=k.alternate;C?(k.updateQueue=C.updateQueue,k.memoizedState=C.memoizedState,k.lanes=C.lanes):(k.updateQueue=null,k.memoizedState=null)}var O=vd(l);if(O!==null){O.flags&=-257,yd(O,l,u,o,t),O.mode&1&&md(o,p,t),t=O,h=p;var R=t.updateQueue;if(R===null){var L=new Set;L.add(h),t.updateQueue=L}else R.add(h);break e}else{if(!(t&1)){md(o,p,t),nc();break e}h=Error(D(426))}}else if(te&&u.mode&1){var z=vd(l);if(z!==null){!(z.flags&65536)&&(z.flags|=256),yd(z,l,u,o,t),Uu(Dr(h,u));break e}}o=h=Dr(h,u),de!==4&&(de=2),_i===null?_i=[o]:_i.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var E=cg(o,h,t);cd(o,E);break e;case 1:u=h;var w=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(pn===null||!pn.has(S)))){o.flags|=65536,t&=-t,o.lanes|=t;var N=hg(o,u,t);cd(o,N);break e}}o=o.return}while(o!==null)}Ng(n)}catch(M){t=M,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Pg(){var e=wo.current;return wo.current=yo,e===null?yo:e}function nc(){(de===0||de===3||de===2)&&(de=4),pe===null||!(Vn&268435455)&&!(Ho&268435455)||en(pe,ve)}function So(e,t){var n=W;W|=2;var r=Pg();(pe!==e||ve!==t)&&(Ot=null,Un(e,t));do try{Z0();break}catch(i){Ag(e,i)}while(!0);if(ju(),W=n,wo.current=r,ce!==null)throw Error(D(261));return pe=null,ve=0,de}function Z0(){for(;ce!==null;)Rg(ce)}function ew(){for(;ce!==null&&!ky();)Rg(ce)}function Rg(e){var t=Dg(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Ng(e):ce=t,Yu.current=null}function Ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=K0(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ce=null;return}}else if(n=G0(n,t,Be),n!==null){ce=n;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);de===0&&(de=5)}function Nn(e,t,n){var r=q,i=et.transition;try{et.transition=null,q=1,tw(e,t,n,r)}finally{et.transition=i,q=r}return null}function tw(e,t,n,r){do Sr();while(ln!==null);if(W&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(My(e,o),e===pe&&(ce=pe=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ns||(Ns=!0,Lg(no,function(){return Sr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=et.transition,et.transition=null;var l=q;q=1;var u=W;W|=4,Yu.current=null,Q0(e,n),Tg(n,e),E0(La),io=!!Da,La=Da=null,e.current=n,X0(n),Cy(),W=u,q=l,et.transition=o}else e.current=n;if(Ns&&(Ns=!1,ln=e,Eo=i),o=e.pendingLanes,o===0&&(pn=null),Ry(n.stateNode),$e(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(_o)throw _o=!1,e=Za,Za=null,e;return Eo&1&&e.tag!==0&&Sr(),o=e.pendingLanes,o&1?e===eu?Ei++:(Ei=0,eu=e):Ei=0,In(),null}function Sr(){if(ln!==null){var e=cp(Eo),t=et.transition,n=q;try{if(et.transition=null,q=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Eo=0,W&6)throw Error(D(331));var i=W;for(W|=4,j=e.current;j!==null;){var o=j,l=o.child;if(j.flags&16){var u=o.deletions;if(u!==null){for(var h=0;h<u.length;h++){var p=u[h];for(j=p;j!==null;){var k=j;switch(k.tag){case 0:case 11:case 15:wi(8,k,o)}var A=k.child;if(A!==null)A.return=k,j=A;else for(;j!==null;){k=j;var C=k.sibling,O=k.return;if(Eg(k),k===p){j=null;break}if(C!==null){C.return=O,j=C;break}j=O}}}var R=o.alternate;if(R!==null){var L=R.child;if(L!==null){R.child=null;do{var z=L.sibling;L.sibling=null,L=z}while(L!==null)}}j=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,j=l;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:wi(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,j=E;break e}j=o.return}}var w=e.current;for(j=w;j!==null;){l=j;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,j=S;else e:for(l=w;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:bo(9,u)}}catch(M){oe(u,u.return,M)}if(u===l){j=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,j=N;break e}j=u.return}}if(W=i,In(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Mo,e)}catch{}r=!0}return r}finally{q=n,et.transition=t}}return!1}function Od(e,t,n){t=Dr(n,t),t=cg(e,t,1),e=fn(e,t,1),t=Le(),e!==null&&(Wi(e,1,t),$e(e,t))}function oe(e,t,n){if(e.tag===3)Od(e,e,n);else for(;t!==null;){if(t.tag===3){Od(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Dr(n,e),e=hg(t,e,1),t=fn(t,e,1),e=Le(),t!==null&&(Wi(t,1,e),$e(t,e));break}}t=t.return}}function nw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(ve&n)===n&&(de===4||de===3&&(ve&130023424)===ve&&500>ue()-Zu?Un(e,0):Ju|=n),$e(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):t=1);var n=Le();e=Bt(e,t),e!==null&&(Wi(e,t,n),$e(e,n))}function rw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Og(e,n)}function iw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Og(e,n)}var Dg;Dg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Fe=!1,W0(e,t,n);Fe=!!(e.flags&131072)}else Fe=!1,te&&t.flags&1048576&&Up(t,ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ws(e,t),e=t.pendingProps;var i=Pr(t,Pe.current);Er(t,n),i=Gu(null,t,r,e,i,n);var o=Ku();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,uo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bu(t),i.updater=Vo,t.stateNode=i,i._reactInternals=t,Va(t,r,e,n),t=Wa(null,t,r,!0,o,n)):(t.tag=0,te&&o&&xu(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ws(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ow(r),e=lt(r,e),i){case 0:t=Ha(null,t,r,e,n);break e;case 1:t=Ed(null,t,r,e,n);break e;case 11:t=wd(null,t,r,e,n);break e;case 14:t=_d(null,t,r,lt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ha(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ed(e,t,r,i,n);case 3:e:{if(gg(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Vp(e,t),go(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Dr(Error(D(423)),t),t=Sd(e,t,r,n,i);break e}else if(r!==i){i=Dr(Error(D(424)),t),t=Sd(e,t,r,n,i);break e}else for(Ve=dn(t.stateNode.containerInfo.firstChild),He=t,te=!0,ut=null,n=$p(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){t=Vt(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return bp(t),e===null&&za(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,xa(r,i)?l=null:o!==null&&xa(r,o)&&(t.flags|=32),pg(e,t),De(e,t,l,n),t.child;case 6:return e===null&&za(t),null;case 13:return mg(e,t,n);case 4:return Vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),wd(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,Y(fo,r._currentValue),r._currentValue=l,o!==null)if(dt(o.value,l)){if(o.children===i.children&&!je.current){t=Vt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var h=u.firstContext;h!==null;){if(h.context===r){if(o.tag===1){h=jt(-1,n&-n),h.tag=2;var p=o.updateQueue;if(p!==null){p=p.shared;var k=p.pending;k===null?h.next=h:(h.next=k.next,k.next=h),p.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),$a(o.return,n,t),u.lanes|=n;break}h=h.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),$a(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Er(t,n),i=rt(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=lt(r,t.pendingProps),i=lt(r.type,i),_d(e,t,r,i,n);case 15:return dg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:lt(r,i),Ws(e,t),t.tag=1,ze(r)?(e=!0,uo(t)):e=!1,Er(t,n),ug(t,r,i),Va(t,r,i,n),Wa(null,t,r,!0,e,n);case 19:return vg(e,t,n);case 22:return fg(e,t,n)}throw Error(D(156,t.tag))};function Lg(e,t){return op(e,t)}function sw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new sw(e,t,n,r)}function rc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ow(e){if(typeof e=="function")return rc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Su)return 11;if(e===Iu)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qs(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")rc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case sr:return Fn(n.children,i,o,t);case Eu:l=8,i|=8;break;case da:return e=Ze(12,n,t,i|2),e.elementType=da,e.lanes=o,e;case fa:return e=Ze(13,n,t,i),e.elementType=fa,e.lanes=o,e;case pa:return e=Ze(19,n,t,i),e.elementType=pa,e.lanes=o,e;case bf:return Wo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Bf:l=10;break e;case Vf:l=9;break e;case Su:l=11;break e;case Iu:l=14;break e;case Yt:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Ze(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Fn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function Wo(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=bf,e.lanes=n,e.stateNode={isHidden:!1},e}function Yl(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ic(e,t,n,r,i,o,l,u,h){return e=new lw(e,t,n,u,h),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bu(o),e}function aw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function xg(e){if(!e)return _n;e=e._reactInternals;e:{if(Qn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ze(n))return xp(e,n,t)}return t}function Mg(e,t,n,r,i,o,l,u,h){return e=ic(n,r,!0,e,i,o,l,u,h),e.context=xg(null),n=e.current,r=Le(),i=gn(n),o=jt(r,i),o.callback=t??null,fn(n,o,i),e.current.lanes=i,Wi(e,i,r),$e(e,r),e}function Go(e,t,n,r){var i=t.current,o=Le(),l=gn(i);return n=xg(n),t.context===null?t.context=n:t.pendingContext=n,t=jt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(i,t,l),e!==null&&(ht(e,i,l,o),Vs(e,i,l)),l}function Io(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sc(e,t){Dd(e,t),(e=e.alternate)&&Dd(e,t)}function uw(){return null}var Ug=typeof reportError=="function"?reportError:function(e){console.error(e)};function oc(e){this._internalRoot=e}Ko.prototype.render=oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Go(e,t,null,null)};Ko.prototype.unmount=oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Go(null,e,null,null)}),t[$t]=null}};function Ko(e){this._internalRoot=e}Ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=fp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&gp(e)}};function lc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function cw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var p=Io(l);o.call(p)}}var l=Mg(t,r,e,0,null,!1,!1,"",Ld);return e._reactRootContainer=l,e[$t]=l.current,Di(e.nodeType===8?e.parentNode:e),bn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var p=Io(h);u.call(p)}}var h=ic(e,0,!1,null,null,!1,!1,"",Ld);return e._reactRootContainer=h,e[$t]=h.current,Di(e.nodeType===8?e.parentNode:e),bn(function(){Go(t,h,n,r)}),h}function Qo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var h=Io(l);u.call(h)}}Go(t,l,e,i)}else l=cw(n,t,e,i,r);return Io(l)}hp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hi(t.pendingLanes);n!==0&&(Cu(t,n|1),$e(t,ue()),!(W&6)&&(Lr=ue()+500,In()))}break;case 13:bn(function(){var r=Bt(e,1);if(r!==null){var i=Le();ht(r,e,1,i)}}),sc(e,1)}};Au=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Le();ht(t,e,134217728,n)}sc(e,134217728)}};dp=function(e){if(e.tag===13){var t=gn(e),n=Bt(e,t);if(n!==null){var r=Le();ht(n,e,t,r)}sc(e,t)}};fp=function(){return q};pp=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ta=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=zo(r);if(!i)throw Error(D(90));Wf(r),va(r,i)}}}break;case"textarea":Kf(e,n);break;case"select":t=n.value,t!=null&&vr(e,!!n.multiple,t,!1)}};ep=ec;tp=bn;var hw={usingClientEntryPoint:!1,Events:[Ki,ur,zo,Jf,Zf,ec]},ai={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dw={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ip(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{Mo=Os.inject(dw),wt=Os}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(t))throw Error(D(200));return aw(e,t,null,n)};Ke.createRoot=function(e,t){if(!lc(e))throw Error(D(299));var n=!1,r="",i=Ug;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ic(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Di(e.nodeType===8?e.parentNode:e),new oc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=ip(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return bn(e)};Ke.hydrate=function(e,t,n){if(!qo(t))throw Error(D(200));return Qo(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!lc(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Ug;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Mg(t,null,e,1,n??null,i,!1,o,l),e[$t]=t.current,Di(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ko(t)};Ke.render=function(e,t,n){if(!qo(t))throw Error(D(200));return Qo(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!qo(e))throw Error(D(40));return e._reactRootContainer?(bn(function(){Qo(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Ke.unstable_batchedUpdates=ec;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!qo(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Qo(e,t,n,!1,r)};Ke.version="18.3.1-next-f1338f8080-20240426";function Fg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fg)}catch(e){console.error(e)}}Fg(),Ff.exports=Ke;var fw=Ff.exports,xd=fw;ca.createRoot=xd.createRoot,ca.hydrateRoot=xd.hydrateRoot;var Md={};/**
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
 */const jg=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},pw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],l=e[n++],u=e[n++],h=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=e[n++],l=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},zg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],l=i+1<e.length,u=l?e[i+1]:0,h=i+2<e.length,p=h?e[i+2]:0,k=o>>2,A=(o&3)<<4|u>>4;let C=(u&15)<<2|p>>6,O=p&63;h||(O=64,l||(C=64)),r.push(n[k],n[A],n[C],n[O])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jg(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],u=i<e.length?n[e.charAt(i)]:0;++i;const p=i<e.length?n[e.charAt(i)]:64;++i;const A=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||u==null||p==null||A==null)throw new gw;const C=o<<2|u>>4;if(r.push(C),p!==64){const O=u<<4&240|p>>2;if(r.push(O),A!==64){const R=p<<6&192|A;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mw=function(e){const t=jg(e);return zg.encodeByteArray(t,!0)},To=function(e){return mw(e).replace(/\./g,"")},$g=function(e){try{return zg.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yw=()=>vw().__FIREBASE_DEFAULTS__,ww=()=>{if(typeof process>"u"||typeof Md>"u")return;const e=Md.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},_w=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$g(e[1]);return t&&JSON.parse(t)},ac=()=>{try{return yw()||ww()||_w()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Bg=e=>{var t,n;return(n=(t=ac())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ew=e=>{const t=Bg(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Vg=()=>{var e;return(e=ac())===null||e===void 0?void 0:e.config},bg=e=>{var t;return(t=ac())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Sw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Iw(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[To(JSON.stringify(n)),To(JSON.stringify(l)),""].join(".")}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Hg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function kw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cw(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wg(){try{return typeof indexedDB=="object"}catch{return!1}}function Gg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Aw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Pw="FirebaseError";class pt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Pw,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?Rw(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new pt(i,u,r)}}function Rw(e,t){return e.replace(Nw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nw=/\{\$([^}]+)}/g;function Ow(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Bi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],l=t[i];if(Ud(o)&&Ud(l)){if(!Bi(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ud(e){return e!==null&&typeof e=="object"}/**
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
 */function Qi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Dw(e,t){const n=new Lw(e,t);return n.subscribe.bind(n)}class Lw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Zl),i.error===void 0&&(i.error=Zl),i.complete===void 0&&(i.complete=Zl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Zl(){}/**
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
 */const Mw=1e3,Uw=2,Fw=4*60*60*1e3,jw=.5;function Fd(e,t=Mw,n=Uw){const r=t*Math.pow(n,e),i=Math.round(jw*r*(Math.random()-.5)*2);return Math.min(Fw,r+i)}/**
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
 */function Tn(e){return e&&e._delegate?e._delegate:e}class ft{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class zw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Sw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bw(t))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=On){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=On){return this.instances.has(t)}getOptions(t=On){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$w(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=On){return this.component?this.component.multipleInstances?t:On:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $w(e){return e===On?void 0:e}function Bw(e){return e.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const bw={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Hw=K.INFO,Ww={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Gw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Ww[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xo{constructor(t){this.name=t,this._logLevel=Hw,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const Kw=(e,t)=>t.some(n=>e instanceof n);let jd,zd;function qw(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qw(){return zd||(zd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kg=new WeakMap,ru=new WeakMap,qg=new WeakMap,ea=new WeakMap,uc=new WeakMap;function Xw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",l)},o=()=>{n(vn(e.result)),i()},l=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&Kg.set(n,e)}).catch(()=>{}),uc.set(t,e),t}function Yw(e){if(ru.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",l),e.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",l),e.addEventListener("abort",l)});ru.set(e,t)}let iu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ru.get(e);if(t==="objectStoreNames")return e.objectStoreNames||qg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jw(e){iu=e(iu)}function Zw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ta(this),t,...n);return qg.set(r,t.sort?t.sort():[t]),vn(r)}:Qw().includes(e)?function(...t){return e.apply(ta(this),t),vn(Kg.get(this))}:function(...t){return vn(e.apply(ta(this),t))}}function e1(e){return typeof e=="function"?Zw(e):(e instanceof IDBTransaction&&Yw(e),Kw(e,qw())?new Proxy(e,iu):e)}function vn(e){if(e instanceof IDBRequest)return Xw(e);if(ea.has(e))return ea.get(e);const t=e1(e);return t!==e&&(ea.set(e,t),uc.set(t,e)),t}const ta=e=>uc.get(e);function Qg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(e,t),u=vn(l);return r&&l.addEventListener("upgradeneeded",h=>{r(vn(l.result),h.oldVersion,h.newVersion,vn(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const t1=["get","getKey","getAll","getAllKeys","count"],n1=["put","add","delete","clear"],na=new Map;function $d(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(na.get(t))return na.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=n1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||t1.includes(n)))return;const o=async function(l,...u){const h=this.transaction(l,i?"readwrite":"readonly");let p=h.store;return r&&(p=p.index(u.shift())),(await Promise.all([p[n](...u),i&&h.done]))[0]};return na.set(t,o),o}Jw(e=>({...e,get:(t,n,r)=>$d(t,n)||e.get(t,n,r),has:(t,n)=>!!$d(t,n)||e.has(t,n)}));/**
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
 */class r1{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i1(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const su="@firebase/app",Bd="0.10.7";/**
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
 */const Hn=new Xo("@firebase/app"),s1="@firebase/app-compat",o1="@firebase/analytics-compat",l1="@firebase/analytics",a1="@firebase/app-check-compat",u1="@firebase/app-check",c1="@firebase/auth",h1="@firebase/auth-compat",d1="@firebase/database",f1="@firebase/database-compat",p1="@firebase/functions",g1="@firebase/functions-compat",m1="@firebase/installations",v1="@firebase/installations-compat",y1="@firebase/messaging",w1="@firebase/messaging-compat",_1="@firebase/performance",E1="@firebase/performance-compat",S1="@firebase/remote-config",I1="@firebase/remote-config-compat",T1="@firebase/storage",k1="@firebase/storage-compat",C1="@firebase/firestore",A1="@firebase/vertexai-preview",P1="@firebase/firestore-compat",R1="firebase",N1="10.12.4";/**
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
 */const ou="[DEFAULT]",O1={[su]:"fire-core",[s1]:"fire-core-compat",[l1]:"fire-analytics",[o1]:"fire-analytics-compat",[u1]:"fire-app-check",[a1]:"fire-app-check-compat",[c1]:"fire-auth",[h1]:"fire-auth-compat",[d1]:"fire-rtdb",[f1]:"fire-rtdb-compat",[p1]:"fire-fn",[g1]:"fire-fn-compat",[m1]:"fire-iid",[v1]:"fire-iid-compat",[y1]:"fire-fcm",[w1]:"fire-fcm-compat",[_1]:"fire-perf",[E1]:"fire-perf-compat",[S1]:"fire-rc",[I1]:"fire-rc-compat",[T1]:"fire-gcs",[k1]:"fire-gcs-compat",[C1]:"fire-fst",[P1]:"fire-fst-compat",[A1]:"fire-vertex","fire-js":"fire-js",[R1]:"fire-js-all"};/**
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
 */const ko=new Map,D1=new Map,lu=new Map;function Vd(e,t){try{e.container.addComponent(t)}catch(n){Hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function It(e){const t=e.name;if(lu.has(t))return Hn.debug(`There were multiple attempts to register component ${t}.`),!1;lu.set(t,e);for(const n of ko.values())Vd(n,e);for(const n of D1.values())Vd(n,e);return!0}function Yn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function an(e){return e.settings!==void 0}/**
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
 */const L1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Xn("app","Firebase",L1);/**
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
 */class x1{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=N1;function Xg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=Vg()),!n)throw yn.create("no-options");const o=ko.get(i);if(o){if(Bi(n,o.options)&&Bi(r,o.config))return o;throw yn.create("duplicate-app",{appName:i})}const l=new Vw(i);for(const h of lu.values())l.addComponent(h);const u=new x1(n,r,l);return ko.set(i,u),u}function cc(e=ou){const t=ko.get(e);if(!t&&e===ou&&Vg())return Xg();if(!t)throw yn.create("no-app",{appName:e});return t}function tt(e,t,n){var r;let i=(r=O1[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Hn.warn(u.join(" "));return}It(new ft(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const M1="firebase-heartbeat-database",U1=1,Vi="firebase-heartbeat-store";let ra=null;function Yg(){return ra||(ra=Qg(M1,U1,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vi)}catch(n){console.warn(n)}}}}).catch(e=>{throw yn.create("idb-open",{originalErrorMessage:e.message})})),ra}async function F1(e){try{const n=(await Yg()).transaction(Vi),r=await n.objectStore(Vi).get(Jg(e));return await n.done,r}catch(t){if(t instanceof pt)Hn.warn(t.message);else{const n=yn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Hn.warn(n.message)}}}async function bd(e,t){try{const r=(await Yg()).transaction(Vi,"readwrite");await r.objectStore(Vi).put(t,Jg(e)),await r.done}catch(n){if(n instanceof pt)Hn.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hn.warn(r.message)}}}function Jg(e){return`${e.name}!${e.options.appId}`}/**
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
 */const j1=1024,z1=30*24*60*60*1e3;class $1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Hd();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=z1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hd(),{heartbeatsToSend:r,unsentEntries:i}=B1(this._heartbeatsCache.heartbeats),o=To(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Hd(){return new Date().toISOString().substring(0,10)}function B1(e,t=j1){const n=[];let r=e.slice();for(const i of e){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Wd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wg()?Gg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await F1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Wd(e){return To(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function b1(e){It(new ft("platform-logger",t=>new r1(t),"PRIVATE")),It(new ft("heartbeat",t=>new $1(t),"PRIVATE")),tt(su,Bd,e),tt(su,Bd,"esm2017"),tt("fire-js","")}b1("");var H1="firebase",W1="10.12.4";/**
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
 */tt(H1,W1,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const G1={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ds(e){return Object.isFrozen(e)&&Object.isFrozen(e.raw)}function Ls(e){return e.toString().indexOf("`")===-1}Ls(e=>e``)||Ls(e=>e`\0`)||Ls(e=>e`\n`)||Ls(e=>e`\u0000`);Ds``&&Ds`\0`&&Ds`\n`&&Ds`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Zg="google#safe";function K1(){if(typeof window<"u")return window.trustedTypes}function em(){var e;return Zg!==""&&(e=K1())!==null&&e!==void 0?e:null}let xs;function q1(){var e,t;if(xs===void 0)try{xs=(t=(e=em())===null||e===void 0?void 0:e.createPolicy(Zg,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&t!==void 0?t:null}catch{xs=null}return xs}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class tm{constructor(t,n){this.privateDoNotAccessOrElseWrappedResourceUrl=t}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Gd(e){var t;const n=e,r=(t=q1())===null||t===void 0?void 0:t.createScriptURL(n);return r??new tm(n,G1)}function Q1(e){var t;if(!((t=em())===null||t===void 0)&&t.isScriptURL(e))return e;if(e instanceof tm)return e.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function X1(e,...t){if(t.length===0)return Gd(e[0]);e[0].toLowerCase();let n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return Gd(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Y1(e){return J1("script",e)}function J1(e,t){var n;const r=t.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${e}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Z1(e){const t=e.ownerDocument&&e.ownerDocument.defaultView,n=Y1(t||window);n&&e.setAttribute("nonce",n)}function e_(e,t,n){e.src=Q1(t),Z1(e)}const nm="@firebase/installations",hc="0.6.8";/**
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
 */const rm=1e4,im=`w:${hc}`,sm="FIS_v2",t_="https://firebaseinstallations.googleapis.com/v1",n_=60*60*1e3,r_="installations",i_="Installations";/**
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
 */const s_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Wn=new Xn(r_,i_,s_);function om(e){return e instanceof pt&&e.code.includes("request-failed")}/**
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
 */function lm({projectId:e}){return`${t_}/projects/${e}/installations`}function am(e){return{token:e.token,requestStatus:2,expiresIn:l_(e.expiresIn),creationTime:Date.now()}}async function um(e,t){const r=(await t.json()).error;return Wn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cm({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function o_(e,{refreshToken:t}){const n=cm(e);return n.append("Authorization",a_(t)),n}async function hm(e){const t=await e();return t.status>=500&&t.status<600?e():t}function l_(e){return Number(e.replace("s","000"))}function a_(e){return`${sm} ${e}`}/**
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
 */async function u_({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=lm(e),i=cm(e),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={fid:n,authVersion:sm,appId:e.appId,sdkVersion:im},u={method:"POST",headers:i,body:JSON.stringify(l)},h=await hm(()=>fetch(r,u));if(h.ok){const p=await h.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:am(p.authToken)}}else throw await um("Create Installation",h)}/**
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
 */function dm(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function c_(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const h_=/^[cdef][\w-]{21}$/,au="";function d_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=f_(e);return h_.test(n)?n:au}catch{return au}}function f_(e){return c_(e).substr(0,22)}/**
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
 */function Yo(e){return`${e.appName}!${e.appId}`}/**
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
 */const fm=new Map;function pm(e,t){const n=Yo(e);gm(n,t),p_(n,t)}function gm(e,t){const n=fm.get(e);if(n)for(const r of n)r(t)}function p_(e,t){const n=g_();n&&n.postMessage({key:e,fid:t}),m_()}let Mn=null;function g_(){return!Mn&&"BroadcastChannel"in self&&(Mn=new BroadcastChannel("[Firebase] FID Change"),Mn.onmessage=e=>{gm(e.data.key,e.data.fid)}),Mn}function m_(){fm.size===0&&Mn&&(Mn.close(),Mn=null)}/**
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
 */const v_="firebase-installations-database",y_=1,Gn="firebase-installations-store";let ia=null;function dc(){return ia||(ia=Qg(v_,y_,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gn)}}})),ia}async function Co(e,t){const n=Yo(e),i=(await dc()).transaction(Gn,"readwrite"),o=i.objectStore(Gn),l=await o.get(n);return await o.put(t,n),await i.done,(!l||l.fid!==t.fid)&&pm(e,t.fid),t}async function mm(e){const t=Yo(e),r=(await dc()).transaction(Gn,"readwrite");await r.objectStore(Gn).delete(t),await r.done}async function Jo(e,t){const n=Yo(e),i=(await dc()).transaction(Gn,"readwrite"),o=i.objectStore(Gn),l=await o.get(n),u=t(l);return u===void 0?await o.delete(n):await o.put(u,n),await i.done,u&&(!l||l.fid!==u.fid)&&pm(e,u.fid),u}/**
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
 */async function fc(e){let t;const n=await Jo(e.appConfig,r=>{const i=w_(r),o=__(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===au?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function w_(e){const t=e||{fid:d_(),registrationStatus:0};return vm(t)}function __(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=E_(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:S_(e)}:{installationEntry:t}}async function E_(e,t){try{const n=await u_(e,t);return Co(e.appConfig,n)}catch(n){throw om(n)&&n.customData.serverCode===409?await mm(e.appConfig):await Co(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function S_(e){let t=await Kd(e.appConfig);for(;t.registrationStatus===1;)await dm(100),t=await Kd(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fc(e);return r||n}return t}function Kd(e){return Jo(e,t=>{if(!t)throw Wn.create("installation-not-found");return vm(t)})}function vm(e){return I_(e)?{fid:e.fid,registrationStatus:0}:e}function I_(e){return e.registrationStatus===1&&e.registrationTime+rm<Date.now()}/**
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
 */async function T_({appConfig:e,heartbeatServiceProvider:t},n){const r=k_(e,n),i=o_(e,n),o=t.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&i.append("x-firebase-client",p)}const l={installation:{sdkVersion:im,appId:e.appId}},u={method:"POST",headers:i,body:JSON.stringify(l)},h=await hm(()=>fetch(r,u));if(h.ok){const p=await h.json();return am(p)}else throw await um("Generate Auth Token",h)}function k_(e,{fid:t}){return`${lm(e)}/${t}/authTokens:generate`}/**
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
 */async function pc(e,t=!1){let n;const r=await Jo(e.appConfig,o=>{if(!ym(o))throw Wn.create("not-registered");const l=o.authToken;if(!t&&P_(l))return o;if(l.requestStatus===1)return n=C_(e,t),o;{if(!navigator.onLine)throw Wn.create("app-offline");const u=N_(o);return n=A_(e,u),u}});return n?await n:r.authToken}async function C_(e,t){let n=await qd(e.appConfig);for(;n.authToken.requestStatus===1;)await dm(100),n=await qd(e.appConfig);const r=n.authToken;return r.requestStatus===0?pc(e,t):r}function qd(e){return Jo(e,t=>{if(!ym(t))throw Wn.create("not-registered");const n=t.authToken;return O_(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function A_(e,t){try{const n=await T_(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Co(e.appConfig,r),n}catch(n){if(om(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await mm(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Co(e.appConfig,r)}throw n}}function ym(e){return e!==void 0&&e.registrationStatus===2}function P_(e){return e.requestStatus===2&&!R_(e)}function R_(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+n_}function N_(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function O_(e){return e.requestStatus===1&&e.requestTime+rm<Date.now()}/**
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
 */async function D_(e){const t=e,{installationEntry:n,registrationPromise:r}=await fc(t);return r?r.catch(console.error):pc(t).catch(console.error),n.fid}/**
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
 */async function L_(e,t=!1){const n=e;return await x_(n),(await pc(n,t)).token}async function x_(e){const{registrationPromise:t}=await fc(e);t&&await t}/**
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
 */function M_(e){if(!e||!e.options)throw sa("App Configuration");if(!e.name)throw sa("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw sa(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function sa(e){return Wn.create("missing-app-config-values",{valueName:e})}/**
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
 */const wm="installations",U_="installations-internal",F_=e=>{const t=e.getProvider("app").getImmediate(),n=M_(t),r=Yn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},j_=e=>{const t=e.getProvider("app").getImmediate(),n=Yn(t,wm).getImmediate();return{getId:()=>D_(n),getToken:i=>L_(n,i)}};function z_(){It(new ft(wm,F_,"PUBLIC")),It(new ft(U_,j_,"PRIVATE"))}z_();tt(nm,hc);tt(nm,hc,"esm2017");/**
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
 */const Ao="analytics",$_="firebase_id",B_="origin",V_=60*1e3,b_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",H_="https://www.googletagmanager.com/gtag/js";/**
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
 */const We=new Xo("@firebase/analytics");/**
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
 */function _m(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function W_(e,t){const n=document.createElement("script"),r=X1`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`;e_(n,r),n.async=!0,document.head.appendChild(n)}function G_(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function K_(e,t,n,r,i,o){const l=r[i];try{if(l)await t[l];else{const h=(await _m(n)).find(p=>p.measurementId===i);h&&await t[h.appId]}}catch(u){We.error(u)}e("config",i,o)}async function q_(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const u=await _m(n);for(const h of l){const p=u.find(A=>A.measurementId===h),k=p&&t[p.appId];if(k)o.push(k);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){We.error(o)}}function Q_(e,t,n,r){async function i(o,...l){try{if(o==="event"){const[u,h]=l;await q_(e,t,n,u,h)}else if(o==="config"){const[u,h]=l;await K_(e,t,n,r,u,h)}else if(o==="consent"){const[u,h]=l;e("consent",u,h)}else if(o==="get"){const[u,h,p]=l;e("get",u,h,p)}else if(o==="set"){const[u]=l;e("set",u)}else e(o,...l)}catch(u){We.error(u)}}return i}function X_(e,t,n,r,i){let o=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Q_(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Y_(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(H_)&&n.src.includes(e))return n;return null}/**
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
 */const J_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},nt=new Xn("analytics","Analytics",J_);/**
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
 */const Z_=30,eE=1e3;class tE{constructor(t={},n=eE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Em=new tE;function nE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function rE(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:nE(r)},o=b_.replace("{app-id}",n),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let u="";try{const h=await l.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw nt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function iE(e,t=Em,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw nt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw nt.create("no-api-key")}const l=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new lE;return setTimeout(async()=>{u.abort()},V_),Sm({appId:r,apiKey:i,measurementId:o},l,u,t)}async function Sm(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Em){var o;const{appId:l,measurementId:u}=e;try{await sE(r,t)}catch(h){if(u)return We.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:l,measurementId:u};throw h}try{const h=await rE(e);return i.deleteThrottleMetadata(l),h}catch(h){const p=h;if(!oE(p)){if(i.deleteThrottleMetadata(l),u)return We.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:l,measurementId:u};throw h}const k=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?Fd(n,i.intervalMillis,Z_):Fd(n,i.intervalMillis),A={throttleEndTimeMillis:Date.now()+k,backoffCount:n+1};return i.setThrottleMetadata(l,A),We.debug(`Calling attemptFetch again in ${k} millis`),Sm(e,A,r,i)}}function sE(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(nt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function oE(e){if(!(e instanceof pt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class lE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function aE(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,l=Object.assign(Object.assign({},r),{send_to:o});e("event",n,l)}}/**
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
 */async function uE(){if(Wg())try{await Gg()}catch(e){return We.warn(nt.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return We.warn(nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cE(e,t,n,r,i,o,l){var u;const h=iE(e);h.then(O=>{n[O.measurementId]=O.appId,e.options.measurementId&&O.measurementId!==e.options.measurementId&&We.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>We.error(O)),t.push(h);const p=uE().then(O=>{if(O)return r.getId()}),[k,A]=await Promise.all([h,p]);Y_(o)||W_(o,k.measurementId),i("js",new Date);const C=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return C[B_]="firebase",C.update=!0,A!=null&&(C[$_]=A),i("config",k.measurementId,C),k.measurementId}/**
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
 */class hE{constructor(t){this.app=t}_delete(){return delete Si[this.app.options.appId],Promise.resolve()}}let Si={},Qd=[];const Xd={};let oa="dataLayer",dE="gtag",Yd,Im,Jd=!1;function fE(){const e=[];if(Hg()&&e.push("This is a browser extension environment."),Aw()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=nt.create("invalid-analytics-context",{errorInfo:t});We.warn(n.message)}}function pE(e,t,n){fE();const r=e.options.appId;if(!r)throw nt.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)We.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw nt.create("no-api-key");if(Si[r]!=null)throw nt.create("already-exists",{id:r});if(!Jd){G_(oa);const{wrappedGtag:o,gtagCore:l}=X_(Si,Qd,Xd,oa,dE);Im=o,Yd=l,Jd=!0}return Si[r]=cE(e,Qd,Xd,t,Yd,oa,n),new hE(e)}function gE(e=cc()){e=Tn(e);const t=Yn(e,Ao);return t.isInitialized()?t.getImmediate():mE(e)}function mE(e,t={}){const n=Yn(e,Ao);if(n.isInitialized()){const i=n.getImmediate();if(Bi(t,n.getOptions()))return i;throw nt.create("already-initialized")}return n.initialize({options:t})}function vE(e,t,n,r){e=Tn(e),aE(Im,Si[e.app.options.appId],t,n,r).catch(i=>We.error(i))}const Zd="@firebase/analytics",ef="0.10.6";function yE(){It(new ft(Ao,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return pE(r,i,n)},"PUBLIC")),It(new ft("analytics-internal",e,"PRIVATE")),tt(Zd,ef),tt(Zd,ef,"esm2017");function e(t){try{const n=t.getProvider(Ao).getImmediate();return{logEvent:(r,i,o)=>vE(n,r,i,o)}}catch(n){throw nt.create("interop-component-reg-failed",{reason:n})}}}yE();function gc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Tm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wE=Tm,km=new Xn("auth","Firebase",Tm());/**
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
 */const Po=new Xo("@firebase/auth");function _E(e,...t){Po.logLevel<=K.WARN&&Po.warn(`Auth (${zr}): ${e}`,...t)}function Qs(e,...t){Po.logLevel<=K.ERROR&&Po.error(`Auth (${zr}): ${e}`,...t)}/**
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
 */function bt(e,...t){throw mc(e,...t)}function Et(e,...t){return mc(e,...t)}function Cm(e,t,n){const r=Object.assign(Object.assign({},wE()),{[t]:n});return new Xn("auth","Firebase",r).create(t,{appName:e.name})}function jn(e){return Cm(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return km.create(e,...t)}function $(e,t,...n){if(!e)throw mc(t,...n)}function Mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Qs(t),new Error(t)}function Ht(e,t){e||Mt(t)}/**
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
 */function uu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function EE(){return tf()==="http:"||tf()==="https:"}function tf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function SE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EE()||Hg()||"connection"in navigator)?navigator.onLine:!0}function IE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Xi{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ht(n>t,"Short delay should be less than long delay!"),this.isMobile=Tw()||kw()}get(){return SE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vc(e,t){Ht(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Am{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kE=new Xi(3e4,6e4);function yc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function $r(e,t,n,r,i={}){return Pm(e,i,async()=>{let o={},l={};r&&(t==="GET"?l=r:o={body:JSON.stringify(r)});const u=Qi(Object.assign({key:e.config.apiKey},l)).slice(1),h=await e._getAdditionalHeaders();return h["Content-Type"]="application/json",e.languageCode&&(h["X-Firebase-Locale"]=e.languageCode),Am.fetch()(Rm(e,e.config.apiHost,n,u),Object.assign({method:t,headers:h,referrerPolicy:"no-referrer"},o))})}async function Pm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},TE),t);try{const i=new AE(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw Ms(e,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[h,p]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ms(e,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw Ms(e,"email-already-in-use",l);if(h==="USER_DISABLED")throw Ms(e,"user-disabled",l);const k=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Cm(e,k,p);bt(e,k)}}catch(i){if(i instanceof pt)throw i;bt(e,"network-request-failed",{message:String(i)})}}async function CE(e,t,n,r,i={}){const o=await $r(e,t,n,r,i);return"mfaPendingCredential"in o&&bt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Rm(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?vc(e.config,i):`${e.config.apiScheme}://${i}`}class AE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),kE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ms(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function PE(e,t){return $r(e,"POST","/v1/accounts:delete",t)}async function Nm(e,t){return $r(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ii(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function RE(e,t=!1){const n=Tn(e),r=await n.getIdToken(t),i=wc(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ii(la(i.auth_time)),issuedAtTime:Ii(la(i.iat)),expirationTime:Ii(la(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function la(e){return Number(e)*1e3}function wc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Qs("JWT malformed, contained fewer than 3 sections"),null;try{const i=$g(n);return i?JSON.parse(i):(Qs("Failed to decode base64 JWT payload"),null)}catch(i){return Qs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nf(e){const t=wc(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function bi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pt&&NE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function NE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class OE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class cu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ro(e){var t;const n=e.auth,r=await e.getIdToken(),i=await bi(e,Nm(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const l=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Om(o.providerUserInfo):[],u=LE(e.providerData,l),h=e.isAnonymous,p=!(e.email&&o.passwordHash)&&!(u!=null&&u.length),k=h?p:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new cu(o.createdAt,o.lastLoginAt),isAnonymous:k};Object.assign(e,A)}async function DE(e){const t=Tn(e);await Ro(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function LE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Om(e){return e.map(t=>{var{providerId:n}=t,r=gc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xE(e,t){const n=await Pm(e,{},async()=>{const r=Qi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,l=Rm(e,i,"/v1/token",`key=${o}`),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",Am.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ME(e,t){return $r(e,"POST","/v2/accounts:revokeToken",yc(e,t))}/**
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
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):nf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=nf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await xE(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new Ir;return r&&($(typeof r=="string","internal-error",{appName:t}),l.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),l.accessToken=i),o&&($(typeof o=="number","internal-error",{appName:t}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Xt(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ut{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=gc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new cu(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await bi(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return RE(this,t)}reload(){return DE(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(an(this.auth.app))return Promise.reject(jn(this.auth));const t=await this.getIdToken();return await bi(this,PE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,l,u,h,p,k;const A=(r=n.displayName)!==null&&r!==void 0?r:void 0,C=(i=n.email)!==null&&i!==void 0?i:void 0,O=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,L=(u=n.tenantId)!==null&&u!==void 0?u:void 0,z=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,E=(p=n.createdAt)!==null&&p!==void 0?p:void 0,w=(k=n.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:S,emailVerified:N,isAnonymous:M,providerData:U,stsTokenManager:m}=n;$(S&&m,t,"internal-error");const f=Ir.fromJSON(this.name,m);$(typeof S=="string",t,"internal-error"),Xt(A,t.name),Xt(C,t.name),$(typeof N=="boolean",t,"internal-error"),$(typeof M=="boolean",t,"internal-error"),Xt(O,t.name),Xt(R,t.name),Xt(L,t.name),Xt(z,t.name),Xt(E,t.name),Xt(w,t.name);const g=new Ut({uid:S,auth:t,email:C,emailVerified:N,displayName:A,isAnonymous:M,photoURL:R,phoneNumber:O,tenantId:L,stsTokenManager:f,createdAt:E,lastLoginAt:w});return U&&Array.isArray(U)&&(g.providerData=U.map(y=>Object.assign({},y))),z&&(g._redirectEventId=z),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new Ir;i.updateFromServerResponse(n);const o=new Ut({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ro(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Om(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Ir;u.updateFromIdToken(r);const h=new Ut({uid:i.localId,auth:t,stsTokenManager:u,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,p),h}}/**
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
 */const rf=new Map;function Ft(e){Ht(e instanceof Function,"Expected a class definition");let t=rf.get(e);return t?(Ht(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,rf.set(e,t),t)}/**
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
 */class Dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Dm.type="NONE";const sf=Dm;/**
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
 */function Xs(e,t,n){return`firebase:${e}:${t}:${n}`}class Tr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Xs(this.userKey,i.apiKey,o),this.fullPersistenceKey=Xs("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Tr(Ft(sf),t,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=i[0]||Ft(sf);const l=Xs(r,t.config.apiKey,t.name);let u=null;for(const p of n)try{const k=await p._get(l);if(k){const A=Ut._fromJSON(t,k);p!==o&&(u=A),o=p;break}}catch{}const h=i.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Tr(o,t,r):(o=h[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async p=>{if(p!==o)try{await p._remove(l)}catch{}})),new Tr(o,t,r))}}/**
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
 */function of(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Lm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fm(t))return"Blackberry";if(jm(t))return"Webos";if(_c(t))return"Safari";if((t.includes("chrome/")||xm(t))&&!t.includes("edge/"))return"Chrome";if(Um(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lm(e=Re()){return/firefox\//i.test(e)}function _c(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xm(e=Re()){return/crios\//i.test(e)}function Mm(e=Re()){return/iemobile/i.test(e)}function Um(e=Re()){return/android/i.test(e)}function Fm(e=Re()){return/blackberry/i.test(e)}function jm(e=Re()){return/webos/i.test(e)}function Zo(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function UE(e=Re()){var t;return Zo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function FE(){return Cw()&&document.documentMode===10}function zm(e=Re()){return Zo(e)||Um(e)||jm(e)||Fm(e)||/windows phone/i.test(e)||Mm(e)}function jE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $m(e,t=[]){let n;switch(e){case"Browser":n=of(Re());break;case"Worker":n=`${of(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class zE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((l,u)=>{try{const h=t(o);l(h)}catch(h){u(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $E(e,t={}){return $r(e,"GET","/v2/passwordPolicy",yc(e,t))}/**
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
 */const BE=6;class VE{constructor(t){var n,r,i,o;const l=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:BE,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,l,u;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=(n=h.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),h.isValid&&(h.isValid=(r=h.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(i=h.containsLowercaseLetter)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.containsUppercaseLetter)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(l=h.containsNumericCharacter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),h}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class bE{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lf(this),this.idTokenSubscription=new lf(this),this.beforeStateQueue=new zE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=km,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Tr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Nm(this,{idToken:t}),r=await Ut._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(an(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(t);(!l||l===u)&&(h!=null&&h.user)&&(i=h.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Ro(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=IE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(an(this.app))return Promise.reject(jn(this));const n=t?Tn(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return an(this.app)?Promise.reject(jn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return an(this.app)?Promise.reject(jn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await $E(this),n=new VE(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Xn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ME(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ft(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Tr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const h=t.addObserver(n,r,i);return()=>{l=!0,h()}}else{const h=t.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&_E(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ec(e){return Tn(e)}class lf{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dw(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HE(e){Sc=e}function WE(e){return Sc.loadJS(e)}function GE(){return Sc.gapiScript}function KE(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qE(e,t){const n=Yn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Bi(o,t??{}))return i;bt(i,"already-initialized")}return n.initialize({options:t})}function QE(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function XE(e,t,n){const r=Ec(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=Bm(t),{host:l,port:u}=YE(t),h=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${l}${h}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),JE()}function Bm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function YE(e){const t=Bm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:af(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:af(l)}}}function af(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function JE(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Vm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(t){return Mt("not implemented")}_linkToIdToken(t,n){return Mt("not implemented")}_getReauthenticationResolver(t){return Mt("not implemented")}}/**
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
 */async function kr(e,t){return CE(e,"POST","/v1/accounts:signInWithIdp",yc(e,t))}/**
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
 */const ZE="http://localhost";class Kn extends Vm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=gc(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Kn(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return kr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kr(t,n)}buildRequest(){const t={requestUri:ZE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Qi(n)}return t}}/**
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
 */class bm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yi extends bm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends Yi{constructor(){super("facebook.com")}static credential(t){return Kn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return tn.credentialFromTaggedObject(t)}static credentialFromError(t){return tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return tn.credential(t.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class rn extends Yi{constructor(){super("github.com")}static credential(t){return Kn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rn.credential(t.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
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
 */class sn extends Yi{constructor(){super("twitter.com")}static credential(t,n){return Kn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return sn.credentialFromTaggedObject(t)}static credentialFromError(t){return sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
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
 */class xr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await Ut._fromIdTokenResponse(t,r,i),l=uf(r);return new xr({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=uf(r);return new xr({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function uf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class No extends pt{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,No.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new No(t,n,r,i)}}function Hm(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(e,o,t,r):o})}async function eS(e,t,n=!1){const r=await bi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return xr._forOperation(e,"link",r)}/**
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
 */async function tS(e,t,n=!1){const{auth:r}=e;if(an(r.app))return Promise.reject(jn(r));const i="reauthenticate";try{const o=await bi(e,Hm(r,i,t,e),n);$(o.idToken,r,"internal-error");const l=wc(o.idToken);$(l,r,"internal-error");const{sub:u}=l;return $(e.uid===u,r,"user-mismatch"),xr._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),o}}/**
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
 */async function nS(e,t,n=!1){if(an(e.app))return Promise.reject(jn(e));const r="signIn",i=await Hm(e,r,t),o=await xr._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function rS(e,t,n,r){return Tn(e).onIdTokenChanged(t,n,r)}function iS(e,t,n){return Tn(e).beforeAuthStateChanged(t,n)}const Oo="__sak";/**
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
 */class Wm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function sS(){const e=Re();return _c(e)||Zo(e)}const oS=1e3,lS=10;class Gm extends Wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=sS()&&jE(),this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,u,h)=>{this.notifyListeners(l,h)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(t.newValue!==l)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);FE()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,lS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},oS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Gm.type="LOCAL";const aS=Gm;/**
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
 */class Km extends Wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Km.type="SESSION";const qm=Km;/**
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
 */function uS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class el{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new el(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async p=>p(n.origin,o)),h=await uS(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}el.receivers=[];/**
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
 */function Ic(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class cS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,h)=>{const p=Ic("",20);i.port1.start();const k=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(A){const C=A;if(C.data.eventId===p)switch(C.data.status){case"ack":clearTimeout(k),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(C.data.response);break;default:clearTimeout(k),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function St(){return window}function hS(e){St().location.href=e}/**
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
 */function Qm(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function dS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function pS(){return Qm()?self:null}/**
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
 */const Xm="firebaseLocalStorageDb",gS=1,Do="firebaseLocalStorage",Ym="fbase_key";class Ji{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tl(e,t){return e.transaction([Do],t?"readwrite":"readonly").objectStore(Do)}function mS(){const e=indexedDB.deleteDatabase(Xm);return new Ji(e).toPromise()}function hu(){const e=indexedDB.open(Xm,gS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Do,{keyPath:Ym})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Do)?t(r):(r.close(),await mS(),t(await hu()))})})}async function cf(e,t,n){const r=tl(e,!0).put({[Ym]:t,value:n});return new Ji(r).toPromise()}async function vS(e,t){const n=tl(e,!1).get(t),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function hf(e,t){const n=tl(e,!0).delete(t);return new Ji(n).toPromise()}const yS=800,wS=3;class Jm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>wS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=el._getInstance(pS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await dS(),!this.activeServiceWorker)return;this.sender=new cS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||fS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hu();return await cf(t,Oo,"1"),await hf(t,Oo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>vS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=tl(i,!1).getAll();return new Ji(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jm.type="LOCAL";const _S=Jm;new Xi(3e4,6e4);/**
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
 */function ES(e,t){return t?Ft(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Tc extends Vm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function SS(e){return nS(e.auth,new Tc(e),e.bypassAuthState)}function IS(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),tS(n,new Tc(e),e.bypassAuthState)}async function TS(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),eS(n,new Tc(e),e.bypassAuthState)}/**
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
 */class Zm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=t;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return SS;case"linkViaPopup":case"linkViaRedirect":return TS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:bt(this.auth,"internal-error")}}resolve(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const kS=new Xi(2e3,1e4);class mr extends Zm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const t=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,kS.get())};t()}}mr.currentPopupAction=null;/**
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
 */const CS="pendingRedirect",Ys=new Map;class AS extends Zm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ys.get(this.auth._key());if(!t){try{const r=await PS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ys.set(this.auth._key(),t)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PS(e,t){const n=OS(t),r=NS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RS(e,t){Ys.set(e._key(),t)}function NS(e){return Ft(e._redirectPersistence)}function OS(e){return Xs(CS,e.config.apiKey,e.name)}async function DS(e,t,n=!1){if(an(e.app))return Promise.reject(jn(e));const r=Ec(e),i=ES(r,t),l=await new AS(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,t)),l}/**
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
 */const LS=10*60*1e3;class xS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!MS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ev(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=LS&&this.cachedEventUids.clear(),this.cachedEventUids.has(df(t))}saveEventToCache(t){this.cachedEventUids.add(df(t)),this.lastProcessedEventTime=Date.now()}}function df(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ev({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function MS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ev(e);default:return!1}}/**
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
 */async function US(e,t={}){return $r(e,"GET","/v1/projects",t)}/**
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
 */const FS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jS=/^https?/;async function zS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await US(e);for(const n of t)try{if($S(n))return}catch{}bt(e,"unauthorized-domain")}function $S(e){const t=uu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const l=new URL(e);return l.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!jS.test(n))return!1;if(FS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const BS=new Xi(3e4,6e4);function ff(){const e=St().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function VS(e){return new Promise((t,n)=>{var r,i,o;function l(){ff(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ff(),n(Et(e,"network-request-failed"))},timeout:BS.get()})}if(!((i=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=St().gapi)===null||o===void 0)&&o.load)l();else{const u=KE("iframefcb");return St()[u]=()=>{gapi.load?l():n(Et(e,"network-request-failed"))},WE(`${GE()}?onload=${u}`).catch(h=>n(h))}}).catch(t=>{throw Js=null,t})}let Js=null;function bS(e){return Js=Js||VS(e),Js}/**
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
 */const HS=new Xi(5e3,15e3),WS="__/auth/iframe",GS="emulator/auth/iframe",KS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QS(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?vc(t,GS):`https://${e.config.authDomain}/${WS}`,r={apiKey:t.apiKey,appName:e.name,v:zr},i=qS.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Qi(r).slice(1)}`}async function XS(e){const t=await bS(e),n=St().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:QS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=Et(e,"network-request-failed"),u=St().setTimeout(()=>{o(l)},HS.get());function h(){St().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(l)})}))}/**
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
 */const YS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JS=500,ZS=600,eI="_blank",tI="http://localhost";class pf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nI(e,t,n,r=JS,i=ZS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h=Object.assign(Object.assign({},YS),{width:r.toString(),height:i.toString(),top:o,left:l}),p=Re().toLowerCase();n&&(u=xm(p)?eI:n),Lm(p)&&(t=t||tI,h.scrollbars="yes");const k=Object.entries(h).reduce((C,[O,R])=>`${C}${O}=${R},`,"");if(UE(p)&&u!=="_self")return rI(t||"",u),new pf(null);const A=window.open(t||"",u,k);$(A,e,"popup-blocked");try{A.focus()}catch{}return new pf(A)}function rI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iI="__/auth/handler",sI="emulator/auth/handler",oI=encodeURIComponent("fac");async function gf(e,t,n,r,i,o){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(t instanceof bm){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Ow(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[k,A]of Object.entries({}))l[k]=A}if(t instanceof Yi){const k=t.getScopes().filter(A=>A!=="");k.length>0&&(l.scopes=k.join(","))}e.tenantId&&(l.tid=e.tenantId);const u=l;for(const k of Object.keys(u))u[k]===void 0&&delete u[k];const h=await e._getAppCheckToken(),p=h?`#${oI}=${encodeURIComponent(h)}`:"";return`${lI(e)}?${Qi(u).slice(1)}${p}`}function lI({config:e}){return e.emulator?vc(e,sI):`https://${e.authDomain}/${iI}`}/**
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
 */const aa="webStorageSupport";class aI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qm,this._completeRedirectFn=DS,this._overrideRedirectResult=RS}async _openPopup(t,n,r,i){var o;Ht((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await gf(t,n,r,uu(),i);return nI(t,l,Ic())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await gf(t,n,r,uu(),i);return hS(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await XS(t),r=new xS(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(aa,{type:aa},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[aa];l!==void 0&&n(!!l),bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||_c()||Zo()}}const uI=aI;var mf="@firebase/auth",vf="1.7.5";/**
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
 */class cI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dI(e){It(new ft("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;$(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:u,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(e)},p=new bE(r,i,o,h);return QE(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),It(new ft("auth-internal",t=>{const n=Ec(t.getProvider("auth").getImmediate());return(r=>new cI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tt(mf,vf,hI(e)),tt(mf,vf,"esm2017")}/**
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
 */const fI=5*60,pI=bg("authIdTokenMaxAge")||fI;let yf=null;const gI=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pI)return;const i=n==null?void 0:n.token;yf!==i&&(yf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mI(e=cc()){const t=Yn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=qE(e,{popupRedirectResolver:uI,persistence:[_S,aS,qm]}),r=bg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=gI(o.toString());iS(n,l,()=>l(n.currentUser)),rS(n,u=>l(u))}}const i=Bg("auth");return i&&XE(n,`http://${i}`),n}function vI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}HE({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Et("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",vI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dI("Browser");var wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tv;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(m,f){function g(){}g.prototype=f.prototype,m.D=f.prototype,m.prototype=new g,m.prototype.constructor=m,m.C=function(y,_,T){for(var v=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)v[Qe-2]=arguments[Qe];return f.prototype[_].apply(y,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,f,g){g||(g=0);var y=Array(16);if(typeof f=="string")for(var _=0;16>_;++_)y[_]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(_=0;16>_;++_)y[_]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=m.g[0],g=m.g[1],_=m.g[2];var T=m.g[3],v=f+(T^g&(_^T))+y[0]+3614090360&4294967295;f=g+(v<<7&4294967295|v>>>25),v=T+(_^f&(g^_))+y[1]+3905402710&4294967295,T=f+(v<<12&4294967295|v>>>20),v=_+(g^T&(f^g))+y[2]+606105819&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(f^_&(T^f))+y[3]+3250441966&4294967295,g=_+(v<<22&4294967295|v>>>10),v=f+(T^g&(_^T))+y[4]+4118548399&4294967295,f=g+(v<<7&4294967295|v>>>25),v=T+(_^f&(g^_))+y[5]+1200080426&4294967295,T=f+(v<<12&4294967295|v>>>20),v=_+(g^T&(f^g))+y[6]+2821735955&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(f^_&(T^f))+y[7]+4249261313&4294967295,g=_+(v<<22&4294967295|v>>>10),v=f+(T^g&(_^T))+y[8]+1770035416&4294967295,f=g+(v<<7&4294967295|v>>>25),v=T+(_^f&(g^_))+y[9]+2336552879&4294967295,T=f+(v<<12&4294967295|v>>>20),v=_+(g^T&(f^g))+y[10]+4294925233&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(f^_&(T^f))+y[11]+2304563134&4294967295,g=_+(v<<22&4294967295|v>>>10),v=f+(T^g&(_^T))+y[12]+1804603682&4294967295,f=g+(v<<7&4294967295|v>>>25),v=T+(_^f&(g^_))+y[13]+4254626195&4294967295,T=f+(v<<12&4294967295|v>>>20),v=_+(g^T&(f^g))+y[14]+2792965006&4294967295,_=T+(v<<17&4294967295|v>>>15),v=g+(f^_&(T^f))+y[15]+1236535329&4294967295,g=_+(v<<22&4294967295|v>>>10),v=f+(_^T&(g^_))+y[1]+4129170786&4294967295,f=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(f^g))+y[6]+3225465664&4294967295,T=f+(v<<9&4294967295|v>>>23),v=_+(f^g&(T^f))+y[11]+643717713&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^f&(_^T))+y[0]+3921069994&4294967295,g=_+(v<<20&4294967295|v>>>12),v=f+(_^T&(g^_))+y[5]+3593408605&4294967295,f=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(f^g))+y[10]+38016083&4294967295,T=f+(v<<9&4294967295|v>>>23),v=_+(f^g&(T^f))+y[15]+3634488961&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^f&(_^T))+y[4]+3889429448&4294967295,g=_+(v<<20&4294967295|v>>>12),v=f+(_^T&(g^_))+y[9]+568446438&4294967295,f=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(f^g))+y[14]+3275163606&4294967295,T=f+(v<<9&4294967295|v>>>23),v=_+(f^g&(T^f))+y[3]+4107603335&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^f&(_^T))+y[8]+1163531501&4294967295,g=_+(v<<20&4294967295|v>>>12),v=f+(_^T&(g^_))+y[13]+2850285829&4294967295,f=g+(v<<5&4294967295|v>>>27),v=T+(g^_&(f^g))+y[2]+4243563512&4294967295,T=f+(v<<9&4294967295|v>>>23),v=_+(f^g&(T^f))+y[7]+1735328473&4294967295,_=T+(v<<14&4294967295|v>>>18),v=g+(T^f&(_^T))+y[12]+2368359562&4294967295,g=_+(v<<20&4294967295|v>>>12),v=f+(g^_^T)+y[5]+4294588738&4294967295,f=g+(v<<4&4294967295|v>>>28),v=T+(f^g^_)+y[8]+2272392833&4294967295,T=f+(v<<11&4294967295|v>>>21),v=_+(T^f^g)+y[11]+1839030562&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^f)+y[14]+4259657740&4294967295,g=_+(v<<23&4294967295|v>>>9),v=f+(g^_^T)+y[1]+2763975236&4294967295,f=g+(v<<4&4294967295|v>>>28),v=T+(f^g^_)+y[4]+1272893353&4294967295,T=f+(v<<11&4294967295|v>>>21),v=_+(T^f^g)+y[7]+4139469664&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^f)+y[10]+3200236656&4294967295,g=_+(v<<23&4294967295|v>>>9),v=f+(g^_^T)+y[13]+681279174&4294967295,f=g+(v<<4&4294967295|v>>>28),v=T+(f^g^_)+y[0]+3936430074&4294967295,T=f+(v<<11&4294967295|v>>>21),v=_+(T^f^g)+y[3]+3572445317&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^f)+y[6]+76029189&4294967295,g=_+(v<<23&4294967295|v>>>9),v=f+(g^_^T)+y[9]+3654602809&4294967295,f=g+(v<<4&4294967295|v>>>28),v=T+(f^g^_)+y[12]+3873151461&4294967295,T=f+(v<<11&4294967295|v>>>21),v=_+(T^f^g)+y[15]+530742520&4294967295,_=T+(v<<16&4294967295|v>>>16),v=g+(_^T^f)+y[2]+3299628645&4294967295,g=_+(v<<23&4294967295|v>>>9),v=f+(_^(g|~T))+y[0]+4096336452&4294967295,f=g+(v<<6&4294967295|v>>>26),v=T+(g^(f|~_))+y[7]+1126891415&4294967295,T=f+(v<<10&4294967295|v>>>22),v=_+(f^(T|~g))+y[14]+2878612391&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~f))+y[5]+4237533241&4294967295,g=_+(v<<21&4294967295|v>>>11),v=f+(_^(g|~T))+y[12]+1700485571&4294967295,f=g+(v<<6&4294967295|v>>>26),v=T+(g^(f|~_))+y[3]+2399980690&4294967295,T=f+(v<<10&4294967295|v>>>22),v=_+(f^(T|~g))+y[10]+4293915773&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~f))+y[1]+2240044497&4294967295,g=_+(v<<21&4294967295|v>>>11),v=f+(_^(g|~T))+y[8]+1873313359&4294967295,f=g+(v<<6&4294967295|v>>>26),v=T+(g^(f|~_))+y[15]+4264355552&4294967295,T=f+(v<<10&4294967295|v>>>22),v=_+(f^(T|~g))+y[6]+2734768916&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~f))+y[13]+1309151649&4294967295,g=_+(v<<21&4294967295|v>>>11),v=f+(_^(g|~T))+y[4]+4149444226&4294967295,f=g+(v<<6&4294967295|v>>>26),v=T+(g^(f|~_))+y[11]+3174756917&4294967295,T=f+(v<<10&4294967295|v>>>22),v=_+(f^(T|~g))+y[2]+718787259&4294967295,_=T+(v<<15&4294967295|v>>>17),v=g+(T^(_|~f))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+f&4294967295,m.g[1]=m.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+T&4294967295}r.prototype.u=function(m,f){f===void 0&&(f=m.length);for(var g=f-this.blockSize,y=this.B,_=this.h,T=0;T<f;){if(_==0)for(;T<=g;)i(this,m,T),T+=this.blockSize;if(typeof m=="string"){for(;T<f;)if(y[_++]=m.charCodeAt(T++),_==this.blockSize){i(this,y),_=0;break}}else for(;T<f;)if(y[_++]=m[T++],_==this.blockSize){i(this,y),_=0;break}}this.h=_,this.o+=f},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var f=1;f<m.length-8;++f)m[f]=0;var g=8*this.o;for(f=m.length-8;f<m.length;++f)m[f]=g&255,g/=256;for(this.u(m),m=Array(16),f=g=0;4>f;++f)for(var y=0;32>y;y+=8)m[g++]=this.g[f]>>>y&255;return m};function o(m,f){var g=u;return Object.prototype.hasOwnProperty.call(g,m)?g[m]:g[m]=f(m)}function l(m,f){this.h=f;for(var g=[],y=!0,_=m.length-1;0<=_;_--){var T=m[_]|0;y&&T==f||(g[_]=T,y=!1)}this.g=g}var u={};function h(m){return-128<=m&&128>m?o(m,function(f){return new l([f|0],0>f?-1:0)}):new l([m|0],0>m?-1:0)}function p(m){if(isNaN(m)||!isFinite(m))return A;if(0>m)return z(p(-m));for(var f=[],g=1,y=0;m>=g;y++)f[y]=m/g|0,g*=4294967296;return new l(f,0)}function k(m,f){if(m.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(m.charAt(0)=="-")return z(k(m.substring(1),f));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(f,8)),y=A,_=0;_<m.length;_+=8){var T=Math.min(8,m.length-_),v=parseInt(m.substring(_,_+T),f);8>T?(T=p(Math.pow(f,T)),y=y.j(T).add(p(v))):(y=y.j(g),y=y.add(p(v)))}return y}var A=h(0),C=h(1),O=h(16777216);e=l.prototype,e.m=function(){if(L(this))return-z(this).m();for(var m=0,f=1,g=0;g<this.g.length;g++){var y=this.i(g);m+=(0<=y?y:4294967296+y)*f,f*=4294967296}return m},e.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(L(this))return"-"+z(this).toString(m);for(var f=p(Math.pow(m,6)),g=this,y="";;){var _=N(g,f).g;g=E(g,_.j(f));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(m);if(g=_,R(g))return T+y;for(;6>T.length;)T="0"+T;y=T+y}},e.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var f=0;f<m.g.length;f++)if(m.g[f]!=0)return!1;return!0}function L(m){return m.h==-1}e.l=function(m){return m=E(this,m),L(m)?-1:R(m)?0:1};function z(m){for(var f=m.g.length,g=[],y=0;y<f;y++)g[y]=~m.g[y];return new l(g,~m.h).add(C)}e.abs=function(){return L(this)?z(this):this},e.add=function(m){for(var f=Math.max(this.g.length,m.g.length),g=[],y=0,_=0;_<=f;_++){var T=y+(this.i(_)&65535)+(m.i(_)&65535),v=(T>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);y=v>>>16,T&=65535,v&=65535,g[_]=v<<16|T}return new l(g,g[g.length-1]&-2147483648?-1:0)};function E(m,f){return m.add(z(f))}e.j=function(m){if(R(this)||R(m))return A;if(L(this))return L(m)?z(this).j(z(m)):z(z(this).j(m));if(L(m))return z(this.j(z(m)));if(0>this.l(O)&&0>m.l(O))return p(this.m()*m.m());for(var f=this.g.length+m.g.length,g=[],y=0;y<2*f;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<m.g.length;_++){var T=this.i(y)>>>16,v=this.i(y)&65535,Qe=m.i(_)>>>16,kn=m.i(_)&65535;g[2*y+2*_]+=v*kn,w(g,2*y+2*_),g[2*y+2*_+1]+=T*kn,w(g,2*y+2*_+1),g[2*y+2*_+1]+=v*Qe,w(g,2*y+2*_+1),g[2*y+2*_+2]+=T*Qe,w(g,2*y+2*_+2)}for(y=0;y<f;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=f;y<2*f;y++)g[y]=0;return new l(g,0)};function w(m,f){for(;(m[f]&65535)!=m[f];)m[f+1]+=m[f]>>>16,m[f]&=65535,f++}function S(m,f){this.g=m,this.h=f}function N(m,f){if(R(f))throw Error("division by zero");if(R(m))return new S(A,A);if(L(m))return f=N(z(m),f),new S(z(f.g),z(f.h));if(L(f))return f=N(m,z(f)),new S(z(f.g),f.h);if(30<m.g.length){if(L(m)||L(f))throw Error("slowDivide_ only works with positive integers.");for(var g=C,y=f;0>=y.l(m);)g=M(g),y=M(y);var _=U(g,1),T=U(y,1);for(y=U(y,2),g=U(g,2);!R(y);){var v=T.add(y);0>=v.l(m)&&(_=_.add(g),T=v),y=U(y,1),g=U(g,1)}return f=E(m,_.j(f)),new S(_,f)}for(_=A;0<=m.l(f);){for(g=Math.max(1,Math.floor(m.m()/f.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),T=p(g),v=T.j(f);L(v)||0<v.l(m);)g-=y,T=p(g),v=T.j(f);R(T)&&(T=C),_=_.add(T),m=E(m,v)}return new S(_,m)}e.A=function(m){return N(this,m).h},e.and=function(m){for(var f=Math.max(this.g.length,m.g.length),g=[],y=0;y<f;y++)g[y]=this.i(y)&m.i(y);return new l(g,this.h&m.h)},e.or=function(m){for(var f=Math.max(this.g.length,m.g.length),g=[],y=0;y<f;y++)g[y]=this.i(y)|m.i(y);return new l(g,this.h|m.h)},e.xor=function(m){for(var f=Math.max(this.g.length,m.g.length),g=[],y=0;y<f;y++)g[y]=this.i(y)^m.i(y);return new l(g,this.h^m.h)};function M(m){for(var f=m.g.length+1,g=[],y=0;y<f;y++)g[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(g,m.h)}function U(m,f){var g=f>>5;f%=32;for(var y=m.g.length-g,_=[],T=0;T<y;T++)_[T]=0<f?m.i(T+g)>>>f|m.i(T+g+1)<<32-f:m.i(T+g);return new l(_,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=k,tv=l}).apply(typeof wf<"u"?wf:typeof self<"u"?self:typeof window<"u"?window:{});var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Us=="object"&&Us];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=n(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var d=0;d<s.length-1;d++){var I=s[d];if(!(I in c))break e;c=c[I]}s=s[s.length-1],d=c[s],a=a(d),a!=d&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,d=!1,I={next:function(){if(!d&&c<s.length){var P=c++;return{value:a(P,s[P]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function p(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function k(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function C(s,a,c){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:A,C.apply(null,arguments)}function O(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();return d.push.apply(d,arguments),s.apply(this,d)}}function R(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(d,I,P){for(var x=Array(arguments.length-2),X=2;X<arguments.length;X++)x[X-2]=arguments[X];return a.prototype[I].apply(d,x)}}function L(s){const a=s.length;if(0<a){const c=Array(a);for(let d=0;d<a;d++)c[d]=s[d];return c}return[]}function z(s,a){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(h(d)){const I=s.length||0,P=d.length||0;s.length=I+P;for(let x=0;x<P;x++)s[I+x]=d[x]}else s.push(d)}}class E{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function w(s){return/^[\s\xa0]*$/.test(s)}function S(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function N(s){return N[" "](s),s}N[" "]=function(){};var M=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(s,a,c){for(const d in s)a.call(c,s[d],d,s)}function m(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function f(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(c in d)s[c]=d[c];for(let P=0;P<g.length;P++)c=g[P],Object.prototype.hasOwnProperty.call(d,c)&&(s[c]=d[c])}}function _(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function T(s){u.setTimeout(()=>{throw s},0)}function v(){var s=B;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Qe{constructor(){this.h=this.g=null}add(a,c){const d=kn.get();d.set(a,c),this.h?this.h.next=d:this.g=d,this.h=d}}var kn=new E(()=>new Br,s=>s.reset());class Br{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Tt,F=!1,B=new Qe,V=()=>{const s=u.Promise.resolve(void 0);Tt=()=>{s.then(ne)}};var ne=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(c){T(c)}var a=kn;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var kt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Ct(s,a){if(le.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,d=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(M){e:{try{N(a.nodeName);var I=!0;break e}catch{}I=!1}I||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:At[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ct.aa.h.call(this)}}R(Ct,le);var At={2:"touch",3:"pen",4:"mouse"};Ct.prototype.h=function(){Ct.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),lv=0;function av(s,a,c,d,I){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!d,this.ha=I,this.key=++lv,this.da=this.fa=!1}function es(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function ts(s){this.src=s,this.g={},this.h=0}ts.prototype.add=function(s,a,c,d,I){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var x=rl(s,a,d,I);return-1<x?(a=s[x],c||(a.fa=!1)):(a=new av(a,this.src,P,!!d,I),a.fa=c,s.push(a)),a};function nl(s,a){var c=a.type;if(c in s.g){var d=s.g[c],I=Array.prototype.indexOf.call(d,a,void 0),P;(P=0<=I)&&Array.prototype.splice.call(d,I,1),P&&(es(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function rl(s,a,c,d){for(var I=0;I<s.length;++I){var P=s[I];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==d)return I}return-1}var il="closure_lm_"+(1e6*Math.random()|0),sl={};function Rc(s,a,c,d,I){if(Array.isArray(a)){for(var P=0;P<a.length;P++)Rc(s,a[P],c,d,I);return null}return c=Dc(c),s&&s[Pt]?s.K(a,c,p(d)?!!d.capture:!!d,I):uv(s,a,c,!1,d,I)}function uv(s,a,c,d,I,P){if(!a)throw Error("Invalid event type");var x=p(I)?!!I.capture:!!I,X=ll(s);if(X||(s[il]=X=new ts(s)),c=X.add(a,c,d,x,P),c.proxy)return c;if(d=cv(),c.proxy=d,d.src=s,d.listener=c,s.addEventListener)kt||(I=x),I===void 0&&(I=!1),s.addEventListener(a.toString(),d,I);else if(s.attachEvent)s.attachEvent(Oc(a.toString()),d);else if(s.addListener&&s.removeListener)s.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return c}function cv(){function s(c){return a.call(s.src,s.listener,c)}const a=hv;return s}function Nc(s,a,c,d,I){if(Array.isArray(a))for(var P=0;P<a.length;P++)Nc(s,a[P],c,d,I);else d=p(d)?!!d.capture:!!d,c=Dc(c),s&&s[Pt]?(s=s.i,a=String(a).toString(),a in s.g&&(P=s.g[a],c=rl(P,c,d,I),-1<c&&(es(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[a],s.h--)))):s&&(s=ll(s))&&(a=s.g[a.toString()],s=-1,a&&(s=rl(a,c,d,I)),(c=-1<s?a[s]:null)&&ol(c))}function ol(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Pt])nl(a.i,s);else{var c=s.type,d=s.proxy;a.removeEventListener?a.removeEventListener(c,d,s.capture):a.detachEvent?a.detachEvent(Oc(c),d):a.addListener&&a.removeListener&&a.removeListener(d),(c=ll(a))?(nl(c,s),c.h==0&&(c.src=null,a[il]=null)):es(s)}}}function Oc(s){return s in sl?sl[s]:sl[s]="on"+s}function hv(s,a){if(s.da)s=!0;else{a=new Ct(a,this);var c=s.listener,d=s.ha||s.src;s.fa&&ol(s),s=c.call(d,a)}return s}function ll(s){return s=s[il],s instanceof ts?s:null}var al="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dc(s){return typeof s=="function"?s:(s[al]||(s[al]=function(a){return s.handleEvent(a)}),s[al])}function we(){Q.call(this),this.i=new ts(this),this.M=this,this.F=null}R(we,Q),we.prototype[Pt]=!0,we.prototype.removeEventListener=function(s,a,c,d){Nc(this,s,a,c,d)};function Ne(s,a){var c,d=s.F;if(d)for(c=[];d;d=d.F)c.push(d);if(s=s.M,d=a.type||a,typeof a=="string")a=new le(a,s);else if(a instanceof le)a.target=a.target||s;else{var I=a;a=new le(d,s),y(a,I)}if(I=!0,c)for(var P=c.length-1;0<=P;P--){var x=a.g=c[P];I=ns(x,d,!0,a)&&I}if(x=a.g=s,I=ns(x,d,!0,a)&&I,I=ns(x,d,!1,a)&&I,c)for(P=0;P<c.length;P++)x=a.g=c[P],I=ns(x,d,!1,a)&&I}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],d=0;d<c.length;d++)es(c[d]);delete s.g[a],s.h--}}this.F=null},we.prototype.K=function(s,a,c,d){return this.i.add(String(s),a,!1,c,d)},we.prototype.L=function(s,a,c,d){return this.i.add(String(s),a,!0,c,d)};function ns(s,a,c,d){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,P=0;P<a.length;++P){var x=a[P];if(x&&!x.da&&x.capture==c){var X=x.listener,ge=x.ha||x.src;x.fa&&nl(s.i,x),I=X.call(ge,d)!==!1&&I}}return I&&!d.defaultPrevented}function Lc(s,a,c){if(typeof s=="function")c&&(s=C(s,c));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function xc(s){s.g=Lc(()=>{s.g=null,s.i&&(s.i=!1,xc(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class dv extends Q{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:xc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vr(s){Q.call(this),this.h=s,this.g={}}R(Vr,Q);var Mc=[];function Uc(s){U(s.g,function(a,c){this.g.hasOwnProperty(c)&&ol(a)},s),s.g={}}Vr.prototype.N=function(){Vr.aa.N.call(this),Uc(this)},Vr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ul=u.JSON.stringify,fv=u.JSON.parse,pv=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function cl(){}cl.prototype.h=null;function Fc(s){return s.h||(s.h=s.i())}function gv(){}var br={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function hl(){le.call(this,"d")}R(hl,le);function dl(){le.call(this,"c")}R(dl,le);var Jn={},jc=null;function fl(){return jc=jc||new we}Jn.La="serverreachability";function zc(s){le.call(this,Jn.La,s)}R(zc,le);function Hr(s){const a=fl();Ne(a,new zc(a))}Jn.STAT_EVENT="statevent";function $c(s,a){le.call(this,Jn.STAT_EVENT,s),this.stat=a}R($c,le);function Oe(s){const a=fl();Ne(a,new $c(a,s))}Jn.Ma="timingevent";function Bc(s,a){le.call(this,Jn.Ma,s),this.size=a}R(Bc,le);function Wr(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function mv(s,a,c,d,I,P){s.info(function(){if(s.g)if(P)for(var x="",X=P.split("&"),ge=0;ge<X.length;ge++){var G=X[ge].split("=");if(1<G.length){var _e=G[0];G=G[1];var Ee=_e.split("_");x=2<=Ee.length&&Ee[1]=="type"?x+(_e+"="+G+"&"):x+(_e+"=redacted&")}}else x=null;else x=P;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+c+`
`+x})}function vv(s,a,c,d,I,P,x){s.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+c+`
`+P+" "+x})}function Zn(s,a,c,d){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+wv(s,c)+(d?" "+d:"")})}function yv(s,a){s.info(function(){return"TIMEOUT: "+a})}Gr.prototype.info=function(){};function wv(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var d=c[s];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var P=I[0];if(P!="noop"&&P!="stop"&&P!="close")for(var x=1;x<I.length;x++)I[x]=""}}}}return ul(c)}catch{return a}}var pl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_v={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gl;function rs(){}R(rs,cl),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},gl=new rs;function Gt(s,a,c,d){this.j=s,this.i=a,this.l=c,this.R=d||1,this.U=new Vr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vc}function Vc(){this.i=null,this.g="",this.h=!1}var bc={},ml={};function vl(s,a,c){s.L=1,s.v=ls(Rt(a)),s.m=c,s.P=!0,Hc(s,null)}function Hc(s,a){s.F=Date.now(),is(s),s.A=Rt(s.v);var c=s.A,d=s.R;Array.isArray(d)||(d=[String(d)]),ih(c.i,"t",d),s.C=0,c=s.j.J,s.h=new Vc,s.g=Sh(s.j,c?a:null,!s.m),0<s.O&&(s.M=new dv(C(s.Y,s,s.g),s.O)),a=s.U,c=s.g,d=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(Mc[0]=I.toString()),I=Mc);for(var P=0;P<I.length;P++){var x=Rc(c,I[P],d||a.handleEvent,!1,a.h||a);if(!x)break;a.g[x.key]=x}a=s.H?f(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Hr(),mv(s.i,s.u,s.A,s.l,s.R,s.m)}Gt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Gt.prototype.Y=function(s){try{if(s==this.g)e:{const Ee=Nt(this.g);var a=this.g.Ba();const nr=this.g.Z();if(!(3>Ee)&&(Ee!=3||this.g&&(this.h.h||this.g.oa()||hh(this.g)))){this.J||Ee!=4||a==7||(a==8||0>=nr?Hr(3):Hr(2)),yl(this);var c=this.g.Z();this.X=c;t:if(Wc(this)){var d=hh(this.g);s="";var I=d.length,P=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cn(this),Kr(this);var x="";break t}this.h.i=new u.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(d[a],{stream:!(P&&a==I-1)});d.length=0,this.h.g+=s,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=c==200,vv(this.i,this.u,this.A,this.l,this.R,Ee,c),this.o){if(this.T&&!this.K){t:{if(this.g){var X,ge=this.g;if((X=ge.g?ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(X)){var G=X;break t}}G=null}if(c=G)Zn(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wl(this,c);else{this.o=!1,this.s=3,Oe(12),Cn(this),Kr(this);break e}}if(this.P){c=!0;let st;for(;!this.J&&this.C<x.length;)if(st=Ev(this,x),st==ml){Ee==4&&(this.s=4,Oe(14),c=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(st==bc){this.s=4,Oe(15),Zn(this.i,this.l,x,"[Invalid Chunk]"),c=!1;break}else Zn(this.i,this.l,st,null),wl(this,st);if(Wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ee!=4||x.length!=0||this.h.h||(this.s=1,Oe(16),c=!1),this.o=this.o&&c,!c)Zn(this.i,this.l,x,"[Invalid Chunked Response]"),Cn(this),Kr(this);else if(0<x.length&&!this.W){this.W=!0;var _e=this.j;_e.g==this&&_e.ba&&!_e.M&&(_e.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),kl(_e),_e.M=!0,Oe(11))}}else Zn(this.i,this.l,x,null),wl(this,x);Ee==4&&Cn(this),this.o&&!this.J&&(Ee==4?yh(this.j,this):(this.o=!1,is(this)))}else jv(this.g),c==400&&0<x.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),Cn(this),Kr(this)}}}catch{}finally{}};function Wc(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Ev(s,a){var c=s.C,d=a.indexOf(`
`,c);return d==-1?ml:(c=Number(a.substring(c,d)),isNaN(c)?bc:(d+=1,d+c>a.length?ml:(a=a.slice(d,d+c),s.C=d+c,a)))}Gt.prototype.cancel=function(){this.J=!0,Cn(this)};function is(s){s.S=Date.now()+s.I,Gc(s,s.I)}function Gc(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Wr(C(s.ba,s),a)}function yl(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Gt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(yv(this.i,this.A),this.L!=2&&(Hr(),Oe(17)),Cn(this),this.s=2,Kr(this)):Gc(this,this.S-s)};function Kr(s){s.j.G==0||s.J||yh(s.j,s)}function Cn(s){yl(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Uc(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function wl(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||_l(c.h,s))){if(!s.K&&_l(c.h,s)&&c.G==3){try{var d=c.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)fs(c),hs(c);else break e;Tl(c),Oe(18)}}else c.za=I[1],0<c.za-c.T&&37500>I[2]&&c.F&&c.v==0&&!c.C&&(c.C=Wr(C(c.Za,c),6e3));if(1>=Qc(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Pn(c,11)}else if((s.K||c.g==s)&&fs(c),!w(a))for(I=c.Da.g.parse(a),a=0;a<I.length;a++){let G=I[a];if(c.T=G[0],G=G[1],c.G==2)if(G[0]=="c"){c.K=G[1],c.ia=G[2];const _e=G[3];_e!=null&&(c.la=_e,c.j.info("VER="+c.la));const Ee=G[4];Ee!=null&&(c.Aa=Ee,c.j.info("SVER="+c.Aa));const nr=G[5];nr!=null&&typeof nr=="number"&&0<nr&&(d=1.5*nr,c.L=d,c.j.info("backChannelRequestTimeoutMs_="+d)),d=c;const st=s.g;if(st){const ps=st.g?st.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ps){var P=d.h;P.g||ps.indexOf("spdy")==-1&&ps.indexOf("quic")==-1&&ps.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(El(P,P.h),P.h=null))}if(d.D){const Cl=st.g?st.g.getResponseHeader("X-HTTP-Session-Id"):null;Cl&&(d.ya=Cl,J(d.I,d.D,Cl))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),d=c;var x=s;if(d.qa=Eh(d,d.J?d.ia:null,d.W),x.K){Xc(d.h,x);var X=x,ge=d.L;ge&&(X.I=ge),X.B&&(yl(X),is(X)),d.g=x}else mh(d);0<c.i.length&&ds(c)}else G[0]!="stop"&&G[0]!="close"||Pn(c,7);else c.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?Pn(c,7):Il(c):G[0]!="noop"&&c.l&&c.l.ta(G),c.v=0)}}Hr(4)}catch{}}var Sv=class{constructor(s,a){this.g=s,this.map=a}};function Kc(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qc(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Qc(s){return s.h?1:s.g?s.g.size:0}function _l(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function El(s,a){s.g?s.g.add(a):s.h=a}function Xc(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}Kc.prototype.cancel=function(){if(this.i=Yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Yc(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return L(s.i)}function Iv(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],c=s.length,d=0;d<c;d++)a.push(s[d]);return a}a=[],c=0;for(d in s)a[c++]=s[d];return a}function Tv(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const d in s)a[c++]=d;return a}}}function Jc(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Tv(s),d=Iv(s),I=d.length,P=0;P<I;P++)a.call(void 0,d[P],c&&c[P],s)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kv(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var d=s[c].indexOf("="),I=null;if(0<=d){var P=s[c].substring(0,d);I=s[c].substring(d+1)}else P=s[c];a(P,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function An(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof An){this.h=s.h,ss(this,s.j),this.o=s.o,this.g=s.g,os(this,s.s),this.l=s.l;var a=s.i,c=new Xr;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),eh(this,c),this.m=s.m}else s&&(a=String(s).match(Zc))?(this.h=!1,ss(this,a[1]||"",!0),this.o=qr(a[2]||""),this.g=qr(a[3]||"",!0),os(this,a[4]),this.l=qr(a[5]||"",!0),eh(this,a[6]||"",!0),this.m=qr(a[7]||"")):(this.h=!1,this.i=new Xr(null,this.h))}An.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Qr(a,th,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Qr(a,th,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(Qr(c,c.charAt(0)=="/"?Pv:Av,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",Qr(c,Nv)),s.join("")};function Rt(s){return new An(s)}function ss(s,a,c){s.j=c?qr(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function os(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function eh(s,a,c){a instanceof Xr?(s.i=a,Ov(s.i,s.h)):(c||(a=Qr(a,Rv)),s.i=new Xr(a,s.h))}function J(s,a,c){s.i.set(a,c)}function ls(s){return J(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function qr(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Qr(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Cv),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Cv(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var th=/[#\/\?@]/g,Av=/[#\?:]/g,Pv=/[#\?]/g,Rv=/[#\?@]/g,Nv=/#/g;function Xr(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Kt(s){s.g||(s.g=new Map,s.h=0,s.i&&kv(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}e=Xr.prototype,e.add=function(s,a){Kt(this),this.i=null,s=er(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function nh(s,a){Kt(s),a=er(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function rh(s,a){return Kt(s),a=er(s,a),s.g.has(a)}e.forEach=function(s,a){Kt(this),this.g.forEach(function(c,d){c.forEach(function(I){s.call(a,I,d,this)},this)},this)},e.na=function(){Kt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let d=0;d<a.length;d++){const I=s[d];for(let P=0;P<I.length;P++)c.push(a[d])}return c},e.V=function(s){Kt(this);let a=[];if(typeof s=="string")rh(this,s)&&(a=a.concat(this.g.get(er(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},e.set=function(s,a){return Kt(this),this.i=null,s=er(this,s),rh(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},e.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function ih(s,a,c){nh(s,a),0<c.length&&(s.i=null,s.g.set(er(s,a),L(c)),s.h+=c.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var d=a[c];const P=encodeURIComponent(String(d)),x=this.V(d);for(d=0;d<x.length;d++){var I=P;x[d]!==""&&(I+="="+encodeURIComponent(String(x[d]))),s.push(I)}}return this.i=s.join("&")};function er(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Ov(s,a){a&&!s.j&&(Kt(s),s.i=null,s.g.forEach(function(c,d){var I=d.toLowerCase();d!=I&&(nh(this,d),ih(this,I,c))},s)),s.j=a}function Dv(s,a){const c=new Gr;if(u.Image){const d=new Image;d.onload=O(qt,c,"TestLoadImage: loaded",!0,a,d),d.onerror=O(qt,c,"TestLoadImage: error",!1,a,d),d.onabort=O(qt,c,"TestLoadImage: abort",!1,a,d),d.ontimeout=O(qt,c,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=s}else a(!1)}function Lv(s,a){const c=new Gr,d=new AbortController,I=setTimeout(()=>{d.abort(),qt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:d.signal}).then(P=>{clearTimeout(I),P.ok?qt(c,"TestPingServer: ok",!0,a):qt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),qt(c,"TestPingServer: error",!1,a)})}function qt(s,a,c,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(c)}catch{}}function xv(){this.g=new pv}function Mv(s,a,c){const d=c||"";try{Jc(s,function(I,P){let x=I;p(I)&&(x=ul(I)),a.push(d+P+"="+encodeURIComponent(x))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function as(s){this.l=s.Ub||null,this.j=s.eb||!1}R(as,cl),as.prototype.g=function(){return new us(this.l,this.j)},as.prototype.i=function(s){return function(){return s}}({});function us(s,a){we.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(us,we),e=us.prototype,e.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Jr(this)},e.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},e.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Jr(this)),this.g&&(this.readyState=3,Jr(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sh(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function sh(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}e.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Yr(this):Jr(this),this.readyState==3&&sh(this)}},e.Ra=function(s){this.g&&(this.response=this.responseText=s,Yr(this))},e.Qa=function(s){this.g&&(this.response=s,Yr(this))},e.ga=function(){this.g&&Yr(this)};function Yr(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Jr(s)}e.setRequestHeader=function(s,a){this.u.append(s,a)},e.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function Jr(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(us.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function oh(s){let a="";return U(s,function(c,d){a+=d,a+=":",a+=c,a+=`\r
`}),a}function Sl(s,a,c){e:{for(d in c){var d=!1;break e}d=!0}d||(c=oh(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):J(s,a,c))}function ae(s){we.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ae,we);var Uv=/^https?$/i,Fv=["POST","PUT"];e=ae.prototype,e.Ha=function(s){this.J=s},e.ea=function(s,a,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gl.g(),this.v=this.o?Fc(this.o):Fc(gl),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(P){lh(this,P);return}if(s=c||"",c=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)c.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const P of d.keys())c.set(P,d.get(P));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),I=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Fv,a,void 0))||d||I||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,x]of c)this.g.setRequestHeader(P,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ch(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){lh(this,P)}};function lh(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,ah(s),cs(s)}function ah(s){s.A||(s.A=!0,Ne(s,"complete"),Ne(s,"error"))}e.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Ne(this,"complete"),Ne(this,"abort"),cs(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),ae.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},e.bb=function(){uh(this)};function uh(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)Lc(s.Ea,0,s);else if(Ne(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const x=s.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var d;if(d=x===0){var I=String(s.D).match(Zc)[1]||null;!I&&u.self&&u.self.location&&(I=u.self.location.protocol.slice(0,-1)),d=!Uv.test(I?I.toLowerCase():"")}c=d}if(c)Ne(s,"complete"),Ne(s,"success");else{s.m=6;try{var P=2<Nt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",ah(s)}}finally{cs(s)}}}}function cs(s,a){if(s.g){ch(s);const c=s.g,d=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Ne(s,"ready");try{c.onreadystatechange=d}catch{}}}function ch(s){s.I&&(u.clearTimeout(s.I),s.I=null)}e.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}e.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),fv(a)}};function hh(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function jv(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<s.length;d++){if(w(s[d]))continue;var c=_(s[d]);const I=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[I]||[];a[I]=P,P.push(c)}m(a,function(d){return d.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function dh(s){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zr("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zr("baseRetryDelayMs",5e3,s),this.cb=Zr("retryDelaySeedMs",1e4,s),this.Wa=Zr("forwardChannelMaxRetries",2,s),this.wa=Zr("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new Kc(s&&s.concurrentRequestLimit),this.Da=new xv,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=dh.prototype,e.la=8,e.G=1,e.connect=function(s,a,c,d){Oe(0),this.W=s,this.H=a||{},c&&d!==void 0&&(this.H.OSID=c,this.H.OAID=d),this.F=this.X,this.I=Eh(this,null,this.W),ds(this)};function Il(s){if(fh(s),s.G==3){var a=s.U++,c=Rt(s.I);if(J(c,"SID",s.K),J(c,"RID",a),J(c,"TYPE","terminate"),ei(s,c),a=new Gt(s,s.j,a),a.L=2,a.v=ls(Rt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Sh(a.j,null),a.g.ea(a.v)),a.F=Date.now(),is(a)}_h(s)}function hs(s){s.g&&(kl(s),s.g.cancel(),s.g=null)}function fh(s){hs(s),s.u&&(u.clearTimeout(s.u),s.u=null),fs(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function ds(s){if(!qc(s.h)&&!s.s){s.s=!0;var a=s.Ga;Tt||V(),F||(Tt(),F=!0),B.add(a,s),s.B=0}}function zv(s,a){return Qc(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Wr(C(s.Ga,s,a),wh(s,s.B)),s.B++,!0)}e.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new Gt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=f(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(I.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var d=this.i[c];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=gh(this,I,a),c=Rt(this.I),J(c,"RID",s),J(c,"CVER",22),this.D&&J(c,"X-HTTP-Session-Id",this.D),ei(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(oh(P)))+"&"+a:this.m&&Sl(c,this.m,P)),El(this.h,I),this.Ua&&J(c,"TYPE","init"),this.P?(J(c,"$req",a),J(c,"SID","null"),I.T=!0,vl(I,c,null)):vl(I,c,a),this.G=2}}else this.G==3&&(s?ph(this,s):this.i.length==0||qc(this.h)||ph(this))};function ph(s,a){var c;a?c=a.l:c=s.U++;const d=Rt(s.I);J(d,"SID",s.K),J(d,"RID",c),J(d,"AID",s.T),ei(s,d),s.m&&s.o&&Sl(d,s.m,s.o),c=new Gt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=gh(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),El(s.h,c),vl(c,d,a)}function ei(s,a){s.H&&U(s.H,function(c,d){J(a,d,c)}),s.l&&Jc({},function(c,d){J(a,d,c)})}function gh(s,a,c){c=Math.min(s.i.length,c);var d=s.l?C(s.l.Na,s.l,s):null;e:{var I=s.i;let P=-1;for(;;){const x=["count="+c];P==-1?0<c?(P=I[0].g,x.push("ofs="+P)):P=0:x.push("ofs="+P);let X=!0;for(let ge=0;ge<c;ge++){let G=I[ge].g;const _e=I[ge].map;if(G-=P,0>G)P=Math.max(0,I[ge].g-100),X=!1;else try{Mv(_e,x,"req"+G+"_")}catch{d&&d(_e)}}if(X){d=x.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,d}function mh(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Tt||V(),F||(Tt(),F=!0),B.add(a,s),s.v=0}}function Tl(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Wr(C(s.Fa,s),wh(s,s.v)),s.v++,!0)}e.Fa=function(){if(this.u=null,vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Wr(C(this.ab,this),s)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),hs(this),vh(this))};function kl(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function vh(s){s.g=new Gt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Rt(s.qa);J(a,"RID","rpc"),J(a,"SID",s.K),J(a,"AID",s.T),J(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&J(a,"TO",s.ja),J(a,"TYPE","xmlhttp"),ei(s,a),s.m&&s.o&&Sl(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=ls(Rt(a)),c.m=null,c.P=!0,Hc(c,s)}e.Za=function(){this.C!=null&&(this.C=null,hs(this),Tl(this),Oe(19))};function fs(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function yh(s,a){var c=null;if(s.g==a){fs(s),kl(s),s.g=null;var d=2}else if(_l(s.h,a))c=a.D,Xc(s.h,a),d=1;else return;if(s.G!=0){if(a.o)if(d==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;d=fl(),Ne(d,new Bc(d,c)),ds(s)}else mh(s);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&zv(s,a)||d==2&&Tl(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),I){case 1:Pn(s,5);break;case 4:Pn(s,10);break;case 3:Pn(s,6);break;default:Pn(s,2)}}}function wh(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Pn(s,a){if(s.j.info("Error code "+a),a==2){var c=C(s.fb,s),d=s.Xa;const I=!d;d=new An(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ss(d,"https"),ls(d),I?Dv(d.toString(),c):Lv(d.toString(),c)}else Oe(2);s.G=0,s.l&&s.l.sa(a),_h(s),fh(s)}e.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function _h(s){if(s.G=0,s.ka=[],s.l){const a=Yc(s.h);(a.length!=0||s.i.length!=0)&&(z(s.ka,a),z(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Eh(s,a,c){var d=c instanceof An?Rt(c):new An(c);if(d.g!="")a&&(d.g=a+"."+d.g),os(d,d.s);else{var I=u.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var P=new An(null);d&&ss(P,d),a&&(P.g=a),I&&os(P,I),c&&(P.l=c),d=P}return c=s.D,a=s.ya,c&&a&&J(d,c,a),J(d,"VER",s.la),ei(s,d),d}function Sh(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ae(new as({eb:c})):new ae(s.pa),a.Ha(s.J),a}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ih(){}e=Ih.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Xe(s,a){we.call(this),this.g=new dh(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!w(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!w(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new tr(this)}R(Xe,we),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){Il(this.g)},Xe.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=ul(s),s=c);a.i.push(new Sv(a.Ya++,s)),a.G==3&&ds(a)},Xe.prototype.N=function(){this.g.l=null,delete this.j,Il(this.g),delete this.g,Xe.aa.N.call(this)};function Th(s){hl.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}R(Th,hl);function kh(){dl.call(this),this.status=1}R(kh,dl);function tr(s){this.g=s}R(tr,Ih),tr.prototype.ua=function(){Ne(this.g,"a")},tr.prototype.ta=function(s){Ne(this.g,new Th(s))},tr.prototype.sa=function(s){Ne(this.g,new kh)},tr.prototype.ra=function(){Ne(this.g,"b")},Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,pl.NO_ERROR=0,pl.TIMEOUT=8,pl.HTTP_ERROR=6,_v.COMPLETE="complete",gv.EventType=br,br.OPEN="a",br.CLOSE="b",br.ERROR="c",br.MESSAGE="d",we.prototype.listen=we.prototype.K,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha}).apply(typeof Us<"u"?Us:typeof self<"u"?self:typeof window<"u"?window:{});const _f="@firebase/firestore";/**
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
 */class Te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
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
 */let Zi="10.12.3";/**
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
 */const Mr=new Xo("@firebase/firestore");function be(e,...t){if(Mr.logLevel<=K.DEBUG){const n=t.map(Cc);Mr.debug(`Firestore (${Zi}): ${e}`,...n)}}function kc(e,...t){if(Mr.logLevel<=K.ERROR){const n=t.map(Cc);Mr.error(`Firestore (${Zi}): ${e}`,...n)}}function yI(e,...t){if(Mr.logLevel<=K.WARN){const n=t.map(Cc);Mr.warn(`Firestore (${Zi}): ${e}`,...n)}}function Cc(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Ac(e="Unexpected state"){const t=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+e;throw kc(t),new Error(t)}function du(e,t){e||Ac()}/**
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
 */const Ce={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ae extends pt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class nv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Te.UNAUTHENTICATED))}shutdown(){}}class _I{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EI{constructor(t){this.t=t,this.currentUser=Te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Cr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Cr,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(be("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Cr)}},0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(du(typeof r.accessToken=="string"),new nv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return du(t===null||typeof t=="string"),new Te(t)}}class SI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class II{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new SI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=o=>{o.error!=null&&be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,be("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(du(typeof n.token=="string"),this.R=n.token,new TI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function CI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class AI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=CI(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function rv(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class PI{constructor(t,n,r,i,o,l,u,h,p){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=p}}class Lo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Lo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var Ef,H;(H=Ef||(Ef={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new tv([4294967295,4294967295],0);function ua(){return typeof document<"u"?document:null}/**
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
 */class RI{constructor(t,n,r=1e3,i=1.5,o=6e4){this.oi=t,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&be("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Pc{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,o){const l=Date.now()+r,u=new Pc(t,n,l,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ae(Ce.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function NI(e,t){if(kc("AsyncQueue",`${t}: ${e}`),rv(e))return new Ae(Ce.UNAVAILABLE,`${t}: ${e}`);throw e}var Sf,If;(If=Sf||(Sf={})).J_="default",If.Cache="cache";/**
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
 */class OI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Te.UNAUTHENTICATED,this.clientId=AI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{be("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(be("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ae(Ce.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=NI(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function iv(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Tf=new Map;function DI(e,t,n,r){if(t===!0&&r===!0)throw new Ae(Ce.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function LI(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Ac()}function xI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ae(Ce.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=LI(e);throw new Ae(Ce.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class kf{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ae(Ce.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ae(Ce.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}DI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iv((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Ae(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Ae(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Ae(Ce.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sv{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ae(Ce.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ae(Ce.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kf(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wI;switch(r.type){case"firstParty":return new II(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ae(Ce.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tf.get(n);r&&(be("ComponentProvider","Removing Datastore"),Tf.delete(n),r.terminate())}(this),Promise.resolve()}}function MI(e,t,n,r={}){var i;const o=(e=xI(e,sv))._getSettings(),l=`${t}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&yI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Te.MOCK_USER;else{u=Iw(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new Ae(Ce.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Te(p)}e._authCredentials=new _I(new nv(u,h))}}/**
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
 */class UI{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new RI(this,"async_queue_retry"),this.hu=()=>{const n=ua();n&&be("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=ua();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Cr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!rv(t))throw t;be("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw kc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=Pc.createAndSchedule(this,t,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&Ac()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class FI extends sv{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new UI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zI(this),this._firestoreClient.terminate()}}function jI(e,t){const n=typeof e=="object"?e:cc(),r=typeof e=="string"?e:"(default)",i=Yn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ew("firestore");o&&MI(i,...o)}return i}function zI(e){var t,n,r;const i=e._freezeSettings(),o=function(u,h,p,k){return new PI(u,h,p,k.host,k.ssl,k.experimentalForceLongPolling,k.experimentalAutoDetectLongPolling,iv(k.experimentalLongPollingOptions),k.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new OI(e._authCredentials,e._appCheckCredentials,e._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){Zi=i})(zr),It(new ft("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new FI(new EI(r.getProvider("auth-internal")),new kI(r.getProvider("app-check-internal")),function(p,k){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Ae(Ce.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Lo(p.options.projectId,k)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),tt(_f,"4.6.4",t),tt(_f,"4.6.4","esm2017")})();const $I={apiKey:"AIzaSyAags0zeuWO7Ss7Nahdn72KJu5PtrGz4GQ",authDomain:"kite-hacks.firebaseapp.com",projectId:"kite-hacks",storageBucket:"kite-hacks.appspot.com",messagingSenderId:"499816998445",appId:"1:499816998445:web:88cd530ad1e5aefbe8baa4",measurementId:"G-L5M0GQS19Y"},ov=Xg($I);gE(ov);mI();jI(ov);const BI=()=>vt.jsxs("div",{className:"account-container",children:[vt.jsxs("div",{className:"account-info-container",children:[vt.jsx("h1",{children:"Account Information"}),vt.jsx("p",{children:"Name: Test"})]}),vt.jsx("div",{className:"account-stats-container"})]});function VI(){return vt.jsx(vt.Fragment,{children:vt.jsx(BI,{})})}ca.createRoot(document.getElementById("root")).render(vt.jsx(ny.StrictMode,{children:vt.jsx(VI,{})}));
