(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Zv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ff={exports:{}},bo={},jf={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),ry=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),sy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ly=Symbol.for("react.suspense"),ay=Symbol.for("react.memo"),uy=Symbol.for("react.lazy"),Md=Symbol.iterator;function cy(t){return t===null||typeof t!="object"?null:(t=Md&&t[Md]||t["@@iterator"],typeof t=="function"?t:null)}var zf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bf=Object.assign,Vf={};function Vr(t,e,n){this.props=t,this.context=e,this.refs=Vf,this.updater=n||zf}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $f(){}$f.prototype=Vr.prototype;function Tu(t,e,n){this.props=t,this.context=e,this.refs=Vf,this.updater=n||zf}var ku=Tu.prototype=new $f;ku.constructor=Tu;Bf(ku,Vr.prototype);ku.isPureReactComponent=!0;var Ud=Array.isArray,bf=Object.prototype.hasOwnProperty,Cu={current:null},Hf={key:!0,ref:!0,__self:!0,__source:!0};function Wf(t,e,n){var r,i={},o=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)bf.call(e,r)&&!Hf.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var d=Array(u),f=0;f<u;f++)d[f]=arguments[f+2];i.children=d}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:Xi,type:t,key:o,ref:l,props:i,_owner:Cu.current}}function dy(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Au(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function hy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fd=/\/+/g;function Fl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hy(""+t.key):e.toString(36)}function Ks(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case Xi:case ey:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+Fl(l,0):r,Ud(i)?(n="",t!=null&&(n=t.replace(Fd,"$&/")+"/"),Ks(i,e,n,"",function(f){return f})):i!=null&&(Au(i)&&(i=dy(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Fd,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",Ud(t))for(var u=0;u<t.length;u++){o=t[u];var d=r+Fl(o,u);l+=Ks(o,e,n,d,i)}else if(d=cy(t),typeof d=="function")for(t=d.call(t),u=0;!(o=t.next()).done;)o=o.value,d=r+Fl(o,u++),l+=Ks(o,e,n,d,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ss(t,e,n){if(t==null)return t;var r=[],i=0;return Ks(t,r,"","",function(o){return e.call(n,o,i++)}),r}function fy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},Gs={transition:null},py={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Gs,ReactCurrentOwner:Cu};function Kf(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ss,forEach:function(t,e,n){Ss(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ss(t,function(){e++}),e},toArray:function(t){return Ss(t,function(e){return e})||[]},only:function(t){if(!Au(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=Vr;H.Fragment=ty;H.Profiler=ry;H.PureComponent=Tu;H.StrictMode=ny;H.Suspense=ly;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;H.act=Kf;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Bf({},t.props),i=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Cu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(d in e)bf.call(e,d)&&!Hf.hasOwnProperty(d)&&(r[d]=e[d]===void 0&&u!==void 0?u[d]:e[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var f=0;f<d;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:Xi,type:t.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(t){return t={$$typeof:sy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iy,_context:t},t.Consumer=t};H.createElement=Wf;H.createFactory=function(t){var e=Wf.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:oy,render:t}};H.isValidElement=Au;H.lazy=function(t){return{$$typeof:uy,_payload:{_status:-1,_result:t},_init:fy}};H.memo=function(t,e){return{$$typeof:ay,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Gs.transition;Gs.transition={};try{t()}finally{Gs.transition=e}};H.unstable_act=Kf;H.useCallback=function(t,e){return Me.current.useCallback(t,e)};H.useContext=function(t){return Me.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};H.useEffect=function(t,e){return Me.current.useEffect(t,e)};H.useId=function(){return Me.current.useId()};H.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Me.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};H.useRef=function(t){return Me.current.useRef(t)};H.useState=function(t){return Me.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Me.current.useTransition()};H.version="18.3.1";jf.exports=H;var wt=jf.exports;const gy=Zv(wt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=wt,vy=Symbol.for("react.element"),yy=Symbol.for("react.fragment"),wy=Object.prototype.hasOwnProperty,_y=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ey={key:!0,ref:!0,__self:!0,__source:!0};function Gf(t,e,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)wy.call(e,r)&&!Ey.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vy,type:t,key:o,ref:l,props:i,_owner:_y.current}}bo.Fragment=yy;bo.jsx=Gf;bo.jsxs=Gf;Ff.exports=bo;var B=Ff.exports,_a={},qf={exports:{}},qe={},Yf={exports:{}},Qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,$){var b=j.length;j.push($);e:for(;0<b;){var re=b-1>>>1,Q=j[re];if(0<i(Q,$))j[re]=$,j[b]=Q,b=re;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var $=j[0],b=j.pop();if(b!==$){j[0]=b;e:for(var re=0,Q=j.length,ae=Q>>>1;re<ae;){var Rt=2*(re+1)-1,Nt=j[Rt],Ot=Rt+1,Dt=j[Ot];if(0>i(Nt,b))Ot<Q&&0>i(Dt,Nt)?(j[re]=Dt,j[Ot]=b,re=Ot):(j[re]=Nt,j[Rt]=b,re=Rt);else if(Ot<Q&&0>i(Dt,b))j[re]=Dt,j[Ot]=b,re=Ot;else break e}}return $}function i(j,$){var b=j.sortIndex-$.sortIndex;return b!==0?b:j.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var d=[],f=[],S=1,A=null,C=3,O=!1,R=!1,L=!1,x=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(j){for(var $=n(f);$!==null;){if($.callback===null)r(f);else if($.startTime<=j)r(f),$.sortIndex=$.expirationTime,e(d,$);else break;$=n(f)}}function N(j){if(L=!1,I(j),!R)if(n(d)!==null)R=!0,Kr(U);else{var $=n(f);$!==null&&Pt(N,$.startTime-j)}}function U(j,$){R=!1,L&&(L=!1,E(p),p=-1),O=!0;var b=C;try{for(I($),A=n(d);A!==null&&(!(A.expirationTime>$)||j&&!_());){var re=A.callback;if(typeof re=="function"){A.callback=null,C=A.priorityLevel;var Q=re(A.expirationTime<=$);$=t.unstable_now(),typeof Q=="function"?A.callback=Q:A===n(d)&&r(d),I($)}else r(d);A=n(d)}if(A!==null)var ae=!0;else{var Rt=n(f);Rt!==null&&Pt(N,Rt.startTime-$),ae=!1}return ae}finally{A=null,C=b,O=!1}}var F=!1,m=null,p=-1,g=5,y=-1;function _(){return!(t.unstable_now()-y<g)}function k(){if(m!==null){var j=t.unstable_now();y=j;var $=!0;try{$=m(!0,j)}finally{$?v():(F=!1,m=null)}}else F=!1}var v;if(typeof w=="function")v=function(){w(k)};else if(typeof MessageChannel<"u"){var Qe=new MessageChannel,Rn=Qe.port2;Qe.port1.onmessage=k,v=function(){Rn.postMessage(null)}}else v=function(){x(k,0)};function Kr(j){m=j,F||(F=!0,v())}function Pt(j,$){p=x(function(){j(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){R||O||(R=!0,Kr(U))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return C},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(j){switch(C){case 1:case 2:case 3:var $=3;break;default:$=C}var b=C;C=$;try{return j()}finally{C=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,$){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var b=C;C=j;try{return $()}finally{C=b}},t.unstable_scheduleCallback=function(j,$,b){var re=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?re+b:re):b=re,j){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=b+Q,j={id:S++,callback:$,priorityLevel:j,startTime:b,expirationTime:Q,sortIndex:-1},b>re?(j.sortIndex=b,e(f,j),n(d)===null&&j===n(f)&&(L?(E(p),p=-1):L=!0,Pt(N,b-re))):(j.sortIndex=Q,e(d,j),R||O||(R=!0,Kr(U))),j},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(j){var $=C;return function(){var b=C;C=$;try{return j.apply(this,arguments)}finally{C=b}}}})(Qf);Yf.exports=Qf;var Iy=Yf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=wt,Ge=Iy;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xf=new Set,Oi={};function Jn(t,e){Dr(t,e),Dr(t+"Capture",e)}function Dr(t,e){for(Oi[t]=e,t=0;t<e.length;t++)Xf.add(e[t])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ea=Object.prototype.hasOwnProperty,Ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},zd={};function ky(t){return Ea.call(zd,t)?!0:Ea.call(jd,t)?!1:Ty.test(t)?zd[t]=!0:(jd[t]=!0,!1)}function Cy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ay(t,e,n,r){if(e===null||typeof e>"u"||Cy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){we[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];we[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){we[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){we[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){we[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){we[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){we[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){we[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){we[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pu=/[\-:]([a-z])/g;function Ru(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pu,Ru);we[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pu,Ru);we[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pu,Ru);we[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){we[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});we.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){we[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nu(t,e,n,r){var i=we.hasOwnProperty(e)?we[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ay(e,n,i,r)&&(n=null),r||i===null?ky(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ts=Symbol.for("react.element"),ur=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),Ou=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),Jf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),ep=Symbol.for("react.offscreen"),Bd=Symbol.iterator;function oi(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,jl;function pi(t){if(jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+t}var zl=!1;function Bl(t,e){if(!t||zl)return"";zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var d=`
`+i[l].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=l&&0<=u);break}}}finally{zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pi(t):""}function Py(t){switch(t.tag){case 5:return pi(t.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return t=Bl(t.type,!1),t;case 11:return t=Bl(t.type.render,!1),t;case 1:return t=Bl(t.type,!0),t;default:return""}}function ka(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cr:return"Fragment";case ur:return"Portal";case Ia:return"Profiler";case Ou:return"StrictMode";case Sa:return"Suspense";case Ta:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zf:return(t.displayName||"Context")+".Consumer";case Jf:return(t._context.displayName||"Context")+".Provider";case Du:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lu:return e=t.displayName||null,e!==null?e:ka(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return ka(t(e))}catch{}}return null}function Ry(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(e);case 8:return e===Ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ny(t){var e=tp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ks(t){t._valueTracker||(t._valueTracker=Ny(t))}function np(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ca(t,e){var n=e.checked;return oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rp(t,e){e=e.checked,e!=null&&Nu(t,"checked",e,!1)}function Aa(t,e){rp(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pa(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $d(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pa(t,e,n){(e!=="number"||ao(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gi=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ra(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(gi(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function ip(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Na(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cs,op=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cs=Cs||document.createElement("div"),Cs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Di(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(t){Oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_i[e]=_i[t]})});function lp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_i.hasOwnProperty(t)&&_i[t]?(""+e).trim():e+"px"}function ap(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Dy=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(t,e){if(e){if(Dy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Da(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var La=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xa=null,Sr=null,Tr=null;function Wd(t){if(t=es(t)){if(typeof xa!="function")throw Error(D(280));var e=t.stateNode;e&&(e=qo(e),xa(t.stateNode,t.type,e))}}function up(t){Sr?Tr?Tr.push(t):Tr=[t]:Sr=t}function cp(){if(Sr){var t=Sr,e=Tr;if(Tr=Sr=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function dp(t,e){return t(e)}function hp(){}var Vl=!1;function fp(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return dp(t,e,n)}finally{Vl=!1,(Sr!==null||Tr!==null)&&(hp(),cp())}}function Li(t,e){var n=t.stateNode;if(n===null)return null;var r=qo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var Ma=!1;if(Ht)try{var li={};Object.defineProperty(li,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{Ma=!1}function Ly(t,e,n,r,i,o,l,u,d){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(S){this.onError(S)}}var Ei=!1,uo=null,co=!1,Ua=null,xy={onError:function(t){Ei=!0,uo=t}};function My(t,e,n,r,i,o,l,u,d){Ei=!1,uo=null,Ly.apply(xy,arguments)}function Uy(t,e,n,r,i,o,l,u,d){if(My.apply(this,arguments),Ei){if(Ei){var f=uo;Ei=!1,uo=null}else throw Error(D(198));co||(co=!0,Ua=f)}}function Zn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(Zn(t)!==t)throw Error(D(188))}function Fy(t){var e=t.alternate;if(!e){if(e=Zn(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Kd(i),t;if(o===r)return Kd(i),e;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=o;break}if(u===r){l=!0,r=i,n=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===n){l=!0,n=o,r=i;break}if(u===r){l=!0,r=o,n=i;break}u=u.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function gp(t){return t=Fy(t),t!==null?mp(t):null}function mp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mp(t);if(e!==null)return e;t=t.sibling}return null}var vp=Ge.unstable_scheduleCallback,Gd=Ge.unstable_cancelCallback,jy=Ge.unstable_shouldYield,zy=Ge.unstable_requestPaint,ce=Ge.unstable_now,By=Ge.unstable_getCurrentPriorityLevel,Mu=Ge.unstable_ImmediatePriority,yp=Ge.unstable_UserBlockingPriority,ho=Ge.unstable_NormalPriority,Vy=Ge.unstable_LowPriority,wp=Ge.unstable_IdlePriority,Ho=null,It=null;function $y(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Ho,t,void 0,(t.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Wy,by=Math.log,Hy=Math.LN2;function Wy(t){return t>>>=0,t===0?32:31-(by(t)/Hy|0)|0}var As=64,Ps=4194304;function mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=mi(u):(o&=l,o!==0&&(r=mi(o)))}else l=n&~i,l!==0?r=mi(l):o!==0&&(r=mi(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dt(e),i=1<<n,r|=t[n],e&=~i;return r}function Ky(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-dt(o),u=1<<l,d=i[l];d===-1?(!(u&n)||u&r)&&(i[l]=Ky(u,e)):d<=e&&(t.expiredLanes|=u),o&=~u}}function Fa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _p(){var t=As;return As<<=1,!(As&4194240)&&(As=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ji(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dt(e),t[e]=n}function qy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Uu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Ep(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ip,Fu,Sp,Tp,kp,ja=!1,Rs=[],fn=null,pn=null,gn=null,xi=new Map,Mi=new Map,sn=[],Yy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mi.delete(e.pointerId)}}function ai(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=es(e),e!==null&&Fu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Qy(t,e,n,r,i){switch(e){case"focusin":return fn=ai(fn,t,e,n,r,i),!0;case"dragenter":return pn=ai(pn,t,e,n,r,i),!0;case"mouseover":return gn=ai(gn,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return xi.set(o,ai(xi.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Mi.set(o,ai(Mi.get(o)||null,t,e,n,r,i)),!0}return!1}function Cp(t){var e=Un(t.target);if(e!==null){var n=Zn(e);if(n!==null){if(e=n.tag,e===13){if(e=pp(n),e!==null){t.blockedOn=e,kp(t.priority,function(){Sp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);La=r,n.target.dispatchEvent(r),La=null}else return e=es(n),e!==null&&Fu(e),t.blockedOn=n,!1;e.shift()}return!0}function Yd(t,e,n){qs(t)&&n.delete(e)}function Xy(){ja=!1,fn!==null&&qs(fn)&&(fn=null),pn!==null&&qs(pn)&&(pn=null),gn!==null&&qs(gn)&&(gn=null),xi.forEach(Yd),Mi.forEach(Yd)}function ui(t,e){t.blockedOn===e&&(t.blockedOn=null,ja||(ja=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Xy)))}function Ui(t){function e(i){return ui(i,t)}if(0<Rs.length){ui(Rs[0],t);for(var n=1;n<Rs.length;n++){var r=Rs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&ui(fn,t),pn!==null&&ui(pn,t),gn!==null&&ui(gn,t),xi.forEach(e),Mi.forEach(e),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&sn.shift()}var kr=Yt.ReactCurrentBatchConfig,po=!0;function Jy(t,e,n,r){var i=Y,o=kr.transition;kr.transition=null;try{Y=1,ju(t,e,n,r)}finally{Y=i,kr.transition=o}}function Zy(t,e,n,r){var i=Y,o=kr.transition;kr.transition=null;try{Y=4,ju(t,e,n,r)}finally{Y=i,kr.transition=o}}function ju(t,e,n,r){if(po){var i=za(t,e,n,r);if(i===null)Jl(t,e,r,go,n),qd(t,r);else if(Qy(i,t,e,n,r))r.stopPropagation();else if(qd(t,r),e&4&&-1<Yy.indexOf(t)){for(;i!==null;){var o=es(i);if(o!==null&&Ip(o),o=za(t,e,n,r),o===null&&Jl(t,e,r,go,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jl(t,e,r,null,n)}}var go=null;function za(t,e,n,r){if(go=null,t=xu(r),t=Un(t),t!==null)if(e=Zn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return go=t,null}function Ap(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case Mu:return 1;case yp:return 4;case ho:case Vy:return 16;case wp:return 536870912;default:return 16}default:return 16}}var dn=null,zu=null,Ys=null;function Pp(){if(Ys)return Ys;var t,e=zu,n=e.length,r,i="value"in dn?dn.value:dn.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[o-r];r++);return Ys=i.slice(t,1<r?1-r:void 0)}function Qs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ns(){return!0}function Qd(){return!1}function Ye(t){function e(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ns:Qd,this.isPropagationStopped=Qd,this}return oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),e}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Ye($r),Zi=oe({},$r,{view:0,detail:0}),e0=Ye(Zi),bl,Hl,ci,Wo=oe({},Zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?(bl=t.screenX-ci.screenX,Hl=t.screenY-ci.screenY):Hl=bl=0,ci=t),bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),Xd=Ye(Wo),t0=oe({},Wo,{dataTransfer:0}),n0=Ye(t0),r0=oe({},Zi,{relatedTarget:0}),Wl=Ye(r0),i0=oe({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=Ye(i0),o0=oe({},$r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l0=Ye(o0),a0=oe({},$r,{data:0}),Jd=Ye(a0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=d0[t])?!!e[t]:!1}function Vu(){return h0}var f0=oe({},Zi,{key:function(t){if(t.key){var e=u0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vu,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=Ye(f0),g0=oe({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=Ye(g0),m0=oe({},Zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vu}),v0=Ye(m0),y0=oe({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=Ye(y0),_0=oe({},Wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),E0=Ye(_0),I0=[9,13,27,32],$u=Ht&&"CompositionEvent"in window,Ii=null;Ht&&"documentMode"in document&&(Ii=document.documentMode);var S0=Ht&&"TextEvent"in window&&!Ii,Rp=Ht&&(!$u||Ii&&8<Ii&&11>=Ii),eh=" ",th=!1;function Np(t,e){switch(t){case"keyup":return I0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var dr=!1;function T0(t,e){switch(t){case"compositionend":return Op(e);case"keypress":return e.which!==32?null:(th=!0,eh);case"textInput":return t=e.data,t===eh&&th?null:t;default:return null}}function k0(t,e){if(dr)return t==="compositionend"||!$u&&Np(t,e)?(t=Pp(),Ys=zu=dn=null,dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rp&&e.locale!=="ko"?null:e.data;default:return null}}var C0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C0[t.type]:e==="textarea"}function Dp(t,e,n,r){up(r),e=mo(e,"onChange"),0<e.length&&(n=new Bu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Si=null,Fi=null;function A0(t){bp(t,0)}function Ko(t){var e=pr(t);if(np(e))return t}function P0(t,e){if(t==="change")return e}var Lp=!1;if(Ht){var Kl;if(Ht){var Gl="oninput"in document;if(!Gl){var rh=document.createElement("div");rh.setAttribute("oninput","return;"),Gl=typeof rh.oninput=="function"}Kl=Gl}else Kl=!1;Lp=Kl&&(!document.documentMode||9<document.documentMode)}function ih(){Si&&(Si.detachEvent("onpropertychange",xp),Fi=Si=null)}function xp(t){if(t.propertyName==="value"&&Ko(Fi)){var e=[];Dp(e,Fi,t,xu(t)),fp(A0,e)}}function R0(t,e,n){t==="focusin"?(ih(),Si=e,Fi=n,Si.attachEvent("onpropertychange",xp)):t==="focusout"&&ih()}function N0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Fi)}function O0(t,e){if(t==="click")return Ko(e)}function D0(t,e){if(t==="input"||t==="change")return Ko(e)}function L0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:L0;function ji(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ea.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function sh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oh(t,e){var n=sh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sh(n)}}function Mp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Mp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Up(){for(var t=window,e=ao();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ao(t.document)}return e}function bu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x0(t){var e=Up(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Mp(n.ownerDocument.documentElement,n)){if(r!==null&&bu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=oh(n,o);var l=oh(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M0=Ht&&"documentMode"in document&&11>=document.documentMode,hr=null,Ba=null,Ti=null,Va=!1;function lh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Va||hr==null||hr!==ao(r)||(r=hr,"selectionStart"in r&&bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ti&&ji(Ti,r)||(Ti=r,r=mo(Ba,"onSelect"),0<r.length&&(e=new Bu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=hr)))}function Os(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fr={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},ql={},Fp={};Ht&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Go(t){if(ql[t])return ql[t];if(!fr[t])return t;var e=fr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fp)return ql[t]=e[n];return t}var jp=Go("animationend"),zp=Go("animationiteration"),Bp=Go("animationstart"),Vp=Go("transitionend"),$p=new Map,ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){$p.set(t,e),Jn(e,[t])}for(var Yl=0;Yl<ah.length;Yl++){var Ql=ah[Yl],U0=Ql.toLowerCase(),F0=Ql[0].toUpperCase()+Ql.slice(1);kn(U0,"on"+F0)}kn(jp,"onAnimationEnd");kn(zp,"onAnimationIteration");kn(Bp,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Vp,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function uh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Uy(r,e,void 0,t),t.currentTarget=null}function bp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var l=r.length-1;0<=l;l--){var u=r[l],d=u.instance,f=u.currentTarget;if(u=u.listener,d!==o&&i.isPropagationStopped())break e;uh(i,u,f),o=d}else for(l=0;l<r.length;l++){if(u=r[l],d=u.instance,f=u.currentTarget,u=u.listener,d!==o&&i.isPropagationStopped())break e;uh(i,u,f),o=d}}}if(co)throw t=Ua,co=!1,Ua=null,t}function ee(t,e){var n=e[Ka];n===void 0&&(n=e[Ka]=new Set);var r=t+"__bubble";n.has(r)||(Hp(e,t,2,!1),n.add(r))}function Xl(t,e,n){var r=0;e&&(r|=4),Hp(n,t,r,e)}var Ds="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[Ds]){t[Ds]=!0,Xf.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||Xl(n,!1,t),Xl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ds]||(e[Ds]=!0,Xl("selectionchange",!1,e))}}function Hp(t,e,n,r){switch(Ap(e)){case 1:var i=Jy;break;case 4:i=Zy;break;default:i=ju}n=i.bind(null,e,n,t),i=void 0,!Ma||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Jl(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var d=l.tag;if((d===3||d===4)&&(d=l.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Un(u),l===null)return;if(d=l.tag,d===5||d===6){r=o=l;continue e}u=u.parentNode}}r=r.return}fp(function(){var f=o,S=xu(n),A=[];e:{var C=$p.get(t);if(C!==void 0){var O=Bu,R=t;switch(t){case"keypress":if(Qs(n)===0)break e;case"keydown":case"keyup":O=p0;break;case"focusin":R="focus",O=Wl;break;case"focusout":R="blur",O=Wl;break;case"beforeblur":case"afterblur":O=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=v0;break;case jp:case zp:case Bp:O=s0;break;case Vp:O=w0;break;case"scroll":O=e0;break;case"wheel":O=E0;break;case"copy":case"cut":case"paste":O=l0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Zd}var L=(e&4)!==0,x=!L&&t==="scroll",E=L?C!==null?C+"Capture":null:C;L=[];for(var w=f,I;w!==null;){I=w;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,E!==null&&(N=Li(w,E),N!=null&&L.push(Bi(w,N,I)))),x)break;w=w.return}0<L.length&&(C=new O(C,R,null,n,S),A.push({event:C,listeners:L}))}}if(!(e&7)){e:{if(C=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",C&&n!==La&&(R=n.relatedTarget||n.fromElement)&&(Un(R)||R[Wt]))break e;if((O||C)&&(C=S.window===S?S:(C=S.ownerDocument)?C.defaultView||C.parentWindow:window,O?(R=n.relatedTarget||n.toElement,O=f,R=R?Un(R):null,R!==null&&(x=Zn(R),R!==x||R.tag!==5&&R.tag!==6)&&(R=null)):(O=null,R=f),O!==R)){if(L=Xd,N="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(L=Zd,N="onPointerLeave",E="onPointerEnter",w="pointer"),x=O==null?C:pr(O),I=R==null?C:pr(R),C=new L(N,w+"leave",O,n,S),C.target=x,C.relatedTarget=I,N=null,Un(S)===f&&(L=new L(E,w+"enter",R,n,S),L.target=I,L.relatedTarget=x,N=L),x=N,O&&R)t:{for(L=O,E=R,w=0,I=L;I;I=ar(I))w++;for(I=0,N=E;N;N=ar(N))I++;for(;0<w-I;)L=ar(L),w--;for(;0<I-w;)E=ar(E),I--;for(;w--;){if(L===E||E!==null&&L===E.alternate)break t;L=ar(L),E=ar(E)}L=null}else L=null;O!==null&&ch(A,C,O,L,!1),R!==null&&x!==null&&ch(A,x,R,L,!0)}}e:{if(C=f?pr(f):window,O=C.nodeName&&C.nodeName.toLowerCase(),O==="select"||O==="input"&&C.type==="file")var U=P0;else if(nh(C))if(Lp)U=D0;else{U=N0;var F=R0}else(O=C.nodeName)&&O.toLowerCase()==="input"&&(C.type==="checkbox"||C.type==="radio")&&(U=O0);if(U&&(U=U(t,f))){Dp(A,U,n,S);break e}F&&F(t,C,f),t==="focusout"&&(F=C._wrapperState)&&F.controlled&&C.type==="number"&&Pa(C,"number",C.value)}switch(F=f?pr(f):window,t){case"focusin":(nh(F)||F.contentEditable==="true")&&(hr=F,Ba=f,Ti=null);break;case"focusout":Ti=Ba=hr=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,lh(A,n,S);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":lh(A,n,S)}var m;if($u)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else dr?Np(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(Rp&&n.locale!=="ko"&&(dr||p!=="onCompositionStart"?p==="onCompositionEnd"&&dr&&(m=Pp()):(dn=S,zu="value"in dn?dn.value:dn.textContent,dr=!0)),F=mo(f,p),0<F.length&&(p=new Jd(p,t,null,n,S),A.push({event:p,listeners:F}),m?p.data=m:(m=Op(n),m!==null&&(p.data=m)))),(m=S0?T0(t,n):k0(t,n))&&(f=mo(f,"onBeforeInput"),0<f.length&&(S=new Jd("onBeforeInput","beforeinput",null,n,S),A.push({event:S,listeners:f}),S.data=m))}bp(A,e)})}function Bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function mo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Li(t,n),o!=null&&r.unshift(Bi(t,o,i)),o=Li(t,e),o!=null&&r.push(Bi(t,o,i))),t=t.return}return r}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ch(t,e,n,r,i){for(var o=e._reactName,l=[];n!==null&&n!==r;){var u=n,d=u.alternate,f=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&f!==null&&(u=f,i?(d=Li(n,o),d!=null&&l.unshift(Bi(n,d,u))):i||(d=Li(n,o),d!=null&&l.push(Bi(n,d,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var z0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function dh(t){return(typeof t=="string"?t:""+t).replace(z0,`
`).replace(B0,"")}function Ls(t,e,n){if(e=dh(e),dh(t)!==e&&n)throw Error(D(425))}function vo(){}var $a=null,ba=null;function Ha(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wa=typeof setTimeout=="function"?setTimeout:void 0,V0=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(t){return hh.resolve(null).then(t).catch(b0)}:Wa;function b0(t){setTimeout(function(){throw t})}function Zl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ui(e)}function mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var br=Math.random().toString(36).slice(2),_t="__reactFiber$"+br,Vi="__reactProps$"+br,Wt="__reactContainer$"+br,Ka="__reactEvents$"+br,H0="__reactListeners$"+br,W0="__reactHandles$"+br;function Un(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fh(t);t!==null;){if(n=t[_t])return n;t=fh(t)}return e}t=n,n=t.parentNode}return null}function es(t){return t=t[_t]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function pr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function qo(t){return t[Vi]||null}var Ga=[],gr=-1;function Cn(t){return{current:t}}function te(t){0>gr||(t.current=Ga[gr],Ga[gr]=null,gr--)}function J(t,e){gr++,Ga[gr]=t.current,t.current=e}var Tn={},Re=Cn(Tn),ze=Cn(!1),$n=Tn;function Lr(t,e){var n=t.type.contextTypes;if(!n)return Tn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function yo(){te(ze),te(Re)}function ph(t,e,n){if(Re.current!==Tn)throw Error(D(168));J(Re,e),J(ze,n)}function Wp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,Ry(t)||"Unknown",i));return oe({},n,r)}function wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tn,$n=Re.current,J(Re,t),J(ze,ze.current),!0}function gh(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=Wp(t,e,$n),r.__reactInternalMemoizedMergedChildContext=t,te(ze),te(Re),J(Re,t)):te(ze),J(ze,n)}var Ut=null,Yo=!1,ea=!1;function Kp(t){Ut===null?Ut=[t]:Ut.push(t)}function K0(t){Yo=!0,Kp(t)}function An(){if(!ea&&Ut!==null){ea=!0;var t=0,e=Y;try{var n=Ut;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,Yo=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),vp(Mu,An),i}finally{Y=e,ea=!1}}return null}var mr=[],vr=0,_o=null,Eo=0,Je=[],Ze=0,bn=null,Ft=1,jt="";function Ln(t,e){mr[vr++]=Eo,mr[vr++]=_o,_o=t,Eo=e}function Gp(t,e,n){Je[Ze++]=Ft,Je[Ze++]=jt,Je[Ze++]=bn,bn=t;var r=Ft;t=jt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(e)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ft=1<<32-dt(e)+i|n<<i|r,jt=o+t}else Ft=1<<o|n<<i|r,jt=t}function Hu(t){t.return!==null&&(Ln(t,1),Gp(t,1,0))}function Wu(t){for(;t===_o;)_o=mr[--vr],mr[vr]=null,Eo=mr[--vr],mr[vr]=null;for(;t===bn;)bn=Je[--Ze],Je[Ze]=null,jt=Je[--Ze],Je[Ze]=null,Ft=Je[--Ze],Je[Ze]=null}var We=null,be=null,ne=!1,ct=null;function qp(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,We=t,be=mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,We=t,be=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bn!==null?{id:Ft,overflow:jt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,We=t,be=null,!0):!1;default:return!1}}function qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ya(t){if(ne){var e=be;if(e){var n=e;if(!mh(t,e)){if(qa(t))throw Error(D(418));e=mn(n.nextSibling);var r=We;e&&mh(t,e)?qp(r,n):(t.flags=t.flags&-4097|2,ne=!1,We=t)}}else{if(qa(t))throw Error(D(418));t.flags=t.flags&-4097|2,ne=!1,We=t}}}function vh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;We=t}function xs(t){if(t!==We)return!1;if(!ne)return vh(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ha(t.type,t.memoizedProps)),e&&(e=be)){if(qa(t))throw Yp(),Error(D(418));for(;e;)qp(t,e),e=mn(e.nextSibling)}if(vh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){be=mn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}be=null}}else be=We?mn(t.stateNode.nextSibling):null;return!0}function Yp(){for(var t=be;t;)t=mn(t.nextSibling)}function xr(){be=We=null,ne=!1}function Ku(t){ct===null?ct=[t]:ct.push(t)}var G0=Yt.ReactCurrentBatchConfig;function di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Ms(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yh(t){var e=t._init;return e(t._payload)}function Qp(t){function e(E,w){if(t){var I=E.deletions;I===null?(E.deletions=[w],E.flags|=16):I.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=_n(E,w),E.index=0,E.sibling=null,E}function o(E,w,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<w?(E.flags|=2,w):I):(E.flags|=2,w)):(E.flags|=1048576,w)}function l(E){return t&&E.alternate===null&&(E.flags|=2),E}function u(E,w,I,N){return w===null||w.tag!==6?(w=la(I,E.mode,N),w.return=E,w):(w=i(w,I),w.return=E,w)}function d(E,w,I,N){var U=I.type;return U===cr?S(E,w,I.props.children,N,I.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===nn&&yh(U)===w.type)?(N=i(w,I.props),N.ref=di(E,w,I),N.return=E,N):(N=ro(I.type,I.key,I.props,null,E.mode,N),N.ref=di(E,w,I),N.return=E,N)}function f(E,w,I,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=aa(I,E.mode,N),w.return=E,w):(w=i(w,I.children||[]),w.return=E,w)}function S(E,w,I,N,U){return w===null||w.tag!==7?(w=Vn(I,E.mode,N,U),w.return=E,w):(w=i(w,I),w.return=E,w)}function A(E,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=la(""+w,E.mode,I),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ts:return I=ro(w.type,w.key,w.props,null,E.mode,I),I.ref=di(E,null,w),I.return=E,I;case ur:return w=aa(w,E.mode,I),w.return=E,w;case nn:var N=w._init;return A(E,N(w._payload),I)}if(gi(w)||oi(w))return w=Vn(w,E.mode,I,null),w.return=E,w;Ms(E,w)}return null}function C(E,w,I,N){var U=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return U!==null?null:u(E,w,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ts:return I.key===U?d(E,w,I,N):null;case ur:return I.key===U?f(E,w,I,N):null;case nn:return U=I._init,C(E,w,U(I._payload),N)}if(gi(I)||oi(I))return U!==null?null:S(E,w,I,N,null);Ms(E,I)}return null}function O(E,w,I,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return E=E.get(I)||null,u(w,E,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ts:return E=E.get(N.key===null?I:N.key)||null,d(w,E,N,U);case ur:return E=E.get(N.key===null?I:N.key)||null,f(w,E,N,U);case nn:var F=N._init;return O(E,w,I,F(N._payload),U)}if(gi(N)||oi(N))return E=E.get(I)||null,S(w,E,N,U,null);Ms(w,N)}return null}function R(E,w,I,N){for(var U=null,F=null,m=w,p=w=0,g=null;m!==null&&p<I.length;p++){m.index>p?(g=m,m=null):g=m.sibling;var y=C(E,m,I[p],N);if(y===null){m===null&&(m=g);break}t&&m&&y.alternate===null&&e(E,m),w=o(y,w,p),F===null?U=y:F.sibling=y,F=y,m=g}if(p===I.length)return n(E,m),ne&&Ln(E,p),U;if(m===null){for(;p<I.length;p++)m=A(E,I[p],N),m!==null&&(w=o(m,w,p),F===null?U=m:F.sibling=m,F=m);return ne&&Ln(E,p),U}for(m=r(E,m);p<I.length;p++)g=O(m,E,p,I[p],N),g!==null&&(t&&g.alternate!==null&&m.delete(g.key===null?p:g.key),w=o(g,w,p),F===null?U=g:F.sibling=g,F=g);return t&&m.forEach(function(_){return e(E,_)}),ne&&Ln(E,p),U}function L(E,w,I,N){var U=oi(I);if(typeof U!="function")throw Error(D(150));if(I=U.call(I),I==null)throw Error(D(151));for(var F=U=null,m=w,p=w=0,g=null,y=I.next();m!==null&&!y.done;p++,y=I.next()){m.index>p?(g=m,m=null):g=m.sibling;var _=C(E,m,y.value,N);if(_===null){m===null&&(m=g);break}t&&m&&_.alternate===null&&e(E,m),w=o(_,w,p),F===null?U=_:F.sibling=_,F=_,m=g}if(y.done)return n(E,m),ne&&Ln(E,p),U;if(m===null){for(;!y.done;p++,y=I.next())y=A(E,y.value,N),y!==null&&(w=o(y,w,p),F===null?U=y:F.sibling=y,F=y);return ne&&Ln(E,p),U}for(m=r(E,m);!y.done;p++,y=I.next())y=O(m,E,p,y.value,N),y!==null&&(t&&y.alternate!==null&&m.delete(y.key===null?p:y.key),w=o(y,w,p),F===null?U=y:F.sibling=y,F=y);return t&&m.forEach(function(k){return e(E,k)}),ne&&Ln(E,p),U}function x(E,w,I,N){if(typeof I=="object"&&I!==null&&I.type===cr&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ts:e:{for(var U=I.key,F=w;F!==null;){if(F.key===U){if(U=I.type,U===cr){if(F.tag===7){n(E,F.sibling),w=i(F,I.props.children),w.return=E,E=w;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===nn&&yh(U)===F.type){n(E,F.sibling),w=i(F,I.props),w.ref=di(E,F,I),w.return=E,E=w;break e}n(E,F);break}else e(E,F);F=F.sibling}I.type===cr?(w=Vn(I.props.children,E.mode,N,I.key),w.return=E,E=w):(N=ro(I.type,I.key,I.props,null,E.mode,N),N.ref=di(E,w,I),N.return=E,E=N)}return l(E);case ur:e:{for(F=I.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(E,w.sibling),w=i(w,I.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=aa(I,E.mode,N),w.return=E,E=w}return l(E);case nn:return F=I._init,x(E,w,F(I._payload),N)}if(gi(I))return R(E,w,I,N);if(oi(I))return L(E,w,I,N);Ms(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,I),w.return=E,E=w):(n(E,w),w=la(I,E.mode,N),w.return=E,E=w),l(E)):n(E,w)}return x}var Mr=Qp(!0),Xp=Qp(!1),Io=Cn(null),So=null,yr=null,Gu=null;function qu(){Gu=yr=So=null}function Yu(t){var e=Io.current;te(Io),t._currentValue=e}function Qa(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Cr(t,e){So=t,Gu=yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(je=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Gu!==t)if(t={context:t,memoizedValue:e,next:null},yr===null){if(So===null)throw Error(D(308));yr=t,So.dependencies={lanes:0,firstContext:t}}else yr=yr.next=t;return e}var Fn=null;function Qu(t){Fn===null?Fn=[t]:Fn.push(t)}function Jp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,Qu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function Xs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uu(t,n)}}function wh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function To(t,e,n,r){var i=t.updateQueue;rn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var d=u,f=d.next;d.next=null,l===null?o=f:l.next=f,l=d;var S=t.alternate;S!==null&&(S=S.updateQueue,u=S.lastBaseUpdate,u!==l&&(u===null?S.firstBaseUpdate=f:u.next=f,S.lastBaseUpdate=d))}if(o!==null){var A=i.baseState;l=0,S=f=d=null,u=o;do{var C=u.lane,O=u.eventTime;if((r&C)===C){S!==null&&(S=S.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=t,L=u;switch(C=e,O=n,L.tag){case 1:if(R=L.payload,typeof R=="function"){A=R.call(O,A,C);break e}A=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=L.payload,C=typeof R=="function"?R.call(O,A,C):R,C==null)break e;A=oe({},A,C);break e;case 2:rn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,C=i.effects,C===null?i.effects=[u]:C.push(u))}else O={eventTime:O,lane:C,tag:u.tag,payload:u.payload,callback:u.callback,next:null},S===null?(f=S=O,d=A):S=S.next=O,l|=C;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;C=u,u=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);if(S===null&&(d=A),i.baseState=d,i.firstBaseUpdate=f,i.lastBaseUpdate=S,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Wn|=l,t.lanes=l,t.memoizedState=A}}function _h(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ts={},St=Cn(ts),$i=Cn(ts),bi=Cn(ts);function jn(t){if(t===ts)throw Error(D(174));return t}function Ju(t,e){switch(J(bi,e),J($i,t),J(St,ts),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Na(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Na(e,t)}te(St),J(St,e)}function Ur(){te(St),te($i),te(bi)}function eg(t){jn(bi.current);var e=jn(St.current),n=Na(e,t.type);e!==n&&(J($i,t),J(St,n))}function Zu(t){$i.current===t&&(te(St),te($i))}var ie=Cn(0);function ko(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ta=[];function ec(){for(var t=0;t<ta.length;t++)ta[t]._workInProgressVersionPrimary=null;ta.length=0}var Js=Yt.ReactCurrentDispatcher,na=Yt.ReactCurrentBatchConfig,Hn=0,se=null,he=null,pe=null,Co=!1,ki=!1,Hi=0,q0=0;function Se(){throw Error(D(321))}function tc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function nc(t,e,n,r,i,o){if(Hn=o,se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Js.current=t===null||t.memoizedState===null?J0:Z0,t=n(r,i),ki){o=0;do{if(ki=!1,Hi=0,25<=o)throw Error(D(301));o+=1,pe=he=null,e.updateQueue=null,Js.current=ew,t=n(r,i)}while(ki)}if(Js.current=Ao,e=he!==null&&he.next!==null,Hn=0,pe=he=se=null,Co=!1,e)throw Error(D(300));return t}function rc(){var t=Hi!==0;return Hi=0,t}function yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?se.memoizedState=pe=t:pe=pe.next=t,pe}function st(){if(he===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=pe===null?se.memoizedState:pe.next;if(e!==null)pe=e,he=t;else{if(t===null)throw Error(D(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},pe===null?se.memoizedState=pe=t:pe=pe.next=t}return pe}function Wi(t,e){return typeof e=="function"?e(t):e}function ra(t){var e=st(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,d=null,f=o;do{var S=f.lane;if((Hn&S)===S)d!==null&&(d=d.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var A={lane:S,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};d===null?(u=d=A,l=r):d=d.next=A,se.lanes|=S,Wn|=S}f=f.next}while(f!==null&&f!==o);d===null?l=r:d.next=u,ft(r,e.memoizedState)||(je=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=d,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,se.lanes|=o,Wn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ia(t){var e=st(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=t(o,l.action),l=l.next;while(l!==i);ft(o,e.memoizedState)||(je=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function tg(){}function ng(t,e){var n=se,r=st(),i=e(),o=!ft(r.memoizedState,i);if(o&&(r.memoizedState=i,je=!0),r=r.queue,ic(sg.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Ki(9,ig.bind(null,n,r,i,e),void 0,null),ge===null)throw Error(D(349));Hn&30||rg(n,e,i)}return i}function rg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ig(t,e,n,r){e.value=n,e.getSnapshot=r,og(e)&&lg(t)}function sg(t,e,n){return n(function(){og(e)&&lg(t)})}function og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function lg(t){var e=Kt(t,1);e!==null&&ht(e,t,1,-1)}function Eh(t){var e=yt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},e.queue=t,t=t.dispatch=X0.bind(null,se,t),[e.memoizedState,t]}function Ki(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=se.updateQueue,e===null?(e={lastEffect:null,stores:null},se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ag(){return st().memoizedState}function Zs(t,e,n,r){var i=yt();se.flags|=t,i.memoizedState=Ki(1|e,n,void 0,r===void 0?null:r)}function Qo(t,e,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(he!==null){var l=he.memoizedState;if(o=l.destroy,r!==null&&tc(r,l.deps)){i.memoizedState=Ki(e,n,o,r);return}}se.flags|=t,i.memoizedState=Ki(1|e,n,o,r)}function Ih(t,e){return Zs(8390656,8,t,e)}function ic(t,e){return Qo(2048,8,t,e)}function ug(t,e){return Qo(4,2,t,e)}function cg(t,e){return Qo(4,4,t,e)}function dg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hg(t,e,n){return n=n!=null?n.concat([t]):null,Qo(4,4,dg.bind(null,e,t),n)}function sc(){}function fg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pg(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function gg(t,e,n){return Hn&21?(ft(n,e)||(n=_p(),se.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,je=!0),t.memoizedState=n)}function Y0(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=na.transition;na.transition={};try{t(!1),e()}finally{Y=n,na.transition=r}}function mg(){return st().memoizedState}function Q0(t,e,n){var r=wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vg(t))yg(e,n);else if(n=Jp(t,e,n,r),n!==null){var i=xe();ht(n,t,r,i),wg(n,e,r)}}function X0(t,e,n){var r=wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(t))yg(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(i.hasEagerState=!0,i.eagerState=u,ft(u,l)){var d=e.interleaved;d===null?(i.next=i,Qu(e)):(i.next=d.next,d.next=i),e.interleaved=i;return}}catch{}finally{}n=Jp(t,e,i,r),n!==null&&(i=xe(),ht(n,t,r,i),wg(n,e,r))}}function vg(t){var e=t.alternate;return t===se||e!==null&&e===se}function yg(t,e){ki=Co=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uu(t,n)}}var Ao={readContext:it,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},J0={readContext:it,useCallback:function(t,e){return yt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:Ih,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zs(4194308,4,dg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zs(4,2,t,e)},useMemo:function(t,e){var n=yt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=yt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Q0.bind(null,se,t),[r.memoizedState,t]},useRef:function(t){var e=yt();return t={current:t},e.memoizedState=t},useState:Eh,useDebugValue:sc,useDeferredValue:function(t){return yt().memoizedState=t},useTransition:function(){var t=Eh(!1),e=t[0];return t=Y0.bind(null,t[1]),yt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=se,i=yt();if(ne){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),ge===null)throw Error(D(349));Hn&30||rg(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Ih(sg.bind(null,r,o,t),[t]),r.flags|=2048,Ki(9,ig.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=yt(),e=ge.identifierPrefix;if(ne){var n=jt,r=Ft;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=q0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z0={readContext:it,useCallback:fg,useContext:it,useEffect:ic,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:ra,useRef:ag,useState:function(){return ra(Wi)},useDebugValue:sc,useDeferredValue:function(t){var e=st();return gg(e,he.memoizedState,t)},useTransition:function(){var t=ra(Wi)[0],e=st().memoizedState;return[t,e]},useMutableSource:tg,useSyncExternalStore:ng,useId:mg,unstable_isNewReconciler:!1},ew={readContext:it,useCallback:fg,useContext:it,useEffect:ic,useImperativeHandle:hg,useInsertionEffect:ug,useLayoutEffect:cg,useMemo:pg,useReducer:ia,useRef:ag,useState:function(){return ia(Wi)},useDebugValue:sc,useDeferredValue:function(t){var e=st();return he===null?e.memoizedState=t:gg(e,he.memoizedState,t)},useTransition:function(){var t=ia(Wi)[0],e=st().memoizedState;return[t,e]},useMutableSource:tg,useSyncExternalStore:ng,useId:mg,unstable_isNewReconciler:!1};function at(t,e){if(t&&t.defaultProps){e=oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xo={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xe(),i=wn(t),o=$t(r,i);o.payload=e,n!=null&&(o.callback=n),e=vn(t,o,i),e!==null&&(ht(e,t,i,r),Xs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xe(),i=wn(t),o=$t(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=vn(t,o,i),e!==null&&(ht(e,t,i,r),Xs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xe(),r=wn(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),e=vn(t,i,r),e!==null&&(ht(e,t,r,n),Xs(e,t,r))}};function Sh(t,e,n,r,i,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,l):e.prototype&&e.prototype.isPureReactComponent?!ji(n,r)||!ji(i,o):!0}function _g(t,e,n){var r=!1,i=Tn,o=e.contextType;return typeof o=="object"&&o!==null?o=it(o):(i=Be(e)?$n:Re.current,r=e.contextTypes,o=(r=r!=null)?Lr(t,i):Tn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Th(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xo.enqueueReplaceState(e,e.state,null)}function Ja(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=it(o):(o=Be(e)?$n:Re.current,i.context=Lr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Xa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xo.enqueueReplaceState(i,i.state,null),To(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fr(t,e){try{var n="",r=e;do n+=Py(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function sa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Za(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tw=typeof WeakMap=="function"?WeakMap:Map;function Eg(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ro||(Ro=!0,uu=r),Za(t,e)},n}function Ig(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Za(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Za(t,e),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function kh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=gw.bind(null,t,e,n),e.then(t,t))}function Ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ah(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,vn(n,e,1))),n.lanes|=1),t)}var nw=Yt.ReactCurrentOwner,je=!1;function Le(t,e,n,r){e.child=t===null?Xp(e,null,n,r):Mr(e,t.child,n,r)}function Ph(t,e,n,r,i){n=n.render;var o=e.ref;return Cr(e,i),r=nc(t,e,n,r,o,i),n=rc(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&n&&Hu(e),e.flags|=1,Le(t,e,r,i),e.child)}function Rh(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!fc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Sg(t,e,o,r,i)):(t=ro(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ji,n(l,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=_n(o,r),t.ref=e.ref,t.return=e,e.child=t}function Sg(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ji(o,r)&&t.ref===e.ref)if(je=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(je=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return eu(t,e,n,r,i)}function Tg(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(_r,$e),$e|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(_r,$e),$e|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(_r,$e),$e|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,J(_r,$e),$e|=r;return Le(t,e,i,n),e.child}function kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eu(t,e,n,r,i){var o=Be(n)?$n:Re.current;return o=Lr(e,o),Cr(e,i),n=nc(t,e,n,r,o,i),r=rc(),t!==null&&!je?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(ne&&r&&Hu(e),e.flags|=1,Le(t,e,n,i),e.child)}function Nh(t,e,n,r,i){if(Be(n)){var o=!0;wo(e)}else o=!1;if(Cr(e,i),e.stateNode===null)eo(t,e),_g(e,n,r),Ja(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var d=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=it(f):(f=Be(n)?$n:Re.current,f=Lr(e,f));var S=n.getDerivedStateFromProps,A=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function";A||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||d!==f)&&Th(e,l,r,f),rn=!1;var C=e.memoizedState;l.state=C,To(e,r,l,i),d=e.memoizedState,u!==r||C!==d||ze.current||rn?(typeof S=="function"&&(Xa(e,n,S,r),d=e.memoizedState),(u=rn||Sh(e,n,u,r,C,d,f))?(A||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=d),l.props=r,l.state=d,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,Zp(t,e),u=e.memoizedProps,f=e.type===e.elementType?u:at(e.type,u),l.props=f,A=e.pendingProps,C=l.context,d=n.contextType,typeof d=="object"&&d!==null?d=it(d):(d=Be(n)?$n:Re.current,d=Lr(e,d));var O=n.getDerivedStateFromProps;(S=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==A||C!==d)&&Th(e,l,r,d),rn=!1,C=e.memoizedState,l.state=C,To(e,r,l,i);var R=e.memoizedState;u!==A||C!==R||ze.current||rn?(typeof O=="function"&&(Xa(e,n,O,r),R=e.memoizedState),(f=rn||Sh(e,n,f,r,C,R,d)||!1)?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,R,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,R,d)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),l.props=r,l.state=R,l.context=d,r=f):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&C===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&C===t.memoizedState||(e.flags|=1024),r=!1)}return tu(t,e,n,r,o,i)}function tu(t,e,n,r,i,o){kg(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&gh(e,n,!1),Gt(t,e,o);r=e.stateNode,nw.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=Mr(e,t.child,null,o),e.child=Mr(e,null,u,o)):Le(t,e,u,o),e.memoizedState=r.state,i&&gh(e,n,!0),e.child}function Cg(t){var e=t.stateNode;e.pendingContext?ph(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ph(t,e.context,!1),Ju(t,e.containerInfo)}function Oh(t,e,n,r,i){return xr(),Ku(i),e.flags|=256,Le(t,e,n,r),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ag(t,e,n){var r=e.pendingProps,i=ie.current,o=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(ie,i&1),t===null)return Ya(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,o?(r=e.mode,o=e.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=el(l,r,0,null),t=Vn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ru(n),e.memoizedState=nu,t):oc(e,l));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return rw(t,e,l,r,u,i,n);if(o){o=r.fallback,l=e.mode,i=t.child,u=i.sibling;var d={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=d,e.deletions=null):(r=_n(i,d),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=_n(u,o):(o=Vn(o,l,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,l=t.child.memoizedState,l=l===null?ru(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=nu,r}return o=t.child,t=o.sibling,r=_n(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function oc(t,e){return e=el({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Us(t,e,n,r){return r!==null&&Ku(r),Mr(e,t.child,null,n),t=oc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rw(t,e,n,r,i,o,l){if(n)return e.flags&256?(e.flags&=-257,r=sa(Error(D(422))),Us(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=el({mode:"visible",children:r.children},i,0,null),o=Vn(o,i,l,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Mr(e,t.child,null,l),e.child.memoizedState=ru(l),e.memoizedState=nu,o);if(!(e.mode&1))return Us(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(D(419)),r=sa(o,r,void 0),Us(t,e,l,r)}if(u=(l&t.childLanes)!==0,je||u){if(r=ge,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(t,i),ht(r,t,i,-1))}return hc(),r=sa(Error(D(421))),Us(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=mw.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,be=mn(i.nextSibling),We=e,ne=!0,ct=null,t!==null&&(Je[Ze++]=Ft,Je[Ze++]=jt,Je[Ze++]=bn,Ft=t.id,jt=t.overflow,bn=e),e=oc(e,r.children),e.flags|=4096,e)}function Dh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qa(t.return,e,n)}function oa(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Pg(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Le(t,e,r.children,n),r=ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dh(t,n,e);else if(t.tag===19)Dh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ko(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),oa(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ko(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}oa(e,!0,n,null,o);break;case"together":oa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iw(t,e,n){switch(e.tag){case 3:Cg(e),xr();break;case 5:eg(e);break;case 1:Be(e.type)&&wo(e);break;case 4:Ju(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(Io,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(ie,ie.current&1),e.flags|=128,null):n&e.child.childLanes?Ag(t,e,n):(J(ie,ie.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);J(ie,ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Pg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(ie,ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Tg(t,e,n)}return Gt(t,e,n)}var Rg,iu,Ng,Og;Rg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};Ng=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(St.current);var o=null;switch(n){case"input":i=Ca(t,i),r=Ca(t,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=Ra(t,i),r=Ra(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vo)}Oa(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Oi.hasOwnProperty(f)?o||(o=[]):(o=o||[]).push(f,null));for(f in r){var d=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&d!==u&&(d!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||d&&d.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in d)d.hasOwnProperty(l)&&u[l]!==d[l]&&(n||(n={}),n[l]=d[l])}else n||(o||(o=[]),o.push(f,n)),n=d;else f==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(o=o||[]).push(f,d)):f==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(f,""+d):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(f)?(d!=null&&f==="onScroll"&&ee("scroll",t),o||u===d||(o=[])):(o=o||[]).push(f,d))}n&&(o=o||[]).push("style",n);var f=o;(e.updateQueue=f)&&(e.flags|=4)}};Og=function(t,e,n,r){n!==r&&(e.flags|=4)};function hi(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Te(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sw(t,e,n){var r=e.pendingProps;switch(Wu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(e),null;case 1:return Be(e.type)&&yo(),Te(e),null;case 3:return r=e.stateNode,Ur(),te(ze),te(Re),ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ct!==null&&(hu(ct),ct=null))),iu(t,e),Te(e),null;case 5:Zu(e);var i=jn(bi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Te(e),null}if(t=jn(St.current),xs(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[_t]=e,r[Vi]=o,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)ee(vi[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Vd(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":bd(r,o),ee("invalid",r)}Oa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&Ls(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&Ls(r.textContent,u,t),i=["children",""+u]):Oi.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":ks(r),$d(r,o,!0);break;case"textarea":ks(r),Hd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[_t]=e,t[Vi]=r,Rg(t,e,!1,!1),e.stateNode=t;e:{switch(l=Da(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)ee(vi[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Vd(t,r),i=Ca(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",t);break;case"textarea":bd(t,r),i=Ra(t,r),ee("invalid",t);break;default:i=r}Oa(n,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var d=u[o];o==="style"?ap(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&op(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Di(t,d):typeof d=="number"&&Di(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oi.hasOwnProperty(o)?d!=null&&o==="onScroll"&&ee("scroll",t):d!=null&&Nu(t,o,d,l))}switch(n){case"input":ks(t),$d(t,r,!1);break;case"textarea":ks(t),Hd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Ir(t,!!r.multiple,o,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Te(e),null;case 6:if(t&&e.stateNode!=null)Og(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=jn(bi.current),jn(St.current),xs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(o=r.nodeValue!==n)&&(t=We,t!==null))switch(t.tag){case 3:Ls(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ls(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Te(e),null;case 13:if(te(ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&be!==null&&e.mode&1&&!(e.flags&128))Yp(),xr(),e.flags|=98560,o=!1;else if(o=xs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(D(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[_t]=e}else xr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Te(e),o=!1}else ct!==null&&(hu(ct),ct=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ie.current&1?fe===0&&(fe=3):hc())),e.updateQueue!==null&&(e.flags|=4),Te(e),null);case 4:return Ur(),iu(t,e),t===null&&zi(e.stateNode.containerInfo),Te(e),null;case 10:return Yu(e.type._context),Te(e),null;case 17:return Be(e.type)&&yo(),Te(e),null;case 19:if(te(ie),o=e.memoizedState,o===null)return Te(e),null;if(r=(e.flags&128)!==0,l=o.rendering,l===null)if(r)hi(o,!1);else{if(fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=ko(t),l!==null){for(e.flags|=128,hi(o,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(ie,ie.current&1|2),e.child}t=t.sibling}o.tail!==null&&ce()>jr&&(e.flags|=128,r=!0,hi(o,!1),e.lanes=4194304)}else{if(!r)if(t=ko(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ne)return Te(e),null}else 2*ce()-o.renderingStartTime>jr&&n!==1073741824&&(e.flags|=128,r=!0,hi(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ce(),e.sibling=null,n=ie.current,J(ie,r?n&1|2:n&1),e):(Te(e),null);case 22:case 23:return dc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$e&1073741824&&(Te(e),e.subtreeFlags&6&&(e.flags|=8192)):Te(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function ow(t,e){switch(Wu(e),e.tag){case 1:return Be(e.type)&&yo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ur(),te(ze),te(Re),ec(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zu(e),null;case 13:if(te(ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));xr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(ie),null;case 4:return Ur(),null;case 10:return Yu(e.type._context),null;case 22:case 23:return dc(),null;case 24:return null;default:return null}}var Fs=!1,Ce=!1,lw=typeof WeakSet=="function"?WeakSet:Set,z=null;function wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(t,e,r)}else n.current=null}function su(t,e,n){try{n()}catch(r){le(t,e,r)}}var Lh=!1;function aw(t,e){if($a=po,t=Up(),bu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,u=-1,d=-1,f=0,S=0,A=t,C=null;t:for(;;){for(var O;A!==n||i!==0&&A.nodeType!==3||(u=l+i),A!==o||r!==0&&A.nodeType!==3||(d=l+r),A.nodeType===3&&(l+=A.nodeValue.length),(O=A.firstChild)!==null;)C=A,A=O;for(;;){if(A===t)break t;if(C===n&&++f===i&&(u=l),C===o&&++S===r&&(d=l),(O=A.nextSibling)!==null)break;A=C,C=A.parentNode}A=O}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ba={focusedElem:t,selectionRange:n},po=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var L=R.memoizedProps,x=R.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?L:at(e.type,L),x);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){le(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return R=Lh,Lh=!1,R}function Ci(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&su(e,n,o)}i=i.next}while(i!==r)}}function Jo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dg(t){var e=t.alternate;e!==null&&(t.alternate=null,Dg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Vi],delete e[Ka],delete e[H0],delete e[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Lg(t){return t.tag===5||t.tag===3||t.tag===4}function xh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vo));else if(r!==4&&(t=t.child,t!==null))for(lu(t,e,n),t=t.sibling;t!==null;)lu(t,e,n),t=t.sibling}function au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}var ve=null,ut=!1;function en(t,e,n){for(n=n.child;n!==null;)xg(t,e,n),n=n.sibling}function xg(t,e,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Ce||wr(n,e);case 6:var r=ve,i=ut;ve=null,en(t,e,n),ve=r,ut=i,ve!==null&&(ut?(t=ve,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(ut?(t=ve,n=n.stateNode,t.nodeType===8?Zl(t.parentNode,n):t.nodeType===1&&Zl(t,n),Ui(t)):Zl(ve,n.stateNode));break;case 4:r=ve,i=ut,ve=n.stateNode.containerInfo,ut=!0,en(t,e,n),ve=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&su(n,e,l),i=i.next}while(i!==r)}en(t,e,n);break;case 1:if(!Ce&&(wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){le(n,e,u)}en(t,e,n);break;case 21:en(t,e,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,en(t,e,n),Ce=r):en(t,e,n);break;default:en(t,e,n)}}function Mh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lw),e.forEach(function(r){var i=vw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:ve=u.stateNode,ut=!1;break e;case 3:ve=u.stateNode.containerInfo,ut=!0;break e;case 4:ve=u.stateNode.containerInfo,ut=!0;break e}u=u.return}if(ve===null)throw Error(D(160));xg(o,l,i),ve=null,ut=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(f){le(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Mg(e,t),e=e.sibling}function Mg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),vt(t),r&4){try{Ci(3,t,t.return),Jo(3,t)}catch(L){le(t,t.return,L)}try{Ci(5,t,t.return)}catch(L){le(t,t.return,L)}}break;case 1:lt(e,t),vt(t),r&512&&n!==null&&wr(n,n.return);break;case 5:if(lt(e,t),vt(t),r&512&&n!==null&&wr(n,n.return),t.flags&32){var i=t.stateNode;try{Di(i,"")}catch(L){le(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,u=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&rp(i,o),Da(u,l);var f=Da(u,o);for(l=0;l<d.length;l+=2){var S=d[l],A=d[l+1];S==="style"?ap(i,A):S==="dangerouslySetInnerHTML"?op(i,A):S==="children"?Di(i,A):Nu(i,S,A,f)}switch(u){case"input":Aa(i,o);break;case"textarea":ip(i,o);break;case"select":var C=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?Ir(i,!!o.multiple,O,!1):C!==!!o.multiple&&(o.defaultValue!=null?Ir(i,!!o.multiple,o.defaultValue,!0):Ir(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vi]=o}catch(L){le(t,t.return,L)}}break;case 6:if(lt(e,t),vt(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){le(t,t.return,L)}}break;case 3:if(lt(e,t),vt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(e.containerInfo)}catch(L){le(t,t.return,L)}break;case 4:lt(e,t),vt(t);break;case 13:lt(e,t),vt(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=ce())),r&4&&Mh(t);break;case 22:if(S=n!==null&&n.memoizedState!==null,t.mode&1?(Ce=(f=Ce)||S,lt(e,t),Ce=f):lt(e,t),vt(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!S&&t.mode&1)for(z=t,S=t.child;S!==null;){for(A=z=S;z!==null;){switch(C=z,O=C.child,C.tag){case 0:case 11:case 14:case 15:Ci(4,C,C.return);break;case 1:wr(C,C.return);var R=C.stateNode;if(typeof R.componentWillUnmount=="function"){r=C,n=C.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(L){le(r,n,L)}}break;case 5:wr(C,C.return);break;case 22:if(C.memoizedState!==null){Fh(A);continue}}O!==null?(O.return=C,z=O):Fh(A)}S=S.sibling}e:for(S=null,A=t;;){if(A.tag===5){if(S===null){S=A;try{i=A.stateNode,f?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=A.stateNode,d=A.memoizedProps.style,l=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=lp("display",l))}catch(L){le(t,t.return,L)}}}else if(A.tag===6){if(S===null)try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(L){le(t,t.return,L)}}else if((A.tag!==22&&A.tag!==23||A.memoizedState===null||A===t)&&A.child!==null){A.child.return=A,A=A.child;continue}if(A===t)break e;for(;A.sibling===null;){if(A.return===null||A.return===t)break e;S===A&&(S=null),A=A.return}S===A&&(S=null),A.sibling.return=A.return,A=A.sibling}}break;case 19:lt(e,t),vt(t),r&4&&Mh(t);break;case 21:break;default:lt(e,t),vt(t)}}function vt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Lg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Di(i,""),r.flags&=-33);var o=xh(t);au(t,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=xh(t);lu(t,u,l);break;default:throw Error(D(161))}}catch(d){le(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uw(t,e,n){z=t,Ug(t)}function Ug(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Fs;if(!l){var u=i.alternate,d=u!==null&&u.memoizedState!==null||Ce;u=Fs;var f=Ce;if(Fs=l,(Ce=d)&&!f)for(z=i;z!==null;)l=z,d=l.child,l.tag===22&&l.memoizedState!==null?jh(i):d!==null?(d.return=l,z=d):jh(i);for(;o!==null;)z=o,Ug(o),o=o.sibling;z=i,Fs=u,Ce=f}Uh(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,z=o):Uh(t)}}function Uh(t){for(;z!==null;){var e=z;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ce||Jo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:at(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&_h(e,o,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_h(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var S=f.memoizedState;if(S!==null){var A=S.dehydrated;A!==null&&Ui(A)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ce||e.flags&512&&ou(e)}catch(C){le(e,e.return,C)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function Fh(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function jh(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jo(4,e)}catch(d){le(e,n,d)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(d){le(e,i,d)}}var o=e.return;try{ou(e)}catch(d){le(e,o,d)}break;case 5:var l=e.return;try{ou(e)}catch(d){le(e,l,d)}}}catch(d){le(e,e.return,d)}if(e===t){z=null;break}var u=e.sibling;if(u!==null){u.return=e.return,z=u;break}z=e.return}}var cw=Math.ceil,Po=Yt.ReactCurrentDispatcher,lc=Yt.ReactCurrentOwner,tt=Yt.ReactCurrentBatchConfig,K=0,ge=null,de=null,ye=0,$e=0,_r=Cn(0),fe=0,Gi=null,Wn=0,Zo=0,ac=0,Ai=null,Fe=null,uc=0,jr=1/0,Mt=null,Ro=!1,uu=null,yn=null,js=!1,hn=null,No=0,Pi=0,cu=null,to=-1,no=0;function xe(){return K&6?ce():to!==-1?to:to=ce()}function wn(t){return t.mode&1?K&2&&ye!==0?ye&-ye:G0.transition!==null?(no===0&&(no=_p()),no):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Ap(t.type)),t):1}function ht(t,e,n,r){if(50<Pi)throw Pi=0,cu=null,Error(D(185));Ji(t,n,r),(!(K&2)||t!==ge)&&(t===ge&&(!(K&2)&&(Zo|=n),fe===4&&on(t,ye)),Ve(t,r),n===1&&K===0&&!(e.mode&1)&&(jr=ce()+500,Yo&&An()))}function Ve(t,e){var n=t.callbackNode;Gy(t,e);var r=fo(t,t===ge?ye:0);if(r===0)n!==null&&Gd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gd(n),e===1)t.tag===0?K0(zh.bind(null,t)):Kp(zh.bind(null,t)),$0(function(){!(K&6)&&An()}),n=null;else{switch(Ep(r)){case 1:n=Mu;break;case 4:n=yp;break;case 16:n=ho;break;case 536870912:n=wp;break;default:n=ho}n=Hg(n,Fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fg(t,e){if(to=-1,no=0,K&6)throw Error(D(327));var n=t.callbackNode;if(Ar()&&t.callbackNode!==n)return null;var r=fo(t,t===ge?ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Oo(t,r);else{e=r;var i=K;K|=2;var o=zg();(ge!==t||ye!==e)&&(Mt=null,jr=ce()+500,Bn(t,e));do try{fw();break}catch(u){jg(t,u)}while(!0);qu(),Po.current=o,K=i,de!==null?e=0:(ge=null,ye=0,e=fe)}if(e!==0){if(e===2&&(i=Fa(t),i!==0&&(r=i,e=du(t,i))),e===1)throw n=Gi,Bn(t,0),on(t,r),Ve(t,ce()),n;if(e===6)on(t,r);else{if(i=t.current.alternate,!(r&30)&&!dw(i)&&(e=Oo(t,r),e===2&&(o=Fa(t),o!==0&&(r=o,e=du(t,o))),e===1))throw n=Gi,Bn(t,0),on(t,r),Ve(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:xn(t,Fe,Mt);break;case 3:if(on(t,r),(r&130023424)===r&&(e=uc+500-ce(),10<e)){if(fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){xe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wa(xn.bind(null,t,Fe,Mt),e);break}xn(t,Fe,Mt);break;case 4:if(on(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-dt(r);o=1<<l,l=e[l],l>i&&(i=l),r&=~o}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cw(r/1960))-r,10<r){t.timeoutHandle=Wa(xn.bind(null,t,Fe,Mt),r);break}xn(t,Fe,Mt);break;case 5:xn(t,Fe,Mt);break;default:throw Error(D(329))}}}return Ve(t,ce()),t.callbackNode===n?Fg.bind(null,t):null}function du(t,e){var n=Ai;return t.current.memoizedState.isDehydrated&&(Bn(t,e).flags|=256),t=Oo(t,e),t!==2&&(e=Fe,Fe=n,e!==null&&hu(e)),t}function hu(t){Fe===null?Fe=t:Fe.push.apply(Fe,t)}function dw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ft(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~ac,e&=~Zo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dt(e),r=1<<n;t[n]=-1,e&=~r}}function zh(t){if(K&6)throw Error(D(327));Ar();var e=fo(t,0);if(!(e&1))return Ve(t,ce()),null;var n=Oo(t,e);if(t.tag!==0&&n===2){var r=Fa(t);r!==0&&(e=r,n=du(t,r))}if(n===1)throw n=Gi,Bn(t,0),on(t,e),Ve(t,ce()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xn(t,Fe,Mt),Ve(t,ce()),null}function cc(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(jr=ce()+500,Yo&&An())}}function Kn(t){hn!==null&&hn.tag===0&&!(K&6)&&Ar();var e=K;K|=1;var n=tt.transition,r=Y;try{if(tt.transition=null,Y=1,t)return t()}finally{Y=r,tt.transition=n,K=e,!(K&6)&&An()}}function dc(){$e=_r.current,te(_r)}function Bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,V0(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yo();break;case 3:Ur(),te(ze),te(Re),ec();break;case 5:Zu(r);break;case 4:Ur();break;case 13:te(ie);break;case 19:te(ie);break;case 10:Yu(r.type._context);break;case 22:case 23:dc()}n=n.return}if(ge=t,de=t=_n(t.current,null),ye=$e=e,fe=0,Gi=null,ac=Zo=Wn=0,Fe=Ai=null,Fn!==null){for(e=0;e<Fn.length;e++)if(n=Fn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Fn=null}return t}function jg(t,e){do{var n=de;try{if(qu(),Js.current=Ao,Co){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Co=!1}if(Hn=0,pe=he=se=null,ki=!1,Hi=0,lc.current=null,n===null||n.return===null){fe=1,Gi=e,de=null;break}e:{var o=t,l=n.return,u=n,d=e;if(e=ye,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var f=d,S=u,A=S.tag;if(!(S.mode&1)&&(A===0||A===11||A===15)){var C=S.alternate;C?(S.updateQueue=C.updateQueue,S.memoizedState=C.memoizedState,S.lanes=C.lanes):(S.updateQueue=null,S.memoizedState=null)}var O=Ch(l);if(O!==null){O.flags&=-257,Ah(O,l,u,o,e),O.mode&1&&kh(o,f,e),e=O,d=f;var R=e.updateQueue;if(R===null){var L=new Set;L.add(d),e.updateQueue=L}else R.add(d);break e}else{if(!(e&1)){kh(o,f,e),hc();break e}d=Error(D(426))}}else if(ne&&u.mode&1){var x=Ch(l);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Ah(x,l,u,o,e),Ku(Fr(d,u));break e}}o=d=Fr(d,u),fe!==4&&(fe=2),Ai===null?Ai=[o]:Ai.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var E=Eg(o,d,e);wh(o,E);break e;case 1:u=d;var w=o.type,I=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(yn===null||!yn.has(I)))){o.flags|=65536,e&=-e,o.lanes|=e;var N=Ig(o,u,e);wh(o,N);break e}}o=o.return}while(o!==null)}Vg(n)}catch(U){e=U,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function zg(){var t=Po.current;return Po.current=Ao,t===null?Ao:t}function hc(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(Wn&268435455)&&!(Zo&268435455)||on(ge,ye)}function Oo(t,e){var n=K;K|=2;var r=zg();(ge!==t||ye!==e)&&(Mt=null,Bn(t,e));do try{hw();break}catch(i){jg(t,i)}while(!0);if(qu(),K=n,Po.current=r,de!==null)throw Error(D(261));return ge=null,ye=0,fe}function hw(){for(;de!==null;)Bg(de)}function fw(){for(;de!==null&&!jy();)Bg(de)}function Bg(t){var e=bg(t.alternate,t,$e);t.memoizedProps=t.pendingProps,e===null?Vg(t):de=e,lc.current=null}function Vg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ow(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{fe=6,de=null;return}}else if(n=sw(n,e,$e),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);fe===0&&(fe=5)}function xn(t,e,n){var r=Y,i=tt.transition;try{tt.transition=null,Y=1,pw(t,e,n,r)}finally{tt.transition=i,Y=r}return null}function pw(t,e,n,r){do Ar();while(hn!==null);if(K&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(qy(t,o),t===ge&&(de=ge=null,ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||js||(js=!0,Hg(ho,function(){return Ar(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=tt.transition,tt.transition=null;var l=Y;Y=1;var u=K;K|=4,lc.current=null,aw(t,n),Mg(n,t),x0(ba),po=!!$a,ba=$a=null,t.current=n,uw(n),zy(),K=u,Y=l,tt.transition=o}else t.current=n;if(js&&(js=!1,hn=t,No=i),o=t.pendingLanes,o===0&&(yn=null),$y(n.stateNode),Ve(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,t=uu,uu=null,t;return No&1&&t.tag!==0&&Ar(),o=t.pendingLanes,o&1?t===cu?Pi++:(Pi=0,cu=t):Pi=0,An(),null}function Ar(){if(hn!==null){var t=Ep(No),e=tt.transition,n=Y;try{if(tt.transition=null,Y=16>t?16:t,hn===null)var r=!1;else{if(t=hn,hn=null,No=0,K&6)throw Error(D(331));var i=K;for(K|=4,z=t.current;z!==null;){var o=z,l=o.child;if(z.flags&16){var u=o.deletions;if(u!==null){for(var d=0;d<u.length;d++){var f=u[d];for(z=f;z!==null;){var S=z;switch(S.tag){case 0:case 11:case 15:Ci(8,S,o)}var A=S.child;if(A!==null)A.return=S,z=A;else for(;z!==null;){S=z;var C=S.sibling,O=S.return;if(Dg(S),S===f){z=null;break}if(C!==null){C.return=O,z=C;break}z=O}}}var R=o.alternate;if(R!==null){var L=R.child;if(L!==null){R.child=null;do{var x=L.sibling;L.sibling=null,L=x}while(L!==null)}}z=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,z=l;else e:for(;z!==null;){if(o=z,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ci(9,o,o.return)}var E=o.sibling;if(E!==null){E.return=o.return,z=E;break e}z=o.return}}var w=t.current;for(z=w;z!==null;){l=z;var I=l.child;if(l.subtreeFlags&2064&&I!==null)I.return=l,z=I;else e:for(l=w;z!==null;){if(u=z,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Jo(9,u)}}catch(U){le(u,u.return,U)}if(u===l){z=null;break e}var N=u.sibling;if(N!==null){N.return=u.return,z=N;break e}z=u.return}}if(K=i,An(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Ho,t)}catch{}r=!0}return r}finally{Y=n,tt.transition=e}}return!1}function Bh(t,e,n){e=Fr(n,e),e=Eg(t,e,1),t=vn(t,e,1),e=xe(),t!==null&&(Ji(t,1,e),Ve(t,e))}function le(t,e,n){if(t.tag===3)Bh(t,t,n);else for(;e!==null;){if(e.tag===3){Bh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){t=Fr(n,t),t=Ig(e,t,1),e=vn(e,t,1),t=xe(),e!==null&&(Ji(e,1,t),Ve(e,t));break}}e=e.return}}function gw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xe(),t.pingedLanes|=t.suspendedLanes&n,ge===t&&(ye&n)===n&&(fe===4||fe===3&&(ye&130023424)===ye&&500>ce()-uc?Bn(t,0):ac|=n),Ve(t,e)}function $g(t,e){e===0&&(t.mode&1?(e=Ps,Ps<<=1,!(Ps&130023424)&&(Ps=4194304)):e=1);var n=xe();t=Kt(t,e),t!==null&&(Ji(t,e,n),Ve(t,n))}function mw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$g(t,n)}function vw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),$g(t,n)}var bg;bg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ze.current)je=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return je=!1,iw(t,e,n);je=!!(t.flags&131072)}else je=!1,ne&&e.flags&1048576&&Gp(e,Eo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;eo(t,e),t=e.pendingProps;var i=Lr(e,Re.current);Cr(e,n),i=nc(null,e,r,t,i,n);var o=rc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(o=!0,wo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xu(e),i.updater=Xo,e.stateNode=i,i._reactInternals=e,Ja(e,r,t,n),e=tu(null,e,r,!0,o,n)):(e.tag=0,ne&&o&&Hu(e),Le(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(eo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ww(r),t=at(r,t),i){case 0:e=eu(null,e,r,t,n);break e;case 1:e=Nh(null,e,r,t,n);break e;case 11:e=Ph(null,e,r,t,n);break e;case 14:e=Rh(null,e,r,at(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),eu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Nh(t,e,r,i,n);case 3:e:{if(Cg(e),t===null)throw Error(D(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Zp(t,e),To(e,r,null,n);var l=e.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Fr(Error(D(423)),e),e=Oh(t,e,r,n,i);break e}else if(r!==i){i=Fr(Error(D(424)),e),e=Oh(t,e,r,n,i);break e}else for(be=mn(e.stateNode.containerInfo.firstChild),We=e,ne=!0,ct=null,n=Xp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xr(),r===i){e=Gt(t,e,n);break e}Le(t,e,r,n)}e=e.child}return e;case 5:return eg(e),t===null&&Ya(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,l=i.children,Ha(r,i)?l=null:o!==null&&Ha(r,o)&&(e.flags|=32),kg(t,e),Le(t,e,l,n),e.child;case 6:return t===null&&Ya(e),null;case 13:return Ag(t,e,n);case 4:return Ju(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mr(e,null,r,n):Le(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),Ph(t,e,r,i,n);case 7:return Le(t,e,e.pendingProps,n),e.child;case 8:return Le(t,e,e.pendingProps.children,n),e.child;case 12:return Le(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,l=i.value,J(Io,r._currentValue),r._currentValue=l,o!==null)if(ft(o.value,l)){if(o.children===i.children&&!ze.current){e=Gt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=$t(-1,n&-n),d.tag=2;var f=o.updateQueue;if(f!==null){f=f.shared;var S=f.pending;S===null?d.next=d:(d.next=S.next,S.next=d),f.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Qa(o.return,n,e),u.lanes|=n;break}d=d.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Qa(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Le(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Cr(e,n),i=it(i),r=r(i),e.flags|=1,Le(t,e,r,n),e.child;case 14:return r=e.type,i=at(r,e.pendingProps),i=at(r.type,i),Rh(t,e,r,i,n);case 15:return Sg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:at(r,i),eo(t,e),e.tag=1,Be(r)?(t=!0,wo(e)):t=!1,Cr(e,n),_g(e,r,i),Ja(e,r,i,n),tu(null,e,r,!0,t,n);case 19:return Pg(t,e,n);case 22:return Tg(t,e,n)}throw Error(D(156,e.tag))};function Hg(t,e){return vp(t,e)}function yw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new yw(t,e,n,r)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ww(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Du)return 11;if(t===Lu)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ro(t,e,n,r,i,o){var l=2;if(r=t,typeof t=="function")fc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case cr:return Vn(n.children,i,o,e);case Ou:l=8,i|=8;break;case Ia:return t=et(12,n,e,i|2),t.elementType=Ia,t.lanes=o,t;case Sa:return t=et(13,n,e,i),t.elementType=Sa,t.lanes=o,t;case Ta:return t=et(19,n,e,i),t.elementType=Ta,t.lanes=o,t;case ep:return el(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jf:l=10;break e;case Zf:l=9;break e;case Du:l=11;break e;case Lu:l=14;break e;case nn:l=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=et(l,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Vn(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function el(t,e,n,r){return t=et(22,t,r,e),t.elementType=ep,t.lanes=n,t.stateNode={isHidden:!1},t}function la(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function aa(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _w(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(t,e,n,r,i,o,l,u,d){return t=new _w(t,e,n,u,d),e===1?(e=1,o===!0&&(e|=8)):e=0,o=et(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xu(o),t}function Ew(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Wg(t){if(!t)return Tn;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(Be(n))return Wp(t,n,e)}return e}function Kg(t,e,n,r,i,o,l,u,d){return t=pc(n,r,!0,t,i,o,l,u,d),t.context=Wg(null),n=t.current,r=xe(),i=wn(n),o=$t(r,i),o.callback=e??null,vn(n,o,i),t.current.lanes=i,Ji(t,i,r),Ve(t,r),t}function tl(t,e,n,r){var i=e.current,o=xe(),l=wn(i);return n=Wg(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(o,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vn(i,e,l),t!==null&&(ht(t,i,l,o),Xs(t,i,l)),l}function Do(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gc(t,e){Vh(t,e),(t=t.alternate)&&Vh(t,e)}function Iw(){return null}var Gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function mc(t){this._internalRoot=t}nl.prototype.render=mc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));tl(t,e,null,null)};nl.prototype.unmount=mc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kn(function(){tl(null,t,null,null)}),e[Wt]=null}};function nl(t){this._internalRoot=t}nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sn.length&&e!==0&&e<sn[n].priority;n++);sn.splice(n,0,t),n===0&&Cp(t)}};function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $h(){}function Sw(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var f=Do(l);o.call(f)}}var l=Kg(e,r,t,0,null,!1,!1,"",$h);return t._reactRootContainer=l,t[Wt]=l.current,zi(t.nodeType===8?t.parentNode:t),Kn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=Do(d);u.call(f)}}var d=pc(t,0,!1,null,null,!1,!1,"",$h);return t._reactRootContainer=d,t[Wt]=d.current,zi(t.nodeType===8?t.parentNode:t),Kn(function(){tl(e,d,n,r)}),d}function il(t,e,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var d=Do(l);u.call(d)}}tl(e,l,t,i)}else l=Sw(n,e,t,i,r);return Do(l)}Ip=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=mi(e.pendingLanes);n!==0&&(Uu(e,n|1),Ve(e,ce()),!(K&6)&&(jr=ce()+500,An()))}break;case 13:Kn(function(){var r=Kt(t,1);if(r!==null){var i=xe();ht(r,t,1,i)}}),gc(t,1)}};Fu=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=xe();ht(e,t,134217728,n)}gc(t,134217728)}};Sp=function(t){if(t.tag===13){var e=wn(t),n=Kt(t,e);if(n!==null){var r=xe();ht(n,t,e,r)}gc(t,e)}};Tp=function(){return Y};kp=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};xa=function(t,e,n){switch(e){case"input":if(Aa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qo(r);if(!i)throw Error(D(90));np(r),Aa(r,i)}}}break;case"textarea":ip(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};dp=cc;hp=Kn;var Tw={usingClientEntryPoint:!1,Events:[es,pr,qo,up,cp,cc]},fi={findFiberByHostInstance:Un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kw={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gp(t),t===null?null:t.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||Iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{Ho=zs.inject(kw),It=zs}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tw;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vc(e))throw Error(D(200));return Ew(t,e,null,n)};qe.createRoot=function(t,e){if(!vc(t))throw Error(D(299));var n=!1,r="",i=Gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pc(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,zi(t.nodeType===8?t.parentNode:t),new mc(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=gp(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Kn(t)};qe.hydrate=function(t,e,n){if(!rl(e))throw Error(D(200));return il(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!vc(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Gg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=Kg(e,null,t,1,n??null,i,!1,o,l),t[Wt]=e.current,zi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nl(e)};qe.render=function(t,e,n){if(!rl(e))throw Error(D(200));return il(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!rl(t))throw Error(D(40));return t._reactRootContainer?(Kn(function(){il(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};qe.unstable_batchedUpdates=cc;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rl(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return il(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)}catch(t){console.error(t)}}qg(),qf.exports=qe;var Cw=qf.exports,bh=Cw;_a.createRoot=bh.createRoot,_a.hydrateRoot=bh.hydrateRoot;var Hh={};/**
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
 */const Yg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Aw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],l=t[n++],u=t[n++],d=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const o=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return e.join("")},Qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],l=i+1<t.length,u=l?t[i+1]:0,d=i+2<t.length,f=d?t[i+2]:0,S=o>>2,A=(o&3)<<4|u>>4;let C=(u&15)<<2|f>>6,O=f&63;d||(O=64,l||(C=64)),r.push(n[S],n[A],n[C],n[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Aw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const A=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||u==null||f==null||A==null)throw new Pw;const C=o<<2|u>>4;if(r.push(C),f!==64){const O=u<<4&240|f>>2;if(r.push(O),A!==64){const R=f<<6&192|A;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Pw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rw=function(t){const e=Yg(t);return Qg.encodeByteArray(e,!0)},Lo=function(t){return Rw(t).replace(/\./g,"")},Xg=function(t){try{return Qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ow=()=>Nw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof Hh>"u")return;const t=Hh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xg(t[1]);return e&&JSON.parse(e)},yc=()=>{try{return Ow()||Dw()||Lw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jg=t=>{var e,n;return(n=(e=yc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xw=t=>{const e=Jg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zg=()=>{var t;return(t=yc())===null||t===void 0?void 0:t.config},em=t=>{var e;return(e=yc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Uw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(l)),""].join(".")}/**
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
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function tm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zw(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nm(){try{return typeof indexedDB=="object"}catch{return!1}}function rm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Bw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Vw="FirebaseError";class mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vw,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],l=o?$w(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new mt(i,u,r)}}function $w(t,e){return t.replace(bw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bw=/\{\$([^}]+)}/g;function Hw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],l=e[i];if(Wh(o)&&Wh(l)){if(!qi(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wh(t){return t!==null&&typeof t=="object"}/**
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
 */function ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function wi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ww(t,e){const n=new Kw(t,e);return n.subscribe.bind(n)}class Kw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ua),i.error===void 0&&(i.error=ua),i.complete===void 0&&(i.complete=ua);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ua(){}/**
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
 */const qw=1e3,Yw=2,Qw=4*60*60*1e3,Xw=.5;function Kh(t,e=qw,n=Yw){const r=e*Math.pow(n,t),i=Math.round(Xw*r*(Math.random()-.5)*2);return Math.min(Qw,r+i)}/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class Jw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(e1(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zw(t){return t===Mn?void 0:t}function e1(t){return t.instantiationMode==="EAGER"}/**
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
 */class t1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const n1={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},r1=q.INFO,i1={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},s1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=i1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=r1,this._logHandler=s1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?n1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const o1=(t,e)=>e.some(n=>t instanceof n);let Gh,qh;function l1(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a1(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const im=new WeakMap,fu=new WeakMap,sm=new WeakMap,ca=new WeakMap,wc=new WeakMap;function u1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",l)},o=()=>{n(En(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&im.set(n,t)}).catch(()=>{}),wc.set(e,t),e}function c1(t){if(fu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",l),t.removeEventListener("abort",l)},o=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",l),t.addEventListener("abort",l)});fu.set(t,e)}let pu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function d1(t){pu=t(pu)}function h1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(da(this),e,...n);return sm.set(r,e.sort?e.sort():[e]),En(r)}:a1().includes(t)?function(...e){return t.apply(da(this),e),En(im.get(this))}:function(...e){return En(t.apply(da(this),e))}}function f1(t){return typeof t=="function"?h1(t):(t instanceof IDBTransaction&&c1(t),o1(t,l1())?new Proxy(t,pu):t)}function En(t){if(t instanceof IDBRequest)return u1(t);if(ca.has(t))return ca.get(t);const e=f1(t);return e!==t&&(ca.set(t,e),wc.set(e,t)),e}const da=t=>wc.get(t);function om(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(t,e),u=En(l);return r&&l.addEventListener("upgradeneeded",d=>{r(En(l.result),d.oldVersion,d.newVersion,En(l.transaction),d)}),n&&l.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const p1=["get","getKey","getAll","getAllKeys","count"],g1=["put","add","delete","clear"],ha=new Map;function Yh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ha.get(e))return ha.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=g1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||p1.includes(n)))return;const o=async function(l,...u){const d=this.transaction(l,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[n](...u),i&&d.done]))[0]};return ha.set(e,o),o}d1(t=>({...t,get:(e,n,r)=>Yh(e,n)||t.get(e,n,r),has:(e,n)=>!!Yh(e,n)||t.has(e,n)}));/**
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
 */class m1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(v1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function v1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gu="@firebase/app",Qh="0.10.7";/**
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
 */const Gn=new sl("@firebase/app"),y1="@firebase/app-compat",w1="@firebase/analytics-compat",_1="@firebase/analytics",E1="@firebase/app-check-compat",I1="@firebase/app-check",S1="@firebase/auth",T1="@firebase/auth-compat",k1="@firebase/database",C1="@firebase/database-compat",A1="@firebase/functions",P1="@firebase/functions-compat",R1="@firebase/installations",N1="@firebase/installations-compat",O1="@firebase/messaging",D1="@firebase/messaging-compat",L1="@firebase/performance",x1="@firebase/performance-compat",M1="@firebase/remote-config",U1="@firebase/remote-config-compat",F1="@firebase/storage",j1="@firebase/storage-compat",z1="@firebase/firestore",B1="@firebase/vertexai-preview",V1="@firebase/firestore-compat",$1="firebase",b1="10.12.4";/**
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
 */const mu="[DEFAULT]",H1={[gu]:"fire-core",[y1]:"fire-core-compat",[_1]:"fire-analytics",[w1]:"fire-analytics-compat",[I1]:"fire-app-check",[E1]:"fire-app-check-compat",[S1]:"fire-auth",[T1]:"fire-auth-compat",[k1]:"fire-rtdb",[C1]:"fire-rtdb-compat",[A1]:"fire-fn",[P1]:"fire-fn-compat",[R1]:"fire-iid",[N1]:"fire-iid-compat",[O1]:"fire-fcm",[D1]:"fire-fcm-compat",[L1]:"fire-perf",[x1]:"fire-perf-compat",[M1]:"fire-rc",[U1]:"fire-rc-compat",[F1]:"fire-gcs",[j1]:"fire-gcs-compat",[z1]:"fire-fst",[V1]:"fire-fst-compat",[B1]:"fire-vertex","fire-js":"fire-js",[$1]:"fire-js-all"};/**
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
 */const xo=new Map,W1=new Map,vu=new Map;function Xh(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ct(t){const e=t.name;if(vu.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;vu.set(e,t);for(const n of xo.values())Xh(n,t);for(const n of W1.values())Xh(n,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Et(t){return t.settings!==void 0}/**
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
 */const K1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},In=new er("app","Firebase",K1);/**
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
 */class G1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw In.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=b1;function lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw In.create("bad-app-name",{appName:String(i)});if(n||(n=Zg()),!n)throw In.create("no-options");const o=xo.get(i);if(o){if(qi(n,o.options)&&qi(r,o.config))return o;throw In.create("duplicate-app",{appName:i})}const l=new t1(i);for(const d of vu.values())l.addComponent(d);const u=new G1(n,r,l);return xo.set(i,u),u}function _c(t=mu){const e=xo.get(t);if(!e&&t===mu&&Zg())return lm();if(!e)throw In.create("no-app",{appName:t});return e}function nt(t,e,n){var r;let i=(r=H1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(u.join(" "));return}Ct(new pt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const q1="firebase-heartbeat-database",Y1=1,Yi="firebase-heartbeat-store";let fa=null;function am(){return fa||(fa=om(q1,Y1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw In.create("idb-open",{originalErrorMessage:t.message})})),fa}async function Q1(t){try{const n=(await am()).transaction(Yi),r=await n.objectStore(Yi).get(um(t));return await n.done,r}catch(e){if(e instanceof mt)Gn.warn(e.message);else{const n=In.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Jh(t,e){try{const r=(await am()).transaction(Yi,"readwrite");await r.objectStore(Yi).put(e,um(t)),await r.done}catch(n){if(n instanceof mt)Gn.warn(n.message);else{const r=In.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function um(t){return`${t.name}!${t.options.appId}`}/**
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
 */const X1=1024,J1=30*24*60*60*1e3;class Z1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new t_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=J1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zh(),{heartbeatsToSend:r,unsentEntries:i}=e_(this._heartbeatsCache.heartbeats),o=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Zh(){return new Date().toISOString().substring(0,10)}function e_(t,e=X1){const n=[];let r=t.slice();for(const i of t){const o=n.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),ef(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ef(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class t_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nm()?rm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ef(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function n_(t){Ct(new pt("platform-logger",e=>new m1(e),"PRIVATE")),Ct(new pt("heartbeat",e=>new Z1(e),"PRIVATE")),nt(gu,Qh,t),nt(gu,Qh,"esm2017"),nt("fire-js","")}n_("");var r_="firebase",i_="10.12.4";/**
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
 */nt(r_,i_,"app");/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */const s_={};/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function Bs(t){return Object.isFrozen(t)&&Object.isFrozen(t.raw)}function Vs(t){return t.toString().indexOf("`")===-1}Vs(t=>t``)||Vs(t=>t`\0`)||Vs(t=>t`\n`)||Vs(t=>t`\u0000`);Bs``&&Bs`\0`&&Bs`\n`&&Bs`\u0000`;/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */let cm="google#safe";function o_(){if(typeof window<"u")return window.trustedTypes}function dm(){var t;return cm!==""&&(t=o_())!==null&&t!==void 0?t:null}let $s;function l_(){var t,e;if($s===void 0)try{$s=(e=(t=dm())===null||t===void 0?void 0:t.createPolicy(cm,{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n}))!==null&&e!==void 0?e:null}catch{$s=null}return $s}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */class hm{constructor(e,n){this.privateDoNotAccessOrElseWrappedResourceUrl=e}toString(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()}}function tf(t){var e;const n=t,r=(e=l_())===null||e===void 0?void 0:e.createScriptURL(n);return r??new hm(n,s_)}function a_(t){var e;if(!((e=dm())===null||e===void 0)&&e.isScriptURL(t))return t;if(t instanceof hm)return t.privateDoNotAccessOrElseWrappedResourceUrl;{let n="";throw new Error(n)}}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function u_(t,...e){if(e.length===0)return tf(t[0]);t[0].toLowerCase();let n=t[0];for(let r=0;r<e.length;r++)n+=encodeURIComponent(e[r])+t[r+1];return tf(n)}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function c_(t){return d_("script",t)}function d_(t,e){var n;const r=e.document,i=(n=r.querySelector)===null||n===void 0?void 0:n.call(r,`${t}[nonce]`);return i&&(i.nonce||i.getAttribute("nonce"))||""}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */function h_(t){const e=t.ownerDocument&&t.ownerDocument.defaultView,n=c_(e||window);n&&t.setAttribute("nonce",n)}function f_(t,e,n){t.src=a_(e),h_(t)}const fm="@firebase/installations",Ec="0.6.8";/**
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
 */const pm=1e4,gm=`w:${Ec}`,mm="FIS_v2",p_="https://firebaseinstallations.googleapis.com/v1",g_=60*60*1e3,m_="installations",v_="Installations";/**
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
 */const y_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qn=new er(m_,v_,y_);function vm(t){return t instanceof mt&&t.code.includes("request-failed")}/**
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
 */function ym({projectId:t}){return`${p_}/projects/${t}/installations`}function wm(t){return{token:t.token,requestStatus:2,expiresIn:__(t.expiresIn),creationTime:Date.now()}}async function _m(t,e){const r=(await e.json()).error;return qn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Em({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function w_(t,{refreshToken:e}){const n=Em(t);return n.append("Authorization",E_(e)),n}async function Im(t){const e=await t();return e.status>=500&&e.status<600?t():e}function __(t){return Number(t.replace("s","000"))}function E_(t){return`${mm} ${t}`}/**
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
 */async function I_({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ym(t),i=Em(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const l={fid:n,authVersion:mm,appId:t.appId,sdkVersion:gm},u={method:"POST",headers:i,body:JSON.stringify(l)},d=await Im(()=>fetch(r,u));if(d.ok){const f=await d.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:wm(f.authToken)}}else throw await _m("Create Installation",d)}/**
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
 */function Sm(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function S_(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const T_=/^[cdef][\w-]{21}$/,yu="";function k_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=C_(t);return T_.test(n)?n:yu}catch{return yu}}function C_(t){return S_(t).substr(0,22)}/**
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
 */function ol(t){return`${t.appName}!${t.appId}`}/**
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
 */const Tm=new Map;function km(t,e){const n=ol(t);Cm(n,e),A_(n,e)}function Cm(t,e){const n=Tm.get(t);if(n)for(const r of n)r(e)}function A_(t,e){const n=P_();n&&n.postMessage({key:t,fid:e}),R_()}let zn=null;function P_(){return!zn&&"BroadcastChannel"in self&&(zn=new BroadcastChannel("[Firebase] FID Change"),zn.onmessage=t=>{Cm(t.data.key,t.data.fid)}),zn}function R_(){Tm.size===0&&zn&&(zn.close(),zn=null)}/**
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
 */const N_="firebase-installations-database",O_=1,Yn="firebase-installations-store";let pa=null;function Ic(){return pa||(pa=om(N_,O_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yn)}}})),pa}async function Mo(t,e){const n=ol(t),i=(await Ic()).transaction(Yn,"readwrite"),o=i.objectStore(Yn),l=await o.get(n);return await o.put(e,n),await i.done,(!l||l.fid!==e.fid)&&km(t,e.fid),e}async function Am(t){const e=ol(t),r=(await Ic()).transaction(Yn,"readwrite");await r.objectStore(Yn).delete(e),await r.done}async function ll(t,e){const n=ol(t),i=(await Ic()).transaction(Yn,"readwrite"),o=i.objectStore(Yn),l=await o.get(n),u=e(l);return u===void 0?await o.delete(n):await o.put(u,n),await i.done,u&&(!l||l.fid!==u.fid)&&km(t,u.fid),u}/**
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
 */async function Sc(t){let e;const n=await ll(t.appConfig,r=>{const i=D_(r),o=L_(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===yu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function D_(t){const e=t||{fid:k_(),registrationStatus:0};return Pm(e)}function L_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=x_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:M_(t)}:{installationEntry:e}}async function x_(t,e){try{const n=await I_(t,e);return Mo(t.appConfig,n)}catch(n){throw vm(n)&&n.customData.serverCode===409?await Am(t.appConfig):await Mo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function M_(t){let e=await nf(t.appConfig);for(;e.registrationStatus===1;)await Sm(100),e=await nf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sc(t);return r||n}return e}function nf(t){return ll(t,e=>{if(!e)throw qn.create("installation-not-found");return Pm(e)})}function Pm(t){return U_(t)?{fid:t.fid,registrationStatus:0}:t}function U_(t){return t.registrationStatus===1&&t.registrationTime+pm<Date.now()}/**
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
 */async function F_({appConfig:t,heartbeatServiceProvider:e},n){const r=j_(t,n),i=w_(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&i.append("x-firebase-client",f)}const l={installation:{sdkVersion:gm,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(l)},d=await Im(()=>fetch(r,u));if(d.ok){const f=await d.json();return wm(f)}else throw await _m("Generate Auth Token",d)}function j_(t,{fid:e}){return`${ym(t)}/${e}/authTokens:generate`}/**
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
 */async function Tc(t,e=!1){let n;const r=await ll(t.appConfig,o=>{if(!Rm(o))throw qn.create("not-registered");const l=o.authToken;if(!e&&V_(l))return o;if(l.requestStatus===1)return n=z_(t,e),o;{if(!navigator.onLine)throw qn.create("app-offline");const u=b_(o);return n=B_(t,u),u}});return n?await n:r.authToken}async function z_(t,e){let n=await rf(t.appConfig);for(;n.authToken.requestStatus===1;)await Sm(100),n=await rf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Tc(t,e):r}function rf(t){return ll(t,e=>{if(!Rm(e))throw qn.create("not-registered");const n=e.authToken;return H_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function B_(t,e){try{const n=await F_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Mo(t.appConfig,r),n}catch(n){if(vm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Am(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mo(t.appConfig,r)}throw n}}function Rm(t){return t!==void 0&&t.registrationStatus===2}function V_(t){return t.requestStatus===2&&!$_(t)}function $_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+g_}function b_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function H_(t){return t.requestStatus===1&&t.requestTime+pm<Date.now()}/**
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
 */async function W_(t){const e=t,{installationEntry:n,registrationPromise:r}=await Sc(e);return r?r.catch(console.error):Tc(e).catch(console.error),n.fid}/**
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
 */async function K_(t,e=!1){const n=t;return await G_(n),(await Tc(n,e)).token}async function G_(t){const{registrationPromise:e}=await Sc(t);e&&await e}/**
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
 */function q_(t){if(!t||!t.options)throw ga("App Configuration");if(!t.name)throw ga("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ga(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ga(t){return qn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Nm="installations",Y_="installations-internal",Q_=t=>{const e=t.getProvider("app").getImmediate(),n=q_(e),r=tr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},X_=t=>{const e=t.getProvider("app").getImmediate(),n=tr(e,Nm).getImmediate();return{getId:()=>W_(n),getToken:i=>K_(n,i)}};function J_(){Ct(new pt(Nm,Q_,"PUBLIC")),Ct(new pt(Y_,X_,"PRIVATE"))}J_();nt(fm,Ec);nt(fm,Ec,"esm2017");/**
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
 */const Uo="analytics",Z_="firebase_id",eE="origin",tE=60*1e3,nE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rE="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ke=new sl("@firebase/analytics");/**
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
 */function Om(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function iE(t,e){const n=document.createElement("script"),r=u_`https://www.googletagmanager.com/gtag/js?l=${t}&id=${e}`;f_(n,r),n.async=!0,document.head.appendChild(n)}function sE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function oE(t,e,n,r,i,o){const l=r[i];try{if(l)await e[l];else{const d=(await Om(n)).find(f=>f.measurementId===i);d&&await e[d.appId]}}catch(u){Ke.error(u)}t("config",i,o)}async function lE(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let l=i.send_to;Array.isArray(l)||(l=[l]);const u=await Om(n);for(const d of l){const f=u.find(A=>A.measurementId===d),S=f&&e[f.appId];if(S)o.push(S);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){Ke.error(o)}}function aE(t,e,n,r){async function i(o,...l){try{if(o==="event"){const[u,d]=l;await lE(t,e,n,u,d)}else if(o==="config"){const[u,d]=l;await oE(t,e,n,r,u,d)}else if(o==="consent"){const[u,d]=l;t("consent",u,d)}else if(o==="get"){const[u,d,f]=l;t("get",u,d,f)}else if(o==="set"){const[u]=l;t("set",u)}else t(o,...l)}catch(u){Ke.error(u)}}return i}function uE(t,e,n,r,i){let o=function(...l){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=aE(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function cE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(rE)&&n.src.includes(t))return n;return null}/**
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
 */const dE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},rt=new er("analytics","Analytics",dE);/**
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
 */const hE=30,fE=1e3;class pE{constructor(e={},n=fE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Dm=new pE;function gE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function mE(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:gE(r)},o=nE.replace("{app-id}",n),l=await fetch(o,i);if(l.status!==200&&l.status!==304){let u="";try{const d=await l.json();!((e=d.error)===null||e===void 0)&&e.message&&(u=d.error.message)}catch{}throw rt.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function vE(t,e=Dm,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw rt.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw rt.create("no-api-key")}const l=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new _E;return setTimeout(async()=>{u.abort()},tE),Lm({appId:r,apiKey:i,measurementId:o},l,u,e)}async function Lm(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Dm){var o;const{appId:l,measurementId:u}=t;try{await yE(r,e)}catch(d){if(u)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:l,measurementId:u};throw d}try{const d=await mE(t);return i.deleteThrottleMetadata(l),d}catch(d){const f=d;if(!wE(f)){if(i.deleteThrottleMetadata(l),u)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:l,measurementId:u};throw d}const S=Number((o=f==null?void 0:f.customData)===null||o===void 0?void 0:o.httpStatus)===503?Kh(n,i.intervalMillis,hE):Kh(n,i.intervalMillis),A={throttleEndTimeMillis:Date.now()+S,backoffCount:n+1};return i.setThrottleMetadata(l,A),Ke.debug(`Calling attemptFetch again in ${S} millis`),Lm(t,A,r,i)}}function yE(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(rt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function wE(t){if(!(t instanceof mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _E{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function EE(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,l=Object.assign(Object.assign({},r),{send_to:o});t("event",n,l)}}/**
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
 */async function IE(){if(nm())try{await rm()}catch(t){return Ke.warn(rt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ke.warn(rt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function SE(t,e,n,r,i,o,l){var u;const d=vE(t);d.then(O=>{n[O.measurementId]=O.appId,t.options.measurementId&&O.measurementId!==t.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>Ke.error(O)),e.push(d);const f=IE().then(O=>{if(O)return r.getId()}),[S,A]=await Promise.all([d,f]);cE(o)||iE(o,S.measurementId),i("js",new Date);const C=(u=l==null?void 0:l.config)!==null&&u!==void 0?u:{};return C[eE]="firebase",C.update=!0,A!=null&&(C[Z_]=A),i("config",S.measurementId,C),S.measurementId}/**
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
 */class TE{constructor(e){this.app=e}_delete(){return delete Ri[this.app.options.appId],Promise.resolve()}}let Ri={},sf=[];const of={};let ma="dataLayer",kE="gtag",lf,xm,af=!1;function CE(){const t=[];if(tm()&&t.push("This is a browser extension environment."),Bw()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=rt.create("invalid-analytics-context",{errorInfo:e});Ke.warn(n.message)}}function AE(t,e,n){CE();const r=t.options.appId;if(!r)throw rt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw rt.create("no-api-key");if(Ri[r]!=null)throw rt.create("already-exists",{id:r});if(!af){sE(ma);const{wrappedGtag:o,gtagCore:l}=uE(Ri,sf,of,ma,kE);xm=o,lf=l,af=!0}return Ri[r]=SE(t,sf,of,e,lf,ma,n),new TE(t)}function PE(t=_c()){t=At(t);const e=tr(t,Uo);return e.isInitialized()?e.getImmediate():RE(t)}function RE(t,e={}){const n=tr(t,Uo);if(n.isInitialized()){const i=n.getImmediate();if(qi(e,n.getOptions()))return i;throw rt.create("already-initialized")}return n.initialize({options:e})}function NE(t,e,n,r){t=At(t),EE(xm,Ri[t.app.options.appId],e,n,r).catch(i=>Ke.error(i))}const uf="@firebase/analytics",cf="0.10.6";function OE(){Ct(new pt(Uo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return AE(r,i,n)},"PUBLIC")),Ct(new pt("analytics-internal",t,"PRIVATE")),nt(uf,cf),nt(uf,cf,"esm2017");function t(e){try{const n=e.getProvider(Uo).getImmediate();return{logEvent:(r,i,o)=>NE(n,r,i,o)}}catch(n){throw rt.create("interop-component-reg-failed",{reason:n})}}}OE();function kc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Mm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DE=Mm,Um=new er("auth","Firebase",Mm());/**
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
 */const Fo=new sl("@firebase/auth");function LE(t,...e){Fo.logLevel<=q.WARN&&Fo.warn(`Auth (${Hr}): ${t}`,...e)}function io(t,...e){Fo.logLevel<=q.ERROR&&Fo.error(`Auth (${Hr}): ${t}`,...e)}/**
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
 */function gt(t,...e){throw Cc(t,...e)}function Tt(t,...e){return Cc(t,...e)}function Fm(t,e,n){const r=Object.assign(Object.assign({},DE()),{[e]:n});return new er("auth","Firebase",r).create(e,{appName:t.name})}function bt(t){return Fm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Um.create(t,...e)}function V(t,e,...n){if(!t)throw Cc(e,...n)}function zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw io(e),new Error(e)}function qt(t,e){t||zt(e)}/**
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
 */function wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function xE(){return df()==="http:"||df()==="https:"}function df(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ME(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xE()||tm()||"connection"in navigator)?navigator.onLine:!0}function UE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class rs{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Fw()||jw()}get(){return ME()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ac(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const FE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jE=new rs(3e4,6e4);function Pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qt(t,e,n,r,i={}){return zm(t,i,async()=>{let o={},l={};r&&(e==="GET"?l=r:o={body:JSON.stringify(r)});const u=ns(Object.assign({key:t.config.apiKey},l)).slice(1),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode),jm.fetch()(Bm(t,t.config.apiHost,n,u),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},o))})}async function zm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FE),e);try{const i=new BE(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await o.json();if("needConfirmation"in l)throw bs(t,"account-exists-with-different-credential",l);if(o.ok&&!("errorMessage"in l))return l;{const u=o.ok?l.errorMessage:l.error.message,[d,f]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw bs(t,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw bs(t,"email-already-in-use",l);if(d==="USER_DISABLED")throw bs(t,"user-disabled",l);const S=r[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Fm(t,S,f);gt(t,S)}}catch(i){if(i instanceof mt)throw i;gt(t,"network-request-failed",{message:String(i)})}}async function is(t,e,n,r,i={}){const o=await Qt(t,e,n,r,i);return"mfaPendingCredential"in o&&gt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Bm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ac(t.config,i):`${t.config.apiScheme}://${i}`}function zE(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),jE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}function hf(t){return t!==void 0&&t.enterprise!==void 0}class VE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zE(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function $E(t,e){return Qt(t,"GET","/v2/recaptchaConfig",Pn(t,e))}/**
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
 */async function bE(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function Vm(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ni(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HE(t,e=!1){const n=At(t),r=await n.getIdToken(e),i=Pc(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,l=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Ni(va(i.auth_time)),issuedAtTime:Ni(va(i.iat)),expirationTime:Ni(va(i.exp)),signInProvider:l||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function Pc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const i=Xg(n);return i?JSON.parse(i):(io("Failed to decode base64 JWT payload"),null)}catch(i){return io("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ff(t){const e=Pc(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mt&&WE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zr(t,Vm(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const l=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?$m(o.providerUserInfo):[],u=qE(t.providerData,l),d=t.isAnonymous,f=!(t.email&&o.passwordHash)&&!(u!=null&&u.length),S=d?f:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new _u(o.createdAt,o.lastLoginAt),isAnonymous:S};Object.assign(t,A)}async function GE(t){const e=At(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $m(t){return t.map(e=>{var{providerId:n}=e,r=kc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YE(t,e){const n=await zm(t,{},async()=>{const r=ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,l=Bm(t,i,"/v1/token",`key=${o}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",jm.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QE(t,e){return Qt(t,"POST","/v2/accounts:revokeToken",Pn(t,e))}/**
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
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ff(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=ff(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await YE(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,l=new Pr;return r&&(V(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),o&&(V(typeof o=="number","internal-error",{appName:e}),l.expirationTime=o),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function tn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new _u(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await zr(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HE(this,e)}reload(){return GE(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Et(this.auth.app))return Promise.reject(bt(this.auth));const e=await this.getIdToken();return await zr(this,bE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,l,u,d,f,S;const A=(r=n.displayName)!==null&&r!==void 0?r:void 0,C=(i=n.email)!==null&&i!==void 0?i:void 0,O=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,R=(l=n.photoURL)!==null&&l!==void 0?l:void 0,L=(u=n.tenantId)!==null&&u!==void 0?u:void 0,x=(d=n._redirectEventId)!==null&&d!==void 0?d:void 0,E=(f=n.createdAt)!==null&&f!==void 0?f:void 0,w=(S=n.lastLoginAt)!==null&&S!==void 0?S:void 0,{uid:I,emailVerified:N,isAnonymous:U,providerData:F,stsTokenManager:m}=n;V(I&&m,e,"internal-error");const p=Pr.fromJSON(this.name,m);V(typeof I=="string",e,"internal-error"),tn(A,e.name),tn(C,e.name),V(typeof N=="boolean",e,"internal-error"),V(typeof U=="boolean",e,"internal-error"),tn(O,e.name),tn(R,e.name),tn(L,e.name),tn(x,e.name),tn(E,e.name),tn(w,e.name);const g=new Bt({uid:I,auth:e,email:C,emailVerified:N,displayName:A,isAnonymous:U,photoURL:R,phoneNumber:O,tenantId:L,stsTokenManager:p,createdAt:E,lastLoginAt:w});return F&&Array.isArray(F)&&(g.providerData=F.map(y=>Object.assign({},y))),x&&(g._redirectEventId=x),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pr;i.updateFromServerResponse(n);const o=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jo(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];V(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?$m(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new Pr;u.updateFromIdToken(r);const d=new Bt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _u(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(d,f),d}}/**
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
 */const pf=new Map;function Vt(t){qt(t instanceof Function,"Expected a class definition");let e=pf.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pf.set(t,e),e)}/**
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
 */class bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bm.type="NONE";const gf=bm;/**
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
 */function so(t,e,n){return`firebase:${t}:${e}:${n}`}class Rr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=so(this.userKey,i.apiKey,o),this.fullPersistenceKey=so("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Rr(Vt(gf),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let o=i[0]||Vt(gf);const l=so(r,e.config.apiKey,e.name);let u=null;for(const f of n)try{const S=await f._get(l);if(S){const A=Bt._fromJSON(e,S);f!==o&&(u=A),o=f;break}}catch{}const d=i.filter(f=>f._shouldAllowMigration);return!o._shouldAllowMigration||!d.length?new Rr(o,e,r):(o=d[0],u&&await o._set(l,u.toJSON()),await Promise.all(n.map(async f=>{if(f!==o)try{await f._remove(l)}catch{}})),new Rr(o,e,r))}}/**
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
 */function mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qm(e))return"Blackberry";if(Ym(e))return"Webos";if(Rc(e))return"Safari";if((e.includes("chrome/")||Wm(e))&&!e.includes("edge/"))return"Chrome";if(Gm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Hm(t=Ne()){return/firefox\//i.test(t)}function Rc(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wm(t=Ne()){return/crios\//i.test(t)}function Km(t=Ne()){return/iemobile/i.test(t)}function Gm(t=Ne()){return/android/i.test(t)}function qm(t=Ne()){return/blackberry/i.test(t)}function Ym(t=Ne()){return/webos/i.test(t)}function al(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XE(t=Ne()){var e;return al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JE(){return zw()&&document.documentMode===10}function Qm(t=Ne()){return al(t)||Gm(t)||Ym(t)||qm(t)||/windows phone/i.test(t)||Km(t)}function ZE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xm(t,e=[]){let n;switch(t){case"Browser":n=mf(Ne());break;case"Worker":n=`${mf(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
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
 */class eI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((l,u)=>{try{const d=e(o);l(d)}catch(d){u(d)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tI(t,e={}){return Qt(t,"GET","/v2/passwordPolicy",Pn(t,e))}/**
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
 */const nI=6;class rI{constructor(e){var n,r,i,o;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:nI,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,l,u;const d={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,d),this.validatePasswordCharacterOptions(e,d),d.isValid&&(d.isValid=(n=d.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),d.isValid&&(d.isValid=(r=d.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),d.isValid&&(d.isValid=(i=d.containsLowercaseLetter)!==null&&i!==void 0?i:!0),d.isValid&&(d.isValid=(o=d.containsUppercaseLetter)!==null&&o!==void 0?o:!0),d.isValid&&(d.isValid=(l=d.containsNumericCharacter)!==null&&l!==void 0?l:!0),d.isValid&&(d.isValid=(u=d.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),d}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class iI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vf(this),this.idTokenSubscription=new vf(this),this.beforeStateQueue=new eI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Rr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vm(this,{idToken:e}),r=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Et(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&(d!=null&&d.user)&&(i=d.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Et(this.app))return Promise.reject(bt(this));const n=e?At(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Et(this.app)?Promise.reject(bt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Et(this.app)?Promise.reject(bt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tI(this),n=new rI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Rr.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(u,this,"internal-error"),u.then(()=>{l||o(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,r,i);return()=>{l=!0,d()}}else{const d=e.addObserver(n);return()=>{l=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nr(t){return At(t)}class vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ww(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sI(t){ul=t}function Jm(t){return ul.loadJS(t)}function oI(){return ul.recaptchaEnterpriseScript}function lI(){return ul.gapiScript}function aI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uI="recaptcha-enterprise",cI="NO_RECAPTCHA";class dI{constructor(e){this.type=uI,this.auth=nr(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(l,u)=>{$E(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const f=new VE(d);return o.tenantId==null?o._agentRecaptchaConfig=f:o._tenantRecaptchaConfigs[o.tenantId]=f,l(f.siteKey)}}).catch(d=>{u(d)})})}function i(o,l,u){const d=window.grecaptcha;hf(d)?d.enterprise.ready(()=>{d.enterprise.execute(o,{action:e}).then(f=>{l(f)}).catch(()=>{l(cI)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,l)=>{r(this.auth).then(u=>{if(!n&&hf(window.grecaptcha))i(u,o,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let d=oI();d.length!==0&&(d+=u),Jm(d).then(()=>{i(u,o,l)}).catch(f=>{l(f)})}}).catch(u=>{l(u)})})}}async function yf(t,e,n,r=!1){const i=new dI(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Eu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await yf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function hI(t,e){const n=tr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(qi(o,e??{}))return i;gt(i,"already-initialized")}return n.initialize({options:e})}function fI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pI(t,e,n){const r=nr(t);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=Zm(e),{host:l,port:u}=gI(e),d=u===null?"":`:${u}`;r.config.emulator={url:`${o}//${l}${d}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),mI()}function Zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gI(t){const e=Zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:wf(r.substr(o.length+1))}}else{const[o,l]=r.split(":");return{host:o,port:wf(l)}}}function wf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Nc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(e){return zt("not implemented")}_linkToIdToken(e,n){return zt("not implemented")}_getReauthenticationResolver(e){return zt("not implemented")}}async function vI(t,e){return Qt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yI(t,e){return is(t,"POST","/v1/accounts:signInWithPassword",Pn(t,e))}/**
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
 */async function wI(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}async function _I(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}/**
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
 */class Qi extends Nc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Qi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,n,"signInWithPassword",yI);case"emailLink":return wI(e,{email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,r,"signUpPassword",vI);case"emailLink":return _I(e,{idToken:n,email:this._email,oobCode:this._password});default:gt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Nr(t,e){return is(t,"POST","/v1/accounts:signInWithIdp",Pn(t,e))}/**
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
 */const EI="http://localhost";class Qn extends Nc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=kc(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new Qn(r,i);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Nr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Nr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Nr(e,n)}buildRequest(){const e={requestUri:EI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ns(n)}return e}}/**
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
 */function II(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SI(t){const e=yi(wi(t)).link,n=e?yi(wi(e)).deep_link_id:null,r=yi(wi(t)).deep_link_id;return(r?yi(wi(r)).link:null)||r||n||e||t}class Oc{constructor(e){var n,r,i,o,l,u;const d=yi(wi(e)),f=(n=d.apiKey)!==null&&n!==void 0?n:null,S=(r=d.oobCode)!==null&&r!==void 0?r:null,A=II((i=d.mode)!==null&&i!==void 0?i:null);V(f&&S&&A,"argument-error"),this.apiKey=f,this.operation=A,this.code=S,this.continueUrl=(o=d.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=d.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=SI(e);try{return new Oc(n)}catch{return null}}}/**
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
 */class Wr{constructor(){this.providerId=Wr.PROVIDER_ID}static credential(e,n){return Qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Oc.parseLink(n);return V(r,"argument-error"),Qi._fromEmailAndCode(e,r.code,r.tenantId)}}Wr.PROVIDER_ID="password";Wr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ss extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ln extends ss{constructor(){super("facebook.com")}static credential(e){return Qn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
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
 */class an extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class un extends ss{constructor(){super("github.com")}static credential(e){return Qn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
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
 */class cn extends ss{constructor(){super("twitter.com")}static credential(e,n){return Qn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.TWITTER_SIGN_IN_METHOD="twitter.com";cn.PROVIDER_ID="twitter.com";/**
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
 */async function TI(t,e){return is(t,"POST","/v1/accounts:signUp",Pn(t,e))}/**
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
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Bt._fromIdTokenResponse(e,r,i),l=_f(r);return new Xn({user:o,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=_f(r);return new Xn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function _f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class zo extends mt{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zo(e,n,r,i)}}function tv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,o,e,r):o})}async function kI(t,e,n=!1){const r=await zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",r)}/**
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
 */async function CI(t,e,n=!1){const{auth:r}=t;if(Et(r.app))return Promise.reject(bt(r));const i="reauthenticate";try{const o=await zr(t,tv(r,i,e,t),n);V(o.idToken,r,"internal-error");const l=Pc(o.idToken);V(l,r,"internal-error");const{sub:u}=l;return V(t.uid===u,r,"user-mismatch"),Xn._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&gt(r,"user-mismatch"),o}}/**
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
 */async function nv(t,e,n=!1){if(Et(t.app))return Promise.reject(bt(t));const r="signIn",i=await tv(t,r,e),o=await Xn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function AI(t,e){return nv(nr(t),e)}/**
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
 */async function rv(t){const e=nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PI(t,e,n){if(Et(t.app))return Promise.reject(bt(t));const r=nr(t),l=await Eu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TI).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&rv(t),d}),u=await Xn._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(u.user),u}function RI(t,e,n){return Et(t.app)?Promise.reject(bt(t)):AI(At(t),Wr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rv(t),r})}/**
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
 */async function NI(t,e){return Qt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function OI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=At(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await zr(r,NI(r.auth,o));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const u=r.providerData.find(({providerId:d})=>d==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function DI(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function LI(t,e,n){return At(t).beforeAuthStateChanged(e,n)}const Bo="__sak";/**
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
 */class iv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bo,"1"),this.storage.removeItem(Bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xI(){const t=Ne();return Rc(t)||al(t)}const MI=1e3,UI=10;class sv extends iv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xI()&&ZE(),this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,d)=>{this.notifyListeners(l,d)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},o=this.storage.getItem(r);JE()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const FI=sv;/**
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
 */class ov extends iv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ov.type="SESSION";const lv=ov;/**
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
 */function jI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async f=>f(n.origin,o)),d=await jI(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
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
 */function Dc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,l;return new Promise((u,d)=>{const f=Dc("",20);i.port1.start();const S=setTimeout(()=>{d(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(A){const C=A;if(C.data.eventId===f)switch(C.data.status){case"ack":clearTimeout(S),o=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(C.data.response);break;default:clearTimeout(S),clearTimeout(o),d(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function kt(){return window}function BI(t){kt().location.href=t}/**
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
 */function av(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function VI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $I(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bI(){return av()?self:null}/**
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
 */const uv="firebaseLocalStorageDb",HI=1,Vo="firebaseLocalStorage",cv="fbase_key";class os{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dl(t,e){return t.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function WI(){const t=indexedDB.deleteDatabase(uv);return new os(t).toPromise()}function Iu(){const t=indexedDB.open(uv,HI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vo,{keyPath:cv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vo)?e(r):(r.close(),await WI(),e(await Iu()))})})}async function Ef(t,e,n){const r=dl(t,!0).put({[cv]:e,value:n});return new os(r).toPromise()}async function KI(t,e){const n=dl(t,!1).get(e),r=await new os(n).toPromise();return r===void 0?null:r.value}function If(t,e){const n=dl(t,!0).delete(e);return new os(n).toPromise()}const GI=800,qI=3;class dv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(bI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VI(),!this.activeServiceWorker)return;this.sender=new zI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$I()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await Ef(e,Bo,"1"),await If(e,Bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>KI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>If(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=dl(i,!1).getAll();return new os(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dv.type="LOCAL";const YI=dv;new rs(3e4,6e4);/**
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
 */function QI(t,e){return e?Vt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lc extends Nc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Nr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Nr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XI(t){return nv(t.auth,new Lc(t),t.bypassAuthState)}function JI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),CI(n,new Lc(t),t.bypassAuthState)}async function ZI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),kI(n,new Lc(t),t.bypassAuthState)}/**
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
 */class hv{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:l,type:u}=e;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XI;case"linkViaPopup":case"linkViaRedirect":return ZI;case"reauthViaPopup":case"reauthViaRedirect":return JI;default:gt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eS=new rs(2e3,1e4);class Er extends hv{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eS.get())};e()}}Er.currentPopupAction=null;/**
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
 */const tS="pendingRedirect",oo=new Map;class nS extends hv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oo.get(this.auth._key());if(!e){try{const r=await rS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oo.set(this.auth._key(),e)}return this.bypassAuthState||oo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rS(t,e){const n=oS(e),r=sS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iS(t,e){oo.set(t._key(),e)}function sS(t){return Vt(t._redirectPersistence)}function oS(t){return so(tS,t.config.apiKey,t.name)}async function lS(t,e,n=!1){if(Et(t.app))return Promise.reject(bt(t));const r=nr(t),i=QI(r,e),l=await new nS(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const aS=10*60*1e3;class uS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sf(e))}saveEventToCache(e){this.cachedEventUids.add(Sf(e)),this.lastProcessedEventTime=Date.now()}}function Sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
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
 */async function dS(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
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
 */const hS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fS=/^https?/;async function pS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dS(t);for(const n of e)try{if(gS(n))return}catch{}gt(t,"unauthorized-domain")}function gS(t){const e=wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!fS.test(n))return!1;if(hS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const mS=new rs(3e4,6e4);function Tf(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vS(t){return new Promise((e,n)=>{var r,i,o;function l(){Tf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tf(),n(Tt(t,"network-request-failed"))},timeout:mS.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=kt().gapi)===null||o===void 0)&&o.load)l();else{const u=aI("iframefcb");return kt()[u]=()=>{gapi.load?l():n(Tt(t,"network-request-failed"))},Jm(`${lI()}?onload=${u}`).catch(d=>n(d))}}).catch(e=>{throw lo=null,e})}let lo=null;function yS(t){return lo=lo||vS(t),lo}/**
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
 */const wS=new rs(5e3,15e3),_S="__/auth/iframe",ES="emulator/auth/iframe",IS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TS(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ac(e,ES):`https://${t.config.authDomain}/${_S}`,r={apiKey:e.apiKey,appName:t.name,v:Hr},i=SS.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ns(r).slice(1)}`}async function kS(t){const e=await yS(t),n=kt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:TS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const l=Tt(t,"network-request-failed"),u=kt().setTimeout(()=>{o(l)},wS.get());function d(){kt().clearTimeout(u),i(r)}r.ping(d).then(d,()=>{o(l)})}))}/**
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
 */const CS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AS=500,PS=600,RS="_blank",NS="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OS(t,e,n,r=AS,i=PS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const d=Object.assign(Object.assign({},CS),{width:r.toString(),height:i.toString(),top:o,left:l}),f=Ne().toLowerCase();n&&(u=Wm(f)?RS:n),Hm(f)&&(e=e||NS,d.scrollbars="yes");const S=Object.entries(d).reduce((C,[O,R])=>`${C}${O}=${R},`,"");if(XE(f)&&u!=="_self")return DS(e||"",u),new kf(null);const A=window.open(e||"",u,S);V(A,t,"popup-blocked");try{A.focus()}catch{}return new kf(A)}function DS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const LS="__/auth/handler",xS="emulator/auth/handler",MS=encodeURIComponent("fac");async function Cf(t,e,n,r,i,o){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(e instanceof ev){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Hw(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,A]of Object.entries({}))l[S]=A}if(e instanceof ss){const S=e.getScopes().filter(A=>A!=="");S.length>0&&(l.scopes=S.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const S of Object.keys(u))u[S]===void 0&&delete u[S];const d=await t._getAppCheckToken(),f=d?`#${MS}=${encodeURIComponent(d)}`:"";return`${US(t)}?${ns(u).slice(1)}${f}`}function US({config:t}){return t.emulator?Ac(t,xS):`https://${t.authDomain}/${LS}`}/**
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
 */const ya="webStorageSupport";class FS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lv,this._completeRedirectFn=lS,this._overrideRedirectResult=iS}async _openPopup(e,n,r,i){var o;qt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const l=await Cf(e,n,r,wu(),i);return OS(e,l,Dc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Cf(e,n,r,wu(),i);return BI(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(qt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kS(e),r=new uS(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ya,{type:ya},i=>{var o;const l=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ya];l!==void 0&&n(!!l),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||Rc()||al()}}const jS=FS;var Af="@firebase/auth",Pf="1.7.5";/**
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
 */class zS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VS(t){Ct(new pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;V(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const d={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xm(t)},f=new iI(r,i,o,d);return fI(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new pt("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(r=>new zS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Af,Pf,BS(t)),nt(Af,Pf,"esm2017")}/**
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
 */const $S=5*60,bS=em("authIdTokenMaxAge")||$S;let Rf=null;const HS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bS)return;const i=n==null?void 0:n.token;Rf!==i&&(Rf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function WS(t=_c()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hI(t,{popupRedirectResolver:jS,persistence:[YI,FI,lv]}),r=em("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const l=HS(o.toString());LI(n,l,()=>l(n.currentUser)),DI(n,u=>l(u))}}const i=Jg("auth");return i&&pI(n,`http://${i}`),n}function KS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Tt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",KS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VS("Browser");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,p){function g(){}g.prototype=p.prototype,m.D=p.prototype,m.prototype=new g,m.prototype.constructor=m,m.C=function(y,_,k){for(var v=Array(arguments.length-2),Qe=2;Qe<arguments.length;Qe++)v[Qe-2]=arguments[Qe];return p.prototype[_].apply(y,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var _=0;16>_;++_)y[_]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(_=0;16>_;++_)y[_]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=m.g[0],g=m.g[1],_=m.g[2];var k=m.g[3],v=p+(k^g&(_^k))+y[0]+3614090360&4294967295;p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[1]+3905402710&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[2]+606105819&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[3]+3250441966&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(k^g&(_^k))+y[4]+4118548399&4294967295,p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[5]+1200080426&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[6]+2821735955&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[7]+4249261313&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(k^g&(_^k))+y[8]+1770035416&4294967295,p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[9]+2336552879&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[10]+4294925233&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[11]+2304563134&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(k^g&(_^k))+y[12]+1804603682&4294967295,p=g+(v<<7&4294967295|v>>>25),v=k+(_^p&(g^_))+y[13]+4254626195&4294967295,k=p+(v<<12&4294967295|v>>>20),v=_+(g^k&(p^g))+y[14]+2792965006&4294967295,_=k+(v<<17&4294967295|v>>>15),v=g+(p^_&(k^p))+y[15]+1236535329&4294967295,g=_+(v<<22&4294967295|v>>>10),v=p+(_^k&(g^_))+y[1]+4129170786&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[6]+3225465664&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[11]+643717713&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[0]+3921069994&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^k&(g^_))+y[5]+3593408605&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[10]+38016083&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[15]+3634488961&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[4]+3889429448&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^k&(g^_))+y[9]+568446438&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[14]+3275163606&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[3]+4107603335&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[8]+1163531501&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(_^k&(g^_))+y[13]+2850285829&4294967295,p=g+(v<<5&4294967295|v>>>27),v=k+(g^_&(p^g))+y[2]+4243563512&4294967295,k=p+(v<<9&4294967295|v>>>23),v=_+(p^g&(k^p))+y[7]+1735328473&4294967295,_=k+(v<<14&4294967295|v>>>18),v=g+(k^p&(_^k))+y[12]+2368359562&4294967295,g=_+(v<<20&4294967295|v>>>12),v=p+(g^_^k)+y[5]+4294588738&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[8]+2272392833&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[11]+1839030562&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[14]+4259657740&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^k)+y[1]+2763975236&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[4]+1272893353&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[7]+4139469664&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[10]+3200236656&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^k)+y[13]+681279174&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[0]+3936430074&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[3]+3572445317&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[6]+76029189&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(g^_^k)+y[9]+3654602809&4294967295,p=g+(v<<4&4294967295|v>>>28),v=k+(p^g^_)+y[12]+3873151461&4294967295,k=p+(v<<11&4294967295|v>>>21),v=_+(k^p^g)+y[15]+530742520&4294967295,_=k+(v<<16&4294967295|v>>>16),v=g+(_^k^p)+y[2]+3299628645&4294967295,g=_+(v<<23&4294967295|v>>>9),v=p+(_^(g|~k))+y[0]+4096336452&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[7]+1126891415&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[14]+2878612391&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[5]+4237533241&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~k))+y[12]+1700485571&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[3]+2399980690&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[10]+4293915773&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[1]+2240044497&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~k))+y[8]+1873313359&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[15]+4264355552&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[6]+2734768916&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[13]+1309151649&4294967295,g=_+(v<<21&4294967295|v>>>11),v=p+(_^(g|~k))+y[4]+4149444226&4294967295,p=g+(v<<6&4294967295|v>>>26),v=k+(g^(p|~_))+y[11]+3174756917&4294967295,k=p+(v<<10&4294967295|v>>>22),v=_+(p^(k|~g))+y[2]+718787259&4294967295,_=k+(v<<15&4294967295|v>>>17),v=g+(k^(_|~p))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+p&4294967295,m.g[1]=m.g[1]+(_+(v<<21&4294967295|v>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+k&4294967295}r.prototype.u=function(m,p){p===void 0&&(p=m.length);for(var g=p-this.blockSize,y=this.B,_=this.h,k=0;k<p;){if(_==0)for(;k<=g;)i(this,m,k),k+=this.blockSize;if(typeof m=="string"){for(;k<p;)if(y[_++]=m.charCodeAt(k++),_==this.blockSize){i(this,y),_=0;break}}else for(;k<p;)if(y[_++]=m[k++],_==this.blockSize){i(this,y),_=0;break}}this.h=_,this.o+=p},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var p=1;p<m.length-8;++p)m[p]=0;var g=8*this.o;for(p=m.length-8;p<m.length;++p)m[p]=g&255,g/=256;for(this.u(m),m=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)m[g++]=this.g[p]>>>y&255;return m};function o(m,p){var g=u;return Object.prototype.hasOwnProperty.call(g,m)?g[m]:g[m]=p(m)}function l(m,p){this.h=p;for(var g=[],y=!0,_=m.length-1;0<=_;_--){var k=m[_]|0;y&&k==p||(g[_]=k,y=!1)}this.g=g}var u={};function d(m){return-128<=m&&128>m?o(m,function(p){return new l([p|0],0>p?-1:0)}):new l([m|0],0>m?-1:0)}function f(m){if(isNaN(m)||!isFinite(m))return A;if(0>m)return x(f(-m));for(var p=[],g=1,y=0;m>=g;y++)p[y]=m/g|0,g*=4294967296;return new l(p,0)}function S(m,p){if(m.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(m.charAt(0)=="-")return x(S(m.substring(1),p));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=A,_=0;_<m.length;_+=8){var k=Math.min(8,m.length-_),v=parseInt(m.substring(_,_+k),p);8>k?(k=f(Math.pow(p,k)),y=y.j(k).add(f(v))):(y=y.j(g),y=y.add(f(v)))}return y}var A=d(0),C=d(1),O=d(16777216);t=l.prototype,t.m=function(){if(L(this))return-x(this).m();for(var m=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);m+=(0<=y?y:4294967296+y)*p,p*=4294967296}return m},t.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(R(this))return"0";if(L(this))return"-"+x(this).toString(m);for(var p=f(Math.pow(m,6)),g=this,y="";;){var _=N(g,p).g;g=E(g,_.j(p));var k=((0<g.g.length?g.g[0]:g.h)>>>0).toString(m);if(g=_,R(g))return k+y;for(;6>k.length;)k="0"+k;y=k+y}},t.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function R(m){if(m.h!=0)return!1;for(var p=0;p<m.g.length;p++)if(m.g[p]!=0)return!1;return!0}function L(m){return m.h==-1}t.l=function(m){return m=E(this,m),L(m)?-1:R(m)?0:1};function x(m){for(var p=m.g.length,g=[],y=0;y<p;y++)g[y]=~m.g[y];return new l(g,~m.h).add(C)}t.abs=function(){return L(this)?x(this):this},t.add=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0,_=0;_<=p;_++){var k=y+(this.i(_)&65535)+(m.i(_)&65535),v=(k>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);y=v>>>16,k&=65535,v&=65535,g[_]=v<<16|k}return new l(g,g[g.length-1]&-2147483648?-1:0)};function E(m,p){return m.add(x(p))}t.j=function(m){if(R(this)||R(m))return A;if(L(this))return L(m)?x(this).j(x(m)):x(x(this).j(m));if(L(m))return x(this.j(x(m)));if(0>this.l(O)&&0>m.l(O))return f(this.m()*m.m());for(var p=this.g.length+m.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var _=0;_<m.g.length;_++){var k=this.i(y)>>>16,v=this.i(y)&65535,Qe=m.i(_)>>>16,Rn=m.i(_)&65535;g[2*y+2*_]+=v*Rn,w(g,2*y+2*_),g[2*y+2*_+1]+=k*Rn,w(g,2*y+2*_+1),g[2*y+2*_+1]+=v*Qe,w(g,2*y+2*_+1),g[2*y+2*_+2]+=k*Qe,w(g,2*y+2*_+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function w(m,p){for(;(m[p]&65535)!=m[p];)m[p+1]+=m[p]>>>16,m[p]&=65535,p++}function I(m,p){this.g=m,this.h=p}function N(m,p){if(R(p))throw Error("division by zero");if(R(m))return new I(A,A);if(L(m))return p=N(x(m),p),new I(x(p.g),x(p.h));if(L(p))return p=N(m,x(p)),new I(x(p.g),p.h);if(30<m.g.length){if(L(m)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var g=C,y=p;0>=y.l(m);)g=U(g),y=U(y);var _=F(g,1),k=F(y,1);for(y=F(y,2),g=F(g,2);!R(y);){var v=k.add(y);0>=v.l(m)&&(_=_.add(g),k=v),y=F(y,1),g=F(g,1)}return p=E(m,_.j(p)),new I(_,p)}for(_=A;0<=m.l(p);){for(g=Math.max(1,Math.floor(m.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),k=f(g),v=k.j(p);L(v)||0<v.l(m);)g-=y,k=f(g),v=k.j(p);R(k)&&(k=C),_=_.add(k),m=E(m,v)}return new I(_,m)}t.A=function(m){return N(this,m).h},t.and=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&m.i(y);return new l(g,this.h&m.h)},t.or=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|m.i(y);return new l(g,this.h|m.h)},t.xor=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^m.i(y);return new l(g,this.h^m.h)};function U(m){for(var p=m.g.length+1,g=[],y=0;y<p;y++)g[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(g,m.h)}function F(m,p){var g=p>>5;p%=32;for(var y=m.g.length-g,_=[],k=0;k<y;k++)_[k]=0<p?m.i(k+g)>>>p|m.i(k+g+1)<<32-p:m.i(k+g);return new l(_,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=S,pv=l}).apply(typeof Nf<"u"?Nf:typeof self<"u"?self:typeof window<"u"?window:{});var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hs=="object"&&Hs];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=n(this);function i(s,a){if(a)e:{var c=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in c))break e;c=c[T]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&e(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,h=!1,T={next:function(){if(!h&&c<s.length){var P=c++;return{value:a(P,s[P]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function S(s,a,c){return s.call.apply(s.bind,arguments)}function A(s,a,c){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function C(s,a,c){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?S:A,C.apply(null,arguments)}function O(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function R(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(h,T,P){for(var M=Array(arguments.length-2),X=2;X<arguments.length;X++)M[X-2]=arguments[X];return a.prototype[T].apply(h,M)}}function L(s){const a=s.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function x(s,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(d(h)){const T=s.length||0,P=h.length||0;s.length=T+P;for(let M=0;M<P;M++)s[T+M]=h[M]}else s.push(h)}}class E{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function w(s){return/^[\s\xa0]*$/.test(s)}function I(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function N(s){return N[" "](s),s}N[" "]=function(){};var U=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function F(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function m(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function p(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let c,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(c in h)s[c]=h[c];for(let P=0;P<g.length;P++)c=g[P],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function _(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function k(s){u.setTimeout(()=>{throw s},0)}function v(){var s=$;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Qe{constructor(){this.h=this.g=null}add(a,c){const h=Rn.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var Rn=new E(()=>new Kr,s=>s.reset());class Kr{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let Pt,j=!1,$=new Qe,b=()=>{const s=u.Promise.resolve(void 0);Pt=()=>{s.then(re)}};var re=()=>{for(var s;s=v();){try{s.h.call(s.g)}catch(c){k(c)}var a=Rn;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}j=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Rt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function Nt(s,a){if(ae.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(U){e:{try{N(a.nodeName);var T=!0;break e}catch{}T=!1}T||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ot[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Nt.aa.h.call(this)}}R(Nt,ae);var Ot={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var Dt="closure_listenable_"+(1e6*Math.random()|0),_v=0;function Ev(s,a,c,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=T,this.key=++_v,this.da=this.fa=!1}function as(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function us(s){this.src=s,this.g={},this.h=0}us.prototype.add=function(s,a,c,h,T){var P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);var M=fl(s,a,h,T);return-1<M?(a=s[M],c||(a.fa=!1)):(a=new Ev(a,this.src,P,!!h,T),a.fa=c,s.push(a)),a};function hl(s,a){var c=a.type;if(c in s.g){var h=s.g[c],T=Array.prototype.indexOf.call(h,a,void 0),P;(P=0<=T)&&Array.prototype.splice.call(h,T,1),P&&(as(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function fl(s,a,c,h){for(var T=0;T<s.length;++T){var P=s[T];if(!P.da&&P.listener==a&&P.capture==!!c&&P.ha==h)return T}return-1}var pl="closure_lm_"+(1e6*Math.random()|0),gl={};function jc(s,a,c,h,T){if(Array.isArray(a)){for(var P=0;P<a.length;P++)jc(s,a[P],c,h,T);return null}return c=Vc(c),s&&s[Dt]?s.K(a,c,f(h)?!!h.capture:!!h,T):Iv(s,a,c,!1,h,T)}function Iv(s,a,c,h,T,P){if(!a)throw Error("Invalid event type");var M=f(T)?!!T.capture:!!T,X=vl(s);if(X||(s[pl]=X=new us(s)),c=X.add(a,c,h,M,P),c.proxy)return c;if(h=Sv(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)Rt||(T=M),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(Bc(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function Sv(){function s(c){return a.call(s.src,s.listener,c)}const a=Tv;return s}function zc(s,a,c,h,T){if(Array.isArray(a))for(var P=0;P<a.length;P++)zc(s,a[P],c,h,T);else h=f(h)?!!h.capture:!!h,c=Vc(c),s&&s[Dt]?(s=s.i,a=String(a).toString(),a in s.g&&(P=s.g[a],c=fl(P,c,h,T),-1<c&&(as(P[c]),Array.prototype.splice.call(P,c,1),P.length==0&&(delete s.g[a],s.h--)))):s&&(s=vl(s))&&(a=s.g[a.toString()],s=-1,a&&(s=fl(a,c,h,T)),(c=-1<s?a[s]:null)&&ml(c))}function ml(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[Dt])hl(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(Bc(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=vl(a))?(hl(c,s),c.h==0&&(c.src=null,a[pl]=null)):as(s)}}}function Bc(s){return s in gl?gl[s]:gl[s]="on"+s}function Tv(s,a){if(s.da)s=!0;else{a=new Nt(a,this);var c=s.listener,h=s.ha||s.src;s.fa&&ml(s),s=c.call(h,a)}return s}function vl(s){return s=s[pl],s instanceof us?s:null}var yl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vc(s){return typeof s=="function"?s:(s[yl]||(s[yl]=function(a){return s.handleEvent(a)}),s[yl])}function _e(){Q.call(this),this.i=new us(this),this.M=this,this.F=null}R(_e,Q),_e.prototype[Dt]=!0,_e.prototype.removeEventListener=function(s,a,c,h){zc(this,s,a,c,h)};function Oe(s,a){var c,h=s.F;if(h)for(c=[];h;h=h.F)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ae(a,s);else if(a instanceof ae)a.target=a.target||s;else{var T=a;a=new ae(h,s),y(a,T)}if(T=!0,c)for(var P=c.length-1;0<=P;P--){var M=a.g=c[P];T=cs(M,h,!0,a)&&T}if(M=a.g=s,T=cs(M,h,!0,a)&&T,T=cs(M,h,!1,a)&&T,c)for(P=0;P<c.length;P++)M=a.g=c[P],T=cs(M,h,!1,a)&&T}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],h=0;h<c.length;h++)as(c[h]);delete s.g[a],s.h--}}this.F=null},_e.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},_e.prototype.L=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function cs(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,P=0;P<a.length;++P){var M=a[P];if(M&&!M.da&&M.capture==c){var X=M.listener,me=M.ha||M.src;M.fa&&hl(s.i,M),T=X.call(me,h)!==!1&&T}}return T&&!h.defaultPrevented}function $c(s,a,c){if(typeof s=="function")c&&(s=C(s,c));else if(s&&typeof s.handleEvent=="function")s=C(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function bc(s){s.g=$c(()=>{s.g=null,s.i&&(s.i=!1,bc(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class kv extends Q{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:bc(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gr(s){Q.call(this),this.h=s,this.g={}}R(Gr,Q);var Hc=[];function Wc(s){F(s.g,function(a,c){this.g.hasOwnProperty(c)&&ml(a)},s),s.g={}}Gr.prototype.N=function(){Gr.aa.N.call(this),Wc(this)},Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wl=u.JSON.stringify,Cv=u.JSON.parse,Av=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function _l(){}_l.prototype.h=null;function Kc(s){return s.h||(s.h=s.i())}function Pv(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function El(){ae.call(this,"d")}R(El,ae);function Il(){ae.call(this,"c")}R(Il,ae);var rr={},Gc=null;function Sl(){return Gc=Gc||new _e}rr.La="serverreachability";function qc(s){ae.call(this,rr.La,s)}R(qc,ae);function Yr(s){const a=Sl();Oe(a,new qc(a))}rr.STAT_EVENT="statevent";function Yc(s,a){ae.call(this,rr.STAT_EVENT,s),this.stat=a}R(Yc,ae);function De(s){const a=Sl();Oe(a,new Yc(a,s))}rr.Ma="timingevent";function Qc(s,a){ae.call(this,rr.Ma,s),this.size=a}R(Qc,ae);function Qr(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function Xr(){this.g=!0}Xr.prototype.xa=function(){this.g=!1};function Rv(s,a,c,h,T,P){s.info(function(){if(s.g)if(P)for(var M="",X=P.split("&"),me=0;me<X.length;me++){var G=X[me].split("=");if(1<G.length){var Ee=G[0];G=G[1];var Ie=Ee.split("_");M=2<=Ie.length&&Ie[1]=="type"?M+(Ee+"="+G+"&"):M+(Ee+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+c+`
`+M})}function Nv(s,a,c,h,T,P,M){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+c+`
`+P+" "+M})}function ir(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Dv(s,c)+(h?" "+h:"")})}function Ov(s,a){s.info(function(){return"TIMEOUT: "+a})}Xr.prototype.info=function(){};function Dv(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var h=c[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var P=T[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<T.length;M++)T[M]=""}}}}return wl(c)}catch{return a}}var Tl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Lv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kl;function ds(){}R(ds,_l),ds.prototype.g=function(){return new XMLHttpRequest},ds.prototype.i=function(){return{}},kl=new ds;function Xt(s,a,c,h){this.j=s,this.i=a,this.l=c,this.R=h||1,this.U=new Gr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xc}function Xc(){this.i=null,this.g="",this.h=!1}var Jc={},Cl={};function Al(s,a,c){s.L=1,s.v=gs(Lt(a)),s.m=c,s.P=!0,Zc(s,null)}function Zc(s,a){s.F=Date.now(),hs(s),s.A=Lt(s.v);var c=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),fd(c.i,"t",h),s.C=0,c=s.j.J,s.h=new Xc,s.g=Od(s.j,c?a:null,!s.m),0<s.O&&(s.M=new kv(C(s.Y,s,s.g),s.O)),a=s.U,c=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(Hc[0]=T.toString()),T=Hc);for(var P=0;P<T.length;P++){var M=jc(c,T[P],h||a.handleEvent,!1,a.h||a);if(!M)break;a.g[M.key]=M}a=s.H?p(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Yr(),Rv(s.i,s.u,s.A,s.l,s.R,s.m)}Xt.prototype.ca=function(s){s=s.target;const a=this.M;a&&xt(s)==3?a.j():this.Y(s)},Xt.prototype.Y=function(s){try{if(s==this.g)e:{const Ie=xt(this.g);var a=this.g.Ba();const lr=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||_d(this.g)))){this.J||Ie!=4||a==7||(a==8||0>=lr?Yr(3):Yr(2)),Pl(this);var c=this.g.Z();this.X=c;t:if(ed(this)){var h=_d(this.g);s="";var T=h.length,P=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),Jr(this);var M="";break t}this.h.i=new u.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(P&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=c==200,Nv(this.i,this.u,this.A,this.l,this.R,Ie,c),this.o){if(this.T&&!this.K){t:{if(this.g){var X,me=this.g;if((X=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(X)){var G=X;break t}}G=null}if(c=G)ir(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rl(this,c);else{this.o=!1,this.s=3,De(12),Nn(this),Jr(this);break e}}if(this.P){c=!0;let ot;for(;!this.J&&this.C<M.length;)if(ot=xv(this,M),ot==Cl){Ie==4&&(this.s=4,De(14),c=!1),ir(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==Jc){this.s=4,De(15),ir(this.i,this.l,M,"[Invalid Chunk]"),c=!1;break}else ir(this.i,this.l,ot,null),Rl(this,ot);if(ed(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||M.length!=0||this.h.h||(this.s=1,De(16),c=!1),this.o=this.o&&c,!c)ir(this.i,this.l,M,"[Invalid Chunked Response]"),Nn(this),Jr(this);else if(0<M.length&&!this.W){this.W=!0;var Ee=this.j;Ee.g==this&&Ee.ba&&!Ee.M&&(Ee.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Ml(Ee),Ee.M=!0,De(11))}}else ir(this.i,this.l,M,null),Rl(this,M);Ie==4&&Nn(this),this.o&&!this.J&&(Ie==4?Ad(this.j,this):(this.o=!1,hs(this)))}else Xv(this.g),c==400&&0<M.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Nn(this),Jr(this)}}}catch{}finally{}};function ed(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function xv(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?Cl:(c=Number(a.substring(c,h)),isNaN(c)?Jc:(h+=1,h+c>a.length?Cl:(a=a.slice(h,h+c),s.C=h+c,a)))}Xt.prototype.cancel=function(){this.J=!0,Nn(this)};function hs(s){s.S=Date.now()+s.I,td(s,s.I)}function td(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Qr(C(s.ba,s),a)}function Pl(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Xt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ov(this.i,this.A),this.L!=2&&(Yr(),De(17)),Nn(this),this.s=2,Jr(this)):td(this,this.S-s)};function Jr(s){s.j.G==0||s.J||Ad(s.j,s)}function Nn(s){Pl(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Wc(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Rl(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||Nl(c.h,s))){if(!s.K&&Nl(c.h,s)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){e:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)Es(c),ws(c);else break e;xl(c),De(18)}}else c.za=T[1],0<c.za-c.T&&37500>T[2]&&c.F&&c.v==0&&!c.C&&(c.C=Qr(C(c.Za,c),6e3));if(1>=id(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else Dn(c,11)}else if((s.K||c.g==s)&&Es(c),!w(a))for(T=c.Da.g.parse(a),a=0;a<T.length;a++){let G=T[a];if(c.T=G[0],G=G[1],c.G==2)if(G[0]=="c"){c.K=G[1],c.ia=G[2];const Ee=G[3];Ee!=null&&(c.la=Ee,c.j.info("VER="+c.la));const Ie=G[4];Ie!=null&&(c.Aa=Ie,c.j.info("SVER="+c.Aa));const lr=G[5];lr!=null&&typeof lr=="number"&&0<lr&&(h=1.5*lr,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const ot=s.g;if(ot){const Is=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Is){var P=h.h;P.g||Is.indexOf("spdy")==-1&&Is.indexOf("quic")==-1&&Is.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ol(P,P.h),P.h=null))}if(h.D){const Ul=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Ul&&(h.ya=Ul,Z(h.I,h.D,Ul))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var M=s;if(h.qa=Nd(h,h.J?h.ia:null,h.W),M.K){sd(h.h,M);var X=M,me=h.L;me&&(X.I=me),X.B&&(Pl(X),hs(X)),h.g=M}else kd(h);0<c.i.length&&_s(c)}else G[0]!="stop"&&G[0]!="close"||Dn(c,7);else c.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?Dn(c,7):Ll(c):G[0]!="noop"&&c.l&&c.l.ta(G),c.v=0)}}Yr(4)}catch{}}var Mv=class{constructor(s,a){this.g=s,this.map=a}};function nd(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rd(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function id(s){return s.h?1:s.g?s.g.size:0}function Nl(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ol(s,a){s.g?s.g.add(a):s.h=a}function sd(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}nd.prototype.cancel=function(){if(this.i=od(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function od(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return L(s.i)}function Uv(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],c=s.length,h=0;h<c;h++)a.push(s[h]);return a}a=[],c=0;for(h in s)a[c++]=s[h];return a}function Fv(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const h in s)a[c++]=h;return a}}}function ld(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=Fv(s),h=Uv(s),T=h.length,P=0;P<T;P++)a.call(void 0,h[P],c&&c[P],s)}var ad=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jv(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var h=s[c].indexOf("="),T=null;if(0<=h){var P=s[c].substring(0,h);T=s[c].substring(h+1)}else P=s[c];a(P,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function On(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof On){this.h=s.h,fs(this,s.j),this.o=s.o,this.g=s.g,ps(this,s.s),this.l=s.l;var a=s.i,c=new ti;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),ud(this,c),this.m=s.m}else s&&(a=String(s).match(ad))?(this.h=!1,fs(this,a[1]||"",!0),this.o=Zr(a[2]||""),this.g=Zr(a[3]||"",!0),ps(this,a[4]),this.l=Zr(a[5]||"",!0),ud(this,a[6]||"",!0),this.m=Zr(a[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}On.prototype.toString=function(){var s=[],a=this.j;a&&s.push(ei(a,cd,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(ei(a,cd,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(ei(c,c.charAt(0)=="/"?Vv:Bv,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",ei(c,bv)),s.join("")};function Lt(s){return new On(s)}function fs(s,a,c){s.j=c?Zr(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function ps(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function ud(s,a,c){a instanceof ti?(s.i=a,Hv(s.i,s.h)):(c||(a=ei(a,$v)),s.i=new ti(a,s.h))}function Z(s,a,c){s.i.set(a,c)}function gs(s){return Z(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Zr(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function ei(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,zv),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function zv(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var cd=/[#\/\?@]/g,Bv=/[#\?:]/g,Vv=/[#\?]/g,$v=/[#\?@]/g,bv=/#/g;function ti(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Jt(s){s.g||(s.g=new Map,s.h=0,s.i&&jv(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}t=ti.prototype,t.add=function(s,a){Jt(this),this.i=null,s=sr(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function dd(s,a){Jt(s),a=sr(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function hd(s,a){return Jt(s),a=sr(s,a),s.g.has(a)}t.forEach=function(s,a){Jt(this),this.g.forEach(function(c,h){c.forEach(function(T){s.call(a,T,h,this)},this)},this)},t.na=function(){Jt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const T=s[h];for(let P=0;P<T.length;P++)c.push(a[h])}return c},t.V=function(s){Jt(this);let a=[];if(typeof s=="string")hd(this,s)&&(a=a.concat(this.g.get(sr(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},t.set=function(s,a){return Jt(this),this.i=null,s=sr(this,s),hd(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},t.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function fd(s,a,c){dd(s,a),0<c.length&&(s.i=null,s.g.set(sr(s,a),L(c)),s.h+=c.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const P=encodeURIComponent(String(h)),M=this.V(h);for(h=0;h<M.length;h++){var T=P;M[h]!==""&&(T+="="+encodeURIComponent(String(M[h]))),s.push(T)}}return this.i=s.join("&")};function sr(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Hv(s,a){a&&!s.j&&(Jt(s),s.i=null,s.g.forEach(function(c,h){var T=h.toLowerCase();h!=T&&(dd(this,h),fd(this,T,c))},s)),s.j=a}function Wv(s,a){const c=new Xr;if(u.Image){const h=new Image;h.onload=O(Zt,c,"TestLoadImage: loaded",!0,a,h),h.onerror=O(Zt,c,"TestLoadImage: error",!1,a,h),h.onabort=O(Zt,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=O(Zt,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Kv(s,a){const c=new Xr,h=new AbortController,T=setTimeout(()=>{h.abort(),Zt(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(P=>{clearTimeout(T),P.ok?Zt(c,"TestPingServer: ok",!0,a):Zt(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Zt(c,"TestPingServer: error",!1,a)})}function Zt(s,a,c,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(c)}catch{}}function Gv(){this.g=new Av}function qv(s,a,c){const h=c||"";try{ld(s,function(T,P){let M=T;f(T)&&(M=wl(T)),a.push(h+P+"="+encodeURIComponent(M))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function ms(s){this.l=s.Ub||null,this.j=s.eb||!1}R(ms,_l),ms.prototype.g=function(){return new vs(this.l,this.j)},ms.prototype.i=function(s){return function(){return s}}({});function vs(s,a){_e.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(vs,_e),t=vs.prototype,t.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,ri(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pd(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function pd(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}t.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?ni(this):ri(this),this.readyState==3&&pd(this)}},t.Ra=function(s){this.g&&(this.response=this.responseText=s,ni(this))},t.Qa=function(s){this.g&&(this.response=s,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(s){s.readyState=4,s.l=null,s.j=null,s.v=null,ri(s)}t.setRequestHeader=function(s,a){this.u.append(s,a)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function ri(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function gd(s){let a="";return F(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function Dl(s,a,c){e:{for(h in c){var h=!1;break e}h=!0}h||(c=gd(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):Z(s,a,c))}function ue(s){_e.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ue,_e);var Yv=/^https?$/i,Qv=["POST","PUT"];t=ue.prototype,t.Ha=function(s){this.J=s},t.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kl.g(),this.v=this.o?Kc(this.o):Kc(kl),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(P){md(this,P);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)c.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const P of h.keys())c.set(P,h.get(P));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(P=>P.toLowerCase()=="content-type"),T=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Qv,a,void 0))||h||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of c)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wd(this),this.u=!0,this.g.send(s),this.u=!1}catch(P){md(this,P)}};function md(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,vd(s),ys(s)}function vd(s){s.A||(s.A=!0,Oe(s,"complete"),Oe(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Oe(this,"complete"),Oe(this,"abort"),ys(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ys(this,!0)),ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yd(this):this.bb())},t.bb=function(){yd(this)};function yd(s){if(s.h&&typeof l<"u"&&(!s.v[1]||xt(s)!=4||s.Z()!=2)){if(s.u&&xt(s)==4)$c(s.Ea,0,s);else if(Oe(s,"readystatechange"),xt(s)==4){s.h=!1;try{const M=s.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var c;if(!(c=a)){var h;if(h=M===0){var T=String(s.D).match(ad)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),h=!Yv.test(T?T.toLowerCase():"")}c=h}if(c)Oe(s,"complete"),Oe(s,"success");else{s.m=6;try{var P=2<xt(s)?s.g.statusText:""}catch{P=""}s.l=P+" ["+s.Z()+"]",vd(s)}}finally{ys(s)}}}}function ys(s,a){if(s.g){wd(s);const c=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Oe(s,"ready");try{c.onreadystatechange=h}catch{}}}function wd(s){s.I&&(u.clearTimeout(s.I),s.I=null)}t.isActive=function(){return!!this.g};function xt(s){return s.g?s.g.readyState:0}t.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Cv(a)}};function _d(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Xv(s){const a={};s=(s.g&&2<=xt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(w(s[h]))continue;var c=_(s[h]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const P=a[T]||[];a[T]=P,P.push(c)}m(a,function(h){return h.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ii(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ed(s){this.Aa=0,this.i=[],this.j=new Xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ii("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ii("baseRetryDelayMs",5e3,s),this.cb=ii("retryDelaySeedMs",1e4,s),this.Wa=ii("forwardChannelMaxRetries",2,s),this.wa=ii("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new nd(s&&s.concurrentRequestLimit),this.Da=new Gv,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ed.prototype,t.la=8,t.G=1,t.connect=function(s,a,c,h){De(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Nd(this,null,this.W),_s(this)};function Ll(s){if(Id(s),s.G==3){var a=s.U++,c=Lt(s.I);if(Z(c,"SID",s.K),Z(c,"RID",a),Z(c,"TYPE","terminate"),si(s,c),a=new Xt(s,s.j,a),a.L=2,a.v=gs(Lt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Od(a.j,null),a.g.ea(a.v)),a.F=Date.now(),hs(a)}Rd(s)}function ws(s){s.g&&(Ml(s),s.g.cancel(),s.g=null)}function Id(s){ws(s),s.u&&(u.clearTimeout(s.u),s.u=null),Es(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function _s(s){if(!rd(s.h)&&!s.s){s.s=!0;var a=s.Ga;Pt||b(),j||(Pt(),j=!0),$.add(a,s),s.B=0}}function Jv(s,a){return id(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Qr(C(s.Ga,s,a),Pd(s,s.B)),s.B++,!0)}t.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Xt(this,this.j,s);let P=this.o;if(this.S&&(P?(P=p(P),y(P,this.S)):P=this.S),this.m!==null||this.O||(T.H=P,P=null),this.P)e:{for(var a=0,c=0;c<this.i.length;c++){t:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break e}if(a===4096||c===this.i.length-1){a=c+1;break e}}a=1e3}else a=1e3;a=Td(this,T,a),c=Lt(this.I),Z(c,"RID",s),Z(c,"CVER",22),this.D&&Z(c,"X-HTTP-Session-Id",this.D),si(this,c),P&&(this.O?a="headers="+encodeURIComponent(String(gd(P)))+"&"+a:this.m&&Dl(c,this.m,P)),Ol(this.h,T),this.Ua&&Z(c,"TYPE","init"),this.P?(Z(c,"$req",a),Z(c,"SID","null"),T.T=!0,Al(T,c,null)):Al(T,c,a),this.G=2}}else this.G==3&&(s?Sd(this,s):this.i.length==0||rd(this.h)||Sd(this))};function Sd(s,a){var c;a?c=a.l:c=s.U++;const h=Lt(s.I);Z(h,"SID",s.K),Z(h,"RID",c),Z(h,"AID",s.T),si(s,h),s.m&&s.o&&Dl(h,s.m,s.o),c=new Xt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Td(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ol(s.h,c),Al(c,h,a)}function si(s,a){s.H&&F(s.H,function(c,h){Z(a,h,c)}),s.l&&ld({},function(c,h){Z(a,h,c)})}function Td(s,a,c){c=Math.min(s.i.length,c);var h=s.l?C(s.l.Na,s.l,s):null;e:{var T=s.i;let P=-1;for(;;){const M=["count="+c];P==-1?0<c?(P=T[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let X=!0;for(let me=0;me<c;me++){let G=T[me].g;const Ee=T[me].map;if(G-=P,0>G)P=Math.max(0,T[me].g-100),X=!1;else try{qv(Ee,M,"req"+G+"_")}catch{h&&h(Ee)}}if(X){h=M.join("&");break e}}}return s=s.i.splice(0,c),a.D=s,h}function kd(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Pt||b(),j||(Pt(),j=!0),$.add(a,s),s.v=0}}function xl(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Qr(C(s.Fa,s),Pd(s,s.v)),s.v++,!0)}t.Fa=function(){if(this.u=null,Cd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Qr(C(this.ab,this),s)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),ws(this),Cd(this))};function Ml(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function Cd(s){s.g=new Xt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Lt(s.qa);Z(a,"RID","rpc"),Z(a,"SID",s.K),Z(a,"AID",s.T),Z(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Z(a,"TO",s.ja),Z(a,"TYPE","xmlhttp"),si(s,a),s.m&&s.o&&Dl(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=gs(Lt(a)),c.m=null,c.P=!0,Zc(c,s)}t.Za=function(){this.C!=null&&(this.C=null,ws(this),xl(this),De(19))};function Es(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Ad(s,a){var c=null;if(s.g==a){Es(s),Ml(s),s.g=null;var h=2}else if(Nl(s.h,a))c=a.D,sd(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=Sl(),Oe(h,new Qc(h,c)),_s(s)}else kd(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Jv(s,a)||h==2&&xl(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),T){case 1:Dn(s,5);break;case 4:Dn(s,10);break;case 3:Dn(s,6);break;default:Dn(s,2)}}}function Pd(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function Dn(s,a){if(s.j.info("Error code "+a),a==2){var c=C(s.fb,s),h=s.Xa;const T=!h;h=new On(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||fs(h,"https"),gs(h),T?Wv(h.toString(),c):Kv(h.toString(),c)}else De(2);s.G=0,s.l&&s.l.sa(a),Rd(s),Id(s)}t.fb=function(s){s?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function Rd(s){if(s.G=0,s.ka=[],s.l){const a=od(s.h);(a.length!=0||s.i.length!=0)&&(x(s.ka,a),x(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function Nd(s,a,c){var h=c instanceof On?Lt(c):new On(c);if(h.g!="")a&&(h.g=a+"."+h.g),ps(h,h.s);else{var T=u.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var P=new On(null);h&&fs(P,h),a&&(P.g=a),T&&ps(P,T),c&&(P.l=c),h=P}return c=s.D,a=s.ya,c&&a&&Z(h,c,a),Z(h,"VER",s.la),si(s,h),h}function Od(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new ue(new ms({eb:c})):new ue(s.pa),a.Ha(s.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dd(){}t=Dd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xe(s,a){_e.call(this),this.g=new Ed(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!w(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!w(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new or(this)}R(Xe,_e),Xe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xe.prototype.close=function(){Ll(this.g)},Xe.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=wl(s),s=c);a.i.push(new Mv(a.Ya++,s)),a.G==3&&_s(a)},Xe.prototype.N=function(){this.g.l=null,delete this.j,Ll(this.g),delete this.g,Xe.aa.N.call(this)};function Ld(s){El.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){e:{for(const c in a){s=c;break e}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}R(Ld,El);function xd(){Il.call(this),this.status=1}R(xd,Il);function or(s){this.g=s}R(or,Dd),or.prototype.ua=function(){Oe(this.g,"a")},or.prototype.ta=function(s){Oe(this.g,new Ld(s))},or.prototype.sa=function(s){Oe(this.g,new xd)},or.prototype.ra=function(){Oe(this.g,"b")},Xe.prototype.send=Xe.prototype.o,Xe.prototype.open=Xe.prototype.m,Xe.prototype.close=Xe.prototype.close,Tl.NO_ERROR=0,Tl.TIMEOUT=8,Tl.HTTP_ERROR=6,Lv.COMPLETE="complete",Pv.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",_e.prototype.listen=_e.prototype.K,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});const Of="@firebase/firestore";/**
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
 */let ls="10.12.3";/**
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
 */const Br=new sl("@firebase/firestore");function He(t,...e){if(Br.logLevel<=q.DEBUG){const n=e.map(Mc);Br.debug(`Firestore (${ls}): ${t}`,...n)}}function xc(t,...e){if(Br.logLevel<=q.ERROR){const n=e.map(Mc);Br.error(`Firestore (${ls}): ${t}`,...n)}}function GS(t,...e){if(Br.logLevel<=q.WARN){const n=e.map(Mc);Br.warn(`Firestore (${ls}): ${t}`,...n)}}function Mc(t){if(typeof t=="string")return t;try{/**
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
 */function Uc(t="Unexpected state"){const e=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: `+t;throw xc(e),new Error(e)}function Su(t,e){t||Uc()}/**
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
 */const Ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pe extends mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class gv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ke.UNAUTHENTICATED))}shutdown(){}}class YS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QS{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=d=>this.i!==r?(r=this.i,n(d)):Promise.resolve();let o=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const d=o;e.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},u=d=>{He("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(He("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Or)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(He("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Su(typeof r.accessToken=="string"),new gv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Su(e===null||typeof e=="string"),new ke(e)}}class XS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new XS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ZS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&He("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,He("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{He("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):He("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Su(typeof n.token=="string"),this.R=n.token,new ZS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function tT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class nT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=tT(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function mv(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rT{constructor(e,n,r,i,o,l,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=f}}class $o{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Df,W;(W=Df||(Df={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new pv([4294967295,4294967295],0);function wa(){return typeof document<"u"?document:null}/**
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
 */class iT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&He("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Fc{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const l=Date.now()+r,u=new Fc(e,n,l,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Pe(Ae.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sT(t,e){if(xc("AsyncQueue",`${e}: ${t}`),mv(t))return new Pe(Ae.UNAVAILABLE,`${e}: ${t}`);throw t}var Lf,xf;(xf=Lf||(Lf={})).J_="default",xf.Cache="cache";/**
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
 */class oT{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ke.UNAUTHENTICATED,this.clientId=nT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{He("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(He("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pe(Ae.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sT(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function vv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Mf=new Map;function lT(t,e,n,r){if(e===!0&&r===!0)throw new Pe(Ae.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function aT(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Uc()}function uT(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Pe(Ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aT(t);throw new Pe(Ae.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Uf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Pe(Ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Pe(Ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new Pe(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new Pe(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new Pe(Ae.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pe(Ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Pe(Ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new qS;switch(r.type){case"firstParty":return new JS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Pe(Ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mf.get(n);r&&(He("ComponentProvider","Removing Datastore"),Mf.delete(n),r.terminate())}(this),Promise.resolve()}}function cT(t,e,n,r={}){var i;const o=(t=uT(t,yv))._getSettings(),l=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==l&&GS("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:l,ssl:!1})),r.mockUserToken){let u,d;if(typeof r.mockUserToken=="string")u=r.mockUserToken,d=ke.MOCK_USER;else{u=Uw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Pe(Ae.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new ke(f)}t._authCredentials=new YS(new gv(u,d))}}/**
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
 */class dT{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new iT(this,"async_queue_retry"),this.hu=()=>{const n=wa();n&&He("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Or;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!mv(e))throw e;He("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw xc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Fc.createAndSchedule(this,e,n,r,o=>this.Eu(o));return this._u.push(i),i}Pu(){this.au&&Uc()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class hT extends yv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new dT}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||pT(this),this._firestoreClient.terminate()}}function fT(t,e){const n=typeof t=="object"?t:_c(),r=typeof t=="string"?t:"(default)",i=tr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=xw("firestore");o&&cT(i,...o)}return i}function pT(t){var e,n,r;const i=t._freezeSettings(),o=function(u,d,f,S){return new rT(u,d,f,S.host,S.ssl,S.experimentalForceLongPolling,S.experimentalAutoDetectLongPolling,vv(S.experimentalLongPollingOptions),S.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new oT(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){ls=i})(Hr),Ct(new pt("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new hT(new QS(r.getProvider("auth-internal")),new eT(r.getProvider("app-check-internal")),function(f,S){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Pe(Ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(f.options.projectId,S)}(l,i),l);return o=Object.assign({useFetchStreams:n},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),nt(Of,"4.6.4",e),nt(Of,"4.6.4","esm2017")})();const gT={apiKey:"AIzaSyAags0zeuWO7Ss7Nahdn72KJu5PtrGz4GQ",authDomain:"kite-hacks.firebaseapp.com",projectId:"kite-hacks",storageBucket:"kite-hacks.appspot.com",messagingSenderId:"499816998445",appId:"1:499816998445:web:88cd530ad1e5aefbe8baa4",measurementId:"G-L5M0GQS19Y"},wv=lm(gT);PE(wv);const Ws=WS();fT(wv);const mT=()=>{const[t,e]=wt.useState(""),[n,r]=wt.useState(""),[i,o]=wt.useState(""),[l,u]=wt.useState(""),[d,f]=wt.useState(!1),S=x=>{x.length<8?(document.getElementById("auth-pw-short").style.display="block",document.getElementById("auth-pw").style.border="1px Solid rgb(255, 145, 145)"):(document.getElementById("auth-pw-short").style.display="none",document.getElementById("auth-pw").style.border="none"),o(x)},A=x=>{x!=i?(document.getElementById("auth-pw-diff").style.display="block",document.getElementById("auth-pw-confirm").style.border="1px Solid rgb(255, 145, 145)"):(document.getElementById("auth-pw-diff").style.display="none",document.getElementById("auth-pw-confirm").style.border="none"),u(x)},C=async()=>{try{await PI(Ws,n,i),await OI(Ws.currentUser,{displayName:t}),console.log(Ws.currentUser.displayName)}catch(x){console.error(x)}},O=()=>{const x=t.trim()!="",E=n.includes("@"),w=i.length>=8;f(x&&E&&w&&l===i)};wt.useEffect(()=>{O()},[t,n,i,l]);const R=async()=>{try{await RI(Ws,n,i).then(x=>{const E=x.user})}catch(x){console.error(x)}},L=()=>{const x=document.getElementById("signIn"),E=document.getElementById("signUp"),w=document.getElementById("auth-side-cover"),I=document.getElementById("cover-signIn"),N=document.getElementById("cover-signUp");let U=getComputedStyle(x).display,F=getComputedStyle(w).left;console.log("Button Clicked"),screen.width<1e3?U=="none"?(x.style.display="flex",E.style.display="none"):(x.style.display="none",E.style.display="flex"):F=="0px"?(w.style.left="50%",I.style.display="none",N.style.display="flex"):(w.style.left="0px",I.style.display="flex",N.style.display="none")};return wt.useEffect(()=>{const x=()=>{window.innerWidth>=1e3?(document.getElementById("signIn").style.display="flex",document.getElementById("signUp").style.display="flex"):document.getElementById("signUp").style.display="none"};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x)}},[]),B.jsxs("div",{className:"auth-screen-wrapper",children:[B.jsx("div",{className:"circle",id:"circle1",children:"empty"}),B.jsx("div",{className:"circle",id:"circle2",children:"empty"}),B.jsxs("div",{className:"auth-modal-container",children:[B.jsxs("div",{id:"auth-side-cover",children:[B.jsxs("div",{className:"auth-cover-container",id:"cover-signIn",children:[B.jsx("h1",{children:"Welcome back!"}),B.jsx("h2",{children:"Sign back in to begin saving the world!"})]}),B.jsxs("div",{className:"auth-cover-container",id:"cover-signUp",children:[B.jsx("h1",{children:"Let's Get Started!"}),B.jsx("h2",{children:"Begin your journey to awesomeness"})]})]}),B.jsxs("div",{className:"auth-side-container",id:"signUp",children:[B.jsx("h1",{children:"Create an Account"}),B.jsxs("div",{className:"auth-text-field",children:[B.jsx("p",{children:"Name:"}),B.jsx("input",{placeholder:"Enter a username",onChange:x=>e(x.target.value),required:!0})]}),B.jsxs("div",{className:"auth-text-field",children:[B.jsx("p",{children:"Email:"}),B.jsx("input",{type:"email",placeholder:"Enter your email",onChange:x=>r(x.target.value),required:!0})]}),B.jsxs("div",{className:"auth-text-field",children:[B.jsx("p",{children:"Password:"}),B.jsx("input",{id:"auth-pw",type:"password",placeholder:"Enter your password",onChange:x=>S(x.target.value),required:!0}),B.jsx("p",{id:"auth-pw-short",children:"*The password has to be at least 8 characters"})]}),B.jsxs("div",{className:"auth-text-field",children:[B.jsx("p",{children:"Confirm Password:"}),B.jsx("input",{id:"auth-pw-confirm",type:"password",placeholder:"Reenter your password",onChange:x=>A(x.target.value),required:!0}),B.jsx("p",{id:"auth-pw-diff",children:"*The passwords do not match"})]}),B.jsx("div",{className:"auth-button-container",children:B.jsx("button",{disabled:!d,onClick:C,children:"Sign Up"})}),B.jsxs("div",{className:"auth-swap-side-container",children:[B.jsx("p",{children:"Already have an account?"}),B.jsx("button",{onClick:L,children:"Sign In"})]})]}),B.jsxs("div",{className:"auth-side-container",id:"signIn",children:[B.jsx("h1",{children:"Sign In"}),B.jsxs("div",{className:"auth-text-field",children:[B.jsx("p",{children:"Enter your email"}),B.jsx("input",{type:"email",placeholder:"email",onChange:x=>r(x.target.value),required:!0})]}),B.jsxs("div",{className:"auth-text-field",children:[B.jsx("p",{children:"Enter a password"}),B.jsx("input",{type:"password",placeholder:"password",onChange:x=>o(x.target.value),required:!0})]}),B.jsx("div",{className:"auth-button-container",children:B.jsx("button",{onClick:R,children:"Sign In"})}),B.jsxs("div",{className:"auth-swap-side-container",children:[B.jsx("p",{children:"Don't have an account?"}),B.jsx("button",{onClick:L,children:"Sign Up"})]})]})]})]})};function vT(){return B.jsx(B.Fragment,{children:B.jsx(mT,{})})}_a.createRoot(document.getElementById("root")).render(B.jsx(gy.StrictMode,{children:B.jsx(vT,{})}));
