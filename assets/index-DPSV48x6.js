function zy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function By(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var dp={exports:{}},ta={},hp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ss=Symbol.for("react.element"),$y=Symbol.for("react.portal"),Vy=Symbol.for("react.fragment"),Hy=Symbol.for("react.strict_mode"),Wy=Symbol.for("react.profiler"),Ky=Symbol.for("react.provider"),Gy=Symbol.for("react.context"),qy=Symbol.for("react.forward_ref"),Yy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Xy=Symbol.for("react.lazy"),th=Symbol.iterator;function Jy(e){return e===null||typeof e!="object"?null:(e=th&&e[th]||e["@@iterator"],typeof e=="function"?e:null)}var fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pp=Object.assign,gp={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=gp,this.updater=n||fp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function mp(){}mp.prototype=Kr.prototype;function $u(e,t,n){this.props=e,this.context=t,this.refs=gp,this.updater=n||fp}var Vu=$u.prototype=new mp;Vu.constructor=$u;pp(Vu,Kr.prototype);Vu.isPureReactComponent=!0;var nh=Array.isArray,vp=Object.prototype.hasOwnProperty,Hu={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function wp(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)vp.call(t,r)&&!yp.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),h=0;h<u;h++)c[h]=arguments[h+2];i.children=c}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:ss,type:e,key:s,ref:a,props:i,_owner:Hu.current}}function Zy(e,t){return{$$typeof:ss,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ss}function e0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rh=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?e0(""+e.key):t.toString(36)}function to(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ss:case $y:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Xa(a,0):r,nh(i)?(n="",e!=null&&(n=e.replace(rh,"$&/")+"/"),to(i,t,n,"",function(h){return h})):i!=null&&(Wu(i)&&(i=Zy(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rh,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",nh(e))for(var u=0;u<e.length;u++){s=e[u];var c=r+Xa(s,u);a+=to(s,t,n,c,i)}else if(c=Jy(e),typeof c=="function")for(e=c.call(e),u=0;!(s=e.next()).done;)s=s.value,c=r+Xa(s,u++),a+=to(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Os(e,t,n){if(e==null)return e;var r=[],i=0;return to(e,r,"","",function(s){return t.call(n,s,i++)}),r}function t0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},no={transition:null},n0={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:no,ReactCurrentOwner:Hu};function _p(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Os,forEach:function(e,t,n){Os(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Os(e,function(){t++}),t},toArray:function(e){return Os(e,function(t){return t})||[]},only:function(e){if(!Wu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Kr;W.Fragment=Vy;W.Profiler=Wy;W.PureComponent=$u;W.StrictMode=Hy;W.Suspense=Yy;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n0;W.act=_p;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=pp({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=Hu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)vp.call(t,c)&&!yp.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&u!==void 0?u[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:ss,type:e.type,key:i,ref:s,props:r,_owner:a}};W.createContext=function(e){return e={$$typeof:Gy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ky,_context:e},e.Consumer=e};W.createElement=wp;W.createFactory=function(e){var t=wp.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:qy,render:e}};W.isValidElement=Wu;W.lazy=function(e){return{$$typeof:Xy,_payload:{_status:-1,_result:e},_init:t0}};W.memo=function(e,t){return{$$typeof:Qy,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=no.transition;no.transition={};try{e()}finally{no.transition=t}};W.unstable_act=_p;W.useCallback=function(e,t){return Ue.current.useCallback(e,t)};W.useContext=function(e){return Ue.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};W.useEffect=function(e,t){return Ue.current.useEffect(e,t)};W.useId=function(){return Ue.current.useId()};W.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Ue.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};W.useRef=function(e){return Ue.current.useRef(e)};W.useState=function(e){return Ue.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Ue.current.useTransition()};W.version="18.3.1";hp.exports=W;var b=hp.exports;const Ep=By(b),r0=zy({__proto__:null,default:Ep},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=b,s0=Symbol.for("react.element"),o0=Symbol.for("react.fragment"),a0=Object.prototype.hasOwnProperty,l0=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u0={key:!0,ref:!0,__self:!0,__source:!0};function Ip(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)a0.call(t,r)&&!u0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:s0,type:e,key:s,ref:a,props:i,_owner:l0.current}}ta.Fragment=o0;ta.jsx=Ip;ta.jsxs=Ip;dp.exports=ta;var R=dp.exports,Ml={},Sp={exports:{}},Qe={},Tp={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,V){var H=z.length;z.push(V);e:for(;0<H;){var ie=H-1>>>1,X=z[ie];if(0<i(X,V))z[ie]=V,z[H]=X,H=ie;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],H=z.pop();if(H!==V){z[0]=H;e:for(var ie=0,X=z.length,ue=X>>>1;ie<ue;){var Nt=2*(ie+1)-1,xt=z[Nt],Ot=Nt+1,Lt=z[Ot];if(0>i(xt,H))Ot<X&&0>i(Lt,xt)?(z[ie]=Lt,z[Ot]=H,ie=Ot):(z[ie]=xt,z[Nt]=H,ie=Nt);else if(Ot<X&&0>i(Lt,H))z[ie]=Lt,z[Ot]=H,ie=Ot;else break e}}return V}function i(z,V){var H=z.sortIndex-V.sortIndex;return H!==0?H:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var c=[],h=[],I=1,E=null,T=3,x=!1,N=!1,L=!1,D=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=z)r(h),V.sortIndex=V.expirationTime,t(c,V);else break;V=n(h)}}function O(z){if(L=!1,S(z),!N)if(n(c)!==null)N=!0,Jr(j);else{var V=n(h);V!==null&&At(O,V.startTime-z)}}function j(z,V){N=!1,L&&(L=!1,v(p),p=-1),x=!0;var H=T;try{for(S(V),E=n(c);E!==null&&(!(E.expirationTime>V)||z&&!k());){var ie=E.callback;if(typeof ie=="function"){E.callback=null,T=E.priorityLevel;var X=ie(E.expirationTime<=V);V=e.unstable_now(),typeof X=="function"?E.callback=X:E===n(c)&&r(c),S(V)}else r(c);E=n(c)}if(E!==null)var ue=!0;else{var Nt=n(h);Nt!==null&&At(O,Nt.startTime-V),ue=!1}return ue}finally{E=null,T=H,x=!1}}var F=!1,y=null,p=-1,g=5,_=-1;function k(){return!(e.unstable_now()-_<g)}function P(){if(y!==null){var z=e.unstable_now();_=z;var V=!0;try{V=y(!0,z)}finally{V?w():(F=!1,y=null)}}else F=!1}var w;if(typeof m=="function")w=function(){m(P)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,On=Je.port2;Je.port1.onmessage=P,w=function(){On.postMessage(null)}}else w=function(){D(P,0)};function Jr(z){y=z,F||(F=!0,w())}function At(z,V){p=D(function(){z(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){N||x||(N=!0,Jr(j))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return T},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(z){switch(T){case 1:case 2:case 3:var V=3;break;default:V=T}var H=T;T=V;try{return z()}finally{T=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var H=T;T=z;try{return V()}finally{T=H}},e.unstable_scheduleCallback=function(z,V,H){var ie=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,z){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=H+X,z={id:I++,callback:V,priorityLevel:z,startTime:H,expirationTime:X,sortIndex:-1},H>ie?(z.sortIndex=H,t(h,z),n(c)===null&&z===n(h)&&(L?(v(p),p=-1):L=!0,At(O,H-ie))):(z.sortIndex=X,t(c,z),N||x||(N=!0,Jr(j))),z},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(z){var V=T;return function(){var H=T;T=V;try{return z.apply(this,arguments)}finally{T=H}}}})(kp);Tp.exports=kp;var c0=Tp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0=b,Ye=c0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,Ui={};function tr(e,t){Ur(e,t),Ur(e+"Capture",t)}function Ur(e,t){for(Ui[e]=t,e=0;e<t.length;e++)Cp.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ih={},sh={};function f0(e){return jl.call(sh,e)?!0:jl.call(ih,e)?!1:h0.test(e)?sh[e]=!0:(ih[e]=!0,!1)}function p0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function g0(e,t,n,r){if(t===null||typeof t>"u"||p0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ku=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);Ee[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ku,Gu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ku,Gu);Ee[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function qu(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(g0(t,n,i,r)&&(n=null),r||i===null?f0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Qt=d0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ls=Symbol.for("react.element"),pr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),Ul=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),Qu=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),bl=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),Ap=Symbol.for("react.offscreen"),oh=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=oh&&e[oh]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ja;function _i(e){if(Ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ja=t&&t[1]||""}return`
`+Ja+e}var Za=!1;function el(e,t){if(!e||Za)return"";Za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,u=s.length-1;1<=a&&0<=u&&i[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==s[u]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=u);break}}}finally{Za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_i(e):""}function m0(e){switch(e.tag){case 5:return _i(e.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case gr:return"Fragment";case pr:return"Portal";case Ul:return"Profiler";case Yu:return"StrictMode";case Fl:return"Suspense";case bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rp:return(e.displayName||"Context")+".Consumer";case Pp:return(e._context.displayName||"Context")+".Provider";case Qu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xu:return t=e.displayName||null,t!==null?t:zl(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return zl(e(t))}catch{}}return null}function v0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zl(t);case 8:return t===Yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Cn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Np(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function y0(e){var t=Np(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ds(e){e._valueTracker||(e._valueTracker=y0(e))}function xp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Np(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function wo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Bl(e,t){var n=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ah(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Cn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Op(e,t){t=t.checked,t!=null&&qu(e,"checked",t,!1)}function $l(e,t){Op(e,t);var n=Cn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,Cn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||wo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ei=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Cn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Hl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Ei(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Cn(n)}}function Lp(e,t){var n=Cn(t.value),r=Cn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ch(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Dp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Dp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ms,Mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ms.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(e){w0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ci[t]=Ci[e]})});function jp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ci.hasOwnProperty(e)&&Ci[e]?(""+t).trim():t+"px"}function Up(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(_0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function Ju(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yl=null,Rr=null,Ar=null;function dh(e){if(e=ls(e)){if(typeof Yl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=oa(t),Yl(e.stateNode,e.type,t))}}function Fp(e){Rr?Ar?Ar.push(e):Ar=[e]:Rr=e}function bp(){if(Rr){var e=Rr,t=Ar;if(Ar=Rr=null,dh(e),t)for(e=0;e<t.length;e++)dh(t[e])}}function zp(e,t){return e(t)}function Bp(){}var tl=!1;function $p(e,t,n){if(tl)return e(t,n);tl=!0;try{return zp(e,t,n)}finally{tl=!1,(Rr!==null||Ar!==null)&&(Bp(),bp())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=oa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Ql=!1;if(Wt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{Ql=!1}function E0(e,t,n,r,i,s,a,u,c){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(I){this.onError(I)}}var Pi=!1,_o=null,Eo=!1,Xl=null,I0={onError:function(e){Pi=!0,_o=e}};function S0(e,t,n,r,i,s,a,u,c){Pi=!1,_o=null,E0.apply(I0,arguments)}function T0(e,t,n,r,i,s,a,u,c){if(S0.apply(this,arguments),Pi){if(Pi){var h=_o;Pi=!1,_o=null}else throw Error(M(198));Eo||(Eo=!0,Xl=h)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hh(e){if(nr(e)!==e)throw Error(M(188))}function k0(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return hh(i),e;if(s===r)return hh(i),t;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Hp(e){return e=k0(e),e!==null?Wp(e):null}function Wp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wp(e);if(t!==null)return t;e=e.sibling}return null}var Kp=Ye.unstable_scheduleCallback,fh=Ye.unstable_cancelCallback,C0=Ye.unstable_shouldYield,P0=Ye.unstable_requestPaint,de=Ye.unstable_now,R0=Ye.unstable_getCurrentPriorityLevel,Zu=Ye.unstable_ImmediatePriority,Gp=Ye.unstable_UserBlockingPriority,Io=Ye.unstable_NormalPriority,A0=Ye.unstable_LowPriority,qp=Ye.unstable_IdlePriority,na=null,St=null;function N0(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:L0,x0=Math.log,O0=Math.LN2;function L0(e){return e>>>=0,e===0?32:31-(x0(e)/O0|0)|0}var js=64,Us=4194304;function Ii(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function So(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=Ii(u):(s&=a,s!==0&&(r=Ii(s)))}else a=n&~i,a!==0?r=Ii(a):s!==0&&(r=Ii(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function D0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ft(s),u=1<<a,c=i[a];c===-1?(!(u&n)||u&r)&&(i[a]=D0(u,t)):c<=t&&(e.expiredLanes|=u),s&=~u}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yp(){var e=js;return js<<=1,!(js&4194240)&&(js=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function os(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function j0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function ec(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Q=0;function Qp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xp,tc,Jp,Zp,eg,Zl=!1,Fs=[],gn=null,mn=null,vn=null,zi=new Map,Bi=new Map,on=[],U0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ph(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":zi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function pi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ls(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F0(e,t,n,r,i){switch(t){case"focusin":return gn=pi(gn,e,t,n,r,i),!0;case"dragenter":return mn=pi(mn,e,t,n,r,i),!0;case"mouseover":return vn=pi(vn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,pi(zi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bi.set(s,pi(Bi.get(s)||null,e,t,n,r,i)),!0}return!1}function tg(e){var t=bn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=Vp(n),t!==null){e.blockedOn=t,eg(e.priority,function(){Jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ql=r,n.target.dispatchEvent(r),ql=null}else return t=ls(n),t!==null&&tc(t),e.blockedOn=n,!1;t.shift()}return!0}function gh(e,t,n){ro(e)&&n.delete(t)}function b0(){Zl=!1,gn!==null&&ro(gn)&&(gn=null),mn!==null&&ro(mn)&&(mn=null),vn!==null&&ro(vn)&&(vn=null),zi.forEach(gh),Bi.forEach(gh)}function gi(e,t){e.blockedOn===t&&(e.blockedOn=null,Zl||(Zl=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,b0)))}function $i(e){function t(i){return gi(i,e)}if(0<Fs.length){gi(Fs[0],e);for(var n=1;n<Fs.length;n++){var r=Fs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gn!==null&&gi(gn,e),mn!==null&&gi(mn,e),vn!==null&&gi(vn,e),zi.forEach(t),Bi.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&on.shift()}var Nr=Qt.ReactCurrentBatchConfig,To=!0;function z0(e,t,n,r){var i=Q,s=Nr.transition;Nr.transition=null;try{Q=1,nc(e,t,n,r)}finally{Q=i,Nr.transition=s}}function B0(e,t,n,r){var i=Q,s=Nr.transition;Nr.transition=null;try{Q=4,nc(e,t,n,r)}finally{Q=i,Nr.transition=s}}function nc(e,t,n,r){if(To){var i=eu(e,t,n,r);if(i===null)hl(e,t,r,ko,n),ph(e,r);else if(F0(i,e,t,n,r))r.stopPropagation();else if(ph(e,r),t&4&&-1<U0.indexOf(e)){for(;i!==null;){var s=ls(i);if(s!==null&&Xp(s),s=eu(e,t,n,r),s===null&&hl(e,t,r,ko,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var ko=null;function eu(e,t,n,r){if(ko=null,e=Ju(r),e=bn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ko=e,null}function ng(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R0()){case Zu:return 1;case Gp:return 4;case Io:case A0:return 16;case qp:return 536870912;default:return 16}default:return 16}}var hn=null,rc=null,io=null;function rg(){if(io)return io;var e,t=rc,n=t.length,r,i="value"in hn?hn.value:hn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return io=i.slice(e,1<r?1-r:void 0)}function so(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function mh(){return!1}function Xe(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?bs:mh,this.isPropagationStopped=mh,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Xe(Gr),as=ae({},Gr,{view:0,detail:0}),$0=Xe(as),rl,il,mi,ra=ae({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(rl=e.screenX-mi.screenX,il=e.screenY-mi.screenY):il=rl=0,mi=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:il}}),vh=Xe(ra),V0=ae({},ra,{dataTransfer:0}),H0=Xe(V0),W0=ae({},as,{relatedTarget:0}),sl=Xe(W0),K0=ae({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=Xe(K0),q0=ae({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y0=Xe(q0),Q0=ae({},Gr,{data:0}),yh=Xe(Q0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ew(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Z0[e])?!!t[e]:!1}function sc(){return ew}var tw=ae({},as,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?J0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nw=Xe(tw),rw=ae({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Xe(rw),iw=ae({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),sw=Xe(iw),ow=ae({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),aw=Xe(ow),lw=ae({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uw=Xe(lw),cw=[9,13,27,32],oc=Wt&&"CompositionEvent"in window,Ri=null;Wt&&"documentMode"in document&&(Ri=document.documentMode);var dw=Wt&&"TextEvent"in window&&!Ri,ig=Wt&&(!oc||Ri&&8<Ri&&11>=Ri),_h=" ",Eh=!1;function sg(e,t){switch(e){case"keyup":return cw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function hw(e,t){switch(e){case"compositionend":return og(t);case"keypress":return t.which!==32?null:(Eh=!0,_h);case"textInput":return e=t.data,e===_h&&Eh?null:e;default:return null}}function fw(e,t){if(mr)return e==="compositionend"||!oc&&sg(e,t)?(e=rg(),io=rc=hn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ig&&t.locale!=="ko"?null:t.data;default:return null}}var pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pw[e.type]:t==="textarea"}function ag(e,t,n,r){Fp(r),t=Co(t,"onChange"),0<t.length&&(n=new ic("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ai=null,Vi=null;function gw(e){yg(e,0)}function ia(e){var t=wr(e);if(xp(t))return e}function mw(e,t){if(e==="change")return t}var lg=!1;if(Wt){var ol;if(Wt){var al="oninput"in document;if(!al){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),al=typeof Sh.oninput=="function"}ol=al}else ol=!1;lg=ol&&(!document.documentMode||9<document.documentMode)}function Th(){Ai&&(Ai.detachEvent("onpropertychange",ug),Vi=Ai=null)}function ug(e){if(e.propertyName==="value"&&ia(Vi)){var t=[];ag(t,Vi,e,Ju(e)),$p(gw,t)}}function vw(e,t,n){e==="focusin"?(Th(),Ai=t,Vi=n,Ai.attachEvent("onpropertychange",ug)):e==="focusout"&&Th()}function yw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ia(Vi)}function ww(e,t){if(e==="click")return ia(t)}function _w(e,t){if(e==="input"||e==="change")return ia(t)}function Ew(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:Ew;function Hi(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jl.call(t,i)||!gt(e[i],t[i]))return!1}return!0}function kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ch(e,t){var n=kh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function cg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dg(){for(var e=window,t=wo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=wo(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Iw(e){var t=dg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(r!==null&&ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ch(n,s);var a=Ch(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sw=Wt&&"documentMode"in document&&11>=document.documentMode,vr=null,tu=null,Ni=null,nu=!1;function Ph(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nu||vr==null||vr!==wo(r)||(r=vr,"selectionStart"in r&&ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ni&&Hi(Ni,r)||(Ni=r,r=Co(tu,"onSelect"),0<r.length&&(t=new ic("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function zs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yr={animationend:zs("Animation","AnimationEnd"),animationiteration:zs("Animation","AnimationIteration"),animationstart:zs("Animation","AnimationStart"),transitionend:zs("Transition","TransitionEnd")},ll={},hg={};Wt&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function sa(e){if(ll[e])return ll[e];if(!yr[e])return e;var t=yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hg)return ll[e]=t[n];return e}var fg=sa("animationend"),pg=sa("animationiteration"),gg=sa("animationstart"),mg=sa("transitionend"),vg=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(e,t){vg.set(e,t),tr(t,[e])}for(var ul=0;ul<Rh.length;ul++){var cl=Rh[ul],Tw=cl.toLowerCase(),kw=cl[0].toUpperCase()+cl.slice(1);Rn(Tw,"on"+kw)}Rn(fg,"onAnimationEnd");Rn(pg,"onAnimationIteration");Rn(gg,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(mg,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Si));function Ah(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,T0(r,t,void 0,e),e.currentTarget=null}function yg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],c=u.instance,h=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;Ah(i,u,h),s=c}else for(a=0;a<r.length;a++){if(u=r[a],c=u.instance,h=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;Ah(i,u,h),s=c}}}if(Eo)throw e=Xl,Eo=!1,Xl=null,e}function te(e,t){var n=t[au];n===void 0&&(n=t[au]=new Set);var r=e+"__bubble";n.has(r)||(wg(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),wg(n,e,r,t)}var Bs="_reactListening"+Math.random().toString(36).slice(2);function Wi(e){if(!e[Bs]){e[Bs]=!0,Cp.forEach(function(n){n!=="selectionchange"&&(Cw.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bs]||(t[Bs]=!0,dl("selectionchange",!1,t))}}function wg(e,t,n,r){switch(ng(t)){case 1:var i=z0;break;case 4:i=B0;break;default:i=nc}n=i.bind(null,t,n,e),i=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;u!==null;){if(a=bn(u),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}u=u.parentNode}}r=r.return}$p(function(){var h=s,I=Ju(n),E=[];e:{var T=vg.get(e);if(T!==void 0){var x=ic,N=e;switch(e){case"keypress":if(so(n)===0)break e;case"keydown":case"keyup":x=nw;break;case"focusin":N="focus",x=sl;break;case"focusout":N="blur",x=sl;break;case"beforeblur":case"afterblur":x=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=H0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=sw;break;case fg:case pg:case gg:x=G0;break;case mg:x=aw;break;case"scroll":x=$0;break;case"wheel":x=uw;break;case"copy":case"cut":case"paste":x=Y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=wh}var L=(t&4)!==0,D=!L&&e==="scroll",v=L?T!==null?T+"Capture":null:T;L=[];for(var m=h,S;m!==null;){S=m;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,v!==null&&(O=bi(m,v),O!=null&&L.push(Ki(m,O,S)))),D)break;m=m.return}0<L.length&&(T=new x(T,N,null,n,I),E.push({event:T,listeners:L}))}}if(!(t&7)){e:{if(T=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",T&&n!==ql&&(N=n.relatedTarget||n.fromElement)&&(bn(N)||N[Kt]))break e;if((x||T)&&(T=I.window===I?I:(T=I.ownerDocument)?T.defaultView||T.parentWindow:window,x?(N=n.relatedTarget||n.toElement,x=h,N=N?bn(N):null,N!==null&&(D=nr(N),N!==D||N.tag!==5&&N.tag!==6)&&(N=null)):(x=null,N=h),x!==N)){if(L=vh,O="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(L=wh,O="onPointerLeave",v="onPointerEnter",m="pointer"),D=x==null?T:wr(x),S=N==null?T:wr(N),T=new L(O,m+"leave",x,n,I),T.target=D,T.relatedTarget=S,O=null,bn(I)===h&&(L=new L(v,m+"enter",N,n,I),L.target=S,L.relatedTarget=D,O=L),D=O,x&&N)t:{for(L=x,v=N,m=0,S=L;S;S=fr(S))m++;for(S=0,O=v;O;O=fr(O))S++;for(;0<m-S;)L=fr(L),m--;for(;0<S-m;)v=fr(v),S--;for(;m--;){if(L===v||v!==null&&L===v.alternate)break t;L=fr(L),v=fr(v)}L=null}else L=null;x!==null&&Nh(E,T,x,L,!1),N!==null&&D!==null&&Nh(E,D,N,L,!0)}}e:{if(T=h?wr(h):window,x=T.nodeName&&T.nodeName.toLowerCase(),x==="select"||x==="input"&&T.type==="file")var j=mw;else if(Ih(T))if(lg)j=_w;else{j=yw;var F=vw}else(x=T.nodeName)&&x.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&(j=ww);if(j&&(j=j(e,h))){ag(E,j,n,I);break e}F&&F(e,T,h),e==="focusout"&&(F=T._wrapperState)&&F.controlled&&T.type==="number"&&Vl(T,"number",T.value)}switch(F=h?wr(h):window,e){case"focusin":(Ih(F)||F.contentEditable==="true")&&(vr=F,tu=h,Ni=null);break;case"focusout":Ni=tu=vr=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Ph(E,n,I);break;case"selectionchange":if(Sw)break;case"keydown":case"keyup":Ph(E,n,I)}var y;if(oc)e:{switch(e){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else mr?sg(e,n)&&(p="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(ig&&n.locale!=="ko"&&(mr||p!=="onCompositionStart"?p==="onCompositionEnd"&&mr&&(y=rg()):(hn=I,rc="value"in hn?hn.value:hn.textContent,mr=!0)),F=Co(h,p),0<F.length&&(p=new yh(p,e,null,n,I),E.push({event:p,listeners:F}),y?p.data=y:(y=og(n),y!==null&&(p.data=y)))),(y=dw?hw(e,n):fw(e,n))&&(h=Co(h,"onBeforeInput"),0<h.length&&(I=new yh("onBeforeInput","beforeinput",null,n,I),E.push({event:I,listeners:h}),I.data=y))}yg(E,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Co(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bi(e,n),s!=null&&r.unshift(Ki(e,s,i)),s=bi(e,t),s!=null&&r.push(Ki(e,s,i))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nh(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var u=n,c=u.alternate,h=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&h!==null&&(u=h,i?(c=bi(n,s),c!=null&&a.unshift(Ki(n,c,u))):i||(c=bi(n,s),c!=null&&a.push(Ki(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Pw=/\r\n?/g,Rw=/\u0000|\uFFFD/g;function xh(e){return(typeof e=="string"?e:""+e).replace(Pw,`
`).replace(Rw,"")}function $s(e,t,n){if(t=xh(t),xh(e)!==t&&n)throw Error(M(425))}function Po(){}var ru=null,iu=null;function su(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,Aw=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,Nw=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(e){return Oh.resolve(null).then(e).catch(xw)}:ou;function xw(e){setTimeout(function(){throw e})}function fl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Et="__reactFiber$"+qr,Gi="__reactProps$"+qr,Kt="__reactContainer$"+qr,au="__reactEvents$"+qr,Ow="__reactListeners$"+qr,Lw="__reactHandles$"+qr;function bn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lh(e);e!==null;){if(n=e[Et])return n;e=Lh(e)}return t}e=n,n=e.parentNode}return null}function ls(e){return e=e[Et]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function oa(e){return e[Gi]||null}var lu=[],_r=-1;function An(e){return{current:e}}function ne(e){0>_r||(e.current=lu[_r],lu[_r]=null,_r--)}function Z(e,t){_r++,lu[_r]=e.current,e.current=t}var Pn={},xe=An(Pn),Be=An(!1),Wn=Pn;function Fr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $e(e){return e=e.childContextTypes,e!=null}function Ro(){ne(Be),ne(xe)}function Dh(e,t,n){if(xe.current!==Pn)throw Error(M(168));Z(xe,t),Z(Be,n)}function _g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,v0(e)||"Unknown",i));return ae({},n,r)}function Ao(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Wn=xe.current,Z(xe,e),Z(Be,Be.current),!0}function Mh(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=_g(e,t,Wn),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(xe),Z(xe,e)):ne(Be),Z(Be,n)}var Ut=null,aa=!1,pl=!1;function Eg(e){Ut===null?Ut=[e]:Ut.push(e)}function Dw(e){aa=!0,Eg(e)}function Nn(){if(!pl&&Ut!==null){pl=!0;var e=0,t=Q;try{var n=Ut;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,aa=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Kp(Zu,Nn),i}finally{Q=t,pl=!1}}return null}var Er=[],Ir=0,No=null,xo=0,et=[],tt=0,Kn=null,Ft=1,bt="";function jn(e,t){Er[Ir++]=xo,Er[Ir++]=No,No=e,xo=t}function Ig(e,t,n){et[tt++]=Ft,et[tt++]=bt,et[tt++]=Kn,Kn=e;var r=Ft;e=bt;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ft=1<<32-ft(t)+i|n<<i|r,bt=s+e}else Ft=1<<s|n<<i|r,bt=e}function lc(e){e.return!==null&&(jn(e,1),Ig(e,1,0))}function uc(e){for(;e===No;)No=Er[--Ir],Er[Ir]=null,xo=Er[--Ir],Er[Ir]=null;for(;e===Kn;)Kn=et[--tt],et[tt]=null,bt=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null}var Ge=null,We=null,re=!1,ht=null;function Sg(e,t){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function jh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,We=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Kn!==null?{id:Ft,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,We=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cu(e){if(re){var t=We;if(t){var n=t;if(!jh(e,t)){if(uu(e))throw Error(M(418));t=yn(n.nextSibling);var r=Ge;t&&jh(e,t)?Sg(r,n):(e.flags=e.flags&-4097|2,re=!1,Ge=e)}}else{if(uu(e))throw Error(M(418));e.flags=e.flags&-4097|2,re=!1,Ge=e}}}function Uh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Vs(e){if(e!==Ge)return!1;if(!re)return Uh(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!su(e.type,e.memoizedProps)),t&&(t=We)){if(uu(e))throw Tg(),Error(M(418));for(;t;)Sg(e,t),t=yn(t.nextSibling)}if(Uh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ge?yn(e.stateNode.nextSibling):null;return!0}function Tg(){for(var e=We;e;)e=yn(e.nextSibling)}function br(){We=Ge=null,re=!1}function cc(e){ht===null?ht=[e]:ht.push(e)}var Mw=Qt.ReactCurrentBatchConfig;function vi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var u=i.refs;a===null?delete u[s]:u[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Hs(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fh(e){var t=e._init;return t(e._payload)}function kg(e){function t(v,m){if(e){var S=v.deletions;S===null?(v.deletions=[m],v.flags|=16):S.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function i(v,m){return v=In(v,m),v.index=0,v.sibling=null,v}function s(v,m,S){return v.index=S,e?(S=v.alternate,S!==null?(S=S.index,S<m?(v.flags|=2,m):S):(v.flags|=2,m)):(v.flags|=1048576,m)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function u(v,m,S,O){return m===null||m.tag!==6?(m=El(S,v.mode,O),m.return=v,m):(m=i(m,S),m.return=v,m)}function c(v,m,S,O){var j=S.type;return j===gr?I(v,m,S.props.children,O,S.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===rn&&Fh(j)===m.type)?(O=i(m,S.props),O.ref=vi(v,m,S),O.return=v,O):(O=fo(S.type,S.key,S.props,null,v.mode,O),O.ref=vi(v,m,S),O.return=v,O)}function h(v,m,S,O){return m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation?(m=Il(S,v.mode,O),m.return=v,m):(m=i(m,S.children||[]),m.return=v,m)}function I(v,m,S,O,j){return m===null||m.tag!==7?(m=Hn(S,v.mode,O,j),m.return=v,m):(m=i(m,S),m.return=v,m)}function E(v,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return m=El(""+m,v.mode,S),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ls:return S=fo(m.type,m.key,m.props,null,v.mode,S),S.ref=vi(v,null,m),S.return=v,S;case pr:return m=Il(m,v.mode,S),m.return=v,m;case rn:var O=m._init;return E(v,O(m._payload),S)}if(Ei(m)||hi(m))return m=Hn(m,v.mode,S,null),m.return=v,m;Hs(v,m)}return null}function T(v,m,S,O){var j=m!==null?m.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:u(v,m,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ls:return S.key===j?c(v,m,S,O):null;case pr:return S.key===j?h(v,m,S,O):null;case rn:return j=S._init,T(v,m,j(S._payload),O)}if(Ei(S)||hi(S))return j!==null?null:I(v,m,S,O,null);Hs(v,S)}return null}function x(v,m,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return v=v.get(S)||null,u(m,v,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ls:return v=v.get(O.key===null?S:O.key)||null,c(m,v,O,j);case pr:return v=v.get(O.key===null?S:O.key)||null,h(m,v,O,j);case rn:var F=O._init;return x(v,m,S,F(O._payload),j)}if(Ei(O)||hi(O))return v=v.get(S)||null,I(m,v,O,j,null);Hs(m,O)}return null}function N(v,m,S,O){for(var j=null,F=null,y=m,p=m=0,g=null;y!==null&&p<S.length;p++){y.index>p?(g=y,y=null):g=y.sibling;var _=T(v,y,S[p],O);if(_===null){y===null&&(y=g);break}e&&y&&_.alternate===null&&t(v,y),m=s(_,m,p),F===null?j=_:F.sibling=_,F=_,y=g}if(p===S.length)return n(v,y),re&&jn(v,p),j;if(y===null){for(;p<S.length;p++)y=E(v,S[p],O),y!==null&&(m=s(y,m,p),F===null?j=y:F.sibling=y,F=y);return re&&jn(v,p),j}for(y=r(v,y);p<S.length;p++)g=x(y,v,p,S[p],O),g!==null&&(e&&g.alternate!==null&&y.delete(g.key===null?p:g.key),m=s(g,m,p),F===null?j=g:F.sibling=g,F=g);return e&&y.forEach(function(k){return t(v,k)}),re&&jn(v,p),j}function L(v,m,S,O){var j=hi(S);if(typeof j!="function")throw Error(M(150));if(S=j.call(S),S==null)throw Error(M(151));for(var F=j=null,y=m,p=m=0,g=null,_=S.next();y!==null&&!_.done;p++,_=S.next()){y.index>p?(g=y,y=null):g=y.sibling;var k=T(v,y,_.value,O);if(k===null){y===null&&(y=g);break}e&&y&&k.alternate===null&&t(v,y),m=s(k,m,p),F===null?j=k:F.sibling=k,F=k,y=g}if(_.done)return n(v,y),re&&jn(v,p),j;if(y===null){for(;!_.done;p++,_=S.next())_=E(v,_.value,O),_!==null&&(m=s(_,m,p),F===null?j=_:F.sibling=_,F=_);return re&&jn(v,p),j}for(y=r(v,y);!_.done;p++,_=S.next())_=x(y,v,p,_.value,O),_!==null&&(e&&_.alternate!==null&&y.delete(_.key===null?p:_.key),m=s(_,m,p),F===null?j=_:F.sibling=_,F=_);return e&&y.forEach(function(P){return t(v,P)}),re&&jn(v,p),j}function D(v,m,S,O){if(typeof S=="object"&&S!==null&&S.type===gr&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ls:e:{for(var j=S.key,F=m;F!==null;){if(F.key===j){if(j=S.type,j===gr){if(F.tag===7){n(v,F.sibling),m=i(F,S.props.children),m.return=v,v=m;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===rn&&Fh(j)===F.type){n(v,F.sibling),m=i(F,S.props),m.ref=vi(v,F,S),m.return=v,v=m;break e}n(v,F);break}else t(v,F);F=F.sibling}S.type===gr?(m=Hn(S.props.children,v.mode,O,S.key),m.return=v,v=m):(O=fo(S.type,S.key,S.props,null,v.mode,O),O.ref=vi(v,m,S),O.return=v,v=O)}return a(v);case pr:e:{for(F=S.key;m!==null;){if(m.key===F)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){n(v,m.sibling),m=i(m,S.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Il(S,v.mode,O),m.return=v,v=m}return a(v);case rn:return F=S._init,D(v,m,F(S._payload),O)}if(Ei(S))return N(v,m,S,O);if(hi(S))return L(v,m,S,O);Hs(v,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,m!==null&&m.tag===6?(n(v,m.sibling),m=i(m,S),m.return=v,v=m):(n(v,m),m=El(S,v.mode,O),m.return=v,v=m),a(v)):n(v,m)}return D}var zr=kg(!0),Cg=kg(!1),Oo=An(null),Lo=null,Sr=null,dc=null;function hc(){dc=Sr=Lo=null}function fc(e){var t=Oo.current;ne(Oo),e._currentValue=t}function du(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Lo=e,dc=Sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ze=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},Sr===null){if(Lo===null)throw Error(M(308));Sr=e,Lo.dependencies={lanes:0,firstContext:e}}else Sr=Sr.next=e;return t}var zn=null;function pc(e){zn===null?zn=[e]:zn.push(e)}function Pg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function gc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ec(e,n)}}function bh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Do(e,t,n,r){var i=e.updateQueue;sn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,h=c.next;c.next=null,a===null?s=h:a.next=h,a=c;var I=e.alternate;I!==null&&(I=I.updateQueue,u=I.lastBaseUpdate,u!==a&&(u===null?I.firstBaseUpdate=h:u.next=h,I.lastBaseUpdate=c))}if(s!==null){var E=i.baseState;a=0,I=h=c=null,u=s;do{var T=u.lane,x=u.eventTime;if((r&T)===T){I!==null&&(I=I.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=e,L=u;switch(T=t,x=n,L.tag){case 1:if(N=L.payload,typeof N=="function"){E=N.call(x,E,T);break e}E=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=L.payload,T=typeof N=="function"?N.call(x,E,T):N,T==null)break e;E=ae({},E,T);break e;case 2:sn=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[u]:T.push(u))}else x={eventTime:x,lane:T,tag:u.tag,payload:u.payload,callback:u.callback,next:null},I===null?(h=I=x,c=E):I=I.next=x,a|=T;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;T=u,u=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(I===null&&(c=E),i.baseState=c,i.firstBaseUpdate=h,i.lastBaseUpdate=I,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);qn|=a,e.lanes=a,e.memoizedState=E}}function zh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var us={},Tt=An(us),qi=An(us),Yi=An(us);function Bn(e){if(e===us)throw Error(M(174));return e}function mc(e,t){switch(Z(Yi,t),Z(qi,e),Z(Tt,us),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wl(t,e)}ne(Tt),Z(Tt,t)}function Br(){ne(Tt),ne(qi),ne(Yi)}function Ag(e){Bn(Yi.current);var t=Bn(Tt.current),n=Wl(t,e.type);t!==n&&(Z(qi,e),Z(Tt,n))}function vc(e){qi.current===e&&(ne(Tt),ne(qi))}var se=An(0);function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var gl=[];function yc(){for(var e=0;e<gl.length;e++)gl[e]._workInProgressVersionPrimary=null;gl.length=0}var ao=Qt.ReactCurrentDispatcher,ml=Qt.ReactCurrentBatchConfig,Gn=0,oe=null,pe=null,me=null,jo=!1,xi=!1,Qi=0,jw=0;function ke(){throw Error(M(321))}function wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!gt(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,s){if(Gn=s,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ao.current=e===null||e.memoizedState===null?zw:Bw,e=n(r,i),xi){s=0;do{if(xi=!1,Qi=0,25<=s)throw Error(M(301));s+=1,me=pe=null,t.updateQueue=null,ao.current=$w,e=n(r,i)}while(xi)}if(ao.current=Uo,t=pe!==null&&pe.next!==null,Gn=0,me=pe=oe=null,jo=!1,t)throw Error(M(300));return e}function Ec(){var e=Qi!==0;return Qi=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=e:me=me.next=e,me}function at(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=me===null?oe.memoizedState:me.next;if(t!==null)me=t,pe=e;else{if(e===null)throw Error(M(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},me===null?oe.memoizedState=me=e:me=me.next=e}return me}function Xi(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=at(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=a=null,c=null,h=s;do{var I=h.lane;if((Gn&I)===I)c!==null&&(c=c.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var E={lane:I,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};c===null?(u=c=E,a=r):c=c.next=E,oe.lanes|=I,qn|=I}h=h.next}while(h!==null&&h!==s);c===null?a=r:c.next=u,gt(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,oe.lanes|=s,qn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yl(e){var t=at(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);gt(s,t.memoizedState)||(ze=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ng(){}function xg(e,t){var n=oe,r=at(),i=t(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,Ic(Dg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Ji(9,Lg.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(M(349));Gn&30||Og(n,t,i)}return i}function Og(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lg(e,t,n,r){t.value=n,t.getSnapshot=r,Mg(t)&&jg(e)}function Dg(e,t,n){return n(function(){Mg(t)&&jg(e)})}function Mg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!gt(e,n)}catch{return!0}}function jg(e){var t=Gt(e,1);t!==null&&pt(t,e,1,-1)}function Bh(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},t.queue=e,e=e.dispatch=bw.bind(null,oe,e),[t.memoizedState,e]}function Ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ug(){return at().memoizedState}function lo(e,t,n,r){var i=_t();oe.flags|=e,i.memoizedState=Ji(1|t,n,void 0,r===void 0?null:r)}function la(e,t,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(pe!==null){var a=pe.memoizedState;if(s=a.destroy,r!==null&&wc(r,a.deps)){i.memoizedState=Ji(t,n,s,r);return}}oe.flags|=e,i.memoizedState=Ji(1|t,n,s,r)}function $h(e,t){return lo(8390656,8,e,t)}function Ic(e,t){return la(2048,8,e,t)}function Fg(e,t){return la(4,2,e,t)}function bg(e,t){return la(4,4,e,t)}function zg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Bg(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,zg.bind(null,t,e),n)}function Sc(){}function $g(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vg(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hg(e,t,n){return Gn&21?(gt(n,t)||(n=Yp(),oe.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ze=!0),e.memoizedState=n)}function Uw(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=ml.transition;ml.transition={};try{e(!1),t()}finally{Q=n,ml.transition=r}}function Wg(){return at().memoizedState}function Fw(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(e))Gg(t,n);else if(n=Pg(e,t,n,r),n!==null){var i=je();pt(n,e,r,i),qg(n,t,r)}}function bw(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(e))Gg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,u=s(a,n);if(i.hasEagerState=!0,i.eagerState=u,gt(u,a)){var c=t.interleaved;c===null?(i.next=i,pc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Pg(e,t,i,r),n!==null&&(i=je(),pt(n,e,r,i),qg(n,t,r))}}function Kg(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Gg(e,t){xi=jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ec(e,n)}}var Uo={readContext:ot,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},zw={readContext:ot,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:$h,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,zg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fw.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Bh,useDebugValue:Sc,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Bh(!1),t=e[0];return e=Uw.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=_t();if(re){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),ve===null)throw Error(M(349));Gn&30||Og(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,$h(Dg.bind(null,r,s,e),[e]),r.flags|=2048,Ji(9,Lg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=_t(),t=ve.identifierPrefix;if(re){var n=bt,r=Ft;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=jw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Bw={readContext:ot,useCallback:$g,useContext:ot,useEffect:Ic,useImperativeHandle:Bg,useInsertionEffect:Fg,useLayoutEffect:bg,useMemo:Vg,useReducer:vl,useRef:Ug,useState:function(){return vl(Xi)},useDebugValue:Sc,useDeferredValue:function(e){var t=at();return Hg(t,pe.memoizedState,e)},useTransition:function(){var e=vl(Xi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ng,useSyncExternalStore:xg,useId:Wg,unstable_isNewReconciler:!1},$w={readContext:ot,useCallback:$g,useContext:ot,useEffect:Ic,useImperativeHandle:Bg,useInsertionEffect:Fg,useLayoutEffect:bg,useMemo:Vg,useReducer:yl,useRef:Ug,useState:function(){return yl(Xi)},useDebugValue:Sc,useDeferredValue:function(e){var t=at();return pe===null?t.memoizedState=e:Hg(t,pe.memoizedState,e)},useTransition:function(){var e=yl(Xi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ng,useSyncExternalStore:xg,useId:Wg,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=En(e),s=Vt(r,i);s.payload=t,n!=null&&(s.callback=n),t=wn(e,s,i),t!==null&&(pt(t,e,i,r),oo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=En(e),s=Vt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=wn(e,s,i),t!==null&&(pt(t,e,i,r),oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=En(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=wn(e,i,r),t!==null&&(pt(t,e,r,n),oo(t,e,r))}};function Vh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,s):!0}function Yg(e,t,n){var r=!1,i=Pn,s=t.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=$e(t)?Wn:xe.current,r=t.contextTypes,s=(r=r!=null)?Fr(e,i):Pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Hh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function fu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=$e(t)?Wn:xe.current,i.context=Fr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(hu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),Do(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $r(e,t){try{var n="",r=t;do n+=m0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vw=typeof WeakMap=="function"?WeakMap:Map;function Qg(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,Tu=r),pu(e,t)},n}function Xg(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){pu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){pu(e,t),typeof r!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=r1.bind(null,e,t,n),t.then(e,e))}function Kh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var Hw=Qt.ReactCurrentOwner,ze=!1;function Me(e,t,n,r){t.child=e===null?Cg(t,null,n,r):zr(t,e.child,n,r)}function qh(e,t,n,r,i){n=n.render;var s=t.ref;return xr(t,i),r=_c(e,t,n,r,s,i),n=Ec(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(re&&n&&lc(t),t.flags|=1,Me(e,t,r,i),t.child)}function Yh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!xc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Jg(e,t,s,r,i)):(e=fo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(a,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=In(s,r),e.ref=t.ref,e.return=t,t.child=e}function Jg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Hi(s,r)&&e.ref===t.ref)if(ze=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ze=!0);else return t.lanes=e.lanes,qt(e,t,i)}return gu(e,t,n,r,i)}function Zg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(kr,He),He|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(kr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(kr,He),He|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Z(kr,He),He|=r;return Me(e,t,i,n),t.child}function em(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gu(e,t,n,r,i){var s=$e(n)?Wn:xe.current;return s=Fr(t,s),xr(t,i),n=_c(e,t,n,r,s,i),r=Ec(),e!==null&&!ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(re&&r&&lc(t),t.flags|=1,Me(e,t,n,i),t.child)}function Qh(e,t,n,r,i){if($e(n)){var s=!0;Ao(t)}else s=!1;if(xr(t,i),t.stateNode===null)uo(e,t),Yg(t,n,r),fu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var c=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=ot(h):(h=$e(n)?Wn:xe.current,h=Fr(t,h));var I=n.getDerivedStateFromProps,E=typeof I=="function"||typeof a.getSnapshotBeforeUpdate=="function";E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||c!==h)&&Hh(t,a,r,h),sn=!1;var T=t.memoizedState;a.state=T,Do(t,r,a,i),c=t.memoizedState,u!==r||T!==c||Be.current||sn?(typeof I=="function"&&(hu(t,n,I,r),c=t.memoizedState),(u=sn||Vh(t,n,u,r,T,c,h))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=h,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Rg(e,t),u=t.memoizedProps,h=t.type===t.elementType?u:ct(t.type,u),a.props=h,E=t.pendingProps,T=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=$e(n)?Wn:xe.current,c=Fr(t,c));var x=n.getDerivedStateFromProps;(I=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==E||T!==c)&&Hh(t,a,r,c),sn=!1,T=t.memoizedState,a.state=T,Do(t,r,a,i);var N=t.memoizedState;u!==E||T!==N||Be.current||sn?(typeof x=="function"&&(hu(t,n,x,r),N=t.memoizedState),(h=sn||Vh(t,n,h,r,T,N,c)||!1)?(I||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,N,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,N,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),a.props=r,a.state=N,a.context=c,r=h):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&T===e.memoizedState||(t.flags|=1024),r=!1)}return mu(e,t,n,r,s,i)}function mu(e,t,n,r,i,s){em(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Mh(t,n,!1),qt(e,t,s);r=t.stateNode,Hw.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=zr(t,e.child,null,s),t.child=zr(t,null,u,s)):Me(e,t,u,s),t.memoizedState=r.state,i&&Mh(t,n,!0),t.child}function tm(e){var t=e.stateNode;t.pendingContext?Dh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dh(e,t.context,!1),mc(e,t.containerInfo)}function Xh(e,t,n,r,i){return br(),cc(i),t.flags|=256,Me(e,t,n,r),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function yu(e){return{baseLanes:e,cachePool:null,transitions:null}}function nm(e,t,n){var r=t.pendingProps,i=se.current,s=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(se,i&1),e===null)return cu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ha(a,r,0,null),e=Hn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=yu(n),t.memoizedState=vu,e):Tc(t,a));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Ww(e,t,a,r,u,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=In(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=In(u,s):(s=Hn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?yu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=vu,r}return s=e.child,e=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Tc(e,t){return t=ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ws(e,t,n,r){return r!==null&&cc(r),zr(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ww(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=wl(Error(M(422))),Ws(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=ha({mode:"visible",children:r.children},i,0,null),s=Hn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&zr(t,e.child,null,a),t.child.memoizedState=yu(a),t.memoizedState=vu,s);if(!(t.mode&1))return Ws(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(M(419)),r=wl(s,r,void 0),Ws(e,t,a,r)}if(u=(a&e.childLanes)!==0,ze||u){if(r=ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gt(e,i),pt(r,e,i,-1))}return Nc(),r=wl(Error(M(421))),Ws(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=i1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,We=yn(i.nextSibling),Ge=t,re=!0,ht=null,e!==null&&(et[tt++]=Ft,et[tt++]=bt,et[tt++]=Kn,Ft=e.id,bt=e.overflow,Kn=t),t=Tc(t,r.children),t.flags|=4096,t)}function Jh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),du(e.return,t,n)}function _l(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Me(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jh(e,n,t);else if(e.tag===19)Jh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),_l(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}_l(t,!0,n,null,s);break;case"together":_l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kw(e,t,n){switch(t.tag){case 3:tm(t),br();break;case 5:Ag(t);break;case 1:$e(t.type)&&Ao(t);break;case 4:mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(Oo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?nm(e,t,n):(Z(se,se.current&1),e=qt(e,t,n),e!==null?e.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Zg(e,t,n)}return qt(e,t,n)}var im,wu,sm,om;im=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wu=function(){};sm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(Tt.current);var s=null;switch(n){case"input":i=Bl(e,i),r=Bl(e,r),s=[];break;case"select":i=ae({},i,{value:void 0}),r=ae({},r,{value:void 0}),s=[];break;case"textarea":i=Hl(e,i),r=Hl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Po)}Kl(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var u=i[h];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ui.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var c=r[h];if(u=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&c!==u&&(c!=null||u!=null))if(h==="style")if(u){for(a in u)!u.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&u[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(h,n)),n=c;else h==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(h,c)):h==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(h,""+c):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(h)?(c!=null&&h==="onScroll"&&te("scroll",e),s||u===c||(s=[])):(s=s||[]).push(h,c))}n&&(s=s||[]).push("style",n);var h=s;(t.updateQueue=h)&&(t.flags|=4)}};om=function(e,t,n,r){n!==r&&(t.flags|=4)};function yi(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gw(e,t,n){var r=t.pendingProps;switch(uc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return $e(t.type)&&Ro(),Ce(t),null;case 3:return r=t.stateNode,Br(),ne(Be),ne(xe),yc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Pu(ht),ht=null))),wu(e,t),Ce(t),null;case 5:vc(t);var i=Bn(Yi.current);if(n=t.type,e!==null&&t.stateNode!=null)sm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ce(t),null}if(e=Bn(Tt.current),Vs(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Et]=t,r[Gi]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Si.length;i++)te(Si[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ah(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":uh(r,s),te("invalid",r)}Kl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&$s(r.textContent,u,e),i=["children",""+u]):Ui.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":Ds(r),lh(r,s,!0);break;case"textarea":Ds(r),ch(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Po)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Dp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Et]=t,e[Gi]=r,im(e,t,!1,!1),t.stateNode=e;e:{switch(a=Gl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<Si.length;i++)te(Si[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":ah(e,r),i=Bl(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ae({},r,{value:void 0}),te("invalid",e);break;case"textarea":uh(e,r),i=Hl(e,r),te("invalid",e);break;default:i=r}Kl(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?Up(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Mp(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fi(e,c):typeof c=="number"&&Fi(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ui.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&qu(e,s,c,a))}switch(n){case"input":Ds(e),lh(e,r,!1);break;case"textarea":Ds(e),ch(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Cn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Pr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)om(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Bn(Yi.current),Bn(Tt.current),Vs(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(s=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:$s(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&$s(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ce(t),null;case 13:if(ne(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&We!==null&&t.mode&1&&!(t.flags&128))Tg(),br(),t.flags|=98560,s=!1;else if(s=Vs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(M(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(M(317));s[Et]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),s=!1}else ht!==null&&(Pu(ht),ht=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ge===0&&(ge=3):Nc())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Br(),wu(e,t),e===null&&Wi(t.stateNode.containerInfo),Ce(t),null;case 10:return fc(t.type._context),Ce(t),null;case 17:return $e(t.type)&&Ro(),Ce(t),null;case 19:if(ne(se),s=t.memoizedState,s===null)return Ce(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)yi(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Mo(e),a!==null){for(t.flags|=128,yi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(se,se.current&1|2),t.child}e=e.sibling}s.tail!==null&&de()>Vr&&(t.flags|=128,r=!0,yi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Mo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Ce(t),null}else 2*de()-s.renderingStartTime>Vr&&n!==1073741824&&(t.flags|=128,r=!0,yi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=de(),t.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Ac(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function qw(e,t){switch(uc(t),t.tag){case 1:return $e(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),ne(Be),ne(xe),yc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vc(t),null;case 13:if(ne(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(se),null;case 4:return Br(),null;case 10:return fc(t.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Ks=!1,Re=!1,Yw=typeof WeakSet=="function"?WeakSet:Set,B=null;function Tr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function _u(e,t,n){try{n()}catch(r){le(e,t,r)}}var Zh=!1;function Qw(e,t){if(ru=To,e=dg(),ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,u=-1,c=-1,h=0,I=0,E=e,T=null;t:for(;;){for(var x;E!==n||i!==0&&E.nodeType!==3||(u=a+i),E!==s||r!==0&&E.nodeType!==3||(c=a+r),E.nodeType===3&&(a+=E.nodeValue.length),(x=E.firstChild)!==null;)T=E,E=x;for(;;){if(E===e)break t;if(T===n&&++h===i&&(u=a),T===s&&++I===r&&(c=a),(x=E.nextSibling)!==null)break;E=T,T=E.parentNode}E=x}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},To=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var L=N.memoizedProps,D=N.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?L:ct(t.type,L),D);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(O){le(t,t.return,O)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return N=Zh,Zh=!1,N}function Oi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&_u(t,n,s)}i=i.next}while(i!==r)}}function ca(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Eu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function am(e){var t=e.alternate;t!==null&&(e.alternate=null,am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Gi],delete t[au],delete t[Ow],delete t[Lw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lm(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Iu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Po));else if(r!==4&&(e=e.child,e!==null))for(Iu(e,t,n),e=e.sibling;e!==null;)Iu(e,t,n),e=e.sibling}function Su(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Su(e,t,n),e=e.sibling;e!==null;)Su(e,t,n),e=e.sibling}var we=null,dt=!1;function tn(e,t,n){for(n=n.child;n!==null;)um(e,t,n),n=n.sibling}function um(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:Re||Tr(n,t);case 6:var r=we,i=dt;we=null,tn(e,t,n),we=r,dt=i,we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(dt?(e=we,n=n.stateNode,e.nodeType===8?fl(e.parentNode,n):e.nodeType===1&&fl(e,n),$i(e)):fl(we,n.stateNode));break;case 4:r=we,i=dt,we=n.stateNode.containerInfo,dt=!0,tn(e,t,n),we=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_u(n,t,a),i=i.next}while(i!==r)}tn(e,t,n);break;case 1:if(!Re&&(Tr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){le(n,t,u)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,tn(e,t,n),Re=r):tn(e,t,n);break;default:tn(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yw),t.forEach(function(r){var i=s1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:we=u.stateNode,dt=!1;break e;case 3:we=u.stateNode.containerInfo,dt=!0;break e;case 4:we=u.stateNode.containerInfo,dt=!0;break e}u=u.return}if(we===null)throw Error(M(160));um(s,a,i),we=null,dt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(h){le(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cm(t,e),t=t.sibling}function cm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),wt(e),r&4){try{Oi(3,e,e.return),ca(3,e)}catch(L){le(e,e.return,L)}try{Oi(5,e,e.return)}catch(L){le(e,e.return,L)}}break;case 1:ut(t,e),wt(e),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(ut(t,e),wt(e),r&512&&n!==null&&Tr(n,n.return),e.flags&32){var i=e.stateNode;try{Fi(i,"")}catch(L){le(e,e.return,L)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Op(i,s),Gl(u,a);var h=Gl(u,s);for(a=0;a<c.length;a+=2){var I=c[a],E=c[a+1];I==="style"?Up(i,E):I==="dangerouslySetInnerHTML"?Mp(i,E):I==="children"?Fi(i,E):qu(i,I,E,h)}switch(u){case"input":$l(i,s);break;case"textarea":Lp(i,s);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Pr(i,!!s.multiple,x,!1):T!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(L){le(e,e.return,L)}}break;case 6:if(ut(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(L){le(e,e.return,L)}}break;case 3:if(ut(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(L){le(e,e.return,L)}break;case 4:ut(t,e),wt(e);break;case 13:ut(t,e),wt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pc=de())),r&4&&tf(e);break;case 22:if(I=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(h=Re)||I,ut(t,e),Re=h):ut(t,e),wt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!I&&e.mode&1)for(B=e,I=e.child;I!==null;){for(E=B=I;B!==null;){switch(T=B,x=T.child,T.tag){case 0:case 11:case 14:case 15:Oi(4,T,T.return);break;case 1:Tr(T,T.return);var N=T.stateNode;if(typeof N.componentWillUnmount=="function"){r=T,n=T.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(L){le(r,n,L)}}break;case 5:Tr(T,T.return);break;case 22:if(T.memoizedState!==null){rf(E);continue}}x!==null?(x.return=T,B=x):rf(E)}I=I.sibling}e:for(I=null,E=e;;){if(E.tag===5){if(I===null){I=E;try{i=E.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=E.stateNode,c=E.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=jp("display",a))}catch(L){le(e,e.return,L)}}}else if(E.tag===6){if(I===null)try{E.stateNode.nodeValue=h?"":E.memoizedProps}catch(L){le(e,e.return,L)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===e)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===e)break e;for(;E.sibling===null;){if(E.return===null||E.return===e)break e;I===E&&(I=null),E=E.return}I===E&&(I=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:ut(t,e),wt(e),r&4&&tf(e);break;case 21:break;default:ut(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lm(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=ef(e);Su(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=ef(e);Iu(e,u,a);break;default:throw Error(M(161))}}catch(c){le(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xw(e,t,n){B=e,dm(e)}function dm(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Ks;if(!a){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Re;u=Ks;var h=Re;if(Ks=a,(Re=c)&&!h)for(B=i;B!==null;)a=B,c=a.child,a.tag===22&&a.memoizedState!==null?sf(i):c!==null?(c.return=a,B=c):sf(i);for(;s!==null;)B=s,dm(s),s=s.sibling;B=i,Ks=u,Re=h}nf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):nf(e)}}function nf(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||ca(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&zh(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zh(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var I=h.memoizedState;if(I!==null){var E=I.dehydrated;E!==null&&$i(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Re||t.flags&512&&Eu(t)}catch(T){le(t,t.return,T)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function rf(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function sf(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ca(4,t)}catch(c){le(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){le(t,i,c)}}var s=t.return;try{Eu(t)}catch(c){le(t,s,c)}break;case 5:var a=t.return;try{Eu(t)}catch(c){le(t,a,c)}}}catch(c){le(t,t.return,c)}if(t===e){B=null;break}var u=t.sibling;if(u!==null){u.return=t.return,B=u;break}B=t.return}}var Jw=Math.ceil,Fo=Qt.ReactCurrentDispatcher,kc=Qt.ReactCurrentOwner,rt=Qt.ReactCurrentBatchConfig,G=0,ve=null,he=null,_e=0,He=0,kr=An(0),ge=0,Zi=null,qn=0,da=0,Cc=0,Li=null,be=null,Pc=0,Vr=1/0,jt=null,bo=!1,Tu=null,_n=null,Gs=!1,fn=null,zo=0,Di=0,ku=null,co=-1,ho=0;function je(){return G&6?de():co!==-1?co:co=de()}function En(e){return e.mode&1?G&2&&_e!==0?_e&-_e:Mw.transition!==null?(ho===0&&(ho=Yp()),ho):(e=Q,e!==0||(e=window.event,e=e===void 0?16:ng(e.type)),e):1}function pt(e,t,n,r){if(50<Di)throw Di=0,ku=null,Error(M(185));os(e,n,r),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(da|=n),ge===4&&an(e,_e)),Ve(e,r),n===1&&G===0&&!(t.mode&1)&&(Vr=de()+500,aa&&Nn()))}function Ve(e,t){var n=e.callbackNode;M0(e,t);var r=So(e,e===ve?_e:0);if(r===0)n!==null&&fh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fh(n),t===1)e.tag===0?Dw(of.bind(null,e)):Eg(of.bind(null,e)),Nw(function(){!(G&6)&&Nn()}),n=null;else{switch(Qp(r)){case 1:n=Zu;break;case 4:n=Gp;break;case 16:n=Io;break;case 536870912:n=qp;break;default:n=Io}n=wm(n,hm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function hm(e,t){if(co=-1,ho=0,G&6)throw Error(M(327));var n=e.callbackNode;if(Or()&&e.callbackNode!==n)return null;var r=So(e,e===ve?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Bo(e,r);else{t=r;var i=G;G|=2;var s=pm();(ve!==e||_e!==t)&&(jt=null,Vr=de()+500,Vn(e,t));do try{t1();break}catch(u){fm(e,u)}while(!0);hc(),Fo.current=s,G=i,he!==null?t=0:(ve=null,_e=0,t=ge)}if(t!==0){if(t===2&&(i=Jl(e),i!==0&&(r=i,t=Cu(e,i))),t===1)throw n=Zi,Vn(e,0),an(e,r),Ve(e,de()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!Zw(i)&&(t=Bo(e,r),t===2&&(s=Jl(e),s!==0&&(r=s,t=Cu(e,s))),t===1))throw n=Zi,Vn(e,0),an(e,r),Ve(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:Un(e,be,jt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Pc+500-de(),10<t)){if(So(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ou(Un.bind(null,e,be,jt),t);break}Un(e,be,jt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ft(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jw(r/1960))-r,10<r){e.timeoutHandle=ou(Un.bind(null,e,be,jt),r);break}Un(e,be,jt);break;case 5:Un(e,be,jt);break;default:throw Error(M(329))}}}return Ve(e,de()),e.callbackNode===n?hm.bind(null,e):null}function Cu(e,t){var n=Li;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=Bo(e,t),e!==2&&(t=be,be=n,t!==null&&Pu(t)),e}function Pu(e){be===null?be=e:be.push.apply(be,e)}function Zw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Cc,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function of(e){if(G&6)throw Error(M(327));Or();var t=So(e,0);if(!(t&1))return Ve(e,de()),null;var n=Bo(e,t);if(e.tag!==0&&n===2){var r=Jl(e);r!==0&&(t=r,n=Cu(e,r))}if(n===1)throw n=Zi,Vn(e,0),an(e,t),Ve(e,de()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,be,jt),Ve(e,de()),null}function Rc(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Vr=de()+500,aa&&Nn())}}function Yn(e){fn!==null&&fn.tag===0&&!(G&6)&&Or();var t=G;G|=1;var n=rt.transition,r=Q;try{if(rt.transition=null,Q=1,e)return e()}finally{Q=r,rt.transition=n,G=t,!(G&6)&&Nn()}}function Ac(){He=kr.current,ne(kr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Aw(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(uc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Br(),ne(Be),ne(xe),yc();break;case 5:vc(r);break;case 4:Br();break;case 13:ne(se);break;case 19:ne(se);break;case 10:fc(r.type._context);break;case 22:case 23:Ac()}n=n.return}if(ve=e,he=e=In(e.current,null),_e=He=t,ge=0,Zi=null,Cc=da=qn=0,be=Li=null,zn!==null){for(t=0;t<zn.length;t++)if(n=zn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}zn=null}return e}function fm(e,t){do{var n=he;try{if(hc(),ao.current=Uo,jo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jo=!1}if(Gn=0,me=pe=oe=null,xi=!1,Qi=0,kc.current=null,n===null||n.return===null){ge=1,Zi=t,he=null;break}e:{var s=e,a=n.return,u=n,c=t;if(t=_e,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var h=c,I=u,E=I.tag;if(!(I.mode&1)&&(E===0||E===11||E===15)){var T=I.alternate;T?(I.updateQueue=T.updateQueue,I.memoizedState=T.memoizedState,I.lanes=T.lanes):(I.updateQueue=null,I.memoizedState=null)}var x=Kh(a);if(x!==null){x.flags&=-257,Gh(x,a,u,s,t),x.mode&1&&Wh(s,h,t),t=x,c=h;var N=t.updateQueue;if(N===null){var L=new Set;L.add(c),t.updateQueue=L}else N.add(c);break e}else{if(!(t&1)){Wh(s,h,t),Nc();break e}c=Error(M(426))}}else if(re&&u.mode&1){var D=Kh(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Gh(D,a,u,s,t),cc($r(c,u));break e}}s=c=$r(c,u),ge!==4&&(ge=2),Li===null?Li=[s]:Li.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=Qg(s,c,t);bh(s,v);break e;case 1:u=c;var m=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(_n===null||!_n.has(S)))){s.flags|=65536,t&=-t,s.lanes|=t;var O=Xg(s,u,t);bh(s,O);break e}}s=s.return}while(s!==null)}mm(n)}catch(j){t=j,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function pm(){var e=Fo.current;return Fo.current=Uo,e===null?Uo:e}function Nc(){(ge===0||ge===3||ge===2)&&(ge=4),ve===null||!(qn&268435455)&&!(da&268435455)||an(ve,_e)}function Bo(e,t){var n=G;G|=2;var r=pm();(ve!==e||_e!==t)&&(jt=null,Vn(e,t));do try{e1();break}catch(i){fm(e,i)}while(!0);if(hc(),G=n,Fo.current=r,he!==null)throw Error(M(261));return ve=null,_e=0,ge}function e1(){for(;he!==null;)gm(he)}function t1(){for(;he!==null&&!C0();)gm(he)}function gm(e){var t=ym(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?mm(e):he=t,kc.current=null}function mm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qw(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,he=null;return}}else if(n=Gw(n,t,He),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ge===0&&(ge=5)}function Un(e,t,n){var r=Q,i=rt.transition;try{rt.transition=null,Q=1,n1(e,t,n,r)}finally{rt.transition=i,Q=r}return null}function n1(e,t,n,r){do Or();while(fn!==null);if(G&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(j0(e,s),e===ve&&(he=ve=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gs||(Gs=!0,wm(Io,function(){return Or(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=rt.transition,rt.transition=null;var a=Q;Q=1;var u=G;G|=4,kc.current=null,Qw(e,n),cm(n,e),Iw(iu),To=!!ru,iu=ru=null,e.current=n,Xw(n),P0(),G=u,Q=a,rt.transition=s}else e.current=n;if(Gs&&(Gs=!1,fn=e,zo=i),s=e.pendingLanes,s===0&&(_n=null),N0(n.stateNode),Ve(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bo)throw bo=!1,e=Tu,Tu=null,e;return zo&1&&e.tag!==0&&Or(),s=e.pendingLanes,s&1?e===ku?Di++:(Di=0,ku=e):Di=0,Nn(),null}function Or(){if(fn!==null){var e=Qp(zo),t=rt.transition,n=Q;try{if(rt.transition=null,Q=16>e?16:e,fn===null)var r=!1;else{if(e=fn,fn=null,zo=0,G&6)throw Error(M(331));var i=G;for(G|=4,B=e.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var h=u[c];for(B=h;B!==null;){var I=B;switch(I.tag){case 0:case 11:case 15:Oi(8,I,s)}var E=I.child;if(E!==null)E.return=I,B=E;else for(;B!==null;){I=B;var T=I.sibling,x=I.return;if(am(I),I===h){B=null;break}if(T!==null){T.return=x,B=T;break}B=x}}}var N=s.alternate;if(N!==null){var L=N.child;if(L!==null){N.child=null;do{var D=L.sibling;L.sibling=null,L=D}while(L!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,B=v;break e}B=s.return}}var m=e.current;for(B=m;B!==null;){a=B;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,B=S;else e:for(a=m;B!==null;){if(u=B,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ca(9,u)}}catch(j){le(u,u.return,j)}if(u===a){B=null;break e}var O=u.sibling;if(O!==null){O.return=u.return,B=O;break e}B=u.return}}if(G=i,Nn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(na,e)}catch{}r=!0}return r}finally{Q=n,rt.transition=t}}return!1}function af(e,t,n){t=$r(n,t),t=Qg(e,t,1),e=wn(e,t,1),t=je(),e!==null&&(os(e,1,t),Ve(e,t))}function le(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))){e=$r(n,e),e=Xg(t,e,1),t=wn(t,e,1),e=je(),t!==null&&(os(t,1,e),Ve(t,e));break}}t=t.return}}function r1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(_e&n)===n&&(ge===4||ge===3&&(_e&130023424)===_e&&500>de()-Pc?Vn(e,0):Cc|=n),Ve(e,t)}function vm(e,t){t===0&&(e.mode&1?(t=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):t=1);var n=je();e=Gt(e,t),e!==null&&(os(e,t,n),Ve(e,n))}function i1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vm(e,n)}function s1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),vm(e,n)}var ym;ym=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)ze=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ze=!1,Kw(e,t,n);ze=!!(e.flags&131072)}else ze=!1,re&&t.flags&1048576&&Ig(t,xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;uo(e,t),e=t.pendingProps;var i=Fr(t,xe.current);xr(t,n),i=_c(null,t,r,e,i,n);var s=Ec();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$e(r)?(s=!0,Ao(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gc(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,fu(t,r,e,n),t=mu(null,t,r,!0,s,n)):(t.tag=0,re&&s&&lc(t),Me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=a1(r),e=ct(r,e),i){case 0:t=gu(null,t,r,e,n);break e;case 1:t=Qh(null,t,r,e,n);break e;case 11:t=qh(null,t,r,e,n);break e;case 14:t=Yh(null,t,r,ct(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),gu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Qh(e,t,r,i,n);case 3:e:{if(tm(t),e===null)throw Error(M(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Rg(e,t),Do(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=$r(Error(M(423)),t),t=Xh(e,t,r,n,i);break e}else if(r!==i){i=$r(Error(M(424)),t),t=Xh(e,t,r,n,i);break e}else for(We=yn(t.stateNode.containerInfo.firstChild),Ge=t,re=!0,ht=null,n=Cg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=qt(e,t,n);break e}Me(e,t,r,n)}t=t.child}return t;case 5:return Ag(t),e===null&&cu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,su(r,i)?a=null:s!==null&&su(r,s)&&(t.flags|=32),em(e,t),Me(e,t,a,n),t.child;case 6:return e===null&&cu(t),null;case 13:return nm(e,t,n);case 4:return mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zr(t,null,r,n):Me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),qh(e,t,r,i,n);case 7:return Me(e,t,t.pendingProps,n),t.child;case 8:return Me(e,t,t.pendingProps.children,n),t.child;case 12:return Me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Z(Oo,r._currentValue),r._currentValue=a,s!==null)if(gt(s.value,a)){if(s.children===i.children&&!Be.current){t=qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Vt(-1,n&-n),c.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var I=h.pending;I===null?c.next=c:(c.next=I.next,I.next=c),h.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),du(s.return,n,t),u.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(M(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),du(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=ot(i),r=r(i),t.flags|=1,Me(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Yh(e,t,r,i,n);case 15:return Jg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),uo(e,t),t.tag=1,$e(r)?(e=!0,Ao(t)):e=!1,xr(t,n),Yg(t,r,i),fu(t,r,i,n),mu(null,t,r,!0,e,n);case 19:return rm(e,t,n);case 22:return Zg(e,t,n)}throw Error(M(156,t.tag))};function wm(e,t){return Kp(e,t)}function o1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(e,t,n,r){return new o1(e,t,n,r)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a1(e){if(typeof e=="function")return xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qu)return 11;if(e===Xu)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function fo(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")xc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case gr:return Hn(n.children,i,s,t);case Yu:a=8,i|=8;break;case Ul:return e=nt(12,n,t,i|2),e.elementType=Ul,e.lanes=s,e;case Fl:return e=nt(13,n,t,i),e.elementType=Fl,e.lanes=s,e;case bl:return e=nt(19,n,t,i),e.elementType=bl,e.lanes=s,e;case Ap:return ha(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pp:a=10;break e;case Rp:a=9;break e;case Qu:a=11;break e;case Xu:a=14;break e;case rn:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=nt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Hn(e,t,n,r){return e=nt(7,e,r,t),e.lanes=n,e}function ha(e,t,n,r){return e=nt(22,e,r,t),e.elementType=Ap,e.lanes=n,e.stateNode={isHidden:!1},e}function El(e,t,n){return e=nt(6,e,null,t),e.lanes=n,e}function Il(e,t,n){return t=nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oc(e,t,n,r,i,s,a,u,c){return e=new l1(e,t,n,u,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=nt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gc(s),e}function u1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _m(e){if(!e)return Pn;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if($e(n))return _g(e,n,t)}return t}function Em(e,t,n,r,i,s,a,u,c){return e=Oc(n,r,!0,e,i,s,a,u,c),e.context=_m(null),n=e.current,r=je(),i=En(n),s=Vt(r,i),s.callback=t??null,wn(n,s,i),e.current.lanes=i,os(e,i,r),Ve(e,r),e}function fa(e,t,n,r){var i=t.current,s=je(),a=En(i);return n=_m(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(i,t,a),e!==null&&(pt(e,i,a,s),oo(e,i,a)),a}function $o(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lc(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}function c1(){return null}var Im=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}pa.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));fa(e,t,null,null)};pa.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yn(function(){fa(null,e,null,null)}),t[Kt]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&tg(e)}};function Mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function d1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=$o(a);s.call(h)}}var a=Em(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=a,e[Kt]=a.current,Wi(e.nodeType===8?e.parentNode:e),Yn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var h=$o(c);u.call(h)}}var c=Oc(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=c,e[Kt]=c.current,Wi(e.nodeType===8?e.parentNode:e),Yn(function(){fa(t,c,n,r)}),c}function ma(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var u=i;i=function(){var c=$o(a);u.call(c)}}fa(t,a,e,i)}else a=d1(n,t,e,i,r);return $o(a)}Xp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ii(t.pendingLanes);n!==0&&(ec(t,n|1),Ve(t,de()),!(G&6)&&(Vr=de()+500,Nn()))}break;case 13:Yn(function(){var r=Gt(e,1);if(r!==null){var i=je();pt(r,e,1,i)}}),Lc(e,1)}};tc=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=je();pt(t,e,134217728,n)}Lc(e,134217728)}};Jp=function(e){if(e.tag===13){var t=En(e),n=Gt(e,t);if(n!==null){var r=je();pt(n,e,t,r)}Lc(e,t)}};Zp=function(){return Q};eg=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Yl=function(e,t,n){switch(t){case"input":if($l(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=oa(r);if(!i)throw Error(M(90));xp(r),$l(r,i)}}}break;case"textarea":Lp(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};zp=Rc;Bp=Yn;var h1={usingClientEntryPoint:!1,Events:[ls,wr,oa,Fp,bp,Rc]},wi={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f1={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hp(e),e===null?null:e.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{na=qs.inject(f1),St=qs}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h1;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(t))throw Error(M(200));return u1(e,t,null,n)};Qe.createRoot=function(e,t){if(!Mc(e))throw Error(M(299));var n=!1,r="",i=Im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Oc(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,Wi(e.nodeType===8?e.parentNode:e),new Dc(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Hp(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Yn(e)};Qe.hydrate=function(e,t,n){if(!ga(t))throw Error(M(200));return ma(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Mc(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Em(t,null,e,1,n??null,i,!1,s,a),e[Kt]=t.current,Wi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pa(t)};Qe.render=function(e,t,n){if(!ga(t))throw Error(M(200));return ma(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!ga(e))throw Error(M(40));return e._reactRootContainer?(Yn(function(){ma(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Rc;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ga(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return ma(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm)}catch(e){console.error(e)}}Sm(),Sp.exports=Qe;var p1=Sp.exports,cf=p1;Ml.createRoot=cf.createRoot,Ml.hydrateRoot=cf.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}var pn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(pn||(pn={}));const df="popstate";function g1(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:u}=r.location;return Ru("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vo(i)}return v1(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m1(){return Math.random().toString(36).substr(2,8)}function hf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ru(e,t,n,r){return n===void 0&&(n=null),es({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Yr(t):t,{state:n,key:t&&t.key||r||m1()})}function Vo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function v1(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u=pn.Pop,c=null,h=I();h==null&&(h=0,a.replaceState(es({},a.state,{idx:h}),""));function I(){return(a.state||{idx:null}).idx}function E(){u=pn.Pop;let D=I(),v=D==null?null:D-h;h=D,c&&c({action:u,location:L.location,delta:v})}function T(D,v){u=pn.Push;let m=Ru(L.location,D,v);h=I()+1;let S=hf(m,h),O=L.createHref(m);try{a.pushState(S,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(O)}s&&c&&c({action:u,location:L.location,delta:1})}function x(D,v){u=pn.Replace;let m=Ru(L.location,D,v);h=I();let S=hf(m,h),O=L.createHref(m);a.replaceState(S,"",O),s&&c&&c({action:u,location:L.location,delta:0})}function N(D){let v=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof D=="string"?D:Vo(D);return m=m.replace(/ $/,"%20"),fe(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let L={get action(){return u},get location(){return e(i,a)},listen(D){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(df,E),c=D,()=>{i.removeEventListener(df,E),c=null}},createHref(D){return t(i,D)},createURL:N,encodeLocation(D){let v=N(D);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:T,replace:x,go(D){return a.go(D)}};return L}var ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ff||(ff={}));function y1(e,t,n){return n===void 0&&(n="/"),w1(e,t,n,!1)}function w1(e,t,n,r){let i=typeof t=="string"?Yr(t):t,s=jc(i.pathname||"/",n);if(s==null)return null;let a=km(e);_1(a);let u=null;for(let c=0;u==null&&c<a.length;++c){let h=x1(s);u=A1(a[c],h,r)}return u}function km(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,u)=>{let c={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let h=Sn([r,c.relativePath]),I=n.concat(c);s.children&&s.children.length>0&&(fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),km(s.children,t,I,h)),!(s.path==null&&!s.index)&&t.push({path:h,score:P1(h,s.index),routesMeta:I})};return e.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let c of Cm(s.path))i(s,a,c)}),t}function Cm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Cm(r.join("/")),u=[];return u.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&u.push(...a),u.map(c=>e.startsWith("/")&&c===""?"/":c)}function _1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:R1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const E1=/^:[\w-]+$/,I1=3,S1=2,T1=1,k1=10,C1=-2,pf=e=>e==="*";function P1(e,t){let n=e.split("/"),r=n.length;return n.some(pf)&&(r+=C1),t&&(r+=S1),n.filter(i=>!pf(i)).reduce((i,s)=>i+(E1.test(s)?I1:s===""?T1:k1),r)}function R1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function A1(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let u=0;u<r.length;++u){let c=r[u],h=u===r.length-1,I=s==="/"?t:t.slice(s.length)||"/",E=gf({path:c.relativePath,caseSensitive:c.caseSensitive,end:h},I),T=c.route;if(!E&&h&&n&&!r[r.length-1].route.index&&(E=gf({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},I)),!E)return null;Object.assign(i,E.params),a.push({params:i,pathname:Sn([s,E.pathname]),pathnameBase:M1(Sn([s,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(s=Sn([s,E.pathnameBase]))}return a}function gf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=N1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((h,I,E)=>{let{paramName:T,isOptional:x}=I;if(T==="*"){let L=u[E]||"";a=s.slice(0,s.length-L.length).replace(/(.)\/+$/,"$1")}const N=u[E];return x&&!N?h[T]=void 0:h[T]=(N||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:e}}function N1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,c)=>(r.push({paramName:u,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function x1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function O1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Yr(e):e;return{pathname:n?n.startsWith("/")?n:L1(n,t):t,search:j1(r),hash:U1(i)}}function L1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pm(e,t){let n=D1(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Yr(e):(i=es({},e),fe(!i.pathname||!i.pathname.includes("?"),Sl("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),Sl("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),Sl("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=n;else{let E=t.length-1;if(!r&&a.startsWith("..")){let T=a.split("/");for(;T[0]==="..";)T.shift(),E-=1;i.pathname=T.join("/")}u=E>=0?t[E]:"/"}let c=O1(i,u),h=a&&a!=="/"&&a.endsWith("/"),I=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(h||I)&&(c.pathname+="/"),c}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),M1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,U1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function F1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Am=["post","put","patch","delete"];new Set(Am);const b1=["get",...Am];new Set(b1);/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}const Uc=b.createContext(null),z1=b.createContext(null),rr=b.createContext(null),va=b.createContext(null),ir=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Nm=b.createContext(null);function B1(e,t){let{relative:n}=t===void 0?{}:t;cs()||fe(!1);let{basename:r,navigator:i}=b.useContext(rr),{hash:s,pathname:a,search:u}=Lm(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Sn([r,a])),i.createHref({pathname:c,search:u,hash:s})}function cs(){return b.useContext(va)!=null}function ya(){return cs()||fe(!1),b.useContext(va).location}function xm(e){b.useContext(rr).static||b.useLayoutEffect(e)}function Om(){let{isDataRoute:e}=b.useContext(ir);return e?e_():$1()}function $1(){cs()||fe(!1);let e=b.useContext(Uc),{basename:t,future:n,navigator:r}=b.useContext(rr),{matches:i}=b.useContext(ir),{pathname:s}=ya(),a=JSON.stringify(Pm(i,n.v7_relativeSplatPath)),u=b.useRef(!1);return xm(()=>{u.current=!0}),b.useCallback(function(h,I){if(I===void 0&&(I={}),!u.current)return;if(typeof h=="number"){r.go(h);return}let E=Rm(h,JSON.parse(a),s,I.relative==="path");e==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:Sn([t,E.pathname])),(I.replace?r.replace:r.push)(E,I.state,I)},[t,r,a,s,e])}function Lm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(rr),{matches:i}=b.useContext(ir),{pathname:s}=ya(),a=JSON.stringify(Pm(i,r.v7_relativeSplatPath));return b.useMemo(()=>Rm(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function V1(e,t){return H1(e,t)}function H1(e,t,n,r){cs()||fe(!1);let{navigator:i}=b.useContext(rr),{matches:s}=b.useContext(ir),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let h=ya(),I;if(t){var E;let D=typeof t=="string"?Yr(t):t;c==="/"||(E=D.pathname)!=null&&E.startsWith(c)||fe(!1),I=D}else I=h;let T=I.pathname||"/",x=T;if(c!=="/"){let D=c.replace(/^\//,"").split("/");x="/"+T.replace(/^\//,"").split("/").slice(D.length).join("/")}let N=y1(e,{pathname:x}),L=Y1(N&&N.map(D=>Object.assign({},D,{params:Object.assign({},u,D.params),pathname:Sn([c,i.encodeLocation?i.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?c:Sn([c,i.encodeLocation?i.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),s,n,r);return t&&L?b.createElement(va.Provider,{value:{location:ts({pathname:"/",search:"",hash:"",state:null,key:"default"},I),navigationType:pn.Pop}},L):L}function W1(){let e=Z1(),t=F1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const K1=b.createElement(W1,null);class G1 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(ir.Provider,{value:this.props.routeContext},b.createElement(Nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q1(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Uc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(ir.Provider,{value:t},r)}function Y1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let a=e,u=(i=n)==null?void 0:i.errors;if(u!=null){let I=a.findIndex(E=>E.route.id&&(u==null?void 0:u[E.route.id])!==void 0);I>=0||fe(!1),a=a.slice(0,Math.min(a.length,I+1))}let c=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let I=0;I<a.length;I++){let E=a[I];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(h=I),E.route.id){let{loaderData:T,errors:x}=n,N=E.route.loader&&T[E.route.id]===void 0&&(!x||x[E.route.id]===void 0);if(E.route.lazy||N){c=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((I,E,T)=>{let x,N=!1,L=null,D=null;n&&(x=u&&E.route.id?u[E.route.id]:void 0,L=E.route.errorElement||K1,c&&(h<0&&T===0?(N=!0,D=null):h===T&&(N=!0,D=E.route.hydrateFallbackElement||null)));let v=t.concat(a.slice(0,T+1)),m=()=>{let S;return x?S=L:N?S=D:E.route.Component?S=b.createElement(E.route.Component,null):E.route.element?S=E.route.element:S=I,b.createElement(q1,{match:E,routeContext:{outlet:I,matches:v,isDataRoute:n!=null},children:S})};return n&&(E.route.ErrorBoundary||E.route.errorElement||T===0)?b.createElement(G1,{location:n.location,revalidation:n.revalidation,component:L,error:x,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var Dm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Dm||{}),Ho=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ho||{});function Q1(e){let t=b.useContext(Uc);return t||fe(!1),t}function X1(e){let t=b.useContext(z1);return t||fe(!1),t}function J1(e){let t=b.useContext(ir);return t||fe(!1),t}function Mm(e){let t=J1(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Z1(){var e;let t=b.useContext(Nm),n=X1(Ho.UseRouteError),r=Mm(Ho.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function e_(){let{router:e}=Q1(Dm.UseNavigateStable),t=Mm(Ho.UseNavigateStable),n=b.useRef(!1);return xm(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ts({fromRouteId:t},s)))},[e,t])}function po(e){fe(!1)}function t_(e){let{basename:t="/",children:n=null,location:r,navigationType:i=pn.Pop,navigator:s,static:a=!1,future:u}=e;cs()&&fe(!1);let c=t.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:c,navigator:s,static:a,future:ts({v7_relativeSplatPath:!1},u)}),[c,u,s,a]);typeof r=="string"&&(r=Yr(r));let{pathname:I="/",search:E="",hash:T="",state:x=null,key:N="default"}=r,L=b.useMemo(()=>{let D=jc(I,c);return D==null?null:{location:{pathname:D,search:E,hash:T,state:x,key:N},navigationType:i}},[c,I,E,T,x,N,i]);return L==null?null:b.createElement(rr.Provider,{value:h},b.createElement(va.Provider,{children:n,value:L}))}function n_(e){let{children:t,location:n}=e;return V1(Au(t),n)}new Promise(()=>{});function Au(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Au(r.props.children,s));return}r.type!==po&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Au(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nu(){return Nu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nu.apply(this,arguments)}function r_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function i_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s_(e,t){return e.button===0&&(!t||t==="_self")&&!i_(e)}const o_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],a_="6";try{window.__reactRouterVersion=a_}catch{}const l_="startTransition",mf=r0[l_];function u_(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=g1({window:i,v5Compat:!0}));let a=s.current,[u,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},I=b.useCallback(E=>{h&&mf?mf(()=>c(E)):c(E)},[c,h]);return b.useLayoutEffect(()=>a.listen(I),[a,I]),b.createElement(t_,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:a,future:r})}const c_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h_=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:u,target:c,to:h,preventScrollReset:I,unstable_viewTransition:E}=t,T=r_(t,o_),{basename:x}=b.useContext(rr),N,L=!1;if(typeof h=="string"&&d_.test(h)&&(N=h,c_))try{let S=new URL(window.location.href),O=h.startsWith("//")?new URL(S.protocol+h):new URL(h),j=jc(O.pathname,x);O.origin===S.origin&&j!=null?h=j+O.search+O.hash:L=!0}catch{}let D=B1(h,{relative:i}),v=f_(h,{replace:a,state:u,target:c,preventScrollReset:I,relative:i,unstable_viewTransition:E});function m(S){r&&r(S),S.defaultPrevented||v(S)}return b.createElement("a",Nu({},T,{href:N||D,onClick:L||s?r:m,ref:n,target:c}))});var vf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vf||(vf={}));var yf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yf||(yf={}));function f_(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:u}=t===void 0?{}:t,c=Om(),h=ya(),I=Lm(e,{relative:a});return b.useCallback(E=>{if(s_(E,n)){E.preventDefault();let T=r!==void 0?r:Vo(h)===Vo(I);c(e,{replace:T,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:u})}},[h,c,I,r,i,n,e,s,a,u])}const p_=()=>R.jsx("div",{className:"hero-container",children:R.jsx("div",{className:"hero-bg",children:R.jsxs("div",{className:"hero-content-container",children:[R.jsx("h1",{children:"EVERYONE DESERVES TO EAT"}),R.jsxs("div",{className:"hero-cta",children:[R.jsx("p",{children:"Help solve our worldwide food distribution crisis today"}),R.jsx(h_,{to:"auth",className:"hero-sign-in",children:R.jsx("button",{children:"Start Helping"})})]})]})})}),g_=()=>R.jsx("div",{className:"mission-section-wrapper",id:"mission",children:R.jsxs("section",{className:"mission-container",children:[R.jsx("div",{class:"custom-shape-divider-top-1722479496",children:R.jsx("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:R.jsx("path",{d:"M649.97 0L550.03 0 599.91 54.12 649.97 0z",class:"shape-fill"})})}),R.jsx("div",{className:"mission-img-container",children:R.jsx("img",{src:"src\\assets\\images\\missionpic.jpg"})}),R.jsxs("div",{className:"mission-text-container",children:[R.jsx("h1",{children:"Our Mission"}),R.jsx("p",{children:"At [Your WebApp Name], we aim to create a more equitable and sustainable food distribution system. We strive to bridge the gap between surplus food from local businesses—such as restaurants and grocery stores—and the critical needs of food donation centers, homeless shelters, and food banks in our communities."})]})]})}),m_=()=>R.jsx("div",{className:"impact-bg",id:"impact",children:R.jsxs("section",{className:"impact-container",children:[R.jsx("h1",{children:"Our Impact"}),R.jsxs("div",{className:"impact-card-container",children:[R.jsxs("div",{className:"impact-card",id:"card1",children:[R.jsx("h1",{children:"Helping the Climate"}),R.jsx("p",{children:"Food waste accounts for about 8-10% of global greenhouse gas emissions. Reducing food waste could mitigate up to 4.4 gigatons of CO2 equivalent annually."})]}),R.jsxs("div",{className:"impact-card",id:"card2",children:[R.jsx("h1",{children:"Solving the food crisis"}),R.jsx("p",{children:"In developed countries, up to 40% of food is wasted, which, if redistributed, could feed around 2 billion people , more than twice the number of undernourished individuals worldwide."})]}),R.jsxs("div",{className:"impact-card",id:"card3",children:[R.jsx("h1",{children:"The Price of Food Waste"}),R.jsx("p",{children:"The annual economic cost of food waste is estimated to be about $1 trillion globally. Reducing food waste through efficient distribution can save substantial amounts of money for businesses and governments."})]})]})]})}),v_=()=>R.jsx("div",{className:"contact-bg",id:"contact",children:R.jsxs("section",{className:"contact-container",children:[R.jsxs("div",{className:"contact-info-container",children:[R.jsx("h1",{children:"Get In Contact"}),R.jsx("p",{children:"Got questions or having any issues? Get in contact with us!"}),R.jsxs("div",{className:"contact-option",children:[R.jsx("img",{className:"contact-icon",src:"src\\assets\\icons\\email.png"}),R.jsx("p",{children:"contact.us.food4everyone@gmail.com"})]}),R.jsxs("div",{className:"contact-option",children:[R.jsx("img",{className:"contact-icon",src:"src\\assets\\icons\\phone.png"}),R.jsx("p",{children:"(609) 813-0834"})]})]}),R.jsxs("div",{className:"contact-form-container",children:[R.jsx("h1",{children:"Write Us A Message"}),R.jsxs("form",{action:"https://api.web3forms.com/submit",method:"POST",children:[R.jsx("input",{type:"hidden",name:"access_key",value:"43bee1f5-97cf-4b22-bd84-d85663d1d921"}),R.jsxs("div",{className:"contact-input",children:[R.jsx("p",{children:"Email"}),R.jsx("input",{type:"email",name:"email",placeholder:"Enter your email"})]}),R.jsxs("div",{className:"contact-input",children:[R.jsx("p",{children:"Name"}),R.jsx("input",{name:"name",placeholder:"Enter a name"})]}),R.jsxs("div",{className:"contact-input",children:[R.jsx("p",{children:"Message"}),R.jsx("textarea",{name:"message",placeholder:"Write a message",rows:4})]}),R.jsx("div",{className:"contact-submit-container",children:R.jsx("button",{type:"submit",children:"Send"})})]})]})]})}),y_=()=>{const[e,t]=b.useState(!1),n=()=>{t(!e)};return R.jsxs("div",{className:"header-container",children:[R.jsxs("ul",{className:"header-sitemap",children:[R.jsx("li",{children:R.jsx("a",{href:"#mission",children:"Mission"})}),R.jsx("li",{children:R.jsx("a",{href:"#impact",children:"Impact"})}),R.jsx("li",{children:R.jsx("a",{href:"#contact",children:"Contact"})})]}),R.jsxs("div",{className:`sidebar ${e?"Open":""}`,children:[R.jsx("a",{href:"#mission",onClick:n,children:"MISSION"}),R.jsx("a",{href:"#impact",onClick:n,children:"STORY"}),R.jsx("a",{href:"#contact",onClick:n,children:"STATS"}),R.jsx("button",{onClick:n,children:R.jsx("img",{src:"src\\assets\\icons\\close.png",alt:"close"})})]}),R.jsx("button",{className:"header-menu",onClick:n,children:R.jsx("img",{src:"src\\assets\\icons\\menu.png",alt:"menu"})})]})},w_=()=>R.jsxs(R.Fragment,{children:[R.jsx(y_,{}),R.jsx(p_,{}),R.jsx(g_,{}),R.jsx(m_,{}),R.jsx(v_,{})]});var wf={};/**
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
 */const jm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},__=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],u=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,u=a?e[i+1]:0,c=i+2<e.length,h=c?e[i+2]:0,I=s>>2,E=(s&3)<<4|u>>4;let T=(u&15)<<2|h>>6,x=h&63;c||(x=64,a||(T=64)),r.push(n[I],n[E],n[T],n[x])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(jm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):__(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],u=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const E=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||u==null||h==null||E==null)throw new E_;const T=s<<2|u>>4;if(r.push(T),h!==64){const x=u<<4&240|h>>2;if(r.push(x),E!==64){const N=h<<6&192|E;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class E_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I_=function(e){const t=jm(e);return Um.encodeByteArray(t,!0)},Wo=function(e){return I_(e).replace(/\./g,"")},Fm=function(e){try{return Um.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function S_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const T_=()=>S_().__FIREBASE_DEFAULTS__,k_=()=>{if(typeof process>"u"||typeof wf>"u")return;const e=wf.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},C_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fm(e[1]);return t&&JSON.parse(t)},Fc=()=>{try{return T_()||k_()||C_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},bm=e=>{var t,n;return(n=(t=Fc())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},P_=e=>{const t=bm(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},zm=()=>{var e;return(e=Fc())===null||e===void 0?void 0:e.config},Bm=e=>{var t;return(t=Fc())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class R_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function A_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Wo(JSON.stringify(n)),Wo(JSON.stringify(a)),""].join(".")}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function $m(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function x_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function O_(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vm(){try{return typeof indexedDB=="object"}catch{return!1}}function Hm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function L_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const D_="FirebaseError";class yt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=D_,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?M_(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new yt(i,u,r)}}function M_(e,t){return e.replace(j_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const j_=/\{\$([^}]+)}/g;function U_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ns(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(_f(s)&&_f(a)){if(!ns(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _f(e){return e!==null&&typeof e=="object"}/**
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
 */function ds(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ti(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function ki(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function F_(e,t){const n=new b_(e,t);return n.subscribe.bind(n)}class b_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");z_(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Tl),i.error===void 0&&(i.error=Tl),i.complete===void 0&&(i.complete=Tl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function z_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Tl(){}/**
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
 */const B_=1e3,$_=2,V_=4*60*60*1e3,H_=.5;function Ef(e,t=B_,n=$_){const r=t*Math.pow(n,e),i=Math.round(H_*r*(Math.random()-.5)*2);return Math.min(V_,r+i)}/**
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
 */function Rt(e){return e&&e._delegate?e._delegate:e}class mt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Fn="[DEFAULT]";/**
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
 */class W_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new R_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(G_(t))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Fn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Fn){return this.instances.has(t)}getOptions(t=Fn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:K_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Fn){return this.component?this.component.multipleInstances?t:Fn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K_(e){return e===Fn?void 0:e}function G_(e){return e.instantiationMode==="EAGER"}/**
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
 */class q_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new W_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const Y_={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Q_=Y.INFO,X_={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},J_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=X_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wa{constructor(t){this.name=t,this._logLevel=Q_,this._logHandler=J_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Y_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Z_=(e,t)=>t.some(n=>e instanceof n);let If,Sf;function eE(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wm=new WeakMap,xu=new WeakMap,Km=new WeakMap,kl=new WeakMap,bc=new WeakMap;function nE(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Tn(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Wm.set(n,e)}).catch(()=>{}),bc.set(t,e),t}function rE(e){if(xu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});xu.set(e,t)}let Ou={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Km.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iE(e){Ou=e(Ou)}function sE(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cl(this),t,...n);return Km.set(r,t.sort?t.sort():[t]),Tn(r)}:tE().includes(e)?function(...t){return e.apply(Cl(this),t),Tn(Wm.get(this))}:function(...t){return Tn(e.apply(Cl(this),t))}}function oE(e){return typeof e=="function"?sE(e):(e instanceof IDBTransaction&&rE(e),Z_(e,eE())?new Proxy(e,Ou):e)}function Tn(e){if(e instanceof IDBRequest)return nE(e);if(kl.has(e))return kl.get(e);const t=oE(e);return t!==e&&(kl.set(e,t),bc.set(t,e)),t}const Cl=e=>bc.get(e);function Gm(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),u=Tn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Tn(a.result),c.oldVersion,c.newVersion,Tn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const aE=["get","getKey","getAll","getAllKeys","count"],lE=["put","add","delete","clear"],Pl=new Map;function Tf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Pl.get(t))return Pl.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=lE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aE.includes(n)))return;const s=async function(a,...u){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[n](...u),i&&c.done]))[0]};return Pl.set(t,s),s}iE(e=>({...e,get:(t,n,r)=>Tf(t,n)||e.get(t,n,r),has:(t,n)=>!!Tf(t,n)||e.has(t,n)}));/**
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
 */class uE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lu="@firebase/app",kf="0.10.7";/**
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
 */const Qn=new wa("@firebase/app"),dE="@firebase/app-compat",hE="@firebase/analytics-compat",fE="@firebase/analytics",pE="@firebase/app-check-compat",gE="@firebase/app-check",mE="@firebase/auth",vE="@firebase/auth-compat",yE="@firebase/database",wE="@firebase/database-compat",_E="@firebase/functions",EE="@firebase/functions-compat",IE="@firebase/installations",SE="@firebase/installations-compat",TE="@firebase/messaging",kE="@firebase/messaging-compat",CE="@firebase/performance",PE="@firebase/performance-compat",RE="@firebase/remote-config",AE="@firebase/remote-config-compat",NE="@firebase/storage",xE="@firebase/storage-compat",OE="@firebase/firestore",LE="@firebase/vertexai-preview",DE="@firebase/firestore-compat",ME="firebase",jE="10.12.4";/**
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
 */const Du="[DEFAULT]",UE={[Lu]:"fire-core",[dE]:"fire-core-compat",[fE]:"fire-analytics",[hE]:"fire-analytics-compat",[gE]:"fire-app-check",[pE]:"fire-app-check-compat",[mE]:"fire-auth",[vE]:"fire-auth-compat",[yE]:"fire-rtdb",[wE]:"fire-rtdb-compat",[_E]:"fire-fn",[EE]:"fire-fn-compat",[IE]:"fire-iid",[SE]:"fire-iid-compat",[TE]:"fire-fcm",[kE]:"fire-fcm-compat",[CE]:"fire-perf",[PE]:"fire-perf-compat",[RE]:"fire-rc",[AE]:"fire-rc-compat",[NE]:"fire-gcs",[xE]:"fire-gcs-compat",[OE]:"fire-fst",[DE]:"fire-fst-compat",[LE]:"fire-vertex","fire-js":"fire-js",[ME]:"fire-js-all"};/**
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
 */const Ko=new Map,FE=new Map,Mu=new Map;function Cf(e,t){try{e.container.addComponent(t)}catch(n){Qn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Pt(e){const t=e.name;if(Mu.has(t))return Qn.debug(`There were multiple attempts to register component ${t}.`),!1;Mu.set(t,e);for(const n of Ko.values())Cf(n,e);for(const n of FE.values())Cf(n,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function It(e){return e.settings!==void 0}/**
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
 */const bE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new sr("app","Firebase",bE);/**
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
 */class zE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qr=jE;function qm(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Du,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=zm()),!n)throw kn.create("no-options");const s=Ko.get(i);if(s){if(ns(n,s.options)&&ns(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const a=new q_(i);for(const c of Mu.values())a.addComponent(c);const u=new zE(n,r,a);return Ko.set(i,u),u}function zc(e=Du){const t=Ko.get(e);if(!t&&e===Du&&zm())return qm();if(!t)throw kn.create("no-app",{appName:e});return t}function it(e,t,n){var r;let i=(r=UE[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${t}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qn.warn(u.join(" "));return}Pt(new mt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const BE="firebase-heartbeat-database",$E=1,rs="firebase-heartbeat-store";let Rl=null;function Ym(){return Rl||(Rl=Gm(BE,$E,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(rs)}catch(n){console.warn(n)}}}}).catch(e=>{throw kn.create("idb-open",{originalErrorMessage:e.message})})),Rl}async function VE(e){try{const n=(await Ym()).transaction(rs),r=await n.objectStore(rs).get(Qm(e));return await n.done,r}catch(t){if(t instanceof yt)Qn.warn(t.message);else{const n=kn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qn.warn(n.message)}}}async function Pf(e,t){try{const r=(await Ym()).transaction(rs,"readwrite");await r.objectStore(rs).put(t,Qm(e)),await r.done}catch(n){if(n instanceof yt)Qn.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Qm(e){return`${e.name}!${e.options.appId}`}/**
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
 */const HE=1024,WE=30*24*60*60*1e3;class KE{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rf();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=WE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rf(),{heartbeatsToSend:r,unsentEntries:i}=GE(this._heartbeatsCache.heartbeats),s=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Rf(){return new Date().toISOString().substring(0,10)}function GE(e,t=HE){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Af(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Af(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vm()?Hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await VE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Af(e){return Wo(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function YE(e){Pt(new mt("platform-logger",t=>new uE(t),"PRIVATE")),Pt(new mt("heartbeat",t=>new KE(t),"PRIVATE")),it(Lu,kf,e),it(Lu,kf,"esm2017"),it("fire-js","")}YE("");var QE="firebase",XE="10.12.4";/**
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
 */it(QE,XE,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const JE={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Ys(e){return Object.isFrozen(e)&&Object.isFrozen(e.raw)}function Qs(e){return e.toString().indexOf("`")===-1}Qs(e=>e``)||Qs(e=>e`\0`)||Qs(e=>e`\n`)||Qs(e=>e`\u0000`);Ys``&&Ys`\0`&&Ys`\n`&&Ys`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let Xm="google#safe";function ZE(){if(typeof window<"u")return window.trustedTypes}function Jm(){var e;return Xm!==""&&(e=ZE())!==null&&e!==void 0?e:null}let Xs;function eI(){var e,t;if(Xs===void 0)try{Xs=(t=(e=Jm())===null||e===void 0?void 0:e.createPolicy(Xm,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&t!==void 0?t:null}catch{Xs=null}return Xs}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class Zm{constructor(t,n){this.privateDoNotAccessOrElseWrappedResourceUrl=t}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function Nf(e){var t;const n=e,r=(t=eI())===null||t===void 0?void 0:t.createScriptURL(n);return r??new Zm(n,JE)}function tI(e){var t;if(!((t=Jm())===null||t===void 0)&&t.isScriptURL(e))return e;if(e instanceof Zm)return e.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function nI(e,...t){if(t.length===0)return Nf(e[0]);e[0].toLowerCase();let n=e[0];for(let r=0;r<t.length;r++)n+=encodeURIComponent(t[r])+e[r+1];return Nf(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function rI(e){return iI("script",e)}function iI(e,t){var n;const r=t.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${e}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function sI(e){const t=e.ownerDocument&&e.ownerDocument.defaultView,n=rI(t||window);n&&e.setAttribute("nonce",n)}function oI(e,t,n){e.src=tI(t),sI(e)}const ev="@firebase/installations",Bc="0.6.8";/**
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
 */const tv=1e4,nv=`w:${Bc}`,rv="FIS_v2",aI="https://firebaseinstallations.googleapis.com/v1",lI=60*60*1e3,uI="installations",cI="Installations";/**
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
 */const dI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xn=new sr(uI,cI,dI);function iv(e){return e instanceof yt&&e.code.includes("request-failed")}/**
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
 */function sv({projectId:e}){return`${aI}/projects/${e}/installations`}function ov(e){return{token:e.token,requestStatus:2,expiresIn:fI(e.expiresIn),creationTime:Date.now()}}async function av(e,t){const r=(await t.json()).error;return Xn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function lv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function hI(e,{refreshToken:t}){const n=lv(e);return n.append("Authorization",pI(t)),n}async function uv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function fI(e){return Number(e.replace("s","000"))}function pI(e){return`${rv} ${e}`}/**
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
 */async function gI({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sv(e),i=lv(e),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:rv,appId:e.appId,sdkVersion:nv},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await uv(()=>fetch(r,u));if(c.ok){const h=await c.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ov(h.authToken)}}else throw await av("Create Installation",c)}/**
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
 */function cv(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function mI(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const vI=/^[cdef][\w-]{21}$/,ju="";function yI(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=wI(e);return vI.test(n)?n:ju}catch{return ju}}function wI(e){return mI(e).substr(0,22)}/**
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
 */function _a(e){return`${e.appName}!${e.appId}`}/**
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
 */const dv=new Map;function hv(e,t){const n=_a(e);fv(n,t),_I(n,t)}function fv(e,t){const n=dv.get(e);if(n)for(const r of n)r(t)}function _I(e,t){const n=EI();n&&n.postMessage({key:e,fid:t}),II()}let $n=null;function EI(){return!$n&&"BroadcastChannel"in self&&($n=new BroadcastChannel("[Firebase] FID Change"),$n.onmessage=e=>{fv(e.data.key,e.data.fid)}),$n}function II(){dv.size===0&&$n&&($n.close(),$n=null)}/**
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
 */const SI="firebase-installations-database",TI=1,Jn="firebase-installations-store";let Al=null;function $c(){return Al||(Al=Gm(SI,TI,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Jn)}}})),Al}async function Go(e,t){const n=_a(e),i=(await $c()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),a=await s.get(n);return await s.put(t,n),await i.done,(!a||a.fid!==t.fid)&&hv(e,t.fid),t}async function pv(e){const t=_a(e),r=(await $c()).transaction(Jn,"readwrite");await r.objectStore(Jn).delete(t),await r.done}async function Ea(e,t){const n=_a(e),i=(await $c()).transaction(Jn,"readwrite"),s=i.objectStore(Jn),a=await s.get(n),u=t(a);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!a||a.fid!==u.fid)&&hv(e,u.fid),u}/**
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
 */async function Vc(e){let t;const n=await Ea(e.appConfig,r=>{const i=kI(r),s=CI(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===ju?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function kI(e){const t=e||{fid:yI(),registrationStatus:0};return gv(t)}function CI(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xn.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=PI(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:RI(e)}:{installationEntry:t}}async function PI(e,t){try{const n=await gI(e,t);return Go(e.appConfig,n)}catch(n){throw iv(n)&&n.customData.serverCode===409?await pv(e.appConfig):await Go(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function RI(e){let t=await xf(e.appConfig);for(;t.registrationStatus===1;)await cv(100),t=await xf(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vc(e);return r||n}return t}function xf(e){return Ea(e,t=>{if(!t)throw Xn.create("installation-not-found");return gv(t)})}function gv(e){return AI(e)?{fid:e.fid,registrationStatus:0}:e}function AI(e){return e.registrationStatus===1&&e.registrationTime+tv<Date.now()}/**
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
 */async function NI({appConfig:e,heartbeatServiceProvider:t},n){const r=xI(e,n),i=hI(e,n),s=t.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:nv,appId:e.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},c=await uv(()=>fetch(r,u));if(c.ok){const h=await c.json();return ov(h)}else throw await av("Generate Auth Token",c)}function xI(e,{fid:t}){return`${sv(e)}/${t}/authTokens:generate`}/**
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
 */async function Hc(e,t=!1){let n;const r=await Ea(e.appConfig,s=>{if(!mv(s))throw Xn.create("not-registered");const a=s.authToken;if(!t&&DI(a))return s;if(a.requestStatus===1)return n=OI(e,t),s;{if(!navigator.onLine)throw Xn.create("app-offline");const u=jI(s);return n=LI(e,u),u}});return n?await n:r.authToken}async function OI(e,t){let n=await Of(e.appConfig);for(;n.authToken.requestStatus===1;)await cv(100),n=await Of(e.appConfig);const r=n.authToken;return r.requestStatus===0?Hc(e,t):r}function Of(e){return Ea(e,t=>{if(!mv(t))throw Xn.create("not-registered");const n=t.authToken;return UI(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function LI(e,t){try{const n=await NI(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Go(e.appConfig,r),n}catch(n){if(iv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Go(e.appConfig,r)}throw n}}function mv(e){return e!==void 0&&e.registrationStatus===2}function DI(e){return e.requestStatus===2&&!MI(e)}function MI(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+lI}function jI(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function UI(e){return e.requestStatus===1&&e.requestTime+tv<Date.now()}/**
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
 */async function FI(e){const t=e,{installationEntry:n,registrationPromise:r}=await Vc(t);return r?r.catch(console.error):Hc(t).catch(console.error),n.fid}/**
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
 */async function bI(e,t=!1){const n=e;return await zI(n),(await Hc(n,t)).token}async function zI(e){const{registrationPromise:t}=await Vc(e);t&&await t}/**
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
 */function BI(e){if(!e||!e.options)throw Nl("App Configuration");if(!e.name)throw Nl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Nl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Nl(e){return Xn.create("missing-app-config-values",{valueName:e})}/**
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
 */const vv="installations",$I="installations-internal",VI=e=>{const t=e.getProvider("app").getImmediate(),n=BI(t),r=or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HI=e=>{const t=e.getProvider("app").getImmediate(),n=or(t,vv).getImmediate();return{getId:()=>FI(n),getToken:i=>bI(n,i)}};function WI(){Pt(new mt(vv,VI,"PUBLIC")),Pt(new mt($I,HI,"PRIVATE"))}WI();it(ev,Bc);it(ev,Bc,"esm2017");/**
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
 */const qo="analytics",KI="firebase_id",GI="origin",qI=60*1e3,YI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",QI="https://www.googletagmanager.com/gtag/js";/**
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
 */const qe=new wa("@firebase/analytics");/**
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
 */function yv(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function XI(e,t){const n=document.createElement("script"),r=nI`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`;oI(n,r),n.async=!0,document.head.appendChild(n)}function JI(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function ZI(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const c=(await yv(n)).find(h=>h.measurementId===i);c&&await t[c.appId]}}catch(u){qe.error(u)}e("config",i,s)}async function eS(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await yv(n);for(const c of a){const h=u.find(E=>E.measurementId===c),I=h&&t[h.appId];if(I)s.push(I);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){qe.error(s)}}function tS(e,t,n,r){async function i(s,...a){try{if(s==="event"){const[u,c]=a;await eS(e,t,n,u,c)}else if(s==="config"){const[u,c]=a;await ZI(e,t,n,r,u,c)}else if(s==="consent"){const[u,c]=a;e("consent",u,c)}else if(s==="get"){const[u,c,h]=a;e("get",u,c,h)}else if(s==="set"){const[u]=a;e("set",u)}else e(s,...a)}catch(u){qe.error(u)}}return i}function nS(e,t,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=tS(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function rS(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(QI)&&n.src.includes(e))return n;return null}/**
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
 */const iS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},st=new sr("analytics","Analytics",iS);/**
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
 */const sS=30,oS=1e3;class aS{constructor(t={},n=oS){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const wv=new aS;function lS(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function uS(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:lS(r)},s=YI.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let u="";try{const c=await a.json();!((t=c.error)===null||t===void 0)&&t.message&&(u=c.error.message)}catch{}throw st.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function cS(e,t=wv,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw st.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw st.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new fS;return setTimeout(async()=>{u.abort()},qI),_v({appId:r,apiKey:i,measurementId:s},a,u,t)}async function _v(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=wv){var s;const{appId:a,measurementId:u}=e;try{await dS(r,t)}catch(c){if(u)return qe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:a,measurementId:u};throw c}try{const c=await uS(e);return i.deleteThrottleMetadata(a),c}catch(c){const h=c;if(!hS(h)){if(i.deleteThrottleMetadata(a),u)return qe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw c}const I=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ef(n,i.intervalMillis,sS):Ef(n,i.intervalMillis),E={throttleEndTimeMillis:Date.now()+I,backoffCount:n+1};return i.setThrottleMetadata(a,E),qe.debug(`Calling attemptFetch again in ${I} millis`),_v(e,E,r,i)}}function dS(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(st.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function hS(e){if(!(e instanceof yt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class fS{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function pS(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,a=Object.assign(Object.assign({},r),{send_to:s});e("event",n,a)}}/**
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
 */async function gS(){if(Vm())try{await Hm()}catch(e){return qe.warn(st.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return qe.warn(st.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function mS(e,t,n,r,i,s,a){var u;const c=cS(e);c.then(x=>{n[x.measurementId]=x.appId,e.options.measurementId&&x.measurementId!==e.options.measurementId&&qe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>qe.error(x)),t.push(c);const h=gS().then(x=>{if(x)return r.getId()}),[I,E]=await Promise.all([c,h]);rS(s)||XI(s,I.measurementId),i("js",new Date);const T=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return T[GI]="firebase",T.update=!0,E!=null&&(T[KI]=E),i("config",I.measurementId,T),I.measurementId}/**
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
 */class vS{constructor(t){this.app=t}_delete(){return delete Mi[this.app.options.appId],Promise.resolve()}}let Mi={},Lf=[];const Df={};let xl="dataLayer",yS="gtag",Mf,Ev,jf=!1;function wS(){const e=[];if($m()&&e.push("This is a browser extension environment."),L_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=st.create("invalid-analytics-context",{errorInfo:t});qe.warn(n.message)}}function _S(e,t,n){wS();const r=e.options.appId;if(!r)throw st.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)qe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw st.create("no-api-key");if(Mi[r]!=null)throw st.create("already-exists",{id:r});if(!jf){JI(xl);const{wrappedGtag:s,gtagCore:a}=nS(Mi,Lf,Df,xl,yS);Ev=s,Mf=a,jf=!0}return Mi[r]=mS(e,Lf,Df,t,Mf,xl,n),new vS(e)}function ES(e=zc()){e=Rt(e);const t=or(e,qo);return t.isInitialized()?t.getImmediate():IS(e)}function IS(e,t={}){const n=or(e,qo);if(n.isInitialized()){const i=n.getImmediate();if(ns(t,n.getOptions()))return i;throw st.create("already-initialized")}return n.initialize({options:t})}function SS(e,t,n,r){e=Rt(e),pS(Ev,Mi[e.app.options.appId],t,n,r).catch(i=>qe.error(i))}const Uf="@firebase/analytics",Ff="0.10.6";function TS(){Pt(new mt(qo,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return _S(r,i,n)},"PUBLIC")),Pt(new mt("analytics-internal",e,"PRIVATE")),it(Uf,Ff),it(Uf,Ff,"esm2017");function e(t){try{const n=t.getProvider(qo).getImmediate();return{logEvent:(r,i,s)=>SS(n,r,i,s)}}catch(n){throw st.create("interop-component-reg-failed",{reason:n})}}}TS();function Wc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Iv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kS=Iv,Sv=new sr("auth","Firebase",Iv());/**
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
 */const Yo=new wa("@firebase/auth");function CS(e,...t){Yo.logLevel<=Y.WARN&&Yo.warn(`Auth (${Qr}): ${e}`,...t)}function go(e,...t){Yo.logLevel<=Y.ERROR&&Yo.error(`Auth (${Qr}): ${e}`,...t)}/**
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
 */function vt(e,...t){throw Kc(e,...t)}function kt(e,...t){return Kc(e,...t)}function Tv(e,t,n){const r=Object.assign(Object.assign({},kS()),{[t]:n});return new sr("auth","Firebase",r).create(t,{appName:e.name})}function Ht(e){return Tv(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kc(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Sv.create(e,...t)}function $(e,t,...n){if(!e)throw Kc(t,...n)}function zt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw go(t),new Error(t)}function Yt(e,t){e||zt(t)}/**
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
 */function Uu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function PS(){return bf()==="http:"||bf()==="https:"}function bf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function RS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PS()||$m()||"connection"in navigator)?navigator.onLine:!0}function AS(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class hs{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yt(n>t,"Short delay should be less than long delay!"),this.isMobile=N_()||x_()}get(){return RS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gc(e,t){Yt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class kv{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xS=new hs(3e4,6e4);function xn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xt(e,t,n,r,i={}){return Cv(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const u=ds(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),kv.fetch()(Pv(e,e.config.apiHost,n,u),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Cv(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},NS),t);try{const i=new LS(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Js(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[c,h]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Js(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Js(e,"user-disabled",a);const I=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Tv(e,I,h);vt(e,I)}}catch(i){if(i instanceof yt)throw i;vt(e,"network-request-failed",{message:String(i)})}}async function fs(e,t,n,r,i={}){const s=await Xt(e,t,n,r,i);return"mfaPendingCredential"in s&&vt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Pv(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gc(e.config,i):`${e.config.apiScheme}://${i}`}function OS(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LS{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),xS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Js(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(e,t,r);return i.customData._tokenResponse=n,i}function zf(e){return e!==void 0&&e.enterprise!==void 0}class DS{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return OS(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function MS(e,t){return Xt(e,"GET","/v2/recaptchaConfig",xn(e,t))}/**
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
 */async function jS(e,t){return Xt(e,"POST","/v1/accounts:delete",t)}async function Rv(e,t){return Xt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ji(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function US(e,t=!1){const n=Rt(e),r=await n.getIdToken(t),i=qc(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ji(Ol(i.auth_time)),issuedAtTime:ji(Ol(i.iat)),expirationTime:ji(Ol(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ol(e){return Number(e)*1e3}function qc(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fm(n);return i?JSON.parse(i):(go("Failed to decode base64 JWT payload"),null)}catch(i){return go("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Bf(e){const t=qc(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Hr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof yt&&FS(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function FS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class bS{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Hr(e,Rv(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Av(s.providerUserInfo):[],u=BS(e.providerData,a),c=e.isAnonymous,h=!(e.email&&s.passwordHash)&&!(u!=null&&u.length),I=c?h:!1,E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Fu(s.createdAt,s.lastLoginAt),isAnonymous:I};Object.assign(e,E)}async function zS(e){const t=Rt(e);await Qo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function BS(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Av(e){return e.map(t=>{var{providerId:n}=t,r=Wc(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $S(e,t){const n=await Cv(e,{},async()=>{const r=ds({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Pv(e,i,"/v1/token",`key=${s}`),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",kv.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VS(e,t){return Xt(e,"POST","/v2/accounts:revokeToken",xn(e,t))}/**
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
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Bf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){$(t.length!==0,"internal-error");const n=Bf(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $S(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Lr;return r&&($(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function nn(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Bt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Wc(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Hr(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return US(this,t)}reload(){return zS(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(Ht(this.auth));const t=await this.getIdToken();return await Hr(this,jS(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,u,c,h,I;const E=(r=n.displayName)!==null&&r!==void 0?r:void 0,T=(i=n.email)!==null&&i!==void 0?i:void 0,x=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(u=n.tenantId)!==null&&u!==void 0?u:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(h=n.createdAt)!==null&&h!==void 0?h:void 0,m=(I=n.lastLoginAt)!==null&&I!==void 0?I:void 0,{uid:S,emailVerified:O,isAnonymous:j,providerData:F,stsTokenManager:y}=n;$(S&&y,t,"internal-error");const p=Lr.fromJSON(this.name,y);$(typeof S=="string",t,"internal-error"),nn(E,t.name),nn(T,t.name),$(typeof O=="boolean",t,"internal-error"),$(typeof j=="boolean",t,"internal-error"),nn(x,t.name),nn(N,t.name),nn(L,t.name),nn(D,t.name),nn(v,t.name),nn(m,t.name);const g=new Bt({uid:S,auth:t,email:T,emailVerified:O,displayName:E,isAnonymous:j,photoURL:N,phoneNumber:x,tenantId:L,stsTokenManager:p,createdAt:v,lastLoginAt:m});return F&&Array.isArray(F)&&(g.providerData=F.map(_=>Object.assign({},_))),D&&(g._redirectEventId=D),g}static async _fromIdTokenResponse(t,n,r=!1){const i=new Lr;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Qo(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Av(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Lr;u.updateFromIdToken(r);const c=new Bt({uid:i.localId,auth:t,stsTokenManager:u,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
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
 */const $f=new Map;function $t(e){Yt(e instanceof Function,"Expected a class definition");let t=$f.get(e);return t?(Yt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,$f.set(e,t),t)}/**
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
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Nv.type="NONE";const Vf=Nv;/**
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
 */function mo(e,t,n){return`firebase:${e}:${t}:${n}`}class Dr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mo(this.userKey,i.apiKey,s),this.fullPersistenceKey=mo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Bt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Dr($t(Vf),t,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||$t(Vf);const a=mo(r,t.config.apiKey,t.name);let u=null;for(const h of n)try{const I=await h._get(a);if(I){const E=Bt._fromJSON(t,I);h!==s&&(u=E),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Dr(s,t,r):(s=c[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Dr(s,t,r))}}/**
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
 */function Hf(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lv(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(xv(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Mv(t))return"Blackberry";if(jv(t))return"Webos";if(Yc(t))return"Safari";if((t.includes("chrome/")||Ov(t))&&!t.includes("edge/"))return"Chrome";if(Dv(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xv(e=Oe()){return/firefox\//i.test(e)}function Yc(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ov(e=Oe()){return/crios\//i.test(e)}function Lv(e=Oe()){return/iemobile/i.test(e)}function Dv(e=Oe()){return/android/i.test(e)}function Mv(e=Oe()){return/blackberry/i.test(e)}function jv(e=Oe()){return/webos/i.test(e)}function Ia(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function HS(e=Oe()){var t;return Ia(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function WS(){return O_()&&document.documentMode===10}function Uv(e=Oe()){return Ia(e)||Dv(e)||jv(e)||Mv(e)||/windows phone/i.test(e)||Lv(e)}function KS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Fv(e,t=[]){let n;switch(e){case"Browser":n=Hf(Oe());break;case"Worker":n=`${Hf(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
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
 */class GS{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,u)=>{try{const c=t(s);a(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qS(e,t={}){return Xt(e,"GET","/v2/passwordPolicy",xn(e,t))}/**
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
 */const YS=6;class QS{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:YS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class XS{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wf(this),this.idTokenSubscription=new Wf(this),this.beforeStateQueue=new GS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=$t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Rv(this,{idToken:t}),r=await Bt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Qo(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=AS()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(It(this.app))return Promise.reject(Ht(this));const n=t?Rt(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(Ht(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return It(this.app)?Promise.reject(Ht(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await qS(this),n=new QS(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new sr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VS(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&$t(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[$t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if($(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&CS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ar(e){return Rt(e)}class Wf{constructor(t){this.auth=t,this.observer=null,this.addObserver=F_(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JS(e){Sa=e}function bv(e){return Sa.loadJS(e)}function ZS(){return Sa.recaptchaEnterpriseScript}function eT(){return Sa.gapiScript}function tT(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const nT="recaptcha-enterprise",rT="NO_RECAPTCHA";class iT{constructor(t){this.type=nT,this.auth=ar(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{MS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new DS(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{u(c)})})}function i(s,a,u){const c=window.grecaptcha;zf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(h=>{a(h)}).catch(()=>{a(rT)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(u=>{if(!n&&zf(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ZS();c.length!==0&&(c+=u),bv(c).then(()=>{i(u,s,a)}).catch(h=>{a(h)})}}).catch(u=>{a(u)})})}}async function Kf(e,t,n,r=!1){const i=new iT(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function bu(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kf(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Kf(e,t,n,n==="getOobCode");return r(e,a)}else return Promise.reject(s)})}/**
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
 */function sT(e,t){const n=or(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ns(s,t??{}))return i;vt(i,"already-initialized")}return n.initialize({options:t})}function oT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map($t);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function aT(e,t,n){const r=ar(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,s=zv(t),{host:a,port:u}=lT(t),c=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),uT()}function zv(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function lT(e){const t=zv(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gf(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Gf(a)}}}function Gf(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function uT(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Qc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,n){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}async function cT(e,t){return Xt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function dT(e,t){return fs(e,"POST","/v1/accounts:signInWithPassword",xn(e,t))}/**
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
 */async function hT(e,t){return fs(e,"POST","/v1/accounts:signInWithEmailLink",xn(e,t))}async function fT(e,t){return fs(e,"POST","/v1/accounts:signInWithEmailLink",xn(e,t))}/**
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
 */class is extends Qc{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new is(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new is(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(t,n,"signInWithPassword",dT);case"emailLink":return hT(t,{email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(t,r,"signUpPassword",cT);case"emailLink":return fT(t,{idToken:n,email:this._email,oobCode:this._password});default:vt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Mr(e,t){return fs(e,"POST","/v1/accounts:signInWithIdp",xn(e,t))}/**
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
 */const pT="http://localhost";class Zn extends Qc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Zn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Wc(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Zn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Mr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Mr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Mr(t,n)}buildRequest(){const t={requestUri:pT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ds(n)}return t}}/**
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
 */function gT(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mT(e){const t=Ti(ki(e)).link,n=t?Ti(ki(t)).deep_link_id:null,r=Ti(ki(e)).deep_link_id;return(r?Ti(ki(r)).link:null)||r||n||t||e}class Xc{constructor(t){var n,r,i,s,a,u;const c=Ti(ki(t)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,I=(r=c.oobCode)!==null&&r!==void 0?r:null,E=gT((i=c.mode)!==null&&i!==void 0?i:null);$(h&&I&&E,"argument-error"),this.apiKey=h,this.operation=E,this.code=I,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(t){const n=mT(t);try{return new Xc(n)}catch{return null}}}/**
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
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(t,n){return is._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Xc.parseLink(n);return $(r,"argument-error"),is._fromEmailAndCode(t,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bv{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ps extends Bv{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ln extends ps{constructor(){super("facebook.com")}static credential(t){return Zn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ln.credentialFromTaggedObject(t)}static credentialFromError(t){return ln.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ln.credential(t.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
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
 */class un extends ps{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Zn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class cn extends ps{constructor(){super("github.com")}static credential(t){return Zn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
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
 */class dn extends ps{constructor(){super("twitter.com")}static credential(t,n){return Zn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function vT(e,t){return fs(e,"POST","/v1/accounts:signUp",xn(e,t))}/**
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
 */class er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Bt._fromIdTokenResponse(t,r,i),a=qf(r);return new er({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=qf(r);return new er({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function qf(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Xo extends yt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xo.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Xo(t,n,r,i)}}function $v(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xo._fromErrorAndOperation(e,s,t,r):s})}async function yT(e,t,n=!1){const r=await Hr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return er._forOperation(e,"link",r)}/**
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
 */async function wT(e,t,n=!1){const{auth:r}=e;if(It(r.app))return Promise.reject(Ht(r));const i="reauthenticate";try{const s=await Hr(e,$v(r,i,t,e),n);$(s.idToken,r,"internal-error");const a=qc(s.idToken);$(a,r,"internal-error");const{sub:u}=a;return $(e.uid===u,r,"user-mismatch"),er._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vt(r,"user-mismatch"),s}}/**
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
 */async function Vv(e,t,n=!1){if(It(e.app))return Promise.reject(Ht(e));const r="signIn",i=await $v(e,r,t),s=await er._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function _T(e,t){return Vv(ar(e),t)}/**
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
 */async function Hv(e){const t=ar(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ET(e,t,n){if(It(e.app))return Promise.reject(Ht(e));const r=ar(e),a=await bu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Hv(e),c}),u=await er._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function IT(e,t,n){return It(e.app)?Promise.reject(Ht(e)):_T(Rt(e),Xr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Hv(e),r})}/**
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
 */async function ST(e,t){return Xt(e,"POST","/v1/accounts:update",t)}/**
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
 */async function TT(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Rt(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Hr(r,ST(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find(({providerId:c})=>c==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function kT(e,t,n,r){return Rt(e).onIdTokenChanged(t,n,r)}function CT(e,t,n){return Rt(e).beforeAuthStateChanged(t,n)}const Jo="__sak";/**
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
 */class Wv{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jo,"1"),this.storage.removeItem(Jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function PT(){const e=Oe();return Yc(e)||Ia(e)}const RT=1e3,AT=10;class Kv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=PT()&&KS(),this.fallbackToPolling=Uv(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,u,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);WS()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,AT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},RT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Kv.type="LOCAL";const NT=Kv;/**
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
 */class Gv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Gv.type="SESSION";const qv=Gv;/**
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
 */function xT(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ta{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ta(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async h=>h(n.origin,s)),c=await xT(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
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
 */function Jc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class OT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,c)=>{const h=Jc("",20);i.port1.start();const I=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){const T=E;if(T.data.eventId===h)switch(T.data.status){case"ack":clearTimeout(I),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(T.data.response);break;default:clearTimeout(I),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ct(){return window}function LT(e){Ct().location.href=e}/**
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
 */function Yv(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function DT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function jT(){return Yv()?self:null}/**
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
 */const Qv="firebaseLocalStorageDb",UT=1,Zo="firebaseLocalStorage",Xv="fbase_key";class gs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(e,t){return e.transaction([Zo],t?"readwrite":"readonly").objectStore(Zo)}function FT(){const e=indexedDB.deleteDatabase(Qv);return new gs(e).toPromise()}function zu(){const e=indexedDB.open(Qv,UT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Zo,{keyPath:Xv})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Zo)?t(r):(r.close(),await FT(),t(await zu()))})})}async function Yf(e,t,n){const r=ka(e,!0).put({[Xv]:t,value:n});return new gs(r).toPromise()}async function bT(e,t){const n=ka(e,!1).get(t),r=await new gs(n).toPromise();return r===void 0?null:r.value}function Qf(e,t){const n=ka(e,!0).delete(t);return new gs(n).toPromise()}const zT=800,BT=3;class Jv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zu(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>BT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(jT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await DT(),!this.activeServiceWorker)return;this.sender=new OT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||MT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await zu();return await Yf(t,Jo,"1"),await Qf(t,Jo),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>bT(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ka(i,!1).getAll();return new gs(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jv.type="LOCAL";const $T=Jv;new hs(3e4,6e4);/**
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
 */function VT(e,t){return t?$t(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Zc extends Qc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Mr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Mr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function HT(e){return Vv(e.auth,new Zc(e),e.bypassAuthState)}function WT(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),wT(n,new Zc(e),e.bypassAuthState)}async function KT(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),yT(n,new Zc(e),e.bypassAuthState)}/**
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
 */class Zv{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return HT;case"linkViaPopup":case"linkViaRedirect":return KT;case"reauthViaPopup":case"reauthViaRedirect":return WT;default:vt(this.auth,"internal-error")}}resolve(t){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GT=new hs(2e3,1e4);class Cr extends Zv{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Cr.currentPopupAction&&Cr.currentPopupAction.cancel(),Cr.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const t=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cr.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,GT.get())};t()}}Cr.currentPopupAction=null;/**
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
 */const qT="pendingRedirect",vo=new Map;class YT extends Zv{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=vo.get(this.auth._key());if(!t){try{const r=await QT(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}vo.set(this.auth._key(),t)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QT(e,t){const n=ZT(t),r=JT(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function XT(e,t){vo.set(e._key(),t)}function JT(e){return $t(e._redirectPersistence)}function ZT(e){return mo(qT,e.config.apiKey,e.name)}async function ek(e,t,n=!1){if(It(e.app))return Promise.reject(Ht(e));const r=ar(e),i=VT(r,t),a=await new YT(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const tk=10*60*1e3;class nk{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!rk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!ey(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tk&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xf(t))}saveEventToCache(t){this.cachedEventUids.add(Xf(t)),this.lastProcessedEventTime=Date.now()}}function Xf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function ey({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function rk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ey(e);default:return!1}}/**
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
 */async function ik(e,t={}){return Xt(e,"GET","/v1/projects",t)}/**
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
 */const sk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ok=/^https?/;async function ak(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ik(e);for(const n of t)try{if(lk(n))return}catch{}vt(e,"unauthorized-domain")}function lk(e){const t=Uu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!ok.test(n))return!1;if(sk.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const uk=new hs(3e4,6e4);function Jf(){const e=Ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function ck(e){return new Promise((t,n)=>{var r,i,s;function a(){Jf(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Jf(),n(kt(e,"network-request-failed"))},timeout:uk.get()})}if(!((i=(r=Ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ct().gapi)===null||s===void 0)&&s.load)a();else{const u=tT("iframefcb");return Ct()[u]=()=>{gapi.load?a():n(kt(e,"network-request-failed"))},bv(`${eT()}?onload=${u}`).catch(c=>n(c))}}).catch(t=>{throw yo=null,t})}let yo=null;function dk(e){return yo=yo||ck(e),yo}/**
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
 */const hk=new hs(5e3,15e3),fk="__/auth/iframe",pk="emulator/auth/iframe",gk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vk(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gc(t,pk):`https://${e.config.authDomain}/${fk}`,r={apiKey:t.apiKey,appName:e.name,v:Qr},i=mk.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ds(r).slice(1)}`}async function yk(e){const t=await dk(e),n=Ct().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:vk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=kt(e,"network-request-failed"),u=Ct().setTimeout(()=>{s(a)},hk.get());function c(){Ct().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const wk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_k=500,Ek=600,Ik="_blank",Sk="http://localhost";class Zf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tk(e,t,n,r=_k,i=Ek){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},wk),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Oe().toLowerCase();n&&(u=Ov(h)?Ik:n),xv(h)&&(t=t||Sk,c.scrollbars="yes");const I=Object.entries(c).reduce((T,[x,N])=>`${T}${x}=${N},`,"");if(HS(h)&&u!=="_self")return kk(t||"",u),new Zf(null);const E=window.open(t||"",u,I);$(E,e,"popup-blocked");try{E.focus()}catch{}return new Zf(E)}function kk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Ck="__/auth/handler",Pk="emulator/auth/handler",Rk=encodeURIComponent("fac");async function ep(e,t,n,r,i,s){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Qr,eventId:i};if(t instanceof Bv){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",U_(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[I,E]of Object.entries({}))a[I]=E}if(t instanceof ps){const I=t.getScopes().filter(E=>E!=="");I.length>0&&(a.scopes=I.join(","))}e.tenantId&&(a.tid=e.tenantId);const u=a;for(const I of Object.keys(u))u[I]===void 0&&delete u[I];const c=await e._getAppCheckToken(),h=c?`#${Rk}=${encodeURIComponent(c)}`:"";return`${Ak(e)}?${ds(u).slice(1)}${h}`}function Ak({config:e}){return e.emulator?Gc(e,Pk):`https://${e.authDomain}/${Ck}`}/**
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
 */const Ll="webStorageSupport";class Nk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qv,this._completeRedirectFn=ek,this._overrideRedirectResult=XT}async _openPopup(t,n,r,i){var s;Yt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ep(t,n,r,Uu(),i);return Tk(t,a,Jc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ep(t,n,r,Uu(),i);return LT(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await yk(t),r=new nk(t);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ll,{type:Ll},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ll];a!==void 0&&n(!!a),vt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ak(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uv()||Yc()||Ia()}}const xk=Nk;var tp="@firebase/auth",np="1.7.5";/**
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
 */class Ok{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dk(e){Pt(new mt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:u,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fv(e)},h=new XS(r,i,s,c);return oT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Pt(new mt("auth-internal",t=>{const n=ar(t.getProvider("auth").getImmediate());return(r=>new Ok(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(tp,np,Lk(e)),it(tp,np,"esm2017")}/**
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
 */const Mk=5*60,jk=Bm("authIdTokenMaxAge")||Mk;let rp=null;const Uk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>jk)return;const i=n==null?void 0:n.token;rp!==i&&(rp=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fk(e=zc()){const t=or(e,"auth");if(t.isInitialized())return t.getImmediate();const n=sT(e,{popupRedirectResolver:xk,persistence:[$T,NT,qv]}),r=Bm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Uk(s.toString());CT(n,a,()=>a(n.currentUser)),kT(n,u=>a(u))}}const i=bm("auth");return i&&aT(n,`http://${i}`),n}function bk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}JS({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dk("Browser");var ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ty;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,p){function g(){}g.prototype=p.prototype,y.D=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.C=function(_,k,P){for(var w=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)w[Je-2]=arguments[Je];return p.prototype[k].apply(_,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);var _=Array(16);if(typeof p=="string")for(var k=0;16>k;++k)_[k]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(k=0;16>k;++k)_[k]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],k=y.g[2];var P=y.g[3],w=p+(P^g&(k^P))+_[0]+3614090360&4294967295;p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+_[1]+3905402710&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+_[2]+606105819&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+_[3]+3250441966&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(P^g&(k^P))+_[4]+4118548399&4294967295,p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+_[5]+1200080426&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+_[6]+2821735955&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+_[7]+4249261313&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(P^g&(k^P))+_[8]+1770035416&4294967295,p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+_[9]+2336552879&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+_[10]+4294925233&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+_[11]+2304563134&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(P^g&(k^P))+_[12]+1804603682&4294967295,p=g+(w<<7&4294967295|w>>>25),w=P+(k^p&(g^k))+_[13]+4254626195&4294967295,P=p+(w<<12&4294967295|w>>>20),w=k+(g^P&(p^g))+_[14]+2792965006&4294967295,k=P+(w<<17&4294967295|w>>>15),w=g+(p^k&(P^p))+_[15]+1236535329&4294967295,g=k+(w<<22&4294967295|w>>>10),w=p+(k^P&(g^k))+_[1]+4129170786&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+_[6]+3225465664&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+_[11]+643717713&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+_[0]+3921069994&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(k^P&(g^k))+_[5]+3593408605&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+_[10]+38016083&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+_[15]+3634488961&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+_[4]+3889429448&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(k^P&(g^k))+_[9]+568446438&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+_[14]+3275163606&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+_[3]+4107603335&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+_[8]+1163531501&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(k^P&(g^k))+_[13]+2850285829&4294967295,p=g+(w<<5&4294967295|w>>>27),w=P+(g^k&(p^g))+_[2]+4243563512&4294967295,P=p+(w<<9&4294967295|w>>>23),w=k+(p^g&(P^p))+_[7]+1735328473&4294967295,k=P+(w<<14&4294967295|w>>>18),w=g+(P^p&(k^P))+_[12]+2368359562&4294967295,g=k+(w<<20&4294967295|w>>>12),w=p+(g^k^P)+_[5]+4294588738&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+_[8]+2272392833&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+_[11]+1839030562&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+_[14]+4259657740&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(g^k^P)+_[1]+2763975236&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+_[4]+1272893353&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+_[7]+4139469664&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+_[10]+3200236656&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(g^k^P)+_[13]+681279174&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+_[0]+3936430074&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+_[3]+3572445317&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+_[6]+76029189&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(g^k^P)+_[9]+3654602809&4294967295,p=g+(w<<4&4294967295|w>>>28),w=P+(p^g^k)+_[12]+3873151461&4294967295,P=p+(w<<11&4294967295|w>>>21),w=k+(P^p^g)+_[15]+530742520&4294967295,k=P+(w<<16&4294967295|w>>>16),w=g+(k^P^p)+_[2]+3299628645&4294967295,g=k+(w<<23&4294967295|w>>>9),w=p+(k^(g|~P))+_[0]+4096336452&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+_[7]+1126891415&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+_[14]+2878612391&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+_[5]+4237533241&4294967295,g=k+(w<<21&4294967295|w>>>11),w=p+(k^(g|~P))+_[12]+1700485571&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+_[3]+2399980690&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+_[10]+4293915773&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+_[1]+2240044497&4294967295,g=k+(w<<21&4294967295|w>>>11),w=p+(k^(g|~P))+_[8]+1873313359&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+_[15]+4264355552&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+_[6]+2734768916&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+_[13]+1309151649&4294967295,g=k+(w<<21&4294967295|w>>>11),w=p+(k^(g|~P))+_[4]+4149444226&4294967295,p=g+(w<<6&4294967295|w>>>26),w=P+(g^(p|~k))+_[11]+3174756917&4294967295,P=p+(w<<10&4294967295|w>>>22),w=k+(p^(P|~g))+_[2]+718787259&4294967295,k=P+(w<<15&4294967295|w>>>17),w=g+(P^(k|~p))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(k+(w<<21&4294967295|w>>>11))&4294967295,y.g[2]=y.g[2]+k&4294967295,y.g[3]=y.g[3]+P&4294967295}r.prototype.u=function(y,p){p===void 0&&(p=y.length);for(var g=p-this.blockSize,_=this.B,k=this.h,P=0;P<p;){if(k==0)for(;P<=g;)i(this,y,P),P+=this.blockSize;if(typeof y=="string"){for(;P<p;)if(_[k++]=y.charCodeAt(P++),k==this.blockSize){i(this,_),k=0;break}}else for(;P<p;)if(_[k++]=y[P++],k==this.blockSize){i(this,_),k=0;break}}this.h=k,this.o+=p},r.prototype.v=function(){var y=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;var g=8*this.o;for(p=y.length-8;p<y.length;++p)y[p]=g&255,g/=256;for(this.u(y),y=Array(16),p=g=0;4>p;++p)for(var _=0;32>_;_+=8)y[g++]=this.g[p]>>>_&255;return y};function s(y,p){var g=u;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function a(y,p){this.h=p;for(var g=[],_=!0,k=y.length-1;0<=k;k--){var P=y[k]|0;_&&P==p||(g[k]=P,_=!1)}this.g=g}var u={};function c(y){return-128<=y&&128>y?s(y,function(p){return new a([p|0],0>p?-1:0)}):new a([y|0],0>y?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return E;if(0>y)return D(h(-y));for(var p=[],g=1,_=0;y>=g;_++)p[_]=y/g|0,g*=4294967296;return new a(p,0)}function I(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return D(I(y.substring(1),p));if(0<=y.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(p,8)),_=E,k=0;k<y.length;k+=8){var P=Math.min(8,y.length-k),w=parseInt(y.substring(k,k+P),p);8>P?(P=h(Math.pow(p,P)),_=_.j(P).add(h(w))):(_=_.j(g),_=_.add(h(w)))}return _}var E=c(0),T=c(1),x=c(16777216);e=a.prototype,e.m=function(){if(L(this))return-D(this).m();for(var y=0,p=1,g=0;g<this.g.length;g++){var _=this.i(g);y+=(0<=_?_:4294967296+_)*p,p*=4294967296}return y},e.toString=function(y){if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(L(this))return"-"+D(this).toString(y);for(var p=h(Math.pow(y,6)),g=this,_="";;){var k=O(g,p).g;g=v(g,k.j(p));var P=((0<g.g.length?g.g[0]:g.h)>>>0).toString(y);if(g=k,N(g))return P+_;for(;6>P.length;)P="0"+P;_=P+_}},e.i=function(y){return 0>y?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(var p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function L(y){return y.h==-1}e.l=function(y){return y=v(this,y),L(y)?-1:N(y)?0:1};function D(y){for(var p=y.g.length,g=[],_=0;_<p;_++)g[_]=~y.g[_];return new a(g,~y.h).add(T)}e.abs=function(){return L(this)?D(this):this},e.add=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0,k=0;k<=p;k++){var P=_+(this.i(k)&65535)+(y.i(k)&65535),w=(P>>>16)+(this.i(k)>>>16)+(y.i(k)>>>16);_=w>>>16,P&=65535,w&=65535,g[k]=w<<16|P}return new a(g,g[g.length-1]&-2147483648?-1:0)};function v(y,p){return y.add(D(p))}e.j=function(y){if(N(this)||N(y))return E;if(L(this))return L(y)?D(this).j(D(y)):D(D(this).j(y));if(L(y))return D(this.j(D(y)));if(0>this.l(x)&&0>y.l(x))return h(this.m()*y.m());for(var p=this.g.length+y.g.length,g=[],_=0;_<2*p;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var k=0;k<y.g.length;k++){var P=this.i(_)>>>16,w=this.i(_)&65535,Je=y.i(k)>>>16,On=y.i(k)&65535;g[2*_+2*k]+=w*On,m(g,2*_+2*k),g[2*_+2*k+1]+=P*On,m(g,2*_+2*k+1),g[2*_+2*k+1]+=w*Je,m(g,2*_+2*k+1),g[2*_+2*k+2]+=P*Je,m(g,2*_+2*k+2)}for(_=0;_<p;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=p;_<2*p;_++)g[_]=0;return new a(g,0)};function m(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function S(y,p){this.g=y,this.h=p}function O(y,p){if(N(p))throw Error("division by zero");if(N(y))return new S(E,E);if(L(y))return p=O(D(y),p),new S(D(p.g),D(p.h));if(L(p))return p=O(y,D(p)),new S(D(p.g),p.h);if(30<y.g.length){if(L(y)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var g=T,_=p;0>=_.l(y);)g=j(g),_=j(_);var k=F(g,1),P=F(_,1);for(_=F(_,2),g=F(g,2);!N(_);){var w=P.add(_);0>=w.l(y)&&(k=k.add(g),P=w),_=F(_,1),g=F(g,1)}return p=v(y,k.j(p)),new S(k,p)}for(k=E;0<=y.l(p);){for(g=Math.max(1,Math.floor(y.m()/p.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),P=h(g),w=P.j(p);L(w)||0<w.l(y);)g-=_,P=h(g),w=P.j(p);N(P)&&(P=T),k=k.add(P),y=v(y,w)}return new S(k,y)}e.A=function(y){return O(this,y).h},e.and=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)&y.i(_);return new a(g,this.h&y.h)},e.or=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)|y.i(_);return new a(g,this.h|y.h)},e.xor=function(y){for(var p=Math.max(this.g.length,y.g.length),g=[],_=0;_<p;_++)g[_]=this.i(_)^y.i(_);return new a(g,this.h^y.h)};function j(y){for(var p=y.g.length+1,g=[],_=0;_<p;_++)g[_]=y.i(_)<<1|y.i(_-1)>>>31;return new a(g,y.h)}function F(y,p){var g=p>>5;p%=32;for(var _=y.g.length-g,k=[],P=0;P<_;P++)k[P]=0<p?y.i(P+g)>>>p|y.i(P+g+1)<<32-p:y.i(P+g);return new a(k,y.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=I,ty=a}).apply(typeof ip<"u"?ip:typeof self<"u"?self:typeof window<"u"?window:{});var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Zs=="object"&&Zs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,l){if(l)e:{var d=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var C=o[f];if(!(C in d))break e;d=d[C]}o=o[o.length-1],f=d[o],l=l(f),l!=f&&l!=null&&t(d,o,{configurable:!0,writable:!0,value:l})}}function s(o,l){o instanceof String&&(o+="");var d=0,f=!1,C={next:function(){if(!f&&d<o.length){var A=d++;return{value:l(A,o[A]),done:!1}}return f=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function I(o,l,d){return o.call.apply(o.bind,arguments)}function E(o,l,d){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,f),o.apply(l,C)}}return function(){return o.apply(l,arguments)}}function T(o,l,d){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:E,T.apply(null,arguments)}function x(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(f,C,A){for(var U=Array(arguments.length-2),J=2;J<arguments.length;J++)U[J-2]=arguments[J];return l.prototype[C].apply(f,U)}}function L(o){const l=o.length;if(0<l){const d=Array(l);for(let f=0;f<l;f++)d[f]=o[f];return d}return[]}function D(o,l){for(let d=1;d<arguments.length;d++){const f=arguments[d];if(c(f)){const C=o.length||0,A=f.length||0;o.length=C+A;for(let U=0;U<A;U++)o[C+U]=f[U]}else o.push(f)}}class v{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function m(o){return/^[\s\xa0]*$/.test(o)}function S(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(o,l,d){for(const f in o)l.call(d,o[f],f,o)}function y(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function p(o){const l={};for(const d in o)l[d]=o[d];return l}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(o,l){let d,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(d in f)o[d]=f[d];for(let A=0;A<g.length;A++)d=g[A],Object.prototype.hasOwnProperty.call(f,d)&&(o[d]=f[d])}}function k(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function P(o){u.setTimeout(()=>{throw o},0)}function w(){var o=V;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Je{constructor(){this.h=this.g=null}add(l,d){const f=On.get();f.set(l,d),this.h?this.h.next=f:this.g=f,this.h=f}}var On=new v(()=>new Jr,o=>o.reset());class Jr{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let At,z=!1,V=new Je,H=()=>{const o=u.Promise.resolve(void 0);At=()=>{o.then(ie)}};var ie=()=>{for(var o;o=w();){try{o.h.call(o.g)}catch(d){P(d)}var l=On;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}z=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Nt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};u.addEventListener("test",d,l),u.removeEventListener("test",d,l)}catch{}return o}();function xt(o,l){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(j){e:{try{O(l.nodeName);var C=!0;break e}catch{}C=!1}C||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ot[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&xt.aa.h.call(this)}}N(xt,ue);var Ot={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Lt="closure_listenable_"+(1e6*Math.random()|0),ay=0;function ly(o,l,d,f,C){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!f,this.ha=C,this.key=++ay,this.da=this.fa=!1}function vs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ys(o){this.src=o,this.g={},this.h=0}ys.prototype.add=function(o,l,d,f,C){var A=o.toString();o=this.g[A],o||(o=this.g[A]=[],this.h++);var U=Pa(o,l,f,C);return-1<U?(l=o[U],d||(l.fa=!1)):(l=new ly(l,this.src,A,!!f,C),l.fa=d,o.push(l)),l};function Ca(o,l){var d=l.type;if(d in o.g){var f=o.g[d],C=Array.prototype.indexOf.call(f,l,void 0),A;(A=0<=C)&&Array.prototype.splice.call(f,C,1),A&&(vs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Pa(o,l,d,f){for(var C=0;C<o.length;++C){var A=o[C];if(!A.da&&A.listener==l&&A.capture==!!d&&A.ha==f)return C}return-1}var Ra="closure_lm_"+(1e6*Math.random()|0),Aa={};function id(o,l,d,f,C){if(Array.isArray(l)){for(var A=0;A<l.length;A++)id(o,l[A],d,f,C);return null}return d=ad(d),o&&o[Lt]?o.K(l,d,h(f)?!!f.capture:!!f,C):uy(o,l,d,!1,f,C)}function uy(o,l,d,f,C,A){if(!l)throw Error("Invalid event type");var U=h(C)?!!C.capture:!!C,J=xa(o);if(J||(o[Ra]=J=new ys(o)),d=J.add(l,d,f,U,A),d.proxy)return d;if(f=cy(),d.proxy=f,f.src=o,f.listener=d,o.addEventListener)Nt||(C=U),C===void 0&&(C=!1),o.addEventListener(l.toString(),f,C);else if(o.attachEvent)o.attachEvent(od(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function cy(){function o(d){return l.call(o.src,o.listener,d)}const l=dy;return o}function sd(o,l,d,f,C){if(Array.isArray(l))for(var A=0;A<l.length;A++)sd(o,l[A],d,f,C);else f=h(f)?!!f.capture:!!f,d=ad(d),o&&o[Lt]?(o=o.i,l=String(l).toString(),l in o.g&&(A=o.g[l],d=Pa(A,d,f,C),-1<d&&(vs(A[d]),Array.prototype.splice.call(A,d,1),A.length==0&&(delete o.g[l],o.h--)))):o&&(o=xa(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Pa(l,d,f,C)),(d=-1<o?l[o]:null)&&Na(d))}function Na(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Lt])Ca(l.i,o);else{var d=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(d,f,o.capture):l.detachEvent?l.detachEvent(od(d),f):l.addListener&&l.removeListener&&l.removeListener(f),(d=xa(l))?(Ca(d,o),d.h==0&&(d.src=null,l[Ra]=null)):vs(o)}}}function od(o){return o in Aa?Aa[o]:Aa[o]="on"+o}function dy(o,l){if(o.da)o=!0;else{l=new xt(l,this);var d=o.listener,f=o.ha||o.src;o.fa&&Na(o),o=d.call(f,l)}return o}function xa(o){return o=o[Ra],o instanceof ys?o:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function ad(o){return typeof o=="function"?o:(o[Oa]||(o[Oa]=function(l){return o.handleEvent(l)}),o[Oa])}function Ie(){X.call(this),this.i=new ys(this),this.M=this,this.F=null}N(Ie,X),Ie.prototype[Lt]=!0,Ie.prototype.removeEventListener=function(o,l,d,f){sd(this,o,l,d,f)};function Le(o,l){var d,f=o.F;if(f)for(d=[];f;f=f.F)d.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ue(l,o);else if(l instanceof ue)l.target=l.target||o;else{var C=l;l=new ue(f,o),_(l,C)}if(C=!0,d)for(var A=d.length-1;0<=A;A--){var U=l.g=d[A];C=ws(U,f,!0,l)&&C}if(U=l.g=o,C=ws(U,f,!0,l)&&C,C=ws(U,f,!1,l)&&C,d)for(A=0;A<d.length;A++)U=l.g=d[A],C=ws(U,f,!1,l)&&C}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],f=0;f<d.length;f++)vs(d[f]);delete o.g[l],o.h--}}this.F=null},Ie.prototype.K=function(o,l,d,f){return this.i.add(String(o),l,!1,d,f)},Ie.prototype.L=function(o,l,d,f){return this.i.add(String(o),l,!0,d,f)};function ws(o,l,d,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var C=!0,A=0;A<l.length;++A){var U=l[A];if(U&&!U.da&&U.capture==d){var J=U.listener,ye=U.ha||U.src;U.fa&&Ca(o.i,U),C=J.call(ye,f)!==!1&&C}}return C&&!f.defaultPrevented}function ld(o,l,d){if(typeof o=="function")d&&(o=T(o,d));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function ud(o){o.g=ld(()=>{o.g=null,o.i&&(o.i=!1,ud(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class hy extends X{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:ud(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zr(o){X.call(this),this.h=o,this.g={}}N(Zr,X);var cd=[];function dd(o){F(o.g,function(l,d){this.g.hasOwnProperty(d)&&Na(l)},o),o.g={}}Zr.prototype.N=function(){Zr.aa.N.call(this),dd(this)},Zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var La=u.JSON.stringify,fy=u.JSON.parse,py=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Da(){}Da.prototype.h=null;function hd(o){return o.h||(o.h=o.i())}function gy(){}var ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ma(){ue.call(this,"d")}N(Ma,ue);function ja(){ue.call(this,"c")}N(ja,ue);var lr={},fd=null;function Ua(){return fd=fd||new Ie}lr.La="serverreachability";function pd(o){ue.call(this,lr.La,o)}N(pd,ue);function ti(o){const l=Ua();Le(l,new pd(l))}lr.STAT_EVENT="statevent";function gd(o,l){ue.call(this,lr.STAT_EVENT,o),this.stat=l}N(gd,ue);function De(o){const l=Ua();Le(l,new gd(l,o))}lr.Ma="timingevent";function md(o,l){ue.call(this,lr.Ma,o),this.size=l}N(md,ue);function ni(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function ri(){this.g=!0}ri.prototype.xa=function(){this.g=!1};function my(o,l,d,f,C,A){o.info(function(){if(o.g)if(A)for(var U="",J=A.split("&"),ye=0;ye<J.length;ye++){var q=J[ye].split("=");if(1<q.length){var Se=q[0];q=q[1];var Te=Se.split("_");U=2<=Te.length&&Te[1]=="type"?U+(Se+"="+q+"&"):U+(Se+"=redacted&")}}else U=null;else U=A;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+l+`
`+d+`
`+U})}function vy(o,l,d,f,C,A,U){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+l+`
`+d+`
`+A+" "+U})}function ur(o,l,d,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+wy(o,d)+(f?" "+f:"")})}function yy(o,l){o.info(function(){return"TIMEOUT: "+l})}ri.prototype.info=function(){};function wy(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var f=d[o];if(!(2>f.length)){var C=f[1];if(Array.isArray(C)&&!(1>C.length)){var A=C[0];if(A!="noop"&&A!="stop"&&A!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return La(d)}catch{return l}}var Fa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_y={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ba;function _s(){}N(_s,Da),_s.prototype.g=function(){return new XMLHttpRequest},_s.prototype.i=function(){return{}},ba=new _s;function Jt(o,l,d,f){this.j=o,this.i=l,this.l=d,this.R=f||1,this.U=new Zr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vd}function vd(){this.i=null,this.g="",this.h=!1}var yd={},za={};function Ba(o,l,d){o.L=1,o.v=Ts(Dt(l)),o.m=d,o.P=!0,wd(o,null)}function wd(o,l){o.F=Date.now(),Es(o),o.A=Dt(o.v);var d=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ld(d.i,"t",f),o.C=0,d=o.j.J,o.h=new vd,o.g=Xd(o.j,d?l:null,!o.m),0<o.O&&(o.M=new hy(T(o.Y,o,o.g),o.O)),l=o.U,d=o.g,f=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(cd[0]=C.toString()),C=cd);for(var A=0;A<C.length;A++){var U=id(d,C[A],f||l.handleEvent,!1,l.h||l);if(!U)break;l.g[U.key]=U}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),ti(),my(o.i,o.u,o.A,o.l,o.R,o.m)}Jt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Mt(o)==3?l.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)e:{const Te=Mt(this.g);var l=this.g.Ba();const hr=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||zd(this.g)))){this.J||Te!=4||l==7||(l==8||0>=hr?ti(3):ti(2)),$a(this);var d=this.g.Z();this.X=d;t:if(_d(this)){var f=zd(this.g);o="";var C=f.length,A=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),ii(this);var U="";break t}this.h.i=new u.TextDecoder}for(l=0;l<C;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(A&&l==C-1)});f.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,vy(this.i,this.u,this.A,this.l,this.R,Te,d),this.o){if(this.T&&!this.K){t:{if(this.g){var J,ye=this.g;if((J=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(J)){var q=J;break t}}q=null}if(d=q)ur(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Va(this,d);else{this.o=!1,this.s=3,De(12),Ln(this),ii(this);break e}}if(this.P){d=!0;let lt;for(;!this.J&&this.C<U.length;)if(lt=Ey(this,U),lt==za){Te==4&&(this.s=4,De(14),d=!1),ur(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==yd){this.s=4,De(15),ur(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else ur(this.i,this.l,lt,null),Va(this,lt);if(_d(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||U.length!=0||this.h.h||(this.s=1,De(16),d=!1),this.o=this.o&&d,!d)ur(this.i,this.l,U,"[Invalid Chunked Response]"),Ln(this),ii(this);else if(0<U.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Ya(Se),Se.M=!0,De(11))}}else ur(this.i,this.l,U,null),Va(this,U);Te==4&&Ln(this),this.o&&!this.J&&(Te==4?Gd(this.j,this):(this.o=!1,Es(this)))}else Fy(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Ln(this),ii(this)}}}catch{}finally{}};function _d(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ey(o,l){var d=o.C,f=l.indexOf(`
`,d);return f==-1?za:(d=Number(l.substring(d,f)),isNaN(d)?yd:(f+=1,f+d>l.length?za:(l=l.slice(f,f+d),o.C=f+d,l)))}Jt.prototype.cancel=function(){this.J=!0,Ln(this)};function Es(o){o.S=Date.now()+o.I,Ed(o,o.I)}function Ed(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ni(T(o.ba,o),l)}function $a(o){o.B&&(u.clearTimeout(o.B),o.B=null)}Jt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(yy(this.i,this.A),this.L!=2&&(ti(),De(17)),Ln(this),this.s=2,ii(this)):Ed(this,this.S-o)};function ii(o){o.j.G==0||o.J||Gd(o.j,o)}function Ln(o){$a(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,dd(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Va(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||Ha(d.h,o))){if(!o.K&&Ha(d.h,o)&&d.G==3){try{var f=d.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ns(d),Rs(d);else break e;qa(d),De(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ni(T(d.Za,d),6e3));if(1>=Td(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mn(d,11)}else if((o.K||d.g==o)&&Ns(d),!m(l))for(C=d.Da.g.parse(l),l=0;l<C.length;l++){let q=C[l];if(d.T=q[0],q=q[1],d.G==2)if(q[0]=="c"){d.K=q[1],d.ia=q[2];const Se=q[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Te=q[4];Te!=null&&(d.Aa=Te,d.j.info("SVER="+d.Aa));const hr=q[5];hr!=null&&typeof hr=="number"&&0<hr&&(f=1.5*hr,d.L=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const lt=o.g;if(lt){const xs=lt.g?lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var A=f.h;A.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Wa(A,A.h),A.h=null))}if(f.D){const Qa=lt.g?lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qa&&(f.ya=Qa,ee(f.I,f.D,Qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),f=d;var U=o;if(f.qa=Qd(f,f.J?f.ia:null,f.W),U.K){kd(f.h,U);var J=U,ye=f.L;ye&&(J.I=ye),J.B&&($a(J),Es(J)),f.g=U}else Wd(f);0<d.i.length&&As(d)}else q[0]!="stop"&&q[0]!="close"||Mn(d,7);else d.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?Mn(d,7):Ga(d):q[0]!="noop"&&d.l&&d.l.ta(q),d.v=0)}}ti(4)}catch{}}var Iy=class{constructor(o,l){this.g=o,this.map=l}};function Id(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sd(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Td(o){return o.h?1:o.g?o.g.size:0}function Ha(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Wa(o,l){o.g?o.g.add(l):o.h=l}function kd(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Id.prototype.cancel=function(){if(this.i=Cd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Cd(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return L(o.i)}function Sy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],d=o.length,f=0;f<d;f++)l.push(o[f]);return l}l=[],d=0;for(f in o)l[d++]=o[f];return l}function Ty(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const f in o)l[d++]=f;return l}}}function Pd(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=Ty(o),f=Sy(o),C=f.length,A=0;A<C;A++)l.call(void 0,f[A],d&&d[A],o)}var Rd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ky(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var f=o[d].indexOf("="),C=null;if(0<=f){var A=o[d].substring(0,f);C=o[d].substring(f+1)}else A=o[d];l(A,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Dn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Dn){this.h=o.h,Is(this,o.j),this.o=o.o,this.g=o.g,Ss(this,o.s),this.l=o.l;var l=o.i,d=new ai;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Ad(this,d),this.m=o.m}else o&&(l=String(o).match(Rd))?(this.h=!1,Is(this,l[1]||"",!0),this.o=si(l[2]||""),this.g=si(l[3]||"",!0),Ss(this,l[4]),this.l=si(l[5]||"",!0),Ad(this,l[6]||"",!0),this.m=si(l[7]||"")):(this.h=!1,this.i=new ai(null,this.h))}Dn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(oi(l,Nd,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(oi(l,Nd,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(oi(d,d.charAt(0)=="/"?Ry:Py,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",oi(d,Ny)),o.join("")};function Dt(o){return new Dn(o)}function Is(o,l,d){o.j=d?si(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Ss(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ad(o,l,d){l instanceof ai?(o.i=l,xy(o.i,o.h)):(d||(l=oi(l,Ay)),o.i=new ai(l,o.h))}function ee(o,l,d){o.i.set(l,d)}function Ts(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function si(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function oi(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Cy),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Cy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Nd=/[#\/\?@]/g,Py=/[#\?:]/g,Ry=/[#\?]/g,Ay=/[#\?@]/g,Ny=/#/g;function ai(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Zt(o){o.g||(o.g=new Map,o.h=0,o.i&&ky(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}e=ai.prototype,e.add=function(o,l){Zt(this),this.i=null,o=cr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function xd(o,l){Zt(o),l=cr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Od(o,l){return Zt(o),l=cr(o,l),o.g.has(l)}e.forEach=function(o,l){Zt(this),this.g.forEach(function(d,f){d.forEach(function(C){o.call(l,C,f,this)},this)},this)},e.na=function(){Zt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let f=0;f<l.length;f++){const C=o[f];for(let A=0;A<C.length;A++)d.push(l[f])}return d},e.V=function(o){Zt(this);let l=[];if(typeof o=="string")Od(this,o)&&(l=l.concat(this.g.get(cr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},e.set=function(o,l){return Zt(this),this.i=null,o=cr(this,o),Od(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},e.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Ld(o,l,d){xd(o,l),0<d.length&&(o.i=null,o.g.set(cr(o,l),L(d)),o.h+=d.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var f=l[d];const A=encodeURIComponent(String(f)),U=this.V(f);for(f=0;f<U.length;f++){var C=A;U[f]!==""&&(C+="="+encodeURIComponent(String(U[f]))),o.push(C)}}return this.i=o.join("&")};function cr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function xy(o,l){l&&!o.j&&(Zt(o),o.i=null,o.g.forEach(function(d,f){var C=f.toLowerCase();f!=C&&(xd(this,f),Ld(this,C,d))},o)),o.j=l}function Oy(o,l){const d=new ri;if(u.Image){const f=new Image;f.onload=x(en,d,"TestLoadImage: loaded",!0,l,f),f.onerror=x(en,d,"TestLoadImage: error",!1,l,f),f.onabort=x(en,d,"TestLoadImage: abort",!1,l,f),f.ontimeout=x(en,d,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Ly(o,l){const d=new ri,f=new AbortController,C=setTimeout(()=>{f.abort(),en(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(A=>{clearTimeout(C),A.ok?en(d,"TestPingServer: ok",!0,l):en(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),en(d,"TestPingServer: error",!1,l)})}function en(o,l,d,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(d)}catch{}}function Dy(){this.g=new py}function My(o,l,d){const f=d||"";try{Pd(o,function(C,A){let U=C;h(C)&&(U=La(C)),l.push(f+A+"="+encodeURIComponent(U))})}catch(C){throw l.push(f+"type="+encodeURIComponent("_badmap")),C}}function ks(o){this.l=o.Ub||null,this.j=o.eb||!1}N(ks,Da),ks.prototype.g=function(){return new Cs(this.l,this.j)},ks.prototype.i=function(o){return function(){return o}}({});function Cs(o,l){Ie.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Cs,Ie),e=Cs.prototype,e.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,ui(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,li(this)),this.readyState=0},e.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ui(this)),this.g&&(this.readyState=3,ui(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dd(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dd(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}e.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?li(this):ui(this),this.readyState==3&&Dd(this)}},e.Ra=function(o){this.g&&(this.response=this.responseText=o,li(this))},e.Qa=function(o){this.g&&(this.response=o,li(this))},e.ga=function(){this.g&&li(this)};function li(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ui(o)}e.setRequestHeader=function(o,l){this.u.append(o,l)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function ui(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Cs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Md(o){let l="";return F(o,function(d,f){l+=f,l+=":",l+=d,l+=`\r
`}),l}function Ka(o,l,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=Md(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ee(o,l,d))}function ce(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ce,Ie);var jy=/^https?$/i,Uy=["POST","PUT"];e=ce.prototype,e.Ha=function(o){this.J=o},e.ea=function(o,l,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ba.g(),this.v=this.o?hd(this.o):hd(ba),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(A){jd(this,A);return}if(o=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)d.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const A of f.keys())d.set(A,f.get(A));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(A=>A.toLowerCase()=="content-type"),C=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Uy,l,void 0))||f||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,U]of d)this.g.setRequestHeader(A,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bd(this),this.u=!0,this.g.send(o),this.u=!1}catch(A){jd(this,A)}};function jd(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Ud(o),Ps(o)}function Ud(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),Ps(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),ce.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Fd(this):this.bb())},e.bb=function(){Fd(this)};function Fd(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Mt(o)!=4||o.Z()!=2)){if(o.u&&Mt(o)==4)ld(o.Ea,0,o);else if(Le(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var f;if(f=U===0){var C=String(o.D).match(Rd)[1]||null;!C&&u.self&&u.self.location&&(C=u.self.location.protocol.slice(0,-1)),f=!jy.test(C?C.toLowerCase():"")}d=f}if(d)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var A=2<Mt(o)?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.Z()+"]",Ud(o)}}finally{Ps(o)}}}}function Ps(o,l){if(o.g){bd(o);const d=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Le(o,"ready");try{d.onreadystatechange=f}catch{}}}function bd(o){o.I&&(u.clearTimeout(o.I),o.I=null)}e.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}e.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),fy(l)}};function zd(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Fy(o){const l={};o=(o.g&&2<=Mt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(m(o[f]))continue;var d=k(o[f]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const A=l[C]||[];l[C]=A,A.push(d)}y(l,function(f){return f.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ci(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function Bd(o){this.Aa=0,this.i=[],this.j=new ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ci("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ci("baseRetryDelayMs",5e3,o),this.cb=ci("retryDelaySeedMs",1e4,o),this.Wa=ci("forwardChannelMaxRetries",2,o),this.wa=ci("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Id(o&&o.concurrentRequestLimit),this.Da=new Dy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Bd.prototype,e.la=8,e.G=1,e.connect=function(o,l,d,f){De(0),this.W=o,this.H=l||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.I=Qd(this,null,this.W),As(this)};function Ga(o){if($d(o),o.G==3){var l=o.U++,d=Dt(o.I);if(ee(d,"SID",o.K),ee(d,"RID",l),ee(d,"TYPE","terminate"),di(o,d),l=new Jt(o,o.j,l),l.L=2,l.v=Ts(Dt(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=l.v,d=!0),d||(l.g=Xd(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Es(l)}Yd(o)}function Rs(o){o.g&&(Ya(o),o.g.cancel(),o.g=null)}function $d(o){Rs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Ns(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function As(o){if(!Sd(o.h)&&!o.s){o.s=!0;var l=o.Ga;At||H(),z||(At(),z=!0),V.add(l,o),o.B=0}}function by(o,l){return Td(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ni(T(o.Ga,o,l),qd(o,o.B)),o.B++,!0)}e.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Jt(this,this.j,o);let A=this.o;if(this.S&&(A?(A=p(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(C.H=A,A=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Hd(this,C,l),d=Dt(this.I),ee(d,"RID",o),ee(d,"CVER",22),this.D&&ee(d,"X-HTTP-Session-Id",this.D),di(this,d),A&&(this.O?l="headers="+encodeURIComponent(String(Md(A)))+"&"+l:this.m&&Ka(d,this.m,A)),Wa(this.h,C),this.Ua&&ee(d,"TYPE","init"),this.P?(ee(d,"$req",l),ee(d,"SID","null"),C.T=!0,Ba(C,d,null)):Ba(C,d,l),this.G=2}}else this.G==3&&(o?Vd(this,o):this.i.length==0||Sd(this.h)||Vd(this))};function Vd(o,l){var d;l?d=l.l:d=o.U++;const f=Dt(o.I);ee(f,"SID",o.K),ee(f,"RID",d),ee(f,"AID",o.T),di(o,f),o.m&&o.o&&Ka(f,o.m,o.o),d=new Jt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Hd(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Wa(o.h,d),Ba(d,f,l)}function di(o,l){o.H&&F(o.H,function(d,f){ee(l,f,d)}),o.l&&Pd({},function(d,f){ee(l,f,d)})}function Hd(o,l,d){d=Math.min(o.i.length,d);var f=o.l?T(o.l.Na,o.l,o):null;e:{var C=o.i;let A=-1;for(;;){const U=["count="+d];A==-1?0<d?(A=C[0].g,U.push("ofs="+A)):A=0:U.push("ofs="+A);let J=!0;for(let ye=0;ye<d;ye++){let q=C[ye].g;const Se=C[ye].map;if(q-=A,0>q)A=Math.max(0,C[ye].g-100),J=!1;else try{My(Se,U,"req"+q+"_")}catch{f&&f(Se)}}if(J){f=U.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,f}function Wd(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;At||H(),z||(At(),z=!0),V.add(l,o),o.v=0}}function qa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ni(T(o.Fa,o),qd(o,o.v)),o.v++,!0)}e.Fa=function(){if(this.u=null,Kd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ni(T(this.ab,this),o)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),Rs(this),Kd(this))};function Ya(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Kd(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Dt(o.qa);ee(l,"RID","rpc"),ee(l,"SID",o.K),ee(l,"AID",o.T),ee(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(l,"TO",o.ja),ee(l,"TYPE","xmlhttp"),di(o,l),o.m&&o.o&&Ka(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ts(Dt(l)),d.m=null,d.P=!0,wd(d,o)}e.Za=function(){this.C!=null&&(this.C=null,Rs(this),qa(this),De(19))};function Ns(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Gd(o,l){var d=null;if(o.g==l){Ns(o),Ya(o),o.g=null;var f=2}else if(Ha(o.h,l))d=l.D,kd(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var C=o.B;f=Ua(),Le(f,new md(f,d)),As(o)}else Wd(o);else if(C=l.s,C==3||C==0&&0<l.X||!(f==1&&by(o,l)||f==2&&qa(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),C){case 1:Mn(o,5);break;case 4:Mn(o,10);break;case 3:Mn(o,6);break;default:Mn(o,2)}}}function qd(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Mn(o,l){if(o.j.info("Error code "+l),l==2){var d=T(o.fb,o),f=o.Xa;const C=!f;f=new Dn(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Is(f,"https"),Ts(f),C?Oy(f.toString(),d):Ly(f.toString(),d)}else De(2);o.G=0,o.l&&o.l.sa(l),Yd(o),$d(o)}e.fb=function(o){o?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Yd(o){if(o.G=0,o.ka=[],o.l){const l=Cd(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Qd(o,l,d){var f=d instanceof Dn?Dt(d):new Dn(d);if(f.g!="")l&&(f.g=l+"."+f.g),Ss(f,f.s);else{var C=u.location;f=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;var A=new Dn(null);f&&Is(A,f),l&&(A.g=l),C&&Ss(A,C),d&&(A.l=d),f=A}return d=o.D,l=o.ya,d&&l&&ee(f,d,l),ee(f,"VER",o.la),di(o,f),f}function Xd(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ce(new ks({eb:d})):new ce(o.pa),l.Ha(o.J),l}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jd(){}e=Jd.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Ze(o,l){Ie.call(this),this.g=new Bd(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!m(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!m(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new dr(this)}N(Ze,Ie),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Ga(this.g)},Ze.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=La(o),o=d);l.i.push(new Iy(l.Ya++,o)),l.G==3&&As(l)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,Ze.aa.N.call(this)};function Zd(o){Ma.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Zd,Ma);function eh(){ja.call(this),this.status=1}N(eh,ja);function dr(o){this.g=o}N(dr,Jd),dr.prototype.ua=function(){Le(this.g,"a")},dr.prototype.ta=function(o){Le(this.g,new Zd(o))},dr.prototype.sa=function(o){Le(this.g,new eh)},dr.prototype.ra=function(){Le(this.g,"b")},Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Fa.NO_ERROR=0,Fa.TIMEOUT=8,Fa.HTTP_ERROR=6,_y.COMPLETE="complete",gy.EventType=ei,ei.OPEN="a",ei.CLOSE="b",ei.ERROR="c",ei.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha}).apply(typeof Zs<"u"?Zs:typeof self<"u"?self:typeof window<"u"?window:{});const sp="@firebase/firestore";/**
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
 */class Pe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
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
 */let ms="10.12.3";/**
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
 */const Wr=new wa("@firebase/firestore");function Ke(e,...t){if(Wr.logLevel<=Y.DEBUG){const n=t.map(td);Wr.debug(`Firestore (${ms}): ${e}`,...n)}}function ed(e,...t){if(Wr.logLevel<=Y.ERROR){const n=t.map(td);Wr.error(`Firestore (${ms}): ${e}`,...n)}}function zk(e,...t){if(Wr.logLevel<=Y.WARN){const n=t.map(td);Wr.warn(`Firestore (${ms}): ${e}`,...n)}}function td(e){if(typeof e=="string")return e;try{/**
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
 */function nd(e="Unexpected state"){const t=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+e;throw ed(t),new Error(t)}function Bu(e,t){e||nd()}/**
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
 */const Ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends yt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ny{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}}class $k{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Vk{constructor(t){this.t=t,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,t.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{Ke("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(Ke("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ke("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Bu(typeof r.accessToken=="string"),new ny(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Bu(t===null||typeof t=="string"),new Pe(t)}}class Hk{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Wk{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Hk(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Kk{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Gk{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Ke("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Ke("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Ke("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ke("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Bu(typeof n.token=="string"),this.R=n.token,new Kk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qk(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Yk{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=qk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function ry(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Qk{constructor(t,n,r,i,s,a,u,c,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=h}}class ea{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ea&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var op,K;(K=op||(op={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ty([4294967295,4294967295],0);function Dl(){return typeof document<"u"?document:null}/**
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
 */class Xk{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Ke("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class rd{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const a=Date.now()+r,u=new rd(t,n,a,i,s);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(Ae.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jk(e,t){if(ed("AsyncQueue",`${t}: ${e}`),ry(e))return new Ne(Ae.UNAVAILABLE,`${t}: ${e}`);throw e}var ap,lp;(lp=ap||(ap={})).J_="default",lp.Cache="cache";/**
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
 */class Zk{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=Yk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Ke("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Ke("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ne(Ae.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Jk(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function iy(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const up=new Map;function eC(e,t,n,r){if(t===!0&&r===!0)throw new Ne(Ae.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tC(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":nd()}function nC(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ne(Ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tC(e);throw new Ne(Ae.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class cp{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Ne(Ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ne(Ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}eC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iy((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ne(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ne(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ne(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class sy{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ne(Ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ne(Ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cp(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Bk;switch(r.type){case"firstParty":return new Wk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ne(Ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=up.get(n);r&&(Ke("ComponentProvider","Removing Datastore"),up.delete(n),r.terminate())}(this),Promise.resolve()}}function rC(e,t,n,r={}){var i;const s=(e=nC(e,sy))._getSettings(),a=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&zk("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Pe.MOCK_USER;else{u=A_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Ne(Ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Pe(h)}e._authCredentials=new $k(new ny(u,c))}}/**
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
 */class iC{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Xk(this,"async_queue_retry"),this.hu=()=>{const n=Dl();n&&Ke("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=Dl();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=Dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new jr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!ry(t))throw t;Ke("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw ed("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(t,n,r){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const i=rd.createAndSchedule(this,t,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&nd()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}class sC extends sy{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new iC}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aC(this),this._firestoreClient.terminate()}}function oC(e,t){const n=typeof e=="object"?e:zc(),r=typeof e=="string"?e:"(default)",i=or(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=P_("firestore");s&&rC(i,...s)}return i}function aC(e){var t,n,r;const i=e._freezeSettings(),s=function(u,c,h,I){return new Qk(u,c,h,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,iy(I.experimentalLongPollingOptions),I.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Zk(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){ms=i})(Qr),Pt(new mt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new sC(new Vk(r.getProvider("auth-internal")),new Gk(r.getProvider("app-check-internal")),function(h,I){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Ne(Ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ea(h.options.projectId,I)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),it(sp,"4.6.4",t),it(sp,"4.6.4","esm2017")})();const lC={apiKey:"AIzaSyAags0zeuWO7Ss7Nahdn72KJu5PtrGz4GQ",authDomain:"kite-hacks.firebaseapp.com",projectId:"kite-hacks",storageBucket:"kite-hacks.appspot.com",messagingSenderId:"499816998445",appId:"1:499816998445:web:88cd530ad1e5aefbe8baa4",measurementId:"G-L5M0GQS19Y"},oy=qm(lC);ES(oy);const eo=Fk();oC(oy);const uC=()=>{const[e,t]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[a,u]=b.useState(""),[c,h]=b.useState(!1),I=Om(),E=v=>{v.length<8?(document.getElementById("auth-pw-short").style.display="block",document.getElementById("auth-pw").style.border="1px Solid rgb(255, 145, 145)"):(document.getElementById("auth-pw-short").style.display="none",document.getElementById("auth-pw").style.border="none"),s(v)},T=v=>{v!=i?(document.getElementById("auth-pw-diff").style.display="block",document.getElementById("auth-pw-confirm").style.border="1px Solid rgb(255, 145, 145)"):(document.getElementById("auth-pw-diff").style.display="none",document.getElementById("auth-pw-confirm").style.border="none"),u(v)},x=async()=>{try{await ET(eo,n,i),await TT(eo.currentUser,{displayName:e}),console.log(eo.currentUser.displayName)}catch(v){console.error(v)}},N=()=>{const v=e.trim()!="",m=n.includes("@"),S=i.length>=8;h(v&&m&&S&&a===i)};b.useEffect(()=>{N()},[e,n,i,a]);const L=async()=>{try{await IT(eo,n,i).then(v=>{const m=v.user}),I("/kite-hacks-proj/account")}catch(v){console.error(v)}},D=()=>{const v=document.getElementById("signIn"),m=document.getElementById("signUp"),S=document.getElementById("auth-side-cover"),O=document.getElementById("cover-signIn"),j=document.getElementById("cover-signUp");let F=getComputedStyle(v).display,y=getComputedStyle(S).left;console.log("Button Clicked"),screen.width<1e3?F=="none"?(v.style.display="flex",m.style.display="none"):(v.style.display="none",m.style.display="flex"):y=="0px"?(S.style.left="50%",O.style.display="none",j.style.display="flex"):(S.style.left="0px",O.style.display="flex",j.style.display="none")};return b.useEffect(()=>{const v=()=>{window.innerWidth>=1e3?(document.getElementById("signIn").style.display="flex",document.getElementById("signUp").style.display="flex"):document.getElementById("signUp").style.display="none"};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}},[]),R.jsxs("div",{className:"auth-screen-wrapper",children:[R.jsx("div",{className:"circle",id:"circle1",children:"empty"}),R.jsx("div",{className:"circle",id:"circle2",children:"empty"}),R.jsxs("div",{className:"auth-modal-container",children:[R.jsxs("div",{id:"auth-side-cover",children:[R.jsxs("div",{className:"auth-cover-container",id:"cover-signIn",children:[R.jsx("h1",{children:"Welcome back!"}),R.jsx("h2",{children:"Sign back in to begin saving the world!"})]}),R.jsxs("div",{className:"auth-cover-container",id:"cover-signUp",children:[R.jsx("h1",{children:"Let's Get Started!"}),R.jsx("h2",{children:"Begin your journey to awesomeness"})]})]}),R.jsxs("div",{className:"auth-side-container",id:"signUp",children:[R.jsx("h1",{children:"Create an Account"}),R.jsxs("div",{className:"auth-text-field",children:[R.jsx("p",{children:"Name:"}),R.jsx("input",{placeholder:"Enter a username",onChange:v=>t(v.target.value),required:!0})]}),R.jsxs("div",{className:"auth-text-field",children:[R.jsx("p",{children:"Email:"}),R.jsx("input",{type:"email",placeholder:"Enter your email",onChange:v=>r(v.target.value),required:!0})]}),R.jsxs("div",{className:"auth-text-field",children:[R.jsx("p",{children:"Password:"}),R.jsx("input",{id:"auth-pw",type:"password",placeholder:"Enter your password",onChange:v=>E(v.target.value),required:!0}),R.jsx("p",{id:"auth-pw-short",children:"*The password has to be at least 8 characters"})]}),R.jsxs("div",{className:"auth-text-field",children:[R.jsx("p",{children:"Confirm Password:"}),R.jsx("input",{id:"auth-pw-confirm",type:"password",placeholder:"Reenter your password",onChange:v=>T(v.target.value),required:!0}),R.jsx("p",{id:"auth-pw-diff",children:"*The passwords do not match"})]}),R.jsx("div",{className:"auth-button-container",children:R.jsx("button",{disabled:!c,onClick:x,children:"Sign Up"})}),R.jsxs("div",{className:"auth-swap-side-container",children:[R.jsx("p",{children:"Already have an account?"}),R.jsx("button",{onClick:D,children:"Sign In"})]})]}),R.jsxs("div",{className:"auth-side-container",id:"signIn",children:[R.jsx("h1",{children:"Sign In"}),R.jsxs("div",{className:"auth-text-field",children:[R.jsx("p",{children:"Enter your email"}),R.jsx("input",{type:"email",placeholder:"email",onChange:v=>r(v.target.value)})]}),R.jsxs("div",{className:"auth-text-field",children:[R.jsx("p",{children:"Enter a password"}),R.jsx("input",{type:"password",placeholder:"password",onChange:v=>s(v.target.value)})]}),R.jsx("div",{className:"auth-button-container",children:R.jsx("button",{onClick:L,children:"Sign In"})}),R.jsxs("div",{className:"auth-swap-side-container",children:[R.jsx("p",{children:"Don't have an account?"}),R.jsx("button",{onClick:D,children:"Sign Up"})]})]})]})]})},cC=()=>R.jsxs("div",{className:"account-container",children:[R.jsxs("div",{className:"account-info-container",children:[R.jsx("h1",{children:"Account Information"}),R.jsx("p",{children:"Name: Test"})]}),R.jsx("div",{className:"account-stats-container"})]});function dC(){return R.jsx(u_,{children:R.jsxs(n_,{children:[R.jsx(po,{path:"kite-hacks-proj",element:R.jsx(w_,{})}),R.jsx(po,{path:"kite-hacks-proj/auth",element:R.jsx(uC,{})}),R.jsx(po,{path:"kite-hacks-proj/account",element:R.jsx(cC,{})})]})})}Ml.createRoot(document.getElementById("root")).render(R.jsx(Ep.StrictMode,{children:R.jsx(dC,{})}));
