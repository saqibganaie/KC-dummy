function ju(e,t){for(var i=0;i<t.length;i++){const a=t[i];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in e)){const l=Object.getOwnPropertyDescriptor(a,n);l&&Object.defineProperty(e,n,l.get?l:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}})();function Mu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},Ll={},Lu={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wn=Symbol.for("react.element"),Hf=Symbol.for("react.portal"),zf=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),Wf=Symbol.for("react.profiler"),Df=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Gf=Symbol.for("react.memo"),qf=Symbol.for("react.lazy"),$o=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hu=Object.assign,zu={};function _a(e,t,i){this.props=e,this.context=t,this.refs=zu,this.updater=i||Uu}_a.prototype.isReactComponent={};_a.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ku(){}Ku.prototype=_a.prototype;function Vs(e,t,i){this.props=e,this.context=t,this.refs=zu,this.updater=i||Uu}var Ls=Vs.prototype=new Ku;Ls.constructor=Vs;Hu(Ls,_a.prototype);Ls.isPureReactComponent=!0;var Jo=Array.isArray,Wu=Object.prototype.hasOwnProperty,Us={current:null},Du={key:!0,ref:!0,__self:!0,__source:!0};function Bu(e,t,i){var a,n={},l=null,r=null;if(t!=null)for(a in t.ref!==void 0&&(r=t.ref),t.key!==void 0&&(l=""+t.key),t)Wu.call(t,a)&&!Du.hasOwnProperty(a)&&(n[a]=t[a]);var s=arguments.length-2;if(s===1)n.children=i;else if(1<s){for(var o=Array(s),h=0;h<s;h++)o[h]=arguments[h+2];n.children=o}if(e&&e.defaultProps)for(a in s=e.defaultProps,s)n[a]===void 0&&(n[a]=s[a]);return{$$typeof:wn,type:e,key:l,ref:r,props:n,_owner:Us.current}}function Qf(e,t){return{$$typeof:wn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===wn}function $f(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var Xo=/\/+/g;function sr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$f(""+e.key):t.toString(36)}function Qn(e,t,i,a,n){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(l){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case wn:case Hf:r=!0}}if(r)return r=e,n=n(r),e=a===""?"."+sr(r,0):a,Jo(n)?(i="",e!=null&&(i=e.replace(Xo,"$&/")+"/"),Qn(n,t,i,"",function(h){return h})):n!=null&&(Hs(n)&&(n=Qf(n,i+(!n.key||r&&r.key===n.key?"":(""+n.key).replace(Xo,"$&/")+"/")+e)),t.push(n)),1;if(r=0,a=a===""?".":a+":",Jo(e))for(var s=0;s<e.length;s++){l=e[s];var o=a+sr(l,s);r+=Qn(l,t,i,o,n)}else if(o=Zf(e),typeof o=="function")for(e=o.call(e),s=0;!(l=e.next()).done;)l=l.value,o=a+sr(l,s++),r+=Qn(l,t,i,o,n);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return r}function On(e,t,i){if(e==null)return e;var a=[],n=0;return Qn(e,a,"","",function(l){return t.call(i,l,n++)}),a}function Jf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},$n={transition:null},Xf={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:$n,ReactCurrentOwner:Us};function Yu(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:On,forEach:function(e,t,i){On(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return On(e,function(){t++}),t},toArray:function(e){return On(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=_a;Z.Fragment=zf;Z.Profiler=Wf;Z.PureComponent=Vs;Z.StrictMode=Kf;Z.Suspense=Ff;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xf;Z.act=Yu;Z.cloneElement=function(e,t,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Hu({},e.props),n=e.key,l=e.ref,r=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,r=Us.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(o in t)Wu.call(t,o)&&!Du.hasOwnProperty(o)&&(a[o]=t[o]===void 0&&s!==void 0?s[o]:t[o])}var o=arguments.length-2;if(o===1)a.children=i;else if(1<o){s=Array(o);for(var h=0;h<o;h++)s[h]=arguments[h+2];a.children=s}return{$$typeof:wn,type:e.type,key:n,ref:l,props:a,_owner:r}};Z.createContext=function(e){return e={$$typeof:Bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Df,_context:e},e.Consumer=e};Z.createElement=Bu;Z.createFactory=function(e){var t=Bu.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Yf,render:e}};Z.isValidElement=Hs;Z.lazy=function(e){return{$$typeof:qf,_payload:{_status:-1,_result:e},_init:Jf}};Z.memo=function(e,t){return{$$typeof:Gf,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=$n.transition;$n.transition={};try{e()}finally{$n.transition=t}};Z.unstable_act=Yu;Z.useCallback=function(e,t){return We.current.useCallback(e,t)};Z.useContext=function(e){return We.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Z.useEffect=function(e,t){return We.current.useEffect(e,t)};Z.useId=function(){return We.current.useId()};Z.useImperativeHandle=function(e,t,i){return We.current.useImperativeHandle(e,t,i)};Z.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return We.current.useMemo(e,t)};Z.useReducer=function(e,t,i){return We.current.useReducer(e,t,i)};Z.useRef=function(e){return We.current.useRef(e)};Z.useState=function(e){return We.current.useState(e)};Z.useSyncExternalStore=function(e,t,i){return We.current.useSyncExternalStore(e,t,i)};Z.useTransition=function(){return We.current.useTransition()};Z.version="18.3.1";Lu.exports=Z;var E=Lu.exports;const Fu=Mu(E),em=ju({__proto__:null,default:Fu},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm=E,im=Symbol.for("react.element"),am=Symbol.for("react.fragment"),nm=Object.prototype.hasOwnProperty,lm=tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rm={key:!0,ref:!0,__self:!0,__source:!0};function Gu(e,t,i){var a,n={},l=null,r=null;i!==void 0&&(l=""+i),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(r=t.ref);for(a in t)nm.call(t,a)&&!rm.hasOwnProperty(a)&&(n[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)n[a]===void 0&&(n[a]=t[a]);return{$$typeof:im,type:e,key:l,ref:r,props:n,_owner:lm.current}}Ll.Fragment=am;Ll.jsx=Gu;Ll.jsxs=Gu;Vu.exports=Ll;var R=Vu.exports,qu={exports:{}},it={},Zu={exports:{}},Qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,W){var B=O.length;O.push(W);e:for(;0<B;){var F=B-1>>>1,se=O[F];if(0<n(se,W))O[F]=W,O[B]=se,B=F;else break e}}function i(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var W=O[0],B=O.pop();if(B!==W){O[0]=B;e:for(var F=0,se=O.length,wt=se>>>1;F<wt;){var Ne=2*(F+1)-1,ct=O[Ne],Ue=Ne+1,vt=O[Ue];if(0>n(ct,B))Ue<se&&0>n(vt,ct)?(O[F]=vt,O[Ue]=B,F=Ue):(O[F]=ct,O[Ne]=B,F=Ne);else if(Ue<se&&0>n(vt,B))O[F]=vt,O[Ue]=B,F=Ue;else break e}}return W}function n(O,W){var B=O.sortIndex-W.sortIndex;return B!==0?B:O.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var r=Date,s=r.now();e.unstable_now=function(){return r.now()-s}}var o=[],h=[],d=1,c=null,f=3,T=!1,A=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(O){for(var W=i(h);W!==null;){if(W.callback===null)a(h);else if(W.startTime<=O)a(h),W.sortIndex=W.expirationTime,t(o,W);else break;W=i(h)}}function S(O){if(w=!1,p(O),!A)if(i(o)!==null)A=!0,Qe(N);else{var W=i(h);W!==null&&ce(S,W.startTime-O)}}function N(O,W){A=!1,w&&(w=!1,m(v),v=-1),T=!0;var B=f;try{for(p(W),c=i(o);c!==null&&(!(c.expirationTime>W)||O&&!X());){var F=c.callback;if(typeof F=="function"){c.callback=null,f=c.priorityLevel;var se=F(c.expirationTime<=W);W=e.unstable_now(),typeof se=="function"?c.callback=se:c===i(o)&&a(o),p(W)}else a(o);c=i(o)}if(c!==null)var wt=!0;else{var Ne=i(h);Ne!==null&&ce(S,Ne.startTime-W),wt=!1}return wt}finally{c=null,f=B,T=!1}}var g=!1,C=null,v=-1,H=5,j=-1;function X(){return!(e.unstable_now()-j<H)}function D(){if(C!==null){var O=e.unstable_now();j=O;var W=!0;try{W=C(!0,O)}finally{W?me():(g=!1,C=null)}}else g=!1}var me;if(typeof u=="function")me=function(){u(D)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ut=re.port2;re.port1.onmessage=D,me=function(){ut.postMessage(null)}}else me=function(){b(D,0)};function Qe(O){C=O,g||(g=!0,me())}function ce(O,W){v=b(function(){O(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){A||T||(A=!0,Qe(N))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return i(o)},e.unstable_next=function(O){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var B=f;f=W;try{return O()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,W){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=f;f=O;try{return W()}finally{f=B}},e.unstable_scheduleCallback=function(O,W,B){var F=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?F+B:F):B=F,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=B+se,O={id:d++,callback:W,priorityLevel:O,startTime:B,expirationTime:se,sortIndex:-1},B>F?(O.sortIndex=B,t(h,O),i(o)===null&&O===i(h)&&(w?(m(v),v=-1):w=!0,ce(S,B-F))):(O.sortIndex=se,t(o,O),A||T||(A=!0,Qe(N))),O},e.unstable_shouldYield=X,e.unstable_wrapCallback=function(O){var W=f;return function(){var B=f;f=W;try{return O.apply(this,arguments)}finally{f=B}}}})(Qu);Zu.exports=Qu;var sm=Zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=E,tt=sm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $u=new Set,en={};function Mi(e,t){ua(e,t),ua(e+"Capture",t)}function ua(e,t){for(en[e]=t,e=0;e<t.length;e++)$u.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=Object.prototype.hasOwnProperty,hm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,eh={},th={};function um(e){return Lr.call(th,e)?!0:Lr.call(eh,e)?!1:hm.test(e)?th[e]=!0:(eh[e]=!0,!1)}function cm(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dm(e,t,i,a){if(t===null||typeof t>"u"||cm(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,i,a,n,l,r){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=n,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=r}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var zs=/[\-:]([a-z])/g;function Ks(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zs,Ks);ke[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zs,Ks);ke[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zs,Ks);ke[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ws(e,t,i,a){var n=ke.hasOwnProperty(t)?ke[t]:null;(n!==null?n.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dm(t,i,n,a)&&(i=null),a||n===null?um(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):n.mustUseProperty?e[n.propertyName]=i===null?n.type===3?!1:"":i:(t=n.attributeName,a=n.attributeNamespace,i===null?e.removeAttribute(t):(n=n.type,i=n===3||n===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var Kt=om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kn=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),Ds=Symbol.for("react.strict_mode"),Ur=Symbol.for("react.profiler"),Ju=Symbol.for("react.provider"),Xu=Symbol.for("react.context"),Bs=Symbol.for("react.forward_ref"),Hr=Symbol.for("react.suspense"),zr=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),ec=Symbol.for("react.offscreen"),ih=Symbol.iterator;function va(e){return e===null||typeof e!="object"?null:(e=ih&&e[ih]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,or;function za(e){if(or===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);or=t&&t[1]||""}return`
`+or+e}var hr=!1;function ur(e,t){if(!e||hr)return"";hr=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var a=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){a=h}e.call(t.prototype)}else{try{throw Error()}catch(h){a=h}e()}}catch(h){if(h&&a&&typeof h.stack=="string"){for(var n=h.stack.split(`
`),l=a.stack.split(`
`),r=n.length-1,s=l.length-1;1<=r&&0<=s&&n[r]!==l[s];)s--;for(;1<=r&&0<=s;r--,s--)if(n[r]!==l[s]){if(r!==1||s!==1)do if(r--,s--,0>s||n[r]!==l[s]){var o=`
`+n[r].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=r&&0<=s);break}}}finally{hr=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?za(e):""}function fm(e){switch(e.tag){case 5:return za(e.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return e=ur(e.type,!1),e;case 11:return e=ur(e.type.render,!1),e;case 1:return e=ur(e.type,!0),e;default:return""}}function Kr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fi:return"Fragment";case Yi:return"Portal";case Ur:return"Profiler";case Ds:return"StrictMode";case Hr:return"Suspense";case zr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xu:return(e.displayName||"Context")+".Consumer";case Ju:return(e._context.displayName||"Context")+".Provider";case Bs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:Kr(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return Kr(e(t))}catch{}}return null}function mm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kr(t);case 8:return t===Ds?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pm(e){var t=tc(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){a=""+r,l.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jn(e){e._valueTracker||(e._valueTracker=pm(e))}function ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=tc(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function hl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wr(e,t){var i=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ah(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=hi(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ac(e,t){t=t.checked,t!=null&&Ws(e,"checked",t,!1)}function Dr(e,t){ac(e,t);var i=hi(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Br(e,t.type,i):t.hasOwnProperty("defaultValue")&&Br(e,t.type,hi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nh(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Br(e,t,i){(t!=="number"||hl(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ka=Array.isArray;function aa(e,t,i,a){if(e=e.options,t){t={};for(var n=0;n<i.length;n++)t["$"+i[n]]=!0;for(i=0;i<e.length;i++)n=t.hasOwnProperty("$"+e[i].value),e[i].selected!==n&&(e[i].selected=n),n&&a&&(e[i].defaultSelected=!0)}else{for(i=""+hi(i),t=null,n=0;n<e.length;n++){if(e[n].value===i){e[n].selected=!0,a&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Yr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lh(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(P(92));if(Ka(i)){if(1<i.length)throw Error(P(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:hi(i)}}function nc(e,t){var i=hi(t.value),a=hi(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function rh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function lc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?lc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,n){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,n)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tn(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ym=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(e){ym.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ya[t]=Ya[e]})});function sc(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Ya.hasOwnProperty(e)&&Ya[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,n=sc(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,n):e[i]=n}}var gm=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gr(e,t){if(t){if(gm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function qr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zr=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qr=null,na=null,la=null;function sh(e){if(e=Sn(e)){if(typeof Qr!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Wl(t),Qr(e.stateNode,e.type,t))}}function hc(e){na?la?la.push(e):la=[e]:na=e}function uc(){if(na){var e=na,t=la;if(la=na=null,sh(e),t)for(e=0;e<t.length;e++)sh(t[e])}}function cc(e,t){return e(t)}function dc(){}var cr=!1;function fc(e,t,i){if(cr)return e(t,i);cr=!0;try{return cc(e,t,i)}finally{cr=!1,(na!==null||la!==null)&&(dc(),uc())}}function an(e,t){var i=e.stateNode;if(i===null)return null;var a=Wl(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(P(231,t,typeof i));return i}var $r=!1;if(Lt)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){$r=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{$r=!1}function _m(e,t,i,a,n,l,r,s,o){var h=Array.prototype.slice.call(arguments,3);try{t.apply(i,h)}catch(d){this.onError(d)}}var Fa=!1,ul=null,cl=!1,Jr=null,Tm={onError:function(e){Fa=!0,ul=e}};function wm(e,t,i,a,n,l,r,s,o){Fa=!1,ul=null,_m.apply(Tm,arguments)}function Am(e,t,i,a,n,l,r,s,o){if(wm.apply(this,arguments),Fa){if(Fa){var h=ul;Fa=!1,ul=null}else throw Error(P(198));cl||(cl=!0,Jr=h)}}function Vi(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function mc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function oh(e){if(Vi(e)!==e)throw Error(P(188))}function Im(e){var t=e.alternate;if(!t){if(t=Vi(e),t===null)throw Error(P(188));return t!==e?null:e}for(var i=e,a=t;;){var n=i.return;if(n===null)break;var l=n.alternate;if(l===null){if(a=n.return,a!==null){i=a;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===i)return oh(n),e;if(l===a)return oh(n),t;l=l.sibling}throw Error(P(188))}if(i.return!==a.return)i=n,a=l;else{for(var r=!1,s=n.child;s;){if(s===i){r=!0,i=n,a=l;break}if(s===a){r=!0,a=n,i=l;break}s=s.sibling}if(!r){for(s=l.child;s;){if(s===i){r=!0,i=l,a=n;break}if(s===a){r=!0,a=l,i=n;break}s=s.sibling}if(!r)throw Error(P(189))}}if(i.alternate!==a)throw Error(P(190))}if(i.tag!==3)throw Error(P(188));return i.stateNode.current===i?e:t}function pc(e){return e=Im(e),e!==null?yc(e):null}function yc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yc(e);if(t!==null)return t;e=e.sibling}return null}var gc=tt.unstable_scheduleCallback,hh=tt.unstable_cancelCallback,Sm=tt.unstable_shouldYield,Em=tt.unstable_requestPaint,Ae=tt.unstable_now,bm=tt.unstable_getCurrentPriorityLevel,Gs=tt.unstable_ImmediatePriority,_c=tt.unstable_UserBlockingPriority,dl=tt.unstable_NormalPriority,xm=tt.unstable_LowPriority,Tc=tt.unstable_IdlePriority,Ul=null,bt=null;function vm(e){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Ul,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Cm,Pm=Math.log,Nm=Math.LN2;function Cm(e){return e>>>=0,e===0?32:31-(Pm(e)/Nm|0)|0}var Vn=64,Ln=4194304;function Wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,n=e.suspendedLanes,l=e.pingedLanes,r=i&268435455;if(r!==0){var s=r&~n;s!==0?a=Wa(s):(l&=r,l!==0&&(a=Wa(l)))}else r=i&~n,r!==0?a=Wa(r):l!==0&&(a=Wa(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&n)&&(n=a&-a,l=t&-t,n>=l||n===16&&(l&4194240)!==0))return t;if(a&4&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-gt(t),n=1<<i,a|=e[i],t&=~n;return a}function Rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Om(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,n=e.expirationTimes,l=e.pendingLanes;0<l;){var r=31-gt(l),s=1<<r,o=n[r];o===-1?(!(s&i)||s&a)&&(n[r]=Rm(s,t)):o<=t&&(e.expiredLanes|=s),l&=~s}}function Xr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function wc(){var e=Vn;return Vn<<=1,!(Vn&4194240)&&(Vn=64),e}function dr(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function An(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=i}function km(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var n=31-gt(i),l=1<<n;t[n]=0,a[n]=-1,e[n]=-1,i&=~l}}function qs(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-gt(i),n=1<<a;n&t|e[a]&t&&(e[a]|=t),i&=~n}}var ie=0;function Ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ic,Zs,Sc,Ec,bc,es=!1,Un=[],ti=null,ii=null,ai=null,nn=new Map,ln=new Map,Qt=[],jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(e,t){switch(e){case"focusin":case"focusout":ti=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":ai=null;break;case"pointerover":case"pointerout":nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(t.pointerId)}}function Na(e,t,i,a,n,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:l,targetContainers:[n]},t!==null&&(t=Sn(t),t!==null&&Zs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Mm(e,t,i,a,n){switch(t){case"focusin":return ti=Na(ti,e,t,i,a,n),!0;case"dragenter":return ii=Na(ii,e,t,i,a,n),!0;case"mouseover":return ai=Na(ai,e,t,i,a,n),!0;case"pointerover":var l=n.pointerId;return nn.set(l,Na(nn.get(l)||null,e,t,i,a,n)),!0;case"gotpointercapture":return l=n.pointerId,ln.set(l,Na(ln.get(l)||null,e,t,i,a,n)),!0}return!1}function xc(e){var t=Si(e.target);if(t!==null){var i=Vi(t);if(i!==null){if(t=i.tag,t===13){if(t=mc(i),t!==null){e.blockedOn=t,bc(e.priority,function(){Sc(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Zr=a,i.target.dispatchEvent(a),Zr=null}else return t=Sn(i),t!==null&&Zs(t),e.blockedOn=i,!1;t.shift()}return!0}function ch(e,t,i){Jn(e)&&i.delete(t)}function Vm(){es=!1,ti!==null&&Jn(ti)&&(ti=null),ii!==null&&Jn(ii)&&(ii=null),ai!==null&&Jn(ai)&&(ai=null),nn.forEach(ch),ln.forEach(ch)}function Ca(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,tt.unstable_scheduleCallback(tt.unstable_NormalPriority,Vm)))}function rn(e){function t(n){return Ca(n,e)}if(0<Un.length){Ca(Un[0],e);for(var i=1;i<Un.length;i++){var a=Un[i];a.blockedOn===e&&(a.blockedOn=null)}}for(ti!==null&&Ca(ti,e),ii!==null&&Ca(ii,e),ai!==null&&Ca(ai,e),nn.forEach(t),ln.forEach(t),i=0;i<Qt.length;i++)a=Qt[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qt.length&&(i=Qt[0],i.blockedOn===null);)xc(i),i.blockedOn===null&&Qt.shift()}var ra=Kt.ReactCurrentBatchConfig,ml=!0;function Lm(e,t,i,a){var n=ie,l=ra.transition;ra.transition=null;try{ie=1,Qs(e,t,i,a)}finally{ie=n,ra.transition=l}}function Um(e,t,i,a){var n=ie,l=ra.transition;ra.transition=null;try{ie=4,Qs(e,t,i,a)}finally{ie=n,ra.transition=l}}function Qs(e,t,i,a){if(ml){var n=ts(e,t,i,a);if(n===null)Ir(e,t,a,pl,i),uh(e,a);else if(Mm(n,e,t,i,a))a.stopPropagation();else if(uh(e,a),t&4&&-1<jm.indexOf(e)){for(;n!==null;){var l=Sn(n);if(l!==null&&Ic(l),l=ts(e,t,i,a),l===null&&Ir(e,t,a,pl,i),l===n)break;n=l}n!==null&&a.stopPropagation()}else Ir(e,t,a,null,i)}}var pl=null;function ts(e,t,i,a){if(pl=null,e=Fs(a),e=Si(e),e!==null)if(t=Vi(e),t===null)e=null;else if(i=t.tag,i===13){if(e=mc(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function vc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bm()){case Gs:return 1;case _c:return 4;case dl:case xm:return 16;case Tc:return 536870912;default:return 16}default:return 16}}var Jt=null,$s=null,Xn=null;function Pc(){if(Xn)return Xn;var e,t=$s,i=t.length,a,n="value"in Jt?Jt.value:Jt.textContent,l=n.length;for(e=0;e<i&&t[e]===n[e];e++);var r=i-e;for(a=1;a<=r&&t[i-a]===n[l-a];a++);return Xn=n.slice(e,1<a?1-a:void 0)}function el(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hn(){return!0}function dh(){return!1}function at(e){function t(i,a,n,l,r){this._reactName=i,this._targetInst=n,this.type=a,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(i=e[s],this[s]=i?i(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Hn:dh,this.isPropagationStopped=dh,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Js=at(Ta),In=ge({},Ta,{view:0,detail:0}),Hm=at(In),fr,mr,Ra,Hl=ge({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(fr=e.screenX-Ra.screenX,mr=e.screenY-Ra.screenY):mr=fr=0,Ra=e),fr)},movementY:function(e){return"movementY"in e?e.movementY:mr}}),fh=at(Hl),zm=ge({},Hl,{dataTransfer:0}),Km=at(zm),Wm=ge({},In,{relatedTarget:0}),pr=at(Wm),Dm=ge({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Bm=at(Dm),Ym=ge({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fm=at(Ym),Gm=ge({},Ta,{data:0}),mh=at(Gm),qm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $m(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qm[e])?!!t[e]:!1}function Xs(){return $m}var Jm=ge({},In,{key:function(e){if(e.key){var t=qm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=at(Jm),ep=ge({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=at(ep),tp=ge({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),ip=at(tp),ap=ge({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),np=at(ap),lp=ge({},Hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rp=at(lp),sp=[9,13,27,32],eo=Lt&&"CompositionEvent"in window,Ga=null;Lt&&"documentMode"in document&&(Ga=document.documentMode);var op=Lt&&"TextEvent"in window&&!Ga,Nc=Lt&&(!eo||Ga&&8<Ga&&11>=Ga),yh=" ",gh=!1;function Cc(e,t){switch(e){case"keyup":return sp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gi=!1;function hp(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(gh=!0,yh);case"textInput":return e=t.data,e===yh&&gh?null:e;default:return null}}function up(e,t){if(Gi)return e==="compositionend"||!eo&&Cc(e,t)?(e=Pc(),Xn=$s=Jt=null,Gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nc&&t.locale!=="ko"?null:t.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cp[e.type]:t==="textarea"}function Oc(e,t,i,a){hc(a),t=yl(t,"onChange"),0<t.length&&(i=new Js("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var qa=null,sn=null;function dp(e){Dc(e,0)}function zl(e){var t=Qi(e);if(ic(t))return e}function fp(e,t){if(e==="change")return t}var kc=!1;if(Lt){var yr;if(Lt){var gr="oninput"in document;if(!gr){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),gr=typeof Th.oninput=="function"}yr=gr}else yr=!1;kc=yr&&(!document.documentMode||9<document.documentMode)}function wh(){qa&&(qa.detachEvent("onpropertychange",jc),sn=qa=null)}function jc(e){if(e.propertyName==="value"&&zl(sn)){var t=[];Oc(t,sn,e,Fs(e)),fc(dp,t)}}function mp(e,t,i){e==="focusin"?(wh(),qa=t,sn=i,qa.attachEvent("onpropertychange",jc)):e==="focusout"&&wh()}function pp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(sn)}function yp(e,t){if(e==="click")return zl(t)}function gp(e,t){if(e==="input"||e==="change")return zl(t)}function _p(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:_p;function on(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var n=i[a];if(!Lr.call(t,n)||!Tt(e[n],t[n]))return!1}return!0}function Ah(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ih(e,t){var i=Ah(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ah(i)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vc(){for(var e=window,t=hl();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=hl(e.document)}return t}function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tp(e){var t=Vc(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Mc(i.ownerDocument.documentElement,i)){if(a!==null&&to(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var n=i.textContent.length,l=Math.min(a.start,n);a=a.end===void 0?l:Math.min(a.end,n),!e.extend&&l>a&&(n=a,a=l,l=n),n=Ih(i,l);var r=Ih(i,a);n&&r&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(t=t.createRange(),t.setStart(n.node,n.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(r.node,r.offset)):(t.setEnd(r.node,r.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wp=Lt&&"documentMode"in document&&11>=document.documentMode,qi=null,is=null,Za=null,as=!1;function Sh(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;as||qi==null||qi!==hl(a)||(a=qi,"selectionStart"in a&&to(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&on(Za,a)||(Za=a,a=yl(is,"onSelect"),0<a.length&&(t=new Js("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=qi)))}function zn(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Zi={animationend:zn("Animation","AnimationEnd"),animationiteration:zn("Animation","AnimationIteration"),animationstart:zn("Animation","AnimationStart"),transitionend:zn("Transition","TransitionEnd")},_r={},Lc={};Lt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Kl(e){if(_r[e])return _r[e];if(!Zi[e])return e;var t=Zi[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Lc)return _r[e]=t[i];return e}var Uc=Kl("animationend"),Hc=Kl("animationiteration"),zc=Kl("animationstart"),Kc=Kl("transitionend"),Wc=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ci(e,t){Wc.set(e,t),Mi(t,[e])}for(var Tr=0;Tr<Eh.length;Tr++){var wr=Eh[Tr],Ap=wr.toLowerCase(),Ip=wr[0].toUpperCase()+wr.slice(1);ci(Ap,"on"+Ip)}ci(Uc,"onAnimationEnd");ci(Hc,"onAnimationIteration");ci(zc,"onAnimationStart");ci("dblclick","onDoubleClick");ci("focusin","onFocus");ci("focusout","onBlur");ci(Kc,"onTransitionEnd");ua("onMouseEnter",["mouseout","mouseover"]);ua("onMouseLeave",["mouseout","mouseover"]);ua("onPointerEnter",["pointerout","pointerover"]);ua("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function bh(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,Am(a,t,void 0,e),e.currentTarget=null}function Dc(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],n=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var r=a.length-1;0<=r;r--){var s=a[r],o=s.instance,h=s.currentTarget;if(s=s.listener,o!==l&&n.isPropagationStopped())break e;bh(n,s,h),l=o}else for(r=0;r<a.length;r++){if(s=a[r],o=s.instance,h=s.currentTarget,s=s.listener,o!==l&&n.isPropagationStopped())break e;bh(n,s,h),l=o}}}if(cl)throw e=Jr,cl=!1,Jr=null,e}function he(e,t){var i=t[os];i===void 0&&(i=t[os]=new Set);var a=e+"__bubble";i.has(a)||(Bc(t,e,2,!1),i.add(a))}function Ar(e,t,i){var a=0;t&&(a|=4),Bc(i,e,a,t)}var Kn="_reactListening"+Math.random().toString(36).slice(2);function hn(e){if(!e[Kn]){e[Kn]=!0,$u.forEach(function(i){i!=="selectionchange"&&(Sp.has(i)||Ar(i,!1,e),Ar(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kn]||(t[Kn]=!0,Ar("selectionchange",!1,t))}}function Bc(e,t,i,a){switch(vc(t)){case 1:var n=Lm;break;case 4:n=Um;break;default:n=Qs}i=n.bind(null,t,i,e),n=void 0,!$r||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?e.addEventListener(t,i,{capture:!0,passive:n}):e.addEventListener(t,i,!0):n!==void 0?e.addEventListener(t,i,{passive:n}):e.addEventListener(t,i,!1)}function Ir(e,t,i,a,n){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var s=a.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(r===4)for(r=a.return;r!==null;){var o=r.tag;if((o===3||o===4)&&(o=r.stateNode.containerInfo,o===n||o.nodeType===8&&o.parentNode===n))return;r=r.return}for(;s!==null;){if(r=Si(s),r===null)return;if(o=r.tag,o===5||o===6){a=l=r;continue e}s=s.parentNode}}a=a.return}fc(function(){var h=l,d=Fs(i),c=[];e:{var f=Wc.get(e);if(f!==void 0){var T=Js,A=e;switch(e){case"keypress":if(el(i)===0)break e;case"keydown":case"keyup":T=Xm;break;case"focusin":A="focus",T=pr;break;case"focusout":A="blur",T=pr;break;case"beforeblur":case"afterblur":T=pr;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Km;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=ip;break;case Uc:case Hc:case zc:T=Bm;break;case Kc:T=np;break;case"scroll":T=Hm;break;case"wheel":T=rp;break;case"copy":case"cut":case"paste":T=Fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ph}var w=(t&4)!==0,b=!w&&e==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var u=h,p;u!==null;){p=u;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,m!==null&&(S=an(u,m),S!=null&&w.push(un(u,S,p)))),b)break;u=u.return}0<w.length&&(f=new T(f,A,null,i,d),c.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",f&&i!==Zr&&(A=i.relatedTarget||i.fromElement)&&(Si(A)||A[Ut]))break e;if((T||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,T?(A=i.relatedTarget||i.toElement,T=h,A=A?Si(A):null,A!==null&&(b=Vi(A),A!==b||A.tag!==5&&A.tag!==6)&&(A=null)):(T=null,A=h),T!==A)){if(w=fh,S="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=ph,S="onPointerLeave",m="onPointerEnter",u="pointer"),b=T==null?f:Qi(T),p=A==null?f:Qi(A),f=new w(S,u+"leave",T,i,d),f.target=b,f.relatedTarget=p,S=null,Si(d)===h&&(w=new w(m,u+"enter",A,i,d),w.target=p,w.relatedTarget=b,S=w),b=S,T&&A)t:{for(w=T,m=A,u=0,p=w;p;p=Wi(p))u++;for(p=0,S=m;S;S=Wi(S))p++;for(;0<u-p;)w=Wi(w),u--;for(;0<p-u;)m=Wi(m),p--;for(;u--;){if(w===m||m!==null&&w===m.alternate)break t;w=Wi(w),m=Wi(m)}w=null}else w=null;T!==null&&xh(c,f,T,w,!1),A!==null&&b!==null&&xh(c,b,A,w,!0)}}e:{if(f=h?Qi(h):window,T=f.nodeName&&f.nodeName.toLowerCase(),T==="select"||T==="input"&&f.type==="file")var N=fp;else if(_h(f))if(kc)N=gp;else{N=pp;var g=mp}else(T=f.nodeName)&&T.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=yp);if(N&&(N=N(e,h))){Oc(c,N,i,d);break e}g&&g(e,f,h),e==="focusout"&&(g=f._wrapperState)&&g.controlled&&f.type==="number"&&Br(f,"number",f.value)}switch(g=h?Qi(h):window,e){case"focusin":(_h(g)||g.contentEditable==="true")&&(qi=g,is=h,Za=null);break;case"focusout":Za=is=qi=null;break;case"mousedown":as=!0;break;case"contextmenu":case"mouseup":case"dragend":as=!1,Sh(c,i,d);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":Sh(c,i,d)}var C;if(eo)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Gi?Cc(e,i)&&(v="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(v="onCompositionStart");v&&(Nc&&i.locale!=="ko"&&(Gi||v!=="onCompositionStart"?v==="onCompositionEnd"&&Gi&&(C=Pc()):(Jt=d,$s="value"in Jt?Jt.value:Jt.textContent,Gi=!0)),g=yl(h,v),0<g.length&&(v=new mh(v,e,null,i,d),c.push({event:v,listeners:g}),C?v.data=C:(C=Rc(i),C!==null&&(v.data=C)))),(C=op?hp(e,i):up(e,i))&&(h=yl(h,"onBeforeInput"),0<h.length&&(d=new mh("onBeforeInput","beforeinput",null,i,d),c.push({event:d,listeners:h}),d.data=C))}Dc(c,t)})}function un(e,t,i){return{instance:e,listener:t,currentTarget:i}}function yl(e,t){for(var i=t+"Capture",a=[];e!==null;){var n=e,l=n.stateNode;n.tag===5&&l!==null&&(n=l,l=an(e,i),l!=null&&a.unshift(un(e,l,n)),l=an(e,t),l!=null&&a.push(un(e,l,n))),e=e.return}return a}function Wi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xh(e,t,i,a,n){for(var l=t._reactName,r=[];i!==null&&i!==a;){var s=i,o=s.alternate,h=s.stateNode;if(o!==null&&o===a)break;s.tag===5&&h!==null&&(s=h,n?(o=an(i,l),o!=null&&r.unshift(un(i,o,s))):n||(o=an(i,l),o!=null&&r.push(un(i,o,s)))),i=i.return}r.length!==0&&e.push({event:t,listeners:r})}var Ep=/\r\n?/g,bp=/\u0000|\uFFFD/g;function vh(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(bp,"")}function Wn(e,t,i){if(t=vh(t),vh(e)!==t&&i)throw Error(P(425))}function gl(){}var ns=null,ls=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ss=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,vp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(e){return Ph.resolve(null).then(e).catch(Pp)}:ss;function Pp(e){setTimeout(function(){throw e})}function Sr(e,t){var i=t,a=0;do{var n=i.nextSibling;if(e.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(a===0){e.removeChild(n),rn(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=n}while(i);rn(t)}function ni(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Et="__reactFiber$"+wa,cn="__reactProps$"+wa,Ut="__reactContainer$"+wa,os="__reactEvents$"+wa,Np="__reactListeners$"+wa,Cp="__reactHandles$"+wa;function Si(e){var t=e[Et];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Ut]||i[Et]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Nh(e);e!==null;){if(i=e[Et])return i;e=Nh(e)}return t}e=i,i=e.parentNode}return null}function Sn(e){return e=e[Et]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Wl(e){return e[cn]||null}var hs=[],$i=-1;function di(e){return{current:e}}function ue(e){0>$i||(e.current=hs[$i],hs[$i]=null,$i--)}function le(e,t){$i++,hs[$i]=e.current,e.current=t}var ui={},Le=di(ui),Ge=di(!1),Ni=ui;function ca(e,t){var i=e.type.contextTypes;if(!i)return ui;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var n={},l;for(l in i)n[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),n}function qe(e){return e=e.childContextTypes,e!=null}function _l(){ue(Ge),ue(Le)}function Ch(e,t,i){if(Le.current!==ui)throw Error(P(168));le(Le,t),le(Ge,i)}function Yc(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var n in a)if(!(n in t))throw Error(P(108,mm(e)||"Unknown",n));return ge({},i,a)}function Tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ui,Ni=Le.current,le(Le,e),le(Ge,Ge.current),!0}function Rh(e,t,i){var a=e.stateNode;if(!a)throw Error(P(169));i?(e=Yc(e,t,Ni),a.__reactInternalMemoizedMergedChildContext=e,ue(Ge),ue(Le),le(Le,e)):ue(Ge),le(Ge,i)}var Ot=null,Dl=!1,Er=!1;function Fc(e){Ot===null?Ot=[e]:Ot.push(e)}function Rp(e){Dl=!0,Fc(e)}function fi(){if(!Er&&Ot!==null){Er=!0;var e=0,t=ie;try{var i=Ot;for(ie=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}Ot=null,Dl=!1}catch(n){throw Ot!==null&&(Ot=Ot.slice(e+1)),gc(Gs,fi),n}finally{ie=t,Er=!1}}return null}var Ji=[],Xi=0,wl=null,Al=0,nt=[],lt=0,Ci=null,kt=1,jt="";function Ti(e,t){Ji[Xi++]=Al,Ji[Xi++]=wl,wl=e,Al=t}function Gc(e,t,i){nt[lt++]=kt,nt[lt++]=jt,nt[lt++]=Ci,Ci=e;var a=kt;e=jt;var n=32-gt(a)-1;a&=~(1<<n),i+=1;var l=32-gt(t)+n;if(30<l){var r=n-n%5;l=(a&(1<<r)-1).toString(32),a>>=r,n-=r,kt=1<<32-gt(t)+n|i<<n|a,jt=l+e}else kt=1<<l|i<<n|a,jt=e}function io(e){e.return!==null&&(Ti(e,1),Gc(e,1,0))}function ao(e){for(;e===wl;)wl=Ji[--Xi],Ji[Xi]=null,Al=Ji[--Xi],Ji[Xi]=null;for(;e===Ci;)Ci=nt[--lt],nt[lt]=null,jt=nt[--lt],nt[lt]=null,kt=nt[--lt],nt[lt]=null}var et=null,Xe=null,fe=!1,yt=null;function qc(e,t){var i=rt(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Oh(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,et=e,Xe=ni(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,et=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Ci!==null?{id:kt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=rt(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,et=e,Xe=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(fe){var t=Xe;if(t){var i=t;if(!Oh(e,t)){if(us(e))throw Error(P(418));t=ni(i.nextSibling);var a=et;t&&Oh(e,t)?qc(a,i):(e.flags=e.flags&-4097|2,fe=!1,et=e)}}else{if(us(e))throw Error(P(418));e.flags=e.flags&-4097|2,fe=!1,et=e}}}function kh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;et=e}function Dn(e){if(e!==et)return!1;if(!fe)return kh(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=Xe)){if(us(e))throw Zc(),Error(P(418));for(;t;)qc(e,t),t=ni(t.nextSibling)}if(kh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Xe=ni(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=et?ni(e.stateNode.nextSibling):null;return!0}function Zc(){for(var e=Xe;e;)e=ni(e.nextSibling)}function da(){Xe=et=null,fe=!1}function no(e){yt===null?yt=[e]:yt.push(e)}var Op=Kt.ReactCurrentBatchConfig;function Oa(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(P(309));var a=i.stateNode}if(!a)throw Error(P(147,e));var n=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(r){var s=n.refs;r===null?delete s[l]:s[l]=r},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!i._owner)throw Error(P(290,e))}return e}function Bn(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jh(e){var t=e._init;return t(e._payload)}function Qc(e){function t(m,u){if(e){var p=m.deletions;p===null?(m.deletions=[u],m.flags|=16):p.push(u)}}function i(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function a(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function n(m,u){return m=oi(m,u),m.index=0,m.sibling=null,m}function l(m,u,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<u?(m.flags|=2,u):p):(m.flags|=2,u)):(m.flags|=1048576,u)}function r(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,u,p,S){return u===null||u.tag!==6?(u=Rr(p,m.mode,S),u.return=m,u):(u=n(u,p),u.return=m,u)}function o(m,u,p,S){var N=p.type;return N===Fi?d(m,u,p.props.children,S,p.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qt&&jh(N)===u.type)?(S=n(u,p.props),S.ref=Oa(m,u,p),S.return=m,S):(S=sl(p.type,p.key,p.props,null,m.mode,S),S.ref=Oa(m,u,p),S.return=m,S)}function h(m,u,p,S){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Or(p,m.mode,S),u.return=m,u):(u=n(u,p.children||[]),u.return=m,u)}function d(m,u,p,S,N){return u===null||u.tag!==7?(u=Pi(p,m.mode,S,N),u.return=m,u):(u=n(u,p),u.return=m,u)}function c(m,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Rr(""+u,m.mode,p),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case kn:return p=sl(u.type,u.key,u.props,null,m.mode,p),p.ref=Oa(m,null,u),p.return=m,p;case Yi:return u=Or(u,m.mode,p),u.return=m,u;case qt:var S=u._init;return c(m,S(u._payload),p)}if(Ka(u)||va(u))return u=Pi(u,m.mode,p,null),u.return=m,u;Bn(m,u)}return null}function f(m,u,p,S){var N=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(m,u,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case kn:return p.key===N?o(m,u,p,S):null;case Yi:return p.key===N?h(m,u,p,S):null;case qt:return N=p._init,f(m,u,N(p._payload),S)}if(Ka(p)||va(p))return N!==null?null:d(m,u,p,S,null);Bn(m,p)}return null}function T(m,u,p,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(p)||null,s(u,m,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case kn:return m=m.get(S.key===null?p:S.key)||null,o(u,m,S,N);case Yi:return m=m.get(S.key===null?p:S.key)||null,h(u,m,S,N);case qt:var g=S._init;return T(m,u,p,g(S._payload),N)}if(Ka(S)||va(S))return m=m.get(p)||null,d(u,m,S,N,null);Bn(u,S)}return null}function A(m,u,p,S){for(var N=null,g=null,C=u,v=u=0,H=null;C!==null&&v<p.length;v++){C.index>v?(H=C,C=null):H=C.sibling;var j=f(m,C,p[v],S);if(j===null){C===null&&(C=H);break}e&&C&&j.alternate===null&&t(m,C),u=l(j,u,v),g===null?N=j:g.sibling=j,g=j,C=H}if(v===p.length)return i(m,C),fe&&Ti(m,v),N;if(C===null){for(;v<p.length;v++)C=c(m,p[v],S),C!==null&&(u=l(C,u,v),g===null?N=C:g.sibling=C,g=C);return fe&&Ti(m,v),N}for(C=a(m,C);v<p.length;v++)H=T(C,m,v,p[v],S),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?v:H.key),u=l(H,u,v),g===null?N=H:g.sibling=H,g=H);return e&&C.forEach(function(X){return t(m,X)}),fe&&Ti(m,v),N}function w(m,u,p,S){var N=va(p);if(typeof N!="function")throw Error(P(150));if(p=N.call(p),p==null)throw Error(P(151));for(var g=N=null,C=u,v=u=0,H=null,j=p.next();C!==null&&!j.done;v++,j=p.next()){C.index>v?(H=C,C=null):H=C.sibling;var X=f(m,C,j.value,S);if(X===null){C===null&&(C=H);break}e&&C&&X.alternate===null&&t(m,C),u=l(X,u,v),g===null?N=X:g.sibling=X,g=X,C=H}if(j.done)return i(m,C),fe&&Ti(m,v),N;if(C===null){for(;!j.done;v++,j=p.next())j=c(m,j.value,S),j!==null&&(u=l(j,u,v),g===null?N=j:g.sibling=j,g=j);return fe&&Ti(m,v),N}for(C=a(m,C);!j.done;v++,j=p.next())j=T(C,m,v,j.value,S),j!==null&&(e&&j.alternate!==null&&C.delete(j.key===null?v:j.key),u=l(j,u,v),g===null?N=j:g.sibling=j,g=j);return e&&C.forEach(function(D){return t(m,D)}),fe&&Ti(m,v),N}function b(m,u,p,S){if(typeof p=="object"&&p!==null&&p.type===Fi&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case kn:e:{for(var N=p.key,g=u;g!==null;){if(g.key===N){if(N=p.type,N===Fi){if(g.tag===7){i(m,g.sibling),u=n(g,p.props.children),u.return=m,m=u;break e}}else if(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qt&&jh(N)===g.type){i(m,g.sibling),u=n(g,p.props),u.ref=Oa(m,g,p),u.return=m,m=u;break e}i(m,g);break}else t(m,g);g=g.sibling}p.type===Fi?(u=Pi(p.props.children,m.mode,S,p.key),u.return=m,m=u):(S=sl(p.type,p.key,p.props,null,m.mode,S),S.ref=Oa(m,u,p),S.return=m,m=S)}return r(m);case Yi:e:{for(g=p.key;u!==null;){if(u.key===g)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){i(m,u.sibling),u=n(u,p.children||[]),u.return=m,m=u;break e}else{i(m,u);break}else t(m,u);u=u.sibling}u=Or(p,m.mode,S),u.return=m,m=u}return r(m);case qt:return g=p._init,b(m,u,g(p._payload),S)}if(Ka(p))return A(m,u,p,S);if(va(p))return w(m,u,p,S);Bn(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(i(m,u.sibling),u=n(u,p),u.return=m,m=u):(i(m,u),u=Rr(p,m.mode,S),u.return=m,m=u),r(m)):i(m,u)}return b}var fa=Qc(!0),$c=Qc(!1),Il=di(null),Sl=null,ea=null,lo=null;function ro(){lo=ea=Sl=null}function so(e){var t=Il.current;ue(Il),e._currentValue=t}function ds(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function sa(e,t){Sl=e,lo=ea=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Fe=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(lo!==e)if(e={context:e,memoizedValue:t,next:null},ea===null){if(Sl===null)throw Error(P(308));ea=e,Sl.dependencies={lanes:0,firstContext:e}}else ea=ea.next=e;return t}var Ei=null;function oo(e){Ei===null?Ei=[e]:Ei.push(e)}function Jc(e,t,i,a){var n=t.interleaved;return n===null?(i.next=i,oo(t)):(i.next=n.next,n.next=i),t.interleaved=i,Ht(e,a)}function Ht(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Zt=!1;function ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function li(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,J&2){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,Ht(e,i)}return n=a.interleaved,n===null?(t.next=t,oo(a)):(t.next=n.next,n.next=t),a.interleaved=t,Ht(e,i)}function tl(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,qs(e,i)}}function Mh(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var n=null,l=null;if(i=i.firstBaseUpdate,i!==null){do{var r={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};l===null?n=l=r:l=l.next=r,i=i.next}while(i!==null);l===null?n=l=t:l=l.next=t}else n=l=t;i={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function El(e,t,i,a){var n=e.updateQueue;Zt=!1;var l=n.firstBaseUpdate,r=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,h=o.next;o.next=null,r===null?l=h:r.next=h,r=o;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==r&&(s===null?d.firstBaseUpdate=h:s.next=h,d.lastBaseUpdate=o))}if(l!==null){var c=n.baseState;r=0,d=h=o=null,s=l;do{var f=s.lane,T=s.eventTime;if((a&f)===f){d!==null&&(d=d.next={eventTime:T,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var A=e,w=s;switch(f=t,T=i,w.tag){case 1:if(A=w.payload,typeof A=="function"){c=A.call(T,c,f);break e}c=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=w.payload,f=typeof A=="function"?A.call(T,c,f):A,f==null)break e;c=ge({},c,f);break e;case 2:Zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=n.effects,f===null?n.effects=[s]:f.push(s))}else T={eventTime:T,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(h=d=T,o=c):d=d.next=T,r|=f;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;f=s,s=f.next,f.next=null,n.lastBaseUpdate=f,n.shared.pending=null}}while(!0);if(d===null&&(o=c),n.baseState=o,n.firstBaseUpdate=h,n.lastBaseUpdate=d,t=n.shared.interleaved,t!==null){n=t;do r|=n.lane,n=n.next;while(n!==t)}else l===null&&(n.shared.lanes=0);Oi|=r,e.lanes=r,e.memoizedState=c}}function Vh(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],n=a.callback;if(n!==null){if(a.callback=null,a=i,typeof n!="function")throw Error(P(191,n));n.call(a)}}}var En={},xt=di(En),dn=di(En),fn=di(En);function bi(e){if(e===En)throw Error(P(174));return e}function uo(e,t){switch(le(fn,t),le(dn,e),le(xt,En),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fr(t,e)}ue(xt),le(xt,t)}function ma(){ue(xt),ue(dn),ue(fn)}function ed(e){bi(fn.current);var t=bi(xt.current),i=Fr(t,e.type);t!==i&&(le(dn,e),le(xt,i))}function co(e){dn.current===e&&(ue(xt),ue(dn))}var pe=di(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var br=[];function fo(){for(var e=0;e<br.length;e++)br[e]._workInProgressVersionPrimary=null;br.length=0}var il=Kt.ReactCurrentDispatcher,xr=Kt.ReactCurrentBatchConfig,Ri=0,ye=null,be=null,ve=null,xl=!1,Qa=!1,mn=0,kp=0;function je(){throw Error(P(321))}function mo(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Tt(e[i],t[i]))return!1;return!0}function po(e,t,i,a,n,l){if(Ri=l,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?Lp:Up,e=i(a,n),Qa){l=0;do{if(Qa=!1,mn=0,25<=l)throw Error(P(301));l+=1,ve=be=null,t.updateQueue=null,il.current=Hp,e=i(a,n)}while(Qa)}if(il.current=vl,t=be!==null&&be.next!==null,Ri=0,ve=be=ye=null,xl=!1,t)throw Error(P(300));return e}function yo(){var e=mn!==0;return mn=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ye.memoizedState=ve=e:ve=ve.next=e,ve}function ht(){if(be===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=ve===null?ye.memoizedState:ve.next;if(t!==null)ve=t,be=e;else{if(e===null)throw Error(P(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ve===null?ye.memoizedState=ve=e:ve=ve.next=e}return ve}function pn(e,t){return typeof t=="function"?t(e):t}function vr(e){var t=ht(),i=t.queue;if(i===null)throw Error(P(311));i.lastRenderedReducer=e;var a=be,n=a.baseQueue,l=i.pending;if(l!==null){if(n!==null){var r=n.next;n.next=l.next,l.next=r}a.baseQueue=n=l,i.pending=null}if(n!==null){l=n.next,a=a.baseState;var s=r=null,o=null,h=l;do{var d=h.lane;if((Ri&d)===d)o!==null&&(o=o.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),a=h.hasEagerState?h.eagerState:e(a,h.action);else{var c={lane:d,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};o===null?(s=o=c,r=a):o=o.next=c,ye.lanes|=d,Oi|=d}h=h.next}while(h!==null&&h!==l);o===null?r=a:o.next=s,Tt(a,t.memoizedState)||(Fe=!0),t.memoizedState=a,t.baseState=r,t.baseQueue=o,i.lastRenderedState=a}if(e=i.interleaved,e!==null){n=e;do l=n.lane,ye.lanes|=l,Oi|=l,n=n.next;while(n!==e)}else n===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Pr(e){var t=ht(),i=t.queue;if(i===null)throw Error(P(311));i.lastRenderedReducer=e;var a=i.dispatch,n=i.pending,l=t.memoizedState;if(n!==null){i.pending=null;var r=n=n.next;do l=e(l,r.action),r=r.next;while(r!==n);Tt(l,t.memoizedState)||(Fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),i.lastRenderedState=l}return[l,a]}function td(){}function id(e,t){var i=ye,a=ht(),n=t(),l=!Tt(a.memoizedState,n);if(l&&(a.memoizedState=n,Fe=!0),a=a.queue,go(ld.bind(null,i,a,e),[e]),a.getSnapshot!==t||l||ve!==null&&ve.memoizedState.tag&1){if(i.flags|=2048,yn(9,nd.bind(null,i,a,n,t),void 0,null),Pe===null)throw Error(P(349));Ri&30||ad(i,t,n)}return n}function ad(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function nd(e,t,i,a){t.value=i,t.getSnapshot=a,rd(t)&&sd(e)}function ld(e,t,i){return i(function(){rd(t)&&sd(e)})}function rd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Tt(e,i)}catch{return!0}}function sd(e){var t=Ht(e,1);t!==null&&_t(t,e,1,-1)}function Lh(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pn,lastRenderedState:e},t.queue=e,e=e.dispatch=Vp.bind(null,ye,e),[t.memoizedState,e]}function yn(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function od(){return ht().memoizedState}function al(e,t,i,a){var n=St();ye.flags|=e,n.memoizedState=yn(1|t,i,void 0,a===void 0?null:a)}function Bl(e,t,i,a){var n=ht();a=a===void 0?null:a;var l=void 0;if(be!==null){var r=be.memoizedState;if(l=r.destroy,a!==null&&mo(a,r.deps)){n.memoizedState=yn(t,i,l,a);return}}ye.flags|=e,n.memoizedState=yn(1|t,i,l,a)}function Uh(e,t){return al(8390656,8,e,t)}function go(e,t){return Bl(2048,8,e,t)}function hd(e,t){return Bl(4,2,e,t)}function ud(e,t){return Bl(4,4,e,t)}function cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,i){return i=i!=null?i.concat([e]):null,Bl(4,4,cd.bind(null,t,e),i)}function _o(){}function fd(e,t){var i=ht();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&mo(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function md(e,t){var i=ht();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&mo(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function pd(e,t,i){return Ri&21?(Tt(i,t)||(i=wc(),ye.lanes|=i,Oi|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=i)}function jp(e,t){var i=ie;ie=i!==0&&4>i?i:4,e(!0);var a=xr.transition;xr.transition={};try{e(!1),t()}finally{ie=i,xr.transition=a}}function yd(){return ht().memoizedState}function Mp(e,t,i){var a=si(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},gd(e))_d(t,i);else if(i=Jc(e,t,i,a),i!==null){var n=Ke();_t(i,e,a,n),Td(i,t,a)}}function Vp(e,t,i){var a=si(e),n={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(gd(e))_d(t,n);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var r=t.lastRenderedState,s=l(r,i);if(n.hasEagerState=!0,n.eagerState=s,Tt(s,r)){var o=t.interleaved;o===null?(n.next=n,oo(t)):(n.next=o.next,o.next=n),t.interleaved=n;return}}catch{}finally{}i=Jc(e,t,n,a),i!==null&&(n=Ke(),_t(i,e,a,n),Td(i,t,a))}}function gd(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function _d(e,t){Qa=xl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Td(e,t,i){if(i&4194240){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,qs(e,i)}}var vl={readContext:ot,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Lp={readContext:ot,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Uh,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,al(4194308,4,cd.bind(null,t,e),i)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){return al(4,2,e,t)},useMemo:function(e,t){var i=St();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=St();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Mp.bind(null,ye,e),[a.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Lh,useDebugValue:_o,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Lh(!1),t=e[0];return e=jp.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=ye,n=St();if(fe){if(i===void 0)throw Error(P(407));i=i()}else{if(i=t(),Pe===null)throw Error(P(349));Ri&30||ad(a,t,i)}n.memoizedState=i;var l={value:i,getSnapshot:t};return n.queue=l,Uh(ld.bind(null,a,l,e),[e]),a.flags|=2048,yn(9,nd.bind(null,a,l,i,t),void 0,null),i},useId:function(){var e=St(),t=Pe.identifierPrefix;if(fe){var i=jt,a=kt;i=(a&~(1<<32-gt(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=mn++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=kp++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Up={readContext:ot,useCallback:fd,useContext:ot,useEffect:go,useImperativeHandle:dd,useInsertionEffect:hd,useLayoutEffect:ud,useMemo:md,useReducer:vr,useRef:od,useState:function(){return vr(pn)},useDebugValue:_o,useDeferredValue:function(e){var t=ht();return pd(t,be.memoizedState,e)},useTransition:function(){var e=vr(pn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:id,useId:yd,unstable_isNewReconciler:!1},Hp={readContext:ot,useCallback:fd,useContext:ot,useEffect:go,useImperativeHandle:dd,useInsertionEffect:hd,useLayoutEffect:ud,useMemo:md,useReducer:Pr,useRef:od,useState:function(){return Pr(pn)},useDebugValue:_o,useDeferredValue:function(e){var t=ht();return be===null?t.memoizedState=e:pd(t,be.memoizedState,e)},useTransition:function(){var e=Pr(pn)[0],t=ht().memoizedState;return[e,t]},useMutableSource:td,useSyncExternalStore:id,useId:yd,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function fs(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:ge({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Yl={isMounted:function(e){return(e=e._reactInternals)?Vi(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=Ke(),n=si(e),l=Mt(a,n);l.payload=t,i!=null&&(l.callback=i),t=li(e,l,n),t!==null&&(_t(t,e,n,a),tl(t,e,n))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=Ke(),n=si(e),l=Mt(a,n);l.tag=1,l.payload=t,i!=null&&(l.callback=i),t=li(e,l,n),t!==null&&(_t(t,e,n,a),tl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=Ke(),a=si(e),n=Mt(i,a);n.tag=2,t!=null&&(n.callback=t),t=li(e,n,a),t!==null&&(_t(t,e,a,i),tl(t,e,a))}};function Hh(e,t,i,a,n,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,r):t.prototype&&t.prototype.isPureReactComponent?!on(i,a)||!on(n,l):!0}function wd(e,t,i){var a=!1,n=ui,l=t.contextType;return typeof l=="object"&&l!==null?l=ot(l):(n=qe(t)?Ni:Le.current,a=t.contextTypes,l=(a=a!=null)?ca(e,n):ui),t=new t(i,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yl,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),t}function zh(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&Yl.enqueueReplaceState(t,t.state,null)}function ms(e,t,i,a){var n=e.stateNode;n.props=i,n.state=e.memoizedState,n.refs={},ho(e);var l=t.contextType;typeof l=="object"&&l!==null?n.context=ot(l):(l=qe(t)?Ni:Le.current,n.context=ca(e,l)),n.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(fs(e,t,l,i),n.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(t=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),t!==n.state&&Yl.enqueueReplaceState(n,n.state,null),El(e,i,n,a),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function pa(e,t){try{var i="",a=t;do i+=fm(a),a=a.return;while(a);var n=i}catch(l){n=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:n,digest:null}}function Nr(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var zp=typeof WeakMap=="function"?WeakMap:Map;function Ad(e,t,i){i=Mt(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){Nl||(Nl=!0,bs=a),ps(e,t)},i}function Id(e,t,i){i=Mt(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var n=t.value;i.payload=function(){return a(n)},i.callback=function(){ps(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(i.callback=function(){ps(e,t),typeof a!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:r!==null?r:""})}),i}function Kh(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new zp;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(i)||(n.add(i),e=e4.bind(null,e,t,i),t.then(e,e))}function Wh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dh(e,t,i,a,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=Mt(-1,1),t.tag=2,li(i,t,1))),i.lanes|=1),e)}var Kp=Kt.ReactCurrentOwner,Fe=!1;function ze(e,t,i,a){t.child=e===null?$c(t,null,i,a):fa(t,e.child,i,a)}function Bh(e,t,i,a,n){i=i.render;var l=t.ref;return sa(t,n),a=po(e,t,i,a,l,n),i=yo(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,zt(e,t,n)):(fe&&i&&io(t),t.flags|=1,ze(e,t,a,n),t.child)}function Yh(e,t,i,a,n){if(e===null){var l=i.type;return typeof l=="function"&&!xo(l)&&l.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=l,Sd(e,t,l,a,n)):(e=sl(i.type,null,a,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&n)){var r=l.memoizedProps;if(i=i.compare,i=i!==null?i:on,i(r,a)&&e.ref===t.ref)return zt(e,t,n)}return t.flags|=1,e=oi(l,a),e.ref=t.ref,e.return=t,t.child=e}function Sd(e,t,i,a,n){if(e!==null){var l=e.memoizedProps;if(on(l,a)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=a=l,(e.lanes&n)!==0)e.flags&131072&&(Fe=!0);else return t.lanes=e.lanes,zt(e,t,n)}return ys(e,t,i,a,n)}function Ed(e,t,i){var a=t.pendingProps,n=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(ia,$e),$e|=i;else{if(!(i&1073741824))return e=l!==null?l.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(ia,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:i,le(ia,$e),$e|=a}else l!==null?(a=l.baseLanes|i,t.memoizedState=null):a=i,le(ia,$e),$e|=a;return ze(e,t,n,i),t.child}function bd(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,i,a,n){var l=qe(i)?Ni:Le.current;return l=ca(t,l),sa(t,n),i=po(e,t,i,a,l,n),a=yo(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n,zt(e,t,n)):(fe&&a&&io(t),t.flags|=1,ze(e,t,i,n),t.child)}function Fh(e,t,i,a,n){if(qe(i)){var l=!0;Tl(t)}else l=!1;if(sa(t,n),t.stateNode===null)nl(e,t),wd(t,i,a),ms(t,i,a,n),a=!0;else if(e===null){var r=t.stateNode,s=t.memoizedProps;r.props=s;var o=r.context,h=i.contextType;typeof h=="object"&&h!==null?h=ot(h):(h=qe(i)?Ni:Le.current,h=ca(t,h));var d=i.getDerivedStateFromProps,c=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function";c||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==a||o!==h)&&zh(t,r,a,h),Zt=!1;var f=t.memoizedState;r.state=f,El(t,a,r,n),o=t.memoizedState,s!==a||f!==o||Ge.current||Zt?(typeof d=="function"&&(fs(t,i,d,a),o=t.memoizedState),(s=Zt||Hh(t,i,s,a,f,o,h))?(c||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=o),r.props=a,r.state=o,r.context=h,a=s):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,Xc(e,t),s=t.memoizedProps,h=t.type===t.elementType?s:ft(t.type,s),r.props=h,c=t.pendingProps,f=r.context,o=i.contextType,typeof o=="object"&&o!==null?o=ot(o):(o=qe(i)?Ni:Le.current,o=ca(t,o));var T=i.getDerivedStateFromProps;(d=typeof T=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==c||f!==o)&&zh(t,r,a,o),Zt=!1,f=t.memoizedState,r.state=f,El(t,a,r,n);var A=t.memoizedState;s!==c||f!==A||Ge.current||Zt?(typeof T=="function"&&(fs(t,i,T,a),A=t.memoizedState),(h=Zt||Hh(t,i,h,a,f,A,o)||!1)?(d||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,A,o),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,A,o)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=o,a=h):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),a=!1)}return gs(e,t,i,a,l,n)}function gs(e,t,i,a,n,l){bd(e,t);var r=(t.flags&128)!==0;if(!a&&!r)return n&&Rh(t,i,!1),zt(e,t,l);a=t.stateNode,Kp.current=t;var s=r&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&r?(t.child=fa(t,e.child,null,l),t.child=fa(t,null,s,l)):ze(e,t,s,l),t.memoizedState=a.state,n&&Rh(t,i,!0),t.child}function xd(e){var t=e.stateNode;t.pendingContext?Ch(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ch(e,t.context,!1),uo(e,t.containerInfo)}function Gh(e,t,i,a,n){return da(),no(n),t.flags|=256,ze(e,t,i,a),t.child}var _s={dehydrated:null,treeContext:null,retryLane:0};function Ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function vd(e,t,i){var a=t.pendingProps,n=pe.current,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(n&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),le(pe,n&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(r=a.children,e=a.fallback,l?(a=t.mode,l=t.child,r={mode:"hidden",children:r},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=r):l=ql(r,a,0,null),e=Pi(e,a,i,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ts(i),t.memoizedState=_s,e):To(t,r));if(n=e.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return Wp(e,t,r,a,s,n,i);if(l){l=a.fallback,r=t.mode,n=e.child,s=n.sibling;var o={mode:"hidden",children:a.children};return!(r&1)&&t.child!==n?(a=t.child,a.childLanes=0,a.pendingProps=o,t.deletions=null):(a=oi(n,o),a.subtreeFlags=n.subtreeFlags&14680064),s!==null?l=oi(s,l):(l=Pi(l,r,i,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,r=e.child.memoizedState,r=r===null?Ts(i):{baseLanes:r.baseLanes|i,cachePool:null,transitions:r.transitions},l.memoizedState=r,l.childLanes=e.childLanes&~i,t.memoizedState=_s,a}return l=e.child,e=l.sibling,a=oi(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function To(e,t){return t=ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yn(e,t,i,a){return a!==null&&no(a),fa(t,e.child,null,i),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wp(e,t,i,a,n,l,r){if(i)return t.flags&256?(t.flags&=-257,a=Nr(Error(P(422))),Yn(e,t,r,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,n=t.mode,a=ql({mode:"visible",children:a.children},n,0,null),l=Pi(l,n,r,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&fa(t,e.child,null,r),t.child.memoizedState=Ts(r),t.memoizedState=_s,l);if(!(t.mode&1))return Yn(e,t,r,null);if(n.data==="$!"){if(a=n.nextSibling&&n.nextSibling.dataset,a)var s=a.dgst;return a=s,l=Error(P(419)),a=Nr(l,a,void 0),Yn(e,t,r,a)}if(s=(r&e.childLanes)!==0,Fe||s){if(a=Pe,a!==null){switch(r&-r){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(a.suspendedLanes|r)?0:n,n!==0&&n!==l.retryLane&&(l.retryLane=n,Ht(e,n),_t(a,e,n,-1))}return bo(),a=Nr(Error(P(421))),Yn(e,t,r,a)}return n.data==="$?"?(t.flags|=128,t.child=e.child,t=t4.bind(null,e),n._reactRetry=t,null):(e=l.treeContext,Xe=ni(n.nextSibling),et=t,fe=!0,yt=null,e!==null&&(nt[lt++]=kt,nt[lt++]=jt,nt[lt++]=Ci,kt=e.id,jt=e.overflow,Ci=t),t=To(t,a.children),t.flags|=4096,t)}function qh(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),ds(e.return,t,i)}function Cr(e,t,i,a,n){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:n}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=i,l.tailMode=n)}function Pd(e,t,i){var a=t.pendingProps,n=a.revealOrder,l=a.tail;if(ze(e,t,a.children,i),a=pe.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qh(e,i,t);else if(e.tag===19)qh(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(le(pe,a),!(t.mode&1))t.memoizedState=null;else switch(n){case"forwards":for(i=t.child,n=null;i!==null;)e=i.alternate,e!==null&&bl(e)===null&&(n=i),i=i.sibling;i=n,i===null?(n=t.child,t.child=null):(n=i.sibling,i.sibling=null),Cr(t,!1,n,i,l);break;case"backwards":for(i=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bl(e)===null){t.child=n;break}e=n.sibling,n.sibling=i,i=n,n=e}Cr(t,!0,i,null,l);break;case"together":Cr(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Oi|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,i=oi(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=oi(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Dp(e,t,i){switch(t.tag){case 3:xd(t),da();break;case 5:ed(t);break;case 1:qe(t.type)&&Tl(t);break;case 4:uo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,n=t.memoizedProps.value;le(Il,a._currentValue),a._currentValue=n;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(le(pe,pe.current&1),t.flags|=128,null):i&t.child.childLanes?vd(e,t,i):(le(pe,pe.current&1),e=zt(e,t,i),e!==null?e.sibling:null);le(pe,pe.current&1);break;case 19:if(a=(i&t.childLanes)!==0,e.flags&128){if(a)return Pd(e,t,i);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),le(pe,pe.current),a)break;return null;case 22:case 23:return t.lanes=0,Ed(e,t,i)}return zt(e,t,i)}var Nd,ws,Cd,Rd;Nd=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};ws=function(){};Cd=function(e,t,i,a){var n=e.memoizedProps;if(n!==a){e=t.stateNode,bi(xt.current);var l=null;switch(i){case"input":n=Wr(e,n),a=Wr(e,a),l=[];break;case"select":n=ge({},n,{value:void 0}),a=ge({},a,{value:void 0}),l=[];break;case"textarea":n=Yr(e,n),a=Yr(e,a),l=[];break;default:typeof n.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=gl)}Gr(i,a);var r;i=null;for(h in n)if(!a.hasOwnProperty(h)&&n.hasOwnProperty(h)&&n[h]!=null)if(h==="style"){var s=n[h];for(r in s)s.hasOwnProperty(r)&&(i||(i={}),i[r]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(en.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in a){var o=a[h];if(s=n!=null?n[h]:void 0,a.hasOwnProperty(h)&&o!==s&&(o!=null||s!=null))if(h==="style")if(s){for(r in s)!s.hasOwnProperty(r)||o&&o.hasOwnProperty(r)||(i||(i={}),i[r]="");for(r in o)o.hasOwnProperty(r)&&s[r]!==o[r]&&(i||(i={}),i[r]=o[r])}else i||(l||(l=[]),l.push(h,i)),i=o;else h==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,s=s?s.__html:void 0,o!=null&&s!==o&&(l=l||[]).push(h,o)):h==="children"?typeof o!="string"&&typeof o!="number"||(l=l||[]).push(h,""+o):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(en.hasOwnProperty(h)?(o!=null&&h==="onScroll"&&he("scroll",e),l||s===o||(l=[])):(l=l||[]).push(h,o))}i&&(l=l||[]).push("style",i);var h=l;(t.updateQueue=h)&&(t.flags|=4)}};Rd=function(e,t,i,a){i!==a&&(t.flags|=4)};function ka(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Me(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var n=e.child;n!==null;)i|=n.lanes|n.childLanes,a|=n.subtreeFlags&14680064,a|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)i|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function Bp(e,t,i){var a=t.pendingProps;switch(ao(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(t),null;case 1:return qe(t.type)&&_l(),Me(t),null;case 3:return a=t.stateNode,ma(),ue(Ge),ue(Le),fo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(Ps(yt),yt=null))),ws(e,t),Me(t),null;case 5:co(t);var n=bi(fn.current);if(i=t.type,e!==null&&t.stateNode!=null)Cd(e,t,i,a,n),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(P(166));return Me(t),null}if(e=bi(xt.current),Dn(t)){a=t.stateNode,i=t.type;var l=t.memoizedProps;switch(a[Et]=t,a[cn]=l,e=(t.mode&1)!==0,i){case"dialog":he("cancel",a),he("close",a);break;case"iframe":case"object":case"embed":he("load",a);break;case"video":case"audio":for(n=0;n<Da.length;n++)he(Da[n],a);break;case"source":he("error",a);break;case"img":case"image":case"link":he("error",a),he("load",a);break;case"details":he("toggle",a);break;case"input":ah(a,l),he("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},he("invalid",a);break;case"textarea":lh(a,l),he("invalid",a)}Gr(i,l),n=null;for(var r in l)if(l.hasOwnProperty(r)){var s=l[r];r==="children"?typeof s=="string"?a.textContent!==s&&(l.suppressHydrationWarning!==!0&&Wn(a.textContent,s,e),n=["children",s]):typeof s=="number"&&a.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Wn(a.textContent,s,e),n=["children",""+s]):en.hasOwnProperty(r)&&s!=null&&r==="onScroll"&&he("scroll",a)}switch(i){case"input":jn(a),nh(a,l,!0);break;case"textarea":jn(a),rh(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=gl)}a=n,t.updateQueue=a,a!==null&&(t.flags|=4)}else{r=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=lc(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=r.createElement(i,{is:a.is}):(e=r.createElement(i),i==="select"&&(r=e,a.multiple?r.multiple=!0:a.size&&(r.size=a.size))):e=r.createElementNS(e,i),e[Et]=t,e[cn]=a,Nd(e,t,!1,!1),t.stateNode=e;e:{switch(r=qr(i,a),i){case"dialog":he("cancel",e),he("close",e),n=a;break;case"iframe":case"object":case"embed":he("load",e),n=a;break;case"video":case"audio":for(n=0;n<Da.length;n++)he(Da[n],e);n=a;break;case"source":he("error",e),n=a;break;case"img":case"image":case"link":he("error",e),he("load",e),n=a;break;case"details":he("toggle",e),n=a;break;case"input":ah(e,a),n=Wr(e,a),he("invalid",e);break;case"option":n=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},n=ge({},a,{value:void 0}),he("invalid",e);break;case"textarea":lh(e,a),n=Yr(e,a),he("invalid",e);break;default:n=a}Gr(i,n),s=n;for(l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="style"?oc(e,o):l==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&rc(e,o)):l==="children"?typeof o=="string"?(i!=="textarea"||o!=="")&&tn(e,o):typeof o=="number"&&tn(e,""+o):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(en.hasOwnProperty(l)?o!=null&&l==="onScroll"&&he("scroll",e):o!=null&&Ws(e,l,o,r))}switch(i){case"input":jn(e),nh(e,a,!1);break;case"textarea":jn(e),rh(e);break;case"option":a.value!=null&&e.setAttribute("value",""+hi(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?aa(e,!!a.multiple,l,!1):a.defaultValue!=null&&aa(e,!!a.multiple,a.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=gl)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Me(t),null;case 6:if(e&&t.stateNode!=null)Rd(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(P(166));if(i=bi(fn.current),bi(xt.current),Dn(t)){if(a=t.stateNode,i=t.memoizedProps,a[Et]=t,(l=a.nodeValue!==i)&&(e=et,e!==null))switch(e.tag){case 3:Wn(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wn(a.nodeValue,i,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Et]=t,t.stateNode=a}return Me(t),null;case 13:if(ue(pe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Xe!==null&&t.mode&1&&!(t.flags&128))Zc(),da(),t.flags|=98560,l=!1;else if(l=Dn(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[Et]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Me(t),l=!1}else yt!==null&&(Ps(yt),yt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?xe===0&&(xe=3):bo())),t.updateQueue!==null&&(t.flags|=4),Me(t),null);case 4:return ma(),ws(e,t),e===null&&hn(t.stateNode.containerInfo),Me(t),null;case 10:return so(t.type._context),Me(t),null;case 17:return qe(t.type)&&_l(),Me(t),null;case 19:if(ue(pe),l=t.memoizedState,l===null)return Me(t),null;if(a=(t.flags&128)!==0,r=l.rendering,r===null)if(a)ka(l,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(r=bl(e),r!==null){for(t.flags|=128,ka(l,!1),a=r.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)l=i,e=a,l.flags&=14680066,r=l.alternate,r===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,l.type=r.type,e=r.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return le(pe,pe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ae()>ya&&(t.flags|=128,a=!0,ka(l,!1),t.lanes=4194304)}else{if(!a)if(e=bl(r),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),ka(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!fe)return Me(t),null}else 2*Ae()-l.renderingStartTime>ya&&i!==1073741824&&(t.flags|=128,a=!0,ka(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(i=l.last,i!==null?i.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ae(),t.sibling=null,i=pe.current,le(pe,a?i&1|2:i&1),t):(Me(t),null);case 22:case 23:return Eo(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?$e&1073741824&&(Me(t),t.subtreeFlags&6&&(t.flags|=8192)):Me(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Yp(e,t){switch(ao(t),t.tag){case 1:return qe(t.type)&&_l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(),ue(Ge),ue(Le),fo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return co(t),null;case 13:if(ue(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(pe),null;case 4:return ma(),null;case 10:return so(t.type._context),null;case 22:case 23:return Eo(),null;case 24:return null;default:return null}}var Fn=!1,Ve=!1,Fp=typeof WeakSet=="function"?WeakSet:Set,k=null;function ta(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){we(e,t,a)}else i.current=null}function As(e,t,i){try{i()}catch(a){we(e,t,a)}}var Zh=!1;function Gp(e,t){if(ns=ml,e=Vc(),to(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var n=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{i.nodeType,l.nodeType}catch{i=null;break e}var r=0,s=-1,o=-1,h=0,d=0,c=e,f=null;t:for(;;){for(var T;c!==i||n!==0&&c.nodeType!==3||(s=r+n),c!==l||a!==0&&c.nodeType!==3||(o=r+a),c.nodeType===3&&(r+=c.nodeValue.length),(T=c.firstChild)!==null;)f=c,c=T;for(;;){if(c===e)break t;if(f===i&&++h===n&&(s=r),f===l&&++d===a&&(o=r),(T=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=T}i=s===-1||o===-1?null:{start:s,end:o}}else i=null}i=i||{start:0,end:0}}else i=null;for(ls={focusedElem:e,selectionRange:i},ml=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var A=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var w=A.memoizedProps,b=A.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),b);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){we(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return A=Zh,Zh=!1,A}function $a(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var n=a=a.next;do{if((n.tag&e)===e){var l=n.destroy;n.destroy=void 0,l!==void 0&&As(t,i,l)}n=n.next}while(n!==a)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function Is(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Od(e){var t=e.alternate;t!==null&&(e.alternate=null,Od(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[cn],delete t[os],delete t[Np],delete t[Cp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kd(e){return e.tag===5||e.tag===3||e.tag===4}function Qh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=gl));else if(a!==4&&(e=e.child,e!==null))for(Ss(e,t,i),e=e.sibling;e!==null;)Ss(e,t,i),e=e.sibling}function Es(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Es(e,t,i),e=e.sibling;e!==null;)Es(e,t,i),e=e.sibling}var Re=null,mt=!1;function Bt(e,t,i){for(i=i.child;i!==null;)jd(e,t,i),i=i.sibling}function jd(e,t,i){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Ul,i)}catch{}switch(i.tag){case 5:Ve||ta(i,t);case 6:var a=Re,n=mt;Re=null,Bt(e,t,i),Re=a,mt=n,Re!==null&&(mt?(e=Re,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Re.removeChild(i.stateNode));break;case 18:Re!==null&&(mt?(e=Re,i=i.stateNode,e.nodeType===8?Sr(e.parentNode,i):e.nodeType===1&&Sr(e,i),rn(e)):Sr(Re,i.stateNode));break;case 4:a=Re,n=mt,Re=i.stateNode.containerInfo,mt=!0,Bt(e,t,i),Re=a,mt=n;break;case 0:case 11:case 14:case 15:if(!Ve&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){n=a=a.next;do{var l=n,r=l.destroy;l=l.tag,r!==void 0&&(l&2||l&4)&&As(i,t,r),n=n.next}while(n!==a)}Bt(e,t,i);break;case 1:if(!Ve&&(ta(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(s){we(i,t,s)}Bt(e,t,i);break;case 21:Bt(e,t,i);break;case 22:i.mode&1?(Ve=(a=Ve)||i.memoizedState!==null,Bt(e,t,i),Ve=a):Bt(e,t,i);break;default:Bt(e,t,i)}}function $h(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Fp),t.forEach(function(a){var n=i4.bind(null,e,a);i.has(a)||(i.add(a),a.then(n,n))})}}function dt(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var n=i[a];try{var l=e,r=t,s=r;e:for(;s!==null;){switch(s.tag){case 5:Re=s.stateNode,mt=!1;break e;case 3:Re=s.stateNode.containerInfo,mt=!0;break e;case 4:Re=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(Re===null)throw Error(P(160));jd(l,r,n),Re=null,mt=!1;var o=n.alternate;o!==null&&(o.return=null),n.return=null}catch(h){we(n,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Md(t,e),t=t.sibling}function Md(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),It(e),a&4){try{$a(3,e,e.return),Fl(3,e)}catch(w){we(e,e.return,w)}try{$a(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:dt(t,e),It(e),a&512&&i!==null&&ta(i,i.return);break;case 5:if(dt(t,e),It(e),a&512&&i!==null&&ta(i,i.return),e.flags&32){var n=e.stateNode;try{tn(n,"")}catch(w){we(e,e.return,w)}}if(a&4&&(n=e.stateNode,n!=null)){var l=e.memoizedProps,r=i!==null?i.memoizedProps:l,s=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&ac(n,l),qr(s,r);var h=qr(s,l);for(r=0;r<o.length;r+=2){var d=o[r],c=o[r+1];d==="style"?oc(n,c):d==="dangerouslySetInnerHTML"?rc(n,c):d==="children"?tn(n,c):Ws(n,d,c,h)}switch(s){case"input":Dr(n,l);break;case"textarea":nc(n,l);break;case"select":var f=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!l.multiple;var T=l.value;T!=null?aa(n,!!l.multiple,T,!1):f!==!!l.multiple&&(l.defaultValue!=null?aa(n,!!l.multiple,l.defaultValue,!0):aa(n,!!l.multiple,l.multiple?[]:"",!1))}n[cn]=l}catch(w){we(e,e.return,w)}}break;case 6:if(dt(t,e),It(e),a&4){if(e.stateNode===null)throw Error(P(162));n=e.stateNode,l=e.memoizedProps;try{n.nodeValue=l}catch(w){we(e,e.return,w)}}break;case 3:if(dt(t,e),It(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{rn(t.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:dt(t,e),It(e);break;case 13:dt(t,e),It(e),n=e.child,n.flags&8192&&(l=n.memoizedState!==null,n.stateNode.isHidden=l,!l||n.alternate!==null&&n.alternate.memoizedState!==null||(Io=Ae())),a&4&&$h(e);break;case 22:if(d=i!==null&&i.memoizedState!==null,e.mode&1?(Ve=(h=Ve)||d,dt(t,e),Ve=h):dt(t,e),It(e),a&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!d&&e.mode&1)for(k=e,d=e.child;d!==null;){for(c=k=d;k!==null;){switch(f=k,T=f.child,f.tag){case 0:case 11:case 14:case 15:$a(4,f,f.return);break;case 1:ta(f,f.return);var A=f.stateNode;if(typeof A.componentWillUnmount=="function"){a=f,i=f.return;try{t=a,A.props=t.memoizedProps,A.state=t.memoizedState,A.componentWillUnmount()}catch(w){we(a,i,w)}}break;case 5:ta(f,f.return);break;case 22:if(f.memoizedState!==null){Xh(c);continue}}T!==null?(T.return=f,k=T):Xh(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{n=c.stateNode,h?(l=n.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=c.stateNode,o=c.memoizedProps.style,r=o!=null&&o.hasOwnProperty("display")?o.display:null,s.style.display=sc("display",r))}catch(w){we(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=h?"":c.memoizedProps}catch(w){we(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:dt(t,e),It(e),a&4&&$h(e);break;case 21:break;default:dt(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(kd(i)){var a=i;break e}i=i.return}throw Error(P(160))}switch(a.tag){case 5:var n=a.stateNode;a.flags&32&&(tn(n,""),a.flags&=-33);var l=Qh(e);Es(e,l,n);break;case 3:case 4:var r=a.stateNode.containerInfo,s=Qh(e);Ss(e,s,r);break;default:throw Error(P(161))}}catch(o){we(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qp(e,t,i){k=e,Vd(e)}function Vd(e,t,i){for(var a=(e.mode&1)!==0;k!==null;){var n=k,l=n.child;if(n.tag===22&&a){var r=n.memoizedState!==null||Fn;if(!r){var s=n.alternate,o=s!==null&&s.memoizedState!==null||Ve;s=Fn;var h=Ve;if(Fn=r,(Ve=o)&&!h)for(k=n;k!==null;)r=k,o=r.child,r.tag===22&&r.memoizedState!==null?eu(n):o!==null?(o.return=r,k=o):eu(n);for(;l!==null;)k=l,Vd(l),l=l.sibling;k=n,Fn=s,Ve=h}Jh(e)}else n.subtreeFlags&8772&&l!==null?(l.return=n,k=l):Jh(e)}}function Jh(e){for(;k!==null;){var t=k;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Fl(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ve)if(i===null)a.componentDidMount();else{var n=t.elementType===t.type?i.memoizedProps:ft(t.type,i.memoizedProps);a.componentDidUpdate(n,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Vh(t,l,a);break;case 3:var r=t.updateQueue;if(r!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Vh(t,r,i)}break;case 5:var s=t.stateNode;if(i===null&&t.flags&4){i=s;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&i.focus();break;case"img":o.src&&(i.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var d=h.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&rn(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ve||t.flags&512&&Is(t)}catch(f){we(t,t.return,f)}}if(t===e){k=null;break}if(i=t.sibling,i!==null){i.return=t.return,k=i;break}k=t.return}}function Xh(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var i=t.sibling;if(i!==null){i.return=t.return,k=i;break}k=t.return}}function eu(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Fl(4,t)}catch(o){we(t,i,o)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var n=t.return;try{a.componentDidMount()}catch(o){we(t,n,o)}}var l=t.return;try{Is(t)}catch(o){we(t,l,o)}break;case 5:var r=t.return;try{Is(t)}catch(o){we(t,r,o)}}}catch(o){we(t,t.return,o)}if(t===e){k=null;break}var s=t.sibling;if(s!==null){s.return=t.return,k=s;break}k=t.return}}var Zp=Math.ceil,Pl=Kt.ReactCurrentDispatcher,wo=Kt.ReactCurrentOwner,st=Kt.ReactCurrentBatchConfig,J=0,Pe=null,Ee=null,Oe=0,$e=0,ia=di(0),xe=0,gn=null,Oi=0,Gl=0,Ao=0,Ja=null,Ye=null,Io=0,ya=1/0,Rt=null,Nl=!1,bs=null,ri=null,Gn=!1,Xt=null,Cl=0,Xa=0,xs=null,ll=-1,rl=0;function Ke(){return J&6?Ae():ll!==-1?ll:ll=Ae()}function si(e){return e.mode&1?J&2&&Oe!==0?Oe&-Oe:Op.transition!==null?(rl===0&&(rl=wc()),rl):(e=ie,e!==0||(e=window.event,e=e===void 0?16:vc(e.type)),e):1}function _t(e,t,i,a){if(50<Xa)throw Xa=0,xs=null,Error(P(185));An(e,i,a),(!(J&2)||e!==Pe)&&(e===Pe&&(!(J&2)&&(Gl|=i),xe===4&&$t(e,Oe)),Ze(e,a),i===1&&J===0&&!(t.mode&1)&&(ya=Ae()+500,Dl&&fi()))}function Ze(e,t){var i=e.callbackNode;Om(e,t);var a=fl(e,e===Pe?Oe:0);if(a===0)i!==null&&hh(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&hh(i),t===1)e.tag===0?Rp(tu.bind(null,e)):Fc(tu.bind(null,e)),vp(function(){!(J&6)&&fi()}),i=null;else{switch(Ac(a)){case 1:i=Gs;break;case 4:i=_c;break;case 16:i=dl;break;case 536870912:i=Tc;break;default:i=dl}i=Bd(i,Ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function Ld(e,t){if(ll=-1,rl=0,J&6)throw Error(P(327));var i=e.callbackNode;if(oa()&&e.callbackNode!==i)return null;var a=fl(e,e===Pe?Oe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=Rl(e,a);else{t=a;var n=J;J|=2;var l=Hd();(Pe!==e||Oe!==t)&&(Rt=null,ya=Ae()+500,vi(e,t));do try{Jp();break}catch(s){Ud(e,s)}while(!0);ro(),Pl.current=l,J=n,Ee!==null?t=0:(Pe=null,Oe=0,t=xe)}if(t!==0){if(t===2&&(n=Xr(e),n!==0&&(a=n,t=vs(e,n))),t===1)throw i=gn,vi(e,0),$t(e,a),Ze(e,Ae()),i;if(t===6)$t(e,a);else{if(n=e.current.alternate,!(a&30)&&!Qp(n)&&(t=Rl(e,a),t===2&&(l=Xr(e),l!==0&&(a=l,t=vs(e,l))),t===1))throw i=gn,vi(e,0),$t(e,a),Ze(e,Ae()),i;switch(e.finishedWork=n,e.finishedLanes=a,t){case 0:case 1:throw Error(P(345));case 2:wi(e,Ye,Rt);break;case 3:if($t(e,a),(a&130023424)===a&&(t=Io+500-Ae(),10<t)){if(fl(e,0)!==0)break;if(n=e.suspendedLanes,(n&a)!==a){Ke(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=ss(wi.bind(null,e,Ye,Rt),t);break}wi(e,Ye,Rt);break;case 4:if($t(e,a),(a&4194240)===a)break;for(t=e.eventTimes,n=-1;0<a;){var r=31-gt(a);l=1<<r,r=t[r],r>n&&(n=r),a&=~l}if(a=n,a=Ae()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Zp(a/1960))-a,10<a){e.timeoutHandle=ss(wi.bind(null,e,Ye,Rt),a);break}wi(e,Ye,Rt);break;case 5:wi(e,Ye,Rt);break;default:throw Error(P(329))}}}return Ze(e,Ae()),e.callbackNode===i?Ld.bind(null,e):null}function vs(e,t){var i=Ja;return e.current.memoizedState.isDehydrated&&(vi(e,t).flags|=256),e=Rl(e,t),e!==2&&(t=Ye,Ye=i,t!==null&&Ps(t)),e}function Ps(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var n=i[a],l=n.getSnapshot;n=n.value;try{if(!Tt(l(),n))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~Ao,t&=~Gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-gt(t),a=1<<i;e[i]=-1,t&=~a}}function tu(e){if(J&6)throw Error(P(327));oa();var t=fl(e,0);if(!(t&1))return Ze(e,Ae()),null;var i=Rl(e,t);if(e.tag!==0&&i===2){var a=Xr(e);a!==0&&(t=a,i=vs(e,a))}if(i===1)throw i=gn,vi(e,0),$t(e,t),Ze(e,Ae()),i;if(i===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wi(e,Ye,Rt),Ze(e,Ae()),null}function So(e,t){var i=J;J|=1;try{return e(t)}finally{J=i,J===0&&(ya=Ae()+500,Dl&&fi())}}function ki(e){Xt!==null&&Xt.tag===0&&!(J&6)&&oa();var t=J;J|=1;var i=st.transition,a=ie;try{if(st.transition=null,ie=1,e)return e()}finally{ie=a,st.transition=i,J=t,!(J&6)&&fi()}}function Eo(){$e=ia.current,ue(ia)}function vi(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,xp(i)),Ee!==null)for(i=Ee.return;i!==null;){var a=i;switch(ao(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&_l();break;case 3:ma(),ue(Ge),ue(Le),fo();break;case 5:co(a);break;case 4:ma();break;case 13:ue(pe);break;case 19:ue(pe);break;case 10:so(a.type._context);break;case 22:case 23:Eo()}i=i.return}if(Pe=e,Ee=e=oi(e.current,null),Oe=$e=t,xe=0,gn=null,Ao=Gl=Oi=0,Ye=Ja=null,Ei!==null){for(t=0;t<Ei.length;t++)if(i=Ei[t],a=i.interleaved,a!==null){i.interleaved=null;var n=a.next,l=i.pending;if(l!==null){var r=l.next;l.next=n,a.next=r}i.pending=a}Ei=null}return e}function Ud(e,t){do{var i=Ee;try{if(ro(),il.current=vl,xl){for(var a=ye.memoizedState;a!==null;){var n=a.queue;n!==null&&(n.pending=null),a=a.next}xl=!1}if(Ri=0,ve=be=ye=null,Qa=!1,mn=0,wo.current=null,i===null||i.return===null){xe=1,gn=t,Ee=null;break}e:{var l=e,r=i.return,s=i,o=t;if(t=Oe,s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var h=o,d=s,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var T=Wh(r);if(T!==null){T.flags&=-257,Dh(T,r,s,l,t),T.mode&1&&Kh(l,h,t),t=T,o=h;var A=t.updateQueue;if(A===null){var w=new Set;w.add(o),t.updateQueue=w}else A.add(o);break e}else{if(!(t&1)){Kh(l,h,t),bo();break e}o=Error(P(426))}}else if(fe&&s.mode&1){var b=Wh(r);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Dh(b,r,s,l,t),no(pa(o,s));break e}}l=o=pa(o,s),xe!==4&&(xe=2),Ja===null?Ja=[l]:Ja.push(l),l=r;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=Ad(l,o,t);Mh(l,m);break e;case 1:s=o;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ri===null||!ri.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=Id(l,s,t);Mh(l,S);break e}}l=l.return}while(l!==null)}Kd(i)}catch(N){t=N,Ee===i&&i!==null&&(Ee=i=i.return);continue}break}while(!0)}function Hd(){var e=Pl.current;return Pl.current=vl,e===null?vl:e}function bo(){(xe===0||xe===3||xe===2)&&(xe=4),Pe===null||!(Oi&268435455)&&!(Gl&268435455)||$t(Pe,Oe)}function Rl(e,t){var i=J;J|=2;var a=Hd();(Pe!==e||Oe!==t)&&(Rt=null,vi(e,t));do try{$p();break}catch(n){Ud(e,n)}while(!0);if(ro(),J=i,Pl.current=a,Ee!==null)throw Error(P(261));return Pe=null,Oe=0,xe}function $p(){for(;Ee!==null;)zd(Ee)}function Jp(){for(;Ee!==null&&!Sm();)zd(Ee)}function zd(e){var t=Dd(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Kd(e):Ee=t,wo.current=null}function Kd(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=Yp(i,t),i!==null){i.flags&=32767,Ee=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,Ee=null;return}}else if(i=Bp(i,t,$e),i!==null){Ee=i;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);xe===0&&(xe=5)}function wi(e,t,i){var a=ie,n=st.transition;try{st.transition=null,ie=1,Xp(e,t,i,a)}finally{st.transition=n,ie=a}return null}function Xp(e,t,i,a){do oa();while(Xt!==null);if(J&6)throw Error(P(327));i=e.finishedWork;var n=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=i.lanes|i.childLanes;if(km(e,l),e===Pe&&(Ee=Pe=null,Oe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Gn||(Gn=!0,Bd(dl,function(){return oa(),null})),l=(i.flags&15990)!==0,i.subtreeFlags&15990||l){l=st.transition,st.transition=null;var r=ie;ie=1;var s=J;J|=4,wo.current=null,Gp(e,i),Md(i,e),Tp(ls),ml=!!ns,ls=ns=null,e.current=i,qp(i),Em(),J=s,ie=r,st.transition=l}else e.current=i;if(Gn&&(Gn=!1,Xt=e,Cl=n),l=e.pendingLanes,l===0&&(ri=null),vm(i.stateNode),Ze(e,Ae()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)n=t[i],a(n.value,{componentStack:n.stack,digest:n.digest});if(Nl)throw Nl=!1,e=bs,bs=null,e;return Cl&1&&e.tag!==0&&oa(),l=e.pendingLanes,l&1?e===xs?Xa++:(Xa=0,xs=e):Xa=0,fi(),null}function oa(){if(Xt!==null){var e=Ac(Cl),t=st.transition,i=ie;try{if(st.transition=null,ie=16>e?16:e,Xt===null)var a=!1;else{if(e=Xt,Xt=null,Cl=0,J&6)throw Error(P(331));var n=J;for(J|=4,k=e.current;k!==null;){var l=k,r=l.child;if(k.flags&16){var s=l.deletions;if(s!==null){for(var o=0;o<s.length;o++){var h=s[o];for(k=h;k!==null;){var d=k;switch(d.tag){case 0:case 11:case 15:$a(8,d,l)}var c=d.child;if(c!==null)c.return=d,k=c;else for(;k!==null;){d=k;var f=d.sibling,T=d.return;if(Od(d),d===h){k=null;break}if(f!==null){f.return=T,k=f;break}k=T}}}var A=l.alternate;if(A!==null){var w=A.child;if(w!==null){A.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}k=l}}if(l.subtreeFlags&2064&&r!==null)r.return=l,k=r;else e:for(;k!==null;){if(l=k,l.flags&2048)switch(l.tag){case 0:case 11:case 15:$a(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,k=m;break e}k=l.return}}var u=e.current;for(k=u;k!==null;){r=k;var p=r.child;if(r.subtreeFlags&2064&&p!==null)p.return=r,k=p;else e:for(r=u;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Fl(9,s)}}catch(N){we(s,s.return,N)}if(s===r){k=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,k=S;break e}k=s.return}}if(J=n,fi(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Ul,e)}catch{}a=!0}return a}finally{ie=i,st.transition=t}}return!1}function iu(e,t,i){t=pa(i,t),t=Ad(e,t,1),e=li(e,t,1),t=Ke(),e!==null&&(An(e,1,t),Ze(e,t))}function we(e,t,i){if(e.tag===3)iu(e,e,i);else for(;t!==null;){if(t.tag===3){iu(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ri===null||!ri.has(a))){e=pa(i,e),e=Id(t,e,1),t=li(t,e,1),e=Ke(),t!==null&&(An(t,1,e),Ze(t,e));break}}t=t.return}}function e4(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&i,Pe===e&&(Oe&i)===i&&(xe===4||xe===3&&(Oe&130023424)===Oe&&500>Ae()-Io?vi(e,0):Ao|=i),Ze(e,t)}function Wd(e,t){t===0&&(e.mode&1?(t=Ln,Ln<<=1,!(Ln&130023424)&&(Ln=4194304)):t=1);var i=Ke();e=Ht(e,t),e!==null&&(An(e,t,i),Ze(e,i))}function t4(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Wd(e,i)}function i4(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,n=e.memoizedState;n!==null&&(i=n.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(P(314))}a!==null&&a.delete(t),Wd(e,i)}var Dd;Dd=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Fe=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return Fe=!1,Dp(e,t,i);Fe=!!(e.flags&131072)}else Fe=!1,fe&&t.flags&1048576&&Gc(t,Al,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;nl(e,t),e=t.pendingProps;var n=ca(t,Le.current);sa(t,i),n=po(null,t,a,e,n,i);var l=yo();return t.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(a)?(l=!0,Tl(t)):l=!1,t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,ho(t),n.updater=Yl,t.stateNode=n,n._reactInternals=t,ms(t,a,e,i),t=gs(null,t,a,!0,l,i)):(t.tag=0,fe&&l&&io(t),ze(null,t,n,i),t=t.child),t;case 16:a=t.elementType;e:{switch(nl(e,t),e=t.pendingProps,n=a._init,a=n(a._payload),t.type=a,n=t.tag=n4(a),e=ft(a,e),n){case 0:t=ys(null,t,a,e,i);break e;case 1:t=Fh(null,t,a,e,i);break e;case 11:t=Bh(null,t,a,e,i);break e;case 14:t=Yh(null,t,a,ft(a.type,e),i);break e}throw Error(P(306,a,""))}return t;case 0:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:ft(a,n),ys(e,t,a,n,i);case 1:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:ft(a,n),Fh(e,t,a,n,i);case 3:e:{if(xd(t),e===null)throw Error(P(387));a=t.pendingProps,l=t.memoizedState,n=l.element,Xc(e,t),El(t,a,null,i);var r=t.memoizedState;if(a=r.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){n=pa(Error(P(423)),t),t=Gh(e,t,a,i,n);break e}else if(a!==n){n=pa(Error(P(424)),t),t=Gh(e,t,a,i,n);break e}else for(Xe=ni(t.stateNode.containerInfo.firstChild),et=t,fe=!0,yt=null,i=$c(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(da(),a===n){t=zt(e,t,i);break e}ze(e,t,a,i)}t=t.child}return t;case 5:return ed(t),e===null&&cs(t),a=t.type,n=t.pendingProps,l=e!==null?e.memoizedProps:null,r=n.children,rs(a,n)?r=null:l!==null&&rs(a,l)&&(t.flags|=32),bd(e,t),ze(e,t,r,i),t.child;case 6:return e===null&&cs(t),null;case 13:return vd(e,t,i);case 4:return uo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=fa(t,null,a,i):ze(e,t,a,i),t.child;case 11:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:ft(a,n),Bh(e,t,a,n,i);case 7:return ze(e,t,t.pendingProps,i),t.child;case 8:return ze(e,t,t.pendingProps.children,i),t.child;case 12:return ze(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,n=t.pendingProps,l=t.memoizedProps,r=n.value,le(Il,a._currentValue),a._currentValue=r,l!==null)if(Tt(l.value,r)){if(l.children===n.children&&!Ge.current){t=zt(e,t,i);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){r=l.child;for(var o=s.firstContext;o!==null;){if(o.context===a){if(l.tag===1){o=Mt(-1,i&-i),o.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var d=h.pending;d===null?o.next=o:(o.next=d.next,d.next=o),h.pending=o}}l.lanes|=i,o=l.alternate,o!==null&&(o.lanes|=i),ds(l.return,i,t),s.lanes|=i;break}o=o.next}}else if(l.tag===10)r=l.type===t.type?null:l.child;else if(l.tag===18){if(r=l.return,r===null)throw Error(P(341));r.lanes|=i,s=r.alternate,s!==null&&(s.lanes|=i),ds(r,i,t),r=l.sibling}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===t){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}ze(e,t,n.children,i),t=t.child}return t;case 9:return n=t.type,a=t.pendingProps.children,sa(t,i),n=ot(n),a=a(n),t.flags|=1,ze(e,t,a,i),t.child;case 14:return a=t.type,n=ft(a,t.pendingProps),n=ft(a.type,n),Yh(e,t,a,n,i);case 15:return Sd(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,n=t.pendingProps,n=t.elementType===a?n:ft(a,n),nl(e,t),t.tag=1,qe(a)?(e=!0,Tl(t)):e=!1,sa(t,i),wd(t,a,n),ms(t,a,n,i),gs(null,t,a,!0,e,i);case 19:return Pd(e,t,i);case 22:return Ed(e,t,i)}throw Error(P(156,t.tag))};function Bd(e,t){return gc(e,t)}function a4(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,i,a){return new a4(e,t,i,a)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function n4(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bs)return 11;if(e===Ys)return 14}return 2}function oi(e,t){var i=e.alternate;return i===null?(i=rt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function sl(e,t,i,a,n,l){var r=2;if(a=e,typeof e=="function")xo(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Fi:return Pi(i.children,n,l,t);case Ds:r=8,n|=8;break;case Ur:return e=rt(12,i,t,n|2),e.elementType=Ur,e.lanes=l,e;case Hr:return e=rt(13,i,t,n),e.elementType=Hr,e.lanes=l,e;case zr:return e=rt(19,i,t,n),e.elementType=zr,e.lanes=l,e;case ec:return ql(i,n,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ju:r=10;break e;case Xu:r=9;break e;case Bs:r=11;break e;case Ys:r=14;break e;case qt:r=16,a=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=rt(r,i,t,n),t.elementType=e,t.type=a,t.lanes=l,t}function Pi(e,t,i,a){return e=rt(7,e,a,t),e.lanes=i,e}function ql(e,t,i,a){return e=rt(22,e,a,t),e.elementType=ec,e.lanes=i,e.stateNode={isHidden:!1},e}function Rr(e,t,i){return e=rt(6,e,null,t),e.lanes=i,e}function Or(e,t,i){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l4(e,t,i,a,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dr(0),this.expirationTimes=dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dr(0),this.identifierPrefix=a,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function vo(e,t,i,a,n,l,r,s,o){return e=new l4(e,t,i,s,o),t===1?(t=1,l===!0&&(t|=8)):t=0,l=rt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ho(l),e}function r4(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function Yd(e){if(!e)return ui;e=e._reactInternals;e:{if(Vi(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var i=e.type;if(qe(i))return Yc(e,i,t)}return t}function Fd(e,t,i,a,n,l,r,s,o){return e=vo(i,a,!0,e,n,l,r,s,o),e.context=Yd(null),i=e.current,a=Ke(),n=si(i),l=Mt(a,n),l.callback=t??null,li(i,l,n),e.current.lanes=n,An(e,n,a),Ze(e,a),e}function Zl(e,t,i,a){var n=t.current,l=Ke(),r=si(n);return i=Yd(i),t.context===null?t.context=i:t.pendingContext=i,t=Mt(l,r),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=li(n,t,r),e!==null&&(_t(e,n,r,l),tl(e,n,r)),r}function Ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function au(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Po(e,t){au(e,t),(e=e.alternate)&&au(e,t)}function s4(){return null}var Gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function No(e){this._internalRoot=e}Ql.prototype.render=No.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Zl(e,t,null,null)};Ql.prototype.unmount=No.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ki(function(){Zl(null,e,null,null)}),t[Ut]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ec();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Qt.length&&t!==0&&t<Qt[i].priority;i++);Qt.splice(i,0,e),i===0&&xc(e)}};function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nu(){}function o4(e,t,i,a,n){if(n){if(typeof a=="function"){var l=a;a=function(){var h=Ol(r);l.call(h)}}var r=Fd(t,a,e,0,null,!1,!1,"",nu);return e._reactRootContainer=r,e[Ut]=r.current,hn(e.nodeType===8?e.parentNode:e),ki(),r}for(;n=e.lastChild;)e.removeChild(n);if(typeof a=="function"){var s=a;a=function(){var h=Ol(o);s.call(h)}}var o=vo(e,0,!1,null,null,!1,!1,"",nu);return e._reactRootContainer=o,e[Ut]=o.current,hn(e.nodeType===8?e.parentNode:e),ki(function(){Zl(t,o,i,a)}),o}function Jl(e,t,i,a,n){var l=i._reactRootContainer;if(l){var r=l;if(typeof n=="function"){var s=n;n=function(){var o=Ol(r);s.call(o)}}Zl(t,r,e,n)}else r=o4(i,t,e,n,a);return Ol(r)}Ic=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Wa(t.pendingLanes);i!==0&&(qs(t,i|1),Ze(t,Ae()),!(J&6)&&(ya=Ae()+500,fi()))}break;case 13:ki(function(){var a=Ht(e,1);if(a!==null){var n=Ke();_t(a,e,1,n)}}),Po(e,1)}};Zs=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var i=Ke();_t(t,e,134217728,i)}Po(e,134217728)}};Sc=function(e){if(e.tag===13){var t=si(e),i=Ht(e,t);if(i!==null){var a=Ke();_t(i,e,t,a)}Po(e,t)}};Ec=function(){return ie};bc=function(e,t){var i=ie;try{return ie=e,t()}finally{ie=i}};Qr=function(e,t,i){switch(t){case"input":if(Dr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var n=Wl(a);if(!n)throw Error(P(90));ic(a),Dr(a,n)}}}break;case"textarea":nc(e,i);break;case"select":t=i.value,t!=null&&aa(e,!!i.multiple,t,!1)}};cc=So;dc=ki;var h4={usingClientEntryPoint:!1,Events:[Sn,Qi,Wl,hc,uc,So]},ja={findFiberByHostInstance:Si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u4={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pc(e),e===null?null:e.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||s4,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qn.isDisabled&&qn.supportsFiber)try{Ul=qn.inject(u4),bt=qn}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h4;it.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Co(t))throw Error(P(200));return r4(e,t,null,i)};it.createRoot=function(e,t){if(!Co(e))throw Error(P(299));var i=!1,a="",n=Gd;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(n=t.onRecoverableError)),t=vo(e,1,!1,null,null,i,!1,a,n),e[Ut]=t.current,hn(e.nodeType===8?e.parentNode:e),new No(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=pc(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return ki(e)};it.hydrate=function(e,t,i){if(!$l(t))throw Error(P(200));return Jl(null,e,t,!0,i)};it.hydrateRoot=function(e,t,i){if(!Co(e))throw Error(P(405));var a=i!=null&&i.hydratedSources||null,n=!1,l="",r=Gd;if(i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(r=i.onRecoverableError)),t=Fd(t,null,e,1,i??null,n,!1,l,r),e[Ut]=t.current,hn(e),a)for(e=0;e<a.length;e++)i=a[e],n=i._getVersion,n=n(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,n]:t.mutableSourceEagerHydrationData.push(i,n);return new Ql(t)};it.render=function(e,t,i){if(!$l(t))throw Error(P(200));return Jl(null,e,t,!1,i)};it.unmountComponentAtNode=function(e){if(!$l(e))throw Error(P(40));return e._reactRootContainer?(ki(function(){Jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};it.unstable_batchedUpdates=So;it.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!$l(i))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Jl(e,t,i,!1,a)};it.version="18.3.1-next-f1338f8080-20240426";function qd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qd)}catch(e){console.error(e)}}qd(),qu.exports=it;var Ro=qu.exports;const c4=Mu(Ro),d4=ju({__proto__:null,default:c4},[Ro]);var Zd,lu=Ro;Zd=lu.createRoot,lu.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},de.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const ru="popstate";function f4(e){e===void 0&&(e={});function t(a,n){let{pathname:l,search:r,hash:s}=a.location;return _n("",{pathname:l,search:r,hash:s},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function i(a,n){return typeof n=="string"?n:ji(n)}return p4(t,i,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ga(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m4(){return Math.random().toString(36).substr(2,8)}function su(e,t){return{usr:e.state,key:e.key,idx:t}}function _n(e,t,i,a){return i===void 0&&(i=null),de({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mi(t):t,{state:i,key:t&&t.key||a||m4()})}function ji(e){let{pathname:t="/",search:i="",hash:a=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function mi(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function p4(e,t,i,a){a===void 0&&(a={});let{window:n=document.defaultView,v5Compat:l=!1}=a,r=n.history,s=Se.Pop,o=null,h=d();h==null&&(h=0,r.replaceState(de({},r.state,{idx:h}),""));function d(){return(r.state||{idx:null}).idx}function c(){s=Se.Pop;let b=d(),m=b==null?null:b-h;h=b,o&&o({action:s,location:w.location,delta:m})}function f(b,m){s=Se.Push;let u=_n(w.location,b,m);h=d()+1;let p=su(u,h),S=w.createHref(u);try{r.pushState(p,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;n.location.assign(S)}l&&o&&o({action:s,location:w.location,delta:1})}function T(b,m){s=Se.Replace;let u=_n(w.location,b,m);h=d();let p=su(u,h),S=w.createHref(u);r.replaceState(p,"",S),l&&o&&o({action:s,location:w.location,delta:0})}function A(b){let m=n.location.origin!=="null"?n.location.origin:n.location.href,u=typeof b=="string"?b:ji(b);return u=u.replace(/ $/,"%20"),q(m,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,m)}let w={get action(){return s},get location(){return e(n,r)},listen(b){if(o)throw new Error("A history only accepts one active listener");return n.addEventListener(ru,c),o=b,()=>{n.removeEventListener(ru,c),o=null}},createHref(b){return t(n,b)},createURL:A,encodeLocation(b){let m=A(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:T,go(b){return r.go(b)}};return w}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const y4=new Set(["lazy","caseSensitive","path","id","index","children"]);function g4(e){return e.index===!0}function kl(e,t,i,a){return i===void 0&&(i=[]),a===void 0&&(a={}),e.map((n,l)=>{let r=[...i,String(l)],s=typeof n.id=="string"?n.id:r.join("-");if(q(n.index!==!0||!n.children,"Cannot specify children on an index route"),q(!a[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),g4(n)){let o=de({},n,t(n),{id:s});return a[s]=o,o}else{let o=de({},n,t(n),{id:s,children:void 0});return a[s]=o,n.children&&(o.children=kl(n.children,t,r,a)),o}})}function Ai(e,t,i){return i===void 0&&(i="/"),ol(e,t,i,!1)}function ol(e,t,i,a){let n=typeof t=="string"?mi(t):t,l=Aa(n.pathname||"/",i);if(l==null)return null;let r=Qd(e);T4(r);let s=null;for(let o=0;s==null&&o<r.length;++o){let h=C4(l);s=P4(r[o],h,a)}return s}function _4(e,t){let{route:i,pathname:a,params:n}=e;return{id:i.id,pathname:a,params:n,data:t[i.id],handle:i.handle}}function Qd(e,t,i,a){t===void 0&&(t=[]),i===void 0&&(i=[]),a===void 0&&(a="");let n=(l,r,s)=>{let o={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:r,route:l};o.relativePath.startsWith("/")&&(q(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(a.length));let h=Vt([a,o.relativePath]),d=i.concat(o);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Qd(l.children,t,d,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:x4(h,l.index),routesMeta:d})};return e.forEach((l,r)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))n(l,r);else for(let o of $d(l.path))n(l,r,o)}),t}function $d(e){let t=e.split("/");if(t.length===0)return[];let[i,...a]=t,n=i.endsWith("?"),l=i.replace(/\?$/,"");if(a.length===0)return n?[l,""]:[l];let r=$d(a.join("/")),s=[];return s.push(...r.map(o=>o===""?l:[l,o].join("/"))),n&&s.push(...r),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function T4(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:v4(t.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}const w4=/^:[\w-]+$/,A4=3,I4=2,S4=1,E4=10,b4=-2,ou=e=>e==="*";function x4(e,t){let i=e.split("/"),a=i.length;return i.some(ou)&&(a+=b4),t&&(a+=I4),i.filter(n=>!ou(n)).reduce((n,l)=>n+(w4.test(l)?A4:l===""?S4:E4),a)}function v4(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function P4(e,t,i){i===void 0&&(i=!1);let{routesMeta:a}=e,n={},l="/",r=[];for(let s=0;s<a.length;++s){let o=a[s],h=s===a.length-1,d=l==="/"?t:t.slice(l.length)||"/",c=hu({path:o.relativePath,caseSensitive:o.caseSensitive,end:h},d),f=o.route;if(!c&&h&&i&&!a[a.length-1].route.index&&(c=hu({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},d)),!c)return null;Object.assign(n,c.params),r.push({params:n,pathname:Vt([l,c.pathname]),pathnameBase:k4(Vt([l,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(l=Vt([l,c.pathnameBase]))}return r}function hu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,a]=N4(e.path,e.caseSensitive,e.end),n=t.match(i);if(!n)return null;let l=n[0],r=l.replace(/(.)\/+$/,"$1"),s=n.slice(1);return{params:a.reduce((h,d,c)=>{let{paramName:f,isOptional:T}=d;if(f==="*"){let w=s[c]||"";r=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const A=s[c];return T&&!A?h[f]=void 0:h[f]=(A||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:r,pattern:e}}function N4(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),ga(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,s,o)=>(a.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function C4(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ga(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Aa(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,a=e.charAt(i);return a&&a!=="/"?null:e.slice(i)||"/"}function R4(e,t){t===void 0&&(t="/");let{pathname:i,search:a="",hash:n=""}=typeof e=="string"?mi(e):e;return{pathname:i?i.startsWith("/")?i:O4(i,t):t,search:j4(a),hash:M4(n)}}function O4(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?i.length>1&&i.pop():n!=="."&&i.push(n)}),i.length>1?i.join("/"):"/"}function kr(e,t,i,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jd(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Oo(e,t){let i=Jd(e);return t?i.map((a,n)=>n===i.length-1?a.pathname:a.pathnameBase):i.map(a=>a.pathnameBase)}function ko(e,t,i,a){a===void 0&&(a=!1);let n;typeof e=="string"?n=mi(e):(n=de({},e),q(!n.pathname||!n.pathname.includes("?"),kr("?","pathname","search",n)),q(!n.pathname||!n.pathname.includes("#"),kr("#","pathname","hash",n)),q(!n.search||!n.search.includes("#"),kr("#","search","hash",n)));let l=e===""||n.pathname==="",r=l?"/":n.pathname,s;if(r==null)s=i;else{let c=t.length-1;if(!a&&r.startsWith("..")){let f=r.split("/");for(;f[0]==="..";)f.shift(),c-=1;n.pathname=f.join("/")}s=c>=0?t[c]:"/"}let o=R4(n,s),h=r&&r!=="/"&&r.endsWith("/"),d=(l||r===".")&&i.endsWith("/");return!o.pathname.endsWith("/")&&(h||d)&&(o.pathname+="/"),o}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),k4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,M4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class jl{constructor(t,i,a,n){n===void 0&&(n=!1),this.status=t,this.statusText=i||"",this.internal=n,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}}function Xl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xd=["post","put","patch","delete"],V4=new Set(Xd),L4=["get",...Xd],U4=new Set(L4),H4=new Set([301,302,303,307,308]),z4=new Set([307,308]),jr={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},K4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ma={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},jo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W4=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),ef="remix-router-transitions";function D4(e){const t=e.window?e.window:typeof window<"u"?window:void 0,i=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",a=!i;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n;if(e.mapRouteProperties)n=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;n=_=>({hasErrorBoundary:y(_)})}else n=W4;let l={},r=kl(e.routes,n,void 0,l),s,o=e.basename||"/",h=e.dataStrategy||G4,d=e.patchRoutesOnNavigation,c=de({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,T=new Set,A=null,w=null,b=null,m=e.hydrationData!=null,u=Ai(r,e.history.location,o),p=null;if(u==null&&!d){let y=Be(404,{pathname:e.history.location.pathname}),{matches:_,route:I}=wu(r);u=_,p={[I.id]:y}}u&&!e.hydrationData&&Pn(u,r,e.history.location.pathname).active&&(u=null);let S;if(u)if(u.some(y=>y.route.lazy))S=!1;else if(!u.some(y=>y.route.loader))S=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,_=e.hydrationData?e.hydrationData.errors:null;if(_){let I=u.findIndex(x=>_[x.route.id]!==void 0);S=u.slice(0,I+1).every(x=>!Cs(x.route,y,_))}else S=u.every(I=>!Cs(I.route,y,_))}else S=e.hydrationData!=null;else if(S=!1,u=[],c.v7_partialHydration){let y=Pn(null,r,e.history.location.pathname);y.active&&y.matches&&(u=y.matches)}let N,g={historyAction:e.history.action,location:e.history.location,matches:u,initialized:S,navigation:jr,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},C=Se.Pop,v=!1,H,j=!1,X=new Map,D=null,me=!1,re=!1,ut=[],Qe=new Set,ce=new Map,O=0,W=-1,B=new Map,F=new Set,se=new Map,wt=new Map,Ne=new Set,ct=new Map,Ue=new Map,vt;function If(){if(f=e.history.listen(y=>{let{action:_,location:I,delta:x}=y;if(vt){vt(),vt=void 0;return}ga(Ue.size===0||x!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Go({currentLocation:g.location,nextLocation:I,historyAction:_});if(M&&x!=null){let z=new Promise(Y=>{vt=Y});e.history.go(x*-1),vn(M,{state:"blocked",location:I,proceed(){vn(M,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),z.then(()=>e.history.go(x))},reset(){let Y=new Map(g.blockers);Y.set(M,Ma),He({blockers:Y})}});return}return yi(_,I)}),i){s8(t,X);let y=()=>o8(t,X);t.addEventListener("pagehide",y),D=()=>t.removeEventListener("pagehide",y)}return g.initialized||yi(Se.Pop,g.location,{initialHydration:!0}),N}function Sf(){f&&f(),D&&D(),T.clear(),H&&H.abort(),g.fetchers.forEach((y,_)=>xn(_)),g.blockers.forEach((y,_)=>Fo(_))}function Ef(y){return T.add(y),()=>T.delete(y)}function He(y,_){_===void 0&&(_={}),g=de({},g,y);let I=[],x=[];c.v7_fetcherPersist&&g.fetchers.forEach((M,z)=>{M.state==="idle"&&(Ne.has(z)?x.push(z):I.push(z))}),[...T].forEach(M=>M(g,{deletedFetchers:x,viewTransitionOpts:_.viewTransitionOpts,flushSync:_.flushSync===!0})),c.v7_fetcherPersist&&(I.forEach(M=>g.fetchers.delete(M)),x.forEach(M=>xn(M)))}function Ui(y,_,I){var x,M;let{flushSync:z}=I===void 0?{}:I,Y=g.actionData!=null&&g.navigation.formMethod!=null&&pt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((x=y.state)==null?void 0:x._isRedirect)!==!0,L;_.actionData?Object.keys(_.actionData).length>0?L=_.actionData:L=null:Y?L=g.actionData:L=null;let U=_.loaderData?_u(g.loaderData,_.loaderData,_.matches||[],_.errors):g.loaderData,V=g.blockers;V.size>0&&(V=new Map(V),V.forEach(($,Ce)=>V.set(Ce,Ma)));let K=v===!0||g.navigation.formMethod!=null&&pt(g.navigation.formMethod)&&((M=y.state)==null?void 0:M._isRedirect)!==!0;s&&(r=s,s=void 0),me||C===Se.Pop||(C===Se.Push?e.history.push(y,y.state):C===Se.Replace&&e.history.replace(y,y.state));let Q;if(C===Se.Pop){let $=X.get(g.location.pathname);$&&$.has(y.pathname)?Q={currentLocation:g.location,nextLocation:y}:X.has(y.pathname)&&(Q={currentLocation:y,nextLocation:g.location})}else if(j){let $=X.get(g.location.pathname);$?$.add(y.pathname):($=new Set([y.pathname]),X.set(g.location.pathname,$)),Q={currentLocation:g.location,nextLocation:y}}He(de({},_,{actionData:L,loaderData:U,historyAction:C,location:y,initialized:!0,navigation:jr,revalidation:"idle",restoreScrollPosition:Zo(y,_.matches||g.matches),preventScrollReset:K,blockers:V}),{viewTransitionOpts:Q,flushSync:z===!0}),C=Se.Pop,v=!1,j=!1,me=!1,re=!1,ut=[]}async function Ho(y,_){if(typeof y=="number"){e.history.go(y);return}let I=Ns(g.location,g.matches,o,c.v7_prependBasename,y,c.v7_relativeSplatPath,_==null?void 0:_.fromRouteId,_==null?void 0:_.relative),{path:x,submission:M,error:z}=uu(c.v7_normalizeFormMethod,!1,I,_),Y=g.location,L=_n(g.location,x,_&&_.state);L=de({},L,e.history.encodeLocation(L));let U=_&&_.replace!=null?_.replace:void 0,V=Se.Push;U===!0?V=Se.Replace:U===!1||M!=null&&pt(M.formMethod)&&M.formAction===g.location.pathname+g.location.search&&(V=Se.Replace);let K=_&&"preventScrollReset"in _?_.preventScrollReset===!0:void 0,Q=(_&&_.flushSync)===!0,$=Go({currentLocation:Y,nextLocation:L,historyAction:V});if($){vn($,{state:"blocked",location:L,proceed(){vn($,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),Ho(y,_)},reset(){let Ce=new Map(g.blockers);Ce.set($,Ma),He({blockers:Ce})}});return}return await yi(V,L,{submission:M,pendingError:z,preventScrollReset:K,replace:_&&_.replace,enableViewTransition:_&&_.viewTransition,flushSync:Q})}function bf(){if(ar(),He({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){yi(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}yi(C||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:j===!0})}}async function yi(y,_,I){H&&H.abort(),H=null,C=y,me=(I&&I.startUninterruptedRevalidation)===!0,Mf(g.location,g.matches),v=(I&&I.preventScrollReset)===!0,j=(I&&I.enableViewTransition)===!0;let x=s||r,M=I&&I.overrideNavigation,z=Ai(x,_,o),Y=(I&&I.flushSync)===!0,L=Pn(z,x,_.pathname);if(L.active&&L.matches&&(z=L.matches),!z){let{error:ne,notFoundMatches:te,route:_e}=nr(_.pathname);Ui(_,{matches:te,loaderData:{},errors:{[_e.id]:ne}},{flushSync:Y});return}if(g.initialized&&!re&&X4(g.location,_)&&!(I&&I.submission&&pt(I.submission.formMethod))){Ui(_,{matches:z},{flushSync:Y});return}H=new AbortController;let U=Di(e.history,_,H.signal,I&&I.submission),V;if(I&&I.pendingError)V=[Ii(z).route.id,{type:ae.error,error:I.pendingError}];else if(I&&I.submission&&pt(I.submission.formMethod)){let ne=await xf(U,_,I.submission,z,L.active,{replace:I.replace,flushSync:Y});if(ne.shortCircuited)return;if(ne.pendingActionResult){let[te,_e]=ne.pendingActionResult;if(Je(_e)&&Xl(_e.error)&&_e.error.status===404){H=null,Ui(_,{matches:ne.matches,loaderData:{},errors:{[te]:_e.error}});return}}z=ne.matches||z,V=ne.pendingActionResult,M=Mr(_,I.submission),Y=!1,L.active=!1,U=Di(e.history,U.url,U.signal)}let{shortCircuited:K,matches:Q,loaderData:$,errors:Ce}=await vf(U,_,z,L.active,M,I&&I.submission,I&&I.fetcherSubmission,I&&I.replace,I&&I.initialHydration===!0,Y,V);K||(H=null,Ui(_,de({matches:Q||z},Tu(V),{loaderData:$,errors:Ce})))}async function xf(y,_,I,x,M,z){z===void 0&&(z={}),ar();let Y=l8(_,I);if(He({navigation:Y},{flushSync:z.flushSync===!0}),M){let V=await Nn(x,_.pathname,y.signal);if(V.type==="aborted")return{shortCircuited:!0};if(V.type==="error"){let K=Ii(V.partialMatches).route.id;return{matches:V.partialMatches,pendingActionResult:[K,{type:ae.error,error:V.error}]}}else if(V.matches)x=V.matches;else{let{notFoundMatches:K,error:Q,route:$}=nr(_.pathname);return{matches:K,pendingActionResult:[$.id,{type:ae.error,error:Q}]}}}let L,U=Ba(x,_);if(!U.route.action&&!U.route.lazy)L={type:ae.error,error:Be(405,{method:y.method,pathname:_.pathname,routeId:U.route.id})};else if(L=(await Sa("action",g,y,[U],x,null))[U.route.id],y.signal.aborted)return{shortCircuited:!0};if(xi(L)){let V;return z&&z.replace!=null?V=z.replace:V=pu(L.response.headers.get("Location"),new URL(y.url),o)===g.location.pathname+g.location.search,await gi(y,L,!0,{submission:I,replace:V}),{shortCircuited:!0}}if(ei(L))throw Be(400,{type:"defer-action"});if(Je(L)){let V=Ii(x,U.route.id);return(z&&z.replace)!==!0&&(C=Se.Push),{matches:x,pendingActionResult:[V.route.id,L]}}return{matches:x,pendingActionResult:[U.route.id,L]}}async function vf(y,_,I,x,M,z,Y,L,U,V,K){let Q=M||Mr(_,z),$=z||Y||Iu(Q),Ce=!me&&(!c.v7_partialHydration||!U);if(x){if(Ce){let Te=zo(K);He(de({navigation:Q},Te!==void 0?{actionData:Te}:{}),{flushSync:V})}let ee=await Nn(I,_.pathname,y.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let Te=Ii(ee.partialMatches).route.id;return{matches:ee.partialMatches,loaderData:{},errors:{[Te]:ee.error}}}else if(ee.matches)I=ee.matches;else{let{error:Te,notFoundMatches:zi,route:xa}=nr(_.pathname);return{matches:zi,loaderData:{},errors:{[xa.id]:Te}}}}let ne=s||r,[te,_e]=du(e.history,g,I,$,_,c.v7_partialHydration&&U===!0,c.v7_skipActionErrorRevalidation,re,ut,Qe,Ne,se,F,ne,o,K);if(lr(ee=>!(I&&I.some(Te=>Te.route.id===ee))||te&&te.some(Te=>Te.route.id===ee)),W=++O,te.length===0&&_e.length===0){let ee=Bo();return Ui(_,de({matches:I,loaderData:{},errors:K&&Je(K[1])?{[K[0]]:K[1].error}:null},Tu(K),ee?{fetchers:new Map(g.fetchers)}:{}),{flushSync:V}),{shortCircuited:!0}}if(Ce){let ee={};if(!x){ee.navigation=Q;let Te=zo(K);Te!==void 0&&(ee.actionData=Te)}_e.length>0&&(ee.fetchers=Pf(_e)),He(ee,{flushSync:V})}_e.forEach(ee=>{Dt(ee.key),ee.controller&&ce.set(ee.key,ee.controller)});let Hi=()=>_e.forEach(ee=>Dt(ee.key));H&&H.signal.addEventListener("abort",Hi);let{loaderResults:Ea,fetcherResults:Nt}=await Ko(g,I,te,_e,y);if(y.signal.aborted)return{shortCircuited:!0};H&&H.signal.removeEventListener("abort",Hi),_e.forEach(ee=>ce.delete(ee.key));let At=Zn(Ea);if(At)return await gi(y,At.result,!0,{replace:L}),{shortCircuited:!0};if(At=Zn(Nt),At)return F.add(At.key),await gi(y,At.result,!0,{replace:L}),{shortCircuited:!0};let{loaderData:rr,errors:ba}=gu(g,I,Ea,K,_e,Nt,ct);ct.forEach((ee,Te)=>{ee.subscribe(zi=>{(zi||ee.done)&&ct.delete(Te)})}),c.v7_partialHydration&&U&&g.errors&&(ba=de({},g.errors,ba));let _i=Bo(),Cn=Yo(W),Rn=_i||Cn||_e.length>0;return de({matches:I,loaderData:rr,errors:ba},Rn?{fetchers:new Map(g.fetchers)}:{})}function zo(y){if(y&&!Je(y[1]))return{[y[0]]:y[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Pf(y){return y.forEach(_=>{let I=g.fetchers.get(_.key),x=Va(void 0,I?I.data:void 0);g.fetchers.set(_.key,x)}),new Map(g.fetchers)}function Nf(y,_,I,x){if(a)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Dt(y);let M=(x&&x.flushSync)===!0,z=s||r,Y=Ns(g.location,g.matches,o,c.v7_prependBasename,I,c.v7_relativeSplatPath,_,x==null?void 0:x.relative),L=Ai(z,Y,o),U=Pn(L,z,Y);if(U.active&&U.matches&&(L=U.matches),!L){Pt(y,_,Be(404,{pathname:Y}),{flushSync:M});return}let{path:V,submission:K,error:Q}=uu(c.v7_normalizeFormMethod,!0,Y,x);if(Q){Pt(y,_,Q,{flushSync:M});return}let $=Ba(L,V),Ce=(x&&x.preventScrollReset)===!0;if(K&&pt(K.formMethod)){Cf(y,_,V,$,L,U.active,M,Ce,K);return}se.set(y,{routeId:_,path:V}),Rf(y,_,V,$,L,U.active,M,Ce,K)}async function Cf(y,_,I,x,M,z,Y,L,U){ar(),se.delete(y);function V(Ie){if(!Ie.route.action&&!Ie.route.lazy){let Ki=Be(405,{method:U.formMethod,pathname:I,routeId:_});return Pt(y,_,Ki,{flushSync:Y}),!0}return!1}if(!z&&V(x))return;let K=g.fetchers.get(y);Wt(y,r8(U,K),{flushSync:Y});let Q=new AbortController,$=Di(e.history,I,Q.signal,U);if(z){let Ie=await Nn(M,I,$.signal);if(Ie.type==="aborted")return;if(Ie.type==="error"){Pt(y,_,Ie.error,{flushSync:Y});return}else if(Ie.matches){if(M=Ie.matches,x=Ba(M,I),V(x))return}else{Pt(y,_,Be(404,{pathname:I}),{flushSync:Y});return}}ce.set(y,Q);let Ce=O,te=(await Sa("action",g,$,[x],M,y))[x.route.id];if($.signal.aborted){ce.get(y)===Q&&ce.delete(y);return}if(c.v7_fetcherPersist&&Ne.has(y)){if(xi(te)||Je(te)){Wt(y,Gt(void 0));return}}else{if(xi(te))if(ce.delete(y),W>Ce){Wt(y,Gt(void 0));return}else return F.add(y),Wt(y,Va(U)),gi($,te,!1,{fetcherSubmission:U,preventScrollReset:L});if(Je(te)){Pt(y,_,te.error);return}}if(ei(te))throw Be(400,{type:"defer-action"});let _e=g.navigation.location||g.location,Hi=Di(e.history,_e,Q.signal),Ea=s||r,Nt=g.navigation.state!=="idle"?Ai(Ea,g.navigation.location,o):g.matches;q(Nt,"Didn't find any matches after fetcher action");let At=++O;B.set(y,At);let rr=Va(U,te.data);g.fetchers.set(y,rr);let[ba,_i]=du(e.history,g,Nt,U,_e,!1,c.v7_skipActionErrorRevalidation,re,ut,Qe,Ne,se,F,Ea,o,[x.route.id,te]);_i.filter(Ie=>Ie.key!==y).forEach(Ie=>{let Ki=Ie.key,Qo=g.fetchers.get(Ki),Uf=Va(void 0,Qo?Qo.data:void 0);g.fetchers.set(Ki,Uf),Dt(Ki),Ie.controller&&ce.set(Ki,Ie.controller)}),He({fetchers:new Map(g.fetchers)});let Cn=()=>_i.forEach(Ie=>Dt(Ie.key));Q.signal.addEventListener("abort",Cn);let{loaderResults:Rn,fetcherResults:ee}=await Ko(g,Nt,ba,_i,Hi);if(Q.signal.aborted)return;Q.signal.removeEventListener("abort",Cn),B.delete(y),ce.delete(y),_i.forEach(Ie=>ce.delete(Ie.key));let Te=Zn(Rn);if(Te)return gi(Hi,Te.result,!1,{preventScrollReset:L});if(Te=Zn(ee),Te)return F.add(Te.key),gi(Hi,Te.result,!1,{preventScrollReset:L});let{loaderData:zi,errors:xa}=gu(g,Nt,Rn,void 0,_i,ee,ct);if(g.fetchers.has(y)){let Ie=Gt(te.data);g.fetchers.set(y,Ie)}Yo(At),g.navigation.state==="loading"&&At>W?(q(C,"Expected pending action"),H&&H.abort(),Ui(g.navigation.location,{matches:Nt,loaderData:zi,errors:xa,fetchers:new Map(g.fetchers)})):(He({errors:xa,loaderData:_u(g.loaderData,zi,Nt,xa),fetchers:new Map(g.fetchers)}),re=!1)}async function Rf(y,_,I,x,M,z,Y,L,U){let V=g.fetchers.get(y);Wt(y,Va(U,V?V.data:void 0),{flushSync:Y});let K=new AbortController,Q=Di(e.history,I,K.signal);if(z){let te=await Nn(M,I,Q.signal);if(te.type==="aborted")return;if(te.type==="error"){Pt(y,_,te.error,{flushSync:Y});return}else if(te.matches)M=te.matches,x=Ba(M,I);else{Pt(y,_,Be(404,{pathname:I}),{flushSync:Y});return}}ce.set(y,K);let $=O,ne=(await Sa("loader",g,Q,[x],M,y))[x.route.id];if(ei(ne)&&(ne=await Mo(ne,Q.signal,!0)||ne),ce.get(y)===K&&ce.delete(y),!Q.signal.aborted){if(Ne.has(y)){Wt(y,Gt(void 0));return}if(xi(ne))if(W>$){Wt(y,Gt(void 0));return}else{F.add(y),await gi(Q,ne,!1,{preventScrollReset:L});return}if(Je(ne)){Pt(y,_,ne.error);return}q(!ei(ne),"Unhandled fetcher deferred data"),Wt(y,Gt(ne.data))}}async function gi(y,_,I,x){let{submission:M,fetcherSubmission:z,preventScrollReset:Y,replace:L}=x===void 0?{}:x;_.response.headers.has("X-Remix-Revalidate")&&(re=!0);let U=_.response.headers.get("Location");q(U,"Expected a Location header on the redirect Response"),U=pu(U,new URL(y.url),o);let V=_n(g.location,U,{_isRedirect:!0});if(i){let te=!1;if(_.response.headers.has("X-Remix-Reload-Document"))te=!0;else if(jo.test(U)){const _e=e.history.createURL(U);te=_e.origin!==t.location.origin||Aa(_e.pathname,o)==null}if(te){L?t.location.replace(U):t.location.assign(U);return}}H=null;let K=L===!0||_.response.headers.has("X-Remix-Replace")?Se.Replace:Se.Push,{formMethod:Q,formAction:$,formEncType:Ce}=g.navigation;!M&&!z&&Q&&$&&Ce&&(M=Iu(g.navigation));let ne=M||z;if(z4.has(_.response.status)&&ne&&pt(ne.formMethod))await yi(K,V,{submission:de({},ne,{formAction:U}),preventScrollReset:Y||v,enableViewTransition:I?j:void 0});else{let te=Mr(V,M);await yi(K,V,{overrideNavigation:te,fetcherSubmission:z,preventScrollReset:Y||v,enableViewTransition:I?j:void 0})}}async function Sa(y,_,I,x,M,z){let Y,L={};try{Y=await q4(h,y,_,I,x,M,z,l,n)}catch(U){return x.forEach(V=>{L[V.route.id]={type:ae.error,error:U}}),L}for(let[U,V]of Object.entries(Y))if(e8(V)){let K=V.result;L[U]={type:ae.redirect,response:$4(K,I,U,M,o,c.v7_relativeSplatPath)}}else L[U]=await Q4(V);return L}async function Ko(y,_,I,x,M){let z=y.matches,Y=Sa("loader",y,M,I,_,null),L=Promise.all(x.map(async K=>{if(K.matches&&K.match&&K.controller){let $=(await Sa("loader",y,Di(e.history,K.path,K.controller.signal),[K.match],K.matches,K.key))[K.match.route.id];return{[K.key]:$}}else return Promise.resolve({[K.key]:{type:ae.error,error:Be(404,{pathname:K.path})}})})),U=await Y,V=(await L).reduce((K,Q)=>Object.assign(K,Q),{});return await Promise.all([a8(_,U,M.signal,z,y.loaderData),n8(_,V,x)]),{loaderResults:U,fetcherResults:V}}function ar(){re=!0,ut.push(...lr()),se.forEach((y,_)=>{ce.has(_)&&Qe.add(_),Dt(_)})}function Wt(y,_,I){I===void 0&&(I={}),g.fetchers.set(y,_),He({fetchers:new Map(g.fetchers)},{flushSync:(I&&I.flushSync)===!0})}function Pt(y,_,I,x){x===void 0&&(x={});let M=Ii(g.matches,_);xn(y),He({errors:{[M.route.id]:I},fetchers:new Map(g.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function Wo(y){return c.v7_fetcherPersist&&(wt.set(y,(wt.get(y)||0)+1),Ne.has(y)&&Ne.delete(y)),g.fetchers.get(y)||K4}function xn(y){let _=g.fetchers.get(y);ce.has(y)&&!(_&&_.state==="loading"&&B.has(y))&&Dt(y),se.delete(y),B.delete(y),F.delete(y),Ne.delete(y),Qe.delete(y),g.fetchers.delete(y)}function Of(y){if(c.v7_fetcherPersist){let _=(wt.get(y)||0)-1;_<=0?(wt.delete(y),Ne.add(y)):wt.set(y,_)}else xn(y);He({fetchers:new Map(g.fetchers)})}function Dt(y){let _=ce.get(y);_&&(_.abort(),ce.delete(y))}function Do(y){for(let _ of y){let I=Wo(_),x=Gt(I.data);g.fetchers.set(_,x)}}function Bo(){let y=[],_=!1;for(let I of F){let x=g.fetchers.get(I);q(x,"Expected fetcher: "+I),x.state==="loading"&&(F.delete(I),y.push(I),_=!0)}return Do(y),_}function Yo(y){let _=[];for(let[I,x]of B)if(x<y){let M=g.fetchers.get(I);q(M,"Expected fetcher: "+I),M.state==="loading"&&(Dt(I),B.delete(I),_.push(I))}return Do(_),_.length>0}function kf(y,_){let I=g.blockers.get(y)||Ma;return Ue.get(y)!==_&&Ue.set(y,_),I}function Fo(y){g.blockers.delete(y),Ue.delete(y)}function vn(y,_){let I=g.blockers.get(y)||Ma;q(I.state==="unblocked"&&_.state==="blocked"||I.state==="blocked"&&_.state==="blocked"||I.state==="blocked"&&_.state==="proceeding"||I.state==="blocked"&&_.state==="unblocked"||I.state==="proceeding"&&_.state==="unblocked","Invalid blocker state transition: "+I.state+" -> "+_.state);let x=new Map(g.blockers);x.set(y,_),He({blockers:x})}function Go(y){let{currentLocation:_,nextLocation:I,historyAction:x}=y;if(Ue.size===0)return;Ue.size>1&&ga(!1,"A router only supports one blocker at a time");let M=Array.from(Ue.entries()),[z,Y]=M[M.length-1],L=g.blockers.get(z);if(!(L&&L.state==="proceeding")&&Y({currentLocation:_,nextLocation:I,historyAction:x}))return z}function nr(y){let _=Be(404,{pathname:y}),I=s||r,{matches:x,route:M}=wu(I);return lr(),{notFoundMatches:x,route:M,error:_}}function lr(y){let _=[];return ct.forEach((I,x)=>{(!y||y(x))&&(I.cancel(),_.push(x),ct.delete(x))}),_}function jf(y,_,I){if(A=y,b=_,w=I||null,!m&&g.navigation===jr){m=!0;let x=Zo(g.location,g.matches);x!=null&&He({restoreScrollPosition:x})}return()=>{A=null,b=null,w=null}}function qo(y,_){return w&&w(y,_.map(x=>_4(x,g.loaderData)))||y.key}function Mf(y,_){if(A&&b){let I=qo(y,_);A[I]=b()}}function Zo(y,_){if(A){let I=qo(y,_),x=A[I];if(typeof x=="number")return x}return null}function Pn(y,_,I){if(d)if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:ol(_,I,o,!0)}}else return{active:!0,matches:ol(_,I,o,!0)||[]};return{active:!1,matches:null}}async function Nn(y,_,I){if(!d)return{type:"success",matches:y};let x=y;for(;;){let M=s==null,z=s||r,Y=l;try{await d({path:_,matches:x,patch:(V,K)=>{I.aborted||mu(V,K,z,Y,n)}})}catch(V){return{type:"error",error:V,partialMatches:x}}finally{M&&!I.aborted&&(r=[...r])}if(I.aborted)return{type:"aborted"};let L=Ai(z,_,o);if(L)return{type:"success",matches:L};let U=ol(z,_,o,!0);if(!U||x.length===U.length&&x.every((V,K)=>V.route.id===U[K].route.id))return{type:"success",matches:null};x=U}}function Vf(y){l={},s=kl(y,n,void 0,l)}function Lf(y,_){let I=s==null;mu(y,_,s||r,l,n),I&&(r=[...r],He({}))}return N={get basename(){return o},get future(){return c},get state(){return g},get routes(){return r},get window(){return t},initialize:If,subscribe:Ef,enableScrollRestoration:jf,navigate:Ho,fetch:Nf,revalidate:bf,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Wo,deleteFetcher:Of,dispose:Sf,getBlocker:kf,deleteBlocker:Fo,patchRoutes:Lf,_internalFetchControllers:ce,_internalActiveDeferreds:ct,_internalSetRoutes:Vf},N}function B4(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ns(e,t,i,a,n,l,r,s){let o,h;if(r){o=[];for(let c of t)if(o.push(c),c.route.id===r){h=c;break}}else o=t,h=t[t.length-1];let d=ko(n||".",Oo(o,l),Aa(e.pathname,i)||e.pathname,s==="path");if(n==null&&(d.search=e.search,d.hash=e.hash),(n==null||n===""||n===".")&&h){let c=Vo(d.search);if(h.route.index&&!c)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!h.route.index&&c){let f=new URLSearchParams(d.search),T=f.getAll("index");f.delete("index"),T.filter(w=>w).forEach(w=>f.append("index",w));let A=f.toString();d.search=A?"?"+A:""}}return a&&i!=="/"&&(d.pathname=d.pathname==="/"?i:Vt([i,d.pathname])),ji(d)}function uu(e,t,i,a){if(!a||!B4(a))return{path:i};if(a.formMethod&&!i8(a.formMethod))return{path:i,error:Be(405,{method:a.formMethod})};let n=()=>({path:i,error:Be(400,{type:"invalid-body"})}),l=a.formMethod||"get",r=e?l.toUpperCase():l.toLowerCase(),s=nf(i);if(a.body!==void 0){if(a.formEncType==="text/plain"){if(!pt(r))return n();let f=typeof a.body=="string"?a.body:a.body instanceof FormData||a.body instanceof URLSearchParams?Array.from(a.body.entries()).reduce((T,A)=>{let[w,b]=A;return""+T+w+"="+b+`
`},""):String(a.body);return{path:i,submission:{formMethod:r,formAction:s,formEncType:a.formEncType,formData:void 0,json:void 0,text:f}}}else if(a.formEncType==="application/json"){if(!pt(r))return n();try{let f=typeof a.body=="string"?JSON.parse(a.body):a.body;return{path:i,submission:{formMethod:r,formAction:s,formEncType:a.formEncType,formData:void 0,json:f,text:void 0}}}catch{return n()}}}q(typeof FormData=="function","FormData is not available in this environment");let o,h;if(a.formData)o=Rs(a.formData),h=a.formData;else if(a.body instanceof FormData)o=Rs(a.body),h=a.body;else if(a.body instanceof URLSearchParams)o=a.body,h=yu(o);else if(a.body==null)o=new URLSearchParams,h=new FormData;else try{o=new URLSearchParams(a.body),h=yu(o)}catch{return n()}let d={formMethod:r,formAction:s,formEncType:a&&a.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(pt(d.formMethod))return{path:i,submission:d};let c=mi(i);return t&&c.search&&Vo(c.search)&&o.append("index",""),c.search="?"+o,{path:ji(c),submission:d}}function cu(e,t,i){i===void 0&&(i=!1);let a=e.findIndex(n=>n.route.id===t);return a>=0?e.slice(0,i?a+1:a):e}function du(e,t,i,a,n,l,r,s,o,h,d,c,f,T,A,w){let b=w?Je(w[1])?w[1].error:w[1].data:void 0,m=e.createURL(t.location),u=e.createURL(n),p=i;l&&t.errors?p=cu(i,Object.keys(t.errors)[0],!0):w&&Je(w[1])&&(p=cu(i,w[0]));let S=w?w[1].statusCode:void 0,N=r&&S&&S>=400,g=p.filter((v,H)=>{let{route:j}=v;if(j.lazy)return!0;if(j.loader==null)return!1;if(l)return Cs(j,t.loaderData,t.errors);if(Y4(t.loaderData,t.matches[H],v)||o.some(me=>me===v.route.id))return!0;let X=t.matches[H],D=v;return fu(v,de({currentUrl:m,currentParams:X.params,nextUrl:u,nextParams:D.params},a,{actionResult:b,actionStatus:S,defaultShouldRevalidate:N?!1:s||m.pathname+m.search===u.pathname+u.search||m.search!==u.search||tf(X,D)}))}),C=[];return c.forEach((v,H)=>{if(l||!i.some(re=>re.route.id===v.routeId)||d.has(H))return;let j=Ai(T,v.path,A);if(!j){C.push({key:H,routeId:v.routeId,path:v.path,matches:null,match:null,controller:null});return}let X=t.fetchers.get(H),D=Ba(j,v.path),me=!1;f.has(H)?me=!1:h.has(H)?(h.delete(H),me=!0):X&&X.state!=="idle"&&X.data===void 0?me=s:me=fu(D,de({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:u,nextParams:i[i.length-1].params},a,{actionResult:b,actionStatus:S,defaultShouldRevalidate:N?!1:s})),me&&C.push({key:H,routeId:v.routeId,path:v.path,matches:j,match:D,controller:new AbortController})}),[g,C]}function Cs(e,t,i){if(e.lazy)return!0;if(!e.loader)return!1;let a=t!=null&&t[e.id]!==void 0,n=i!=null&&i[e.id]!==void 0;return!a&&n?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!a&&!n}function Y4(e,t,i){let a=!t||i.route.id!==t.route.id,n=e[i.route.id]===void 0;return a||n}function tf(e,t){let i=e.route.path;return e.pathname!==t.pathname||i!=null&&i.endsWith("*")&&e.params["*"]!==t.params["*"]}function fu(e,t){if(e.route.shouldRevalidate){let i=e.route.shouldRevalidate(t);if(typeof i=="boolean")return i}return t.defaultShouldRevalidate}function mu(e,t,i,a,n){var l;let r;if(e){let h=a[e];q(h,"No route found to patch children into: routeId = "+e),h.children||(h.children=[]),r=h.children}else r=i;let s=t.filter(h=>!r.some(d=>af(h,d))),o=kl(s,n,[e||"_","patch",String(((l=r)==null?void 0:l.length)||"0")],a);r.push(...o)}function af(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((i,a)=>{var n;return(n=t.children)==null?void 0:n.some(l=>af(i,l))}):!1}async function F4(e,t,i){if(!e.lazy)return;let a=await e.lazy();if(!e.lazy)return;let n=i[e.id];q(n,"No route found in manifest");let l={};for(let r in a){let o=n[r]!==void 0&&r!=="hasErrorBoundary";ga(!o,'Route "'+n.id+'" has a static property "'+r+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+r+'" will be ignored.')),!o&&!y4.has(r)&&(l[r]=a[r])}Object.assign(n,l),Object.assign(n,de({},t(n),{lazy:void 0}))}async function G4(e){let{matches:t}=e,i=t.filter(n=>n.shouldLoad);return(await Promise.all(i.map(n=>n.resolve()))).reduce((n,l,r)=>Object.assign(n,{[i[r].route.id]:l}),{})}async function q4(e,t,i,a,n,l,r,s,o,h){let d=l.map(T=>T.route.lazy?F4(T.route,o,s):void 0),c=l.map((T,A)=>{let w=d[A],b=n.some(u=>u.route.id===T.route.id);return de({},T,{shouldLoad:b,resolve:async u=>(u&&a.method==="GET"&&(T.route.lazy||T.route.loader)&&(b=!0),b?Z4(t,a,T,w,u,h):Promise.resolve({type:ae.data,result:void 0}))})}),f=await e({matches:c,request:a,params:l[0].params,fetcherKey:r,context:h});try{await Promise.all(d)}catch{}return f}async function Z4(e,t,i,a,n,l){let r,s,o=h=>{let d,c=new Promise((A,w)=>d=w);s=()=>d(),t.signal.addEventListener("abort",s);let f=A=>typeof h!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+i.route.id+"]"))):h({request:t,params:i.params,context:l},...A!==void 0?[A]:[]),T=(async()=>{try{return{type:"data",result:await(n?n(w=>f(w)):f())}}catch(A){return{type:"error",result:A}}})();return Promise.race([T,c])};try{let h=i.route[e];if(a)if(h){let d,[c]=await Promise.all([o(h).catch(f=>{d=f}),a]);if(d!==void 0)throw d;r=c}else if(await a,h=i.route[e],h)r=await o(h);else if(e==="action"){let d=new URL(t.url),c=d.pathname+d.search;throw Be(405,{method:t.method,pathname:c,routeId:i.route.id})}else return{type:ae.data,result:void 0};else if(h)r=await o(h);else{let d=new URL(t.url),c=d.pathname+d.search;throw Be(404,{pathname:c})}q(r.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+i.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(h){return{type:ae.error,result:h}}finally{s&&t.signal.removeEventListener("abort",s)}return r}async function Q4(e){let{result:t,type:i}=e;if(lf(t)){let h;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?h=null:h=await t.json():h=await t.text()}catch(d){return{type:ae.error,error:d}}return i===ae.error?{type:ae.error,error:new jl(t.status,t.statusText,h),statusCode:t.status,headers:t.headers}:{type:ae.data,data:h,statusCode:t.status,headers:t.headers}}if(i===ae.error){if(Au(t)){var a;if(t.data instanceof Error){var n;return{type:ae.error,error:t.data,statusCode:(n=t.init)==null?void 0:n.status}}t=new jl(((a=t.init)==null?void 0:a.status)||500,void 0,t.data)}return{type:ae.error,error:t,statusCode:Xl(t)?t.status:void 0}}if(t8(t)){var l,r;return{type:ae.deferred,deferredData:t,statusCode:(l=t.init)==null?void 0:l.status,headers:((r=t.init)==null?void 0:r.headers)&&new Headers(t.init.headers)}}if(Au(t)){var s,o;return{type:ae.data,data:t.data,statusCode:(s=t.init)==null?void 0:s.status,headers:(o=t.init)!=null&&o.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function $4(e,t,i,a,n,l){let r=e.headers.get("Location");if(q(r,"Redirects returned/thrown from loaders/actions must have a Location header"),!jo.test(r)){let s=a.slice(0,a.findIndex(o=>o.route.id===i)+1);r=Ns(new URL(t.url),s,n,!0,r,l),e.headers.set("Location",r)}return e}function pu(e,t,i){if(jo.test(e)){let a=e,n=a.startsWith("//")?new URL(t.protocol+a):new URL(a),l=Aa(n.pathname,i)!=null;if(n.origin===t.origin&&l)return n.pathname+n.search+n.hash}return e}function Di(e,t,i,a){let n=e.createURL(nf(t)).toString(),l={signal:i};if(a&&pt(a.formMethod)){let{formMethod:r,formEncType:s}=a;l.method=r.toUpperCase(),s==="application/json"?(l.headers=new Headers({"Content-Type":s}),l.body=JSON.stringify(a.json)):s==="text/plain"?l.body=a.text:s==="application/x-www-form-urlencoded"&&a.formData?l.body=Rs(a.formData):l.body=a.formData}return new Request(n,l)}function Rs(e){let t=new URLSearchParams;for(let[i,a]of e.entries())t.append(i,typeof a=="string"?a:a.name);return t}function yu(e){let t=new FormData;for(let[i,a]of e.entries())t.append(i,a);return t}function J4(e,t,i,a,n){let l={},r=null,s,o=!1,h={},d=i&&Je(i[1])?i[1].error:void 0;return e.forEach(c=>{if(!(c.route.id in t))return;let f=c.route.id,T=t[f];if(q(!xi(T),"Cannot handle redirect results in processLoaderData"),Je(T)){let A=T.error;d!==void 0&&(A=d,d=void 0),r=r||{};{let w=Ii(e,f);r[w.route.id]==null&&(r[w.route.id]=A)}l[f]=void 0,o||(o=!0,s=Xl(T.error)?T.error.status:500),T.headers&&(h[f]=T.headers)}else ei(T)?(a.set(f,T.deferredData),l[f]=T.deferredData.data,T.statusCode!=null&&T.statusCode!==200&&!o&&(s=T.statusCode),T.headers&&(h[f]=T.headers)):(l[f]=T.data,T.statusCode&&T.statusCode!==200&&!o&&(s=T.statusCode),T.headers&&(h[f]=T.headers))}),d!==void 0&&i&&(r={[i[0]]:d},l[i[0]]=void 0),{loaderData:l,errors:r,statusCode:s||200,loaderHeaders:h}}function gu(e,t,i,a,n,l,r){let{loaderData:s,errors:o}=J4(t,i,a,r);return n.forEach(h=>{let{key:d,match:c,controller:f}=h,T=l[d];if(q(T,"Did not find corresponding fetcher result"),!(f&&f.signal.aborted))if(Je(T)){let A=Ii(e.matches,c==null?void 0:c.route.id);o&&o[A.route.id]||(o=de({},o,{[A.route.id]:T.error})),e.fetchers.delete(d)}else if(xi(T))q(!1,"Unhandled fetcher revalidation redirect");else if(ei(T))q(!1,"Unhandled fetcher deferred data");else{let A=Gt(T.data);e.fetchers.set(d,A)}}),{loaderData:s,errors:o}}function _u(e,t,i,a){let n=de({},t);for(let l of i){let r=l.route.id;if(t.hasOwnProperty(r)?t[r]!==void 0&&(n[r]=t[r]):e[r]!==void 0&&l.route.loader&&(n[r]=e[r]),a&&a.hasOwnProperty(r))break}return n}function Tu(e){return e?Je(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ii(e,t){return(t?e.slice(0,e.findIndex(a=>a.route.id===t)+1):[...e]).reverse().find(a=>a.route.hasErrorBoundary===!0)||e[0]}function wu(e){let t=e.length===1?e[0]:e.find(i=>i.index||!i.path||i.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Be(e,t){let{pathname:i,routeId:a,method:n,type:l,message:r}=t===void 0?{}:t,s="Unknown Server Error",o="Unknown @remix-run/router error";return e===400?(s="Bad Request",n&&i&&a?o="You made a "+n+' request to "'+i+'" but '+('did not provide a `loader` for route "'+a+'", ')+"so there is no way to handle the request.":l==="defer-action"?o="defer() is not supported in actions":l==="invalid-body"&&(o="Unable to encode submission body")):e===403?(s="Forbidden",o='Route "'+a+'" does not match URL "'+i+'"'):e===404?(s="Not Found",o='No route matches URL "'+i+'"'):e===405&&(s="Method Not Allowed",n&&i&&a?o="You made a "+n.toUpperCase()+' request to "'+i+'" but '+('did not provide an `action` for route "'+a+'", ')+"so there is no way to handle the request.":n&&(o='Invalid request method "'+n.toUpperCase()+'"')),new jl(e||500,s,new Error(o),!0)}function Zn(e){let t=Object.entries(e);for(let i=t.length-1;i>=0;i--){let[a,n]=t[i];if(xi(n))return{key:a,result:n}}}function nf(e){let t=typeof e=="string"?mi(e):e;return ji(de({},t,{hash:""}))}function X4(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function e8(e){return lf(e.result)&&H4.has(e.result.status)}function ei(e){return e.type===ae.deferred}function Je(e){return e.type===ae.error}function xi(e){return(e&&e.type)===ae.redirect}function Au(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function t8(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function lf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function i8(e){return U4.has(e.toLowerCase())}function pt(e){return V4.has(e.toLowerCase())}async function a8(e,t,i,a,n){let l=Object.entries(t);for(let r=0;r<l.length;r++){let[s,o]=l[r],h=e.find(f=>(f==null?void 0:f.route.id)===s);if(!h)continue;let d=a.find(f=>f.route.id===h.route.id),c=d!=null&&!tf(d,h)&&(n&&n[h.route.id])!==void 0;ei(o)&&c&&await Mo(o,i,!1).then(f=>{f&&(t[s]=f)})}}async function n8(e,t,i){for(let a=0;a<i.length;a++){let{key:n,routeId:l,controller:r}=i[a],s=t[n];e.find(h=>(h==null?void 0:h.route.id)===l)&&ei(s)&&(q(r,"Expected an AbortController for revalidating fetcher deferred result"),await Mo(s,r.signal,!0).then(h=>{h&&(t[n]=h)}))}}async function Mo(e,t,i){if(i===void 0&&(i=!1),!await e.deferredData.resolveData(t)){if(i)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(n){return{type:ae.error,error:n}}return{type:ae.data,data:e.deferredData.data}}}function Vo(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ba(e,t){let i=typeof t=="string"?mi(t).search:t.search;if(e[e.length-1].route.index&&Vo(i||""))return e[e.length-1];let a=Jd(e);return a[a.length-1]}function Iu(e){let{formMethod:t,formAction:i,formEncType:a,text:n,formData:l,json:r}=e;if(!(!t||!i||!a)){if(n!=null)return{formMethod:t,formAction:i,formEncType:a,formData:void 0,json:void 0,text:n};if(l!=null)return{formMethod:t,formAction:i,formEncType:a,formData:l,json:void 0,text:void 0};if(r!==void 0)return{formMethod:t,formAction:i,formEncType:a,formData:void 0,json:r,text:void 0}}}function Mr(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function l8(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Va(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function r8(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Gt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function s8(e,t){try{let i=e.sessionStorage.getItem(ef);if(i){let a=JSON.parse(i);for(let[n,l]of Object.entries(a||{}))l&&Array.isArray(l)&&t.set(n,new Set(l||[]))}}catch{}}function o8(e,t){if(t.size>0){let i={};for(let[a,n]of t)i[a]=[...n];try{e.sessionStorage.setItem(ef,JSON.stringify(i))}catch(a){ga(!1,"Failed to save applied view transitions in sessionStorage ("+a+").")}}}/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Ml.apply(this,arguments)}const er=E.createContext(null),rf=E.createContext(null),Li=E.createContext(null),Lo=E.createContext(null),pi=E.createContext({outlet:null,matches:[],isDataRoute:!1}),sf=E.createContext(null);function h8(e,t){let{relative:i}=t===void 0?{}:t;bn()||q(!1);let{basename:a,navigator:n}=E.useContext(Li),{hash:l,pathname:r,search:s}=hf(e,{relative:i}),o=r;return a!=="/"&&(o=r==="/"?a:Vt([a,r])),n.createHref({pathname:o,search:s,hash:l})}function bn(){return E.useContext(Lo)!=null}function tr(){return bn()||q(!1),E.useContext(Lo).location}function of(e){E.useContext(Li).static||E.useLayoutEffect(e)}function u8(){let{isDataRoute:e}=E.useContext(pi);return e?E8():c8()}function c8(){bn()||q(!1);let e=E.useContext(er),{basename:t,future:i,navigator:a}=E.useContext(Li),{matches:n}=E.useContext(pi),{pathname:l}=tr(),r=JSON.stringify(Oo(n,i.v7_relativeSplatPath)),s=E.useRef(!1);return of(()=>{s.current=!0}),E.useCallback(function(h,d){if(d===void 0&&(d={}),!s.current)return;if(typeof h=="number"){a.go(h);return}let c=ko(h,JSON.parse(r),l,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:Vt([t,c.pathname])),(d.replace?a.replace:a.push)(c,d.state,d)},[t,a,r,l,e])}const d8=E.createContext(null);function f8(e){let t=E.useContext(pi).outlet;return t&&E.createElement(d8.Provider,{value:e},t)}function hf(e,t){let{relative:i}=t===void 0?{}:t,{future:a}=E.useContext(Li),{matches:n}=E.useContext(pi),{pathname:l}=tr(),r=JSON.stringify(Oo(n,a.v7_relativeSplatPath));return E.useMemo(()=>ko(e,JSON.parse(r),l,i==="path"),[e,r,l,i])}function m8(e,t,i,a){bn()||q(!1);let{navigator:n}=E.useContext(Li),{matches:l}=E.useContext(pi),r=l[l.length-1],s=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let h=tr(),d;d=h;let c=d.pathname||"/",f=c;if(o!=="/"){let w=o.replace(/^\//,"").split("/");f="/"+c.replace(/^\//,"").split("/").slice(w.length).join("/")}let T=Ai(e,{pathname:f});return T8(T&&T.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:Vt([o,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?o:Vt([o,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),l,i,a)}function p8(){let e=S8(),t=Xl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),i?E.createElement("pre",{style:n},i):null,null)}const y8=E.createElement(p8,null);class g8 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?E.createElement(pi.Provider,{value:this.props.routeContext},E.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _8(e){let{routeContext:t,match:i,children:a}=e,n=E.useContext(er);return n&&n.static&&n.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=i.route.id),E.createElement(pi.Provider,{value:t},a)}function T8(e,t,i,a){var n;if(t===void 0&&(t=[]),i===void 0&&(i=null),a===void 0&&(a=null),e==null){var l;if(!i)return null;if(i.errors)e=i.matches;else if((l=a)!=null&&l.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let r=e,s=(n=i)==null?void 0:n.errors;if(s!=null){let d=r.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);d>=0||q(!1),r=r.slice(0,Math.min(r.length,d+1))}let o=!1,h=-1;if(i&&a&&a.v7_partialHydration)for(let d=0;d<r.length;d++){let c=r[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(h=d),c.route.id){let{loaderData:f,errors:T}=i,A=c.route.loader&&f[c.route.id]===void 0&&(!T||T[c.route.id]===void 0);if(c.route.lazy||A){o=!0,h>=0?r=r.slice(0,h+1):r=[r[0]];break}}}return r.reduceRight((d,c,f)=>{let T,A=!1,w=null,b=null;i&&(T=s&&c.route.id?s[c.route.id]:void 0,w=c.route.errorElement||y8,o&&(h<0&&f===0?(A=!0,b=null):h===f&&(A=!0,b=c.route.hydrateFallbackElement||null)));let m=t.concat(r.slice(0,f+1)),u=()=>{let p;return T?p=w:A?p=b:c.route.Component?p=E.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=d,E.createElement(_8,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:i!=null},children:p})};return i&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?E.createElement(g8,{location:i.location,revalidation:i.revalidation,component:w,error:T,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):u()},null)}var uf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uf||{}),Vl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vl||{});function w8(e){let t=E.useContext(er);return t||q(!1),t}function A8(e){let t=E.useContext(rf);return t||q(!1),t}function I8(e){let t=E.useContext(pi);return t||q(!1),t}function cf(e){let t=I8(),i=t.matches[t.matches.length-1];return i.route.id||q(!1),i.route.id}function S8(){var e;let t=E.useContext(sf),i=A8(Vl.UseRouteError),a=cf(Vl.UseRouteError);return t!==void 0?t:(e=i.errors)==null?void 0:e[a]}function E8(){let{router:e}=w8(uf.UseNavigateStable),t=cf(Vl.UseNavigateStable),i=E.useRef(!1);return of(()=>{i.current=!0}),E.useCallback(function(n,l){l===void 0&&(l={}),i.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Ml({fromRouteId:t},l)))},[e,t])}function b8(e){return f8(e.context)}function Os(e){q(!1)}function x8(e){let{basename:t="/",children:i=null,location:a,navigationType:n=Se.Pop,navigator:l,static:r=!1,future:s}=e;bn()&&q(!1);let o=t.replace(/^\/*/,"/"),h=E.useMemo(()=>({basename:o,navigator:l,static:r,future:Ml({v7_relativeSplatPath:!1},s)}),[o,s,l,r]);typeof a=="string"&&(a=mi(a));let{pathname:d="/",search:c="",hash:f="",state:T=null,key:A="default"}=a,w=E.useMemo(()=>{let b=Aa(d,o);return b==null?null:{location:{pathname:b,search:c,hash:f,state:T,key:A},navigationType:n}},[o,d,c,f,T,A,n]);return w==null?null:E.createElement(Li.Provider,{value:h},E.createElement(Lo.Provider,{children:i,value:w}))}new Promise(()=>{});function ks(e,t){t===void 0&&(t=[]);let i=[];return E.Children.forEach(e,(a,n)=>{if(!E.isValidElement(a))return;let l=[...t,n];if(a.type===E.Fragment){i.push.apply(i,ks(a.props.children,l));return}a.type!==Os&&q(!1),!a.props.index||!a.props.children||q(!1);let r={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(r.children=ks(a.props.children,l)),i.push(r)}),i}function v8(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tn(){return Tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Tn.apply(this,arguments)}function P8(e,t){if(e==null)return{};var i={},a=Object.keys(e),n,l;for(l=0;l<a.length;l++)n=a[l],!(t.indexOf(n)>=0)&&(i[n]=e[n]);return i}function N8(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C8(e,t){return e.button===0&&(!t||t==="_self")&&!N8(e)}const R8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],O8="6";try{window.__reactRouterVersion=O8}catch{}function k8(e,t){return D4({basename:void 0,future:Tn({},void 0,{v7_prependBasename:!0}),history:f4({window:void 0}),hydrationData:j8(),routes:e,mapRouteProperties:v8,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function j8(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Tn({},t,{errors:M8(t.errors)})),t}function M8(e){if(!e)return null;let t=Object.entries(e),i={};for(let[a,n]of t)if(n&&n.__type==="RouteErrorResponse")i[a]=new jl(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let l=window[n.__subType];if(typeof l=="function")try{let r=new l(n.message);r.stack="",i[a]=r}catch{}}if(i[a]==null){let l=new Error(n.message);l.stack="",i[a]=l}}else i[a]=n;return i}const V8=E.createContext({isTransitioning:!1}),L8=E.createContext(new Map),U8="startTransition",Su=em[U8],H8="flushSync",Eu=d4[H8];function z8(e){Su?Su(e):e()}function La(e){Eu?Eu(e):e()}class K8{constructor(){this.status="pending",this.promise=new Promise((t,i)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",t(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",i(a))}})}}function W8(e){let{fallbackElement:t,router:i,future:a}=e,[n,l]=E.useState(i.state),[r,s]=E.useState(),[o,h]=E.useState({isTransitioning:!1}),[d,c]=E.useState(),[f,T]=E.useState(),[A,w]=E.useState(),b=E.useRef(new Map),{v7_startTransition:m}=a||{},u=E.useCallback(v=>{m?z8(v):v()},[m]),p=E.useCallback((v,H)=>{let{deletedFetchers:j,flushSync:X,viewTransitionOpts:D}=H;j.forEach(re=>b.current.delete(re)),v.fetchers.forEach((re,ut)=>{re.data!==void 0&&b.current.set(ut,re.data)});let me=i.window==null||i.window.document==null||typeof i.window.document.startViewTransition!="function";if(!D||me){X?La(()=>l(v)):u(()=>l(v));return}if(X){La(()=>{f&&(d&&d.resolve(),f.skipTransition()),h({isTransitioning:!0,flushSync:!0,currentLocation:D.currentLocation,nextLocation:D.nextLocation})});let re=i.window.document.startViewTransition(()=>{La(()=>l(v))});re.finished.finally(()=>{La(()=>{c(void 0),T(void 0),s(void 0),h({isTransitioning:!1})})}),La(()=>T(re));return}f?(d&&d.resolve(),f.skipTransition(),w({state:v,currentLocation:D.currentLocation,nextLocation:D.nextLocation})):(s(v),h({isTransitioning:!0,flushSync:!1,currentLocation:D.currentLocation,nextLocation:D.nextLocation}))},[i.window,f,d,b,u]);E.useLayoutEffect(()=>i.subscribe(p),[i,p]),E.useEffect(()=>{o.isTransitioning&&!o.flushSync&&c(new K8)},[o]),E.useEffect(()=>{if(d&&r&&i.window){let v=r,H=d.promise,j=i.window.document.startViewTransition(async()=>{u(()=>l(v)),await H});j.finished.finally(()=>{c(void 0),T(void 0),s(void 0),h({isTransitioning:!1})}),T(j)}},[u,r,d,i.window]),E.useEffect(()=>{d&&r&&n.location.key===r.location.key&&d.resolve()},[d,f,n.location,r]),E.useEffect(()=>{!o.isTransitioning&&A&&(s(A.state),h({isTransitioning:!0,flushSync:!1,currentLocation:A.currentLocation,nextLocation:A.nextLocation}),w(void 0))},[o.isTransitioning,A]),E.useEffect(()=>{},[]);let S=E.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:v=>i.navigate(v),push:(v,H,j)=>i.navigate(v,{state:H,preventScrollReset:j==null?void 0:j.preventScrollReset}),replace:(v,H,j)=>i.navigate(v,{replace:!0,state:H,preventScrollReset:j==null?void 0:j.preventScrollReset})}),[i]),N=i.basename||"/",g=E.useMemo(()=>({router:i,navigator:S,static:!1,basename:N}),[i,S,N]),C=E.useMemo(()=>({v7_relativeSplatPath:i.future.v7_relativeSplatPath}),[i.future.v7_relativeSplatPath]);return E.createElement(E.Fragment,null,E.createElement(er.Provider,{value:g},E.createElement(rf.Provider,{value:n},E.createElement(L8.Provider,{value:b.current},E.createElement(V8.Provider,{value:o},E.createElement(x8,{basename:N,location:n.location,navigationType:n.historyAction,navigator:S,future:C},n.initialized||i.future.v7_partialHydration?E.createElement(D8,{routes:i.routes,future:i.future,state:n}):t))))),null)}const D8=E.memo(B8);function B8(e){let{routes:t,future:i,state:a}=e;return m8(t,void 0,a,i)}const Y8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",F8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,js=E.forwardRef(function(t,i){let{onClick:a,relative:n,reloadDocument:l,replace:r,state:s,target:o,to:h,preventScrollReset:d,viewTransition:c}=t,f=P8(t,R8),{basename:T}=E.useContext(Li),A,w=!1;if(typeof h=="string"&&F8.test(h)&&(A=h,Y8))try{let p=new URL(window.location.href),S=h.startsWith("//")?new URL(p.protocol+h):new URL(h),N=Aa(S.pathname,T);S.origin===p.origin&&N!=null?h=N+S.search+S.hash:w=!0}catch{}let b=h8(h,{relative:n}),m=G8(h,{replace:r,state:s,target:o,preventScrollReset:d,relative:n,viewTransition:c});function u(p){a&&a(p),p.defaultPrevented||m(p)}return E.createElement("a",Tn({},f,{href:A||b,onClick:w||l?a:u,ref:i,target:o}))});var bu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(bu||(bu={}));var xu;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xu||(xu={}));function G8(e,t){let{target:i,replace:a,state:n,preventScrollReset:l,relative:r,viewTransition:s}=t===void 0?{}:t,o=u8(),h=tr(),d=hf(e,{relative:r});return E.useCallback(c=>{if(C8(c,i)){c.preventDefault();let f=a!==void 0?a:ji(h)===ji(d);o(e,{replace:f,state:n,preventScrollReset:l,relative:r,viewTransition:s})}},[h,o,d,a,n,i,e,l,r,s])}const q8=()=>R.jsx("header",{children:R.jsx("nav",{className:"navbar",children:R.jsx(js,{to:"/",className:"logo",children:"Kashmir Crafted"})})}),Z8=()=>R.jsxs(R.Fragment,{children:[R.jsx(q8,{}),R.jsx(b8,{})]}),Q8=({children:e,onClick:t})=>R.jsx("div",{onClick:t,children:e});/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),df=(...e)=>e.filter((t,i,a)=>!!t&&a.indexOf(t)===i).join(" ");/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J8={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=E.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:n="",children:l,iconNode:r,...s},o)=>E.createElement("svg",{ref:o,...J8,width:t,height:t,stroke:e,strokeWidth:a?Number(i)*24/Number(t):i,className:df("lucide",n),...s},[...r.map(([h,d])=>E.createElement(h,d)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=(e,t)=>{const i=E.forwardRef(({className:a,...n},l)=>E.createElement(X8,{ref:l,iconNode:t,className:df(`lucide-${$8(e)}`,a),...n}));return i.displayName=`${e}`,i};/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=ir("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=ir("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=ir("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.452.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=ir("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function ff(e){var t,i,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(i=ff(e[t]))&&(a&&(a+=" "),a+=i);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function ay(){for(var e,t,i=0,a="";i<arguments.length;)(e=arguments[i++])&&(t=ff(e))&&(a&&(a+=" "),a+=t);return a}const Pu=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,Nu=ay,mf=(e,t)=>i=>{var a;if((t==null?void 0:t.variants)==null)return Nu(e,i==null?void 0:i.class,i==null?void 0:i.className);const{variants:n,defaultVariants:l}=t,r=Object.keys(n).map(h=>{const d=i==null?void 0:i[h],c=l==null?void 0:l[h];if(d===null)return null;const f=Pu(d)||Pu(c);return n[h][f]}),s=i&&Object.entries(i).reduce((h,d)=>{let[c,f]=d;return f===void 0||(h[c]=f),h},{}),o=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((h,d)=>{let{class:c,className:f,...T}=d;return Object.entries(T).every(A=>{let[w,b]=A;return Array.isArray(b)?b.includes({...l,...s}[w]):{...l,...s}[w]===b})?[...h,c,f]:h},[]);return Nu(e,r,o,i==null?void 0:i.class,i==null?void 0:i.className)};function pf(e){var t,i,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(i=pf(e[t]))&&(a&&(a+=" "),a+=i)}else for(i in e)e[i]&&(a&&(a+=" "),a+=i);return a}function ny(){for(var e,t,i=0,a="",n=arguments.length;i<n;i++)(e=arguments[i])&&(t=pf(e))&&(a&&(a+=" "),a+=t);return a}const Uo="-",ly=e=>{const t=sy(e),{conflictingClassGroups:i,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:r=>{const s=r.split(Uo);return s[0]===""&&s.length!==1&&s.shift(),yf(s,t)||ry(r)},getConflictingClassGroupIds:(r,s)=>{const o=i[r]||[];return s&&a[r]?[...o,...a[r]]:o}}},yf=(e,t)=>{var r;if(e.length===0)return t.classGroupId;const i=e[0],a=t.nextPart.get(i),n=a?yf(e.slice(1),a):void 0;if(n)return n;if(t.validators.length===0)return;const l=e.join(Uo);return(r=t.validators.find(({validator:s})=>s(l)))==null?void 0:r.classGroupId},Cu=/^\[(.+)\]$/,ry=e=>{if(Cu.test(e)){const t=Cu.exec(e)[1],i=t==null?void 0:t.substring(0,t.indexOf(":"));if(i)return"arbitrary.."+i}},sy=e=>{const{theme:t,prefix:i}=e,a={nextPart:new Map,validators:[]};return hy(Object.entries(e.classGroups),i).forEach(([l,r])=>{Ms(r,a,l,t)}),a},Ms=(e,t,i,a)=>{e.forEach(n=>{if(typeof n=="string"){const l=n===""?t:Ru(t,n);l.classGroupId=i;return}if(typeof n=="function"){if(oy(n)){Ms(n(a),t,i,a);return}t.validators.push({validator:n,classGroupId:i});return}Object.entries(n).forEach(([l,r])=>{Ms(r,Ru(t,l),i,a)})})},Ru=(e,t)=>{let i=e;return t.split(Uo).forEach(a=>{i.nextPart.has(a)||i.nextPart.set(a,{nextPart:new Map,validators:[]}),i=i.nextPart.get(a)}),i},oy=e=>e.isThemeGetter,hy=(e,t)=>t?e.map(([i,a])=>{const n=a.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([r,s])=>[t+r,s])):l);return[i,n]}):e,uy=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,i=new Map,a=new Map;const n=(l,r)=>{i.set(l,r),t++,t>e&&(t=0,a=i,i=new Map)};return{get(l){let r=i.get(l);if(r!==void 0)return r;if((r=a.get(l))!==void 0)return n(l,r),r},set(l,r){i.has(l)?i.set(l,r):n(l,r)}}},gf="!",cy=e=>{const{separator:t,experimentalParseClassName:i}=e,a=t.length===1,n=t[0],l=t.length,r=s=>{const o=[];let h=0,d=0,c;for(let b=0;b<s.length;b++){let m=s[b];if(h===0){if(m===n&&(a||s.slice(b,b+l)===t)){o.push(s.slice(d,b)),d=b+l;continue}if(m==="/"){c=b;continue}}m==="["?h++:m==="]"&&h--}const f=o.length===0?s:s.substring(d),T=f.startsWith(gf),A=T?f.substring(1):f,w=c&&c>d?c-d:void 0;return{modifiers:o,hasImportantModifier:T,baseClassName:A,maybePostfixModifierPosition:w}};return i?s=>i({className:s,parseClassName:r}):r},dy=e=>{if(e.length<=1)return e;const t=[];let i=[];return e.forEach(a=>{a[0]==="["?(t.push(...i.sort(),a),i=[]):i.push(a)}),t.push(...i.sort()),t},fy=e=>({cache:uy(e.cacheSize),parseClassName:cy(e),...ly(e)}),my=/\s+/,py=(e,t)=>{const{parseClassName:i,getClassGroupId:a,getConflictingClassGroupIds:n}=t,l=[],r=e.trim().split(my);let s="";for(let o=r.length-1;o>=0;o-=1){const h=r[o],{modifiers:d,hasImportantModifier:c,baseClassName:f,maybePostfixModifierPosition:T}=i(h);let A=!!T,w=a(A?f.substring(0,T):f);if(!w){if(!A){s=h+(s.length>0?" "+s:s);continue}if(w=a(f),!w){s=h+(s.length>0?" "+s:s);continue}A=!1}const b=dy(d).join(":"),m=c?b+gf:b,u=m+w;if(l.includes(u))continue;l.push(u);const p=n(w,A);for(let S=0;S<p.length;++S){const N=p[S];l.push(m+N)}s=h+(s.length>0?" "+s:s)}return s};function yy(){let e=0,t,i,a="";for(;e<arguments.length;)(t=arguments[e++])&&(i=_f(t))&&(a&&(a+=" "),a+=i);return a}const _f=e=>{if(typeof e=="string")return e;let t,i="";for(let a=0;a<e.length;a++)e[a]&&(t=_f(e[a]))&&(i&&(i+=" "),i+=t);return i};function gy(e,...t){let i,a,n,l=r;function r(o){const h=t.reduce((d,c)=>c(d),e());return i=fy(h),a=i.cache.get,n=i.cache.set,l=s,s(o)}function s(o){const h=a(o);if(h)return h;const d=py(o,i);return n(o,d),d}return function(){return l(yy.apply(null,arguments))}}const oe=e=>{const t=i=>i[e]||[];return t.isThemeGetter=!0,t},Tf=/^\[(?:([a-z-]+):)?(.+)\]$/i,_y=/^\d+\/\d+$/,Ty=new Set(["px","full","screen"]),wy=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ay=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Iy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Sy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ey=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ct=e=>ha(e)||Ty.has(e)||_y.test(e),Yt=e=>Ia(e,"length",Oy),ha=e=>!!e&&!Number.isNaN(Number(e)),Vr=e=>Ia(e,"number",ha),Ua=e=>!!e&&Number.isInteger(Number(e)),by=e=>e.endsWith("%")&&ha(e.slice(0,-1)),G=e=>Tf.test(e),Ft=e=>wy.test(e),xy=new Set(["length","size","percentage"]),vy=e=>Ia(e,xy,wf),Py=e=>Ia(e,"position",wf),Ny=new Set(["image","url"]),Cy=e=>Ia(e,Ny,jy),Ry=e=>Ia(e,"",ky),Ha=()=>!0,Ia=(e,t,i)=>{const a=Tf.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):i(a[2]):!1},Oy=e=>Ay.test(e)&&!Iy.test(e),wf=()=>!1,ky=e=>Sy.test(e),jy=e=>Ey.test(e),My=()=>{const e=oe("colors"),t=oe("spacing"),i=oe("blur"),a=oe("brightness"),n=oe("borderColor"),l=oe("borderRadius"),r=oe("borderSpacing"),s=oe("borderWidth"),o=oe("contrast"),h=oe("grayscale"),d=oe("hueRotate"),c=oe("invert"),f=oe("gap"),T=oe("gradientColorStops"),A=oe("gradientColorStopPositions"),w=oe("inset"),b=oe("margin"),m=oe("opacity"),u=oe("padding"),p=oe("saturate"),S=oe("scale"),N=oe("sepia"),g=oe("skew"),C=oe("space"),v=oe("translate"),H=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],X=()=>["auto",G,t],D=()=>[G,t],me=()=>["",Ct,Yt],re=()=>["auto",ha,G],ut=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Qe=()=>["solid","dashed","dotted","double","none"],ce=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],O=()=>["start","end","center","between","around","evenly","stretch"],W=()=>["","0",G],B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],F=()=>[ha,G];return{cacheSize:500,separator:":",theme:{colors:[Ha],spacing:[Ct,Yt],blur:["none","",Ft,G],brightness:F(),borderColor:[e],borderRadius:["none","","full",Ft,G],borderSpacing:D(),borderWidth:me(),contrast:F(),grayscale:W(),hueRotate:F(),invert:W(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[by,Yt],inset:X(),margin:X(),opacity:F(),padding:D(),saturate:F(),scale:F(),sepia:W(),skew:F(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",G]}],container:["container"],columns:[{columns:[Ft]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ut(),G]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[w]}],"inset-x":[{"inset-x":[w]}],"inset-y":[{"inset-y":[w]}],start:[{start:[w]}],end:[{end:[w]}],top:[{top:[w]}],right:[{right:[w]}],bottom:[{bottom:[w]}],left:[{left:[w]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ua,G]}],basis:[{basis:X()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",G]}],grow:[{grow:W()}],shrink:[{shrink:W()}],order:[{order:["first","last","none",Ua,G]}],"grid-cols":[{"grid-cols":[Ha]}],"col-start-end":[{col:["auto",{span:["full",Ua,G]},G]}],"col-start":[{"col-start":re()}],"col-end":[{"col-end":re()}],"grid-rows":[{"grid-rows":[Ha]}],"row-start-end":[{row:["auto",{span:[Ua,G]},G]}],"row-start":[{"row-start":re()}],"row-end":[{"row-end":re()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",G]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",G]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...O()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...O(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...O(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[u]}],px:[{px:[u]}],py:[{py:[u]}],ps:[{ps:[u]}],pe:[{pe:[u]}],pt:[{pt:[u]}],pr:[{pr:[u]}],pb:[{pb:[u]}],pl:[{pl:[u]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",G,t]}],"min-w":[{"min-w":[G,t,"min","max","fit"]}],"max-w":[{"max-w":[G,t,"none","full","min","max","fit","prose",{screen:[Ft]},Ft]}],h:[{h:[G,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[G,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[G,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Ft,Yt]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Vr]}],"font-family":[{font:[Ha]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",G]}],"line-clamp":[{"line-clamp":["none",ha,Vr]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ct,G]}],"list-image":[{"list-image":["none",G]}],"list-style-type":[{list:["none","disc","decimal",G]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[m]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[m]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Qe(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ct,Yt]}],"underline-offset":[{"underline-offset":["auto",Ct,G]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",G]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",G]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[m]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ut(),Py]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",vy]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Cy]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[A]}],"gradient-via-pos":[{via:[A]}],"gradient-to-pos":[{to:[A]}],"gradient-from":[{from:[T]}],"gradient-via":[{via:[T]}],"gradient-to":[{to:[T]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[m]}],"border-style":[{border:[...Qe(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[m]}],"divide-style":[{divide:Qe()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-s":[{"border-s":[n]}],"border-color-e":[{"border-e":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...Qe()]}],"outline-offset":[{"outline-offset":[Ct,G]}],"outline-w":[{outline:[Ct,Yt]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:me()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[m]}],"ring-offset-w":[{"ring-offset":[Ct,Yt]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Ft,Ry]}],"shadow-color":[{shadow:[Ha]}],opacity:[{opacity:[m]}],"mix-blend":[{"mix-blend":[...ce(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ce()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[a]}],contrast:[{contrast:[o]}],"drop-shadow":[{"drop-shadow":["","none",Ft,G]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[c]}],saturate:[{saturate:[p]}],sepia:[{sepia:[N]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[o]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[c]}],"backdrop-opacity":[{"backdrop-opacity":[m]}],"backdrop-saturate":[{"backdrop-saturate":[p]}],"backdrop-sepia":[{"backdrop-sepia":[N]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[r]}],"border-spacing-x":[{"border-spacing-x":[r]}],"border-spacing-y":[{"border-spacing-y":[r]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",G]}],duration:[{duration:F()}],ease:[{ease:["linear","in","out","in-out",G]}],delay:[{delay:F()}],animate:[{animate:["none","spin","ping","pulse","bounce",G]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[Ua,G]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[g]}],"skew-y":[{"skew-y":[g]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",G]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",G]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",G]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ct,Yt,Vr]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Vy=gy(My);function Af(...e){return Vy(ny(e))}const Ly=mf("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function Ou({className:e,variant:t,...i}){return R.jsx("div",{className:Af(Ly({variant:t}),e),...i})}function Uy({title:e,titleId:t,...i},a){return E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},i),e?E.createElement("title",{id:t},e):null,E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const Hy=E.forwardRef(Uy);function zy({title:e,titleId:t,...i},a){return E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},i),e?E.createElement("title",{id:t},e):null,E.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))}const Ky=E.forwardRef(zy),Wy=mf("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"bg-white hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Bi=Fu.forwardRef(function({className:t,variant:i,size:a,asChild:n=!1,...l},r){const s=n?Slot:"button";return R.jsx(s,{className:Af(Wy({variant:i,size:a,className:t})),ref:r,...l})});Bi.displayName="Button";const Dy=({product:e,onClose:t})=>{const[i,a]=E.useState(0),[n,l]=E.useState(!1),[r,s]=E.useState(!1),[o,h]=E.useState(!1),d=()=>{a(p=>p===e.images.length-1?0:p+1)},c=()=>{a(p=>p===0?e.images.length-1:p-1)},f=(p,S)=>{const N=p.split(" ");return N.length<=S?p:N.slice(0,S).join(" ")+"..."},T=()=>{l(p=>!p)},A=p=>{p.key==="Escape"&&(r?s(!1):t())};E.useEffect(()=>(window.addEventListener("keydown",A),()=>{window.removeEventListener("keydown",A)}),[r]);const w=()=>{s(p=>!p)},b=()=>R.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-50 flex flex-col md:flex-row",children:[R.jsxs("div",{className:"flex-1 relative",children:[R.jsx("img",{src:e.images[i],alt:e.TITLE,className:"w-full h-full object-contain"}),R.jsx(Bi,{variant:"ghost",size:"icon",className:"absolute top-4 right-4 bg-white hover:bg-opacity-75",onClick:w,children:R.jsx(vu,{className:"h-4 w-4"})})]}),R.jsx("div",{className:"w-full md:w-24 h-24 md:h-full bg-white p-2 overflow-x-auto md:overflow-y-auto flex md:flex-col",children:e.images.map((p,S)=>R.jsx("img",{src:p,alt:`${e.TITLE} - Image ${S+1}`,className:`w-20 h-20 md:w-full md:h-auto object-cover cursor-pointer mr-2 md:mr-0 md:mb-2 ${S===i?"border-2 border-blue-500":""}`,onClick:()=>a(S)},S))})]}),m=e.TAGS.split(",").map(p=>p.replace(/_/g," ").trim()),u=o?m:m.slice(0,4);return R.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:r?R.jsx(b,{}):R.jsxs("div",{className:"bg-white rounded-lg w-full max-w-6xl max-h-[95vh] overflow-hidden flex flex-col md:flex-row",children:[R.jsxs("div",{className:"w-full md:w-1/2 relative",children:[R.jsx("img",{src:e.images[i],alt:e.TITLE,className:"w-full h-64 md:h-full object-cover cursor-zoom-in",onClick:w}),R.jsx(Bi,{variant:"ghost",size:"icon",className:"absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75",onClick:c,children:R.jsx(ey,{className:"h-4 w-4"})}),R.jsx(Bi,{variant:"ghost",size:"icon",className:"absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75",onClick:d,children:R.jsx(ty,{className:"h-4 w-4"})}),R.jsx(Bi,{variant:"ghost",size:"icon",className:"absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75",onClick:w,children:R.jsx(iy,{className:"h-4 w-4"})})]}),R.jsxs("div",{className:"w-full md:w-1/2 p-4 md:p-8 overflow-y-auto",children:[R.jsx(Bi,{variant:"ghost",size:"icon",className:"absolute top-4 right-4 hover:bg-opacity-75",onClick:t,children:R.jsx(vu,{className:"h-4 w-4"})}),R.jsx("h2",{className:"text-base md:text-xl font-poppins font-bold mb-4",children:e.TITLE}),R.jsxs("p",{className:"text-gray-600 mb-4",children:[n?e.DESCRIPTION:f(e.DESCRIPTION,50),R.jsx("button",{onClick:T,className:"text-blue-500 ml-1",children:n?"Read Less":"Read More"})]}),R.jsxs("div",{className:"flex flex-wrap gap-2 mb-4 items-center",children:[u.map(p=>R.jsx(Ou,{variant:"outline",children:p},p)),m.length>4&&!o&&R.jsx("span",{className:"text-blue-500 cursor-pointer text-xs",onClick:()=>h(!0),children:"... More Tags"})]}),o&&R.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[m.slice(4).map(p=>R.jsx(Ou,{variant:"outline",children:p},p)),R.jsx("span",{className:"text-blue-500 cursor-pointer text-xs",onClick:()=>h(!1),children:"Less Tags"})]}),R.jsx("div",{className:"text-sm text-gray-500 bg-green-500 text-white px-2 py-1 rounded-full w-fit",children:"Free Delivery"}),R.jsx("div",{className:"border-t border-gray-300 my-4 mx-2"}),R.jsx("h3",{className:"text-lg font-bold mb-2",children:"Contact Us"}),R.jsx("p",{className:"text-gray-700 mb-4",children:"To purchase the product or for further inquiries, feel free to contact us using the details below."}),R.jsxs(js,{to:"tel:+917006121726",className:"flex font-bold items-center mb-2",children:[R.jsx(Ky,{className:"h-5 w-5 text-gray-500 mr-2"}),R.jsx("span",{className:"text-gray-700",children:"+91 7006121726"})]}),R.jsxs(js,{to:"mailto:salimasgar124@gmail.com",className:"flex font-bold items-center",children:[R.jsx(Hy,{className:"h-5 w-5 text-gray-500 mr-2"}),R.jsx("span",{className:"text-gray-700",children:"salimasgar124@gmail.com"})]})]})]})})},ku=[{TITLE:"Maroon Bridesmaid Set of Pure Pashmina Shawl with Pure Crepe Saree Crafted with Luxury Gold Hand Tilla Zari Embroidery of Kashmir, m361",DESCRIPTION:`Extremely Rare Set of Hand Embroidered Pure Pashmina Shawl and Pure Crepe  Saree
        
About this Set : Introducing MeherPremium Exclusive Set Of hand Embroidered Saree and Shawl, A True Representation  Of Art and Luxury.
Both The Saree and Shawl Are Precisely  Hand Embroidered. Although Hand Embroidered Saree or Shawl is very Rare but This Combo  makes it one of a kind. The Saree Comes with Embroidered Blouse.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Pashmina Shawl and Pure Crepe Saree With Kashmir Tilla Zari Needle Work.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color :Reddish Maroon

Fabric : Saree-Pure Crepe

              Shawl- Pure Pashmina

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse) Saree

           40 x 80 inch Shawl

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1300,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,hand_embroidery,silk_saree,saree_and_shawl,cashmere_wrap,kashmiri_embroidery,women_dresses,original_pashmina,kashmiri_dress,exquisite_embroidery,tilla_Sari,zari,indian_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:35500,images:["https://i.etsystatic.com/25846489/r/il/71a39d/6305379078/il_fullxfull.6305379078_1qu7.jpg","https://i.etsystatic.com/25846489/r/il/852498/6353445963/il_fullxfull.6353445963_mry1.jpg","https://i.etsystatic.com/25846489/r/il/cfcde5/6305379320/il_fullxfull.6305379320_n2xo.jpg","https://i.etsystatic.com/25846489/r/il/bcbb40/6353446019/il_fullxfull.6353446019_coph.jpg","https://i.etsystatic.com/25846489/r/il/428431/6305379062/il_fullxfull.6305379062_4dh5.jpg","https://i.etsystatic.com/25846489/r/il/5d4d61/6353445721/il_fullxfull.6353445721_1rpm.jpg","https://i.etsystatic.com/25846489/r/il/51ea48/6305379084/il_fullxfull.6305379084_rhjw.jpg","https://i.etsystatic.com/25846489/r/il/328e8f/6305379020/il_fullxfull.6305379020_fmsb.jpg","https://i.etsystatic.com/25846489/r/il/c0d3fa/6305379050/il_fullxfull.6305379050_1hdp.jpg"]},{TITLE:"Mustard Pure Crepe Saree With Pure Pashmina Shawl Set, Hand Embroidered, Kashmiri Sozni and Tilla Work, Traditional Dress, SA115",DESCRIPTION:`Extremely Rare Set of Hand Embroidered Pure Pashmina Shawl and Pure Georgette Saree
        
About this Set : Introducing MeherPremium Exclusive Set Of hand Embroidered Saree and Shawl, A True Representation  Of Art and Luxury.
Both The Saree and Shawl Are Precisely  Hand Embroidered. Although Hand Embroidered Saree or Shawl is very Rare but This Combo  makes it one of a kind.

 The Saree Comes with Embroidered Blouse.

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

The Shawl is Hand woven on Wooden Handloom

Base Color: Mustard 
 
Fabric: Saree-Pure Crepe

              Shawl- Pure Pashmina

Care:     - Dry Clean Only.

Size: 6.5 meter (with Blouse) Saree
         40 x 84 inch  / 100 x 213 cm Shawl

Work: Sozni and Tilla Zari Hand Embroidery (Needle Work) 

Traditional very Intricate  Sozni and Tilla  Hand Embroidery Needle Work of Kashmir.

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:2500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,sozni_shawl_saree,hand_embroidery,kashmiri_embroidery,sozni_work,kashmiri_dress,exquisite_embroidery,handmade_saree,cashmere_wrap,Kashmiri_saree,wedding_gifts,saree_luxury,saris",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:66,images:["https://i.etsystatic.com/25846489/r/il/0572f4/6305372214/il_fullxfull.6305372214_slgk.jpg","https://i.etsystatic.com/25846489/r/il/9beac3/6353436953/il_fullxfull.6353436953_8vfq.jpg","https://i.etsystatic.com/25846489/r/il/7b782f/6353437071/il_fullxfull.6353437071_j6oh.jpg","https://i.etsystatic.com/25846489/r/il/a250f0/6305369936/il_fullxfull.6305369936_ne2e.jpg","https://i.etsystatic.com/25846489/r/il/3892fe/6353436775/il_fullxfull.6353436775_k71o.jpg","https://i.etsystatic.com/25846489/r/il/0ee238/6353436735/il_fullxfull.6353436735_7ewd.jpg","https://i.etsystatic.com/25846489/r/il/405d81/6353436743/il_fullxfull.6353436743_k818.jpg","https://i.etsystatic.com/25846489/r/il/df16e2/6353436785/il_fullxfull.6353436785_7kyo.jpg","https://i.etsystatic.com/25846489/r/il/e128fb/6353437067/il_fullxfull.6353437067_sv4x.jpg","https://i.etsystatic.com/25846489/r/il/af13a7/6353436669/il_fullxfull.6353436669_a4t9.jpg"]},{TITLE:"Grey Set of Pure Pashmina Shawl with Pure Crepe Saree Crafted with Luxury Gold Hand Tilla Zari Embroidery of Kashmir, m367",DESCRIPTION:`Extremely Rare Set of Hand Embroidered Pure Pashmina Shawl and Pure Crepe  Saree
        
About this Set : Introducing MeherPremium Exclusive Set Of hand Embroidered Saree and Shawl, A True Representation  Of Art and Luxury.
Both The Saree and Shawl Are Precisely  Hand Embroidered. Although Hand Embroidered Saree or Shawl is very Rare but This Combo  makes it one of a kind. The Saree Comes with Embroidered Blouse.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Pashmina Shawl and Pure Crepe Saree With Kashmir Tilla Zari Needle Work.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Grey

Fabric : Saree-Pure Crepe

              Shawl- Pure Pashmina

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse) Saree

           40 x 80 inch Shawl

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1300,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,hand_embroidery,silk_saree,saree_and_shawl,cashmere_wrap,kashmiri_embroidery,women_dresses,original_pashmina,kashmiri_dress,exquisite_embroidery,tilla_Sari,zari,indian_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:34e3,images:["https://i.etsystatic.com/25846489/r/il/b2b769/6305363362/il_fullxfull.6305363362_1qtm.jpg","https://i.etsystatic.com/25846489/r/il/9bd970/6305363338/il_fullxfull.6305363338_91ft.jpg","https://i.etsystatic.com/25846489/r/il/4a50f4/6305363530/il_fullxfull.6305363530_mn4x.jpg","https://i.etsystatic.com/25846489/r/il/33874b/6353430119/il_fullxfull.6353430119_4dyl.jpg","https://i.etsystatic.com/25846489/r/il/b12db2/6353430103/il_fullxfull.6353430103_tgt7.jpg","https://i.etsystatic.com/25846489/r/il/7ce82d/6353430069/il_fullxfull.6353430069_2c81.jpg","https://i.etsystatic.com/25846489/r/il/520f8e/6353429973/il_fullxfull.6353429973_9ilf.jpg","https://i.etsystatic.com/25846489/r/il/de4ac1/6353429959/il_fullxfull.6353429959_mhg8.jpg","https://i.etsystatic.com/25846489/r/il/e4ab2d/6353429933/il_fullxfull.6353429933_e3a3.jpg","https://i.etsystatic.com/25846489/r/il/d8f3ea/6353429915/il_fullxfull.6353429915_963e.jpg"]},{TITLE:"Ivory Set of Pure Pashmina Shawl with Pure Crepe Saree Crafted with Luxury Gold Hand Tilla Zari Embroidery of Kashmir, m376",DESCRIPTION:`Extremely Rare Set of Hand Embroidered Pure Pashmina Shawl and Pure Crepe  Saree
        
About this Set : Introducing MeherPremium Exclusive Set Of hand Embroidered Saree and Shawl, A True Representation  Of Art and Luxury.
Both The Saree and Shawl Are Precisely  Hand Embroidered. Although Hand Embroidered Saree or Shawl is very Rare but This Combo  makes it one of a kind. The Saree Comes with Embroidered Blouse.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Pashmina Shawl and Pure Crepe Saree With Kashmir Tilla Zari Needle Work.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Ivory

Fabric : Saree-Pure Crepe

              Shawl- Pure Pashmina

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse) Saree

           40 x 80 inch Shawl

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1300,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,hand_embroidery,silk_saree,saree_and_shawl,cashmere_wrap,kashmiri_embroidery,women_dresses,original_pashmina,kashmiri_dress,exquisite_embroidery,tilla_Sari,zari,indian_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:34e3,images:["https://i.etsystatic.com/25846489/r/il/5f3bd2/6353427797/il_fullxfull.6353427797_t0o1.jpg","https://i.etsystatic.com/25846489/r/il/4e36eb/6305358978/il_fullxfull.6305358978_e1ug.jpg","https://i.etsystatic.com/25846489/r/il/15c7ad/6305359302/il_fullxfull.6305359302_114y.jpg","https://i.etsystatic.com/25846489/r/il/733309/6305359334/il_fullxfull.6305359334_lkof.jpg","https://i.etsystatic.com/25846489/r/il/32709a/6353425967/il_fullxfull.6353425967_bb5z.jpg","https://i.etsystatic.com/25846489/r/il/335d7a/6353425639/il_fullxfull.6353425639_75xf.jpg","https://i.etsystatic.com/25846489/r/il/af67a0/6305359284/il_fullxfull.6305359284_e4nf.jpg","https://i.etsystatic.com/25846489/r/il/ca5038/6353425991/il_fullxfull.6353425991_ba9f.jpg","https://i.etsystatic.com/25846489/r/il/752db2/6305359020/il_fullxfull.6305359020_86ux.jpg"]},{TITLE:"Golden Luxury Gold Hand Tilla Zari Embroidery Pure Crepe Kashmir Saree, M375",DESCRIPTION:`Pure Crepe  Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe  Saree with Tilla Zari hand embroidery.

It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Zari Needle Work and  Embroidered Blouse.

Base Color : Golden

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) 

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:650,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_work_sarees,kashmiri_embroidery,indian_saree_blouse,embroidered_saree,gold_tilla_work,party_wear_dress,sarees,ethnic_sari,indian_sarees,pashmina_saree,zari_work,premium_quality,indian_wedding_saris",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16500,images:["https://i.etsystatic.com/25846489/r/il/fe3cb1/6353417025/il_fullxfull.6353417025_a873.jpg","https://i.etsystatic.com/25846489/r/il/9e8170/6353416973/il_fullxfull.6353416973_4h91.jpg","https://i.etsystatic.com/25846489/r/il/5ec2ce/6305350254/il_fullxfull.6305350254_l5k1.jpg","https://i.etsystatic.com/25846489/r/il/947f26/6305350306/il_fullxfull.6305350306_8ziq.jpg","https://i.etsystatic.com/25846489/r/il/5e23f7/6353416909/il_fullxfull.6353416909_k7ze.jpg","https://i.etsystatic.com/25846489/r/il/b6faae/6353416975/il_fullxfull.6353416975_ag0e.jpg","https://i.etsystatic.com/25846489/r/il/33c979/6305350312/il_fullxfull.6305350312_72sc.jpg","https://i.etsystatic.com/25846489/r/il/4b58a5/6353416933/il_fullxfull.6353416933_tlaa.jpg"]},{TITLE:"Pure Crepe Kashmiri Hand Tilla Work Saree in Pink Color | Gold Zari Party Wear Kashmir saree | M380",DESCRIPTION:`Pure Crepe Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe Saree with allover Tilla Zari hand embroidered.
It comes with a attached Unstitched Blouse Piece. 
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Tilla Zari Needle Work and  Embroidered Blouse.

Base Color : Pink

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Gold

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:650,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_dress,saree_for_women,gold_zari_saree,vuitton_scarf,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari,Kashmiri_tilla_saree,silver_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16500,images:["https://i.etsystatic.com/25846489/r/il/1662b9/6353345757/il_fullxfull.6353345757_gudq.jpg","https://i.etsystatic.com/25846489/r/il/00009e/6353345759/il_fullxfull.6353345759_m41d.jpg","https://i.etsystatic.com/25846489/r/il/cadcf9/6305279176/il_fullxfull.6305279176_50cz.jpg","https://i.etsystatic.com/25846489/r/il/9366cd/6305279168/il_fullxfull.6305279168_sxt7.jpg","https://i.etsystatic.com/25846489/r/il/acf2ab/6353345781/il_fullxfull.6353345781_9wtf.jpg","https://i.etsystatic.com/25846489/r/il/71c95c/6305279070/il_fullxfull.6305279070_p2p1.jpg"]},{TITLE:"Pure Crepe Kashmiri Hand Tilla Work Saree in Light Blue Color | Gold Zari Party Wear Kashmir saree | M384",DESCRIPTION:`Pure Crepe Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe Saree with allover Tilla Zari hand embroidered.
It comes with a attached Unstitched Blouse Piece. 
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Tilla Zari Needle Work and  Embroidered Blouse.

Base Color : Greyish Blue

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Gold

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:650,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_dress,saree_for_women,gold_zari_saree,vuitton_scarf,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari,Kashmiri_tilla_saree,silver_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16500,images:["https://i.etsystatic.com/25846489/r/il/9e9609/6305266754/il_fullxfull.6305266754_g5hc.jpg","https://i.etsystatic.com/25846489/r/il/73adef/6353333137/il_fullxfull.6353333137_gf5p.jpg","https://i.etsystatic.com/25846489/r/il/7ce8f8/6305266780/il_fullxfull.6305266780_cfqr.jpg","https://i.etsystatic.com/25846489/r/il/949b23/6305266716/il_fullxfull.6305266716_rrmo.jpg","https://i.etsystatic.com/25846489/r/il/34c4cc/6305266762/il_fullxfull.6305266762_j223.jpg","https://i.etsystatic.com/25846489/r/il/1c46ef/6305266642/il_fullxfull.6305266642_318s.jpg"]},{TITLE:"Pure crepe Kashmiri Sozni Hand Embroidered Sari, m379",DESCRIPTION:`Pure Crepe Hand Embroidered Saree 
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 
We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Hand embroidered saree to add to your graceful closet another deluxe star. this beautiful  Saree will add an unmatched grace to your persona. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Staple thread which forms a plethora of intricate paisleys Design in the saree, each one of them hand embroidered with utmost skill and precision to create a masterpiece that stays with you for life. The royal saree in an Sozni embroidery making it an ideal luxury pick.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Ivory

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree And Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) of Kashmir

Note: 

Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products But there might be a little variation in color due to photographic effects.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:475,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashida_embroidery,sarees,embroidered_sari,sui_jama,unstitched_blouse,kashmiri_sarees,wedding_dresses,gift_for_sister,summer_dresses,traditional_dress,women_wear,woven_fabric,saree",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:12e3,images:["https://i.etsystatic.com/25846489/r/il/906d13/6353329369/il_fullxfull.6353329369_8pwf.jpg","https://i.etsystatic.com/25846489/r/il/4fee1c/6353329301/il_fullxfull.6353329301_r7k5.jpg","https://i.etsystatic.com/25846489/r/il/eda816/6305262954/il_fullxfull.6305262954_650x.jpg","https://i.etsystatic.com/25846489/r/il/bad446/6353329409/il_fullxfull.6353329409_57ks.jpg","https://i.etsystatic.com/25846489/r/il/ffb92a/6353329253/il_fullxfull.6353329253_iqsq.jpg","https://i.etsystatic.com/25846489/r/il/f2e384/6353329371/il_fullxfull.6353329371_f1q4.jpg","https://i.etsystatic.com/25846489/r/il/d3bb12/6353329237/il_fullxfull.6353329237_mcnj.jpg"]},{TITLE:"Turquoise Blue Pure Crepe Kashmiri Saree with Exquisite Hand Tilla Zari, sa125",DESCRIPTION:`Pure Crepe Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe Saree with allover Tilla Zari hand embroidered.
It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Tilla Zari Needle Work and  Embroidered Blouse.

Base Color : Turquoise Blue

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Light Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1125,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Pure_Georgette_Saree,kashmir_dress,tilla_work_saree,saree_for_women,gold_zari_saree,vuitton_scarf,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:28500,images:["https://i.etsystatic.com/25846489/r/il/3ccd1f/6301044080/il_fullxfull.6301044080_c7ek.jpg","https://i.etsystatic.com/25846489/r/il/71be7b/6349105287/il_fullxfull.6349105287_57id.jpg","https://i.etsystatic.com/25846489/r/il/4341b1/6349105309/il_fullxfull.6349105309_52yd.jpg","https://i.etsystatic.com/25846489/r/il/4e6ab9/6349105297/il_fullxfull.6349105297_ni3k.jpg","https://i.etsystatic.com/25846489/r/il/e50a26/6349105135/il_fullxfull.6349105135_psep.jpg","https://i.etsystatic.com/25846489/r/il/4162f2/6301044342/il_fullxfull.6301044342_apxx.jpg","https://i.etsystatic.com/25846489/r/il/9b2a05/6349105589/il_fullxfull.6349105589_1uj3.jpg","https://i.etsystatic.com/25846489/r/il/a254e2/6301044340/il_fullxfull.6301044340_56ti.jpg","https://i.etsystatic.com/25846489/r/il/0df86c/6301044336/il_fullxfull.6301044336_n32w.jpg","https://i.etsystatic.com/25846489/r/il/67055b/6349105099/il_fullxfull.6349105099_1bo0.jpg"]},{TITLE:"Green color Pure Crepe Kashmiri Saree with Sozni Hand Embroidery on Pallu and Border, sm86",DESCRIPTION:`Pure Crepe Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Crepe Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 
Crafted from luxurious pure crepe in a serene ivory hue, this Kashmiri saree is a masterpiece of elegance. Adorned with exquisite Sozni hand embroidery, the pallu and border are embellished with intricate patterns, while allover botis add to its allure. Each stitch reflects the rich cultural heritage and artisanal expertise of Kashmiri craftsmanship. This saree is a timeless symbol of sophistication, perfect for adding a touch of grace to any special occasion or formal event.


The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color :Green

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree
                 Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) of Kashmir

Note: 

Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products But there might be a little variation in color due to photographic effects.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:740,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"traditional_saree,kashmir_saree,hand_embroidery,indian_sarees,crepe_sari,silk_sari,handmade,luxury_dress,gift_for_sister,premium_quality,fine_work,gift_for_her,masterpiece",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19300,images:["https://i.etsystatic.com/25846489/r/il/54a926/6301038938/il_fullxfull.6301038938_kye6.jpg","https://i.etsystatic.com/25846489/r/il/50bbe8/6301038694/il_fullxfull.6301038694_2b6q.jpg","https://i.etsystatic.com/25846489/r/il/b305b8/6349100137/il_fullxfull.6349100137_7s37.jpg","https://i.etsystatic.com/25846489/r/il/3920da/6301038936/il_fullxfull.6301038936_t5sx.jpg","https://i.etsystatic.com/25846489/r/il/76da68/6349100097/il_fullxfull.6349100097_c7hz.jpg","https://i.etsystatic.com/25846489/r/il/88ab67/6349099839/il_fullxfull.6349099839_35aa.jpg"]},{TITLE:"Kashmir Saree With Luxury Light Gold Tilla hand Embroidery, 3 Long Tilla Flower on Pallu, Daaman and Skirt, Completely Handmade, m377",DESCRIPTION:`Pure Crepe Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe Saree with Tilla Zari hand embroidered.
The Saree has Small Tilla Border Embroidery on All Sides Known as "Chuptr" with 3 long Flower Tilla Embroidery on Pallu, daman and Skirt. making
it Attractive Choice for Special Occasion, it also comes with embroidered Blouse Piece.

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Tilla Zari Needle Work and  Embroidered Blouse.

Base Color : Grey

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:651,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_dress,saree_for_women,gold_zari_saree,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,girl_sari,silk_sari,Kashmiri_tilla_saree,silver_tilla,flower_saree,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16500,images:["https://i.etsystatic.com/25846489/r/il/6641ff/6349095433/il_fullxfull.6349095433_6big.jpg","https://i.etsystatic.com/25846489/r/il/2ae4e4/6349095425/il_fullxfull.6349095425_o60l.jpg","https://i.etsystatic.com/25846489/r/il/bd485d/6301034058/il_fullxfull.6301034058_9jdq.jpg","https://i.etsystatic.com/25846489/r/il/92c5a0/6349095459/il_fullxfull.6349095459_22xr.jpg","https://i.etsystatic.com/25846489/r/il/3ebf15/6349095365/il_fullxfull.6349095365_eiob.jpg","https://i.etsystatic.com/25846489/r/il/55b2da/6349095749/il_fullxfull.6349095749_18zs.jpg","https://i.etsystatic.com/25846489/r/il/37fc57/6301034384/il_fullxfull.6301034384_n5cy.jpg","https://i.etsystatic.com/25846489/r/il/4e3865/6349095471/il_fullxfull.6349095471_peap.jpg"]},{TITLE:"Pure Crepe Saree with Kashmiri Sozni Embroidery, m382",DESCRIPTION:`Pure Crepe Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Crepe Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 
Crafted from luxurious pure crepe in a serene ivory hue, this Kashmiri saree is a masterpiece of elegance. Adorned with exquisite Sozni hand embroidery, the pallu and border are embellished with intricate patterns, while allover botis add to its allure. Each stitch reflects the rich cultural heritage and artisanal expertise of Kashmiri craftsmanship. This saree is a timeless symbol of sophistication, perfect for adding a touch of grace to any special occasion or formal event.


The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Onion Pink

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree
                 Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) of Kashmir

Note: 

Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products But there might be a little variation in color due to photographic effects.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:593,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"traditional_saree,kashmir_saree,hand_embroidery,indian_sarees,crepe_sari,silk_sari,handmade,luxury_dress,gift_for_sister,premium_quality,fine_work,gift_for_her,masterpiece",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:15,images:["https://i.etsystatic.com/25846489/r/il/1fa50b/6349084953/il_fullxfull.6349084953_n6tl.jpg","https://i.etsystatic.com/25846489/r/il/afca33/6349084755/il_fullxfull.6349084755_9xcp.jpg","https://i.etsystatic.com/25846489/r/il/986b7d/6349084965/il_fullxfull.6349084965_1ujq.jpg","https://i.etsystatic.com/25846489/r/il/570f5f/6301023682/il_fullxfull.6301023682_9svn.jpg","https://i.etsystatic.com/25846489/r/il/f0f876/6349084935/il_fullxfull.6349084935_4rhb.jpg","https://i.etsystatic.com/25846489/r/il/2c3837/6301023198/il_fullxfull.6301023198_3pbe.jpg"]},{TITLE:"Set of Pure Pashmina Shawl with Pure Crepe Saree Crafted with Luxury Gold Hand Tilla Zari Embroidery of Kashmir, m373",DESCRIPTION:`Extremely Rare Set of Hand Embroidered Pure Pashmina Shawl and Pure Crepe  Saree
        
About this Set : Introducing MeherPremium Exclusive Set Of hand Embroidered Saree and Shawl, A True Representation  Of Art and Luxury.
Both The Saree and Shawl Are Precisely  Hand Embroidered. Although Hand Embroidered Saree or Shawl is very Rare but This Combo  makes it one of a kind. The Saree Comes with Embroidered Blouse.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Pashmina Shawl and Pure Crepe Saree With Kashmir Tilla Zari Needle Work.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Pista Green

Fabric : Saree-Pure Crepe

              Shawl- Pure Pashmina

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse) Saree

           40 x 80 inch Shawl

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1300,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,hand_embroidery,silk_saree,saree_and_shawl,cashmere_wrap,kashmiri_embroidery,women_dresses,original_pashmina,kashmiri_dress,exquisite_embroidery,tilla_Sari,zari,indian_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:35500,images:["https://i.etsystatic.com/25846489/r/il/2fe2c3/6349076583/il_fullxfull.6349076583_hddv.jpg","https://i.etsystatic.com/25846489/r/il/76c55c/6301015374/il_fullxfull.6301015374_l8fr.jpg","https://i.etsystatic.com/25846489/r/il/ef26c7/6301015296/il_fullxfull.6301015296_cdh0.jpg","https://i.etsystatic.com/25846489/r/il/92e70d/6301015590/il_fullxfull.6301015590_rg2p.jpg","https://i.etsystatic.com/25846489/r/il/cdd9c0/6301017046/il_fullxfull.6301017046_7tnw.jpg","https://i.etsystatic.com/25846489/r/il/5b8418/6349076571/il_fullxfull.6349076571_6rug.jpg","https://i.etsystatic.com/25846489/r/il/81d599/6301015572/il_fullxfull.6301015572_ht88.jpg","https://i.etsystatic.com/25846489/r/il/c2849d/6349076393/il_fullxfull.6349076393_jzq3.jpg"]},{TITLE:"Ivory Saree with Kashmiri Kashidakari Sozni Embroidery, Pure Crepe Sari, Handmade, Women dresses, M383",DESCRIPTION:`Pure Crepe Hand Embroidered Saree 
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 
We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Hand embroidered saree to add to your graceful closet another deluxe star. this beautiful  Saree will add an unmatched grace to your persona. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Staple thread which forms a plethora of intricate paisleys Design in the saree, each one of them hand embroidered with utmost skill and precision to create a masterpiece that stays with you for life. The royal saree in an Sozni embroidery making it an ideal luxury pick.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Ivory

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree And Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) of Kashmir

Note: 

Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products But there might be a little variation in color due to photographic effects.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:513,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashida_embroidery,Kasidakari_Pashmina,sarees,embroidered_sari,sui_jama,unstitched_blouse,kashmiri_sarees,wedding_dresses,gift_for_sister,summer_dresses,traditional_dress,women_wear,woven_fabric",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13e3,images:["https://i.etsystatic.com/25846489/r/il/3f63d9/6301007208/il_fullxfull.6301007208_q4aj.jpg","https://i.etsystatic.com/25846489/r/il/3551c7/6301007108/il_fullxfull.6301007108_jw6j.jpg","https://i.etsystatic.com/25846489/r/il/022e94/6349068699/il_fullxfull.6349068699_77wy.jpg","https://i.etsystatic.com/25846489/r/il/b01672/6349068713/il_fullxfull.6349068713_9sm3.jpg","https://i.etsystatic.com/25846489/r/il/a7e278/6301007252/il_fullxfull.6301007252_drp9.jpg","https://i.etsystatic.com/25846489/r/il/d1a912/6349068771/il_fullxfull.6349068771_bsjw.jpg","https://i.etsystatic.com/25846489/r/il/04bc1f/6301007096/il_fullxfull.6301007096_9g7m.jpg"]},{TITLE:"Ivory Pure Crepe Saree with Exquisite Kashmiri Sozni Embroidery, m374",DESCRIPTION:`Pure Crepe Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding

About this Saree : 
This beautiful pure crepe saree features exquisite Kashmiri Sozni embroidery, showcasing intricate patterns in a soft pastel color combination. The delicate craftsmanship adds a touch of elegance and sophistication, making it perfect for both casual and formal occasions. Lightweight and comfortable, the saree drapes gracefully, enhancing your silhouette. Embrace timeless beauty and tradition with this stunning piece, ideal for those who appreciate the artistry of Kashmiri textiles.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Ivory

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work)  of Kashmir

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:730,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmiri_saree,kashida_embroidery,saree,meher_premium,giftforher,woman_wear,traditional_craft,heirloom,Bollywood_Saree,handmade,kashmiri_dress,beige_saree,kashmir_embroidered",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:18500,images:["https://i.etsystatic.com/25846489/r/il/008258/6300996034/il_fullxfull.6300996034_s1q2.jpg","https://i.etsystatic.com/25846489/r/il/137dd3/6349057375/il_fullxfull.6349057375_875r.jpg","https://i.etsystatic.com/25846489/r/il/802ed4/6300996130/il_fullxfull.6300996130_rx80.jpg","https://i.etsystatic.com/25846489/r/il/a51e5e/6300995890/il_fullxfull.6300995890_5mbm.jpg","https://i.etsystatic.com/25846489/r/il/229580/6349057399/il_fullxfull.6349057399_nfsh.jpg","https://i.etsystatic.com/25846489/r/il/94abeb/6349057401/il_fullxfull.6349057401_j7r0.jpg","https://i.etsystatic.com/25846489/r/il/909fd1/6349057123/il_fullxfull.6349057123_87jc.jpg"]},{TITLE:"Navy Blue Pure Georgette Kashmiri Saree with Hand Tilla Zari on Pallu and Border, Adorned with Allover Bootis, sa122",DESCRIPTION:`Pure Georgette Zari Tilla Hand Embroidered Saree 

           "With Hand Embroidered Blouse"

This exquisite pure georgette Kashmiri saree features stunning hand-embroidered Tilla zari work along the pallu and border, showcasing the rich heritage of Kashmiri craftsmanship. The saree is adorned with elegant allover bootis, adding a touch of sophistication and charm. Lightweight and flowy, it drapes beautifully, making it perfect for both festive occasions and formal events. This piece combines traditional artistry with contemporary elegance, ensuring you make a lasting impression wherever you go.

Base Color : Navy Blue

Finish: Unstitched 
 
Fabric :  Pure Georgette Saree And Pure Georgette Blouse

Tilla Color: Light Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1400,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Pure_Georgette_Saree,tilla_work_saree,saree_for_women,gold_zari_saree,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari,tilla_sarees,gift_for_her",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:37e3,images:["https://i.etsystatic.com/25846489/r/il/d48bcf/6300985786/il_fullxfull.6300985786_m8yp.jpg","https://i.etsystatic.com/25846489/r/il/c1c05c/6300985592/il_fullxfull.6300985592_ntll.jpg","https://i.etsystatic.com/25846489/r/il/6c9590/6349046977/il_fullxfull.6349046977_f93n.jpg","https://i.etsystatic.com/25846489/r/il/62393a/6300985796/il_fullxfull.6300985796_rgpm.jpg","https://i.etsystatic.com/25846489/r/il/70c0d4/6300985888/il_fullxfull.6300985888_4ujb.jpg","https://i.etsystatic.com/25846489/r/il/82d273/6349047097/il_fullxfull.6349047097_gn0e.jpg","https://i.etsystatic.com/25846489/r/il/34846f/6300985648/il_fullxfull.6300985648_a430.jpg","https://i.etsystatic.com/25846489/r/il/df9466/6300985858/il_fullxfull.6300985858_8kmm.jpg","https://i.etsystatic.com/25846489/r/il/8ce279/6349046659/il_fullxfull.6349046659_ngb0.jpg"]},{TITLE:"Maroon Pure Crepe Kashmiri Saree with Sozni and Tilla Border Embroidery, Complete with Blouse, sa123",DESCRIPTION:`Pure Crepe Sozni and Tilla Zari  Hand Embroidered Saree

            "With Hand Embroidered Blouse"
 
This pure crepe Kashmiri saree is a stunning showcase of traditional craftsmanship, featuring intricate Sozni and Tilla border embroidery. The delicate work is complemented by two beautifully designed corners, adding a touch of elegance to the overall look. Lightweight and comfortable, this saree drapes gracefully, making it ideal for both festive occasions and everyday wear. Paired with a matching blouse, this ensemble beautifully blends cultural heritage with modern style, ensuring you stand out in any gathering.

The ethnic Saree is crafted in the finesse of Silk, which gives it a glamorous look.

Base Color : Maroon

Finish: Unstitched 
 
Fabric : Pure Crepe Saree 
              Pure Crepe Blouse

Tilla Color: Golden 

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni And Tilla Zari Hand Embroidery (Needle Work) of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1e3,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"bridal_wear,sarees,gifts,handmade,kashmir_saree,pashmina,china_crepe_saree,blouse_girl,Needle_work_saree,pink_sarees,heirloom,hand_embroidery,kashmiri_tilla_saree",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:26e3,images:["https://i.etsystatic.com/25846489/r/il/a7d6df/6300972718/il_fullxfull.6300972718_nw8f.jpg","https://i.etsystatic.com/25846489/r/il/3fd694/6349034165/il_fullxfull.6349034165_qfj1.jpg","https://i.etsystatic.com/25846489/r/il/4b3927/6349034187/il_fullxfull.6349034187_ihec.jpg","https://i.etsystatic.com/25846489/r/il/38f1bd/6349034171/il_fullxfull.6349034171_g2ek.jpg","https://i.etsystatic.com/25846489/r/il/4359a1/6349034133/il_fullxfull.6349034133_lfz3.jpg","https://i.etsystatic.com/25846489/r/il/3f7abe/6300972950/il_fullxfull.6300972950_jrko.jpg","https://i.etsystatic.com/25846489/r/il/db75d2/6300972976/il_fullxfull.6300972976_r4dm.jpg","https://i.etsystatic.com/25846489/r/il/f677c4/6300972648/il_fullxfull.6300972648_9e5e.jpg"]},{TITLE:"Rare Hand-Embroidered Kashmiri Tilla Zari Pashmina Shawl & Pure Crepe Saree Set, sa124, 931",DESCRIPTION:`Extremely Rare Set of Hand Embroidered Pure Pashmina Shawl and Pure Crepe  Saree
        
This extremely rare set features a stunning hand-embroidered Kashmiri Tilla Pashmina shawl paired with a luxurious pure crepe saree. The shawl boasts intricate tilla work, showcasing the exquisite craftsmanship of Kashmiri artisans, while the saree offers a soft, flowing drape perfect for any occasion. Together, they create a harmonious blend of tradition and elegance, making this set a treasured addition to any wardrobe. Ideal for special events or as a statement piece, this ensemble highlights the beauty of Kashmiri heritage.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color :  Black

Fabric : Saree-Pure Crepe

              Shawl- Pure Pashmina

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse) Saree

           40 x 80 inch Shawl

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir
Tilla color : Light Gold

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:2400,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,hand_embroidery,silk_saree,saree_and_shawl,cashmere_wrap,kashmiri_embroidery,women_dresses,original_pashmina,kashmiri_dress,exquisite_embroidery,tilla_Sari,zari,indian_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:66,images:["https://i.etsystatic.com/25846489/r/il/d5674c/6349024721/il_fullxfull.6349024721_epbp.jpg","https://i.etsystatic.com/25846489/r/il/245e4f/6349020767/il_fullxfull.6349020767_7its.jpg","https://i.etsystatic.com/25846489/r/il/92cf56/6349020601/il_fullxfull.6349020601_76ig.jpg","https://i.etsystatic.com/25846489/r/il/2f8d74/6349020735/il_fullxfull.6349020735_2lvg.jpg","https://i.etsystatic.com/25846489/r/il/d034e4/6349020567/il_fullxfull.6349020567_py6x.jpg","https://i.etsystatic.com/25846489/r/il/e358e7/6349020693/il_fullxfull.6349020693_8bmt.jpg","https://i.etsystatic.com/25846489/r/il/9bc06c/6349020659/il_fullxfull.6349020659_i55p.jpg","https://i.etsystatic.com/25846489/r/il/489493/6300959668/il_fullxfull.6300959668_64b9.jpg","https://i.etsystatic.com/25846489/r/il/f94fe1/6300959324/il_fullxfull.6300959324_r4uo.jpg"]},{TITLE:"Pure Crepe Kashmiri Saree with Sozni Border and Floral Accent, Complete with Blouse, M558",DESCRIPTION:`Pure Crepe Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding

This exquisite pure crepe Kashmiri saree showcases intricate Sozni embroidery, featuring a beautifully detailed border with two elegantly adorned corners. The design is enhanced by a single floral motif on the chest, adding a touch of grace and sophistication. Lightweight and luxurious, this saree is perfect for any occasion, combining traditional craftsmanship with contemporary style. Complete the look with a matching blouse for a timeless ensemble.

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Grey

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work)  of Kashmir

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:572,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmiri_saree,kashida_embroidery,saree,meher_premium,giftforher,traditional_craft,heirloom,Bollywood_Saree,handmade,kashmiri_dress,beige_saree,kashmir_embroidered,women_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14500,images:["https://i.etsystatic.com/25846489/r/il/98bc5e/6349016963/il_fullxfull.6349016963_n6x1.jpg","https://i.etsystatic.com/25846489/r/il/5040a5/6300943286/il_fullxfull.6300943286_rixd.jpg","https://i.etsystatic.com/25846489/r/il/42e7f9/6349004285/il_fullxfull.6349004285_43p2.jpg","https://i.etsystatic.com/25846489/r/il/de272f/6300943114/il_fullxfull.6300943114_n8ri.jpg","https://i.etsystatic.com/25846489/r/il/a8d6a1/6300943144/il_fullxfull.6300943144_lg98.jpg","https://i.etsystatic.com/25846489/r/il/5eeb2c/6349004299/il_fullxfull.6349004299_3mrt.jpg","https://i.etsystatic.com/25846489/r/il/83b40d/6349004529/il_fullxfull.6349004529_fyg1.jpg","https://i.etsystatic.com/25846489/r/il/438774/6349004259/il_fullxfull.6349004259_ejew.jpg"]},{TITLE:'40x80" Maroon 100% Pure Pashmina Sozni Border work Shawl, 945',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Color :  Maroon

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 40 x 80 inch     or  100 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:850,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"natural_pashmina,heritage_shawl,collectible_pashmina,cashmere,embroidery_scarves,large_size_pashmina,delicate_embroidery,soft_shawl,for_her,gift_for_mom,mothers_day_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:24e3,images:["https://i.etsystatic.com/25846489/r/il/7e8e9b/6290600136/il_fullxfull.6290600136_14pt.jpg","https://i.etsystatic.com/25846489/r/il/537fe6/6290600146/il_fullxfull.6290600146_8ip0.jpg","https://i.etsystatic.com/25846489/r/il/51fe9b/6290600120/il_fullxfull.6290600120_deim.jpg","https://i.etsystatic.com/25846489/r/il/15683d/6290600122/il_fullxfull.6290600122_1i9j.jpg","https://i.etsystatic.com/25846489/r/il/9bfef5/6290600132/il_fullxfull.6290600132_jh4p.jpg","https://i.etsystatic.com/25846489/r/il/aa0da5/6338656397/il_fullxfull.6338656397_mywi.jpg","https://i.etsystatic.com/25846489/r/il/39dca4/6338656351/il_fullxfull.6338656351_acas.jpg","https://i.etsystatic.com/25846489/r/il/3e4311/6338656425/il_fullxfull.6338656425_ge7k.jpg","https://i.etsystatic.com/25846489/r/il/3d760c/6338656111/il_fullxfull.6338656111_h101.jpg"]},{TITLE:'28x80" Handmade 100% Pure Pashmina Scarf , 262',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Palladar Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Base Color: Navy Blue

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 74x200 cm / 30x80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:382,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna,happy_holi",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9700,images:["https://i.etsystatic.com/25846489/r/il/e4a843/6338653197/il_fullxfull.6338653197_ox3h.jpg","https://i.etsystatic.com/25846489/r/il/ac4832/6290597130/il_fullxfull.6290597130_k2qx.jpg","https://i.etsystatic.com/25846489/r/il/2dc905/6338653137/il_fullxfull.6338653137_e20t.jpg","https://i.etsystatic.com/25846489/r/il/ffc423/6338653145/il_fullxfull.6338653145_efej.jpg","https://i.etsystatic.com/25846489/r/il/5c3fcb/6338653175/il_fullxfull.6338653175_r0xo.jpg","https://i.etsystatic.com/25846489/r/il/de5aee/6290597446/il_fullxfull.6290597446_pqsn.jpg","https://i.etsystatic.com/25846489/r/il/98b386/6290597462/il_fullxfull.6290597462_tfw8.jpg","https://i.etsystatic.com/25846489/r/il/4e1e1d/6338653513/il_fullxfull.6338653513_dyv9.jpg","https://i.etsystatic.com/25846489/r/il/32edff/6290597094/il_fullxfull.6290597094_o1ro.jpg"]},{TITLE:'40x80"  Luxury Hand Tilla Work Pashmina Shawl with Sozni Outline, Handmade in Kashmir, L42',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari along with sozni outline Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Dark Grey

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Silver

Care : -  Gentle Hand Wash Recommended .

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:682,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meher_premium,kashmir_Pashmina,cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,heirloom_wrap,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19200,images:["https://i.etsystatic.com/25846489/r/il/08e164/6290593226/il_fullxfull.6290593226_a4tv.jpg","https://i.etsystatic.com/25846489/r/il/2fed06/6290591032/il_fullxfull.6290591032_sk87.jpg","https://i.etsystatic.com/25846489/r/il/51e0bf/6338647179/il_fullxfull.6338647179_gwx7.jpg","https://i.etsystatic.com/25846489/r/il/836041/6338647159/il_fullxfull.6338647159_lnq9.jpg","https://i.etsystatic.com/25846489/r/il/cff091/6290591130/il_fullxfull.6290591130_aat5.jpg","https://i.etsystatic.com/25846489/r/il/9e2b11/6338647145/il_fullxfull.6338647145_r3nt.jpg","https://i.etsystatic.com/25846489/r/il/dc6e41/6338647445/il_fullxfull.6338647445_3tge.jpg","https://i.etsystatic.com/25846489/r/il/bca1af/6290591414/il_fullxfull.6290591414_bbdp.jpg","https://i.etsystatic.com/25846489/r/il/313ff8/6290591456/il_fullxfull.6290591456_s1ky.jpg","https://i.etsystatic.com/25846489/r/il/64e454/6290591440/il_fullxfull.6290591440_3gjq.jpg"]},{TITLE:'40x80" Pinkl Sozni Border Pure Pashmina Shawl / Wrap / Throw, 933',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan of Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has  Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Pink

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care :  - Dry Clean Only.

Size : 100× 200 cm / 40× 80 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:675,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gifting_item,scarf_embroidery,Persian_shawl,pure_pashmina,mountain_shawl,summer_wrap,handmade,women_shawl,cover_for_winters,scarves,women_fashion,paper_machie,floral_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19,images:["https://i.etsystatic.com/25846489/r/il/f19b1c/6290586012/il_fullxfull.6290586012_l3am.jpg","https://i.etsystatic.com/25846489/r/il/bd06dd/6290586030/il_fullxfull.6290586030_jcwd.jpg","https://i.etsystatic.com/25846489/r/il/cd4ee4/6290586018/il_fullxfull.6290586018_lnmc.jpg","https://i.etsystatic.com/25846489/r/il/361c14/6338642131/il_fullxfull.6338642131_scqa.jpg","https://i.etsystatic.com/25846489/r/il/9a708b/6290585984/il_fullxfull.6290585984_45tg.jpg","https://i.etsystatic.com/25846489/r/il/4864f1/6338642405/il_fullxfull.6338642405_d6ht.jpg","https://i.etsystatic.com/25846489/r/il/4027ee/6290586350/il_fullxfull.6290586350_6tzl.jpg","https://i.etsystatic.com/25846489/r/il/47d9f0/6338642395/il_fullxfull.6338642395_5faz.jpg","https://i.etsystatic.com/25846489/r/il/6d84a2/6338642093/il_fullxfull.6338642093_4veu.jpg"]},{TITLE:'40x80"  Luxury Hand Tilla Work Pashmina Shawl with Sozni Outline, Handmade in Kashmir, L40',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari along with sozni outline Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Turquoise Blue

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Silver

Care : -  Gentle Hand Wash Recommended .

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:682,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meher_premium,kashmir_Pashmina,cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,heirloom_wrap,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19200,images:["https://i.etsystatic.com/25846489/r/il/f868ff/6338635791/il_fullxfull.6338635791_og2y.jpg","https://i.etsystatic.com/25846489/r/il/c3aa18/6290579564/il_fullxfull.6290579564_dpm0.jpg","https://i.etsystatic.com/25846489/r/il/f4944e/6338635809/il_fullxfull.6338635809_rs4i.jpg","https://i.etsystatic.com/25846489/r/il/581cd0/6290579622/il_fullxfull.6290579622_fda7.jpg","https://i.etsystatic.com/25846489/r/il/988349/6290579616/il_fullxfull.6290579616_f1fj.jpg","https://i.etsystatic.com/25846489/r/il/2e8aee/6338636051/il_fullxfull.6338636051_2wcx.jpg","https://i.etsystatic.com/25846489/r/il/e2e36b/6290579842/il_fullxfull.6290579842_aphg.jpg","https://i.etsystatic.com/25846489/r/il/c8e6f9/6338636063/il_fullxfull.6338636063_c8ao.jpg","https://i.etsystatic.com/25846489/r/il/578c51/6338635773/il_fullxfull.6338635773_guly.jpg"]},{TITLE:'40x80" Pure Pashmina Shawl Adorned with Hand Tilla Border and Exquisite Sozni Hand Embroidery, 939',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

The Pashmina shawl with a Tilla border and allover Sozni embroidery epitomizes luxury and craftsmanship. Crafted from fine Pashmina wool, renowned for its softness and warmth, this shawl is adorned with intricate Sozni embroidery, showcasing exquisite floral and paisley motifs meticulously stitched by skilled artisans. The addition of a Tilla border adds a touch of opulence, with delicate gold or silver thread weaving through the edges, enhancing the shawl's elegance. This masterpiece combines traditional techniques with timeless beauty, making it a coveted accessory for those who appreciate artisanal excellence and timeless style.

This Shawl is Handwoven 

Base Color : Black

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :   - Dry Clean Only

Size : 40 x 80 inch / 100 x 200 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1172,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,masterpiece_shawl,jamawar_shawl,kashmir_shawl,bridesmaid_shawl,handmade_scarves,modern_women_wrap,ladies_shawl,cashmere_throw,expensive,exquisite,black_pashmina,diwali_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:31500,images:["https://i.etsystatic.com/25846489/r/il/6b50f7/6290574982/il_fullxfull.6290574982_rgjg.jpg","https://i.etsystatic.com/25846489/r/il/3a024d/6290573072/il_fullxfull.6290573072_np1w.jpg","https://i.etsystatic.com/25846489/r/il/ad393b/6338629405/il_fullxfull.6338629405_3w9u.jpg","https://i.etsystatic.com/25846489/r/il/580107/6338629387/il_fullxfull.6338629387_ry3u.jpg","https://i.etsystatic.com/25846489/r/il/c8eec2/6338629365/il_fullxfull.6338629365_dy34.jpg","https://i.etsystatic.com/25846489/r/il/25900c/6290573158/il_fullxfull.6290573158_ql5c.jpg","https://i.etsystatic.com/25846489/r/il/c2605b/6290573416/il_fullxfull.6290573416_9rce.jpg","https://i.etsystatic.com/25846489/r/il/b4f6f5/6290573444/il_fullxfull.6290573444_7zj2.jpg","https://i.etsystatic.com/25846489/r/il/e3d92a/6290573432/il_fullxfull.6290573432_3qcz.jpg"]},{TITLE:'40x80" Wonderful Sozni Border Pure Pashmina Shawl / Wrap / Throw, L115',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan of Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has  Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Mustard

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care :  - Dry Clean Only.

Size : 100× 200 cm / 40× 80 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:462,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gifting_item,scarf_embroidery,Persian_shawl,pure_pashmina,mountain_shawl,summer_wrap,handmade,women_shawl,cover_for_winters,scarves,women_fashion,paper_machie,floral_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13,images:["https://i.etsystatic.com/25846489/r/il/9e082a/6338621293/il_fullxfull.6338621293_8muy.jpg","https://i.etsystatic.com/25846489/r/il/c81144/6290565336/il_fullxfull.6290565336_dtue.jpg","https://i.etsystatic.com/25846489/r/il/2a967f/6338621345/il_fullxfull.6338621345_aeg8.jpg","https://i.etsystatic.com/25846489/r/il/c7f981/6338621325/il_fullxfull.6338621325_9sza.jpg","https://i.etsystatic.com/25846489/r/il/9a4cbb/6338621313/il_fullxfull.6338621313_4752.jpg","https://i.etsystatic.com/25846489/r/il/abf68d/6338621579/il_fullxfull.6338621579_srvp.jpg","https://i.etsystatic.com/25846489/r/il/0c9598/6290565534/il_fullxfull.6290565534_58f7.jpg","https://i.etsystatic.com/25846489/r/il/1d3397/6290565290/il_fullxfull.6290565290_3xxn.jpg"]},{TITLE:'40x80" Tye Dye Pashmina Shawl with Sozni and Tilla Work Border, L110',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

experience timeless luxury with our pure pashmina shawl, meticulously adorned with exquisite Sozni and Tilla hand embroidery. Crafted by skilled artisans, each intricate design reflects a heritage of craftsmanship and elegance. Perfect for adding a touch of sophistication to any ensemble, our shawl promises both warmth and style, making it a cherished addition to your wardrobe.

This Shawl is Handwoven on Wooden handloom

Base Color : Tye Dye 

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care : - Gentle hand wash Recommended 

Size : 40 x 80 inch / 100 x 200 cm Approx

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:520,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,vuitton_top,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13600,images:["https://i.etsystatic.com/25846489/r/il/7c1bc1/6290534030/il_fullxfull.6290534030_3q9z.jpg","https://i.etsystatic.com/25846489/r/il/32b3b3/6290530724/il_fullxfull.6290530724_eod8.jpg","https://i.etsystatic.com/25846489/r/il/0aaf7a/6338586453/il_fullxfull.6338586453_jinn.jpg","https://i.etsystatic.com/25846489/r/il/a79fea/6338586429/il_fullxfull.6338586429_ckzd.jpg","https://i.etsystatic.com/25846489/r/il/9b9b2c/6338586427/il_fullxfull.6338586427_1f5i.jpg","https://i.etsystatic.com/25846489/r/il/880e1e/6338586747/il_fullxfull.6338586747_iee7.jpg","https://i.etsystatic.com/25846489/r/il/7a75bd/6290530912/il_fullxfull.6290530912_4b3f.jpg","https://i.etsystatic.com/25846489/r/il/dfccb0/6338586751/il_fullxfull.6338586751_427y.jpg","https://i.etsystatic.com/25846489/r/il/fea94a/6290530640/il_fullxfull.6290530640_cw4m.jpg"]},{TITLE:'30x80" Green Bootidaar Sozni Hand-Embroidered Pure Pashmina Scarf, 276',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This exquisite stole s crafted from pure pashmina wool, renowned for its softness and warmth. Adorned with delicate booti patterns, meticulously embroidered using the traditional dorukha sozni technique, each stitch reflects the rich craftsmanship of Kashmiri artisans. The stole combines luxury with cultural heritage, offering elegance and comfort in every detail.

The  Scarf is Handwoven On Handloom

Base Color: Pista Green

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 76 x 200 cm / 30 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:356,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9e3,images:["https://i.etsystatic.com/25846489/r/il/c4d3ff/6290521704/il_fullxfull.6290521704_ekxz.jpg","https://i.etsystatic.com/25846489/r/il/ae2cf9/6338577661/il_fullxfull.6338577661_rih7.jpg","https://i.etsystatic.com/25846489/r/il/8d7794/6290521692/il_fullxfull.6290521692_jen8.jpg","https://i.etsystatic.com/25846489/r/il/b82508/6338577635/il_fullxfull.6338577635_hfap.jpg","https://i.etsystatic.com/25846489/r/il/4cc0bb/6338577581/il_fullxfull.6338577581_hl5g.jpg","https://i.etsystatic.com/25846489/r/il/a843d1/6338577493/il_fullxfull.6338577493_3zzy.jpg"]},{TITLE:'30x80" Yellow Dorukha Bootidaar Sozni Hand-Embroidered Pure Pashmina Scarf, 273',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This exquisite stole s crafted from pure pashmina wool, renowned for its softness and warmth. Adorned with delicate booti patterns, meticulously embroidered using the traditional dorukha sozni technique, each stitch reflects the rich craftsmanship of Kashmiri artisans. The stole combines luxury with cultural heritage, offering elegance and comfort in every detail.

The  Scarf is Handwoven On Handloom

Base Color: Mustard Yellow

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 76 x 200 cm / 30 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:350,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9e3,images:["https://i.etsystatic.com/25846489/r/il/505644/6290518622/il_fullxfull.6290518622_edzc.jpg","https://i.etsystatic.com/25846489/r/il/471cf7/6290518608/il_fullxfull.6290518608_jlue.jpg","https://i.etsystatic.com/25846489/r/il/ee178e/6290518614/il_fullxfull.6290518614_7xdq.jpg","https://i.etsystatic.com/25846489/r/il/c66671/6290518580/il_fullxfull.6290518580_8dap.jpg","https://i.etsystatic.com/25846489/r/il/a38648/6338574479/il_fullxfull.6338574479_b6kt.jpg","https://i.etsystatic.com/25846489/r/il/2ed660/6338574699/il_fullxfull.6338574699_kj9e.jpg","https://i.etsystatic.com/25846489/r/il/1b6c56/6338574525/il_fullxfull.6338574525_ewph.jpg"]},{TITLE:'40x80"  Luxury Hand Tilla Work Pashmina Shawl with Sozni Outline, Handmade in Kashmir, 854',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari along with sozni outline Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Beige

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Golden

Care : -  Gentle Hand Wash Recommended .

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:860,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meher_premium,kashmir_Pashmina,cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,heirloom_wrap,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:24500,images:["https://i.etsystatic.com/25846489/r/il/e83425/6290514882/il_fullxfull.6290514882_my5x.jpg","https://i.etsystatic.com/25846489/r/il/e938d5/6290512964/il_fullxfull.6290512964_flnp.jpg","https://i.etsystatic.com/25846489/r/il/789da8/6338568783/il_fullxfull.6338568783_7d9n.jpg","https://i.etsystatic.com/25846489/r/il/d0e9bf/6290512932/il_fullxfull.6290512932_rafg.jpg","https://i.etsystatic.com/25846489/r/il/7a2e71/6338568629/il_fullxfull.6338568629_v7ss.jpg","https://i.etsystatic.com/25846489/r/il/96c312/6290512948/il_fullxfull.6290512948_9ymm.jpg","https://i.etsystatic.com/25846489/r/il/98537b/6290513100/il_fullxfull.6290513100_8sol.jpg","https://i.etsystatic.com/25846489/r/il/1ce870/6338568893/il_fullxfull.6338568893_9gk3.jpg","https://i.etsystatic.com/25846489/r/il/386e8c/6290514852/il_fullxfull.6290514852_6mum.jpg","https://i.etsystatic.com/25846489/r/il/f29c8a/6290512926/il_fullxfull.6290512926_32ma.jpg"]},{TITLE:'30x80" Turquoise Blue Dorukha Bootidaar Sozni Hand-Embroidered Pure Pashmina Stole, 274',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This exquisite stole s crafted from pure pashmina wool, renowned for its softness and warmth. Adorned with delicate booti patterns, meticulously embroidered using the traditional dorukha sozni technique, each stitch reflects the rich craftsmanship of Kashmiri artisans. The stole combines luxury with cultural heritage, offering elegance and comfort in every detail.

The  Scarf is Handwoven On Handloom

Base Color: Blue

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 76 x 200 cm / 30 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:355,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9e3,images:["https://i.etsystatic.com/25846489/r/il/444658/6338535285/il_fullxfull.6338535285_1kw6.jpg","https://i.etsystatic.com/25846489/r/il/031112/6338533773/il_fullxfull.6338533773_hy8k.jpg","https://i.etsystatic.com/25846489/r/il/6569d4/6338533799/il_fullxfull.6338533799_hawg.jpg","https://i.etsystatic.com/25846489/r/il/c76733/6290478762/il_fullxfull.6290478762_578q.jpg","https://i.etsystatic.com/25846489/r/il/dc5a90/6290478764/il_fullxfull.6290478764_3c77.jpg","https://i.etsystatic.com/25846489/r/il/7c7c6e/6338533925/il_fullxfull.6338533925_hv3a.jpg","https://i.etsystatic.com/25846489/r/il/47995a/6290478896/il_fullxfull.6290478896_8mv0.jpg","https://i.etsystatic.com/25846489/r/il/8c4d8d/6290478740/il_fullxfull.6290478740_ahpp.jpg"]},{TITLE:'40x80"  Authentic Cashmere Pashmina Shawl, Sozni Embroidery with Artistic Colormatching, Border wraps, L114',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Brown

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:520,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,border_shawl,white_pashmina,resham_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14500,images:["https://i.etsystatic.com/25846489/r/il/d61b71/6290475450/il_fullxfull.6290475450_b6mu.jpg","https://i.etsystatic.com/25846489/r/il/fe3dc1/6338528925/il_fullxfull.6338528925_lyy6.jpg","https://i.etsystatic.com/25846489/r/il/7cc9e8/6290474024/il_fullxfull.6290474024_jd9u.jpg","https://i.etsystatic.com/25846489/r/il/32ce55/6338528935/il_fullxfull.6338528935_e86a.jpg","https://i.etsystatic.com/25846489/r/il/97ec1d/6338528907/il_fullxfull.6338528907_ttdr.jpg","https://i.etsystatic.com/25846489/r/il/0ff21a/6290473940/il_fullxfull.6290473940_pde6.jpg","https://i.etsystatic.com/25846489/r/il/823835/6290474034/il_fullxfull.6290474034_7iot.jpg"]},{TITLE:'40x80" Yellow Pure Pashmina Shawl with Sozni and Tilla Border Work, 941',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Yellow

Feel :  soft, lightweight and warm.

Color Of Tilla : Light Golden

Care : - Gentle hand wash Recommended 

Size : 40x80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,christmas_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/c01ae4/6290469192/il_fullxfull.6290469192_k0fn.jpg","https://i.etsystatic.com/25846489/r/il/a8556a/6290468208/il_fullxfull.6290468208_elo9.jpg","https://i.etsystatic.com/25846489/r/il/8220d6/6290468194/il_fullxfull.6290468194_7lm5.jpg","https://i.etsystatic.com/25846489/r/il/53b17c/6338522961/il_fullxfull.6338522961_1c0h.jpg","https://i.etsystatic.com/25846489/r/il/37adca/6338523031/il_fullxfull.6338523031_9u0g.jpg","https://i.etsystatic.com/25846489/r/il/8eaaee/6290468402/il_fullxfull.6290468402_krlo.jpg","https://i.etsystatic.com/25846489/r/il/a6ac3a/6338523207/il_fullxfull.6338523207_5141.jpg","https://i.etsystatic.com/25846489/r/il/52a3e3/6290468416/il_fullxfull.6290468416_6570.jpg","https://i.etsystatic.com/25846489/r/il/1e0934/6290468112/il_fullxfull.6290468112_r63m.jpg"]},{TITLE:'40x80" Beautiful  Black Paisley Shawl, Sozni Tilla Mix Hand Embroidery, Authentic Soft Cashmere Pashmina, Ideal Wedding Scarves, 935',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Maroon

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care :- Dry Clean Only.

Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:880,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,yellow_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25300,images:["https://i.etsystatic.com/25846489/r/il/2c929f/6290464384/il_fullxfull.6290464384_rhjn.jpg","https://i.etsystatic.com/25846489/r/il/771d87/6290462606/il_fullxfull.6290462606_agy1.jpg","https://i.etsystatic.com/25846489/r/il/5d7c7b/6290462556/il_fullxfull.6290462556_c9nj.jpg","https://i.etsystatic.com/25846489/r/il/f40809/6290462622/il_fullxfull.6290462622_1juu.jpg","https://i.etsystatic.com/25846489/r/il/b6cdf0/6338517241/il_fullxfull.6338517241_sp4f.jpg","https://i.etsystatic.com/25846489/r/il/cd0f46/6338517231/il_fullxfull.6338517231_ncow.jpg","https://i.etsystatic.com/25846489/r/il/8eda09/6338517635/il_fullxfull.6338517635_jgdv.jpg","https://i.etsystatic.com/25846489/r/il/b4ce87/6290462938/il_fullxfull.6290462938_dubn.jpg","https://i.etsystatic.com/25846489/r/il/375083/6290462572/il_fullxfull.6290462572_668y.jpg"]},{TITLE:'54x108" XL Luxury Gold Hand Tilla Pure Pashmina Shawl in Black Color, Big Size Kashmiri wrap, Mens Cashmere Scarves, 932',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Tilla Used on this Shawl is of highest quality, hence giving it a luxury look.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Tush

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla :  Gold 

Care :  - Dry Clean Only.

Size : 54 x 108 inch / 137 X 274 cm

Work : Fine Tilla Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1130,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,hand_tilla_zari,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,kashmiri_tilla,men_pashmina,gents_shawl,mens_kashmiri_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:32,images:["https://i.etsystatic.com/25846489/r/il/766c62/6338511053/il_fullxfull.6338511053_njf0.jpg","https://i.etsystatic.com/25846489/r/il/06a27a/6290456258/il_fullxfull.6290456258_tkzk.jpg","https://i.etsystatic.com/25846489/r/il/cacd86/6338511059/il_fullxfull.6338511059_srcp.jpg","https://i.etsystatic.com/25846489/r/il/f171b7/6338511061/il_fullxfull.6338511061_jhse.jpg","https://i.etsystatic.com/25846489/r/il/6dd01f/6290456276/il_fullxfull.6290456276_a524.jpg","https://i.etsystatic.com/25846489/r/il/ee1693/6338511251/il_fullxfull.6338511251_jveh.jpg","https://i.etsystatic.com/25846489/r/il/95bb0e/6290456450/il_fullxfull.6290456450_7fsx.jpg","https://i.etsystatic.com/25846489/r/il/efafc9/6338511255/il_fullxfull.6338511255_5vu2.jpg","https://i.etsystatic.com/25846489/r/il/e7ec18/6338511031/il_fullxfull.6338511031_d6bb.jpg"]},{TITLE:'54x108" XL Designer Chinar Border Kashmir shawl, Unisex Wrap, Big size Pure Pashmina Shawl, 937',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Tush

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 137 × 274 cm / 54 × 108 inch 

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1285,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"shawl_for_men,handmade_items,gifts,gents_pashmina,gents_shawl,pashmina_for_men,big_shawls,oversize_cashmere,sozni_shawl,embroidered,border_shawl,gift_for_husband,grey_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:32e3,images:["https://i.etsystatic.com/25846489/r/il/e52aa5/6338506925/il_fullxfull.6338506925_qgcp.jpg","https://i.etsystatic.com/25846489/r/il/d40984/6338506907/il_fullxfull.6338506907_ktq7.jpg","https://i.etsystatic.com/25846489/r/il/c83324/6338506941/il_fullxfull.6338506941_23qf.jpg","https://i.etsystatic.com/25846489/r/il/173758/6338506927/il_fullxfull.6338506927_haqh.jpg","https://i.etsystatic.com/25846489/r/il/af21e9/6338506915/il_fullxfull.6338506915_eu5d.jpg","https://i.etsystatic.com/25846489/r/il/ffe436/6290452356/il_fullxfull.6290452356_lnxz.jpg","https://i.etsystatic.com/25846489/r/il/90b6a6/6290452332/il_fullxfull.6290452332_hcrq.jpg","https://i.etsystatic.com/25846489/r/il/b04647/6338507185/il_fullxfull.6338507185_sdt6.jpg","https://i.etsystatic.com/25846489/r/il/f395ed/6338507235/il_fullxfull.6338507235_msnd.jpg","https://i.etsystatic.com/25846489/r/il/8ee387/6338506857/il_fullxfull.6338506857_ncu5.jpg"]},{TITLE:'54x108" XL  Pure Pashmina Shawl with Sozni Border for Men, 885',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Handwoven on wooden handloom

Color :  Tush

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108  inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1102,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,gents_grey_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:31,images:["https://i.etsystatic.com/25846489/r/il/48a1e5/6338496335/il_fullxfull.6338496335_hbir.jpg","https://i.etsystatic.com/25846489/r/il/525adf/6290441694/il_fullxfull.6290441694_od20.jpg","https://i.etsystatic.com/25846489/r/il/3b632a/6338496343/il_fullxfull.6338496343_tfej.jpg","https://i.etsystatic.com/25846489/r/il/718d44/6338496321/il_fullxfull.6338496321_igql.jpg","https://i.etsystatic.com/25846489/r/il/9fce9f/6290441732/il_fullxfull.6290441732_qh37.jpg","https://i.etsystatic.com/25846489/r/il/e026ee/6290442040/il_fullxfull.6290442040_89uv.jpg","https://i.etsystatic.com/25846489/r/il/233ee0/6290442018/il_fullxfull.6290442018_2cfc.jpg","https://i.etsystatic.com/25846489/r/il/94a9dd/6338496687/il_fullxfull.6338496687_4gzn.jpg","https://i.etsystatic.com/25846489/r/il/1c0ed0/6338496345/il_fullxfull.6338496345_sd7t.jpg"]},{TITLE:'54x108" XL White Pure Pashmina Shawl with Sozni Border for Men, 947',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

This sophisticated pure pashmina shawl for men features a beautifully crafted sozni border, highlighting traditional Kashmiri craftsmanship. Made from the finest pashmina fibers, it offers unparalleled warmth and softness, making it ideal for cooler weather. The intricate embroidery along the border adds a touch of elegance, elevating any outfit—whether casual or formal. Lightweight yet luxurious, this shawl is a timeless accessory that combines style with comfort, perfect for the modern gentleman.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Handwoven on wooden handloom

Color :  White

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108  inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:980,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,gents_grey_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27500,images:["https://i.etsystatic.com/25846489/r/il/d19afd/6338490281/il_fullxfull.6338490281_petl.jpg","https://i.etsystatic.com/25846489/r/il/a996af/6290435672/il_fullxfull.6290435672_lpjg.jpg","https://i.etsystatic.com/25846489/r/il/9203d4/6338490187/il_fullxfull.6338490187_bpih.jpg","https://i.etsystatic.com/25846489/r/il/0c094b/6338490245/il_fullxfull.6338490245_93yl.jpg","https://i.etsystatic.com/25846489/r/il/982e87/6290435636/il_fullxfull.6290435636_khek.jpg","https://i.etsystatic.com/25846489/r/il/6c891b/6338490427/il_fullxfull.6338490427_lq0f.jpg","https://i.etsystatic.com/25846489/r/il/1c7050/6338490501/il_fullxfull.6338490501_h4n1.jpg","https://i.etsystatic.com/25846489/r/il/0dc012/6338490313/il_fullxfull.6338490313_qlgc.jpg"]},{TITLE:'40x80" Wonderful Sozni Border Pure Pashmina Shawl / Wrap / Throw, L116',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan of Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has  Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Tush color

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care :  - Dry Clean Only.

Size : 100× 200 cm / 40× 80 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:462,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gifting_item,scarf_embroidery,Persian_shawl,pure_pashmina,mountain_shawl,summer_wrap,handmade,women_shawl,cover_for_winters,scarves,women_fashion,paper_machie,floral_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13,images:["https://i.etsystatic.com/25846489/r/il/c3812d/6338483887/il_fullxfull.6338483887_rvpg.jpg","https://i.etsystatic.com/25846489/r/il/11e6ac/6338483961/il_fullxfull.6338483961_3hqj.jpg","https://i.etsystatic.com/25846489/r/il/13f641/6338483967/il_fullxfull.6338483967_j2j6.jpg","https://i.etsystatic.com/25846489/r/il/553aaf/6290429246/il_fullxfull.6290429246_eh4g.jpg","https://i.etsystatic.com/25846489/r/il/f5cefe/6290429250/il_fullxfull.6290429250_gz53.jpg","https://i.etsystatic.com/25846489/r/il/bd135b/6290429324/il_fullxfull.6290429324_agm7.jpg","https://i.etsystatic.com/25846489/r/il/7f6961/6290429136/il_fullxfull.6290429136_nyn9.jpg"]},{TITLE:'30x80" Maroon Bootidaar Sozni Hand-Embroidered Pure Pashmina Scarf, Cashmere Stole,  282',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This exquisite stole s crafted from pure pashmina wool, renowned for its softness and warmth. Adorned with delicate booti patterns, meticulously embroidered using the traditional dorukha sozni technique, each stitch reflects the rich craftsmanship of Kashmiri artisans. The stole combines luxury with cultural heritage, offering elegance and comfort in every detail.

The  Scarf is Handwoven On Handloom

Base Color: Maroon

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 76 x 200 cm / 30 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:356,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9e3,images:["https://i.etsystatic.com/25846489/r/il/aa847f/6290423256/il_fullxfull.6290423256_s6rq.jpg","https://i.etsystatic.com/25846489/r/il/75d178/6290423250/il_fullxfull.6290423250_31pu.jpg","https://i.etsystatic.com/25846489/r/il/6032d4/6290423252/il_fullxfull.6290423252_8ha4.jpg","https://i.etsystatic.com/25846489/r/il/855027/6338477781/il_fullxfull.6338477781_5rr6.jpg","https://i.etsystatic.com/25846489/r/il/29782c/6290423182/il_fullxfull.6290423182_1xpj.jpg","https://i.etsystatic.com/25846489/r/il/37ce3e/6290423336/il_fullxfull.6290423336_nbzx.jpg","https://i.etsystatic.com/25846489/r/il/9d4562/6290423224/il_fullxfull.6290423224_6ihv.jpg"]},{TITLE:'40x80" Baby Pink Pure Pashmina Shawl with Authentic Hand Tilla Zari Embroidery, L119',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This exquisite pure pashmina shawl showcases the rich heritage of Kashmir through its authentic hand tilla zari embroidery. Crafted from the finest pashmina fibers, it offers a luxurious feel and exceptional warmth. The intricate zari work adds a touch of elegance, making it perfect for both formal and casual occasions. Lightweight yet sumptuous, this shawl is not just an accessory but a statement piece that beautifully reflects traditional artistry and timeless style.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven
Color  : Pink

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Care :- Dry Clean Only.

Size : 40x 80 inch / 100 x 200 cm approx

Work : Tilla Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:785,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"hand_embroidery,wedding_gifts,zari_shawl,pure_silver,shiny_pashmina,zari_shawls,gift_items,party_wear,Traditional,Zari_pashmeena,gold_scarves,antique,green_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/4a5a35/6338472887/il_fullxfull.6338472887_r9dd.jpg","https://i.etsystatic.com/25846489/r/il/096517/6290418470/il_fullxfull.6290418470_pk1p.jpg","https://i.etsystatic.com/25846489/r/il/08eabc/6290418412/il_fullxfull.6290418412_3028.jpg","https://i.etsystatic.com/25846489/r/il/09daa6/6290418388/il_fullxfull.6290418388_bo54.jpg","https://i.etsystatic.com/25846489/r/il/80677d/6338472855/il_fullxfull.6338472855_awh4.jpg","https://i.etsystatic.com/25846489/r/il/99ed63/6290418596/il_fullxfull.6290418596_ejmz.jpg","https://i.etsystatic.com/25846489/r/il/f1fcb1/6338472857/il_fullxfull.6338472857_rik8.jpg"]},{TITLE:'40x80" Beautiful Turquoise Blue Paisley Shawl, Sozni Tilla Mix Hand Embroidery, Authentic Soft Cashmere Pashmina, Ideal Wedding Scarves, 948',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Turquoise blue

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care :- Dry Clean Only.

Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:880,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,yellow_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25300,images:["https://i.etsystatic.com/25846489/r/il/d80d9a/6338466889/il_fullxfull.6338466889_ck0d.jpg","https://i.etsystatic.com/25846489/r/il/8d572d/6290412354/il_fullxfull.6290412354_585q.jpg","https://i.etsystatic.com/25846489/r/il/7c16b9/6338466881/il_fullxfull.6338466881_qniv.jpg","https://i.etsystatic.com/25846489/r/il/3c3b25/6290412346/il_fullxfull.6290412346_1wxq.jpg","https://i.etsystatic.com/25846489/r/il/cff804/6338466863/il_fullxfull.6338466863_dmxe.jpg","https://i.etsystatic.com/25846489/r/il/20d667/6338467111/il_fullxfull.6338467111_c06y.jpg","https://i.etsystatic.com/25846489/r/il/d30cb5/6338467131/il_fullxfull.6338467131_f7q4.jpg","https://i.etsystatic.com/25846489/r/il/bc614a/6338466859/il_fullxfull.6338466859_azoa.jpg"]},{TITLE:'30x80" Bottle Green Bootidaar Sozni Hand-Embroidered Pure Pashmina Scarf, Cashmere Stole,  281',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This exquisite stole s crafted from pure pashmina wool, renowned for its softness and warmth. Adorned with delicate booti patterns, meticulously embroidered using the traditional dorukha sozni technique, each stitch reflects the rich craftsmanship of Kashmiri artisans. The stole combines luxury with cultural heritage, offering elegance and comfort in every detail.

The  Scarf is Handwoven On Handloom

Base Color: bottle  Green

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 76 x 200 cm / 30 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:356,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9e3,images:["https://i.etsystatic.com/25846489/r/il/67e1ce/6290408218/il_fullxfull.6290408218_mbsp.jpg","https://i.etsystatic.com/25846489/r/il/07356d/6290407000/il_fullxfull.6290407000_ctsb.jpg","https://i.etsystatic.com/25846489/r/il/58fba0/6338461749/il_fullxfull.6338461749_if37.jpg","https://i.etsystatic.com/25846489/r/il/33cad4/6338461683/il_fullxfull.6338461683_kpb9.jpg","https://i.etsystatic.com/25846489/r/il/0becd8/6338461645/il_fullxfull.6338461645_ez0n.jpg","https://i.etsystatic.com/25846489/r/il/feb6fd/6290407118/il_fullxfull.6290407118_fxu9.jpg","https://i.etsystatic.com/25846489/r/il/1db4d8/6290407150/il_fullxfull.6290407150_5rp5.jpg","https://i.etsystatic.com/25846489/r/il/9adc8a/6338461711/il_fullxfull.6338461711_lk6r.jpg"]},{TITLE:'40x80" Beautiful Yellow Pure Pashmina Shawl with Sozni and Tilla Border Work, L113',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : mustard Yellow

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care : - Gentle hand wash Recommended 

Size : 40 x 80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:630,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,summer_wrap",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:18200,images:["https://i.etsystatic.com/25846489/r/il/3c9e83/6338456999/il_fullxfull.6338456999_63sy.jpg","https://i.etsystatic.com/25846489/r/il/299aa7/6290402394/il_fullxfull.6290402394_hb78.jpg","https://i.etsystatic.com/25846489/r/il/805cc0/6290402406/il_fullxfull.6290402406_rwrn.jpg","https://i.etsystatic.com/25846489/r/il/1a4050/6338456887/il_fullxfull.6338456887_m39z.jpg","https://i.etsystatic.com/25846489/r/il/1b568f/6290402416/il_fullxfull.6290402416_17v5.jpg","https://i.etsystatic.com/25846489/r/il/016049/6290402492/il_fullxfull.6290402492_smmb.jpg","https://i.etsystatic.com/25846489/r/il/48dd0d/6338457179/il_fullxfull.6338457179_dseu.jpg","https://i.etsystatic.com/25846489/r/il/c80302/6290402338/il_fullxfull.6290402338_i1rq.jpg"]},{TITLE:'40x80" Beautiful Pure Pashmina Shawl with Sozni and Tilla Border Work, 936',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Peach

Feel :  soft, lightweight and warm.

Color Of Tilla : Light Golden

Care : - Gentle hand wash Recommended 

Size : 40x80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,christmas_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/591394/6338447133/il_fullxfull.6338447133_iswv.jpg","https://i.etsystatic.com/25846489/r/il/b740ef/6338447391/il_fullxfull.6338447391_pwcj.jpg","https://i.etsystatic.com/25846489/r/il/f31e74/6338447137/il_fullxfull.6338447137_rmuq.jpg","https://i.etsystatic.com/25846489/r/il/7c67ba/6290392566/il_fullxfull.6290392566_h1gc.jpg","https://i.etsystatic.com/25846489/r/il/95780b/6290392330/il_fullxfull.6290392330_dt2c.jpg","https://i.etsystatic.com/25846489/r/il/98407c/6338447131/il_fullxfull.6338447131_bmy6.jpg","https://i.etsystatic.com/25846489/r/il/220fb5/6338447097/il_fullxfull.6338447097_ldje.jpg","https://i.etsystatic.com/25846489/r/il/520be3/6338447375/il_fullxfull.6338447375_rz4o.jpg","https://i.etsystatic.com/25846489/r/il/ce9bf2/6338447389/il_fullxfull.6338447389_lcs8.jpg","https://i.etsystatic.com/25846489/r/il/6f0576/6338447109/il_fullxfull.6338447109_qf1s.jpg"]},{TITLE:'43x86" Pure Cashmere Pashmina Shawl with Allover Sozni Embroidery, Handwoven, 943',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl(100% Cashmere)  with Sozni Jamawar  hand embroidery (NeedleWork)

Sozni embroidery is a traditional craft of Kashmir, India, known for its intricate and delicate needlework. Sozni Pashmina shawls are highly prized for their fine quality and exquisite designs. These shawls are made from Pashmina wool, which is obtained from the undercoat of the Pashmina goat, renowned for its softness and warmth.

The process of creating a Sozni Pashmina shawl involves skilled artisans meticulously embroidering intricate patterns onto the fabric using a fine needle and colorful threads. The designs often feature motifs inspired by nature, such as flowers, leaves, and paisleys, as well as geometric patterns and intricate borders.

Each Sozni Pashmina shawl is a labor of love, taking weeks or even months to complete depending on the complexity of the design. The result is a luxurious accessory prized for its beauty, craftsmanship, and warmth, making it a coveted item for both personal use and gifting.

Base Color : Red  

Weave : Tight

Feel :   soft, lightweight and warm.
 
Care : - Dry Clean Only.

Size : 40 × 80 inch / 100 × 200 cm Approx

Work : Sozni  Hand Embroidery(Needle Work)

NOTE:
 We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1200,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"SozniEmbroidery,Jamawar,PashminaShawl,KashmiriCraft,Handcrafted,LuxuryFashion,Ethnic_Fashion,Artisanal,TraditionalCraft,Embroidered_Shawl,Heritage_Craft,WarmthAndStyle,Exquisite_Designs",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:32e3,images:["https://i.etsystatic.com/25846489/r/il/2646b9/6290386452/il_fullxfull.6290386452_3gix.jpg","https://i.etsystatic.com/25846489/r/il/6d1801/6290386466/il_fullxfull.6290386466_gnvn.jpg","https://i.etsystatic.com/25846489/r/il/8f1c7d/6338441271/il_fullxfull.6338441271_dw4w.jpg","https://i.etsystatic.com/25846489/r/il/a1df73/6338441301/il_fullxfull.6338441301_m3eg.jpg","https://i.etsystatic.com/25846489/r/il/57d96d/6290386440/il_fullxfull.6290386440_q9v7.jpg","https://i.etsystatic.com/25846489/r/il/6e3dcb/6290386460/il_fullxfull.6290386460_5284.jpg","https://i.etsystatic.com/25846489/r/il/04a855/6338441541/il_fullxfull.6338441541_bta9.jpg","https://i.etsystatic.com/25846489/r/il/0df39f/6290386644/il_fullxfull.6290386644_c68j.jpg"]},{TITLE:'54x108" Big Size Grand Pashmina Shawl with Delicate Sozni Jama Embroidery, Kashmir Shawl Handwoven, King of Wool, sm84',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This luxurious pure cashmere pashmina shawl is designed for men, offering a generous size that provides warmth and elegance. Adorned with intricate sozni allover hand embroidery, it showcases exquisite craftsmanship and traditional artistry from Kashmir. Perfect for layering, this shawl combines comfort with timeless style, making it an ideal accessory for both formal and casual occasions.

This Shawl is Handwoven on Wooden Handloom

Base Color : Black
 
Weave : Tight

Feel :  soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 54 x 108 inch / 137 x 274  cm / 3 yards

Work : Sozni needle work

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:3e3,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"3_yards_shawl,gents_pashmina,sober_shawls,pure_pashmina,cashmere_wraps,gift_for_he,handmade,exquisite_special,unique,meher_premium,special_shawls,Christmas_gift,sozni_jamawar",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:90500,images:["https://i.etsystatic.com/25846489/r/il/ad2e79/6338433649/il_fullxfull.6338433649_rxtf.jpg","https://i.etsystatic.com/25846489/r/il/2d048d/6290379030/il_fullxfull.6290379030_fv13.jpg","https://i.etsystatic.com/25846489/r/il/9c9c0e/6338433643/il_fullxfull.6338433643_6ykt.jpg","https://i.etsystatic.com/25846489/r/il/c19a14/6290378956/il_fullxfull.6290378956_9vvz.jpg","https://i.etsystatic.com/25846489/r/il/45d792/6290378932/il_fullxfull.6290378932_1yb8.jpg","https://i.etsystatic.com/25846489/r/il/c89699/6338433673/il_fullxfull.6338433673_p189.jpg","https://i.etsystatic.com/25846489/r/il/6acb96/6290379154/il_fullxfull.6290379154_j0di.jpg"]},{TITLE:'40x80"  Handcrafted Tye Dye Pashmina Shawl with Allover Zari hand Embroidery of Kashmir, SK',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl With Metallic TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Indulge in the timeless elegance of this maroon shawl crafted from pure pashmina, exquisitely adorned with intricate Kashmiri hand embroidery. Each stitch tells a story, woven with delicate golden tilla zari threads, adding a touch of opulence and sophistication. Wrap yourself in luxury and tradition with this masterpiece, perfect for adding a regal flair to any ensemble.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Tye Dye ( White and Brown)

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Golden

Tilla Quality : Guaranteed

Care : -Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1600,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Handmade_Wrap,hand_tilla_zari,Tilla_Zari_pashmina,antique_shawl,ladakh_pashmina,meher_premium,pink_pashmina_shawl,cashmere_throw,tilla_jamawar,real_pashmina,kashmiri_embroidery,exquisite_shawls,wedding_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:48e3,images:["https://i.etsystatic.com/25846489/r/il/b6437f/6338424665/il_fullxfull.6338424665_onsd.jpg","https://i.etsystatic.com/25846489/r/il/b3ab1c/6290369886/il_fullxfull.6290369886_fz8n.jpg","https://i.etsystatic.com/25846489/r/il/a61a5e/6338424537/il_fullxfull.6338424537_kxce.jpg","https://i.etsystatic.com/25846489/r/il/0a77d2/6290369714/il_fullxfull.6290369714_dce0.jpg","https://i.etsystatic.com/25846489/r/il/0d091d/6338424669/il_fullxfull.6338424669_4ju4.jpg","https://i.etsystatic.com/25846489/r/il/97275f/6338424595/il_fullxfull.6338424595_b2qe.jpg","https://i.etsystatic.com/25846489/r/il/71bbe3/6290369620/il_fullxfull.6290369620_rxas.jpg","https://i.etsystatic.com/25846489/r/il/93df9a/6338424745/il_fullxfull.6338424745_pqt2.jpg"]},{TITLE:'40x80" Multicolor Jaaldaar Sozni Hand Embroidery on Pink Pure Pashmina Shawl, L92',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

The pure pashmina shawl with multicolor jaaldaar Sozni hand embroidery is a luxurious and exquisite piece of craftsmanship. Handwoven from pure pashmina wool, known for its softness and warmth, this shawl features intricate Sozni embroidery in a multicolor jaaldaar pattern. Each stitch is meticulously done by hand, showcasing the skill and artistry of Kashmiri artisans. The vibrant colors and intricate detailing of the embroidery add a touch of elegance and sophistication to the timeless beauty of the pashmina shawl, making it a cherished accessory for any occasion.

This Shawl is Handwoven 

Base Color : Pink

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:516,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"mothers_gift,pashmina_shawls,allover_work,sozni_shawl,engagement_gifts,scarf_for_winter,hand_embroidered,cashmere_shawl,best_shop,autumn_shawls,wedding_favors,boho_clothing,grey_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/7f2904/6047093963/il_fullxfull.6047093963_iqb0.jpg","https://i.etsystatic.com/25846489/r/il/10ad96/6047092057/il_fullxfull.6047092057_1ovj.jpg","https://i.etsystatic.com/25846489/r/il/847470/6047092143/il_fullxfull.6047092143_jk4k.jpg","https://i.etsystatic.com/25846489/r/il/d45200/6047092203/il_fullxfull.6047092203_sgz8.jpg","https://i.etsystatic.com/25846489/r/il/49707e/5999017678/il_fullxfull.5999017678_dfyv.jpg","https://i.etsystatic.com/25846489/r/il/30f483/5999017688/il_fullxfull.5999017688_r4iw.jpg","https://i.etsystatic.com/25846489/r/il/570083/6047092145/il_fullxfull.6047092145_qv4k.jpg","https://i.etsystatic.com/25846489/r/il/3ddff1/6047092157/il_fullxfull.6047092157_egtd.jpg","https://i.etsystatic.com/25846489/r/il/aa6589/6047092167/il_fullxfull.6047092167_eebx.jpg"]},{TITLE:"Dual Shade Silver Kashmiri Tilla and Sozni Pure Georgette Hand Embroidered saree, Indian Woman Wedding Sari, N311",DESCRIPTION:`Pure Gerogette Tilla And Sozni Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Georgette Saree with Tilla Zari and sozni hand embroidered.
It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Georgette Saree With Kashmir Zari Needle Work and  Embroidered Blouse.

Base Color : Dual Shade(Ferozi and Blue)

Finish: Unstitched 
 
Fabric :  Pure Georgette Saree And Pure Georgette Blouse

Tilla Color: Silver

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1094,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"women_saris,georgette_silk_saree,kashmiri_embroidery,indian_saree_blouse,embroidered_saree,wedding_sarees,meherpremium_sarees,party_wear_dress,zari_saree,silver_hand_tilla,double_color_sarees,antique_sarees,happy_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/92d055/3487891191/il_fullxfull.3487891191_jw3a.jpg","https://i.etsystatic.com/25846489/r/il/87cb8c/3224889547/il_fullxfull.3224889547_dbee.jpg","https://i.etsystatic.com/25846489/r/il/241755/3224889363/il_fullxfull.3224889363_dxlq.jpg","https://i.etsystatic.com/25846489/r/il/790803/3224889453/il_fullxfull.3224889453_kz0t.jpg","https://i.etsystatic.com/25846489/r/il/7a0517/3224889499/il_fullxfull.3224889499_1cz3.jpg","https://i.etsystatic.com/25846489/r/il/ad8d6c/3224889589/il_fullxfull.3224889589_pnza.jpg","https://i.etsystatic.com/25846489/r/il/e917f1/3224889617/il_fullxfull.3224889617_gnmj.jpg","https://i.etsystatic.com/25846489/r/il/8628f2/3177182462/il_fullxfull.3177182462_jgn9.jpg"]},{TITLE:"Completely Kashmir Handmade Pure Crepe Saree , Hand Embroidery by Kashmiri Artisans, Aari Sozni Work Blend, Indian Ethnic Dress, SA3",DESCRIPTION:`Pure Crepe Exquisite Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 

We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Hand embroidered saree to add to your graceful closet another deluxe star. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Cotton thread which forms a plethora of intricate Designs in the saree. A perfect match for the awesome stylish you, who loves to stay in tune with the latest trend but is also in love with the ethnic style saree. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Rust 

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree And Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Aari and Sozni Hand Embroidery (Needle Work) of Kashmir.

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1142,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_sarees,handmade_sari,saree_sale,handcrafted,wedding_sarees,pure_georgette_silk,summer_sarees,valentines_day_gift,gift_for_her,indian_sarees,kashmir_work_sari,aari_sarees,rust_color",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/02017f/3662113785/il_fullxfull.3662113785_jtjv.jpg","https://i.etsystatic.com/25846489/r/il/62e0f8/3614500542/il_fullxfull.3614500542_p73t.jpg","https://i.etsystatic.com/25846489/r/il/566f3d/3662111951/il_fullxfull.3662111951_31r8.jpg","https://i.etsystatic.com/25846489/r/il/59e529/3662112091/il_fullxfull.3662112091_fue5.jpg","https://i.etsystatic.com/25846489/r/il/c51b70/3614500586/il_fullxfull.3614500586_ov2i.jpg","https://i.etsystatic.com/25846489/r/il/851728/3662112087/il_fullxfull.3662112087_douh.jpg","https://i.etsystatic.com/25846489/r/il/52894c/3614500382/il_fullxfull.3614500382_dcww.jpg","https://i.etsystatic.com/25846489/r/il/f4d6c5/3614500410/il_fullxfull.3614500410_89tj.jpg","https://i.etsystatic.com/25846489/r/il/a450ac/3662111949/il_fullxfull.3662111949_fbvr.jpg","https://i.etsystatic.com/25846489/r/il/8c0877/3614500380/il_fullxfull.3614500380_gt5w.jpg"]},{TITLE:"Navy Blue Kashmiri Sozni and Tilla Hand Embroidered Pure Georgette Saree, 1926",DESCRIPTION:`Pure Georgette Sozni and Tilla  Hand Embroidered Saree

            "With Hand Embroidered Blouse"
 
Stunning Hand Embroidered Kashmiri Saree, which you can wear at any Occasion

About this Saree :Adorn this gorgeous Extremely Rare Navy Blue Pure Georgette Masterpiece Saree with Kashmiri Sozni and  Tilla Hand Embroidery on the Corner and all along the border add to the beauty of this Brilliant Saree that is surely going to be a signature element in your wardrobe. It comes with a Navy Blue Blouse piece in Pure Georgette with Sozni and Tilla Zari Hand Embroidery

The ethnic Saree is crafted in the finesse of Silk, which gives it a glamorous look.

Base Color : Navy Blue

Finish: Unstitched 
 
Fabric : Pure Georgette  Saree 
              Pure Georgette Blouse

Tilla Color: Golden and Silver

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni And Tilla  Hand Embroidery (Needle Work)  of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1259,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"handmade_silk_sari,kashmiri_work_saree,exquisite_embroidery,wedding_sarees,Saree_blouse,luxury_indian_dress,indian_fashion,royal_textile,personal_jewellery,gift_for_mom,hand_embroidery,zardosi,bollywood_dresses",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/3ea83b/3391855878/il_fullxfull.3391855878_2q32.jpg","https://i.etsystatic.com/25846489/r/il/5605eb/3138152098/il_fullxfull.3138152098_b52n.jpg","https://i.etsystatic.com/25846489/r/il/328bdc/3138152042/il_fullxfull.3138152042_7r1g.jpg","https://i.etsystatic.com/25846489/r/il/4e1c3c/3138152130/il_fullxfull.3138152130_drp0.jpg","https://i.etsystatic.com/25846489/r/il/5d6f3f/3138152112/il_fullxfull.3138152112_ifr5.jpg","https://i.etsystatic.com/25846489/r/il/f06482/3138151992/il_fullxfull.3138151992_ayj1.jpg","https://i.etsystatic.com/25846489/r/il/c0ca99/3185873775/il_fullxfull.3185873775_866x.jpg","https://i.etsystatic.com/25846489/r/il/9ee0bd/3185873887/il_fullxfull.3185873887_kul1.jpg"]},{TITLE:"Diwali Special Hand Embroidered Pure Georgette Kashmiri Saree, Sozni Tilla Aari Combination, N391",DESCRIPTION:`Pure Georgette Exquisite Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 

We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Green Hand embroidered saree to add to your graceful closet another deluxe star. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Cotton And Mettalic Tilla thread which forms a plethora of intricate paisleys Design Border and Corner in the saree, each one of them hand embroidered with utmost skill and precision to create a masterpiece that stays with you for life. A perfect match for the awesome stylish you, who loves to stay in tune with the latest trend but is also in love with the ethnic style saree. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.


Base Color : Turquoise Green

Finish: Unstitched Blouse
 
Fabric :   Pure Georgette Saree And Pure Georgette Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni, Tilla and Aari Hand Embroidery (Needle Work) 

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1410,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_silk_saree,sarees_for_women,sozni_sarees,embroidered_saree,exquisite_saree,sarees_for_weddings,sozni_saree,handtilla_aari_saree,luxury_gifts,indian_embroidery,thread_work_sarees,diwali_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/e100bd/3423250982/il_fullxfull.3423250982_tlbz.jpg","https://i.etsystatic.com/25846489/r/il/076822/3164123118/il_fullxfull.3164123118_msbw.jpg","https://i.etsystatic.com/25846489/r/il/8931af/3211833057/il_fullxfull.3211833057_i4ys.jpg","https://i.etsystatic.com/25846489/r/il/34b30c/3211833065/il_fullxfull.3211833065_jgo2.jpg","https://i.etsystatic.com/25846489/r/il/933839/3164119980/il_fullxfull.3164119980_ff1f.jpg","https://i.etsystatic.com/25846489/r/il/f44d91/3164119956/il_fullxfull.3164119956_k7x8.jpg","https://i.etsystatic.com/25846489/r/il/9cc65e/3211832959/il_fullxfull.3211832959_qi0x.jpg","https://i.etsystatic.com/25846489/r/il/ce08a5/3164119436/il_fullxfull.3164119436_sl7q.jpg"]},{TITLE:'45x90" Large Size Handcrafted Tilla Border and Sozni Jama on Pure Pashmina Shawl, 890',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Brown

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :   - Dry Clean Only

Size : 45 x 90 inch / 114 x 224 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1495,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,masterpiece_shawl,jamawar_shawl,kashmir_shawl,bridesmaid_shawl,handmade_scarves,modern_women_wrap,ladies_shawl,cashmere_throw,expensive,exquisite,black_pashmina,diwali_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42,images:["https://i.etsystatic.com/25846489/r/il/cad1b3/6047079049/il_fullxfull.6047079049_f6ti.jpg","https://i.etsystatic.com/25846489/r/il/16f257/6047079239/il_fullxfull.6047079239_tq97.jpg","https://i.etsystatic.com/25846489/r/il/7ca08c/6047079017/il_fullxfull.6047079017_f7ci.jpg","https://i.etsystatic.com/25846489/r/il/63a150/5999004864/il_fullxfull.5999004864_ovvq.jpg","https://i.etsystatic.com/25846489/r/il/3ca9d1/5999004858/il_fullxfull.5999004858_pd6s.jpg","https://i.etsystatic.com/25846489/r/il/7683a7/6047078743/il_fullxfull.6047078743_ek15.jpg","https://i.etsystatic.com/25846489/r/il/103b48/5999004706/il_fullxfull.5999004706_duoa.jpg","https://i.etsystatic.com/25846489/r/il/36628f/6047079171/il_fullxfull.6047079171_rkdt.jpg","https://i.etsystatic.com/25846489/r/il/7ef6d3/6047079191/il_fullxfull.6047079191_blhu.jpg","https://i.etsystatic.com/25846489/r/il/3e1614/5999004832/il_fullxfull.5999004832_euzj.jpg"]},{TITLE:'45x90" Bottle Green Large Size Handcrafted Tilla Border and Sozni Jama on Pure Pashmina Shawl, 892',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Bottle Green

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :   - Dry Clean Only

Size : 45 x 90 inch / 114 x 224 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1495,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,masterpiece_shawl,jamawar_shawl,kashmir_shawl,bridesmaid_shawl,handmade_scarves,modern_women_wrap,ladies_shawl,cashmere_throw,expensive,exquisite,black_pashmina,diwali_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42,images:["https://i.etsystatic.com/25846489/r/il/d99e58/6047088715/il_fullxfull.6047088715_tjka.jpg","https://i.etsystatic.com/25846489/r/il/5ddd48/5999014138/il_fullxfull.5999014138_asz3.jpg","https://i.etsystatic.com/25846489/r/il/d783a6/5999014112/il_fullxfull.5999014112_qa7z.jpg","https://i.etsystatic.com/25846489/r/il/4a2e07/5999014346/il_fullxfull.5999014346_6eyg.jpg","https://i.etsystatic.com/25846489/r/il/1f4c69/6047088891/il_fullxfull.6047088891_f3n7.jpg","https://i.etsystatic.com/25846489/r/il/5bc8aa/5999014344/il_fullxfull.5999014344_80ww.jpg","https://i.etsystatic.com/25846489/r/il/41c95e/6047088885/il_fullxfull.6047088885_bd4k.jpg","https://i.etsystatic.com/25846489/r/il/352586/6047088739/il_fullxfull.6047088739_4rsk.jpg","https://i.etsystatic.com/25846489/r/il/d9f261/5999014164/il_fullxfull.5999014164_e1nn.jpg","https://i.etsystatic.com/25846489/r/il/d2d5b0/6047088681/il_fullxfull.6047088681_r6xf.jpg"]},{TITLE:'45x90" Turquoise Blue Large Size Handcrafted Tilla Border and Sozni Jama on Pure Pashmina Shawl, 893',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Turquoise Blue

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :   - Dry Clean Only

Size : 45 x 90 inch / 114 x 224 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1495,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,masterpiece_shawl,jamawar_shawl,kashmir_shawl,bridesmaid_shawl,handmade_scarves,modern_women_wrap,ladies_shawl,cashmere_throw,expensive,exquisite,black_pashmina,diwali_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42,images:["https://i.etsystatic.com/25846489/r/il/856341/6047082769/il_fullxfull.6047082769_2j7q.jpg","https://i.etsystatic.com/25846489/r/il/563452/6047082965/il_fullxfull.6047082965_4f0n.jpg","https://i.etsystatic.com/25846489/r/il/41f333/5999008262/il_fullxfull.5999008262_fld6.jpg","https://i.etsystatic.com/25846489/r/il/7c28ac/5999008186/il_fullxfull.5999008186_3nzw.jpg","https://i.etsystatic.com/25846489/r/il/7e0336/5999008466/il_fullxfull.5999008466_ms7x.jpg","https://i.etsystatic.com/25846489/r/il/7100f3/5999008426/il_fullxfull.5999008426_353w.jpg","https://i.etsystatic.com/25846489/r/il/f39283/6047083011/il_fullxfull.6047083011_jknl.jpg","https://i.etsystatic.com/25846489/r/il/4c32d6/6047082771/il_fullxfull.6047082771_p7ql.jpg","https://i.etsystatic.com/25846489/r/il/8356e7/6047082845/il_fullxfull.6047082845_kiia.jpg","https://i.etsystatic.com/25846489/r/il/971144/5999008352/il_fullxfull.5999008352_gm2z.jpg"]},{TITLE:"Pure Georgette Masterpiece Beige  Sozni, Aari and Tilla Jamawar Kashmiri Kashida saree | A8",DESCRIPTION:`Pure Georgette Exquisite Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 

We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Beige Hand embroidered saree to add to your graceful closet another deluxe star. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Staple And Mettalic Tilla thread which forms a plethora of intricate paisleys Design Border and Corner in the saree, each one of them hand embroidered with utmost skill and precision to create a masterpiece that stays with you for life. A perfect match for the awesome stylish you, who loves to stay in tune with the latest trend but is also in love with the ethnic style saree. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Beige

Finish: Unstitched 
 
Fabric :   Pure Georgette Saree And Pure Georgette Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni, Tilla and Aari Hand Embroidery (Needle Work) 

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1615,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"silk_saree,designer_saree,kashmir_shawl,sarees_for_women,tilla_work_saree,embroidered_saree,saree_embroidery,geo_saree,heirloom_weave,kalamkari,sozni_saree,diwali_sarees,bollywood_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/59e67f/3391658454/il_fullxfull.3391658454_rh0n.jpg","https://i.etsystatic.com/25846489/r/il/46e440/3139873122/il_fullxfull.3139873122_bcdw.jpg","https://i.etsystatic.com/25846489/r/il/abd7d9/3139871238/il_fullxfull.3139871238_hbry.jpg","https://i.etsystatic.com/25846489/r/il/ae0ba4/3187591093/il_fullxfull.3187591093_ph59.jpg","https://i.etsystatic.com/25846489/r/il/0b2192/3187591095/il_fullxfull.3187591095_78ww.jpg","https://i.etsystatic.com/25846489/r/il/f807e9/3139871350/il_fullxfull.3139871350_43r3.jpg","https://i.etsystatic.com/25846489/r/il/d2c128/3139871336/il_fullxfull.3139871336_h6je.jpg"]},{TITLE:"100% Authentic Handwoven Pashmina Saree with Kashmiri Hand Tilla Zari Embroidery, With Blouse Piece, SA88",DESCRIPTION:`Pure Pashmina Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

Adorn this gorgeous Extremely Rare Pure Pashmina Masterpiece Saree with Kashmiri Tilla Hand Embroidery. which took more than 8 Months to be completed.It comes with a Blouse piece in Pure Pashmina with Sozni Hand Embroidery

The ethnic Saree is crafted in Pure Pashmina , which gives it a Classic look

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Saree is Handwoven

Color : Natural Grey

Finish: Unstitched Blouse
 
Fabric :  Pure Pashmina Saree And Pure Pashmina Blouse

Tilla Color: Golden

Care :     - Dry Clean Only.

Size : 7m ( With Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_dress,tilla_work_saree,gold_zari_saree,saree_with_blouse,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,Cashmere_Sari,Saree_of_Kashmir,tilla_dozi,metalic_embroidery,heirloom",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:40300,images:["https://i.etsystatic.com/25846489/r/il/3e9d7d/5129079642/il_fullxfull.5129079642_hdfr.jpg","https://i.etsystatic.com/25846489/r/il/0b563b/5129074932/il_fullxfull.5129074932_2e0p.jpg","https://i.etsystatic.com/25846489/r/il/3c9516/5129076378/il_fullxfull.5129076378_ctaa.jpg","https://i.etsystatic.com/25846489/r/il/692394/5129075544/il_fullxfull.5129075544_6ags.jpg","https://i.etsystatic.com/25846489/r/il/f16509/5177296497/il_fullxfull.5177296497_jmw4.jpg","https://i.etsystatic.com/25846489/r/il/47834e/5129075086/il_fullxfull.5129075086_2ls5.jpg","https://i.etsystatic.com/25846489/r/il/530aef/5177298871/il_fullxfull.5177298871_rysj.jpg","https://i.etsystatic.com/25846489/r/il/ee85c5/5129071022/il_fullxfull.5129071022_h9zz.jpg"]},{TITLE:'Big Size Grand Pashmina Shawl Delicate Sozni Jama Embroidered, Kashmir Shawl Handwoven, King of Wool, 53x106", SK',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Delicate sozni work is one of a kind. The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozni are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden Handloom

Base Color : Grey
 
Weave : Tight

Feel :  soft, lightweight and warm.

Care : - Steam Ironing.

            - Dry Clean Only.

Size : 53x106 inch / 134 x 269 cm / 3 yards

Work : Sozni needle work

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:3e3,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"3_yards_shawl,gents_pashmina,sober_shawls,pure_pashmina,cashmere_wraps,gift_for_he,handmade,exquisite_special,unique,meher_premium,special_shawls,Christmas_gift,sozni_jamawar",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:128,images:["https://i.etsystatic.com/25846489/r/il/75eba1/5938290746/il_fullxfull.5938290746_sqh3.jpg","https://i.etsystatic.com/25846489/r/il/afdb63/5986357659/il_fullxfull.5986357659_afs1.jpg","https://i.etsystatic.com/25846489/r/il/ba3c67/5986357693/il_fullxfull.5986357693_kfpo.jpg","https://i.etsystatic.com/25846489/r/il/aa6742/5938290686/il_fullxfull.5938290686_ljoy.jpg","https://i.etsystatic.com/25846489/r/il/38d90f/5986357723/il_fullxfull.5986357723_5vs5.jpg","https://i.etsystatic.com/25846489/r/il/2fb7f6/5986357713/il_fullxfull.5986357713_c9ls.jpg","https://i.etsystatic.com/25846489/r/il/bd028a/5938290968/il_fullxfull.5938290968_ga0y.jpg","https://i.etsystatic.com/25846489/r/il/97a02d/5986359099/il_fullxfull.5986359099_5ct7.jpg"]},{TITLE:"52x108 Masterpiece Extra Large Pure Pashmina Men's Shawl, Allover Hand Embroidery Kalamkari wrap, 3 Yards Sozni Scarves, Sm72",DESCRIPTION:`Kalamkari Hand Embroidered Pure Pashmina Shawl( No Mixing)

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Sozni Kalamkari Pashmina shawls are exquisite pieces of traditional Kashmiri craftsmanship, blending the intricate art of Sozni embroidery with the ancient technique of Kalamkari printing on fine Pashmina wool.

This Shawl Is handwoven on wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Weave : Tight

Feel :   soft, lightweight and warm.

Care : - Dry Clean 

Size : 132 x 274cm / 52 x 108  inch 

Work : Sozni  Kalamkari Hand Embroidery of Kashmir
  
NOTE: The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:2700,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kalamkaar_shawls,pure_cashmere,elegant_shawls,exquisite_scarf,extra_large_shawl,pakistan_shawl,handwoven,kashmir_pashmina,gifting_items,hand_painting,luxury,fashion,gents_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:95500,images:["https://i.etsystatic.com/25846489/r/il/5af11d/5926363878/il_fullxfull.5926363878_ilfc.jpg","https://i.etsystatic.com/25846489/r/il/996bbf/5974421383/il_fullxfull.5974421383_qemt.jpg","https://i.etsystatic.com/25846489/r/il/c64fa1/5974421389/il_fullxfull.5974421389_dmhe.jpg","https://i.etsystatic.com/25846489/r/il/4f533f/5974421411/il_fullxfull.5974421411_3rrm.jpg","https://i.etsystatic.com/25846489/r/il/c85b92/5926341080/il_fullxfull.5926341080_ivg2.jpg","https://i.etsystatic.com/25846489/r/il/f46d14/5974421369/il_fullxfull.5974421369_sj5z.jpg","https://i.etsystatic.com/25846489/r/il/6aa0f1/5974421423/il_fullxfull.5974421423_3w37.jpg","https://i.etsystatic.com/25846489/r/il/3b5a1a/5926343460/il_fullxfull.5926343460_e49o.jpg"]},{TITLE:'54x108" XL Pure Pashmina Shawl Sozni Hand Embroidered, 875',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Handwoven on wooden handloom

Color :  Black

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108  inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1102,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,gents_grey_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:31,images:["https://i.etsystatic.com/25846489/r/il/91a896/5928697324/il_fullxfull.5928697324_r0vk.jpg","https://i.etsystatic.com/25846489/r/il/0998aa/5976770951/il_fullxfull.5976770951_b727.jpg","https://i.etsystatic.com/25846489/r/il/6996b9/5928697338/il_fullxfull.5928697338_868h.jpg","https://i.etsystatic.com/25846489/r/il/db8eba/5928697310/il_fullxfull.5928697310_qctt.jpg","https://i.etsystatic.com/25846489/r/il/def861/5928697336/il_fullxfull.5928697336_6kml.jpg","https://i.etsystatic.com/25846489/r/il/a6f436/5928697200/il_fullxfull.5928697200_brca.jpg"]},{TITLE:'45x90"  Black Pashmina Shawl with Border Hand Embroidery, 775',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Black

Weave : Tight

Feel :    soft, lightweight and warm.

Care :  - Dry Clean Only.

Size : 114 × 228 cm / 45 × 90 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:960,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_pashmina,delicate_embroidery,sozni_pashmin,schals,hand_embroidery,cashmere,scarves,winter_shawls,pashmina_embroidered,beige_shawl,collectible_shawl,indian_woman,tradtional_wrap",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22800,images:["https://i.etsystatic.com/25846489/r/il/4909d6/4876859489/il_fullxfull.4876859489_b1jy.jpg","https://i.etsystatic.com/25846489/r/il/4c1912/4876857707/il_fullxfull.4876857707_pwtg.jpg","https://i.etsystatic.com/25846489/r/il/ed6824/4876858443/il_fullxfull.4876858443_o86f.jpg","https://i.etsystatic.com/25846489/r/il/c248b2/4876858571/il_fullxfull.4876858571_bagh.jpg","https://i.etsystatic.com/25846489/r/il/4f4461/4828601012/il_fullxfull.4828601012_k1h4.jpg","https://i.etsystatic.com/25846489/r/il/6d28b3/4876858603/il_fullxfull.4876858603_gh0u.jpg"]},{TITLE:'40x80"  Sangeen Pashmina Sozni Jamawar Shawl, Fr',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl(100% Cashmere)  with Sozni Jamawar  hand embroidery (NeedleWork)

Sozni embroidery is a traditional craft of Kashmir, India, known for its intricate and delicate needlework. Sozni Pashmina shawls are highly prized for their fine quality and exquisite designs. These shawls are made from Pashmina wool, which is obtained from the undercoat of the Pashmina goat, renowned for its softness and warmth.

The process of creating a Sozni Pashmina shawl involves skilled artisans meticulously embroidering intricate patterns onto the fabric using a fine needle and colorful threads. The designs often feature motifs inspired by nature, such as flowers, leaves, and paisleys, as well as geometric patterns and intricate borders.

Each Sozni Pashmina shawl is a labor of love, taking weeks or even months to complete depending on the complexity of the design. The result is a luxurious accessory prized for its beauty, craftsmanship, and warmth, making it a coveted item for both personal use and gifting.

Base Color : Navy Blue  

Weave : Tight

Feel :   soft, lightweight and warm.
 
Care : - Dry Clean Only.

Size : 40 × 80 inch / 100 × 200 cm Approx

Work : Sozni  Hand Embroidery(Needle Work)

NOTE:
 We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:3100,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"SozniEmbroidery,Jamawar,PashminaShawl,KashmiriCraft,Handcrafted,LuxuryFashion,Ethnic_Fashion,Artisanal,TraditionalCraft,Embroidered_Shawl,Heritage_Craft,WarmthAndStyle,Exquisite_Designs",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:9e4,images:["https://i.etsystatic.com/25846489/r/il/b14d62/5974361577/il_fullxfull.5974361577_enzg.jpg","https://i.etsystatic.com/25846489/r/il/f4c1cb/5926280490/il_fullxfull.5926280490_7778.jpg","https://i.etsystatic.com/25846489/r/il/2216ab/5974361487/il_fullxfull.5974361487_pchb.jpg","https://i.etsystatic.com/25846489/r/il/fda9af/5926280522/il_fullxfull.5926280522_98cs.jpg","https://i.etsystatic.com/25846489/r/il/0a36dd/5974361509/il_fullxfull.5974361509_62pq.jpg","https://i.etsystatic.com/25846489/r/il/330a40/5926282054/il_fullxfull.5926282054_jxrw.jpg","https://i.etsystatic.com/25846489/r/il/cf7da2/5926282112/il_fullxfull.5926282112_i0yl.jpg","https://i.etsystatic.com/25846489/r/il/0945a7/5926280420/il_fullxfull.5926280420_grwc.jpg","https://i.etsystatic.com/25846489/r/il/a66b64/5974363151/il_fullxfull.5974363151_3f5m.jpg","https://i.etsystatic.com/25846489/r/il/40e9f0/5974363253/il_fullxfull.5974363253_5n5q.jpg"]},{TITLE:'41x84" Sozni Embroidery Shawl With Print Base, Pure Pashmina Wrap, Exquisite Kalamkaar Shawls, 656',DESCRIPTION:`Kalamkari Sozni Jamawar Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Masterpiece Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Allover Jama Hand Embroidery With Unique And Different Designs.

The  Shawl is Handwoven On Handloom

Base Color : Multicolored

Weave : Tight

Feel :    soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 104 x 213 cm / 41 x 84 Inch 

Work : Sozni Hand Embroidery(Needle Work) of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1278,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kalamkari,qalamkar,digital_print_shawl,christmas_sale,shop_christmas,print_shawls,multicolor_pashmina,valentines_gift,her_shawl,winter_pashmina,summer_shawls,cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:36e3,images:["https://i.etsystatic.com/25846489/r/il/7a3adf/3708594951/il_fullxfull.3708594951_6wuh.jpg","https://i.etsystatic.com/25846489/r/il/b6fc3d/3708587677/il_fullxfull.3708587677_m29i.jpg","https://i.etsystatic.com/25846489/r/il/db2bf1/3708587821/il_fullxfull.3708587821_lr73.jpg","https://i.etsystatic.com/25846489/r/il/c673fd/3708587865/il_fullxfull.3708587865_gv5i.jpg","https://i.etsystatic.com/25846489/r/il/28480b/3660972722/il_fullxfull.3660972722_r8x8.jpg","https://i.etsystatic.com/25846489/r/il/73143a/3708587443/il_fullxfull.3708587443_e81m.jpg","https://i.etsystatic.com/25846489/r/il/bd31b8/3660972356/il_fullxfull.3660972356_q3hm.jpg","https://i.etsystatic.com/25846489/r/il/bc0d78/3708587459/il_fullxfull.3708587459_s22v.jpg","https://i.etsystatic.com/25846489/r/il/e9496c/3660972174/il_fullxfull.3660972174_e05o.jpg","https://i.etsystatic.com/25846489/r/il/5f6318/3708587343/il_fullxfull.3708587343_l92c.jpg"]},{TITLE:"40x80 Grey Kashmir Pashmina Shawl with Gold Hand Tilla Zari Embroidery, 805",DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Maroon Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Brown Grey

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla : Golden

Care : - Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:769,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Bridesmaids_Shawl,Sozni_Shawl,Handmade_Wrap,meher_premium,kashmir_Pashmina,Pure_Pashmina_Shawl,cashmere_wraps,gifts_for_mom,hand_tilla_zari,Gold_work,Gifts_for_her,christmas_edition,wedding_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19,images:["https://i.etsystatic.com/25846489/r/il/ba1766/5103185433/il_fullxfull.5103185433_qak4.jpg","https://i.etsystatic.com/25846489/r/il/a15990/5103184059/il_fullxfull.5103184059_dsjb.jpg","https://i.etsystatic.com/25846489/r/il/4bcc55/5054953242/il_fullxfull.5054953242_73an.jpg","https://i.etsystatic.com/25846489/r/il/0259a2/5103184109/il_fullxfull.5103184109_sa7t.jpg","https://i.etsystatic.com/25846489/r/il/5b6bfa/5054953100/il_fullxfull.5054953100_qxz1.jpg","https://i.etsystatic.com/25846489/r/il/c27e2d/5103184147/il_fullxfull.5103184147_19o5.jpg"]},{TITLE:'40x80" Kashmiri Hand Tilla Embroidery Stripes Pashmina Shawl, NKB',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Stripes

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla  Hand Embroidery of  Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:660,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:18,images:["https://i.etsystatic.com/25846489/r/il/51a015/5923905482/il_fullxfull.5923905482_8t12.jpg","https://i.etsystatic.com/25846489/r/il/47fe58/5971991019/il_fullxfull.5971991019_fvax.jpg","https://i.etsystatic.com/25846489/r/il/40a824/5923905542/il_fullxfull.5923905542_hqj4.jpg","https://i.etsystatic.com/25846489/r/il/c66036/5923910154/il_fullxfull.5923910154_ni4z.jpg","https://i.etsystatic.com/25846489/r/il/05842a/5971991119/il_fullxfull.5971991119_fvhr.jpg","https://i.etsystatic.com/25846489/r/il/7f1c65/5923905504/il_fullxfull.5923905504_myh1.jpg","https://i.etsystatic.com/25846489/r/il/0a3254/5923905454/il_fullxfull.5923905454_afls.jpg","https://i.etsystatic.com/25846489/r/il/7cd008/5971996025/il_fullxfull.5971996025_jacl.jpg","https://i.etsystatic.com/25846489/r/il/b81e41/5923910292/il_fullxfull.5923910292_25rd.jpg","https://i.etsystatic.com/25846489/r/il/053bd6/5923910360/il_fullxfull.5923910360_jokk.jpg"]},{TITLE:'40x80" Olive Green Pashmina Shawl with Kashmiri Hand Tilla, 881',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Olive Green

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla  Hand Embroidery of  Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/908093/5926270574/il_fullxfull.5926270574_n5qq.jpg","https://i.etsystatic.com/25846489/r/il/0f4793/5926270556/il_fullxfull.5926270556_9fcn.jpg","https://i.etsystatic.com/25846489/r/il/6e556b/5974351425/il_fullxfull.5974351425_nrhw.jpg","https://i.etsystatic.com/25846489/r/il/0b1dbe/5974351437/il_fullxfull.5974351437_bti4.jpg","https://i.etsystatic.com/25846489/r/il/2f0d54/5926270632/il_fullxfull.5926270632_3vmt.jpg","https://i.etsystatic.com/25846489/r/il/7e2f8a/5974351553/il_fullxfull.5974351553_c5p6.jpg","https://i.etsystatic.com/25846489/r/il/edab84/5974351551/il_fullxfull.5974351551_rh0i.jpg","https://i.etsystatic.com/25846489/r/il/94dff0/5926270790/il_fullxfull.5926270790_cd4f.jpg","https://i.etsystatic.com/25846489/r/il/72049f/5974351803/il_fullxfull.5974351803_ea8y.jpg","https://i.etsystatic.com/25846489/r/il/4555c8/5974351685/il_fullxfull.5974351685_kl2q.jpg"]},{TITLE:'40x80" Luxury Gold Hand Tilla Embroidered 100% Pure Pashmina Shawl, Original Cashmere Wrap with Kashmiri Zari Work, L45',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Brown

Weave: Tight

Feel :  soft, lightweight and warm.
 
Traditional very fine Tilla Zari Hand Embroidery Needle Work of Kashmir. Embroidery is done using Metallic Tilla thread.

Color Of Tilla :  Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:750,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:17500,images:["https://i.etsystatic.com/25846489/r/il/6d0e10/5176869428/il_fullxfull.5176869428_kqyn.jpg","https://i.etsystatic.com/25846489/r/il/2b1241/5176867522/il_fullxfull.5176867522_lu5x.jpg","https://i.etsystatic.com/25846489/r/il/b14d48/5176867532/il_fullxfull.5176867532_mi7d.jpg","https://i.etsystatic.com/25846489/r/il/891bd8/5225100453/il_fullxfull.5225100453_ac6b.jpg","https://i.etsystatic.com/25846489/r/il/81b613/5176867454/il_fullxfull.5176867454_sim1.jpg","https://i.etsystatic.com/25846489/r/il/50d18b/5176867504/il_fullxfull.5176867504_l1va.jpg","https://i.etsystatic.com/25846489/r/il/a14df4/5225100569/il_fullxfull.5225100569_meia.jpg","https://i.etsystatic.com/25846489/r/il/53e5b8/5176867610/il_fullxfull.5176867610_b8ld.jpg","https://i.etsystatic.com/25846489/r/il/232070/5176867672/il_fullxfull.5176867672_adty.jpg"]},{TITLE:'40x80" Grey Pashmina Shawl with Kashmiri Hand Tilla, 859',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Natural Grey

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla  Hand Embroidery of  Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/1a0e83/5864504390/il_fullxfull.5864504390_4ruw.jpg","https://i.etsystatic.com/25846489/r/il/e89ed9/5864500254/il_fullxfull.5864500254_4w8c.jpg","https://i.etsystatic.com/25846489/r/il/910eab/5912594319/il_fullxfull.5912594319_nycj.jpg","https://i.etsystatic.com/25846489/r/il/7b9313/5864500200/il_fullxfull.5864500200_9mrq.jpg","https://i.etsystatic.com/25846489/r/il/d0205c/5912594253/il_fullxfull.5912594253_nrlk.jpg","https://i.etsystatic.com/25846489/r/il/43be32/5864500266/il_fullxfull.5864500266_tioj.jpg","https://i.etsystatic.com/25846489/r/il/b921d4/5912594355/il_fullxfull.5912594355_crh1.jpg","https://i.etsystatic.com/25846489/r/il/e48328/5912594385/il_fullxfull.5912594385_r73x.jpg","https://i.etsystatic.com/25846489/r/il/beb223/5864500334/il_fullxfull.5864500334_9ziu.jpg","https://i.etsystatic.com/25846489/r/il/0061c8/5912594171/il_fullxfull.5912594171_6zap.jpg"]},{TITLE:'42x82" Luxury Gold Hand Tilla Embroidered 100% Pure Pashmina Shawl, Original Cashmere Wrap with Kashmiri Zari Work, 930',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : White

Weave: Tight

Feel :  soft, lightweight and warm.
 
Traditional very fine Tilla Zari Hand Embroidery Needle Work of Kashmir. Embroidery is done using Metallic Tilla thread.

Color Of Tilla :  Light Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 42 x 82 inch / 107 x 208cm

Work : Tilla  Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:930,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/3f4b25/4634282644/il_fullxfull.4634282644_tcjs.jpg","https://i.etsystatic.com/25846489/r/il/b0733f/4682509349/il_fullxfull.4682509349_fcki.jpg","https://i.etsystatic.com/25846489/r/il/499294/4634273708/il_fullxfull.4634273708_tbgg.jpg","https://i.etsystatic.com/25846489/r/il/a2fb68/4682509499/il_fullxfull.4682509499_l54f.jpg","https://i.etsystatic.com/25846489/r/il/654bba/4634273728/il_fullxfull.4634273728_6ni3.jpg","https://i.etsystatic.com/25846489/r/il/ba145e/4682509413/il_fullxfull.4682509413_n3i8.jpg","https://i.etsystatic.com/25846489/r/il/22bb9e/4634273770/il_fullxfull.4634273770_b25i.jpg","https://i.etsystatic.com/25846489/r/il/5a6288/4682509681/il_fullxfull.4682509681_1i0x.jpg"]},{TITLE:'40x80"  Magenta Hand Tilla Zari Pashmina Shawl, 887',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Elegant Pashmina Shawl Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Magenta

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Care :- Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm Approx

Work : Tilla Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:960,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"hand_embroidery,wedding_gifts,zari_shawl,pure_silver,shiny_pashmina,zari_shawls,gift_items,party_wear,Traditional,Zari_pashmeena,gold_scarves,antique,Pink_throw",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/3091e9/5972028141/il_fullxfull.5972028141_85wf.jpg","https://i.etsystatic.com/25846489/r/il/16845f/5974322687/il_fullxfull.5974322687_nvil.jpg","https://i.etsystatic.com/25846489/r/il/a067e9/5974322703/il_fullxfull.5974322703_pwr5.jpg","https://i.etsystatic.com/25846489/r/il/b5fdd2/5974322677/il_fullxfull.5974322677_nafw.jpg","https://i.etsystatic.com/25846489/r/il/a99c6b/5974322689/il_fullxfull.5974322689_qe77.jpg","https://i.etsystatic.com/25846489/r/il/9a504f/5974322683/il_fullxfull.5974322683_6x0o.jpg","https://i.etsystatic.com/25846489/r/il/162e73/5926242110/il_fullxfull.5926242110_84yw.jpg","https://i.etsystatic.com/25846489/r/il/6518c2/5974322795/il_fullxfull.5974322795_fojw.jpg","https://i.etsystatic.com/25846489/r/il/108df7/5926242324/il_fullxfull.5926242324_6xie.jpg"]},{TITLE:'40x80" Beautifully Handcrafted Finest Quality Reversible Pure Pashmina Shawl, Very soft and Warm, SM66',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1390,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"budget_pashmina,soft_shawls,unique_scarves,kashmir_weave,scarf,scarf_cashmere,pashmina_drape,luxury_winter_shawl,handspun_scarf,big_scarves,pink_throw,motif_embroidery,jama_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:45500,images:["https://i.etsystatic.com/25846489/r/il/ee1795/5926314450/il_fullxfull.5926314450_d46q.jpg","https://i.etsystatic.com/25846489/r/il/7f96a0/5974395479/il_fullxfull.5974395479_3v2p.jpg","https://i.etsystatic.com/25846489/r/il/049b90/5974395427/il_fullxfull.5974395427_ndw4.jpg","https://i.etsystatic.com/25846489/r/il/5d36f0/5926314442/il_fullxfull.5926314442_eq2e.jpg","https://i.etsystatic.com/25846489/r/il/41c441/5974395509/il_fullxfull.5974395509_q1tf.jpg","https://i.etsystatic.com/25846489/r/il/25099a/5926315414/il_fullxfull.5926315414_3210.jpg","https://i.etsystatic.com/25846489/r/il/5ed4ae/5926315412/il_fullxfull.5926315412_7aeg.jpg","https://i.etsystatic.com/25846489/r/il/ff6b62/5926315340/il_fullxfull.5926315340_lpv3.jpg"]},{TITLE:'45x90" Handwoven Sozni Pashmina Shawl, a Masterpiece of Allover Hand Embroidery, 902',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Grey

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 45 x 90 inch or 114 x 228 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1385,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,box_design",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/9b6c16/5959042956/il_fullxfull.5959042956_92ge.jpg","https://i.etsystatic.com/25846489/r/il/2a3fef/5959042946/il_fullxfull.5959042946_4d5f.jpg","https://i.etsystatic.com/25846489/r/il/994d3e/6007117141/il_fullxfull.6007117141_rigc.jpg","https://i.etsystatic.com/25846489/r/il/415f3e/5959042850/il_fullxfull.5959042850_hyu5.jpg","https://i.etsystatic.com/25846489/r/il/e03a0f/6007117123/il_fullxfull.6007117123_36gl.jpg","https://i.etsystatic.com/25846489/r/il/b77231/6007117183/il_fullxfull.6007117183_v4h3.jpg","https://i.etsystatic.com/25846489/r/il/dfef7d/5959042986/il_fullxfull.5959042986_2jfj.jpg","https://i.etsystatic.com/25846489/r/il/e2e981/6007117229/il_fullxfull.6007117229_1jxq.jpg","https://i.etsystatic.com/25846489/r/il/e9ec8a/5959042992/il_fullxfull.5959042992_f841.jpg"]},{TITLE:'28 x80" Authentic Pure Pashmina Cashmere Wrap / Scarf / Stole, Hand Tilla Thread Embroidery, Handmade Small Shawl, Christmas Special, M99',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla ZARI and Sozni Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: Craftsmanship at Its Ultimate level , This Brilliant  Pashmina With Tilla Zari and sozni Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Scarf. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Camel 

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold and Silver

Care : Dry Clean Only

Size : 28x 80 inch / 71x 200 cm

Work : Sozni and  Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:490,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_scarf,cashmere_wrap,christmas_gifts,sustainable_gifts,pure_pashmina,women_scarves,soft_shawls,zari_stole,indian_gifts,wedding_stool,made_in_kashmir,zari_shawl,wedding_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11,images:["https://i.etsystatic.com/25846489/r/il/b07945/4443697376/il_fullxfull.4443697376_fxih.jpg","https://i.etsystatic.com/25846489/r/il/0345df/4443694820/il_fullxfull.4443694820_2201.jpg","https://i.etsystatic.com/25846489/r/il/bd38ee/4491039695/il_fullxfull.4491039695_hmd7.jpg","https://i.etsystatic.com/25846489/r/il/47db02/4443694888/il_fullxfull.4443694888_aazk.jpg","https://i.etsystatic.com/25846489/r/il/b31c90/4491039727/il_fullxfull.4491039727_h3kw.jpg"]},{TITLE:"Pure Crepe Kashmiri Saree in Black with Sozni Hand Embroidery on Bold Borders and Corners, with Blouse, SA105",DESCRIPTION:`Exclusive Product By MeherPremium : Pure Crepe Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding

The Kashmiri saree, crafted from luxurious pure crepe in a captivating black hue, exudes timeless elegance. Adorned with intricate Sozni hand embroidery, meticulously embellished on large borders with defined corners, it epitomizes sophistication. This saree harmoniously blends traditional craftsmanship with contemporary allure, making it a symbol of refined taste and cultural heritage. Perfect for special occasions or formal gatherings, it is a statement piece that captivates with its understated yet mesmerizing beauty.


Base Color : Black

Fabric :  Pure Crepe

Traditional very fine Sozni Hand Embroidery Needle Work of Kashmir. Embroidery is done using Cotton thread.

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) 

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1027,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmiri_saree,kashida_embroidery,saree,meher_premium,giftforher,woman_wear,traditional_craft,heirloom,Bollywood_Saree,handmade,kashmiri_dress,beige_saree,kashmir_embroidered",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:26,images:["https://i.etsystatic.com/25846489/r/il/099891/5938201324/il_fullxfull.5938201324_4jnl.jpg","https://i.etsystatic.com/25846489/r/il/c8266a/5986268221/il_fullxfull.5986268221_clys.jpg","https://i.etsystatic.com/25846489/r/il/2887dd/5986268257/il_fullxfull.5986268257_it3r.jpg","https://i.etsystatic.com/25846489/r/il/ffd607/5986268235/il_fullxfull.5986268235_mon5.jpg","https://i.etsystatic.com/25846489/r/il/78b25d/5938201230/il_fullxfull.5938201230_itjm.jpg","https://i.etsystatic.com/25846489/r/il/e4f2ff/5986268139/il_fullxfull.5986268139_pxxm.jpg","https://i.etsystatic.com/25846489/r/il/507a32/5986268367/il_fullxfull.5986268367_b9zc.jpg","https://i.etsystatic.com/25846489/r/il/7f656f/5938201430/il_fullxfull.5938201430_ck2i.jpg"]},{TITLE:"Pure Georgette Kashmiri Saree with Sozni Hand Embroidery on Bold Borders and Corners, with Blouse, SA106",DESCRIPTION:`Exclusive Product By MeherPremium : Pure Georgette Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding

The Kashmiri saree, crafted from luxurious pure Georgette in a captivating hue, exudes timeless elegance. Adorned with intricate Sozni hand embroidery, meticulously embellished on large borders with defined corners, it epitomizes sophistication. This saree harmoniously blends traditional craftsmanship with contemporary allure, making it a symbol of refined taste and cultural heritage. Perfect for special occasions or formal gatherings, it is a statement piece that captivates with its understated yet mesmerizing beauty.


Base Color : Turquoise Blue 

Fabric :  Pure Georgette

Traditional very fine Sozni Hand Embroidery Needle Work of Kashmir. Embroidery is done using Cotton thread.

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) 

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1145,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmiri_saree,kashida_embroidery,saree,meher_premium,giftforher,woman_wear,traditional_craft,heirloom,Bollywood_Saree,handmade,kashmiri_dress,beige_saree,kashmir_embroidered",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:29,images:["https://i.etsystatic.com/25846489/r/il/2e70cc/5938244940/il_fullxfull.5938244940_60cj.jpg","https://i.etsystatic.com/25846489/r/il/050541/5986312173/il_fullxfull.5986312173_m9wy.jpg","https://i.etsystatic.com/25846489/r/il/da355c/5938244982/il_fullxfull.5938244982_hpef.jpg","https://i.etsystatic.com/25846489/r/il/2495cc/5938244994/il_fullxfull.5938244994_qi5k.jpg","https://i.etsystatic.com/25846489/r/il/ee550b/5938244894/il_fullxfull.5938244894_hyd4.jpg","https://i.etsystatic.com/25846489/r/il/15ef08/5986312089/il_fullxfull.5986312089_7u9w.jpg","https://i.etsystatic.com/25846489/r/il/593f73/5986312309/il_fullxfull.5986312309_l4qd.jpg","https://i.etsystatic.com/25846489/r/il/9d0b2b/5938245126/il_fullxfull.5938245126_fq49.jpg"]},{TITLE:'40x80" Exquisite Sozni Embroidery Pure Pashmina shawl, L63',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Coffee

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1290,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"vicuna,shawl,pashmina_shawl,cashmere_embroidered,needle_work,gift_for_ramadan,kashmiri_shawl,kani_shawl,sozni_shawls,sozani,wrap,wedding_shawls,grey_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:41500,images:["https://i.etsystatic.com/25846489/r/il/0ed3bb/5724107917/il_fullxfull.5724107917_ftf4.jpg","https://i.etsystatic.com/25846489/r/il/a8377e/5676043262/il_fullxfull.5676043262_3ly8.jpg","https://i.etsystatic.com/25846489/r/il/6de86d/5724097235/il_fullxfull.5724097235_kw0b.jpg","https://i.etsystatic.com/25846489/r/il/44eec5/5724097239/il_fullxfull.5724097239_15aa.jpg","https://i.etsystatic.com/25846489/r/il/d79c79/5724097391/il_fullxfull.5724097391_8a3t.jpg","https://i.etsystatic.com/25846489/r/il/99e088/5676043438/il_fullxfull.5676043438_jygl.jpg","https://i.etsystatic.com/25846489/r/il/bf5692/5676043692/il_fullxfull.5676043692_h6q2.jpg","https://i.etsystatic.com/25846489/r/il/94cbbb/5724097493/il_fullxfull.5724097493_dgby.jpg","https://i.etsystatic.com/25846489/r/il/d2eb34/5676048070/il_fullxfull.5676048070_jva7.jpg","https://i.etsystatic.com/25846489/r/il/b24430/5724101999/il_fullxfull.5724101999_kmbs.jpg"]},{TITLE:'45x90" XL White Pashmina Shawl With White Sozni Hand Embroidery, Tone on Tone, l90',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 45 x 90 inch or 1 14 x 228 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1850,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/2d241b/5845926525/il_fullxfull.5845926525_a4d9.jpg","https://i.etsystatic.com/25846489/r/il/4d8f48/5845930369/il_fullxfull.5845930369_7tzb.jpg","https://i.etsystatic.com/25846489/r/il/04c8de/5845926569/il_fullxfull.5845926569_awt8.jpg","https://i.etsystatic.com/25846489/r/il/c58948/5797850080/il_fullxfull.5797850080_lx3u.jpg","https://i.etsystatic.com/25846489/r/il/e9080e/5797850086/il_fullxfull.5797850086_kxag.jpg","https://i.etsystatic.com/25846489/r/il/76c117/5845926515/il_fullxfull.5845926515_9a3i.jpg","https://i.etsystatic.com/25846489/r/il/3bd823/5797849852/il_fullxfull.5797849852_oz31.jpg","https://i.etsystatic.com/25846489/r/il/b3d399/5845926393/il_fullxfull.5845926393_8s9a.jpg","https://i.etsystatic.com/25846489/r/il/0dfdfb/5845926227/il_fullxfull.5845926227_f6a6.jpg","https://i.etsystatic.com/25846489/r/il/e14f15/5797849866/il_fullxfull.5797849866_9sxl.jpg"]},{TITLE:'40x80" White Sozni Jamawar Hand Embroidered Pure Cashmere Pashmina Shawl, SM57',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1450,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:45,images:["https://i.etsystatic.com/25846489/r/il/b0aedd/5484129150/il_fullxfull.5484129150_d6lg.jpg","https://i.etsystatic.com/25846489/r/il/def253/5532236145/il_fullxfull.5532236145_51gz.jpg","https://i.etsystatic.com/25846489/r/il/afc249/5484124258/il_fullxfull.5484124258_l5h2.jpg","https://i.etsystatic.com/25846489/r/il/5ff6cb/5532236469/il_fullxfull.5532236469_4ino.jpg","https://i.etsystatic.com/25846489/r/il/16bc11/5532236167/il_fullxfull.5532236167_6wyn.jpg","https://i.etsystatic.com/25846489/r/il/bd08d6/5532236083/il_fullxfull.5532236083_dvx9.jpg","https://i.etsystatic.com/25846489/r/il/a39c3f/5484126860/il_fullxfull.5484126860_it90.jpg","https://i.etsystatic.com/25846489/r/il/9f321a/5484124018/il_fullxfull.5484124018_76t1.jpg","https://i.etsystatic.com/25846489/r/il/da77c5/5532236021/il_fullxfull.5532236021_3f53.jpg","https://i.etsystatic.com/25846489/r/il/ef4372/5532236119/il_fullxfull.5532236119_nlzq.jpg"]},{TITLE:'45x90" XL Heirloom White Kashmir Pashmina Shawl, Fine Kashmiri Hand Embroidery, Craftsmen Wrap, L70',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 45 x 90 inch or 114 x 228 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1300,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:46,images:["https://i.etsystatic.com/25846489/r/il/1b18da/5724080311/il_fullxfull.5724080311_at5o.jpg","https://i.etsystatic.com/25846489/r/il/0e5604/5724077427/il_fullxfull.5724077427_9x7c.jpg","https://i.etsystatic.com/25846489/r/il/039844/5676023462/il_fullxfull.5676023462_a0g1.jpg","https://i.etsystatic.com/25846489/r/il/5b89f4/5676023532/il_fullxfull.5676023532_6w3d.jpg","https://i.etsystatic.com/25846489/r/il/3fa284/5724077455/il_fullxfull.5724077455_8eco.jpg","https://i.etsystatic.com/25846489/r/il/49ad24/5724077289/il_fullxfull.5724077289_f67r.jpg","https://i.etsystatic.com/25846489/r/il/5cc8ef/5676023314/il_fullxfull.5676023314_k2bv.jpg","https://i.etsystatic.com/25846489/r/il/01429a/5724077055/il_fullxfull.5724077055_jt5z.jpg","https://i.etsystatic.com/25846489/r/il/745718/5676022952/il_fullxfull.5676022952_qq7f.jpg","https://i.etsystatic.com/25846489/r/il/a35842/5676023240/il_fullxfull.5676023240_56h9.jpg"]},{TITLE:'40x80" White Kashmir Pashmina Shawl, Fine Sozni Allover Hand Embroidery, Craftsmen wrap, SM20',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1210,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,paper_machie_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:39500,images:["https://i.etsystatic.com/25846489/r/il/2e42e9/3999615906/il_fullxfull.3999615906_o0vl.jpg","https://i.etsystatic.com/25846489/r/il/600c96/3999612074/il_fullxfull.3999612074_9agg.jpg","https://i.etsystatic.com/25846489/r/il/302bf4/4047259969/il_fullxfull.4047259969_h9jw.jpg","https://i.etsystatic.com/25846489/r/il/b7e12a/3999612260/il_fullxfull.3999612260_8qh7.jpg","https://i.etsystatic.com/25846489/r/il/f00e1e/4047259811/il_fullxfull.4047259811_oa9r.jpg","https://i.etsystatic.com/25846489/r/il/bfee5a/4047259861/il_fullxfull.4047259861_28r7.jpg","https://i.etsystatic.com/25846489/r/il/18e894/3999613032/il_fullxfull.3999613032_hao5.jpg","https://i.etsystatic.com/25846489/r/il/eadb2a/4047259803/il_fullxfull.4047259803_q7t8.jpg","https://i.etsystatic.com/25846489/r/il/70a072/3999612294/il_fullxfull.3999612294_85kv.jpg"]},{TITLE:'40x80"Real Handmade Pashmina Shawl of Kashmir with Delicate Allover Sozni Needle Hand Embroidery Scarves, sm61',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Jama Sozni Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with Allover Hand  Embroidery(Sozni)  from Kashmir

This adorable Pashmina Shawl is an embodiment of skill shown in the intricacies of Sozni Kaari in Jama pattern where an Artisan's fancy has no limits. He gathers his creativity in his complex needle strokes and forms amazing patterns over an elegant Pashmina which is an ideal pick for winter blues.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven 

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 40 x 80 Inch / 100 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:780,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"hand_embroidered,cashmere_shawls,sozni_shawl,jama_shawl,embroidered_pashmina,pure_pashmina,pashmina_gift,fine_embroidery,meherpremium_shawl,pashmina_schal,cashmere_wrap,kashmir,cashmere_throw",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22,images:["https://i.etsystatic.com/25846489/r/il/4da7a9/5724217467/il_fullxfull.5724217467_gbcc.jpg","https://i.etsystatic.com/25846489/r/il/fac874/5676158656/il_fullxfull.5676158656_e04g.jpg","https://i.etsystatic.com/25846489/r/il/21f129/5676158234/il_fullxfull.5676158234_pcjq.jpg","https://i.etsystatic.com/25846489/r/il/7416f1/5724211533/il_fullxfull.5724211533_otd5.jpg","https://i.etsystatic.com/25846489/r/il/d90c80/5676158678/il_fullxfull.5676158678_ctib.jpg","https://i.etsystatic.com/25846489/r/il/931740/5676158194/il_fullxfull.5676158194_wxsh.jpg","https://i.etsystatic.com/25846489/r/il/b442aa/5724210941/il_fullxfull.5724210941_ijqq.jpg","https://i.etsystatic.com/25846489/r/il/24923c/5676158608/il_fullxfull.5676158608_m3ay.jpg","https://i.etsystatic.com/25846489/r/il/b37e1e/5724210917/il_fullxfull.5724210917_hdfh.jpg","https://i.etsystatic.com/25846489/r/il/714c2d/5676157942/il_fullxfull.5676157942_eaoj.jpg"]},{TITLE:'40x80" Sozni Heavy Jaali Shawl , Pure Cashmere Pashmina, sm63',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Jama Sozni Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with Allover Hand  Embroidery(Sozni)  from Kashmir

This adorable Pashmina Shawl is an embodiment of skill shown in the intricacies of Sozni Kaari in Jama pattern where an Artisan's fancy has no limits. He gathers his creativity in his complex needle strokes and forms amazing patterns over an elegant Pashmina which is an ideal pick for winter blues.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven 

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 40 x 80 Inch / 100 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:817,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"hand_embroidered,cashmere_shawls,sozni_shawl,jama_shawl,embroidered_pashmina,pure_pashmina,pashmina_gift,fine_embroidery,meherpremium_shawl,pashmina_schal,cashmere_wrap,kashmir,cashmere_throw",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22,images:["https://i.etsystatic.com/25846489/r/il/103329/5724227387/il_fullxfull.5724227387_po9n.jpg","https://i.etsystatic.com/25846489/r/il/123f92/5676170776/il_fullxfull.5676170776_czvc.jpg","https://i.etsystatic.com/25846489/r/il/ca6d3e/5724223763/il_fullxfull.5724223763_audl.jpg","https://i.etsystatic.com/25846489/r/il/957ee7/5724223675/il_fullxfull.5724223675_ovvm.jpg","https://i.etsystatic.com/25846489/r/il/9a0916/5724223751/il_fullxfull.5724223751_etkl.jpg","https://i.etsystatic.com/25846489/r/il/9d5615/5676170672/il_fullxfull.5676170672_k6un.jpg","https://i.etsystatic.com/25846489/r/il/7f3bdf/5724223295/il_fullxfull.5724223295_9mex.jpg","https://i.etsystatic.com/25846489/r/il/d0342f/5724223297/il_fullxfull.5724223297_988f.jpg","https://i.etsystatic.com/25846489/r/il/ef9785/5676170706/il_fullxfull.5676170706_4pxt.jpg","https://i.etsystatic.com/25846489/r/il/6fd7a3/5676170232/il_fullxfull.5676170232_l71l.jpg"]},{TITLE:'40x80" Exquisite White Sozni Embroidery Pure Pashmina shawl, L64',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : white

Feel: soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1250,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"vicuna,shawl,pashmina_shawl,cashmere_embroidered,needle_work,gift_for_ramadan,kashmiri_shawl,kani_shawl,sozni_shawls,sozani,wrap,wedding_shawls,grey_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:41500,images:["https://i.etsystatic.com/25846489/r/il/a9a377/5676071322/il_fullxfull.5676071322_ai9a.jpg","https://i.etsystatic.com/25846489/r/il/1c019b/5724118961/il_fullxfull.5724118961_ma9o.jpg","https://i.etsystatic.com/25846489/r/il/846217/5676065520/il_fullxfull.5676065520_jp0w.jpg","https://i.etsystatic.com/25846489/r/il/45e56a/5676065418/il_fullxfull.5676065418_rqqt.jpg","https://i.etsystatic.com/25846489/r/il/b38309/5676065028/il_fullxfull.5676065028_zc4x.jpg","https://i.etsystatic.com/25846489/r/il/37ba18/5676065460/il_fullxfull.5676065460_bw6y.jpg","https://i.etsystatic.com/25846489/r/il/74a92b/5724119013/il_fullxfull.5724119013_jmfo.jpg","https://i.etsystatic.com/25846489/r/il/0822cd/5676065728/il_fullxfull.5676065728_auh0.jpg","https://i.etsystatic.com/25846489/r/il/aff13a/5724118507/il_fullxfull.5724118507_66p2.jpg","https://i.etsystatic.com/25846489/r/il/3d53cf/5676064740/il_fullxfull.5676064740_151l.jpg"]},{TITLE:'40x80" Yellow Handloom Pashmina shawl, sm65',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Yellow

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :   - Dry Clean Only

Size : 40x80 Inch / 100 x 200 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:780,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,masterpiece_shawl,jamawar_shawl,kashmir_shawl,bridesmaid_shawl,handmade_scarves,modern_women_wrap,valentine_gift,ladies_shawl,cashmere_throw,black_pashmina,new_year_gift,2024_sale",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22300,images:["https://i.etsystatic.com/25846489/r/il/02d44e/5730450118/il_fullxfull.5730450118_3r6f.jpg","https://i.etsystatic.com/25846489/r/il/5e1f48/5730448340/il_fullxfull.5730448340_qfmg.jpg","https://i.etsystatic.com/25846489/r/il/c2660c/5730448354/il_fullxfull.5730448354_lw51.jpg","https://i.etsystatic.com/25846489/r/il/8b8b9b/5778521853/il_fullxfull.5778521853_pcu8.jpg","https://i.etsystatic.com/25846489/r/il/5a4fa8/5730448362/il_fullxfull.5730448362_4dgq.jpg","https://i.etsystatic.com/25846489/r/il/24bb3d/5730448336/il_fullxfull.5730448336_m68i.jpg"]},{TITLE:'40x80" Multicolor Sozni Jamawar Embroidery Wrap, Handmade in Kashmir, Kalamkari Shawl, sm59',DESCRIPTION:`Kalamkari Sozni Jamawar Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Masterpiece Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Allover Jama Hand Embroidery With Unique And Different Designs.

The  Shawl is Handwoven On Handloom

Base Color : Multicolored

Weave : Medium

Feel :    soft, lightweight and warm.

Care :  - Dry Clean Only.

Size : 100 × 200 cm / 40 × 80 inch

Work : Sozni Hand Embroidery(Needle Work)

Intricate Sozni Hand Embroidery Needle Work of Kashmir. 

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1390,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meher_premium,kalamkar_pashmina,special_shawls,giftings,anniversary_gifts,kalamkaar,qalamkar,digital_print,vuitton,grandma_gift,shawl_for_grandma,online_pashmina,winter_scarf",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42500,images:["https://i.etsystatic.com/25846489/r/il/861fb4/5630890772/il_fullxfull.5630890772_5azq.jpg","https://i.etsystatic.com/25846489/r/il/e9342d/5678959165/il_fullxfull.5678959165_9r9x.jpg","https://i.etsystatic.com/25846489/r/il/ffc24c/5630888018/il_fullxfull.5630888018_q62i.jpg","https://i.etsystatic.com/25846489/r/il/d1ea98/5678959167/il_fullxfull.5678959167_dtzs.jpg","https://i.etsystatic.com/25846489/r/il/8bc99f/5630888078/il_fullxfull.5630888078_2xdw.jpg","https://i.etsystatic.com/25846489/r/il/2aa002/5630887856/il_fullxfull.5630887856_baj2.jpg","https://i.etsystatic.com/25846489/r/il/1cb237/5678958857/il_fullxfull.5678958857_ruib.jpg","https://i.etsystatic.com/25846489/r/il/71fc49/5630887698/il_fullxfull.5630887698_c5x4.jpg","https://i.etsystatic.com/25846489/r/il/2cd3bc/5678959057/il_fullxfull.5678959057_6i1p.jpg","https://i.etsystatic.com/25846489/r/il/0d4c19/5630887688/il_fullxfull.5630887688_bbxk.jpg"]},{TITLE:'45x90" Large Size Designer Black Pashmina Shawl, Sozni Wrap, Hand Embroidery, winter Scarves, L68',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.
This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Black

Feel :  soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended

Size : 45 x 90  inch / 114 x 228 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1199,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"shawl,scarf,handmade_pashmina,pashmina_rave,vintage_shawl,real_pashmina,shawls_and_wrap,indian_wraps,shawl_of_valley,pashmina_for_gift,grandma_gifts,new_pashmina,affordable",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:37,images:["https://i.etsystatic.com/25846489/r/il/827fc4/5724034189/il_fullxfull.5724034189_lupc.jpg","https://i.etsystatic.com/25846489/r/il/d057a8/5724031673/il_fullxfull.5724031673_5l2f.jpg","https://i.etsystatic.com/25846489/r/il/3a18d8/5675977322/il_fullxfull.5675977322_hvd1.jpg","https://i.etsystatic.com/25846489/r/il/e323fd/5724031217/il_fullxfull.5724031217_2umw.jpg","https://i.etsystatic.com/25846489/r/il/4c6598/5675976672/il_fullxfull.5675976672_2cks.jpg","https://i.etsystatic.com/25846489/r/il/0565c9/5724031417/il_fullxfull.5724031417_kcc3.jpg","https://i.etsystatic.com/25846489/r/il/211a95/5675976780/il_fullxfull.5675976780_euny.jpg","https://i.etsystatic.com/25846489/r/il/0c02b5/5724030243/il_fullxfull.5724030243_gkxj.jpg","https://i.etsystatic.com/25846489/r/il/8104b2/5441163648/il_fullxfull.5441163648_ke6b.jpg"]},{TITLE:'40x80" Multicolor Sozni Hand Embroidery Kalamkari Authentic Pashmina Shawls, Special Winter Scarves for winter, Completely Handmade, Sm60',DESCRIPTION:`Kalamkari Sozni Jamawar Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Masterpiece Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Allover Jama Hand Embroidery With Unique And Different Designs.

The  Shawl is Handwoven On Handloom

Base Color : Multicolored

Weave : Tight

Feel :    soft, lightweight and warm.

Care : - Dry Clean Only.
 
Size : 100 × 200 cm / 40 × 80  inch Approx

Work : Sozni Hand Embroidery(Needle Work) of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"print_jama,gifts_for_him,gift_for_her,pashmina_store,Kashmiri_shop,real_handmade,soft_cashmere,hand_embroidery,shawl,scarve,throw_cashmere,christmas,kalamkari_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42500,images:["https://i.etsystatic.com/25846489/r/il/4a8ad8/5678880445/il_fullxfull.5678880445_73tw.jpg","https://i.etsystatic.com/25846489/r/il/3274e1/5630809200/il_fullxfull.5630809200_ejtl.jpg","https://i.etsystatic.com/25846489/r/il/5eb36d/5678880713/il_fullxfull.5678880713_q5c5.jpg","https://i.etsystatic.com/25846489/r/il/195b26/5630809210/il_fullxfull.5630809210_tit6.jpg","https://i.etsystatic.com/25846489/r/il/073601/5630809130/il_fullxfull.5630809130_s9a2.jpg","https://i.etsystatic.com/25846489/r/il/5c16c6/5678880403/il_fullxfull.5678880403_ibpf.jpg","https://i.etsystatic.com/25846489/r/il/0a8ab9/5630808894/il_fullxfull.5630808894_kh5g.jpg","https://i.etsystatic.com/25846489/r/il/a19620/5630808828/il_fullxfull.5630808828_buwp.jpg","https://i.etsystatic.com/25846489/r/il/a96bd4/5678880395/il_fullxfull.5678880395_jfzb.jpg","https://i.etsystatic.com/25846489/r/il/f5d3e2/5678880351/il_fullxfull.5678880351_iond.jpg"]},{TITLE:'40x80" Ekat Cashmere Shawl With Sozni Hand Embroidey, SM58',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl:  Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni embellishments can be paired with any ensemble to influence and affect any occasion.

The  Shawl is Handwoven On Handloom

Base Color :ekat 

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care : - Dry Clean Only.

Size : 100  × 200 cm / 40 × 80 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:680,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,sozni_wrap,kalamkaar,sozni_embroidery,pashmina_sozni,kani_shawl,shawl_embroidered,scarf_for_women,winter,papermache_shawl,indian_dupatta,cashmere_blanket,ikat_weave",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19200,images:["https://i.etsystatic.com/25846489/r/il/c2cf98/5678938065/il_fullxfull.5678938065_88v1.jpg","https://i.etsystatic.com/25846489/r/il/7537bd/5678936575/il_fullxfull.5678936575_nyd5.jpg","https://i.etsystatic.com/25846489/r/il/f09ea2/5678936585/il_fullxfull.5678936585_7jpj.jpg","https://i.etsystatic.com/25846489/r/il/8da41f/5630864652/il_fullxfull.5630864652_q5r8.jpg","https://i.etsystatic.com/25846489/r/il/3bae88/5630864804/il_fullxfull.5630864804_gljb.jpg","https://i.etsystatic.com/25846489/r/il/26f9d2/5630864554/il_fullxfull.5630864554_a5ml.jpg","https://i.etsystatic.com/25846489/r/il/57dd5b/5678936327/il_fullxfull.5678936327_80zy.jpg","https://i.etsystatic.com/25846489/r/il/7da9c2/5678936183/il_fullxfull.5678936183_sc1x.jpg","https://i.etsystatic.com/25846489/r/il/440a8b/5630864506/il_fullxfull.5630864506_nn4b.jpg","https://i.etsystatic.com/25846489/r/il/bd1794/5678936341/il_fullxfull.5678936341_awuh.jpg"]},{TITLE:"40x80 Grey Pure Pashmina Border Shawl, L51",DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Grey

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:459,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,border_shawl,white_pashmina,resham_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11e3,images:["https://i.etsystatic.com/25846489/r/il/cf0bed/5348332416/il_fullxfull.5348332416_j7w3.jpg","https://i.etsystatic.com/25846489/r/il/8554f2/5396504103/il_fullxfull.5396504103_eme3.jpg","https://i.etsystatic.com/25846489/r/il/905a60/5348332700/il_fullxfull.5348332700_1r6a.jpg","https://i.etsystatic.com/25846489/r/il/08d776/5396504137/il_fullxfull.5396504137_51qx.jpg","https://i.etsystatic.com/25846489/r/il/41c4fb/5396504209/il_fullxfull.5396504209_i7tb.jpg"]},{TITLE:"40x80 Jeans Blue Pure Pashmina Border Shawl, L52",DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Jeans Blue

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:362,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,border_shawl,white_pashmina,resham_work,hashidaar",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:8e3,images:["https://i.etsystatic.com/25846489/r/il/8cb791/5348339822/il_fullxfull.5348339822_ihrn.jpg","https://i.etsystatic.com/25846489/r/il/2e29b2/5348339942/il_fullxfull.5348339942_7a1m.jpg","https://i.etsystatic.com/25846489/r/il/60ca7b/5348339924/il_fullxfull.5348339924_42th.jpg","https://i.etsystatic.com/25846489/r/il/310d5f/5348339674/il_fullxfull.5348339674_r7y7.jpg","https://i.etsystatic.com/25846489/r/il/bb8423/5348339982/il_fullxfull.5348339982_rqun.jpg"]},{TITLE:'40x80" Pure Pashmina Outline Sozni jama Shawl, L61',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

Base Color : white

Feel: soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:730,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"vicuna,shawl,pashmina_shawl,cashmere_embroidered,needle_work,gift_for_ramadan,kashmiri_shawl,kani_shawl,sozni_shawls,sozani,wrap,wedding_shawls,grey_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:20500,images:["https://i.etsystatic.com/25846489/r/il/69d5cb/5676126152/il_fullxfull.5676126152_anmn.jpg","https://i.etsystatic.com/25846489/r/il/498085/5724176913/il_fullxfull.5724176913_k2zn.jpg","https://i.etsystatic.com/25846489/r/il/e23467/5724176911/il_fullxfull.5724176911_sfgm.jpg","https://i.etsystatic.com/25846489/r/il/498a16/5724177551/il_fullxfull.5724177551_jpw0.jpg","https://i.etsystatic.com/25846489/r/il/9690dd/5724177559/il_fullxfull.5724177559_k45k.jpg","https://i.etsystatic.com/25846489/r/il/f8b000/5724176851/il_fullxfull.5724176851_p4tp.jpg","https://i.etsystatic.com/25846489/r/il/c6f38d/5724176165/il_fullxfull.5724176165_5e73.jpg","https://i.etsystatic.com/25846489/r/il/d330e5/5724176789/il_fullxfull.5724176789_dscm.jpg","https://i.etsystatic.com/25846489/r/il/0b1d0d/5724176803/il_fullxfull.5724176803_t8um.jpg","https://i.etsystatic.com/25846489/r/il/4c7dc7/5724176867/il_fullxfull.5724176867_nh6s.jpg"]},{TITLE:'40x80" Maroon Pashmina Shawl with Allover Sozni Hand Embroidery, L65',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Maroon

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1155,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:36,images:["https://i.etsystatic.com/25846489/r/il/8d6c67/5724065607/il_fullxfull.5724065607_i0j8.jpg","https://i.etsystatic.com/25846489/r/il/38fdfb/5724065551/il_fullxfull.5724065551_112i.jpg","https://i.etsystatic.com/25846489/r/il/5fc440/5724065957/il_fullxfull.5724065957_4q4u.jpg","https://i.etsystatic.com/25846489/r/il/1e1753/5676011692/il_fullxfull.5676011692_olue.jpg","https://i.etsystatic.com/25846489/r/il/0b3ea2/5676011648/il_fullxfull.5676011648_2y7r.jpg","https://i.etsystatic.com/25846489/r/il/588882/5676011632/il_fullxfull.5676011632_klij.jpg","https://i.etsystatic.com/25846489/r/il/4d491c/5676011374/il_fullxfull.5676011374_hbot.jpg","https://i.etsystatic.com/25846489/r/il/660e69/5676011330/il_fullxfull.5676011330_lnam.jpg","https://i.etsystatic.com/25846489/r/il/f1bdad/5676011224/il_fullxfull.5676011224_6lt9.jpg","https://i.etsystatic.com/25846489/r/il/a3327f/5724065431/il_fullxfull.5724065431_rpb6.jpg"]},{TITLE:'40x80" Pure Pashmina Outline Sozni jama Shawl, L62',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

Base Color : white

Feel: soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:730,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"vicuna,shawl,pashmina_shawl,cashmere_embroidered,needle_work,gift_for_ramadan,kashmiri_shawl,kani_shawl,sozni_shawls,sozani,wrap,wedding_shawls,grey_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:20500,images:["https://i.etsystatic.com/25846489/r/il/1b9983/5724162777/il_fullxfull.5724162777_85ua.jpg","https://i.etsystatic.com/25846489/r/il/81a767/5676109522/il_fullxfull.5676109522_lmae.jpg","https://i.etsystatic.com/25846489/r/il/a8a3f6/5676110160/il_fullxfull.5676110160_c2pj.jpg","https://i.etsystatic.com/25846489/r/il/dff3a8/5724163215/il_fullxfull.5724163215_7saj.jpg","https://i.etsystatic.com/25846489/r/il/374181/5676109760/il_fullxfull.5676109760_qdfe.jpg","https://i.etsystatic.com/25846489/r/il/fd31b9/5676110102/il_fullxfull.5676110102_cd86.jpg","https://i.etsystatic.com/25846489/r/il/f6d4db/5676110190/il_fullxfull.5676110190_ekyo.jpg","https://i.etsystatic.com/25846489/r/il/14c02d/5724162401/il_fullxfull.5724162401_sl7b.jpg","https://i.etsystatic.com/25846489/r/il/78388d/5724163069/il_fullxfull.5724163069_1s8q.jpg","https://i.etsystatic.com/25846489/r/il/ce5d91/5676109164/il_fullxfull.5676109164_2ti5.jpg"]},{TITLE:'40x80" White Sozni Jamawar Hand Embroidered AUthentic Pashmina Shawl, 843',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:930,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,women_wear,kashmirn_pashmina,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day,new_year_gift,2024",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:20500,images:["https://i.etsystatic.com/25846489/r/il/8a9aa4/5630783584/il_fullxfull.5630783584_csf4.jpg","https://i.etsystatic.com/25846489/r/il/55ca79/5678850691/il_fullxfull.5678850691_v57y.jpg","https://i.etsystatic.com/25846489/r/il/ca5ccc/5678850687/il_fullxfull.5678850687_7tnh.jpg","https://i.etsystatic.com/25846489/r/il/3c01c2/5678850755/il_fullxfull.5678850755_94yz.jpg","https://i.etsystatic.com/25846489/r/il/0b1f10/5678850701/il_fullxfull.5678850701_3lie.jpg","https://i.etsystatic.com/25846489/r/il/8d0331/5678850303/il_fullxfull.5678850303_7dra.jpg","https://i.etsystatic.com/25846489/r/il/b0cbba/5630779008/il_fullxfull.5630779008_c8o9.jpg","https://i.etsystatic.com/25846489/r/il/c6e079/5630778954/il_fullxfull.5630778954_j8e2.jpg","https://i.etsystatic.com/25846489/r/il/823524/5678850311/il_fullxfull.5678850311_7a5k.jpg","https://i.etsystatic.com/25846489/r/il/7059b2/5678850363/il_fullxfull.5678850363_1tlc.jpg"]},{TITLE:'40x80" Grey Sozni Hand Embroidery Pure  Pashmina Shawl, L69',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozni are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Grey

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1278,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:36,images:["https://i.etsystatic.com/25846489/r/il/65374e/5724013071/il_fullxfull.5724013071_lhvb.jpg","https://i.etsystatic.com/25846489/r/il/a1d9c7/5675957698/il_fullxfull.5675957698_5ptu.jpg","https://i.etsystatic.com/25846489/r/il/faffd7/5675958146/il_fullxfull.5675958146_pj1u.jpg","https://i.etsystatic.com/25846489/r/il/7de087/5724012165/il_fullxfull.5724012165_kh5g.jpg","https://i.etsystatic.com/25846489/r/il/97a8a1/5675957622/il_fullxfull.5675957622_3izf.jpg","https://i.etsystatic.com/25846489/r/il/b39102/5675957872/il_fullxfull.5675957872_89xk.jpg","https://i.etsystatic.com/25846489/r/il/e7cb4b/5724011689/il_fullxfull.5724011689_ebzs.jpg","https://i.etsystatic.com/25846489/r/il/a4f11a/5675957706/il_fullxfull.5675957706_j2vo.jpg"]},{TITLE:'40x80" Mehndi Green Paper Machie Embroidered Cashmere Shawl, Sozni Wrap made in Kashmir , Handwoven, 140',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Masterpiece Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Experience , The Unique Pashmina Shawl Has Allover Sozni Jama Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Mehndi 

Weave : Tight

Feel :    soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 100× 200cm / 40 × 80inch

Work : Sozni/ Hand Embroidery of Kashmir


NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1188,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_pashmina,exquisite_embroidery,sozni_jamawar,personalized_gift,cashmere_shawl,papier_mache_shawl,exquisite_shawl,pashmina_throw,needle_work,winter_scarf,cachemire,usa_shawls,india_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/260c3c/3368922996/il_fullxfull.3368922996_p387.jpg","https://i.etsystatic.com/25846489/r/il/88cb29/3368922872/il_fullxfull.3368922872_q5re.jpg","https://i.etsystatic.com/25846489/r/il/bd760c/3387235957/il_fullxfull.3387235957_lywt.jpg","https://i.etsystatic.com/25846489/r/il/f2a491/3088140624/il_fullxfull.3088140624_heb3.jpg","https://i.etsystatic.com/25846489/r/il/f5e5a7/3135869859/il_fullxfull.3135869859_kx9d.jpg","https://i.etsystatic.com/25846489/r/il/b96dc4/3135869981/il_fullxfull.3135869981_bf18.jpg","https://i.etsystatic.com/25846489/r/il/0c147b/3416602999/il_fullxfull.3416602999_2yoy.jpg"]},{TITLE:'45x90" Large Size Sozni Neem Jamawar Hand Embroidered Pashmina Shawl with Hand Tilla Zari Border, 862',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Pink

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :   - Dry Clean Only

Size : 45 x 90 inch / 114 x 224 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1495,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,masterpiece_shawl,jamawar_shawl,kashmir_shawl,bridesmaid_shawl,handmade_scarves,modern_women_wrap,ladies_shawl,cashmere_throw,expensive,exquisite,black_pashmina,diwali_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42,images:["https://i.etsystatic.com/25846489/r/il/fe166f/5797845190/il_fullxfull.5797845190_2y01.jpg","https://i.etsystatic.com/25846489/r/il/5d0b4f/5797840744/il_fullxfull.5797840744_b9rq.jpg","https://i.etsystatic.com/25846489/r/il/277e58/5797840740/il_fullxfull.5797840740_qmp5.jpg","https://i.etsystatic.com/25846489/r/il/21625c/5845916989/il_fullxfull.5845916989_a9vu.jpg","https://i.etsystatic.com/25846489/r/il/a631cb/5797840748/il_fullxfull.5797840748_m0ny.jpg","https://i.etsystatic.com/25846489/r/il/c657e0/5845917369/il_fullxfull.5845917369_o1jg.jpg","https://i.etsystatic.com/25846489/r/il/2fffbe/5797840332/il_fullxfull.5797840332_k6fp.jpg","https://i.etsystatic.com/25846489/r/il/0366f6/5797840388/il_fullxfull.5797840388_rhcm.jpg","https://i.etsystatic.com/25846489/r/il/f6d352/5845916865/il_fullxfull.5845916865_avtu.jpg","https://i.etsystatic.com/25846489/r/il/b3628c/5845916653/il_fullxfull.5845916653_sume.jpg"]},{TITLE:"Blue Sozni Hand Embroidered Pashmina Shawl, Pure cashmere, Handwoven wrap, 36",DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir

This adorable Blue Pashmina Shawl is an embodiment of skill shown in the intricacies of Sozni Kaari in Jama pattern where an Artisan's fancy has no limits. He gathers his creativity in his complex needle strokes and forms amazing patterns over an elegant Pashmina which is an ideal pick for winter blues.

Handwoven on wooden handloom

Code:36

Color :  Blue

Condition : Brand New

Feel :   Incredibly soft, lightweight and warm.

Care : - Steam Ironing.

            - Dry Clean Only.

Traditional very fine Sozni Hand Embroidery Needle Work of Kashmir. Embroidery is done using Staple(Cotton) thread.


Size : 200 x 94cm / 80 X 38 inch

Work : Sozni/ Hand Embroidery

NOTE: The actual color of the product may slightly differ due to photographic effects
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1028,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Sozni_Pashmina,Sozni_Shawl,Pashmina_Wrap,Pure_Pashmina_Shawl,Pure_Pashmina_Wrap,kashmiri_pashmina,kashmiri_shawl,real_cashmere,scarves_silk,cachemire,sea_green_shawl,diwali_gift,pure_wool",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/b41106/3165201157/il_fullxfull.3165201157_oini.jpg","https://i.etsystatic.com/25846489/r/il/8726ff/3165189821/il_fullxfull.3165189821_ipad.jpg","https://i.etsystatic.com/25846489/r/il/68b354/3117470260/il_fullxfull.3117470260_3wl8.jpg","https://i.etsystatic.com/25846489/r/il/8321e1/3165189661/il_fullxfull.3165189661_rvc9.jpg","https://i.etsystatic.com/25846489/r/il/b0b8f7/3165190107/il_fullxfull.3165190107_mtjz.jpg","https://i.etsystatic.com/25846489/r/il/94375f/3117470686/il_fullxfull.3117470686_anww.jpg"]},{TITLE:'Sozni Tilla Blend Pashmina Hand Embroidered Shawl, Bridesmaid Shawl, cashmere Pashmina, Wedding wrap Made in Kashmir, 40x80", 147',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Rust

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care : - Steam Ironing.

            - Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:960,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Pure_Pashmina_Wrap,Handmade_Wrap,Pashmina_Shawl,kashmir_Pashmina,ladakh_pashmina,modern_women_wrap,bridesmaid_shawl,zari_shawl,wedding_scareves,shawl_for_nikkah,heirloom_cashmere,meherpreium,designer_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/eabdb4/3417085659/il_fullxfull.3417085659_s894.jpg","https://i.etsystatic.com/25846489/r/il/202f26/3369405312/il_fullxfull.3369405312_mnuo.jpg","https://i.etsystatic.com/25846489/r/il/6fddb2/3369405582/il_fullxfull.3369405582_ttha.jpg","https://i.etsystatic.com/25846489/r/il/a4a70e/3369405230/il_fullxfull.3369405230_o9wk.jpg","https://i.etsystatic.com/25846489/r/il/cf9857/3339508396/il_fullxfull.3339508396_fd7k.jpg","https://i.etsystatic.com/25846489/r/il/7aa597/3089812780/il_fullxfull.3089812780_d94c.jpg","https://i.etsystatic.com/25846489/r/il/bce115/3089816012/il_fullxfull.3089816012_h3w0.jpg","https://i.etsystatic.com/25846489/r/il/b39731/3137542555/il_fullxfull.3137542555_61fg.jpg","https://i.etsystatic.com/25846489/r/il/4996c9/3137542517/il_fullxfull.3137542517_piwb.jpg","https://i.etsystatic.com/25846489/r/il/790727/3369405512/il_fullxfull.3369405512_2utn.jpg"]},{TITLE:'45x90" Handmade Beige Pashmina Shawl, 873',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.
This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Beige

Feel :  soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended

Size : 45 x 90  inch / 114 x 228 cm Approx

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1920,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"sozni_shawl,sozni_embroidered,christmas_cashmere,jamawar_black,hand_work,kashmiri_work,kashmir_shawls,floral_scarfs,new_year,pashmina_on_sale,wraps,scarves,large_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:54,images:["https://i.etsystatic.com/25846489/r/il/59d4d6/5845966923/il_fullxfull.5845966923_pej0.jpg","https://i.etsystatic.com/25846489/r/il/72ee27/5845951753/il_fullxfull.5845951753_952m.jpg","https://i.etsystatic.com/25846489/r/il/cc8ffd/5845951471/il_fullxfull.5845951471_1rei.jpg","https://i.etsystatic.com/25846489/r/il/e140a7/5845951621/il_fullxfull.5845951621_seyz.jpg","https://i.etsystatic.com/25846489/r/il/2f2e00/5797875180/il_fullxfull.5797875180_mbjx.jpg","https://i.etsystatic.com/25846489/r/il/8f3e16/5845952067/il_fullxfull.5845952067_mvns.jpg","https://i.etsystatic.com/25846489/r/il/25f9b0/5797875632/il_fullxfull.5797875632_ouuh.jpg","https://i.etsystatic.com/25846489/r/il/13465d/5845952041/il_fullxfull.5845952041_dlgy.jpg","https://i.etsystatic.com/25846489/r/il/819993/5797875264/il_fullxfull.5797875264_o8tz.jpg","https://i.etsystatic.com/25846489/r/il/1eb6e5/5845952093/il_fullxfull.5845952093_vc1r.jpg"]},{TITLE:'40x80" Artistic Color Combination Sozni Hand Embroidery Border work Pure Pashmina Shawl, SS14',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Blue

Weave : Tight

Feel :    soft, lightweight and warm.

Care :  - Dry Clean Only.

Size : 100 × 200 cm / 40 × 80 inch   Approx

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:806,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"different_style,pashmina_cashmere,pink_pashmina,border_shawl,kashmiri_work,scarves,luxury_wear,fashion,women_modern,large_pashmina,for_mommy,grandma_shawls,real_kashmiri_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:23500,images:["https://i.etsystatic.com/25846489/r/il/c45e96/5347921456/il_fullxfull.5347921456_fhw8.jpg","https://i.etsystatic.com/25846489/r/il/f522dc/5347919870/il_fullxfull.5347919870_26gf.jpg","https://i.etsystatic.com/25846489/r/il/3b60fc/5347919858/il_fullxfull.5347919858_1468.jpg","https://i.etsystatic.com/25846489/r/il/bebe6b/5347919866/il_fullxfull.5347919866_1n26.jpg","https://i.etsystatic.com/25846489/r/il/d1b8cf/5347919892/il_fullxfull.5347919892_fu10.jpg","https://i.etsystatic.com/25846489/r/il/c6eb5d/5396091817/il_fullxfull.5396091817_q603.jpg","https://i.etsystatic.com/25846489/r/il/c4b256/5347919812/il_fullxfull.5347919812_asb9.jpg","https://i.etsystatic.com/25846489/r/il/d1b951/5396091643/il_fullxfull.5396091643_msoe.jpg"]},{TITLE:'Modern Design Pure Pashmina Shawl with Traditional Delicate needle work , Kashmiri wrap, 40x80", AR21, ska',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

Handwoven on wooden handloom

Color :  Bottle Green

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 200 x 108cm / 80 X 42 inch

Work : Sozni/ Hand Embroidery

NOTE: The actual color of the product may slightly differ due to photographic effects
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:734,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meherpremium,exquisite_shawls,kalamkaar_pashmina,kashmiri_shawls,women_accesoseries,cashmere_shawl,real_pashmina,pashmina_saree,designer_pashmina,sozni_shawl,woman_coverup,handmade,scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/ae233d/6238923409/il_fullxfull.6238923409_k5kx.jpg","https://i.etsystatic.com/25846489/r/il/d27a5f/3169391811/il_fullxfull.3169391811_epmr.jpg","https://i.etsystatic.com/25846489/r/il/762f08/3169388875/il_fullxfull.3169388875_t9xk.jpg","https://i.etsystatic.com/25846489/r/il/53b67a/3169389041/il_fullxfull.3169389041_mq1e.jpg","https://i.etsystatic.com/25846489/r/il/c1456c/3121665558/il_fullxfull.3121665558_h4ev.jpg","https://i.etsystatic.com/25846489/r/il/1fc8d3/3844955666/il_fullxfull.3844955666_4r2x.jpg","https://i.etsystatic.com/25846489/r/il/7c0cf0/3892446163/il_fullxfull.3892446163_baft.jpg","https://i.etsystatic.com/25846489/r/il/721e6c/3892446255/il_fullxfull.3892446255_9ypk.jpg","https://i.etsystatic.com/25846489/r/il/246627/3844955596/il_fullxfull.3844955596_g53i.jpg"]},{TITLE:'28x80" Black Pashmina Stole with Hand Embroidery, 246',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf : This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Hand loom

Base Color : Black

Weave : Medium

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 28 x 80 Inch  / 71 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:395,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"multicolor_pashmina,kashmir_scarves,scarfs_handmade,antique_items,wonderful_shawls,happy_Christmas,made_in_india,gift_items,gifting_scarves,premium_schal,stool,handwoven,tot_border",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:1e4,images:["https://i.etsystatic.com/25846489/r/il/7683a9/5912606143/il_fullxfull.5912606143_a1mn.jpg","https://i.etsystatic.com/25846489/r/il/86deed/5864512196/il_fullxfull.5864512196_7hr5.jpg","https://i.etsystatic.com/25846489/r/il/0b1197/5912606187/il_fullxfull.5912606187_egty.jpg","https://i.etsystatic.com/25846489/r/il/8852cf/5864512224/il_fullxfull.5864512224_du7g.jpg","https://i.etsystatic.com/25846489/r/il/ff6678/5864512168/il_fullxfull.5864512168_l83i.jpg","https://i.etsystatic.com/25846489/r/il/8f338b/5864512208/il_fullxfull.5864512208_2ex9.jpg","https://i.etsystatic.com/25846489/r/il/97d29d/5912606145/il_fullxfull.5912606145_avq0.jpg","https://i.etsystatic.com/25846489/r/il/3e1982/5864512166/il_fullxfull.5864512166_n5xx.jpg"]},{TITLE:'28x80" Fawn Pashmina Stole/Scarf with Luxury Kashmiri Gold Tilla Hand Embroidery, M141',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Elegant Pashmina Scarf Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Fawn

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold

Care : Dry Clean Only

Size : 28 x 80 inch / 71x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:490,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,pure_pashmina,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls,hand_tilla_scarves,pashmina_stool,tilla_shawl,autumn_stole",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11,images:["https://i.etsystatic.com/25846489/r/il/42a9d0/4731098572/il_fullxfull.4731098572_lmoc.jpg","https://i.etsystatic.com/25846489/r/il/d93fe1/4779359671/il_fullxfull.4779359671_j1cg.jpg","https://i.etsystatic.com/25846489/r/il/f28a65/4779358755/il_fullxfull.4779358755_nnku.jpg","https://i.etsystatic.com/25846489/r/il/cdda6e/4779358189/il_fullxfull.4779358189_kxpn.jpg","https://i.etsystatic.com/25846489/r/il/90ad07/4731094216/il_fullxfull.4731094216_lki6.jpg","https://i.etsystatic.com/25846489/r/il/735b30/4779356637/il_fullxfull.4779356637_bihq.jpg","https://i.etsystatic.com/25846489/r/il/6aa217/4779352925/il_fullxfull.4779352925_22q7.jpg"]},{TITLE:'28x80" Wedding Scarves, Authentic Pure Pashmina Scarf with Kashmiri Hand Tilla Zari Embroidered on Border and Corners, Bridesmaid Gift, M86',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pink Pashmina With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Scarf. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Red or Bright Maroon

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold

Care : Dry Clean Only

Size : 27x 80 inch / 68 x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:490,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_cashmere,zari_scarves,stole,pashmina_kashmir,kashmir_schal,vintage,happy_christmas_sale,ferozi_stole,meher_premium,bridesmaid,gift_for_her,sister_gifts,red_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11,images:["https://i.etsystatic.com/25846489/r/il/9f861f/4410838026/il_fullxfull.4410838026_jxh8.jpg","https://i.etsystatic.com/25846489/r/il/f54e8f/4410833266/il_fullxfull.4410833266_lkq8.jpg","https://i.etsystatic.com/25846489/r/il/385738/4410833258/il_fullxfull.4410833258_a31s.jpg","https://i.etsystatic.com/25846489/r/il/6f7795/4410833092/il_fullxfull.4410833092_4zdl.jpg","https://i.etsystatic.com/25846489/r/il/6b5a0c/4458220273/il_fullxfull.4458220273_he45.jpg","https://i.etsystatic.com/25846489/r/il/073b42/4458220299/il_fullxfull.4458220299_k1x4.jpg","https://i.etsystatic.com/25846489/r/il/da62b2/4410833124/il_fullxfull.4410833124_m4ml.jpg","https://i.etsystatic.com/25846489/r/il/2c8c56/4458220337/il_fullxfull.4458220337_64ae.jpg"]},{TITLE:'28x80" Turquoise Green Allover Sozni Hand Embroidery Jaaldaar Cashmere Stol, Scarf, M185',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf : This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Turquoise  Green

Weave : Medium

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 28 x 80 Inch  / 71 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:444,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schals,dorukha_reversible,pashmina_white,allover_embroidery,sozni_jama,motif_pashmina,thread_embroidery,kashmir_shawl,women_scarves,cashmere_scarves,summer_shawl,indian_dress,women_wear",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:10500,images:["https://i.etsystatic.com/25846489/r/il/a40950/5128218673/il_fullxfull.5128218673_tbpq.jpg","https://i.etsystatic.com/25846489/r/il/f17896/5079984406/il_fullxfull.5079984406_1l0z.jpg","https://i.etsystatic.com/25846489/r/il/b56343/5128215741/il_fullxfull.5128215741_rxtl.jpg","https://i.etsystatic.com/25846489/r/il/ddc3ae/5128215875/il_fullxfull.5128215875_8b0e.jpg","https://i.etsystatic.com/25846489/r/il/e4ed9f/5079984228/il_fullxfull.5079984228_f1jo.jpg","https://i.etsystatic.com/25846489/r/il/8bdbd2/5128215397/il_fullxfull.5128215397_eem8.jpg","https://i.etsystatic.com/25846489/r/il/22e89e/5079984330/il_fullxfull.5079984330_jjax.jpg"]},{TITLE:'28x80" Maroon Cashmere Scarf, completely Handmade, 227',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: Beautiful Kashmiri Sozni Embroidery Pashmina Scarf with Sober Combination bringing graceful Glow for the one who wears it.

The  Scarf is Handwoven On Handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Color: Red

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 71 x 200 cm/ 28 x 80inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:691,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"sozni_Stole,heavy_Embroidery,pashmina_stool,small_scarves,kashmiri_shawl,black,lightweight,best_handmade_shop,shop_online_pashmina,weaver_scarves,artisan,handspun,tag_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16,images:["https://i.etsystatic.com/25846489/r/il/039fb0/5630862656/il_fullxfull.5630862656_mip0.jpg","https://i.etsystatic.com/25846489/r/il/1c0d98/5678932861/il_fullxfull.5678932861_qmbi.jpg","https://i.etsystatic.com/25846489/r/il/9324b3/5630861050/il_fullxfull.5630861050_e3dn.jpg","https://i.etsystatic.com/25846489/r/il/f15aa6/5630861110/il_fullxfull.5630861110_9la1.jpg","https://i.etsystatic.com/25846489/r/il/af7435/5630861002/il_fullxfull.5630861002_gbok.jpg","https://i.etsystatic.com/25846489/r/il/c219f6/5678932829/il_fullxfull.5678932829_im5v.jpg","https://i.etsystatic.com/25846489/r/il/c81bf7/5630860996/il_fullxfull.5630860996_kwgy.jpg"]},{TITLE:'30x80" Figure Pashmina Stole, 233',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Shawl

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Gorgeous Handwoven Pure Pashmina \\ By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has  Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Grey

Weave: Medium

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 74 x 200cm / 28 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:395,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_cashmere,kashmiri_scarfs,cashmere_pashmina,hand_work,silk_scarf,evening_wrap,handwoven_scarf,kashmir_sozni,white_pashmina,weaving,motif,figure_shawls,handwoven",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:1e4,images:["https://i.etsystatic.com/25846489/r/il/3e6562/5747861397/il_fullxfull.5747861397_poqx.jpg","https://i.etsystatic.com/25846489/r/il/ba9f6e/5699807902/il_fullxfull.5699807902_oity.jpg","https://i.etsystatic.com/25846489/r/il/5d5aca/5699808124/il_fullxfull.5699808124_23xm.jpg","https://i.etsystatic.com/25846489/r/il/8b3704/5747861461/il_fullxfull.5747861461_qteu.jpg","https://i.etsystatic.com/25846489/r/il/2618a0/5747861427/il_fullxfull.5747861427_dfli.jpg","https://i.etsystatic.com/25846489/r/il/78d470/5747861603/il_fullxfull.5747861603_706e.jpg","https://i.etsystatic.com/25846489/r/il/aaebe6/5747861399/il_fullxfull.5747861399_4tov.jpg","https://i.etsystatic.com/25846489/r/il/cdb998/5699807918/il_fullxfull.5699807918_bfod.jpg"]},{TITLE:'30x80" Kashmiri Embroidery on Pure Pashmina Scarf, Kashmir Handmade Wrap, 215',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Palladar Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Base Color: Peach

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 74x200 cm / 30x80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:462,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11e3,images:["https://i.etsystatic.com/25846489/r/il/73e7e1/5348097444/il_fullxfull.5348097444_siac.jpg","https://i.etsystatic.com/25846489/r/il/d867ac/5396266935/il_fullxfull.5396266935_rcem.jpg","https://i.etsystatic.com/25846489/r/il/665ca6/5396266907/il_fullxfull.5396266907_k9z9.jpg","https://i.etsystatic.com/25846489/r/il/826ccb/5348094272/il_fullxfull.5348094272_m8cp.jpg"]},{TITLE:'28x80" Pink Pure Cashmere Pashmina Stole , Beautifully Hand Embroidered Allover Scarf, Soft and Elegant, M146',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf : This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom\\

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Pink 

Weave : Medium

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 28 x 80 Inch  / 71 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:357,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schals,dorukha_reversible,pashmina_white,allover_embroidery,sozni_jama,motif_pashmina,thread_embroidery,kashmir_shawl,women_scarves,cashmere_scarves,summer_shawl,indian_dress,women_wear",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:8,images:["https://i.etsystatic.com/25846489/r/il/4eab0c/4791371462/il_fullxfull.4791371462_2kni.jpg","https://i.etsystatic.com/25846489/r/il/8718b9/4791367966/il_fullxfull.4791367966_9dot.jpg","https://i.etsystatic.com/25846489/r/il/9c0e78/4839632071/il_fullxfull.4839632071_6y4i.jpg","https://i.etsystatic.com/25846489/r/il/99b09c/4791367808/il_fullxfull.4791367808_5p0b.jpg","https://i.etsystatic.com/25846489/r/il/6d4b58/4839631623/il_fullxfull.4839631623_6gxh.jpg","https://i.etsystatic.com/25846489/r/il/fe6269/4791367888/il_fullxfull.4791367888_cdtc.jpg"]},{TITLE:'28x80" Luxury Gold Hand Tilla Zari Embroidery Pure Pashmina Stole, Handmade Wrap Scarves, Bridesmaid Gift, M194',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Elegant Pashmina Scarf Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Base Color : Bottle Green

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold

Care : Dry Clean Only

Size : 28 x 80 inch / 71 x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:497,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,pure_pashmina,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls,hand_tilla_scarves,pashmina_stool,tilla_shawl,silver_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:12,images:["https://i.etsystatic.com/25846489/r/il/cca5d4/5348206926/il_fullxfull.5348206926_haka.jpg","https://i.etsystatic.com/25846489/r/il/6b3156/5396377457/il_fullxfull.5396377457_c553.jpg","https://i.etsystatic.com/25846489/r/il/8464ce/5348205502/il_fullxfull.5348205502_fwce.jpg","https://i.etsystatic.com/25846489/r/il/d6fe1b/5348205526/il_fullxfull.5348205526_c667.jpg","https://i.etsystatic.com/25846489/r/il/a13e82/5396377479/il_fullxfull.5396377479_7v8m.jpg"]},{TITLE:'28x80" Turquoise Blue Pashmina Scarf with Pink Embroidery done by Hand, made in Kashmir Cashmere, HAPPY CHRISTMAS SALE, m91',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Turquoise Blue

Weave: Medium

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 72 x 200 cm / 28 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:358,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"stole_palledar,papermachie,kashmiri_embroidery,pashmina_stole,women_dresses,girls_wear,modern_design_scarfs,neck_scarf,shop,wrap,tone_combination,vintage_scarves,handwoven",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:7.5,images:["https://i.etsystatic.com/25846489/r/il/43730e/4410851186/il_fullxfull.4410851186_pqa4.jpg","https://i.etsystatic.com/25846489/r/il/e821f1/4410851098/il_fullxfull.4410851098_lwo4.jpg","https://i.etsystatic.com/25846489/r/il/2933c0/4458238119/il_fullxfull.4458238119_1bs0.jpg","https://i.etsystatic.com/25846489/r/il/e61917/4458238083/il_fullxfull.4458238083_428d.jpg","https://i.etsystatic.com/25846489/r/il/e860b2/4410851132/il_fullxfull.4410851132_jq0i.jpg","https://i.etsystatic.com/25846489/r/il/cf99cf/4410851188/il_fullxfull.4410851188_23rs.jpg","https://i.etsystatic.com/25846489/r/il/fa4cff/4458238367/il_fullxfull.4458238367_npjd.jpg"]},{TITLE:'28x80" Tie Dye Kashmiri Tilla Border Scarf, Handmade in Kashmir, Pure Cashmere Scarf, Bridesmaids gifts, Cashmere wraps, m186',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Elegant Pashmina Scarf Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Base Color : Tye Dye

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold

Care : Dry Clean Only

Size : 28x 80 inch / 71 x 200 cm Approx

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:497,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina,tilla_shawls,zari_shawl,cashmere,scarves,stool,handwoven,gifting_scarves,wedding_scarves,wedding_pashmina,woven_textile,bridal_shawls,handmade",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:12,images:["https://i.etsystatic.com/25846489/r/il/66d048/5225136833/il_fullxfull.5225136833_nsma.jpg","https://i.etsystatic.com/25846489/r/il/b80139/5225136895/il_fullxfull.5225136895_fcca.jpg","https://i.etsystatic.com/25846489/r/il/c2421c/5176904160/il_fullxfull.5176904160_86hs.jpg","https://i.etsystatic.com/25846489/r/il/30afa3/5225136921/il_fullxfull.5225136921_t35t.jpg"]},{TITLE:"40x80 Ferozi Kashmir Pashmina Shawl with Gold Hand Tilla Zari Embroidery, 825",DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Maroon Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Ferozi / Turquoise Blue

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla : Golden

Care : - Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:769,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Bridesmaids_Shawl,Sozni_Shawl,Handmade_Wrap,meher_premium,kashmir_Pashmina,Pure_Pashmina_Shawl,cashmere_wraps,gifts_for_mom,hand_tilla_zari,Gold_work,Gifts_for_her,christmas_edition,wedding_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19,images:["https://i.etsystatic.com/25846489/r/il/79e365/5396615085/il_fullxfull.5396615085_btsw.jpg","https://i.etsystatic.com/25846489/r/il/1da485/5348440990/il_fullxfull.5348440990_57fx.jpg","https://i.etsystatic.com/25846489/r/il/25b872/5396612907/il_fullxfull.5396612907_f09y.jpg","https://i.etsystatic.com/25846489/r/il/3faee3/5396613003/il_fullxfull.5396613003_3ewp.jpg","https://i.etsystatic.com/25846489/r/il/60fc70/5348440964/il_fullxfull.5348440964_os8g.jpg"]},{TITLE:'40x80" Black Pure Pashmina Shawl with Luxury Kashmiri Hand Tilla Zari Embroidery, Wedding Scarves, Bridesmaid Gifts, L48',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Elegant Pashmina Shawl Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand. 

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Black 

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :   Golden

Care : -  Gentle Hand Wash Recommended .

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:681,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_shawls,mothers_gift,shawl_for_mom,zari_scarves,hand_embroidery,pashmina_embroidered,red_color_pashmeena,antique_scarves,meherpremium,new,best_shop,handwoven,gi_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16500,images:["https://i.etsystatic.com/25846489/r/il/07bbd1/5348389426/il_fullxfull.5348389426_4qbb.jpg","https://i.etsystatic.com/25846489/r/il/4c224f/5348385992/il_fullxfull.5348385992_7jme.jpg","https://i.etsystatic.com/25846489/r/il/5fd569/5396557847/il_fullxfull.5396557847_fz9u.jpg","https://i.etsystatic.com/25846489/r/il/23b5f9/5348386108/il_fullxfull.5348386108_g72y.jpg","https://i.etsystatic.com/25846489/r/il/6a3a40/5396557875/il_fullxfull.5396557875_795e.jpg","https://i.etsystatic.com/25846489/r/il/52f8dc/5348386086/il_fullxfull.5348386086_b4w4.jpg"]},{TITLE:'40x80" Black Pashmina Shawl with Luxury Kashmiri Hand Tilla Zari, 860, 920, 921',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Black

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla  Hand Embroidery of  Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:3,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/e576d0/5912587617/il_fullxfull.5912587617_tw5l.jpg","https://i.etsystatic.com/25846489/r/il/6d5945/5912587577/il_fullxfull.5912587577_pb44.jpg","https://i.etsystatic.com/25846489/r/il/cdcc77/5912587377/il_fullxfull.5912587377_hhrm.jpg","https://i.etsystatic.com/25846489/r/il/2b27d9/5912587593/il_fullxfull.5912587593_qsgw.jpg","https://i.etsystatic.com/25846489/r/il/d58506/5864493320/il_fullxfull.5864493320_fh7q.jpg","https://i.etsystatic.com/25846489/r/il/ecfd7f/5912587347/il_fullxfull.5912587347_i9p7.jpg","https://i.etsystatic.com/25846489/r/il/f60ecb/5912587529/il_fullxfull.5912587529_n1a4.jpg","https://i.etsystatic.com/25846489/r/il/2fdb55/5864493272/il_fullxfull.5864493272_ob53.jpg","https://i.etsystatic.com/25846489/r/il/f1ce77/5864493256/il_fullxfull.5864493256_5cr5.jpg","https://i.etsystatic.com/25846489/r/il/9b3783/5912587327/il_fullxfull.5912587327_mmnz.jpg"]},{TITLE:'40x80" Light Golden  Tilla hand embroidery pure pashmina shawl in Turquoise Blue | Cashmere Shawl 848',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Turquoise Blue Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

The Shawl is Handwoven

Base Color : Turquoise Blue

Weave: Tight

Feel :  soft, lightweight and warm.
 
Traditional very fine Tilla Zari Hand Embroidery Needle Work of Kashmir. Embroidery is done using Metallic Tilla thread.

Color Of Tilla :   Golden

Tilla Quality : Guaranteed

Care : - Steam Ironing.

            - Dry Clean Only.

Size : 40 x 80  inch / 100 x 200cm

Work : Tilla  Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:800,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/ed57e4/5724150329/il_fullxfull.5724150329_4529.jpg","https://i.etsystatic.com/25846489/r/il/69eb8d/5724142419/il_fullxfull.5724142419_bz5u.jpg","https://i.etsystatic.com/25846489/r/il/a32d3e/5676089324/il_fullxfull.5676089324_t61i.jpg","https://i.etsystatic.com/25846489/r/il/c38920/5676089312/il_fullxfull.5676089312_ryie.jpg","https://i.etsystatic.com/25846489/r/il/db9cf7/5676089254/il_fullxfull.5676089254_j6k4.jpg","https://i.etsystatic.com/25846489/r/il/a188ff/5724142287/il_fullxfull.5724142287_dpzl.jpg","https://i.etsystatic.com/25846489/r/il/ebabcf/5724142423/il_fullxfull.5724142423_s0a1.jpg","https://i.etsystatic.com/25846489/r/il/cecc39/5724142433/il_fullxfull.5724142433_jdlc.jpg","https://i.etsystatic.com/25846489/r/il/60da75/5676088812/il_fullxfull.5676088812_ib7u.jpg","https://i.etsystatic.com/25846489/r/il/517e8b/5676089012/il_fullxfull.5676089012_4qjx.jpg"]},{TITLE:'42x84" Black Pashmina Shawl With Finest Luxury Kashmiri Gold Hand Tilla Zari Embroidery, Handmade Cashmere Wrap, Wedding Special, 896',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Elegant Pashmina Shawl Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand. 

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Black

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Care : -  Gentle Hand Wash Recommended .

Size : 42 x 84 inch / 106 x 213cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:820,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meher_premium,kashmir_Pashmina,cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,heirloom_wrap,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16,images:["https://i.etsystatic.com/25846489/r/il/cea18a/5797911534/il_fullxfull.5797911534_n602.jpg","https://i.etsystatic.com/25846489/r/il/73cb48/5797909328/il_fullxfull.5797909328_e454.jpg","https://i.etsystatic.com/25846489/r/il/fdf5d3/5797909362/il_fullxfull.5797909362_pgel.jpg","https://i.etsystatic.com/25846489/r/il/8170ef/5845985203/il_fullxfull.5845985203_ref3.jpg","https://i.etsystatic.com/25846489/r/il/d6e2bd/5797909002/il_fullxfull.5797909002_64ps.jpg","https://i.etsystatic.com/25846489/r/il/857042/5797909026/il_fullxfull.5797909026_qhyw.jpg","https://i.etsystatic.com/25846489/r/il/fef578/5797909254/il_fullxfull.5797909254_54rx.jpg","https://i.etsystatic.com/25846489/r/il/492b79/5797911978/il_fullxfull.5797911978_99yz.jpg","https://i.etsystatic.com/25846489/r/il/30d35f/5797908952/il_fullxfull.5797908952_enlq.jpg","https://i.etsystatic.com/25846489/r/il/5c8e78/5797909000/il_fullxfull.5797909000_37zk.jpg"]},{TITLE:'54x108" 3 Yards Delicate Embroidery Pure Kashmir Pashmina Shawl, Collectible Wrap, XL Size, 701',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

Handwoven on wooden handloom

Color :  Grey

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108 inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1382,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,christmas",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:35e3,images:["https://i.etsystatic.com/25846489/r/il/bffbc4/4406211377/il_fullxfull.4406211377_n7nm.jpg","https://i.etsystatic.com/25846489/r/il/171a2e/4406208471/il_fullxfull.4406208471_fbmw.jpg","https://i.etsystatic.com/25846489/r/il/548baf/4406208497/il_fullxfull.4406208497_a0ma.jpg","https://i.etsystatic.com/25846489/r/il/ae090c/4406208525/il_fullxfull.4406208525_cppl.jpg","https://i.etsystatic.com/25846489/r/il/517332/4358825180/il_fullxfull.4358825180_m78e.jpg","https://i.etsystatic.com/25846489/r/il/5b52d7/4406208465/il_fullxfull.4406208465_8sao.jpg","https://i.etsystatic.com/25846489/r/il/89032c/4406208437/il_fullxfull.4406208437_9t3b.jpg"]},{TITLE:'54x108" Pure Pashmina Gents Border Embroidery Shawl, Mens Cashmere, XL Wrap, 766',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

Handwoven on wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Color :  Pista

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108 inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1118,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,men_pashmina,gents_border",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27,images:["https://i.etsystatic.com/25846489/r/il/96b952/4838900661/il_fullxfull.4838900661_awu8.jpg","https://i.etsystatic.com/25846489/r/il/4b7c8b/4790638074/il_fullxfull.4790638074_se66.jpg","https://i.etsystatic.com/25846489/r/il/e404bf/4790637946/il_fullxfull.4790637946_diwq.jpg","https://i.etsystatic.com/25846489/r/il/6bcca2/4790638184/il_fullxfull.4790638184_4cgp.jpg","https://i.etsystatic.com/25846489/r/il/5ac7c2/4790638352/il_fullxfull.4790638352_tatj.jpg","https://i.etsystatic.com/25846489/r/il/336c45/4790638416/il_fullxfull.4790638416_5a02.jpg","https://i.etsystatic.com/25846489/r/il/ec9a8a/4838900767/il_fullxfull.4838900767_kym7.jpg","https://i.etsystatic.com/25846489/r/il/2f06e1/4790638576/il_fullxfull.4790638576_b6mx.jpg"]},{TITLE:"40x80 Stunning Black Pure Pashmina Shawl with Sozni border embroidery with Hand Tilla Touch, bridesmaid wrap, 809",DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Black

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :- Dry Clean Only.
Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1033,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:26.5,images:["https://i.etsystatic.com/25846489/r/il/f415f6/5054970028/il_fullxfull.5054970028_5e1y.jpg","https://i.etsystatic.com/25846489/r/il/53c6a5/5054970248/il_fullxfull.5054970248_k720.jpg","https://i.etsystatic.com/25846489/r/il/8e781a/5103200949/il_fullxfull.5103200949_8p9a.jpg","https://i.etsystatic.com/25846489/r/il/32186a/5103200647/il_fullxfull.5103200647_77qt.jpg","https://i.etsystatic.com/25846489/r/il/d60473/5103201013/il_fullxfull.5103201013_ph9t.jpg","https://i.etsystatic.com/25846489/r/il/b1aacc/5103200991/il_fullxfull.5103200991_dvn9.jpg","https://i.etsystatic.com/25846489/r/il/6e540c/5103201009/il_fullxfull.5103201009_jmul.jpg","https://i.etsystatic.com/25846489/r/il/e05832/5054969924/il_fullxfull.5054969924_gx4k.jpg","https://i.etsystatic.com/25846489/r/il/bdec33/5054970222/il_fullxfull.5054970222_4ems.jpg","https://i.etsystatic.com/25846489/r/il/4cbdb0/5103201029/il_fullxfull.5103201029_hohh.jpg"]},{TITLE:'40x80" Craft Reserve Pashmina Border Shawl, 894',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Black  

Feel :  soft, lightweight and warm.

Color Of Tilla :  Golden and Silver

Care : - Gentle hand wash Recommended 

Size : 40x80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:852,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,christmas_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:24,images:["https://i.etsystatic.com/25846489/r/il/001b04/5912565803/il_fullxfull.5912565803_mbul.jpg","https://i.etsystatic.com/25846489/r/il/f08313/5864470126/il_fullxfull.5864470126_3dfj.jpg","https://i.etsystatic.com/25846489/r/il/1ac76c/5912563997/il_fullxfull.5912563997_in2x.jpg","https://i.etsystatic.com/25846489/r/il/08b63e/5864470124/il_fullxfull.5864470124_5lt2.jpg","https://i.etsystatic.com/25846489/r/il/5a6779/5912564089/il_fullxfull.5912564089_7n3k.jpg","https://i.etsystatic.com/25846489/r/il/1632c8/5864470198/il_fullxfull.5864470198_gvuz.jpg","https://i.etsystatic.com/25846489/r/il/035797/5912564251/il_fullxfull.5912564251_ld40.jpg","https://i.etsystatic.com/25846489/r/il/c4e791/5912564239/il_fullxfull.5912564239_95qw.jpg","https://i.etsystatic.com/25846489/r/il/329963/5912564255/il_fullxfull.5912564255_2xz5.jpg","https://i.etsystatic.com/25846489/r/il/b3e4bb/5864470296/il_fullxfull.5864470296_2jgy.jpg"]},{TITLE:'40x80" Craft Reserve Pashmina Border Shawl, 870',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Maroon  

Feel :  soft, lightweight and warm.

Color Of Tilla :  Golden and Silver

Care : - Gentle hand wash Recommended 

Size : 40x80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:852,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,christmas_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:24,images:["https://i.etsystatic.com/25846489/r/il/778166/5912591351/il_fullxfull.5912591351_km0f.jpg","https://i.etsystatic.com/25846489/r/il/561264/5864497186/il_fullxfull.5864497186_hv5e.jpg","https://i.etsystatic.com/25846489/r/il/d2e0a7/5912591369/il_fullxfull.5912591369_5rb9.jpg","https://i.etsystatic.com/25846489/r/il/edaa52/5912591279/il_fullxfull.5912591279_ef96.jpg","https://i.etsystatic.com/25846489/r/il/3d46b7/5912591287/il_fullxfull.5912591287_c33x.jpg","https://i.etsystatic.com/25846489/r/il/803302/5912591347/il_fullxfull.5912591347_p1hw.jpg","https://i.etsystatic.com/25846489/r/il/ded20c/5912591153/il_fullxfull.5912591153_r7gz.jpg","https://i.etsystatic.com/25846489/r/il/4cb00f/5864496976/il_fullxfull.5864496976_egl7.jpg","https://i.etsystatic.com/25846489/r/il/fb7993/5912591281/il_fullxfull.5912591281_ctlj.jpg","https://i.etsystatic.com/25846489/r/il/d95b94/5864496900/il_fullxfull.5864496900_fxe2.jpg"]},{TITLE:'43x86" Pink Pashmina Shawl With Kashmiri Tilla Thread Work, Hand Embroidered my Master Artisans, Handwoven, Luxury Wdding Gifts, 730',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : pink

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care :- Dry Clean Only.

Size : 43 x 86 Inch or 108 x 218 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1080,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,brown_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/b793a4/4514632710/il_fullxfull.4514632710_34lx.jpg","https://i.etsystatic.com/25846489/r/il/f1e0a6/4562001933/il_fullxfull.4562001933_gpye.jpg","https://i.etsystatic.com/25846489/r/il/e92284/4514623410/il_fullxfull.4514623410_q6hg.jpg","https://i.etsystatic.com/25846489/r/il/ce9072/4562001843/il_fullxfull.4562001843_8zog.jpg","https://i.etsystatic.com/25846489/r/il/7e963c/4562001405/il_fullxfull.4562001405_iubi.jpg"]},{TITLE:'Sozni Kashmiri Tilla Outline Embroidered Cashmere Pashmina Shawl, Handmade Wrap of Kashmir Valley, 42x86" , AR101',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Beautiful Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Peacock Blue

Feel :  soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended 

Size : 42 x 86 inch / 108 x 212cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:796,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina_sarees,cashmere_throws,sozni_shawl,pashmina_shawl,anniversary_gifts,gift_items,cashmere_scarves,best_seller,handmade_with_love,prayer_shawls,bridal_shawl,cashmere_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/8d42cf/3161682821/il_fullxfull.3161682821_gxki.jpg","https://i.etsystatic.com/25846489/r/il/9ca86e/3161683671/il_fullxfull.3161683671_df6q.jpg","https://i.etsystatic.com/25846489/r/il/67925d/3113967280/il_fullxfull.3113967280_rfl4.jpg","https://i.etsystatic.com/25846489/r/il/a3f2f5/3161682765/il_fullxfull.3161682765_729e.jpg","https://i.etsystatic.com/25846489/r/il/ecc664/3161682685/il_fullxfull.3161682685_qbuo.jpg"]},{TITLE:'41x85" Natural Grey Pashmina Shawl With Kashmiri Tilla Thread Work, Hand Embroidered my Master Artisans, 742',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Natural Grey

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care :- Dry Clean Only.

Size : 41 x 85 Inch or 103 x 216 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1080,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:26,images:["https://i.etsystatic.com/25846489/r/il/c3a7b0/4715867369/il_fullxfull.4715867369_i413.jpg","https://i.etsystatic.com/25846489/r/il/0964d1/4667624188/il_fullxfull.4667624188_82px.jpg","https://i.etsystatic.com/25846489/r/il/32f5ba/4715860845/il_fullxfull.4715860845_rsga.jpg","https://i.etsystatic.com/25846489/r/il/9bd382/4715860881/il_fullxfull.4715860881_s23h.jpg","https://i.etsystatic.com/25846489/r/il/6abc56/4667624370/il_fullxfull.4667624370_4map.jpg","https://i.etsystatic.com/25846489/r/il/399856/4667624384/il_fullxfull.4667624384_hx0v.jpg","https://i.etsystatic.com/25846489/r/il/d26e1c/4667624406/il_fullxfull.4667624406_o0jp.jpg"]},{TITLE:'40x80" Sea Green Pure Pashmina Sozni Border Shawl with Tilla Zari Touch, Completely Handmade, 816',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Sea Green

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care : - Gentle hand wash Recommended 

Size : 40 x 80 Inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:874,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22e3,images:["https://i.etsystatic.com/25846489/r/il/44bac6/5225116527/il_fullxfull.5225116527_qbkw.jpg","https://i.etsystatic.com/25846489/r/il/e91ce3/5225114339/il_fullxfull.5225114339_25bb.jpg","https://i.etsystatic.com/25846489/r/il/b4c9d6/5225114337/il_fullxfull.5225114337_c07b.jpg","https://i.etsystatic.com/25846489/r/il/55437a/5176881454/il_fullxfull.5176881454_if3s.jpg","https://i.etsystatic.com/25846489/r/il/a99920/5225114379/il_fullxfull.5225114379_5pf0.jpg","https://i.etsystatic.com/25846489/r/il/c21fc7/5176881652/il_fullxfull.5176881652_ot8a.jpg","https://i.etsystatic.com/25846489/r/il/b05ac5/5176881632/il_fullxfull.5176881632_cv9k.jpg","https://i.etsystatic.com/25846489/r/il/d5d83a/5225114365/il_fullxfull.5225114365_d7f1.jpg","https://i.etsystatic.com/25846489/r/il/819527/5225114477/il_fullxfull.5225114477_qtzw.jpg"]},{TITLE:'40x80" Yellow Pashmina Shawl, 806',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : mustard Yellow

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care : - Gentle hand wash Recommended 

Size : 40 x 80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:867,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,summer_wrap",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:21800,images:["https://i.etsystatic.com/25846489/r/il/f0a185/5055022438/il_fullxfull.5055022438_4csq.jpg","https://i.etsystatic.com/25846489/r/il/149f29/5055021240/il_fullxfull.5055021240_dxyk.jpg","https://i.etsystatic.com/25846489/r/il/d2dca2/5103251641/il_fullxfull.5103251641_k6to.jpg","https://i.etsystatic.com/25846489/r/il/9d1158/5055020890/il_fullxfull.5055020890_jdpu.jpg","https://i.etsystatic.com/25846489/r/il/95d2bb/5055021332/il_fullxfull.5055021332_fdbd.jpg","https://i.etsystatic.com/25846489/r/il/38891d/5103251635/il_fullxfull.5103251635_8hr2.jpg","https://i.etsystatic.com/25846489/r/il/4bab65/5103251273/il_fullxfull.5103251273_6xq3.jpg","https://i.etsystatic.com/25846489/r/il/e8bbb7/5055021264/il_fullxfull.5055021264_59nd.jpg","https://i.etsystatic.com/25846489/r/il/043f66/5055021288/il_fullxfull.5055021288_gb8t.jpg"]},{TITLE:'28x80" Pure Cashmere Pashmina Scarf With Kashmiri Sozni Embroidery, Handmade in Kashmir, gift for mom, Luxury Scarves, 249',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Color: Beige 

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 72 x 200 cm / 28 x 80 inch approx

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:461,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_white,gift_for_her,annual_sale,autumn_scarf,neck_scarf,women_scarf,soft_pashmina,mother_days,sozni_scarf,boho_wrap,drape,kashmiri_shawl,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11700,images:["https://i.etsystatic.com/25846489/r/il/c6ee32/5912559781/il_fullxfull.5912559781_svsp.jpg","https://i.etsystatic.com/25846489/r/il/bf07c0/5864461672/il_fullxfull.5864461672_4634.jpg","https://i.etsystatic.com/25846489/r/il/93ddf3/5912555631/il_fullxfull.5912555631_av8k.jpg","https://i.etsystatic.com/25846489/r/il/a3a0c3/5912555633/il_fullxfull.5912555633_gvue.jpg","https://i.etsystatic.com/25846489/r/il/231c10/5912555643/il_fullxfull.5912555643_mzmp.jpg","https://i.etsystatic.com/25846489/r/il/cc7366/5912555505/il_fullxfull.5912555505_imai.jpg","https://i.etsystatic.com/25846489/r/il/b7fa94/5864461704/il_fullxfull.5864461704_666s.jpg","https://i.etsystatic.com/25846489/r/il/cd1613/5912555549/il_fullxfull.5912555549_b3ku.jpg","https://i.etsystatic.com/25846489/r/il/ae3859/5912555487/il_fullxfull.5912555487_gspv.jpg"]},{TITLE:'54x108" Large Size Gents Plain Reversible Check Handwoven Pashmina Wrap of Kashmir, Soft Shawls, Ideal Winter Scarf, Luxury Cashmere, L84',DESCRIPTION:`Authentic Handwoven Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

This Pashmina Shawl is designed in Unique Reversible Shade  pattern in different subtle colors. This Shawl is crafted by the most talented Kashmiri Artisans with extreme skill and expertise. The skills represent the true craftsmanship of these Kashmiri Artisans. Uplift your look with the amazingly designed Pashmina with its unyielding charm and lend yourself the eternal luxury of Pashmina, an epitome of class, style, culture and tradition.

The  Shawl is Handwoven On Handloom

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Dry Clean Only

Size : 137 × 274 cm / 54 × 80 Inch approx.

Work : Hand woven

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"bohemian_shawls,pashmina_wraps,solid_color_shawl,warm_cashmere,gold_shawl,women_scarfs,pashmina_shawls,women_shawl,woven_wrap,gift_for_her,gift_for_daughter,gift_for_mothers,grandma_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:15,images:["https://i.etsystatic.com/25846489/r/il/119212/5871587075/il_fullxfull.5871587075_1t3p.jpg","https://i.etsystatic.com/25846489/r/il/1771ca/5823494900/il_fullxfull.5823494900_3dqu.jpg","https://i.etsystatic.com/25846489/r/il/67988f/5823494918/il_fullxfull.5823494918_s54u.jpg","https://i.etsystatic.com/25846489/r/il/aae238/5871587107/il_fullxfull.5871587107_1az8.jpg","https://i.etsystatic.com/25846489/r/il/dc4079/5871587009/il_fullxfull.5871587009_8tuy.jpg","https://i.etsystatic.com/25846489/r/il/e7828f/5823494938/il_fullxfull.5823494938_j9p3.jpg","https://i.etsystatic.com/25846489/r/il/845a61/5823494984/il_fullxfull.5823494984_izty.jpg"]},{TITLE:'40x80" Fawn Kashmir Pashmina Shawl, Fine Sozni Allover Hand Embroidery, Craftsmen wrap, L57',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Fawn

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1210,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,paper_machie_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:40500,images:["https://i.etsystatic.com/25846489/r/il/c573d8/5473982741/il_fullxfull.5473982741_37yo.jpg","https://i.etsystatic.com/25846489/r/il/d51259/5425846482/il_fullxfull.5425846482_2fng.jpg","https://i.etsystatic.com/25846489/r/il/72a7cb/5473973795/il_fullxfull.5473973795_s1db.jpg","https://i.etsystatic.com/25846489/r/il/a3a273/5473973765/il_fullxfull.5473973765_pxsr.jpg","https://i.etsystatic.com/25846489/r/il/b43d06/5425846446/il_fullxfull.5425846446_6nsx.jpg","https://i.etsystatic.com/25846489/r/il/14b8ec/5425846724/il_fullxfull.5425846724_30vi.jpg","https://i.etsystatic.com/25846489/r/il/19e72a/5425846550/il_fullxfull.5425846550_6h4c.jpg"]},{TITLE:'54x108" Oversize Gents Pashmina Wrap with Delicate Sozni Border Embroidery, Artistic Cashmere Shawl, Hand Made in Kashmir, 852',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Grey Brown

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 137 × 274 cm / 54 × 108 inch 

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1315,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"winter_shawls,kashmir_pashmina,mens_shawl,scarf,on_sale,women_wear,mens_wear,shawl_for_men,handmade_items,gifts,gents_pashmina,gents_shawl,large_wraps",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/3f5719/5823471492/il_fullxfull.5823471492_s2a6.jpg","https://i.etsystatic.com/25846489/r/il/07a17e/5823471344/il_fullxfull.5823471344_nve2.jpg","https://i.etsystatic.com/25846489/r/il/ca60ab/5823471430/il_fullxfull.5823471430_9vtn.jpg","https://i.etsystatic.com/25846489/r/il/6cb163/5823471520/il_fullxfull.5823471520_6440.jpg","https://i.etsystatic.com/25846489/r/il/1d1c4a/5823471504/il_fullxfull.5823471504_o0gg.jpg","https://i.etsystatic.com/25846489/r/il/6c6882/5871563287/il_fullxfull.5871563287_73z9.jpg"]},{TITLE:'54x108" Oversize Gents Pashmina Wrap with Delicate Sozni Border Embroidery, Artistic Cashmere Shawl, Hand Made in Kashmir, 886',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Grey

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 137 × 274 cm / 54 × 108 inch 

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1230,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"winter_shawls,kashmir_pashmina,mens_shawl,scarf,on_sale,women_wear,mens_wear,shawl_for_men,handmade_items,gifts,gents_pashmina,gents_shawl,large_wraps",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:34500,images:["https://i.etsystatic.com/25846489/r/il/50b3ec/5871571607/il_fullxfull.5871571607_i583.jpg","https://i.etsystatic.com/25846489/r/il/4b2750/5871571515/il_fullxfull.5871571515_aydj.jpg","https://i.etsystatic.com/25846489/r/il/862a2b/5871571617/il_fullxfull.5871571617_75kp.jpg","https://i.etsystatic.com/25846489/r/il/ddcd0c/5823479472/il_fullxfull.5823479472_hzug.jpg","https://i.etsystatic.com/25846489/r/il/df1d54/5823479432/il_fullxfull.5823479432_nkvr.jpg","https://i.etsystatic.com/25846489/r/il/2d669a/5871571577/il_fullxfull.5871571577_kexl.jpg"]},{TITLE:'54x108" 3Yards Delicate Embroidery Pure Kashmir Pashmina Shawl, Collectible Wrap, XL Size, 853',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

Handwoven on wooden handloom

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108 inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1335,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/112685/5823486978/il_fullxfull.5823486978_44f8.jpg","https://i.etsystatic.com/25846489/r/il/daf2cc/5871578897/il_fullxfull.5871578897_emgr.jpg","https://i.etsystatic.com/25846489/r/il/52c35b/5871579083/il_fullxfull.5871579083_fay0.jpg","https://i.etsystatic.com/25846489/r/il/88810d/5823487054/il_fullxfull.5823487054_hshq.jpg","https://i.etsystatic.com/25846489/r/il/8c7eed/5823487056/il_fullxfull.5823487056_i6zn.jpg","https://i.etsystatic.com/25846489/r/il/925431/5823487008/il_fullxfull.5823487008_34jz.jpg"]},{TITLE:'45x90" XL Handwoven Pure Pashmina Shawl With Kashmiri Palledaar Sozni Hand Embroidery, sm65',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Black

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care : - Dry Clean Only.

Size : 45 x 90 Inch / 114 x 228 cm Approx

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:710,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_shawl,sozni_wrap,kalamkaar,sozni_embroidery,pashmina_sozni,kani_shawl,jamawar,shawl_embroidered,scarf_for_women,winter,papermache_shawl,indian_dupatta,cashmere_blanket",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22300,images:["https://i.etsystatic.com/25846489/r/il/baa261/5871551151/il_fullxfull.5871551151_puvl.jpg","https://i.etsystatic.com/25846489/r/il/220706/5871547279/il_fullxfull.5871547279_i6y6.jpg","https://i.etsystatic.com/25846489/r/il/703704/5871547271/il_fullxfull.5871547271_5mww.jpg","https://i.etsystatic.com/25846489/r/il/669dd0/5823455458/il_fullxfull.5823455458_hf1x.jpg","https://i.etsystatic.com/25846489/r/il/ce3b44/5823455542/il_fullxfull.5823455542_g9qv.jpg","https://i.etsystatic.com/25846489/r/il/159759/5871547281/il_fullxfull.5871547281_134l.jpg"]},{TITLE:'54x108"  Sozni Big Border Hand embroidered Pure Pashmina Shawl, Gents Size, XL Wrap, 866',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Fawn

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 137 × 274 cm / 54 × 108 inch 

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1140,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"winter_shawls,kashmir_pashmina,mens_shawl,scarf,on_sale,women_wear,mens_wear,shawl_for_men,handmade_items,gifts,gents_pashmina,gents_shawl,large_wraps",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27,images:["https://i.etsystatic.com/25846489/r/il/109556/5823468192/il_fullxfull.5823468192_miq1.jpg","https://i.etsystatic.com/25846489/r/il/23bd71/5823462900/il_fullxfull.5823462900_ln9j.jpg","https://i.etsystatic.com/25846489/r/il/e8bb18/5871554721/il_fullxfull.5871554721_eftn.jpg","https://i.etsystatic.com/25846489/r/il/95168e/5823462916/il_fullxfull.5823462916_hgx8.jpg","https://i.etsystatic.com/25846489/r/il/8dde28/5823462908/il_fullxfull.5823462908_omlu.jpg","https://i.etsystatic.com/25846489/r/il/f2ea72/5823462894/il_fullxfull.5823462894_t087.jpg"]},{TITLE:'45x90"Real Handmade Pashmina Shawl of Kashmir with Delicate Allover Sozni Needle Hand Embroidery, Soothing Colormatching XL Scarves, 858',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Jama Sozni Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with Allover Hand  Embroidery(Sozni)  from Kashmir

This adorable Pashmina Shawl is an embodiment of skill shown in the intricacies of Sozni Kaari in Jama pattern where an Artisan's fancy has no limits. He gathers his creativity in his complex needle strokes and forms amazing patterns over an elegant Pashmina which is an ideal pick for winter blues.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven 

Base Color: Black

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 45 x 90 Inch / 114 x 228 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:830,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"hand_embroidered,cashmere_shawls,sozni_shawl,jama_shawl,embroidered_pashmina,pure_pashmina,pashmina_gift,fine_embroidery,meherpremium_shawl,pashmina_schal,cashmere_wrap,kashmir,cashmere_throw",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:23e3,images:["https://i.etsystatic.com/25846489/r/il/bc601c/5823317668/il_fullxfull.5823317668_nf6u.jpg","https://i.etsystatic.com/25846489/r/il/6f202c/5871406893/il_fullxfull.5871406893_g7go.jpg","https://i.etsystatic.com/25846489/r/il/322546/5871407155/il_fullxfull.5871407155_mjqb.jpg","https://i.etsystatic.com/25846489/r/il/73da53/5871406973/il_fullxfull.5871406973_kls8.jpg","https://i.etsystatic.com/25846489/r/il/34f6de/5823316412/il_fullxfull.5823316412_prc4.jpg","https://i.etsystatic.com/25846489/r/il/601fb8/5871406997/il_fullxfull.5871406997_ts68.jpg","https://i.etsystatic.com/25846489/r/il/9debc5/5823316400/il_fullxfull.5823316400_c034.jpg"]},{TITLE:'40x80" Black Multicolor Border Pashmina Shawl, L83',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Black

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:480,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,border_shawl,white_pashmina,resham_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13400,images:["https://i.etsystatic.com/25846489/r/il/06e1ab/5823397752/il_fullxfull.5823397752_msfn.jpg","https://i.etsystatic.com/25846489/r/il/697072/5823393822/il_fullxfull.5823393822_cc8s.jpg","https://i.etsystatic.com/25846489/r/il/87c29c/5871484499/il_fullxfull.5871484499_ppj7.jpg","https://i.etsystatic.com/25846489/r/il/220ccf/5871484555/il_fullxfull.5871484555_3ev0.jpg","https://i.etsystatic.com/25846489/r/il/3a2e42/5823393764/il_fullxfull.5823393764_ris4.jpg","https://i.etsystatic.com/25846489/r/il/6b9129/5871484567/il_fullxfull.5871484567_fxut.jpg","https://i.etsystatic.com/25846489/r/il/25b828/5823393972/il_fullxfull.5823393972_pgo0.jpg"]},{TITLE:'40x80" Grey Pashmina Shawl with Kashmiri Hand Tilla',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The Shawl is Handwoven

Base Color : Natural Grey

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Tilla Quality : Guaranteed

Care :  Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla  Hand Embroidery of  Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,white_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22,images:["https://i.etsystatic.com/25846489/r/il/90f2a7/5823437750/il_fullxfull.5823437750_lblx.jpg","https://i.etsystatic.com/25846489/r/il/e6fd8d/5871525045/il_fullxfull.5871525045_okd1.jpg","https://i.etsystatic.com/25846489/r/il/53ff0a/5871525143/il_fullxfull.5871525143_h4yy.jpg","https://i.etsystatic.com/25846489/r/il/215317/5823433812/il_fullxfull.5823433812_now6.jpg","https://i.etsystatic.com/25846489/r/il/9a2e6b/5823433956/il_fullxfull.5823433956_oi78.jpg","https://i.etsystatic.com/25846489/r/il/ec80ca/5823433920/il_fullxfull.5823433920_8z0z.jpg","https://i.etsystatic.com/25846489/r/il/49b6ca/5871525083/il_fullxfull.5871525083_5bn7.jpg"]},{TITLE:'28x80" Stripes Pashmina Stole with Hand Embroidery, 242',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf : This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom\\

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Stripes

Weave : Medium

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 28 x 80 Inch  / 71 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:435,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schals,dorukha_reversible,pashmina_white,allover_embroidery,sozni_jama,motif_pashmina,thread_embroidery,kashmir_shawl,women_scarves,cashmere_scarves,summer_shawl,indian_dress,women_wear",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11,images:["https://i.etsystatic.com/25846489/r/il/958273/5871375231/il_fullxfull.5871375231_rnp3.jpg","https://i.etsystatic.com/25846489/r/il/278f5d/5823284106/il_fullxfull.5823284106_lkow.jpg","https://i.etsystatic.com/25846489/r/il/ee6645/5871375243/il_fullxfull.5871375243_4ubp.jpg","https://i.etsystatic.com/25846489/r/il/a3b0a6/5871375241/il_fullxfull.5871375241_8ql5.jpg","https://i.etsystatic.com/25846489/r/il/210b75/5823284238/il_fullxfull.5823284238_39rk.jpg","https://i.etsystatic.com/25846489/r/il/a9dffa/5871375209/il_fullxfull.5871375209_jxup.jpg"]},{TITLE:'28x80" Pure Cashmere Pashmina Scarf With Kashmiri Sozni Embroidery, Handmade in Kashmir, gift for mom, Luxury Scarves, 243',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Color: Tye Dye 

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 72 x 200 cm / 28 x 80 inch approx

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:403,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_white,gift_for_her,annual_sale,autumn_scarf,neck_scarf,women_scarf,soft_pashmina,mother_days,sozni_scarf,boho_wrap,drape,kashmiri_shawl,vicuna",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:10200,images:["https://i.etsystatic.com/25846489/r/il/b111b0/5823300912/il_fullxfull.5823300912_5t36.jpg","https://i.etsystatic.com/25846489/r/il/dd9be9/5823298516/il_fullxfull.5823298516_75ck.jpg","https://i.etsystatic.com/25846489/r/il/a7c34d/5871389395/il_fullxfull.5871389395_hl4k.jpg","https://i.etsystatic.com/25846489/r/il/8a2de1/5871389345/il_fullxfull.5871389345_nxqe.jpg","https://i.etsystatic.com/25846489/r/il/28702a/5871389325/il_fullxfull.5871389325_85v6.jpg","https://i.etsystatic.com/25846489/r/il/dec731/5871389307/il_fullxfull.5871389307_n3cq.jpg","https://i.etsystatic.com/25846489/r/il/7d6f81/5823298568/il_fullxfull.5823298568_kjb1.jpg"]},{TITLE:'40x80" Maroon Sozni Jamawar Hand Embroidered Pure Cashmere Pashmina Shawl, L71',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Maroon

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1200,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,mothers_day",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:37,images:["https://i.etsystatic.com/25846489/r/il/46a4b1/5823246118/il_fullxfull.5823246118_a6tz.jpg","https://i.etsystatic.com/25846489/r/il/d912b6/5871332937/il_fullxfull.5871332937_6pbz.jpg","https://i.etsystatic.com/25846489/r/il/7a12be/5823242464/il_fullxfull.5823242464_f4vh.jpg","https://i.etsystatic.com/25846489/r/il/39b670/5823242454/il_fullxfull.5823242454_c0e4.jpg","https://i.etsystatic.com/25846489/r/il/b569f3/5871332961/il_fullxfull.5871332961_95ai.jpg","https://i.etsystatic.com/25846489/r/il/6d0c25/5871332969/il_fullxfull.5871332969_dzhw.jpg","https://i.etsystatic.com/25846489/r/il/517772/5823242524/il_fullxfull.5823242524_tcek.jpg"]},{TITLE:"54x108 Large Size Shawl for men, Pure Pashmina Kalamkaari Shawl, Allover Sozni Hand Embroidery of Kashmir, Sm68",DESCRIPTION:`Kalamkari Hand Embroidered Pure Pashmina Shawl( No Mixing)

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Briliant Kalamkari Hand embroidered Pashmina Shawl Is One of its Kind.  Designed and manufactured by best Designer and Artisan with immense hard work and patience. The Shawl is hand embroidered with entirely different and unique color Combination

This Shawl Is Hand Painted and  handwoven on wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Weave : Tight

Feel :   soft, lightweight and warm.

Care : - Dry Clean 

Size : 137 x 274cm / 54 x 108  inch 

Work : Sozni  Kalamkari Hand Embroidery of Kashmir
  
NOTE: The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:3200,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kalamkaar_shawls,pure_cashmere,elegant_shawls,exquisite_scarf,extra_large_shawl,pakistan_shawl,handwoven,kashmir_pashmina,gifting_items,hand_painting,luxury,fashion,gents_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:95500,images:["https://i.etsystatic.com/25846489/r/il/a63ef6/5823271778/il_fullxfull.5823271778_fkw9.jpg","https://i.etsystatic.com/25846489/r/il/eebe92/5823269052/il_fullxfull.5823269052_og97.jpg","https://i.etsystatic.com/25846489/r/il/9f314e/5871359905/il_fullxfull.5871359905_38n0.jpg","https://i.etsystatic.com/25846489/r/il/1fe5e3/5823269104/il_fullxfull.5823269104_jwxy.jpg","https://i.etsystatic.com/25846489/r/il/3c8748/5823269136/il_fullxfull.5823269136_humm.jpg","https://i.etsystatic.com/25846489/r/il/e60616/5871359845/il_fullxfull.5871359845_cpvf.jpg","https://i.etsystatic.com/25846489/r/il/fbcb50/5871360045/il_fullxfull.5871360045_kp2z.jpg","https://i.etsystatic.com/25846489/r/il/c08aed/5823269258/il_fullxfull.5823269258_ts56.jpg","https://i.etsystatic.com/25846489/r/il/35501e/5871360081/il_fullxfull.5871360081_hlz2.jpg"]},{TITLE:'40x80" Purple Kashmir Pashmina Shawl, Fine Sozni Allover Hand Embroidery, Craftsmen wrap, HL',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Purple

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1080,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,paper_machie_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:34,images:["https://i.etsystatic.com/25846489/r/il/b1d77c/5823223976/il_fullxfull.5823223976_6niv.jpg","https://i.etsystatic.com/25846489/r/il/900e8a/5823221200/il_fullxfull.5823221200_ncuy.jpg","https://i.etsystatic.com/25846489/r/il/e8cb60/5823221428/il_fullxfull.5823221428_k543.jpg","https://i.etsystatic.com/25846489/r/il/589db2/5823221424/il_fullxfull.5823221424_1quy.jpg","https://i.etsystatic.com/25846489/r/il/4e0e39/5823221254/il_fullxfull.5823221254_jaw7.jpg","https://i.etsystatic.com/25846489/r/il/318fcd/5823221222/il_fullxfull.5823221222_chcl.jpg","https://i.etsystatic.com/25846489/r/il/b46123/5871311587/il_fullxfull.5871311587_5jis.jpg","https://i.etsystatic.com/25846489/r/il/92684f/5871311557/il_fullxfull.5871311557_pmje.jpg"]},{TITLE:'40x80"  Pure Pashmina Shawl with Kashmiri Gold Tilla Hand Embroidery, L81',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

The Shawl is Handwoven

Base Color : Badami 

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla : Gold 

Tilla Quality : Guaranteed

Care :  - Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:460,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,kashmiri_tilla,zari_shawl,green_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:12800,images:["https://i.etsystatic.com/25846489/r/il/2cab51/5871251921/il_fullxfull.5871251921_fan5.jpg","https://i.etsystatic.com/25846489/r/il/443a79/5871249369/il_fullxfull.5871249369_5i8x.jpg","https://i.etsystatic.com/25846489/r/il/5c1fe3/5871249403/il_fullxfull.5871249403_m2a5.jpg","https://i.etsystatic.com/25846489/r/il/ff61c0/5823159296/il_fullxfull.5823159296_hroy.jpg","https://i.etsystatic.com/25846489/r/il/3a8fac/5823159286/il_fullxfull.5823159286_5o1q.jpg","https://i.etsystatic.com/25846489/r/il/3c8e9c/5823159326/il_fullxfull.5823159326_9lim.jpg"]},{TITLE:'40x80"  Pista Green Cashmere Pashmina Wrap with Luxury Kashmiri Tilla Zari Hand Embroidery, L82',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

The Shawl is Handwoven

Base Color : Pista Green 

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla : Gold 

Tilla Quality : Guaranteed

Care :  - Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:460,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,premium_quality,kashmiri_tilla,zari_shawl,green_cashmere,tilla_border",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:12800,images:["https://i.etsystatic.com/25846489/r/il/40fccb/5871270815/il_fullxfull.5871270815_f08r.jpg","https://i.etsystatic.com/25846489/r/il/4c8776/5823177908/il_fullxfull.5823177908_2y3c.jpg","https://i.etsystatic.com/25846489/r/il/622b48/5823177990/il_fullxfull.5823177990_nc02.jpg","https://i.etsystatic.com/25846489/r/il/a7b884/5871268517/il_fullxfull.5871268517_mj7w.jpg","https://i.etsystatic.com/25846489/r/il/70329d/5871268565/il_fullxfull.5871268565_2w2w.jpg","https://i.etsystatic.com/25846489/r/il/5ec549/5871268589/il_fullxfull.5871268589_9c4t.jpg"]},{TITLE:"40x80” White  butterfly Pashmina Shawl, l89",DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Shawl

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Gorgeous Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has  Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Natural White

Weave: Medium

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 100 x 200cm / 40 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1083,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_cashmere,kashmiri_scarfs,cashmere_pashmina,hand_work,silk_scarf,evening_wrap,handwoven_scarf,kashmir_sozni,white_pashmina,weaving,motif,figure_shawls,handwoven",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:34,images:["https://i.etsystatic.com/25846489/r/il/8be28d/5526991482/il_fullxfull.5526991482_mk7f.jpg","https://i.etsystatic.com/25846489/r/il/0a61c6/5575106317/il_fullxfull.5575106317_ddvw.jpg","https://i.etsystatic.com/25846489/r/il/8ed79d/5575106521/il_fullxfull.5575106521_donn.jpg","https://i.etsystatic.com/25846489/r/il/d67bb7/5526992100/il_fullxfull.5526992100_6ff3.jpg","https://i.etsystatic.com/25846489/r/il/a6a302/5575106963/il_fullxfull.5575106963_3x39.jpg","https://i.etsystatic.com/25846489/r/il/bc018e/5526992514/il_fullxfull.5526992514_89zr.jpg","https://i.etsystatic.com/25846489/r/il/e54c28/5575107255/il_fullxfull.5575107255_kw7g.jpg","https://i.etsystatic.com/25846489/r/il/6388e0/5526992802/il_fullxfull.5526992802_my3l.jpg","https://i.etsystatic.com/25846489/r/il/a7d5f6/5526992940/il_fullxfull.5526992940_py2i.jpg","https://i.etsystatic.com/25846489/r/il/30c3dd/5575107713/il_fullxfull.5575107713_iqqg.jpg"]},{TITLE:"40x80” Blue butterfly Pashmina Shawl, l88",DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Shawl

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Gorgeous Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has  Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Blue

Weave: Medium

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 100 x 200cm / 40 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:640,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_cashmere,kashmiri_scarfs,cashmere_pashmina,hand_work,silk_scarf,evening_wrap,handwoven_scarf,kashmir_sozni,white_pashmina,weaving,motif,figure_shawls,handwoven",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:18,images:["https://i.etsystatic.com/25846489/r/il/304a23/5527310808/il_fullxfull.5527310808_a50y.jpg","https://i.etsystatic.com/25846489/r/il/ad8164/5527311154/il_fullxfull.5527311154_p4kz.jpg","https://i.etsystatic.com/25846489/r/il/205086/5527311520/il_fullxfull.5527311520_avgd.jpg","https://i.etsystatic.com/25846489/r/il/f6f8e8/5575428511/il_fullxfull.5575428511_j9jd.jpg","https://i.etsystatic.com/25846489/r/il/912fc0/5575428843/il_fullxfull.5575428843_2v25.jpg","https://i.etsystatic.com/25846489/r/il/5d1d2d/5527312538/il_fullxfull.5527312538_iapx.jpg","https://i.etsystatic.com/25846489/r/il/4eaa94/5575429719/il_fullxfull.5575429719_8ecx.jpg","https://i.etsystatic.com/25846489/r/il/2c0d9d/5527313194/il_fullxfull.5527313194_86vb.jpg"]},{TITLE:'40x80" Luxury Multi Color Handmade Pashmina Kalamkari Shawl, Traditional Cashmere Wrap, Wedding Gifts, SM56',DESCRIPTION:`Kalamkari Hand Embroidered Pure Pashmina Shawl( No Mixing)

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Briliant Kalamkari Hand embroidered Pashmina Shawl Is One of its Kind.  Designed and manufactured by best Designer and Artisan with immense hard work and patience. The Shawl is hand embroidered with entirely different and unique color

This Shawl Is handwoven 

Weave : Tight

Feel :   Very soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended 

Size : 100  x 200 cm / 40 X 80 inch

Work : Kalamkari Hand Embroidery of Kashmir
  
NOTE: The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1400,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"needle_work,wedding_gifts,wedding_favours,fine_art,handmade_gifts,luxury_gifts,paisley_shawl,meher_shawls,new_design_pashmina,pure_pashmina,polo_vicuna,schal",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42,images:["https://i.etsystatic.com/25846489/r/il/5d02d0/5489323943/il_fullxfull.5489323943_guem.jpg","https://i.etsystatic.com/25846489/r/il/6fc532/5489324015/il_fullxfull.5489324015_2wo4.jpg","https://i.etsystatic.com/25846489/r/il/2464b8/5441192108/il_fullxfull.5441192108_77nb.jpg","https://i.etsystatic.com/25846489/r/il/288999/5441192482/il_fullxfull.5441192482_3krf.jpg","https://i.etsystatic.com/25846489/r/il/bb0483/5441192510/il_fullxfull.5441192510_os5t.jpg","https://i.etsystatic.com/25846489/r/il/92a622/5441192444/il_fullxfull.5441192444_t4n6.jpg","https://i.etsystatic.com/25846489/r/il/d1cbed/5441192572/il_fullxfull.5441192572_c9er.jpg","https://i.etsystatic.com/25846489/r/il/4c8cbe/5441192036/il_fullxfull.5441192036_marr.jpg","https://i.etsystatic.com/25846489/r/il/1e136a/5441192110/il_fullxfull.5441192110_6a32.jpg","https://i.etsystatic.com/25846489/r/il/a92d49/5441192040/il_fullxfull.5441192040_m5xi.jpg"]},{TITLE:'40x80" Maroon Pure Pashmina Sozni Border Shawl With Hand Tilla Highlight, Festive Cashmere wrap, 826',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of the Himalayas towards  Ladakh. Pashmina is very soft, Light, and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level, This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind. The beauty of Cashmere is uplifted when adorned with the brilliance of the age-old Sozni With Tilla Zari on it. This royal wrap of art, culture, and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color: Red / Maroon

Feel:  soft, lightweight, and warm.
 
Color Of Tilla:  Golden 

Care:  Gentle Hand Wash Recommended 

Size : 40 x 80  inch / 100 x 200cm

Work : Sozni and Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:874,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cachemire,cashmere_pashmina,kashmir_pashminas,showl,kashmiri_embroidery,hand_work,party_cashmere,designer_dress,bridal_shawls,anniversary_gifts,gift_for_daughter,sister_wedding_dress,girls_wrap",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22,images:["https://i.etsystatic.com/25846489/r/il/58c751/5484235848/il_fullxfull.5484235848_giax.jpg","https://i.etsystatic.com/25846489/r/il/d0bb28/5484235748/il_fullxfull.5484235748_9t94.jpg","https://i.etsystatic.com/25846489/r/il/a6091b/5532348193/il_fullxfull.5532348193_vivo.jpg","https://i.etsystatic.com/25846489/r/il/18a66d/5484235754/il_fullxfull.5484235754_olqf.jpg","https://i.etsystatic.com/25846489/r/il/e12201/5484236184/il_fullxfull.5484236184_nayq.jpg","https://i.etsystatic.com/25846489/r/il/bc07d2/5532348749/il_fullxfull.5532348749_eqk1.jpg","https://i.etsystatic.com/25846489/r/il/802e27/5532348399/il_fullxfull.5532348399_aj04.jpg","https://i.etsystatic.com/25846489/r/il/7a7ff3/5484236364/il_fullxfull.5484236364_3jym.jpg","https://i.etsystatic.com/25846489/r/il/ede329/5532348623/il_fullxfull.5532348623_nxmc.jpg","https://i.etsystatic.com/25846489/r/il/596d68/5532348665/il_fullxfull.5532348665_54ti.jpg"]},{TITLE:'45x90"XL Sozni and Tilla Palledar Hand Embroidered Pure Pashmina Shawl, SM52',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color :  Black

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care :- Dry Clean Only.

Size : 45 x 90 Inch or 114 x 228 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:700,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"shawl_of_Kashmir,Soft_Pashmina,Cashmere_Wrap,tilla_shawl,pashmeena,handwoven,scarves,meher,exclusive_shawls,pashmina_bridesmaid,gift_for_sister,daughter_wedding',happy_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:2e4,images:["https://i.etsystatic.com/25846489/r/il/65575f/5532392297/il_fullxfull.5532392297_tfmy.jpg","https://i.etsystatic.com/25846489/r/il/287782/5484280400/il_fullxfull.5484280400_4a4q.jpg","https://i.etsystatic.com/25846489/r/il/2a7df5/5532392933/il_fullxfull.5532392933_qkd3.jpg","https://i.etsystatic.com/25846489/r/il/37b697/5484280744/il_fullxfull.5484280744_gw0g.jpg","https://i.etsystatic.com/25846489/r/il/427ec8/5532392659/il_fullxfull.5532392659_sol2.jpg","https://i.etsystatic.com/25846489/r/il/6182f2/5484280396/il_fullxfull.5484280396_1e09.jpg","https://i.etsystatic.com/25846489/r/il/e1474d/5532393105/il_fullxfull.5532393105_2ifr.jpg","https://i.etsystatic.com/25846489/r/il/40db19/5532393195/il_fullxfull.5532393195_gxyn.jpg","https://i.etsystatic.com/25846489/r/il/6895ec/5484280914/il_fullxfull.5484280914_5j66.jpg","https://i.etsystatic.com/25846489/r/il/a5267c/5532393219/il_fullxfull.5532393219_clm9.jpg"]},{TITLE:'40x80" India Kashmir Collectible Handmade Cashmere Pashmina Shawl, Handwoven and Hand Embroidered, A1',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl(100% Cashmere)  with Sozni Jamawar  hand embroidery (NeedleWork)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Briliant Hand embroidered Pashmina Shawl with Very Fine Allover Sozni Hand Embroidered Is One of its Kind.  Designed and manufactured by best Designer and Artisan with immense hard work and patience. The Shawl is hand embroidered with entirely different and unique color matching.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color :Grey

Weave : Tight

Feel :   soft, lightweight and warm.
 
Care : - Dry Clean Only.

Size : 40 × 80 inch / 100 × 200 cm Approx

Work : Sozni  Hand Embroidery(Needle Work)

NOTE:
 We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1800,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"embroidered_shawl,shawl_for_women,cashmere_shawl,meher_premium,pure_pashmina_shawl,sozni_jamawar,exquisite_shawls,kalamkari_shawl,cashmere_pashmina,gifts_for_mum,pure_pashmina,jamawar_scarves,shawl_women",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:47.5,images:["https://i.etsystatic.com/25846489/r/il/0e96da/4876916869/il_fullxfull.4876916869_kzom.jpg","https://i.etsystatic.com/25846489/r/il/8170b2/4876913411/il_fullxfull.4876913411_kqwr.jpg","https://i.etsystatic.com/25846489/r/il/abb1ff/4876914183/il_fullxfull.4876914183_agal.jpg","https://i.etsystatic.com/25846489/r/il/8aa21a/4876913149/il_fullxfull.4876913149_tf6w.jpg","https://i.etsystatic.com/25846489/r/il/4c2f64/4828656002/il_fullxfull.4828656002_7nii.jpg","https://i.etsystatic.com/25846489/r/il/dc4a65/4828655982/il_fullxfull.4828655982_lbn2.jpg","https://i.etsystatic.com/25846489/r/il/61b565/4828656326/il_fullxfull.4828656326_s38q.jpg"]},{TITLE:'40x80" Heirloom Pashmina Shawl, Allover Sozni Jama Embroidery Kashmir Wrap, A2',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

Base Color : Black

Feel :  soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended

Size : 40 x 80  inch / 100 x 200 cm Approx

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1800,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"sozni_shawl,sozni_embroidered,christmas_cashmere,jamawar_black,hand_work,kashmiri_work,kashmir_shawls,floral_scarfs,flowers,new_year,pashmina_on_sale,wraps,scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:47.5,images:["https://i.etsystatic.com/25846489/r/il/fd4212/4828652114/il_fullxfull.4828652114_r1jv.jpg","https://i.etsystatic.com/25846489/r/il/ca5a25/4828648720/il_fullxfull.4828648720_hme6.jpg","https://i.etsystatic.com/25846489/r/il/f5fd6a/4876907467/il_fullxfull.4876907467_p140.jpg","https://i.etsystatic.com/25846489/r/il/b707f8/4876906575/il_fullxfull.4876906575_8j2n.jpg","https://i.etsystatic.com/25846489/r/il/e84ff7/4828649294/il_fullxfull.4828649294_dfp5.jpg","https://i.etsystatic.com/25846489/r/il/187043/4828649564/il_fullxfull.4828649564_llth.jpg","https://i.etsystatic.com/25846489/r/il/3f9810/4876907639/il_fullxfull.4876907639_8102.jpg"]},{TITLE:'40x80" Exquisite Kalamkari Shawl, Handmade Cashmere Shawl, Real Pashmina Wrap of Kashmir, Hand Embroidered, Gift for Her, sm55',DESCRIPTION:`Kalamkari Sozni Jamawar Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Masterpiece Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Allover Jama Hand Embroidery With Unique And Different Designs.

The  Shawl is Handwoven On Handloom

Base Color : Multicolored

Weave : Tight

Feel :    soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 40 x 80 Inch / 100 x 200 cm

Work : Sozni Hand Embroidery(Needle Work) of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1400,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_shawls,kalamkaar_pashmina,qalamkari_shawls,hook_work_shawls,light_weight_scarf,pashmina_embroidered,shawls,pashmina_store,gifting_shawls,Vintage,schal,drape,women_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:42,images:["https://i.etsystatic.com/25846489/r/il/bc38e3/5441183784/il_fullxfull.5441183784_1eg8.jpg","https://i.etsystatic.com/25846489/r/il/650734/5441183438/il_fullxfull.5441183438_lvjd.jpg","https://i.etsystatic.com/25846489/r/il/8593e0/5441183896/il_fullxfull.5441183896_fcwy.jpg","https://i.etsystatic.com/25846489/r/il/dc0a1e/5441183644/il_fullxfull.5441183644_cypg.jpg","https://i.etsystatic.com/25846489/r/il/142d3c/5489315677/il_fullxfull.5489315677_tjyi.jpg","https://i.etsystatic.com/25846489/r/il/e88dd2/5489315669/il_fullxfull.5489315669_8shp.jpg","https://i.etsystatic.com/25846489/r/il/50ec7f/5489315355/il_fullxfull.5489315355_250f.jpg","https://i.etsystatic.com/25846489/r/il/2427e0/5489315705/il_fullxfull.5489315705_ps2n.jpg","https://i.etsystatic.com/25846489/r/il/2a9917/5441183564/il_fullxfull.5441183564_i7bi.jpg","https://i.etsystatic.com/25846489/r/il/dd14a9/5489315389/il_fullxfull.5489315389_10nq.jpg"]},{TITLE:'28x80" Silver and Gold Hand Tilla Maroon Pashmina Stole , Handmade in Kashmir, Wedding Kashmiri Tilla Scarfs, M151',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Scarf. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and 
affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Base Color : Maroon

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Silver and Gold

Care : Dry Clean Only

Size : 28x 80 inch / 71 x 200 cm Approx

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:490,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gold_scarf,tilla_scarves,bridesmaid_gifts,scarves,kashmir_shawl,schal,handmade,premium_goods,sophisticated_art,luxury,wrap,curated_collections,wedding_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11,images:["https://i.etsystatic.com/25846489/r/il/e966ac/4848986205/il_fullxfull.4848986205_l2sj.jpg","https://i.etsystatic.com/25846489/r/il/e93765/4848981225/il_fullxfull.4848981225_sv3q.jpg","https://i.etsystatic.com/25846489/r/il/024b37/4848981975/il_fullxfull.4848981975_tbc5.jpg","https://i.etsystatic.com/25846489/r/il/69d720/4800711392/il_fullxfull.4800711392_fqgb.jpg","https://i.etsystatic.com/25846489/r/il/67d5d9/4848981623/il_fullxfull.4848981623_q14o.jpg","https://i.etsystatic.com/25846489/r/il/5b7e16/4800712244/il_fullxfull.4800712244_8530.jpg","https://i.etsystatic.com/25846489/r/il/0e4b7f/4800711938/il_fullxfull.4800711938_iisf.jpg"]},{TITLE:'40x80" Colorful Sozni Embroidery Kashmir Shawl, Real  Pashmina wrap, Kashmiri Handicraft, L24',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1357,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,Christmas_tree",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/46162f/4448015332/il_fullxfull.4448015332_3h7s.jpg","https://i.etsystatic.com/25846489/r/il/bddb1b/4495355949/il_fullxfull.4495355949_nzws.jpg","https://i.etsystatic.com/25846489/r/il/f8ab4a/4495355967/il_fullxfull.4495355967_p2e0.jpg","https://i.etsystatic.com/25846489/r/il/6f0406/4448012344/il_fullxfull.4448012344_8ia9.jpg","https://i.etsystatic.com/25846489/r/il/d21f12/4448012348/il_fullxfull.4448012348_d7sb.jpg","https://i.etsystatic.com/25846489/r/il/dae7dd/4495355947/il_fullxfull.4495355947_1gab.jpg"]},{TITLE:'40x80" India Kashmir Collectible Handmade Cashmere Pashmina Shawl, Handwoven and Hand Embroidered, L59',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl(100% Cashmere)  with Sozni Jamawar  hand embroidery (NeedleWork)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Briliant Hand embroidered Pashmina Shawl with Very Fine Allover Sozni Hand Embroidered Is One of its Kind.  Designed and manufactured by best Designer and Artisan with immense hard work and patience. The Shawl is hand embroidered with entirely different and unique color matching.

Base Color :Maroon / Red

Weave : Tight

Feel :   soft, lightweight and warm.
 
Care : - Dry Clean Only.

Size : 40 × 80 inch / 100 × 200 cm Approx

Work : Sozni  Hand Embroidery(Needle Work)

NOTE:
 We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1300,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"embroidered_shawl,shawl_for_women,cashmere_shawl,meher_premium,pure_pashmina_shawl,sozni_jamawar,exquisite_shawls,kalamkari_shawl,cashmere_pashmina,pure_pashmina,jamawar_scarves,shawl_women,wedding_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:38,images:["https://i.etsystatic.com/25846489/r/il/7c6061/5474016271/il_fullxfull.5474016271_jb8v.jpg","https://i.etsystatic.com/25846489/r/il/ef2a18/5425883226/il_fullxfull.5425883226_ry0e.jpg","https://i.etsystatic.com/25846489/r/il/1408d4/5474010817/il_fullxfull.5474010817_ib1a.jpg","https://i.etsystatic.com/25846489/r/il/a2fc28/5474010691/il_fullxfull.5474010691_f7nr.jpg","https://i.etsystatic.com/25846489/r/il/1691c1/5425883176/il_fullxfull.5425883176_hz1y.jpg","https://i.etsystatic.com/25846489/r/il/c7aa62/5474010533/il_fullxfull.5474010533_g9kr.jpg","https://i.etsystatic.com/25846489/r/il/651a74/5425883278/il_fullxfull.5425883278_9u4a.jpg","https://i.etsystatic.com/25846489/r/il/646ee3/5425883528/il_fullxfull.5425883528_fcuq.jpg","https://i.etsystatic.com/25846489/r/il/ff6c34/5474010891/il_fullxfull.5474010891_ckli.jpg"]},{TITLE:'Hand Embroidered Pure Pashmina Stole, Kashmir Scarf, Handmade, 29x80" , M29',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Black

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 73 x 200 cm / 29 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:324,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schals,scarf_cashmere,kashmiri_stole,embroidery_scarfs,handmade,luxury_pashmina,gift_for_her,kashmir_made_gift,big_sale,winter_clothes,mens_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:6500,images:["https://i.etsystatic.com/25846489/r/il/31dfc5/3681064769/il_fullxfull.3681064769_dx5w.jpg","https://i.etsystatic.com/25846489/r/il/28697f/3633453764/il_fullxfull.3633453764_s2bi.jpg","https://i.etsystatic.com/25846489/r/il/3a12bb/3681063887/il_fullxfull.3681063887_kdfj.jpg","https://i.etsystatic.com/25846489/r/il/c8fac9/3681063921/il_fullxfull.3681063921_9mdy.jpg"]},{TITLE:"Fine Kashmiri Embroidery On  100% Pure Wool Cashmere Shawl, Handmade in Kashmir, Designer Embroidery Wrap, T28, 40X80",DESCRIPTION:`Pure Wool Hand Embroidered Shawl

About This Shawl: This Beautiful Pure Wool Shawl With Very Fine hand Embroidery is one of a kind. Embroidered With Delicacy by Master Artisans of Kashmir. It took More Than 3 Month To complete the embroidery on this shawl. The Base Fabric Used is Very Fine  Top Quality Pure Wool which Gives it a Glamorous look.

Color : Royal Blue

Size : 100 × 200 cm /  40 × 80 inch Approx

Feel :   soft, lightweight and warm.

Care : - Dry Clean Only.

Work : Sozni/ Hand Embroidery (Needle Work)

Very Intricate Sozni Needle  Thread Work of Kashmir.

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:230,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"white_shawls,wedding_pashmina,delicate_embroidery,silk_thread,cashmere_pashmina,shawls,scarfs,gifts,gift_shop,best_shop,pretty_scarf,paisley_shawls,royal_blue",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:4.1,images:["https://i.etsystatic.com/25846489/r/il/8600f5/3965270566/il_fullxfull.3965270566_l9qb.jpg","https://i.etsystatic.com/25846489/r/il/6a4e27/4012926849/il_fullxfull.4012926849_d381.jpg","https://i.etsystatic.com/25846489/r/il/3a6675/3965269036/il_fullxfull.3965269036_kchb.jpg","https://i.etsystatic.com/25846489/r/il/631621/4012926781/il_fullxfull.4012926781_lye1.jpg","https://i.etsystatic.com/25846489/r/il/feff1c/4012926839/il_fullxfull.4012926839_ejxj.jpg"]},{TITLE:'40x80" Kashmiri Hand Embroidery on Soft Pure Wool Wrap, Merino Shawl, Gift for her, T8',DESCRIPTION:`Pure Wool Hand Embroidered Shawl

About This Shawl: This Beautiful Pure Wool Shawl With Fine hand Embroidery is one of a kind. Embroidered With Delicacy by Master Artisans of Kashmir. It took More Than 3 Months To complete the embroidery on this shawl.

Base Color : White
 
Size : 100  x 200 cm / 40 x 80 Inch Approx

Feel :   soft, lightweight and warm.

Care : - Dry Clean

Work : Sozni Hand Embroidery of Kashmir

Very Intricate Sozni Needle  Thread Work of Kashmir.

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:269,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"winter_wraps,winter_shawls,scarfs,cashmere_shawl,pashminas,wedding_shawls,bridesmaid_wrap,white_shawl,handmade_scarf,summer_wrap,pashmina_shawl,gift_for_her,sozni_jama",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:5.8,images:["https://i.etsystatic.com/25846489/r/il/ab00d1/3928726436/il_fullxfull.3928726436_nwge.jpg","https://i.etsystatic.com/25846489/r/il/39e914/3976182287/il_fullxfull.3976182287_mdqs.jpg","https://i.etsystatic.com/25846489/r/il/247351/3928722270/il_fullxfull.3928722270_tg7o.jpg","https://i.etsystatic.com/25846489/r/il/d643bc/3976182385/il_fullxfull.3976182385_2ydg.jpg","https://i.etsystatic.com/25846489/r/il/27396f/3928722266/il_fullxfull.3928722266_h84e.jpg","https://i.etsystatic.com/25846489/r/il/a7dd63/3976182181/il_fullxfull.3976182181_nmll.jpg","https://i.etsystatic.com/25846489/r/il/27708a/3976182213/il_fullxfull.3976182213_hggn.jpg"]},{TITLE:'40x80" Black Big Border work Sozni Hand Embroidered Pure Wool Shawl, Super Soft Kashmir Shawl, M805',DESCRIPTION:`Pure Wool Hand Embroidered Shawl

About This Shawl: This Beautiful Pure Wool Shawl With Fine hand Embroidery is one of a kind. Embroidered With Delicacy by Master Artisans of Kashmir. It took More Than 3 Months To complete the embroidery on this shawl.

Base Color : Black
 
Size : 100  x 200 cm / 40 x 80 Inch Approx

Feel :   soft, lightweight and warm.

Care : - Dry clean only

Work : Sozni/ Hand Embroidery (Needle Work)

Very Intricate Sozni Needle  Thread Work of Kashmir.

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:288,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_scarfs,ethnic_shawls,native_dress,pashmina_wool,christmas,finest_quality,merino_shawls,scarf,kashmir_shawls,kashmir_pashmina,woolen_shawl,cashmere_shawl,sozni_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:5.9,images:["https://i.etsystatic.com/25846489/r/il/e62d79/4047199963/il_fullxfull.4047199963_dhie.jpg","https://i.etsystatic.com/25846489/r/il/147fb4/3999548378/il_fullxfull.3999548378_rigg.jpg","https://i.etsystatic.com/25846489/r/il/9aafd3/3999549346/il_fullxfull.3999549346_6h6k.jpg","https://i.etsystatic.com/25846489/r/il/3589d9/4047196465/il_fullxfull.4047196465_t7vd.jpg","https://i.etsystatic.com/25846489/r/il/1aa7db/4047197053/il_fullxfull.4047197053_jqbh.jpg","https://i.etsystatic.com/25846489/r/il/69ee0d/4047196513/il_fullxfull.4047196513_j45f.jpg","https://i.etsystatic.com/25846489/r/il/43dc0c/3999548388/il_fullxfull.3999548388_ksyh.jpg"]},{TITLE:"40x80 Magenta Kashmir Pashmina Shawl with Gold Hand Tilla Zari Embroidery, 813",DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Maroon Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Purple magenta

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla : Golden

Care : - Dry Clean Only.

Size : 40 x 80 inch / 100 x 200 cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:769,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Bridesmaids_Shawl,Sozni_Shawl,Handmade_Wrap,meher_premium,kashmir_Pashmina,Pure_Pashmina_Shawl,cashmere_wraps,gifts_for_mom,hand_tilla_zari,Gold_work,Gifts_for_her,christmas_edition,wedding_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19200,images:["https://i.etsystatic.com/25846489/r/il/623307/5177772039/il_fullxfull.5177772039_q0w7.jpg","https://i.etsystatic.com/25846489/r/il/017101/5129546050/il_fullxfull.5129546050_g8t9.jpg","https://i.etsystatic.com/25846489/r/il/459a2c/5129546382/il_fullxfull.5129546382_3mge.jpg","https://i.etsystatic.com/25846489/r/il/c438b5/5129546470/il_fullxfull.5129546470_fng8.jpg","https://i.etsystatic.com/25846489/r/il/000712/5177772265/il_fullxfull.5177772265_71mk.jpg"]},{TITLE:'28x80" Tie Dye Kashmiri Tilla Border Scarf, Handmade in Kashmir, Pure Cashmere Scarf, Bridesmaids gifts, Cashmere wraps, m192',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Elegant Pashmina Scarf Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Base Color : Red and Black ( Tie Dye)

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold

Care : Dry Clean Only

Size : 28x 80 inch / 71 x 200 cm Approx

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:497,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina,tilla_shawls,zari_shawl,cashmere,scarves,stool,handwoven,gifting_scarves,wedding_scarves,wedding_pashmina,woven_textile,bridal_shawls,handmade",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:12,images:["https://i.etsystatic.com/25846489/r/il/e9f79c/5129445136/il_fullxfull.5129445136_clbu.jpg","https://i.etsystatic.com/25846489/r/il/84a33a/5129443568/il_fullxfull.5129443568_nq1c.jpg","https://i.etsystatic.com/25846489/r/il/0495dd/5177665275/il_fullxfull.5177665275_mp3y.jpg","https://i.etsystatic.com/25846489/r/il/9f5330/5129428874/il_fullxfull.5129428874_79b2.jpg","https://i.etsystatic.com/25846489/r/il/23bfb5/5177655497/il_fullxfull.5177655497_1i7l.jpg","https://i.etsystatic.com/25846489/r/il/470a04/5177655069/il_fullxfull.5177655069_sers.jpg","https://i.etsystatic.com/25846489/r/il/fec0ce/5129435728/il_fullxfull.5129435728_hy4a.jpg"]},{TITLE:'43x86" Professional Skilled Embroidery Border Pashmina Shawl, Artistic Multiple Color thread Work Cashmere Wrap, Extra Size Shawl, 677',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color :Pink

Weave : Tight

Feel :    soft, lightweight and warm.

Care :  - Dry Clean Only.

Size : 109 × 218 cm / 43 × 86 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:627,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"different_style,pashmina_cashmere,pink_pashmina,border_shawl,kashmiri_work,scarves,luxury_wear,fashion,women_modern,large_pashmina,for_mommy,grandma_shawls,real_kashmiri_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14e3,images:["https://i.etsystatic.com/25846489/r/il/d62e39/3727671860/il_fullxfull.3727671860_kgkb.jpg","https://i.etsystatic.com/25846489/r/il/bdafc7/3727665972/il_fullxfull.3727665972_ooz0.jpg","https://i.etsystatic.com/25846489/r/il/899d45/3727666014/il_fullxfull.3727666014_ny1m.jpg","https://i.etsystatic.com/25846489/r/il/8e7838/3727665510/il_fullxfull.3727665510_5qzt.jpg","https://i.etsystatic.com/25846489/r/il/2c9b40/3775251867/il_fullxfull.3775251867_l10d.jpg","https://i.etsystatic.com/25846489/r/il/ffe330/3775251739/il_fullxfull.3775251739_8cq5.jpg","https://i.etsystatic.com/25846489/r/il/9a5a32/3727666102/il_fullxfull.3727666102_qtul.jpg","https://i.etsystatic.com/25846489/r/il/99d6fd/3775251687/il_fullxfull.3775251687_1eaa.jpg"]},{TITLE:'54x108" Oversize Gents Pashmina Wrap with Delicate Sozni Border Embroidery, Artistic Cashmere Shawl, Hand Made in Kashmir, sm41',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Grey

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 137 × 274 cm / 54 × 108 inch 

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:590,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"winter_shawls,mens_shawl,scarf,on_sale,women_wear,mens_wear,shawl_for_men,handmade_items,gifts,gents_pashmina,gents_shawl,large_wraps,gents_border",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:15300,images:["https://i.etsystatic.com/25846489/r/il/f4d8d1/5055069008/il_fullxfull.5055069008_iaal.jpg","https://i.etsystatic.com/25846489/r/il/bb9a31/5055068994/il_fullxfull.5055068994_hk4q.jpg","https://i.etsystatic.com/25846489/r/il/1c040b/5103299297/il_fullxfull.5103299297_5cvl.jpg","https://i.etsystatic.com/25846489/r/il/8533bc/5103299459/il_fullxfull.5103299459_6qdt.jpg","https://i.etsystatic.com/25846489/r/il/1de87c/5055068878/il_fullxfull.5055068878_f79j.jpg","https://i.etsystatic.com/25846489/r/il/82713d/5103299435/il_fullxfull.5103299435_ene1.jpg"]},{TITLE:'40x80" Allover Kashmiri Sozni Work Pashmina Wrap, Real Cashmere Shawl, Handwoven, AR27',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Allover Sozni Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Allover Hand  Embroidery(Sozni)  from Kashmir

This adorable  Green Pashmina Shawl is an embodiment of skill shown in the intricacies of Sozni Kaari in Jama pattern where an Artisan's fancy has no limits. He gathers his creativity in his complex needle strokes and forms amazing patterns over an elegant Pashmina which is an ideal pick for winter blues.

Handwoven on wooden handloom

Color :  Green

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 200 x 108cm / 80 X 42inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects, For Knowing the Exact Color We advice you to Message Us
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:791,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Sozni_Shawl,Pure_Pashmina_Shawl,kashmiri_shawl,real_cashmere,pure_wool,Kashmir_Pashmina,hand_embroidered,Saree,green_shawl,winter_wrap,diwali_sale,pure_cashmere_fabric,christmas_shopping",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/e4f665/3154718288/il_fullxfull.3154718288_454u.jpg","https://i.etsystatic.com/25846489/r/il/6df5a4/3417010711/il_fullxfull.3417010711_m9di.jpg","https://i.etsystatic.com/25846489/r/il/fd3a82/3417010629/il_fullxfull.3417010629_kcjw.jpg","https://i.etsystatic.com/25846489/r/il/dc794a/3417010895/il_fullxfull.3417010895_wpvv.jpg","https://i.etsystatic.com/25846489/r/il/3b7e23/3417010787/il_fullxfull.3417010787_m4re.jpg","https://i.etsystatic.com/25846489/r/il/228b93/3202431183/il_fullxfull.3202431183_n25v.jpg","https://i.etsystatic.com/25846489/r/il/b05548/3154717074/il_fullxfull.3154717074_hc9q.jpg","https://i.etsystatic.com/25846489/r/il/b87329/3154717086/il_fullxfull.3154717086_i86z.jpg","https://i.etsystatic.com/25846489/r/il/747df1/3202429041/il_fullxfull.3202429041_fpnh.jpg","https://i.etsystatic.com/25846489/r/il/69e144/3154717070/il_fullxfull.3154717070_5kci.jpg"]},{TITLE:"Border Work Embroidered Sozni Tilla Blend Pashmina Shawl, Bridesmaid Wrap, 122",DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Bottle Green

Feel :  soft, lightweight and warm.
 
Color Of Tilla :  Golden

Care : - Gentle Hand Wash Recommended

Size : 40 x 76 inch / 100 x 185cm

Work : Sozni and Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:875,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"handmade,pashmina_scarf,gold_tilla_zari,pashmina_for_girls,meherpremium_shawls,resham_thread_work,40x80,cashmere_fabric,pashminagift,cashmere_scarves,wedding_shawls,green_throw,diwali_giftings",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/9d737c/3408792068/il_fullxfull.3408792068_f0sz.jpg","https://i.etsystatic.com/25846489/r/il/2ff9d3/3146261214/il_fullxfull.3146261214_q40i.jpg","https://i.etsystatic.com/25846489/r/il/e4b8a5/3146261094/il_fullxfull.3146261094_i9ae.jpg"]},{TITLE:"Wedding Shawls, Pure Pashmina, Cashmere handmade wrap, Sozni and Tilla combination work, Modern Wrap, AR96",DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Deep Blue

Feel :  soft, lightweight and warm.
 
Color Of Tilla : Golden

Care : - Gentle Hand Wash Recommended

Size : 39 x 83 inch / 96 x 212cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:830,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"wedding_accessories,party_wear_cashmere,kashmir_pashmina,fine_embroidery,zari_shawl,original_pashmina,wedding_scarf,personalized_gift,shawls,hand_tilla_work,expensive_wrap,blue_pashmina_shawl,festive_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/44dd46/3408790130/il_fullxfull.3408790130_tbgm.jpg","https://i.etsystatic.com/25846489/r/il/c5e87b/3152284382/il_fullxfull.3152284382_h97u.jpg","https://i.etsystatic.com/25846489/r/il/035ebd/3152284468/il_fullxfull.3152284468_623c.jpg","https://i.etsystatic.com/25846489/r/il/0a661a/3152284484/il_fullxfull.3152284484_hb8c.jpg"]},{TITLE:'28x80" Silver and Gold Hand Tilla Maroon Pashmina Stole , Handmade in Kashmir, Wedding Kashmiri Tilla Scarfs, M172',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf : Craftsmanship at Its Ultimate level , This Brilliant Pashmina With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Scarf. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and 
affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Base Color : Bottle Green

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Silver and Gold

Care : Dry Clean Only

Size : 28x 80 inch / 71 x 200 cm Approx

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:463,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gold_scarf,tilla_scarves,bridesmaid_gifts,scarves,kashmir_shawl,schal,handmade,premium_goods,sophisticated_art,luxury,wrap,curated_collections,wedding_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:11,images:["https://i.etsystatic.com/25846489/r/il/b9ad9b/5066770567/il_fullxfull.5066770567_m64e.jpg","https://i.etsystatic.com/25846489/r/il/cdf166/5018539956/il_fullxfull.5018539956_kz8r.jpg","https://i.etsystatic.com/25846489/r/il/e13674/5066766621/il_fullxfull.5066766621_s3jb.jpg","https://i.etsystatic.com/25846489/r/il/c01ecb/5066766695/il_fullxfull.5066766695_gxlk.jpg","https://i.etsystatic.com/25846489/r/il/b72a9b/5066766521/il_fullxfull.5066766521_zysj.jpg","https://i.etsystatic.com/25846489/r/il/d1b196/5066766727/il_fullxfull.5066766727_omuk.jpg","https://i.etsystatic.com/25846489/r/il/5182cf/5066766825/il_fullxfull.5066766825_me58.jpg"]},{TITLE:"Pure Crepe Kashmiri Embroidery Handmade Black Sari, Indian Sarees for Women, N392",DESCRIPTION:`Pure Crepe Exquisite Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 

We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Hand embroidered saree to add to your graceful closet another deluxe star. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Cotton thread which forms a plethora of intricate Designs in the saree. A perfect match for the awesome stylish you, who loves to stay in tune with the latest trend but is also in love with the ethnic style saree. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Black

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree And Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Aari and Sozni Hand Embroidery (Needle Work) of Kashmir.

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1280,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_saree,pure_kashmir_sarees,black_saree,meher_premium_sari,luxury_saris,handmade_shop,sozni_sarees,silk_sarees,made_in_kashmir,valentines_gifts,gift_for_valentine,gift_for_mom,gift_for_daughter",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"32 ac cost",images:["https://i.etsystatic.com/25846489/r/il/07ae43/3614517612/il_fullxfull.3614517612_5f08.jpg","https://i.etsystatic.com/25846489/r/il/cb4700/3662128285/il_fullxfull.3662128285_ire2.jpg","https://i.etsystatic.com/25846489/r/il/1e1bb3/3662128335/il_fullxfull.3662128335_pwsl.jpg","https://i.etsystatic.com/25846489/r/il/dc82ee/3662128383/il_fullxfull.3662128383_b8ws.jpg","https://i.etsystatic.com/25846489/r/il/9aa9ab/3662128321/il_fullxfull.3662128321_5z2x.jpg","https://i.etsystatic.com/25846489/r/il/bfc354/3662128255/il_fullxfull.3662128255_rk8o.jpg","https://i.etsystatic.com/25846489/r/il/f33673/3662128159/il_fullxfull.3662128159_1x9o.jpg","https://i.etsystatic.com/25846489/r/il/0e06e7/3614516570/il_fullxfull.3614516570_clhp.jpg","https://i.etsystatic.com/25846489/r/il/8ddbdd/3614516596/il_fullxfull.3614516596_6gye.jpg","https://i.etsystatic.com/25846489/r/il/7ca27c/3614516454/il_fullxfull.3614516454_e5op.jpg"]},{TITLE:'28x80" Pure Cashmere Pashmina Scarf / Stole / Wrap with Kashmiri Sozni Hand Embroidery, M175',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

The  Scarf is Handwoven On Handloom

Color:  Rust / Orange

Weave: Medium

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 72 x 200 cm / 28 x 80 inch

Work: Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:375,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_wrap,scarf,hand_embroidered,kashmir_wrap,pashmina_white,annual_sale,autumn_scarf,neck_scarf,women_scarf,border_embroidery,daughter_wedding,new_year_gifts,pashmina_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:8500,images:["https://i.etsystatic.com/25846489/r/il/c20994/5018418962/il_fullxfull.5018418962_a9y1.jpg","https://i.etsystatic.com/25846489/r/il/8fd250/5018417286/il_fullxfull.5018417286_nrs3.jpg","https://i.etsystatic.com/25846489/r/il/5027d6/5066643889/il_fullxfull.5066643889_2w3r.jpg","https://i.etsystatic.com/25846489/r/il/724bfe/5018417354/il_fullxfull.5018417354_komf.jpg","https://i.etsystatic.com/25846489/r/il/a417e2/5066643915/il_fullxfull.5066643915_m5r7.jpg","https://i.etsystatic.com/25846489/r/il/8510e8/5066643957/il_fullxfull.5066643957_3xfl.jpg","https://i.etsystatic.com/25846489/r/il/70ff82/5018417440/il_fullxfull.5018417440_6nv0.jpg"]},{TITLE:'28x80" Hand Tilla Pashmina Stole ,zari work, Handmade in Kashmir, Wedding Kashmiri Tilla Scarfs, M159',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Elegant Pashmina Scarf Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Scarf is Handwoven

Base Color : Green

Weave: Medium

Feel :  soft, lightweight and warm.

Color Of Tilla :  Golden

Care : Dry Clean Only

Size : 28 x 80 inch / 71x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:465,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,pure_pashmina,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls,hand_tilla_scarves,pashmina_stool,tilla_shawl,silver_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:10500,images:["https://i.etsystatic.com/25846489/r/il/7a3a8d/4954776487/il_fullxfull.4954776487_3t75.jpg","https://i.etsystatic.com/25846489/r/il/ef5e9c/4954770777/il_fullxfull.4954770777_7db0.jpg","https://i.etsystatic.com/25846489/r/il/05988c/4906504260/il_fullxfull.4906504260_le82.jpg","https://i.etsystatic.com/25846489/r/il/fa4ac6/4954775525/il_fullxfull.4954775525_fibt.jpg","https://i.etsystatic.com/25846489/r/il/723b75/4954770899/il_fullxfull.4954770899_a1b2.jpg"]},{TITLE:'40x80" Designer Kashmir Shawls, Authentic Pashmina Handmade Wrap, Hand Embroidered, Handloom Scarves, SM6',DESCRIPTION:`Kalamkari Sozni Jamawar Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Masterpiece Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Allover Jama Hand Embroidery With Unique And Different Designs.

The  Shawl is Handwoven On Handloom

Base Color : Multicolored

Weave : Tight

Feel :    soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 100 x 200 cm / 40 x80 Inch 

Work : Sozni Hand Embroidery(Needle Work) of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1400,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"woven_Pashmina_Wraps,extra_soft,shawls_and_wraps,knit_scarf,hand_embroidered,kalamkar_pashmina,exquisite_wraps,kalamkari,qalamkar,digital_print_shawl,christmas_sale,shop_christmas",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:37e3,images:["https://i.etsystatic.com/25846489/r/il/304710/3546952324/il_fullxfull.3546952324_nonz.jpg","https://i.etsystatic.com/25846489/r/il/478191/3594588115/il_fullxfull.3594588115_85pq.jpg","https://i.etsystatic.com/25846489/r/il/6de7c6/3546952344/il_fullxfull.3546952344_2zr3.jpg","https://i.etsystatic.com/25846489/r/il/ba6d19/3594588233/il_fullxfull.3594588233_mz6e.jpg","https://i.etsystatic.com/25846489/r/il/dad5d1/3594588151/il_fullxfull.3594588151_sch4.jpg","https://i.etsystatic.com/25846489/r/il/a656a5/3594588169/il_fullxfull.3594588169_39s1.jpg"]},{TITLE:'40x77" Check Pashmina Shawl with Shiny Tilla Zari Hand Embroidery, P180',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pink Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Check

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Golden

Care : - Dry Clean Only.

Size : 40 x 77 inch / 100 x 195cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:703,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_pashmina,wedding_shawls,zari_embroidery,pure_gold,kashmiri_embroidery,personalized_gifts,earings,hand_tilla,check_wrap,silver_tilla,pashmina_wedding,Festive_shawls,Christmas_week",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/f7e928/3525467140/il_fullxfull.3525467140_qen0.jpg","https://i.etsystatic.com/25846489/r/il/dbac8e/3246430146/il_fullxfull.3246430146_legy.jpg","https://i.etsystatic.com/25846489/r/il/fb175e/3294117767/il_fullxfull.3294117767_awoz.jpg","https://i.etsystatic.com/25846489/r/il/98d42c/3294117739/il_fullxfull.3294117739_d2i1.jpg"]},{TITLE:"43x86 Pink Sozni Shawl, Hand Embroidered Kashmir Wrap, Pure Pashmina, Woman shawls, 774",DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Pink

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 43 x 86 inch or 109 x 218 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1250,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"allover_embroidery,pashmina_jamawar,sozni_jama,cashmere_shawl,kashmiri_shawl,pashmina_kashmir,made_in_cashmere,pashmina_store,online_shop,new_year_sale,pink_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:30500,images:["https://i.etsystatic.com/25846489/r/il/5fd455/4876835417/il_fullxfull.4876835417_ta53.jpg","https://i.etsystatic.com/25846489/r/il/e25c74/4876831237/il_fullxfull.4876831237_m0zr.jpg","https://i.etsystatic.com/25846489/r/il/7aa481/4876832407/il_fullxfull.4876832407_31cm.jpg","https://i.etsystatic.com/25846489/r/il/e40d34/4828572950/il_fullxfull.4828572950_eq55.jpg","https://i.etsystatic.com/25846489/r/il/221e59/4828573342/il_fullxfull.4828573342_hzbj.jpg","https://i.etsystatic.com/25846489/r/il/688b7a/4876832405/il_fullxfull.4876832405_57bf.jpg","https://i.etsystatic.com/25846489/r/il/21b4bc/4876832367/il_fullxfull.4876832367_2ujj.jpg"]},{TITLE:'40x80" White Pure Pashmina Shawl with PATCHED Sozni border, Handwoven and Hand Embroidered, 763',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : White

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care :- Dry Clean Only.

Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1e3,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,curated_collection",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:30,images:["https://i.etsystatic.com/25846489/r/il/96f005/4800758960/il_fullxfull.4800758960_irt9.jpg","https://i.etsystatic.com/25846489/r/il/a85a6d/4800755088/il_fullxfull.4800755088_j9cz.jpg","https://i.etsystatic.com/25846489/r/il/85ef12/4800755156/il_fullxfull.4800755156_q4ds.jpg","https://i.etsystatic.com/25846489/r/il/7f590a/4849024787/il_fullxfull.4849024787_6ggu.jpg","https://i.etsystatic.com/25846489/r/il/9b8dd3/4849025043/il_fullxfull.4849025043_3lds.jpg","https://i.etsystatic.com/25846489/r/il/cdc2c0/4800753344/il_fullxfull.4800753344_o5k8.jpg","https://i.etsystatic.com/25846489/r/il/b9930d/4800755456/il_fullxfull.4800755456_acw9.jpg","https://i.etsystatic.com/25846489/r/il/6fb693/4800753812/il_fullxfull.4800753812_r713.jpg"]},{TITLE:'42x84" Rust Color Pure Cashmere Pashmina Shawl with Finest Kashmiri Hand Tilla Zari Embroidery on Pallu and Border, Kashmir Throw, 772',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery.

  Pashmina The finest wool in the world 

Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Rust

Weave: Tight

Feel :  soft, lightweight and warm.
 
Color Of Tilla :  Gold 

Tilla Quality : Guaranteed

Care :  - Dry Clean Only.

Size : 42 x 84 inch / 106 x 213 cm

Work : Tilla  Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1137,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_Pashmina,cashmere_wraps,hand_tilla_zari,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,ladakh_pashmina,Tilla_dozi_work,zari_embroidery,wedding_gifts,premium_quality,kashmiri_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27500,images:["https://i.etsystatic.com/25846489/r/il/b79d87/4800506274/il_fullxfull.4800506274_8alo.jpg","https://i.etsystatic.com/25846489/r/il/8c3cec/4848770993/il_fullxfull.4848770993_f2g7.jpg","https://i.etsystatic.com/25846489/r/il/7f3362/4800502166/il_fullxfull.4800502166_j9vc.jpg","https://i.etsystatic.com/25846489/r/il/65a4b7/4800502518/il_fullxfull.4800502518_45ev.jpg","https://i.etsystatic.com/25846489/r/il/3fe838/4848770033/il_fullxfull.4848770033_dgwp.jpg","https://i.etsystatic.com/25846489/r/il/189610/4848770955/il_fullxfull.4848770955_jxt9.jpg","https://i.etsystatic.com/25846489/r/il/f44c8b/4800502524/il_fullxfull.4800502524_6rzu.jpg"]},{TITLE:'40x80" Ekat Embroidered Pashmina Shawl, Sm36',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Ekat woven

Weave : Tight

Feel :    soft, lightweight and warm.

Care :  - Dry Clean Only.

Size : 100  × 200 cm / 40 × 80 inch

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:420,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"delicate_embroidery,sozni_pashmin,schals,hand_embroidery,scarves,winter_shawls,pashmina_embroidered,collectible_shawl,indian_woman,tradtional_wrap,ikat_pashmina,designer,handloom",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:10,images:["https://i.etsystatic.com/25846489/r/il/370bc5/4848914647/il_fullxfull.4848914647_2v3t.jpg","https://i.etsystatic.com/25846489/r/il/9a848b/4848910511/il_fullxfull.4848910511_pxfr.jpg","https://i.etsystatic.com/25846489/r/il/4121e2/4800640576/il_fullxfull.4800640576_484e.jpg","https://i.etsystatic.com/25846489/r/il/9fa296/4848911687/il_fullxfull.4848911687_r9n9.jpg","https://i.etsystatic.com/25846489/r/il/0a84db/4848911737/il_fullxfull.4848911737_696e.jpg","https://i.etsystatic.com/25846489/r/il/4c49e0/4800639538/il_fullxfull.4800639538_j7q2.jpg","https://i.etsystatic.com/25846489/r/il/be02ed/4848911005/il_fullxfull.4848911005_g91m.jpg","https://i.etsystatic.com/25846489/r/il/9844a1/4848910649/il_fullxfull.4848910649_fgdp.jpg"]},{TITLE:'28x80" Luxury Kashmiri  Gold Hand Tilla Embroidery Pure Cashmere Pashmina Wrap / Shawl/ Stole / Scarf, wedding gifts, M129',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla  ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pink Pashmina With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Scarf. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Beige

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Gold

Care : Dry Clean Only

Size : 28x 80 inch / 71x 200 cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:380,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,pure_pashmina,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls,hand_tilla_scarves,pashmina_stool,tilla_shawl,gold_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:8,images:["https://i.etsystatic.com/25846489/r/il/dd72b7/4733846217/il_fullxfull.4733846217_i9pb.jpg","https://i.etsystatic.com/25846489/r/il/4ae78a/4685620248/il_fullxfull.4685620248_j29h.jpg","https://i.etsystatic.com/25846489/r/il/da01a3/4733843247/il_fullxfull.4733843247_2sx2.jpg","https://i.etsystatic.com/25846489/r/il/9eacff/4685620250/il_fullxfull.4685620250_8jxf.jpg","https://i.etsystatic.com/25846489/r/il/9d1d17/4733844077/il_fullxfull.4733844077_12tk.jpg"]},{TITLE:'54x108" Grey 3 Yards Delicate Embroidery Pure Kashmir Pashmina Shawl, Gents Collectible Wrap, XL Size, 746',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

Handwoven on wooden handloom

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Color :  Natural Grey

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108 inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1118,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,exquisite_embroidery,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,men_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27,images:["https://i.etsystatic.com/25846489/r/il/6e98cb/4753055025/il_fullxfull.4753055025_ha9z.jpg","https://i.etsystatic.com/25846489/r/il/74c892/4753054995/il_fullxfull.4753054995_gxy1.jpg","https://i.etsystatic.com/25846489/r/il/2c60ab/4753054939/il_fullxfull.4753054939_qb33.jpg","https://i.etsystatic.com/25846489/r/il/59e8b5/4753054907/il_fullxfull.4753054907_43e4.jpg","https://i.etsystatic.com/25846489/r/il/d2b9e8/4753055019/il_fullxfull.4753055019_d08x.jpg","https://i.etsystatic.com/25846489/r/il/52f1f6/4704819130/il_fullxfull.4704819130_gc2g.jpg"]},{TITLE:"Pure Kashmiri Crepe Hand Aari Embroidery Saree, Completely Hand Embroidery Black sari, N152",DESCRIPTION:`Pure Crepe Exquisite Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 

We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Hand embroidered saree to add to your graceful closet another deluxe star. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Aari thread which forms a plethora of intricate Designs in the saree. A perfect match for the awesome stylish you, who loves to stay in tune with the latest trend but is also in love with the ethnic style saree. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Black 

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree And Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Aari Hand Embroidery (Needle Work) of Kashmir.

Note: 
Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:515,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"handmade_sari,saree_sale,handcrafted,wedding_sarees,pure_georgette_silk,summer_sarees,gift_for_her,indian_sarees,kashmir_work_sari,aari_sarees,rust_color,kashmiri_sarees,ari_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/66c7ab/4620791428/il_fullxfull.4620791428_m9ha.jpg","https://i.etsystatic.com/25846489/r/il/d920cc/4620791508/il_fullxfull.4620791508_kxis.jpg","https://i.etsystatic.com/25846489/r/il/13d911/4669034915/il_fullxfull.4669034915_s3q2.jpg","https://i.etsystatic.com/25846489/r/il/c9864f/4669034961/il_fullxfull.4669034961_mx8u.jpg","https://i.etsystatic.com/25846489/r/il/9784db/4669034957/il_fullxfull.4669034957_ljpv.jpg","https://i.etsystatic.com/25846489/r/il/44d43b/4669034751/il_fullxfull.4669034751_8mqs.jpg","https://i.etsystatic.com/25846489/r/il/197742/4669034843/il_fullxfull.4669034843_tdrd.jpg","https://i.etsystatic.com/25846489/r/il/cbff9e/4620791308/il_fullxfull.4620791308_arao.jpg","https://i.etsystatic.com/25846489/r/il/892871/4620791556/il_fullxfull.4620791556_kv9r.jpg"]},{TITLE:'40x80" 100% Handmade Pashmina shawl of Kashmir, needle embroidered, Wrap, H1',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery on borders.

The  Shawl is Handwoven On Handloom

Base Color : Mustard Yellow

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 100× 200 cm / 40 × 80 inch Approx

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:580,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"black_pashmina,pure_cashmere,winter_scarves,pashmina_shawl,boho_cloths,delicate_embroidery,sozni_shawl,woven_textile,schal,gift_for_her,diwali_sale,big_sale,pashmina_on_discount",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/be468d/4607430191/il_fullxfull.4607430191_nj9c.jpg","https://i.etsystatic.com/25846489/r/il/a91fd8/4607426751/il_fullxfull.4607426751_hajo.jpg","https://i.etsystatic.com/25846489/r/il/076472/4607426931/il_fullxfull.4607426931_ltfk.jpg","https://i.etsystatic.com/25846489/r/il/b9062b/4607426635/il_fullxfull.4607426635_2sbw.jpg","https://i.etsystatic.com/25846489/r/il/63cb9b/4607426813/il_fullxfull.4607426813_f7y3.jpg","https://i.etsystatic.com/25846489/r/il/0b9f2e/4560036950/il_fullxfull.4560036950_djbc.jpg"]},{TITLE:'40x80" Designer Striped Cashmere Pashmina Wrap, Made with love by Aritsan of Kashmir, Sozni Jamwar Kashmir Shawl, L3',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Grey

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1316,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_sozni,woman_scarf,fine_work,festive_pashmina,gift_for_her,indian_shawl,old_pashmina,hand_embroidered,expensive_gifts,real_kashmir_shawl,real_pashmina,Online_shopping,festive_sale",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:45,images:["https://i.etsystatic.com/25846489/r/il/1ba103/4181133958/il_fullxfull.4181133958_c0xm.jpg","https://i.etsystatic.com/25846489/r/il/a70959/4228784003/il_fullxfull.4228784003_c9ns.jpg","https://i.etsystatic.com/25846489/r/il/b1b7b1/4228784349/il_fullxfull.4228784349_3xfh.jpg","https://i.etsystatic.com/25846489/r/il/202bf3/4181132320/il_fullxfull.4181132320_ko6p.jpg","https://i.etsystatic.com/25846489/r/il/ef8f65/4181132050/il_fullxfull.4181132050_i3rm.jpg","https://i.etsystatic.com/25846489/r/il/7085bc/4181132026/il_fullxfull.4181132026_rimx.jpg","https://i.etsystatic.com/25846489/r/il/692183/4228784053/il_fullxfull.4228784053_9usz.jpg","https://i.etsystatic.com/25846489/r/il/2efc4a/4228784371/il_fullxfull.4228784371_79gd.jpg","https://i.etsystatic.com/25846489/r/il/0ffddc/4228784345/il_fullxfull.4228784345_fzsu.jpg","https://i.etsystatic.com/25846489/r/il/2f50ec/4181132338/il_fullxfull.4181132338_hsuy.jpg"]},{TITLE:"Maroon Pure Crepe Kashmir Sozni Hand Embroidered  Saree with Blouse, 228",DESCRIPTION:`Pure Crepe  Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 
Gorgeous Hand Embroidered Kashmiri Saree, which you can wear at Any Occasion

About this Saree : 
We have for the sophisticated stylist in you, the one who loves elegance, who loves to be luxurious in their style, a gorgeous, graceful Beige  Hand embroidered saree to add to your graceful closet another deluxe star. this beautiful  Saree will add an unmatched grace to your persona. The saree comes with its blouse and is adorned in the sheer splendor of Kashmiri Staple thread which forms a plethora of intricate paisleys Design Border and Corner in the saree, each one of them hand embroidered with utmost skill and precision to create a masterpiece that stays with you for life. The royal  saree in an  Sozni embroidery making it an ideal luxury pick.
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Maroon

Finish: Unstitched Blouse
 
Fabric :   Pure Crepe Saree And Pure Crepe Blouse

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni  Hand Embroidery (Needle Work) 

Note: 

Kindly Let Us Know If You want us to do Pico And Fall on Saree

We make sure that the color in the photos of listings is very close to the actual color of the products But there might be a little variation in color due to photographic effects.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:870,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"traditional_saree,indian_sarees,ethnic_dress,diwali_gifts,sozni_sarees,meher_premium,banarasi_sari,needle_work,kashmiri_embroidery,embroidered_blouse,saree_online,wedding_saree,made_in_kashmir",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/ae42dc/4555558923/il_fullxfull.4555558923_thwm.jpg","https://i.etsystatic.com/25846489/r/il/cd957c/4508183988/il_fullxfull.4508183988_bcw2.jpg","https://i.etsystatic.com/25846489/r/il/08a690/4508185344/il_fullxfull.4508185344_szt8.jpg","https://i.etsystatic.com/25846489/r/il/fcc644/4508189972/il_fullxfull.4508189972_b4t3.jpg","https://i.etsystatic.com/25846489/r/il/63afcb/4508189672/il_fullxfull.4508189672_ih33.jpg","https://i.etsystatic.com/25846489/r/il/ffa2f5/4508189084/il_fullxfull.4508189084_qy4x.jpg","https://i.etsystatic.com/25846489/r/il/b2ee40/4508189676/il_fullxfull.4508189676_rsqw.jpg","https://i.etsystatic.com/25846489/r/il/f97a63/4555554417/il_fullxfull.4555554417_8xh6.jpg"]},{TITLE:'Natural  Palledaar Sozni Hand Embroidery Pure Pashmina Stole, Cashmere Scarf, Winter Wrap, 28x78", M48',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Natural 

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 72 x 194 cm / 28 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:348,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"palla_stole,pashmina_wrap,scarf,hand_embroidered,kashmir_wrap,pashmina_white,gift_for_her,happy_christmas,big_sale,annual_sale,autumn_scarf,neck_scarf,women_scarf",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:7400,images:["https://i.etsystatic.com/25846489/r/il/3d8324/3889857975/il_fullxfull.3889857975_ls6j.jpg","https://i.etsystatic.com/25846489/r/il/3aa148/3889855579/il_fullxfull.3889855579_gcx2.jpg","https://i.etsystatic.com/25846489/r/il/9a7e23/3889855577/il_fullxfull.3889855577_au1z.jpg","https://i.etsystatic.com/25846489/r/il/4d3355/3842356380/il_fullxfull.3842356380_8o2p.jpg","https://i.etsystatic.com/25846489/r/il/974b8e/3889855585/il_fullxfull.3889855585_gkv1.jpg"]},{TITLE:'43x86" Maroon  Pashmina Shawl With Kashmiri Tilla Thread Work, Hand Embroidered my Master Artisans, Handwoven, Luxury Wdding Gifts,731',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Maroon

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care :- Dry Clean Only.

Size : 43 x 86 Inch or 108 x 218 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1080,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,brown_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/694fc3/4481556360/il_fullxfull.4481556360_fenq.jpg","https://i.etsystatic.com/25846489/r/il/96c814/4528919589/il_fullxfull.4528919589_dryz.jpg","https://i.etsystatic.com/25846489/r/il/888bca/4528919527/il_fullxfull.4528919527_bix8.jpg","https://i.etsystatic.com/25846489/r/il/d6b047/4528919765/il_fullxfull.4528919765_7g7w.jpg","https://i.etsystatic.com/25846489/r/il/81ba9b/4481554204/il_fullxfull.4481554204_5yrt.jpg","https://i.etsystatic.com/25846489/r/il/f9e42c/4481554222/il_fullxfull.4481554222_ru9h.jpg","https://i.etsystatic.com/25846489/r/il/320232/4528919567/il_fullxfull.4528919567_gw71.jpg","https://i.etsystatic.com/25846489/r/il/e3ef45/4481554006/il_fullxfull.4481554006_sr2s.jpg","https://i.etsystatic.com/25846489/r/il/bba5ec/4481554012/il_fullxfull.4481554012_cxjd.jpg"]},{TITLE:'28x80" Red Ombre Shade Allover Embroidery Pure Cashmere Pashmina Scarf, Handmade Wrap, M93',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf : This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Base Color : Red Ombre ( 3 shades)

Weave : Medium

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only.

Size : 28 x 80 Inch  / 71 x 200 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:384,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schals,dorukha_reversible,pashmina_white,allover_embroidery,sozni_jama,motif_pashmina,thread_embroidery,kashmir_shawl,women_scarves,cashmere_scarves,summer_shawl,indian_dress,women_wear",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:8.2,images:["https://i.etsystatic.com/25846489/r/il/8c5c2d/4419766256/il_fullxfull.4419766256_qr8v.jpg","https://i.etsystatic.com/25846489/r/il/b4425a/4467129423/il_fullxfull.4467129423_41yz.jpg","https://i.etsystatic.com/25846489/r/il/14db12/4467129415/il_fullxfull.4467129415_9dwq.jpg","https://i.etsystatic.com/25846489/r/il/9b8ebd/4419763296/il_fullxfull.4419763296_1afz.jpg"]},{TITLE:'42x84" Bottle Green Hand Tilla Thread Combination Embroidered Pure Pashmina Shawl, 100% Original Kashmir shawl, Wedding Scarves, 718',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Bottle Green

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care :- Dry Clean Only.

Size : 42 x 84 Inch or 106 x 212 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1115,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,christmas",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:26,images:["https://i.etsystatic.com/25846489/r/il/1f12d5/4466986091/il_fullxfull.4466986091_qdy0.jpg","https://i.etsystatic.com/25846489/r/il/0ae09b/4419614638/il_fullxfull.4419614638_axbx.jpg","https://i.etsystatic.com/25846489/r/il/a1e005/4419614446/il_fullxfull.4419614446_cweu.jpg","https://i.etsystatic.com/25846489/r/il/9bd223/4466981827/il_fullxfull.4466981827_44om.jpg","https://i.etsystatic.com/25846489/r/il/00715a/4419614452/il_fullxfull.4419614452_h33u.jpg","https://i.etsystatic.com/25846489/r/il/76f675/4419614490/il_fullxfull.4419614490_gtzw.jpg","https://i.etsystatic.com/25846489/r/il/6110ad/4419614498/il_fullxfull.4419614498_eogb.jpg","https://i.etsystatic.com/25846489/r/il/6e078c/4466981685/il_fullxfull.4466981685_r2ll.jpg"]},{TITLE:'40x80"  Pink Sozni Palla Embroidered Shawl, Handwork Kashmir Pashmina, Made with Love, Ideal gifting wraps, SM29',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozni are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

Base Color : Pink 

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm approx

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:680,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"sozni_pashmina,palledaar_shawl,hand_embroidered,cashmere_shawl,pure_pashmina,high_end_shawls,real_kashmiri_shawl,best_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:18.5,images:["https://i.etsystatic.com/25846489/r/il/8522d0/4419691500/il_fullxfull.4419691500_pwkw.jpg","https://i.etsystatic.com/25846489/r/il/8391f9/4419690242/il_fullxfull.4419690242_c0sv.jpg","https://i.etsystatic.com/25846489/r/il/081d9f/4419690314/il_fullxfull.4419690314_dkci.jpg","https://i.etsystatic.com/25846489/r/il/1bdc19/4467056767/il_fullxfull.4467056767_gk6f.jpg","https://i.etsystatic.com/25846489/r/il/3731d2/4419690302/il_fullxfull.4419690302_d7cl.jpg","https://i.etsystatic.com/25846489/r/il/6d001d/4467056807/il_fullxfull.4467056807_1t8q.jpg","https://i.etsystatic.com/25846489/r/il/f9ef68/4467057003/il_fullxfull.4467057003_kazc.jpg","https://i.etsystatic.com/25846489/r/il/67cea9/4419690494/il_fullxfull.4419690494_pexe.jpg","https://i.etsystatic.com/25846489/r/il/e1847a/4419690468/il_fullxfull.4419690468_3o6q.jpg"]},{TITLE:'28x80" Super Soft Hand Embroidered Hand Weave Real Pashmina Wrap, Unisex Sozni Scarfs , Handcrafted, m90',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: This Gorgeous Handwoven Pure Pashmina Scarf By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Scarf has  Sozni Hand embroidery.

The  Scarf is Handwoven On Handloom

Color: Camel

Weave: Medium

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 69x 203cm / 28 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:395,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"jama_scarfs,ikat_pashmina,pure_cashmere,kashmiri_scarfs,cashmere_pashmina,hand_work,silk_scarf,evening_wrap,handwoven_scarf,kashmir_sozni,pashmina_scarf,white_pashmina,weaving",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:8.5,images:["https://i.etsystatic.com/25846489/r/il/79c04a/4458260147/il_fullxfull.4458260147_dkcg.jpg","https://i.etsystatic.com/25846489/r/il/284030/4410871838/il_fullxfull.4410871838_e1qo.jpg","https://i.etsystatic.com/25846489/r/il/d3d150/4410871870/il_fullxfull.4410871870_1w9u.jpg","https://i.etsystatic.com/25846489/r/il/63c1ed/4410871860/il_fullxfull.4410871860_iy1q.jpg","https://i.etsystatic.com/25846489/r/il/364d1d/4410871894/il_fullxfull.4410871894_gqwz.jpg","https://i.etsystatic.com/25846489/r/il/f8638e/4458258861/il_fullxfull.4458258861_5boc.jpg"]},{TITLE:'54x108" White Gents Size Pure Pashmina Shawl with Exquisite Kashmiri Sozni Embroidery, Soft And warm XL Authentic Cashmere Wrap, 700',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

Handwoven on wooden handloom

Color :  White

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Dry Clean Only

Size : 54 x 108 inch  or  137 x 274 cm

Work : Sozni/ Hand Embroidery of Kashmir of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1285,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"masterpiece_shawl,special_pashmina,gents_shawl,large_size,king_size_shawl,royal_pashmina,fine_embroidery,hand_embroidery,expensive_shawls,gift_for_her,winter_shawl,christmas_sale,chinar_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:32e3,images:["https://i.etsystatic.com/25846489/r/il/dbe626/4358783258/il_fullxfull.4358783258_hdjf.jpg","https://i.etsystatic.com/25846489/r/il/7bafb9/4406165195/il_fullxfull.4406165195_cshp.jpg","https://i.etsystatic.com/25846489/r/il/7c2db2/4358782486/il_fullxfull.4358782486_emd9.jpg","https://i.etsystatic.com/25846489/r/il/d38d76/4358782020/il_fullxfull.4358782020_2w91.jpg","https://i.etsystatic.com/25846489/r/il/ae6ecd/4358782746/il_fullxfull.4358782746_muea.jpg","https://i.etsystatic.com/25846489/r/il/800e29/4406165823/il_fullxfull.4406165823_qhh9.jpg","https://i.etsystatic.com/25846489/r/il/fbebe1/4358781644/il_fullxfull.4358781644_2q85.jpg","https://i.etsystatic.com/25846489/r/il/e1201c/4406165233/il_fullxfull.4406165233_ctbn.jpg","https://i.etsystatic.com/25846489/r/il/8e8bba/4406165375/il_fullxfull.4406165375_jdgc.jpg"]},{TITLE:'43x86" Rust Kashmir Pashmina Shawl, Allover Hand Embroidered Handwoven Wrap, 680',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl(100% Cashmere)  with Sozni Jamawar  hand embroidery (NeedleWork)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Briliant Hand embroidered Pashmina Shawl with Very Fine Allover Sozni Hand Embroidered Is One of its Kind.  Designed and manufactured by best Designer and Artisan with immense hard work and patience. The Shawl is hand embroidered with entirely different and unique color matching.

Base Color : Mustard 

Weave : Tight

Feel :   soft, lightweight and warm.
 
Care : - Dry Clean Only.

Size : 43 x 86 Inch / 109 x 218 cm

Work : Sozni  Hand Embroidery(Needle Work) of Kashmir

NOTE:
 We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:900,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kalamkari_shawl,sozni_shawl,pashmina_allover,hand_embroidery,kashmir_schal,vicunna_pashmina,cashmere,xl_Pashmina,large_shawl,sozni_jama,kashmir_shawl,new_scarves,handmade",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:2e4,images:["https://i.etsystatic.com/25846489/r/il/4a182b/3732056114/il_fullxfull.3732056114_jxay.jpg","https://i.etsystatic.com/25846489/r/il/37d3c2/3779637715/il_fullxfull.3779637715_tut0.jpg","https://i.etsystatic.com/25846489/r/il/fbf8d3/3779637743/il_fullxfull.3779637743_62uh.jpg","https://i.etsystatic.com/25846489/r/il/de0201/3779637641/il_fullxfull.3779637641_2jdw.jpg","https://i.etsystatic.com/25846489/r/il/e0bb56/3732053554/il_fullxfull.3732053554_jsyn.jpg","https://i.etsystatic.com/25846489/r/il/e47862/3732053318/il_fullxfull.3732053318_qh8o.jpg"]},{TITLE:"45x90 Large Size Pure Pashmina Shawl with Intricate Sozni Allover hand embroidery, Handwoven cashmere, winter Shawls, Christmas Specials, L6",DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

Base Color : Bottle Green

Feel :  soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended

Size : 45 x 90 inch / 114 x 228 cm

Work : Sozni 

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1385,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cashmere_scarfs,pashmina_shawl,cashmere_pashmina,kashmiri_stole,pashmina_usa,meditation_shawl,festival_shawl,ceremony_shawls,fine_work_shawls,green_pashmina,anniversary_gifts,meherpremium,sozni_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:41e3,images:["https://i.etsystatic.com/25846489/r/il/e4c9d8/4343900944/il_fullxfull.4343900944_oifu.jpg","https://i.etsystatic.com/25846489/r/il/3a51a3/4391270883/il_fullxfull.4391270883_rnhd.jpg","https://i.etsystatic.com/25846489/r/il/0c80df/4391270913/il_fullxfull.4391270913_nt9g.jpg","https://i.etsystatic.com/25846489/r/il/655773/4343883634/il_fullxfull.4343883634_lm8z.jpg","https://i.etsystatic.com/25846489/r/il/a53073/4343883548/il_fullxfull.4343883548_ieie.jpg","https://i.etsystatic.com/25846489/r/il/ed2a84/4343883668/il_fullxfull.4343883668_3b99.jpg","https://i.etsystatic.com/25846489/r/il/41fccf/4343883720/il_fullxfull.4343883720_5zwy.jpg","https://i.etsystatic.com/25846489/r/il/8d2968/4391270705/il_fullxfull.4391270705_pw77.jpg"]},{TITLE:'40x80" Grey Jaaldar Embroidery Shawl, Pure Pashmina, Kashmiri Sozni Throw, M603',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven 

Base Color : Grey

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:555,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"mothers_gift,pashmina_shawls,allover_work,sozni_shawl,engagement_gifts,scarf_for_winter,hand_embroidered,cashmere_shawl,best_shop,autumn_shawls,wedding_favors,boho_clothing,grey_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16.5,images:["https://i.etsystatic.com/25846489/r/il/8a6ea8/3999597404/il_fullxfull.3999597404_fqa9.jpg","https://i.etsystatic.com/25846489/r/il/6dfaf9/3999596468/il_fullxfull.3999596468_ch5r.jpg","https://i.etsystatic.com/25846489/r/il/0e8068/3999597824/il_fullxfull.3999597824_izm4.jpg","https://i.etsystatic.com/25846489/r/il/1099f0/3999596656/il_fullxfull.3999596656_nki3.jpg","https://i.etsystatic.com/25846489/r/il/3b5667/4047244397/il_fullxfull.4047244397_71af.jpg","https://i.etsystatic.com/25846489/r/il/aabe1d/3999596524/il_fullxfull.3999596524_avea.jpg","https://i.etsystatic.com/25846489/r/il/6ad7f9/4047244367/il_fullxfull.4047244367_i382.jpg","https://i.etsystatic.com/25846489/r/il/8f4534/4047244443/il_fullxfull.4047244443_mhab.jpg"]},{TITLE:'Self Matching Allover Jaaldaar Embroidered Cashmere Pashmina Wrap, Handmade Scarf Stole, 28x80", M30',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: Beautiful Kashmiri Sozni Embroidery Pashmina Scarf with Colorful Combination bringing graceful Glow for the one who wears it.

The  Scarf is Handwoven On Handloom

Color: Orange

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Dry Clean Only

Size : 71 x 200 cm / 28 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:474,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pashmina_scarf,cashmere,scarf_modern,kashmir_stole,handmade,embroidered,kashmir_pashmina,gi_pashmina,sozni_jama,allover_work,English_combination,Uk_Pashmina,Scarf_us",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:10500,images:["https://i.etsystatic.com/25846489/r/il/81564b/3701026945/il_fullxfull.3701026945_nbwd.jpg","https://i.etsystatic.com/25846489/r/il/e77d17/3653415132/il_fullxfull.3653415132_lvl6.jpg","https://i.etsystatic.com/25846489/r/il/490b6c/3701026923/il_fullxfull.3701026923_9vss.jpg","https://i.etsystatic.com/25846489/r/il/a1d375/3701026919/il_fullxfull.3701026919_71v4.jpg","https://i.etsystatic.com/25846489/r/il/f5e860/3653415120/il_fullxfull.3653415120_gjn3.jpg"]},{TITLE:"Black Pure Crepe Kashmiri Hand Tilla Zari Work Saree | Bridal Wear Kashmir sari | m324",DESCRIPTION:`Pure Crepe Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Georgette Saree with allover Tilla Zari hand embroidered.
It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Tilla Zari Needle Work and  Embroidered Blouse.

Base Color : Black

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Light Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:820,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_dress,tilla_work_saree,saree_for_women,gold_zari_saree,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari,tilla_sarees,lotus_tilla",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:20700,images:["https://i.etsystatic.com/25846489/r/il/fac7b2/5778564029/il_fullxfull.5778564029_ju2k.jpg","https://i.etsystatic.com/25846489/r/il/cabc89/5778564123/il_fullxfull.5778564123_fzmu.jpg","https://i.etsystatic.com/25846489/r/il/c237df/5778564125/il_fullxfull.5778564125_9bpv.jpg","https://i.etsystatic.com/25846489/r/il/9ca8dd/5730491092/il_fullxfull.5730491092_ro8q.jpg","https://i.etsystatic.com/25846489/r/il/0f0593/5778564127/il_fullxfull.5778564127_jdjy.jpg","https://i.etsystatic.com/25846489/r/il/7dc67a/5730490958/il_fullxfull.5730490958_8jht.jpg","https://i.etsystatic.com/25846489/r/il/5df062/5730491002/il_fullxfull.5730491002_fc7q.jpg","https://i.etsystatic.com/25846489/r/il/b98810/5778564007/il_fullxfull.5778564007_xo1q.jpg","https://i.etsystatic.com/25846489/r/il/160bfa/5730491004/il_fullxfull.5730491004_6sec.jpg","https://i.etsystatic.com/25846489/r/il/1ee5bf/5778563987/il_fullxfull.5778563987_rcw4.jpg"]},{TITLE:'42x84" Beautiful White Paisley Shawl, Sozni Tilla Mix Hand Embroidery, Authentic Soft Cashmere Pashmina, Ideal Wedding Scarves, 923',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : White

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden and Silver

Care :- Dry Clean Only.

Size : 42 x 84 Inch or 106 x 212 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:970,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,yellow_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27300,images:["https://i.etsystatic.com/25846489/r/il/33402e/6116605430/il_fullxfull.6116605430_jppi.jpg","https://i.etsystatic.com/25846489/r/il/ab2f61/6164725457/il_fullxfull.6164725457_jhja.jpg","https://i.etsystatic.com/25846489/r/il/2caae9/6116605340/il_fullxfull.6116605340_1gd4.jpg","https://i.etsystatic.com/25846489/r/il/52aa65/6164725973/il_fullxfull.6164725973_e317.jpg","https://i.etsystatic.com/25846489/r/il/57a5ae/6164725937/il_fullxfull.6164725937_o512.jpg","https://i.etsystatic.com/25846489/r/il/d60917/6164725839/il_fullxfull.6164725839_4dzd.jpg","https://i.etsystatic.com/25846489/r/il/d294e6/6116605346/il_fullxfull.6116605346_f0tu.jpg","https://i.etsystatic.com/25846489/r/il/8be9c6/6164726019/il_fullxfull.6164726019_713c.jpg"]},{TITLE:'40x80" Beautiful  Paisley Shawl, Sozni Tilla Mix Hand Embroidery, Authentic Soft Cashmere Pashmina, Ideal Wedding Scarves, 922',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Peach Fawn

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care :- Dry Clean Only.

Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla  Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:880,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina,yellow_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25,images:["https://i.etsystatic.com/25846489/r/il/606e58/6116598888/il_fullxfull.6116598888_7lvi.jpg","https://i.etsystatic.com/25846489/r/il/5e4b98/6116598902/il_fullxfull.6116598902_fba6.jpg","https://i.etsystatic.com/25846489/r/il/4a0818/6164719277/il_fullxfull.6164719277_chvx.jpg","https://i.etsystatic.com/25846489/r/il/7e2e09/6164719293/il_fullxfull.6164719293_ihet.jpg","https://i.etsystatic.com/25846489/r/il/d90862/6116599112/il_fullxfull.6116599112_1d85.jpg","https://i.etsystatic.com/25846489/r/il/55989e/6116599140/il_fullxfull.6116599140_clix.jpg","https://i.etsystatic.com/25846489/r/il/8140f5/6116599208/il_fullxfull.6116599208_o2n2.jpg","https://i.etsystatic.com/25846489/r/il/3b9ba4/6164719459/il_fullxfull.6164719459_4xjb.jpg","https://i.etsystatic.com/25846489/r/il/e7edb0/6290576848/il_fullxfull.6290576848_thqs.jpg","https://i.etsystatic.com/25846489/r/il/6ca338/6290576866/il_fullxfull.6290576866_2j31.jpg"]},{TITLE:'30x80" Turquoise Blue Pure Pashmina Scarf , Sozni border with Hand Tilla Touch, 263',DESCRIPTION:`Authentic and Handwoven Pure Pashmina Stole With Tilla ZARI and Sozni Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Scarf: Craftsmanship at Its Ultimate level , This Brilliant  Pashmina With Tilla Zari and sozni Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Scarf. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.
 
Base Color : Turquoise Blue 

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Gold 

Care : Dry Clean Only

Size : 28x 80 inch / 71x 200 cm

Work : Sozni and  Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:522,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_scarf,cashmere_wrap,christmas_gifts,sustainable_gifts,pure_pashmina,women_scarves,soft_shawls,zari_stole,indian_gifts,wedding_stool,made_in_kashmir,gold_embroidery,palladaar",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13200,images:["https://i.etsystatic.com/25846489/r/il/bd5110/6164711989/il_fullxfull.6164711989_2a6h.jpg","https://i.etsystatic.com/25846489/r/il/dd4327/6164711851/il_fullxfull.6164711851_k7g7.jpg","https://i.etsystatic.com/25846489/r/il/6070cc/6116592052/il_fullxfull.6116592052_lojq.jpg","https://i.etsystatic.com/25846489/r/il/bf19b8/6116591994/il_fullxfull.6116591994_ao3f.jpg","https://i.etsystatic.com/25846489/r/il/2ee281/6116592038/il_fullxfull.6116592038_14jr.jpg","https://i.etsystatic.com/25846489/r/il/7890d5/6116592072/il_fullxfull.6116592072_6xdc.jpg"]},{TITLE:'40x80" Pink Allover Botis Brilliance: Pure Pashmina Hand-Woven Shawl Enriched with Sozni Hand Embroidery, L104',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Immerse yourself in the timeless allure of this pure pashmina hand-woven shawl, meticulously crafted with exquisite Sozni hand embroidery. Each intricate boti design adorns the fabric, creating a mesmerizing tapestry of elegance and tradition. Luxuriously soft and delicately embroidered, this shawl is a masterpiece of artisanal skill, perfect for adding a touch of sophistication to any ensemble.


This Shawl is Handwoven

Base Color : Pink

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,eid_shopping,eid_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13300,images:["https://i.etsystatic.com/25846489/r/il/8be62f/6164694075/il_fullxfull.6164694075_l5cr.jpg","https://i.etsystatic.com/25846489/r/il/bd019b/6116574186/il_fullxfull.6116574186_kwzm.jpg","https://i.etsystatic.com/25846489/r/il/2aeaa6/6164694021/il_fullxfull.6164694021_hinx.jpg","https://i.etsystatic.com/25846489/r/il/125123/6116574222/il_fullxfull.6116574222_407y.jpg","https://i.etsystatic.com/25846489/r/il/4f8d4c/6164694069/il_fullxfull.6164694069_7dgz.jpg","https://i.etsystatic.com/25846489/r/il/163519/6164694101/il_fullxfull.6164694101_ryne.jpg"]},{TITLE:'40x80" Black Pashmina Shawl With Kashmiri Tilla and sozni  Work, Hand Embroidered my Master Artisans, L106',DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

Base Color : Black

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care :- Dry Clean Only.

Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:675,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:19,images:["https://i.etsystatic.com/25846489/r/il/ccf6be/6164686137/il_fullxfull.6164686137_ibz4.jpg","https://i.etsystatic.com/25846489/r/il/eb0f73/6116566170/il_fullxfull.6116566170_r530.jpg","https://i.etsystatic.com/25846489/r/il/ffb2be/6116566244/il_fullxfull.6116566244_r9up.jpg","https://i.etsystatic.com/25846489/r/il/9154de/6164686079/il_fullxfull.6164686079_qxvz.jpg","https://i.etsystatic.com/25846489/r/il/33b3fc/6116566148/il_fullxfull.6116566148_dzmw.jpg","https://i.etsystatic.com/25846489/r/il/b7afd7/6116566258/il_fullxfull.6116566258_hgcq.jpg","https://i.etsystatic.com/25846489/r/il/e187a9/6164686263/il_fullxfull.6164686263_egzw.jpg","https://i.etsystatic.com/25846489/r/il/8e97c5/6164686257/il_fullxfull.6164686257_k9st.jpg"]},{TITLE:'30x80"  Dorukha Aksi / Reversible Sozni Hand-Embroidered Pure Pashmina Stole, 266',DESCRIPTION:`Sozni Hand Embroidered Pure Pashmina Scarf (No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Crafted from pure pashmina wool, this stole is adorned with intricate Aksi (Reversible shade) motifs using the traditional dorukha sozni hand embroidery technique. Originating from Kashmir, each stitch reflects the skilled craftsmanship and cultural heritage of the region. The stole merges luxury with tradition, offering timeless elegance and warmth, making it a symbol of exquisite craftsmanship and refined style.

The  Scarf is Handwoven On Handloom

Base Color: Black

Weave: Tight

Feel:   Incredibly soft, lightweight, and warm.

Care: - Gentle Hand Wash Recommended

Size : 76 x 200 cm / 30 x 80 inch

Work: Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:672,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"premium_scarves,pashmina,kashmiri_shawls,cashmere_shawls,pure_pashmina,gift_for_sister,small_scarf,stole,handmade,beautiful,kalamkaar_pashmina,aksi__scarf,wedding",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:17e3,images:["https://i.etsystatic.com/25846489/r/il/4ccfb8/6164655893/il_fullxfull.6164655893_3br3.jpg","https://i.etsystatic.com/25846489/r/il/63ff28/6164655915/il_fullxfull.6164655915_aykp.jpg","https://i.etsystatic.com/25846489/r/il/e215d3/6116536050/il_fullxfull.6116536050_l1qy.jpg","https://i.etsystatic.com/25846489/r/il/8fc08b/6164655925/il_fullxfull.6164655925_i8kc.jpg","https://i.etsystatic.com/25846489/r/il/8b3ec8/6164655947/il_fullxfull.6164655947_md39.jpg","https://i.etsystatic.com/25846489/r/il/b56d7a/6116536118/il_fullxfull.6116536118_6ef0.jpg","https://i.etsystatic.com/25846489/r/il/cdc5aa/6164656035/il_fullxfull.6164656035_do2a.jpg"]},{TITLE:'45x90" Sozni Jama Hand-Embroidered Authentic Pashmina Shawl, 926',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

This Shawl is Handwoven

Base Color : Navy Blue

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 45 x 90 inch or 114 x 228 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1320,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"fine_embroidey,exclusive_pashmina,sustainable_fashion,women_wear,kashmirn_pashmina,kashmir_shawl,fine_work,gift_for_mom,grandmother_shawl,indian_shawl,crafts_mela,premium,box_design",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:37,images:["https://i.etsystatic.com/25846489/r/il/3e97a8/6116491076/il_fullxfull.6116491076_r2r2.jpg","https://i.etsystatic.com/25846489/r/il/96a406/6116491428/il_fullxfull.6116491428_1en5.jpg","https://i.etsystatic.com/25846489/r/il/dd6de0/6116491028/il_fullxfull.6116491028_mtti.jpg","https://i.etsystatic.com/25846489/r/il/5aadc4/6164610747/il_fullxfull.6164610747_pryz.jpg","https://i.etsystatic.com/25846489/r/il/df10eb/6164610273/il_fullxfull.6164610273_c3am.jpg","https://i.etsystatic.com/25846489/r/il/5073b5/6164610375/il_fullxfull.6164610375_t4li.jpg","https://i.etsystatic.com/25846489/r/il/269804/6116491388/il_fullxfull.6116491388_mlw1.jpg","https://i.etsystatic.com/25846489/r/il/7049cf/6164610739/il_fullxfull.6164610739_g130.jpg","https://i.etsystatic.com/25846489/r/il/5e9bc0/6116490978/il_fullxfull.6116490978_glgp.jpg","https://i.etsystatic.com/25846489/r/il/e6601f/6116490988/il_fullxfull.6116490988_q10j.jpg"]},{TITLE:'45x90" Black Handwoven Kashmiri Pashmina Shawl with Sozni Embroidery, 925',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Jama Sozni Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with Allover Hand  Embroidery(Sozni)  from Kashmir

This adorable Pashmina Shawl is an embodiment of skill shown in the intricacies of Sozni Kaari in Jama pattern where an Artisan's fancy has no limits. He gathers his creativity in his complex needle strokes and forms amazing patterns over an elegant Pashmina which is an ideal pick for winter blues.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color: Black

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 45 x 90 Inch / 114 x 228 cm

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: The actual color of the product may slightly differ due to photographic effects
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1100,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"hand_embroidered,cashmere_shawls,sozni_shawl,embroidered_pashmina,pure_pashmina,pashmina_gift,fine_embroidery,meherpremium_shawl,pashmina_scarf,pashmina_schal,cashmere_wrap,kashmir,Christmas_Shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:27,images:["https://i.etsystatic.com/25846489/r/il/7ed8df/6116478456/il_fullxfull.6116478456_mm5s.jpg","https://i.etsystatic.com/25846489/r/il/7be8ac/6164597311/il_fullxfull.6164597311_bcwp.jpg","https://i.etsystatic.com/25846489/r/il/2a0525/6164597589/il_fullxfull.6164597589_x8vy.jpg","https://i.etsystatic.com/25846489/r/il/950a92/6116478792/il_fullxfull.6116478792_5hqr.jpg","https://i.etsystatic.com/25846489/r/il/bd0a98/6116478410/il_fullxfull.6116478410_r52w.jpg","https://i.etsystatic.com/25846489/r/il/48dadb/6164597345/il_fullxfull.6164597345_t9fj.jpg","https://i.etsystatic.com/25846489/r/il/6bef40/6116478444/il_fullxfull.6116478444_2rxd.jpg","https://i.etsystatic.com/25846489/r/il/97b73f/6164597343/il_fullxfull.6164597343_5dcs.jpg","https://i.etsystatic.com/25846489/r/il/3d112f/6116478790/il_fullxfull.6116478790_l9vr.jpg","https://i.etsystatic.com/25846489/r/il/0566a1/6164601207/il_fullxfull.6164601207_li1i.jpg"]},{TITLE:'40x80" Black Sozni and Tilla Handcrafted Pure Pashmina Shawl, L101',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

experience timeless luxury with our pure pashmina shawl, meticulously adorned with exquisite Sozni and Tilla hand embroidery. Crafted by skilled artisans, each intricate design reflects a heritage of craftsmanship and elegance. Perfect for adding a touch of sophistication to any ensemble, our shawl promises both warmth and style, making it a cherished addition to your wardrobe.

This Shawl is Handwoven on Wooden handloom

Base Color : Black

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care : - Gentle hand wash Recommended 

Size : 40 x 80 inch / 100 x 200 cm Approx

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:520,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,vuitton_top,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14500,images:["https://i.etsystatic.com/25846489/r/il/2ffeee/6125935159/il_fullxfull.6125935159_tmmm.jpg","https://i.etsystatic.com/25846489/r/il/05f393/6125934361/il_fullxfull.6125934361_3yn6.jpg","https://i.etsystatic.com/25846489/r/il/6270c6/6077870670/il_fullxfull.6077870670_j3v3.jpg","https://i.etsystatic.com/25846489/r/il/b58ec3/6125934365/il_fullxfull.6125934365_ixgq.jpg","https://i.etsystatic.com/25846489/r/il/2081f6/6125934347/il_fullxfull.6125934347_jo8s.jpg","https://i.etsystatic.com/25846489/r/il/5f62a2/6077870662/il_fullxfull.6077870662_14ar.jpg","https://i.etsystatic.com/25846489/r/il/73a7b0/6125934407/il_fullxfull.6125934407_2udn.jpg"]},{TITLE:'40x80" White Kashmiri shawl, Pure Pashmina wrap With Hand embroidery, Modern design cashmere, handmade, Christmas Gifts, L102',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : White

Feel :  soft, lightweight and warm.

Color Of Tilla : Silver

Care : - Gentle hand wash Recommended 

Size : 40 x 80 inch / 100 x 200 cm Approx

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:520,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,vuitton_top,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14500,images:["https://i.etsystatic.com/25846489/r/il/62f39d/6125933085/il_fullxfull.6125933085_dfvd.jpg","https://i.etsystatic.com/25846489/r/il/99f521/6077868420/il_fullxfull.6077868420_ohq8.jpg","https://i.etsystatic.com/25846489/r/il/382c5c/6077868432/il_fullxfull.6077868432_fypy.jpg","https://i.etsystatic.com/25846489/r/il/ee2ea8/6125932181/il_fullxfull.6125932181_2pi4.jpg","https://i.etsystatic.com/25846489/r/il/ae1a55/6125932149/il_fullxfull.6125932149_qmvr.jpg","https://i.etsystatic.com/25846489/r/il/9e70ae/6125932171/il_fullxfull.6125932171_hxde.jpg","https://i.etsystatic.com/25846489/r/il/283be6/6077868418/il_fullxfull.6077868418_lgya.jpg","https://i.etsystatic.com/25846489/r/il/befbbe/6077868542/il_fullxfull.6077868542_cuf7.jpg","https://i.etsystatic.com/25846489/r/il/cb2e89/6125932191/il_fullxfull.6125932191_jruv.jpg"]},{TITLE:'54x108" Big Size Mens Kashmiri Shawl, Handmade Cashmere Pashmina, Allover Sozni Embroidery, Handcrafted Special Wraps, 915',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Done in Heavy Sozni across its essence called Jamawar Pattern Traditionally.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Fawn

Feel :  soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended

Size : 54 x 108 inch / 137  x 274cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:2350,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"pure_pashmina_shawl,gents_pashmina,XL_Shawl,3_yards,vicuna,sozni_shawls,scarf,pashmina_gift,kashmiri_embroidery,jamawar_pashmina,black_shawl,paper_mache_work,gents_shawl",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:65,images:["https://i.etsystatic.com/25846489/r/il/f5f094/6125930299/il_fullxfull.6125930299_6t80.jpg","https://i.etsystatic.com/25846489/r/il/b301f9/6125930347/il_fullxfull.6125930347_9t6x.jpg","https://i.etsystatic.com/25846489/r/il/63c8dd/6077866534/il_fullxfull.6077866534_jrrj.jpg","https://i.etsystatic.com/25846489/r/il/e2e9ca/6077866546/il_fullxfull.6077866546_sio9.jpg","https://i.etsystatic.com/25846489/r/il/6c6f4e/6125930357/il_fullxfull.6125930357_ev9x.jpg","https://i.etsystatic.com/25846489/r/il/e495ae/6077866586/il_fullxfull.6077866586_knx6.jpg","https://i.etsystatic.com/25846489/r/il/fb109d/6077866612/il_fullxfull.6077866612_bfkd.jpg","https://i.etsystatic.com/25846489/r/il/07f38f/6077866624/il_fullxfull.6077866624_kp5e.jpg","https://i.etsystatic.com/25846489/r/il/52e90f/6125930425/il_fullxfull.6125930425_sg07.jpg"]},{TITLE:'40x80" Wonderful Beige Papermachie Sozni Border Pure Pashmina Shawl / Wrap / Throw, 861',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan of Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has  Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : Fawn / Beige

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care :  - Dry Clean Only.

Size : 100× 200 cm / 40× 80 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:535,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gifting_item,scarf_embroidery,Persian_shawl,pure_pashmina,mountain_shawl,summer_wrap,handmade,women_shawl,cover_for_winters,scarves,women_fashion,paper_machie,floral_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:15300,images:["https://i.etsystatic.com/25846489/r/il/dfc792/6125929037/il_fullxfull.6125929037_p4hd.jpg","https://i.etsystatic.com/25846489/r/il/e5288f/6077865232/il_fullxfull.6077865232_lnv0.jpg","https://i.etsystatic.com/25846489/r/il/f33e75/6125929093/il_fullxfull.6125929093_6xwk.jpg","https://i.etsystatic.com/25846489/r/il/889f25/6125929061/il_fullxfull.6125929061_kwwi.jpg","https://i.etsystatic.com/25846489/r/il/5cf79a/6077865200/il_fullxfull.6077865200_4ksg.jpg","https://i.etsystatic.com/25846489/r/il/85ea38/6077865224/il_fullxfull.6077865224_mvsv.jpg","https://i.etsystatic.com/25846489/r/il/e3c262/6077865236/il_fullxfull.6077865236_c5r6.jpg"]},{TITLE:'40x80" Green Sozni Hand Embroidered Pashmina Shawl, sm76',DESCRIPTION:`100% Pure Pashmina Shawl(No Mixing) with Sozni Hand Embroidery

  Pashmina The finest wool in the world .

Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. It feels like butter and is a luxury to have a piece of it.

About This Shawl :  
100% Pure Pashmina/Cashmere Wrap with  Hand  Embroidery(Sozni)  from Kashmir.
Sozni hand embroidered with Stunning Colormatching.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Color :  Green

Weave : Tight

Feel :   Incredibly soft, lightweight and warm.

Care : - Gentle Hand Wash Recommended

Size : 40 x 80  inch     or  100 x 200 cm Approx

Work : Sozni/ Hand Embroidery of Kashmir 

NOTE: The actual color of the product may slightly differ due to photographic effects for Knowing the exact color we advice you to message us.
  
MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:750,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"natural_pashmina,heritage_shawl,collectible_pashmina,cashmere,embroidery_scarves,large_size_pashmina,delicate_embroidery,soft_shawl,for_her,gift_for_mom,mothers_day_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25200,images:["https://i.etsystatic.com/25846489/r/il/fc8fee/6077861924/il_fullxfull.6077861924_5iol.jpg","https://i.etsystatic.com/25846489/r/il/c6bf38/6077860182/il_fullxfull.6077860182_f35q.jpg","https://i.etsystatic.com/25846489/r/il/f7eb1c/6077860146/il_fullxfull.6077860146_bvsu.jpg","https://i.etsystatic.com/25846489/r/il/66bcb4/6125924199/il_fullxfull.6125924199_p264.jpg","https://i.etsystatic.com/25846489/r/il/0a4899/6077860156/il_fullxfull.6077860156_ltfr.jpg","https://i.etsystatic.com/25846489/r/il/c7dd64/6077860124/il_fullxfull.6077860124_yo3e.jpg","https://i.etsystatic.com/25846489/r/il/5f1f25/6077860198/il_fullxfull.6077860198_qtw7.jpg"]},{TITLE:'40x80"  Blue Palldaar Splendor, Hand Embroidered Sozni Pashmina Shawl, sm77',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Sozni embroidery is a traditional craft of Kashmir, India, known for its intricate and delicate needlework. Sozni Pashmina shawls are highly prized for their fine quality and exquisite designs. These shawls are made from Pashmina wool, which is obtained from the undercoat of the Pashmina goat, renowned for its softness and warmth.

Each Sozni Pashmina shawl is a labor of love, taking weeks or even months to complete depending on the complexity of the design. The result is a luxurious accessory prized for its beauty, craftsmanship, and warmth, making it a coveted item for both personal use and gifting.


We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Blue

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200  cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:785,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"cashmere_wool_scarf,pure_pashmina,cashmere_wrap,pashmina_wedding,natural_pashmina,gift_for_her,royal_pashmina,premium_gifts,collectible_gifts,museum_worthy,ladies_shawl,do_rukha_shawl,pink_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25200,images:["https://i.etsystatic.com/25846489/r/il/c412df/6125923081/il_fullxfull.6125923081_2lhs.jpg","https://i.etsystatic.com/25846489/r/il/62b664/6125921731/il_fullxfull.6125921731_7apa.jpg","https://i.etsystatic.com/25846489/r/il/e4145b/6125921809/il_fullxfull.6125921809_t66t.jpg","https://i.etsystatic.com/25846489/r/il/20fea3/6125921807/il_fullxfull.6125921807_qqu9.jpg","https://i.etsystatic.com/25846489/r/il/89d79a/6077857740/il_fullxfull.6077857740_jruh.jpg","https://i.etsystatic.com/25846489/r/il/6c2f72/6077857748/il_fullxfull.6077857748_ho2e.jpg","https://i.etsystatic.com/25846489/r/il/cf42ee/6077857764/il_fullxfull.6077857764_c1zi.jpg","https://i.etsystatic.com/25846489/r/il/5cdaba/6077857724/il_fullxfull.6077857724_82po.jpg","https://i.etsystatic.com/25846489/r/il/a6bb84/6125921787/il_fullxfull.6125921787_4eck.jpg"]},{TITLE:"40x80 Stunning Yellow Pure Pashmina Shawl with Sozni border embroidery with Hand Tilla Touch, bridesmaid wrap, 917",DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color :Yellow

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden 

Care :- Dry Clean Only.
Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:890,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25,images:["https://i.etsystatic.com/25846489/r/il/890df6/6070357606/il_fullxfull.6070357606_98j4.jpg","https://i.etsystatic.com/25846489/r/il/6a3375/6118417675/il_fullxfull.6118417675_a1np.jpg","https://i.etsystatic.com/25846489/r/il/59e510/6118417725/il_fullxfull.6118417725_ffeo.jpg","https://i.etsystatic.com/25846489/r/il/a07ce2/6070356598/il_fullxfull.6070356598_joio.jpg","https://i.etsystatic.com/25846489/r/il/48b31b/6070356430/il_fullxfull.6070356430_2u57.jpg","https://i.etsystatic.com/25846489/r/il/71218f/6118417501/il_fullxfull.6118417501_901p.jpg","https://i.etsystatic.com/25846489/r/il/fe6685/6118417539/il_fullxfull.6118417539_fhtc.jpg"]},{TITLE:'40x80" Craft Reserve Pashmina Border Shawl, 919',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Natural Grey 

Feel :  soft, lightweight and warm.

Color Of Tilla : Light Golden

Care : - Gentle hand wash Recommended 

Size : 40x80 inch / 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:799,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts,christmas_shop",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/ed8c8b/6118408381/il_fullxfull.6118408381_mopr.jpg","https://i.etsystatic.com/25846489/r/il/f8339f/6070347176/il_fullxfull.6070347176_14z9.jpg","https://i.etsystatic.com/25846489/r/il/3b6c2d/6070346894/il_fullxfull.6070346894_nw4p.jpg","https://i.etsystatic.com/25846489/r/il/e01be0/6118408513/il_fullxfull.6118408513_m6jq.jpg","https://i.etsystatic.com/25846489/r/il/7278cf/6070347180/il_fullxfull.6070347180_d8yo.jpg","https://i.etsystatic.com/25846489/r/il/56ea92/6070346842/il_fullxfull.6070346842_1pxi.jpg","https://i.etsystatic.com/25846489/r/il/43a9ae/6118408423/il_fullxfull.6118408423_sntr.jpg","https://i.etsystatic.com/25846489/r/il/df1bfb/6118408509/il_fullxfull.6118408509_5bkb.jpg"]},{TITLE:'43x86"  Colorful Embroidery Border work Kashmir Pashmina Shawl, Soft and warm, Women wrap, Gift for her, 695',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan OF Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has Sozni Hand Embroidery on borders.

The  Shawl is Handwoven On Handloom

Base Color : Ferozi / Torquise Blue

Weave : Tight

Feel :    soft, lightweight and warm.
 
Care : - Gentle Hand Wash Recommended 

Size : 109 × 218 cm / 43 × 86 inch 

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:601,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"shawl_of_kashmir,handmade_shawls,gift_for_friends,winter_cashmere,winter_scarfs,delicate_embroidery,handloom,festive,cashmere_throw,handwoven,sozni_work,made_in_kashmir,pashmina_border",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14e3,images:["https://i.etsystatic.com/25846489/r/il/7bb96c/4175430724/il_fullxfull.4175430724_b9x8.jpg","https://i.etsystatic.com/25846489/r/il/3310b6/4175428062/il_fullxfull.4175428062_jzij.jpg","https://i.etsystatic.com/25846489/r/il/c4ca1a/4175427918/il_fullxfull.4175427918_gpjj.jpg","https://i.etsystatic.com/25846489/r/il/49df36/4223081897/il_fullxfull.4223081897_nwrv.jpg","https://i.etsystatic.com/25846489/r/il/a8e91b/4223079789/il_fullxfull.4223079789_bn4d.jpg","https://i.etsystatic.com/25846489/r/il/7cb41e/4223079695/il_fullxfull.4223079695_rh0b.jpg","https://i.etsystatic.com/25846489/r/il/7eeba5/4175427994/il_fullxfull.4175427994_rhd1.jpg","https://i.etsystatic.com/25846489/r/il/05b134/4175427912/il_fullxfull.4175427912_55qu.jpg"]},{TITLE:'40x80" White Authentic Cashmere Pashmina Shawl, Sozni Embroidery with Artistic Colormatching, Border wraps, L67',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:465,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,border_shawl,white_pashmina,resham_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13e3,images:["https://i.etsystatic.com/25846489/r/il/1f250d/5747806099/il_fullxfull.5747806099_f9cm.jpg","https://i.etsystatic.com/25846489/r/il/5b3f2e/5747804579/il_fullxfull.5747804579_9lm7.jpg","https://i.etsystatic.com/25846489/r/il/6cd4d3/5747804685/il_fullxfull.5747804685_q42q.jpg","https://i.etsystatic.com/25846489/r/il/89ba9b/5747804653/il_fullxfull.5747804653_4125.jpg","https://i.etsystatic.com/25846489/r/il/9e8b03/5699751640/il_fullxfull.5699751640_r47s.jpg","https://i.etsystatic.com/25846489/r/il/4db686/5699751376/il_fullxfull.5699751376_5w8j.jpg","https://i.etsystatic.com/25846489/r/il/19770d/5747804519/il_fullxfull.5747804519_asye.jpg","https://i.etsystatic.com/25846489/r/il/8e380c/5747804581/il_fullxfull.5747804581_9gzi.jpg","https://i.etsystatic.com/25846489/r/il/3d474d/5747804477/il_fullxfull.5747804477_ge27.jpg"]},{TITLE:"Luxury Gold Hand Tilla Zari Embroidery Pure Crepe Kashmir Saree, m301",DESCRIPTION:`Pure Crepe  Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe  Saree with Tilla Zari hand embroidery.

It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Zari Needle Work and  Embroidered Blouse.

Base Color : Beige

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) 

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:731,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_work_sarees,kashmiri_embroidery,indian_saree_blouse,embroidered_saree,gold_tilla_work,party_wear_dress,sarees,ethnic_sari,indian_sarees,pashmina_saree,zari_work,premium_quality,eid",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:18500,images:["https://i.etsystatic.com/25846489/r/il/cd441c/6017277640/il_fullxfull.6017277640_ne9l.jpg","https://i.etsystatic.com/25846489/r/il/f2ffa8/6017277496/il_fullxfull.6017277496_sks2.jpg","https://i.etsystatic.com/25846489/r/il/d20cc6/6017277486/il_fullxfull.6017277486_brcz.jpg","https://i.etsystatic.com/25846489/r/il/c457b0/6065343997/il_fullxfull.6065343997_1cge.jpg","https://i.etsystatic.com/25846489/r/il/60d9fe/6017277512/il_fullxfull.6017277512_r7tx.jpg","https://i.etsystatic.com/25846489/r/il/5b2083/6017277436/il_fullxfull.6017277436_4r0g.jpg","https://i.etsystatic.com/25846489/r/il/c7405c/6017277468/il_fullxfull.6017277468_ek1t.jpg","https://i.etsystatic.com/25846489/r/il/700c5c/6017277570/il_fullxfull.6017277570_8tz2.jpg","https://i.etsystatic.com/25846489/r/il/8c84cd/6065341785/il_fullxfull.6065341785_kfac.jpg","https://i.etsystatic.com/25846489/r/il/724345/6065341569/il_fullxfull.6065341569_4bmc.jpg"]},{TITLE:"Beige Pure Crepe Saree with Luxury Kashmiri Hand Tilla Patched border and corners, M335",DESCRIPTION:`Pure Crepe  Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

Indulge in timeless elegance with our Pure Crepe Saree, meticulously crafted with the finest Kashmiri Hand Tilla work. The intricate patched border and corners boast exquisite detailing, adding a touch of luxury to this traditional ensemble. Elevate your style with the allure of handcrafted artistry, celebrating the rich heritage of Indian craftsmanship.


It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Zari Needle Work and  Embroidered Blouse.

Base Color : Beige/Fawn

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) 

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:820,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_work_sarees,kashmiri_embroidery,indian_saree_blouse,embroidered_saree,gold_tilla_work,party_wear_dress,sarees,ethnic_sari,indian_sarees,pashmina_saree,zari_work,premium_quality,indian_wedding_saris",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:20500,images:["https://i.etsystatic.com/25846489/r/il/334246/6017267740/il_fullxfull.6017267740_p2jv.jpg","https://i.etsystatic.com/25846489/r/il/510928/6017267652/il_fullxfull.6017267652_c5sc.jpg","https://i.etsystatic.com/25846489/r/il/c26e6a/6017267692/il_fullxfull.6017267692_58wn.jpg","https://i.etsystatic.com/25846489/r/il/ceb47c/6017267716/il_fullxfull.6017267716_9krz.jpg","https://i.etsystatic.com/25846489/r/il/ec0c33/6017267532/il_fullxfull.6017267532_42aw.jpg","https://i.etsystatic.com/25846489/r/il/ff4e34/6017267428/il_fullxfull.6017267428_fzyz.jpg","https://i.etsystatic.com/25846489/r/il/a6a001/6065331949/il_fullxfull.6065331949_o06c.jpg","https://i.etsystatic.com/25846489/r/il/93fccf/6065331951/il_fullxfull.6065331951_8cap.jpg","https://i.etsystatic.com/25846489/r/il/910e26/6065331963/il_fullxfull.6065331963_r027.jpg","https://i.etsystatic.com/25846489/r/il/8c0323/6017267408/il_fullxfull.6017267408_ksiu.jpg"]},{TITLE:"Pure Crepe Kashmiri Hand Tilla Work Saree in Black Color, M299",DESCRIPTION:`Pure Crepe Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe Saree with  Tilla Zari hand embroidered.
It comes with a attached Unstitched Blouse Piece. 
The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Tilla Zari Needle Work and  Embroidered Blouse.

Base Color : Black

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Light Gold

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:575,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"kashmir_dress,saree_for_women,gold_zari_saree,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari,Kashmiri_tilla_saree,silver_tilla,Lovely",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14500,images:["https://i.etsystatic.com/25846489/r/il/bedf9a/6065317637/il_fullxfull.6065317637_40t7.jpg","https://i.etsystatic.com/25846489/r/il/becf95/6017252944/il_fullxfull.6017252944_s0kn.jpg","https://i.etsystatic.com/25846489/r/il/2f0a98/6065317453/il_fullxfull.6065317453_hqgk.jpg","https://i.etsystatic.com/25846489/r/il/dd349e/6065317629/il_fullxfull.6065317629_po56.jpg","https://i.etsystatic.com/25846489/r/il/adaa1a/6017253110/il_fullxfull.6017253110_46cl.jpg","https://i.etsystatic.com/25846489/r/il/4a1708/6065317377/il_fullxfull.6065317377_lmfj.jpg","https://i.etsystatic.com/25846489/r/il/783d8e/6065317421/il_fullxfull.6065317421_jsf2.jpg","https://i.etsystatic.com/25846489/r/il/29a8a5/6065317491/il_fullxfull.6065317491_96x7.jpg","https://i.etsystatic.com/25846489/r/il/bb3bdb/6065318111/il_fullxfull.6065318111_mg34.jpg","https://i.etsystatic.com/25846489/r/il/de9068/6017252854/il_fullxfull.6017252854_n8de.jpg"]},{TITLE:"Rusty Maroon Pure Georgette Saree with Kashmiri Hand Tilla Border and Allover Sozni Bootis, n367",DESCRIPTION:`Stunning Hand Embroidered Kashmiri Saree

This pure georgette saree is a masterpiece of craftsmanship, featuring a Kashmiri hand Tilla border that adds a touch of sophistication. Adorned with allover Sozni bootis, it exudes timeless elegance and traditional charm. This saree seamlessly blends heritage and contemporary style, making it a perfect choice for any special occasion.

The ethnic Saree is crafted in the finesse of Silk, which gives it a glamorous look.

We Guarantee 100% Authentic Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Rusty Maroon

Finish: Unstitched 
 
Fabric : Pure Georgette Saree 
              Pure Georgette Blouse

Tilla Color: Gold 

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Sozni And Tilla Hand Embroidery (Needle Work) of Kashmir

Note:
 
Kindly let us know if you want us to do Pico and Fall on Saree.

We make sure that the color in the photos of listings is very close to the actual color of the products, there may be a little variation in color due to factors out of our control like your display type & calibration etc.
For knowing the exact color, we advise you to message us.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:900,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"wedding_saris,occasional_dresses,kashmiri_embroidery,embroidered_sarees,indian_ethnic_dress,girl_saree,made_in_kashmir',kashmir_sarees,crepe_sari,silk_dress,hand_made,sozni_sarees,Diwali_gift",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:"",images:["https://i.etsystatic.com/25846489/r/il/66bf93/6008619368/il_fullxfull.6008619368_rbbw.jpg","https://i.etsystatic.com/25846489/r/il/8c478e/6056692959/il_fullxfull.6056692959_dzm2.jpg","https://i.etsystatic.com/25846489/r/il/87e568/6008615856/il_fullxfull.6008615856_ltap.jpg","https://i.etsystatic.com/25846489/r/il/6ef743/6008615880/il_fullxfull.6008615880_9e19.jpg","https://i.etsystatic.com/25846489/r/il/76d83d/6008615920/il_fullxfull.6008615920_3tnv.jpg","https://i.etsystatic.com/25846489/r/il/c7d7c3/6056693281/il_fullxfull.6056693281_tqf7.jpg","https://i.etsystatic.com/25846489/r/il/3aa1f5/6056693367/il_fullxfull.6056693367_lhxy.jpg","https://i.etsystatic.com/25846489/r/il/cd87ad/6008616184/il_fullxfull.6008616184_duht.jpg","https://i.etsystatic.com/25846489/r/il/268c6e/6008616262/il_fullxfull.6008616262_ds6i.jpg","https://i.etsystatic.com/25846489/r/il/c6c55a/6008616284/il_fullxfull.6008616284_jbeg.jpg"]},{TITLE:"Mustard  Pure Crepe Saree Embellished with Opulent Light Gold Tilla Zari Kashmiri Hand Embroidery on Borders and Corners, M349",DESCRIPTION:`Pure Crepe  Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

This exquisite pure crepe saree exudes opulence with its intricate Kashmiri hand embroidery in luxurious light gold Tilla Zari adorning the borders and corners. The craftsmanship adds a touch of regal elegance to the saree, making it a timeless piece for special occasions.


It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Zari Needle Work and  Embroidered Blouse.

Base Color : Mustard Yellow

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Light Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) 

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:640,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_work_sarees,kashmiri_embroidery,indian_saree_blouse,embroidered_saree,gold_tilla_work,party_wear_dress,sarees,ethnic_sari,indian_sarees,pashmina_saree,zari_work,premium_quality,indian_wedding_saris",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16200,images:["https://i.etsystatic.com/25846489/r/il/a16b60/6008577178/il_fullxfull.6008577178_220z.jpg","https://i.etsystatic.com/25846489/r/il/10eaa3/6008575086/il_fullxfull.6008575086_j1de.jpg","https://i.etsystatic.com/25846489/r/il/adcdc6/6056652913/il_fullxfull.6056652913_g575.jpg","https://i.etsystatic.com/25846489/r/il/945e71/6056653035/il_fullxfull.6056653035_pdl8.jpg","https://i.etsystatic.com/25846489/r/il/709263/6056652905/il_fullxfull.6056652905_4iax.jpg","https://i.etsystatic.com/25846489/r/il/f24ad8/6008575126/il_fullxfull.6008575126_nkhs.jpg","https://i.etsystatic.com/25846489/r/il/b88026/6056652983/il_fullxfull.6056652983_cuzq.jpg","https://i.etsystatic.com/25846489/r/il/8db90f/6056653049/il_fullxfull.6056653049_lmoc.jpg","https://i.etsystatic.com/25846489/r/il/d79c41/6008575074/il_fullxfull.6008575074_rej2.jpg"]},{TITLE:"Navy Blue Pure Crepe Saree with Tilla Zari Kashmiri Hand Embroidery on Border and Allover Botis, M343",DESCRIPTION:`Pure Crepe  Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

About this Saree :  A True masterpiece , This Extremely Rare Hand Embroidered Saree Could Be found only at MeherPremium. A piece of Art, Designed and manufactured by best Craftsmen of Kashmir. luxurious Pure Crepe  Saree with Tilla Zari hand embroidery.

It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.
Marvelous Hand Embroidered Pure Crepe Saree With Kashmir Zari Needle Work and  Embroidered Blouse.

Base Color : Navy Blue

Finish: Unstitched Blouse
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) 

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:660,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"tilla_work_sarees,kashmiri_embroidery,indian_saree_blouse,embroidered_saree,gold_tilla_work,party_wear_dress,sarees,ethnic_sari,indian_sarees,pashmina_saree,zari_work,premium_quality,Tilla_Dozi",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:16700,images:["https://i.etsystatic.com/25846489/r/il/fade08/6054420725/il_fullxfull.6054420725_rpfj.jpg","https://i.etsystatic.com/25846489/r/il/0cb81d/6006341482/il_fullxfull.6006341482_upsw.jpg","https://i.etsystatic.com/25846489/r/il/a7d40b/6006341684/il_fullxfull.6006341684_tj8w.jpg","https://i.etsystatic.com/25846489/r/il/078d4a/6006341638/il_fullxfull.6006341638_jbuz.jpg","https://i.etsystatic.com/25846489/r/il/130b23/6054417399/il_fullxfull.6054417399_71j7.jpg","https://i.etsystatic.com/25846489/r/il/06f4e9/6054417545/il_fullxfull.6054417545_4grs.jpg","https://i.etsystatic.com/25846489/r/il/28e494/6054417671/il_fullxfull.6054417671_i9n2.jpg","https://i.etsystatic.com/25846489/r/il/e72518/6054417649/il_fullxfull.6054417649_73du.jpg","https://i.etsystatic.com/25846489/r/il/0f793a/6006341724/il_fullxfull.6006341724_j96k.jpg","https://i.etsystatic.com/25846489/r/il/62db55/6054417291/il_fullxfull.6054417291_ou94.jpg"]},{TITLE:"Pure Georgette Saree with Kashmiri Hand Tilla Zari Embroidery, SA113",DESCRIPTION:`Pure Georgette Zari Tilla Hand Embroidered Saree 


            "With Hand Embroidered Blouse"
 

Marvelous Embroidered Kashmiri Saree, which you can wear at any party or a wedding which will Easily Attract Everyone's Attention.

Draped in elegance, this Pure Georgette Saree embodies the finest craftsmanship of Kashmiri artisans. Adorned with exquisite hand Tilla Zari embroidery, each intricate detail reflects the rich cultural heritage of Kashmir. The shimmering golden threads delicately embellish the fabric, creating a captivating tapestry of beauty and grace. Perfect for special occasions, this saree is a timeless masterpiece that exudes sophistication and charm.

It comes with a attached Unstitched Blouse Piece. 

The ethnic Saree is crafted in the finesse of pure silk, which gives it a glamorous look.

Base Color : Fawn

Finish: Unstitched 
 
Fabric :  Pure Crepe Saree And Pure Crepe Blouse

Tilla Color: Light Golden

Care :     - Dry Clean Only.

Size : 6.5 meter (with Blouse)

Work : Tilla Zari  Hand Embroidery (Needle Work) of Kashmir

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1100,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Pure_Georgette_Saree,kashmir_dress,tilla_work_saree,saree_for_women,gold_zari_saree,saree_with_blouse,south_indian_dress,expensive_gift,pure_silk_sarees,kashmiri_embroidery,girl_sari,silk_sari,tilla_sarees",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:28e3,images:["https://i.etsystatic.com/25846489/r/il/bb9a8f/6054400913/il_fullxfull.6054400913_3a05.jpg","https://i.etsystatic.com/25846489/r/il/014ff0/6006321590/il_fullxfull.6006321590_caj2.jpg","https://i.etsystatic.com/25846489/r/il/2561ed/6054397859/il_fullxfull.6054397859_621z.jpg","https://i.etsystatic.com/25846489/r/il/632aeb/6006321798/il_fullxfull.6006321798_k0p8.jpg","https://i.etsystatic.com/25846489/r/il/9a2420/6006321506/il_fullxfull.6006321506_da0f.jpg","https://i.etsystatic.com/25846489/r/il/3d8086/6054397935/il_fullxfull.6054397935_nnj9.jpg","https://i.etsystatic.com/25846489/r/il/f9ffc8/6054397949/il_fullxfull.6054397949_higw.jpg","https://i.etsystatic.com/25846489/r/il/389a5d/6054397895/il_fullxfull.6054397895_p6r4.jpg"]},{TITLE:'40x80" Allover Botis Brilliance: Pure Pashmina Hand-Woven Shawl Enriched with Sozni Hand Embroidery, L96',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Immerse yourself in the timeless allure of this pure pashmina hand-woven shawl, meticulously crafted with exquisite Sozni hand embroidery. Each intricate boti design adorns the fabric, creating a mesmerizing tapestry of elegance and tradition. Luxuriously soft and delicately embroidered, this shawl is a masterpiece of artisanal skill, perfect for adding a touch of sophistication to any ensemble.


This Shawl is Handwoven

Base Color : Mustard Yellow

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,eid_shopping,eid_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13300,images:["https://i.etsystatic.com/25846489/r/il/6efcc5/6054380525/il_fullxfull.6054380525_833e.jpg","https://i.etsystatic.com/25846489/r/il/8c13f5/6006302886/il_fullxfull.6006302886_5w35.jpg","https://i.etsystatic.com/25846489/r/il/2391b2/6006303352/il_fullxfull.6006303352_h25p.jpg","https://i.etsystatic.com/25846489/r/il/ba52f4/6054379417/il_fullxfull.6054379417_6id1.jpg","https://i.etsystatic.com/25846489/r/il/cfe04b/6054379403/il_fullxfull.6054379403_plf3.jpg","https://i.etsystatic.com/25846489/r/il/e02f15/6054378975/il_fullxfull.6054378975_ggx8.jpg","https://i.etsystatic.com/25846489/r/il/dd7fdb/6006302898/il_fullxfull.6006302898_ompl.jpg","https://i.etsystatic.com/25846489/r/il/2ac8d4/6054378997/il_fullxfull.6054378997_9ipi.jpg","https://i.etsystatic.com/25846489/r/il/1a3210/6054379351/il_fullxfull.6054379351_hga3.jpg","https://i.etsystatic.com/25846489/r/il/1cf0ec/6054378983/il_fullxfull.6054378983_4s7s.jpg"]},{TITLE:'40x80" Allover Botis Brilliance: Pure Pashmina Hand-Woven Shawl Enriched with Sozni Hand Embroidery, L97',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Immerse yourself in the timeless allure of this pure pashmina hand-woven shawl, meticulously crafted with exquisite Sozni hand embroidery. Each intricate boti design adorns the fabric, creating a mesmerizing tapestry of elegance and tradition. Luxuriously soft and delicately embroidered, this shawl is a masterpiece of artisanal skill, perfect for adding a touch of sophistication to any ensemble.


This Shawl is Handwoven

Base Color : White

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,eid_shopping,eid_special",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:13300,images:["https://i.etsystatic.com/25846489/r/il/efff63/6054375221/il_fullxfull.6054375221_2pu8.jpg","https://i.etsystatic.com/25846489/r/il/5d2deb/6054370747/il_fullxfull.6054370747_cztd.jpg","https://i.etsystatic.com/25846489/r/il/c70abd/6006294812/il_fullxfull.6006294812_lvvl.jpg","https://i.etsystatic.com/25846489/r/il/6f0e15/6054370799/il_fullxfull.6054370799_og2p.jpg","https://i.etsystatic.com/25846489/r/il/f33a9c/6054370787/il_fullxfull.6054370787_7ox7.jpg","https://i.etsystatic.com/25846489/r/il/82ed7a/6006294970/il_fullxfull.6006294970_4q4g.jpg","https://i.etsystatic.com/25846489/r/il/6fa199/6054370693/il_fullxfull.6054370693_m9ao.jpg","https://i.etsystatic.com/25846489/r/il/44e88d/6006294822/il_fullxfull.6006294822_6kjt.jpg","https://i.etsystatic.com/25846489/r/il/3921b8/6054370683/il_fullxfull.6054370683_h3dq.jpg"]},{TITLE:'40x80" authentic Pashmina Shawl with Sozni Border with Tilla touch along with Designer Long flower on oneside, Handwoven, 899',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI and TILLA  Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven on Wooden handloom

Base Color : Dark Beige

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care : - Gentle hand wash Recommended 

Size : 40 x 80 inch / 100  x 200 cm Approx

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1050,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"zari_shawl,tilla,kalamkari_shawl,vuitton_top,kalamkari_pashmina,real_pashmina,ladakh_shawl,cashmere_throws,gift_for_her,winter_cover,tilla_work_pashmina,pashmina_online,diwali_gifts",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:29500,images:["https://i.etsystatic.com/25846489/r/il/655e9b/6006285432/il_fullxfull.6006285432_k32q.jpg","https://i.etsystatic.com/25846489/r/il/4b4bc3/6054358531/il_fullxfull.6054358531_32kz.jpg","https://i.etsystatic.com/25846489/r/il/56ef6b/6054357143/il_fullxfull.6054357143_pk89.jpg","https://i.etsystatic.com/25846489/r/il/169ff5/6054357073/il_fullxfull.6054357073_l8c8.jpg","https://i.etsystatic.com/25846489/r/il/9cdd48/6054357129/il_fullxfull.6054357129_7wxv.jpg","https://i.etsystatic.com/25846489/r/il/b8a6dc/6054357087/il_fullxfull.6054357087_an04.jpg","https://i.etsystatic.com/25846489/r/il/cdb6fc/6054357351/il_fullxfull.6054357351_j9k7.jpg","https://i.etsystatic.com/25846489/r/il/9b573e/6006281578/il_fullxfull.6006281578_8d4r.jpg","https://i.etsystatic.com/25846489/r/il/87b11d/6054357167/il_fullxfull.6054357167_m1hv.jpg","https://i.etsystatic.com/25846489/r/il/388bcd/6054357165/il_fullxfull.6054357165_7x0c.jpg"]},{TITLE:'40x80" Authentic Cashmere Pashmina Shawl, Sozni Embroidery with Artistic Colormatching, Border wraps, L98',DESCRIPTION:`100% Pure Pashmina shawl(No Mixing) with hand embroidery (SOZNI  Work)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Masterpiece Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni  on it. The exquisite and entangled threads of Sozniare spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni  embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Feel :  soft, lightweight and warm.
 
Care : -  Dry Clean Only

Size : 40 x 80 inch or 100 x 200 cm

Work : Sozni Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:500,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"christmas_week_sale,pashmina,handmade_gifts,anniversary_gift,wedding_wrap,tonal_shawl,shawls,throw_uk,scarves_us,personalised_scarf,border_shawl,white_pashmina,resham_work",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:14e3,images:["https://i.etsystatic.com/25846489/r/il/75b5cb/6054346615/il_fullxfull.6054346615_m4in.jpg","https://i.etsystatic.com/25846489/r/il/962a8d/6054345155/il_fullxfull.6054345155_k644.jpg","https://i.etsystatic.com/25846489/r/il/9b1afc/6054345129/il_fullxfull.6054345129_h4rr.jpg","https://i.etsystatic.com/25846489/r/il/eabace/6006269020/il_fullxfull.6006269020_9u0b.jpg","https://i.etsystatic.com/25846489/r/il/c0970d/6006269024/il_fullxfull.6006269024_lk9l.jpg","https://i.etsystatic.com/25846489/r/il/833d3a/6006268978/il_fullxfull.6006268978_m3l9.jpg","https://i.etsystatic.com/25846489/r/il/a84dec/6006269212/il_fullxfull.6006269212_9rbx.jpg","https://i.etsystatic.com/25846489/r/il/9f9513/6054345349/il_fullxfull.6054345349_n40y.jpg"]},{TITLE:"40x80 Stunning White Pure Pashmina Shawl with Sozni border embroidery with Hand Tilla Touch, bridesmaid wrap, 912",DESCRIPTION:`Pashmina shawl with hand embroidery (SOZNI and TILLA ZARI Work)

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Bridal Shawl With Ultimate Color Matching and Design is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Sozni With Tilla Zari on it. The exquisite and entangled threads of Sozni and Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with Sozni and Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

This Shawl is Handwoven

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : White

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Golden

Care :- Dry Clean Only.

Size : 40 x 80 Inch or 100 x 200 cm

Work : Sozni and Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:888,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"schal,wedding_pashmina,birthday_gift,anniversary_gift,happy_lohri,big_sale,tilla_shawl,bridal_shawl,pashmina_gifting,special_scarves,handmade_cashmere,lovely_shawls,kashmir_pashmina",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:25e3,images:["https://i.etsystatic.com/25846489/r/il/b3f687/6054341411/il_fullxfull.6054341411_qbki.jpg","https://i.etsystatic.com/25846489/r/il/f41ff1/6054338901/il_fullxfull.6054338901_o0zv.jpg","https://i.etsystatic.com/25846489/r/il/e6caf6/6006262458/il_fullxfull.6006262458_m7ex.jpg","https://i.etsystatic.com/25846489/r/il/c8d93e/6006262598/il_fullxfull.6006262598_afd2.jpg","https://i.etsystatic.com/25846489/r/il/cc682c/6054338969/il_fullxfull.6054338969_5g47.jpg","https://i.etsystatic.com/25846489/r/il/5a7c86/6054338905/il_fullxfull.6054338905_1jg0.jpg","https://i.etsystatic.com/25846489/r/il/526ede/6054338935/il_fullxfull.6054338935_stgk.jpg","https://i.etsystatic.com/25846489/r/il/d1c1f1/6054338995/il_fullxfull.6054338995_qvwc.jpg"]},{TITLE:'40x80" Navy Blue Pashmina Shawl With Finest Luxury Kashmiri Gold Hand Tilla Zari Embroidery, Handmade Cashmere Wrap, Wedding Special, 910',DESCRIPTION:`Authentic and Handwoven Pure Pashmina shawl With TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards Tibet, Nepal and Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl : This Elegant Pashmina Shawl Embroidered By Highly skilled Tilla Artisans of Kashmir, Completely Made by Hand. 

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

Base Color : Navy Blue

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla :  Light Golden

Care : -  Gentle Hand Wash Recommended .

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla Zari Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:800,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"meher_premium,kashmir_Pashmina,cashmere_wraps,Gifts_for_her,Tilla_Zari_pashmina,hand_embroidery,antique_shawl,pure_pashmina,heirloom_wrap,wedding_shawls,zari_embroidery,kashmiri_embroidery,bridesmaid_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:22500,images:["https://i.etsystatic.com/25846489/r/il/da86f5/6054329125/il_fullxfull.6054329125_rzf1.jpg","https://i.etsystatic.com/25846489/r/il/c77bf4/6006249710/il_fullxfull.6006249710_o28w.jpg","https://i.etsystatic.com/25846489/r/il/df021d/6006249752/il_fullxfull.6006249752_qwk1.jpg","https://i.etsystatic.com/25846489/r/il/1d18cb/6006249718/il_fullxfull.6006249718_r66t.jpg","https://i.etsystatic.com/25846489/r/il/cbce50/6006249840/il_fullxfull.6006249840_3tuc.jpg","https://i.etsystatic.com/25846489/r/il/442d9f/6006249744/il_fullxfull.6006249744_8wad.jpg","https://i.etsystatic.com/25846489/r/il/31de13/6006249946/il_fullxfull.6006249946_lnnu.jpg","https://i.etsystatic.com/25846489/r/il/c3621a/6006250008/il_fullxfull.6006250008_ilvj.jpg","https://i.etsystatic.com/25846489/r/il/0f1845/6054326085/il_fullxfull.6054326085_qsuz.jpg","https://i.etsystatic.com/25846489/r/il/02ff8b/6054326099/il_fullxfull.6054326099_n5kh.jpg"]},{TITLE:'40x80" Wonderful White Papermachie Sozni Border Pure Pashmina Shawl / Wrap / Throw, L95',DESCRIPTION:`Authentic Handwoven And Hand Embroidered Pure Pashmina Shawl(No Mixing)

  Pashmina The finest wool in the world 

 Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: This Beautiful Handwoven Pure Pashmina Shawl By MeherPremium Is One Of Its Kind. Manufactured By One of The Best Artisan of Kashmir With More Than 40 Years Of Immense Experience , The Unique Pashmina Shawl Has  Sozni Hand Embroidery.

The  Shawl is Handwoven On Handloom

Base Color : White

Weave : Tight

Feel :    soft, lightweight and warm.
 
Delicate  Sozni Hand Embroidery of Kashmir. Embroidery is done using Cotton thread.

Care :  - Dry Clean Only.

Size : 100× 200 cm / 40× 80 inch

Work : Sozni/ Hand Embroidery of Kashmir

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:535,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"gifting_item,scarf_embroidery,Persian_shawl,pure_pashmina,mountain_shawl,summer_wrap,handmade,women_shawl,cover_for_winters,scarves,women_fashion,paper_machie,floral_cashmere",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:15,images:["https://i.etsystatic.com/25846489/r/il/b97962/6006246718/il_fullxfull.6006246718_noam.jpg","https://i.etsystatic.com/25846489/r/il/c044fe/6006245562/il_fullxfull.6006245562_q2nr.jpg","https://i.etsystatic.com/25846489/r/il/fbbe14/6054319515/il_fullxfull.6054319515_p1l0.jpg","https://i.etsystatic.com/25846489/r/il/ab7b7c/6006243166/il_fullxfull.6006243166_14e6.jpg","https://i.etsystatic.com/25846489/r/il/6bf997/6006242990/il_fullxfull.6006242990_pt7h.jpg","https://i.etsystatic.com/25846489/r/il/5878b0/6006242966/il_fullxfull.6006242966_nfz7.jpg","https://i.etsystatic.com/25846489/r/il/6d4468/6054319497/il_fullxfull.6054319497_loas.jpg","https://i.etsystatic.com/25846489/r/il/e6fbe0/6054319367/il_fullxfull.6054319367_tq5f.jpg","https://i.etsystatic.com/25846489/r/il/53ee26/6006243048/il_fullxfull.6006243048_dm6g.jpg","https://i.etsystatic.com/25846489/r/il/906429/6006243038/il_fullxfull.6006243038_asrt.jpg"]},{TITLE:'45x90" Golden Threads of Kashmir: Pure Pashmina Maroon Shawl Adorned with Light Golden Tilla Zari Hand Embroidery, 911',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl With Metallic TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

Indulge in the timeless elegance of this maroon shawl crafted from pure pashmina, exquisitely adorned with intricate Kashmiri hand embroidery. Each stitch tells a story, woven with delicate golden tilla zari threads, adding a touch of opulence and sophistication. Wrap yourself in luxury and tradition with this masterpiece, perfect for adding a regal flair to any ensemble.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Bright maroon

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Light Golden

Tilla Quality : Guaranteed

Care : -Dry Clean Only.

Size : 45 x 90 inch / 114 x 228cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1400,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Handmade_Wrap,hand_tilla_zari,Tilla_Zari_pashmina,antique_shawl,ladakh_pashmina,meher_premium,pink_pashmina_shawl,cashmere_throw,tilla_jamawar,real_pashmina,kashmiri_embroidery,exquisite_shawls,wedding_scarves",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:38500,images:["https://i.etsystatic.com/25846489/r/il/1fefd4/6054285755/il_fullxfull.6054285755_dvlv.jpg","https://i.etsystatic.com/25846489/r/il/591cd7/6006204462/il_fullxfull.6006204462_aidc.jpg","https://i.etsystatic.com/25846489/r/il/0d9f97/6054280763/il_fullxfull.6054280763_quc9.jpg","https://i.etsystatic.com/25846489/r/il/abb023/6006204916/il_fullxfull.6006204916_g684.jpg","https://i.etsystatic.com/25846489/r/il/e99ef8/6054281219/il_fullxfull.6054281219_5rm7.jpg","https://i.etsystatic.com/25846489/r/il/cb2f73/6006204930/il_fullxfull.6006204930_m375.jpg","https://i.etsystatic.com/25846489/r/il/056108/6054281171/il_fullxfull.6054281171_b478.jpg","https://i.etsystatic.com/25846489/r/il/ec9164/6006204540/il_fullxfull.6006204540_mw0y.jpg","https://i.etsystatic.com/25846489/r/il/72935d/6054280823/il_fullxfull.6054280823_b0xl.jpg","https://i.etsystatic.com/25846489/r/il/49e846/6054280809/il_fullxfull.6054280809_vuax.jpg"]},{TITLE:'40x80" Pure Pashmina Gold Tilla Hand Embroidered shawl, Tilla zari work cashmere wrap, Handmade, 740',DESCRIPTION:`Authentic Handwoven Pure Pashmina shawl With Metallic TILLA ZARI Hand Embroidery From Kashmir.

  Pashmina The finest wool in the world 

 Pashmina is trimmed from the special bread of goat known as changthangi which are indigenous to higher altitudes of Himalayas towards  Ladakh. Pashmina is very soft, Light and exceptionally very warm. Its feels like butter and is a luxury to have a piece of it.

About This Shawl: Craftsmanship at Its Ultimate level , This Brilliant Pashmina Shawl With Tilla Zari Hand Embroidery is one Of its Kind . The beauty of Cashmere is uplifted when adorned with the brilliance of the age old Tilla Zari on it. The exquisite and entangled Metallic threads Tilla are spanned through this Shawl. This royal wrap of art, culture and warmth with  Tilla Zari embellishments can be paired with any ensemble to influence and affect any occasion.

We Guarantee 100% Authentic Pashmina Quality.

Embroidered By Highly Skilled Artisan of kashmir.

This Shawl is Handwoven

Base Color : Fawn

Weave: Tight

Feel :  soft, lightweight and warm.

Color Of Tilla : Light Golden

Tilla Quality : Guaranteed

Care : -Dry Clean Only.

Size : 40 x 80 inch / 100 x 200cm

Work : Tilla Zari Hand Embroidery

NOTE: We Try Our Best To Capture The Most Accurate Color of The Product but The actual color of the product may slightly differ due to photographic effects.

MeherPremium by Shabir Kashmir Arts

From KASHMIR`,PRICE:1506,CURRENCY_CODE:"USD",QUANTITY:1,TAGS:"Handmade_Wrap,kashmir_Pashmina,hand_tilla_zari,Tilla_Zari_pashmina,antique_shawl,ladakh_pashmina,meher_premium,pink_pashmina_shawl,cashmere_throw,tilla_jamawar,real_pashmina,kashmiri_embroidery,exquisite_shawls",MATERIALS:"","VARIATION 1 TYPE":"","VARIATION 1 NAME":"","VARIATION 1 VALUES":"","VARIATION 2 TYPE":"","VARIATION 2 NAME":"","VARIATION 2 VALUES":"",SKU:38,images:["https://i.etsystatic.com/25846489/r/il/993ea2/4838783949/il_fullxfull.4838783949_s22v.jpg","https://i.etsystatic.com/25846489/r/il/e8868d/4838781985/il_fullxfull.4838781985_fzl7.jpg","https://i.etsystatic.com/25846489/r/il/c2b889/4838783953/il_fullxfull.4838783953_cbyk.jpg","https://i.etsystatic.com/25846489/r/il/e311bf/4838782183/il_fullxfull.4838782183_89bn.jpg","https://i.etsystatic.com/25846489/r/il/060a4f/4790519966/il_fullxfull.4790519966_fess.jpg","https://i.etsystatic.com/25846489/r/il/2b359c/4790518110/il_fullxfull.4790518110_6jt5.jpg","https://i.etsystatic.com/25846489/r/il/cb05af/4838782063/il_fullxfull.4838782063_cb0l.jpg","https://i.etsystatic.com/25846489/r/il/95dc7d/4790518052/il_fullxfull.4790518052_kdto.jpg"]}],By=()=>{const[e,t]=E.useState([]),[i,a]=E.useState(null),[n,l]=E.useState(!1),r=E.useRef(),s=10;E.useEffect(()=>{t(ku.slice(0,s))},[]),E.useEffect(()=>{const c=new IntersectionObserver(T=>{T[0].isIntersecting&&!n&&o()}),f=r.current;return f&&c.observe(f),()=>{f&&c.unobserve(f)}},[n]);const o=()=>{l(!0),setTimeout(()=>{const c=ku.slice(e.length,e.length+s);t(f=>[...f,...c]),l(!1)},500)},h=c=>{a(c)},d=()=>{a(null)};return R.jsxs(R.Fragment,{children:[R.jsxs("section",{className:"py-2 px-2 md:py-0 md:px-8",children:[R.jsx("h1",{className:"m-6 text-6xl font-bold text-center mb-6 font-cormorant",children:"Gallery"}),R.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6",id:"products-grid",children:e.map(c=>R.jsx(Q8,{onClick:()=>h(c),children:R.jsxs("div",{className:"bg-white rounded-sm shadow-md flex flex-col cursor-pointer w-full max-w-[300px] mx-auto",children:[R.jsx("div",{className:"relative h-72 overflow-hidden",children:R.jsx("div",{className:"image-slider",children:R.jsx("img",{className:"w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-sm",src:c.images[0],alt:c.TITLE})})}),R.jsxs("div",{className:"p-4 flex flex-col justify-between",children:[R.jsx("div",{className:"font-poppins font-medium text-md mt-2 mb-2 line-clamp-2 leading-tight",children:c.TITLE}),R.jsx("div",{className:"text-sm text-gray-500 bg-green-500 text-white px-2 py-1 rounded-full w-fit",children:"Free Delivery"})]})]})},c.SKU))}),R.jsx("div",{ref:r,className:"h-16 flex items-center justify-center",children:n&&R.jsx("p",{className:"text-2xl",children:"Loading more products..."})})]}),i&&R.jsx(Dy,{product:i,onClose:d})]})},Yy=()=>{const e=k8(ks(R.jsx(Os,{path:"/",element:R.jsx(Z8,{}),children:R.jsx(Os,{path:"/",element:R.jsx(By,{})})})));return R.jsx(R.Fragment,{children:R.jsx(W8,{router:e})})};Zd(document.getElementById("root")).render(R.jsx(E.StrictMode,{children:R.jsx(Yy,{})}));
