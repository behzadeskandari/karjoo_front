import{q as tt,w as Me,t as he,r as w,v as ge,x as $e,y as Ae,z as rt,E as nt,A as ot,a as E,B as st,C as at,F as it,j as Re,G as lt,H as ut,I as ct,J as Fe,f as ft,K as ze,M as dt,N as pt,O as mt,_ as yt,P as Le,s as ht,Q as gt,p as vt,T as qe,S as F,m as bt}from"./index-Bn5WgwsL.js";var St=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_t=tt(function(e){return St.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Ie={exports:{}},i={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=typeof Symbol=="function"&&Symbol.for,ve=d?Symbol.for("react.element"):60103,be=d?Symbol.for("react.portal"):60106,U=d?Symbol.for("react.fragment"):60107,B=d?Symbol.for("react.strict_mode"):60108,G=d?Symbol.for("react.profiler"):60114,X=d?Symbol.for("react.provider"):60109,Y=d?Symbol.for("react.context"):60110,Se=d?Symbol.for("react.async_mode"):60111,K=d?Symbol.for("react.concurrent_mode"):60111,J=d?Symbol.for("react.forward_ref"):60112,Q=d?Symbol.for("react.suspense"):60113,xt=d?Symbol.for("react.suspense_list"):60120,Z=d?Symbol.for("react.memo"):60115,ee=d?Symbol.for("react.lazy"):60116,$t=d?Symbol.for("react.block"):60121,Pt=d?Symbol.for("react.fundamental"):60117,wt=d?Symbol.for("react.responder"):60118,kt=d?Symbol.for("react.scope"):60119;function g(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ve:switch(e=e.type,e){case Se:case K:case U:case G:case B:case Q:return e;default:switch(e=e&&e.$$typeof,e){case Y:case J:case ee:case Z:case X:return e;default:return t}}case be:return t}}}function De(e){return g(e)===K}i.AsyncMode=Se;i.ConcurrentMode=K;i.ContextConsumer=Y;i.ContextProvider=X;i.Element=ve;i.ForwardRef=J;i.Fragment=U;i.Lazy=ee;i.Memo=Z;i.Portal=be;i.Profiler=G;i.StrictMode=B;i.Suspense=Q;i.isAsyncMode=function(e){return De(e)||g(e)===Se};i.isConcurrentMode=De;i.isContextConsumer=function(e){return g(e)===Y};i.isContextProvider=function(e){return g(e)===X};i.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ve};i.isForwardRef=function(e){return g(e)===J};i.isFragment=function(e){return g(e)===U};i.isLazy=function(e){return g(e)===ee};i.isMemo=function(e){return g(e)===Z};i.isPortal=function(e){return g(e)===be};i.isProfiler=function(e){return g(e)===G};i.isStrictMode=function(e){return g(e)===B};i.isSuspense=function(e){return g(e)===Q};i.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===U||e===K||e===G||e===B||e===Q||e===xt||typeof e=="object"&&e!==null&&(e.$$typeof===ee||e.$$typeof===Z||e.$$typeof===X||e.$$typeof===Y||e.$$typeof===J||e.$$typeof===Pt||e.$$typeof===wt||e.$$typeof===kt||e.$$typeof===$t)};i.typeOf=g;Ie.exports=i;var Ot=Ie.exports,We=Ot,Tt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ct={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ne={};Ne[We.ForwardRef]=Tt;Ne[We.Memo]=Ct;var fe={exports:{}},Pe;function Ve(){return Pe||(Pe=1,function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var s in o)({}).hasOwnProperty.call(o,s)&&(r[s]=o[s])}return r},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(fe)),fe.exports}Ve();var Ar=function(t,r){var n=arguments;if(r==null||!rt.call(r,"css"))return w.createElement.apply(void 0,n);var o=n.length,s=new Array(o);s[0]=nt,s[1]=ot(t,r);for(var a=2;a<o;a++)s[a]=n[a];return w.createElement.apply(null,s)},jt=Me(function(e,t){var r=e.styles,n=he([r],void 0,w.useContext(ge)),o=w.useRef();return $e(function(){var s=t.key+"-global",a=new t.sheet.constructor({key:s,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),c=!1,u=document.querySelector('style[data-emotion="'+s+" "+n.name+'"]');return t.sheet.tags.length&&(a.before=t.sheet.tags[0]),u!==null&&(c=!0,u.setAttribute("data-emotion",s),a.hydrate([u])),o.current=[a,c],function(){a.flush()}},[t]),$e(function(){var s=o.current,a=s[0],c=s[1];if(c){s[1]=!1;return}if(n.next!==void 0&&Ae(t,n.next,!0),a.tags.length){var u=a.tags[a.tags.length-1].nextElementSibling;a.before=u,a.flush()}t.insert("",n,a,!1)},[t,n.name]),null});function He(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return he(t)}var Et=function(){var t=He.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Mt=_t,At=function(t){return t!=="theme"},we=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?Mt:At},ke=function(t,r,n){var o;if(r){var s=r.shouldForwardProp;o=t.__emotion_forwardProp&&s?function(a){return t.__emotion_forwardProp(a)&&s(a)}:s}return typeof o!="function"&&n&&(o=t.__emotion_forwardProp),o},Rt=function(t){var r=t.cache,n=t.serialized,o=t.isStringTag;return at(r,n,o),it(function(){return Ae(r,n,o)}),null},Ft=function e(t,r){var n=t.__emotion_real===t,o=n&&t.__emotion_base||t,s,a;r!==void 0&&(s=r.label,a=r.target);var c=ke(t,r,n),u=c||we(o),m=!u("as");return function(){var y=arguments,_=n&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&_.push("label:"+s+";"),y[0]==null||y[0].raw===void 0)_.push.apply(_,y);else{_.push(y[0][0]);for(var D=y.length,M=1;M<D;M++)_.push(y[M],y[0][M])}var h=Me(function(p,$,A){var O=m&&p.as||o,k="",L=[],f=p;if(p.theme==null){f={};for(var v in p)f[v]=p[v];f.theme=w.useContext(ge)}typeof p.className=="string"?k=st($.registered,L,p.className):p.className!=null&&(k=p.className+" ");var R=he(_.concat(L),$.registered,f);k+=$.key+"-"+R.name,a!==void 0&&(k+=" "+a);var T=m&&c===void 0?we(O):u,C={};for(var j in p)m&&j==="as"||T(j)&&(C[j]=p[j]);return C.className=k,C.ref=A,w.createElement(w.Fragment,null,w.createElement(Rt,{cache:$,serialized:R,isStringTag:typeof O=="string"}),w.createElement(O,C))});return h.displayName=s!==void 0?s:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",h.defaultProps=t.defaultProps,h.__emotion_real=h,h.__emotion_base=o,h.__emotion_styles=_,h.__emotion_forwardProp=c,Object.defineProperty(h,"toString",{value:function(){return"."+a}}),h.withComponent=function(p,$){return e(p,E({},r,$,{shouldForwardProp:ke(h,$,!0)})).apply(void 0,_)},h}},zt=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],pe=Ft.bind();zt.forEach(function(e){pe[e]=pe(e)});let me;typeof document=="object"&&(me=ut({key:"css",prepend:!0}));function Lt(e){const{injectFirst:t,children:r}=e;return t&&me?Re.jsx(lt,{value:me,children:r}):r}function qt(e){return e==null||Object.keys(e).length===0}function It(e){const{styles:t,defaultTheme:r={}}=e,n=typeof t=="function"?o=>t(qt(o)?r:o):t;return Re.jsx(jt,{styles:n})}function Dt(e,t){return pe(e,t)}const Wt=(e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))},Nt=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:It,StyledEngineProvider:Lt,ThemeContext:ge,css:He,default:Dt,internal_processStyles:Wt,keyframes:Et},Symbol.toStringTag,{value:"Module"})),Vt=Object.freeze(Object.defineProperty({__proto__:null,default:ct,isPlainObject:Fe},Symbol.toStringTag,{value:"Module"})),Ht=Object.freeze(Object.defineProperty({__proto__:null,default:ft},Symbol.toStringTag,{value:"Module"})),Ut=Object.freeze(Object.defineProperty({__proto__:null,default:ze,private_createBreakpoints:dt,unstable_applyStyles:pt},Symbol.toStringTag,{value:"Module"})),Bt=ze();function Gt(e=Bt){return mt(e)}const Xt=["sx"],Yt=e=>{var t,r;const n={systemProps:{},otherProps:{}},o=(t=e==null||(r=e.theme)==null?void 0:r.unstable_sxConfig)!=null?t:Le;return Object.keys(e).forEach(s=>{o[s]?n.systemProps[s]=e[s]:n.otherProps[s]=e[s]}),n};function Kt(e){const{sx:t}=e,r=yt(e,Xt),{systemProps:n,otherProps:o}=Yt(r);let s;return Array.isArray(t)?s=[n,...t]:typeof t=="function"?s=(...a)=>{const c=t(...a);return Fe(c)?E({},n,c):n}:s=E({},n,t),E({},o,{sx:s})}const Jt=Object.freeze(Object.defineProperty({__proto__:null,default:ht,extendSxProp:Kt,unstable_createStyleFunctionSx:gt,unstable_defaultSxConfig:Le},Symbol.toStringTag,{value:"Module"})),Oe=e=>e,Qt=()=>{let e=Oe;return{configure(t){e=t},generate(t){return e(t)},reset(){e=Oe}}},Zt=Qt();function Ue(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=Ue(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Rr(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=Ue(e))&&(n&&(n+=" "),n+=t);return n}const er={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function tr(e,t,r="Mui"){const n=er[t];return n?`${r}-${n}`:`${Zt.generate(e)}-${t}`}function Fr(e,t,r="Mui"){const n={};return t.forEach(o=>{n[o]=tr(e,o,r)}),n}var Be={exports:{}},l={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=Symbol.for("react.element"),xe=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),se=Symbol.for("react.context"),rr=Symbol.for("react.server_context"),ae=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),nr=Symbol.for("react.offscreen"),Ge;Ge=Symbol.for("react.module.reference");function S(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _e:switch(e=e.type,e){case te:case ne:case re:case ie:case le:return e;default:switch(e=e&&e.$$typeof,e){case rr:case se:case ae:case ce:case ue:case oe:return e;default:return t}}case xe:return t}}}l.ContextConsumer=se;l.ContextProvider=oe;l.Element=_e;l.ForwardRef=ae;l.Fragment=te;l.Lazy=ce;l.Memo=ue;l.Portal=xe;l.Profiler=ne;l.StrictMode=re;l.Suspense=ie;l.SuspenseList=le;l.isAsyncMode=function(){return!1};l.isConcurrentMode=function(){return!1};l.isContextConsumer=function(e){return S(e)===se};l.isContextProvider=function(e){return S(e)===oe};l.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_e};l.isForwardRef=function(e){return S(e)===ae};l.isFragment=function(e){return S(e)===te};l.isLazy=function(e){return S(e)===ce};l.isMemo=function(e){return S(e)===ue};l.isPortal=function(e){return S(e)===xe};l.isProfiler=function(e){return S(e)===ne};l.isStrictMode=function(e){return S(e)===re};l.isSuspense=function(e){return S(e)===ie};l.isSuspenseList=function(e){return S(e)===le};l.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===te||e===ne||e===re||e===ie||e===le||e===nr||typeof e=="object"&&e!==null&&(e.$$typeof===ce||e.$$typeof===ue||e.$$typeof===oe||e.$$typeof===se||e.$$typeof===ae||e.$$typeof===Ge||e.getModuleId!==void 0)};l.typeOf=S;Be.exports=l;var Te=Be.exports;const or=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Xe(e){const t=`${e}`.match(or);return t&&t[1]||""}function Ye(e,t=""){return e.displayName||e.name||Xe(e)||t}function Ce(e,t,r){const n=Ye(t);return e.displayName||(n!==""?`${r}(${n})`:r)}function sr(e){if(e!=null){if(typeof e=="string")return e;if(typeof e=="function")return Ye(e,"Component");if(typeof e=="object")switch(e.$$typeof){case Te.ForwardRef:return Ce(e,e.render,"ForwardRef");case Te.Memo:return Ce(e,e.type,"memo");default:return}}}const ar=Object.freeze(Object.defineProperty({__proto__:null,default:sr,getFunctionName:Xe},Symbol.toStringTag,{value:"Module"}));function Ke(e,t){const r=E({},t);return Object.keys(e).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=E({},e[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const o=e[n]||{},s=t[n];r[n]={},!s||!Object.keys(s)?r[n]=o:!o||!Object.keys(o)?r[n]=s:(r[n]=E({},s),Object.keys(o).forEach(a=>{r[n][a]=Ke(o[a],s[a])}))}else r[n]===void 0&&(r[n]=e[n])}),r}function ir(e){const{theme:t,name:r,props:n}=e;return!t||!t.components||!t.components[r]||!t.components[r].defaultProps?n:Ke(t.components[r].defaultProps,n)}function lr({props:e,name:t,defaultTheme:r,themeId:n}){let o=Gt(r);return n&&(o=o[n]||o),ir({theme:o,name:t,props:e})}function zr(e,t,r=void 0){const n={};return Object.keys(e).forEach(o=>{n[o]=e[o].reduce((s,a)=>{if(a){const c=t(a);c!==""&&s.push(c),r&&r[a]&&s.push(r[a])}return s},[]).join(" ")}),n}const Je=vt();function Lr({props:e,name:t}){return lr({props:e,name:t,defaultTheme:Je,themeId:qe})}var I={},de={exports:{}},je;function ur(){return je||(je=1,function(e){function t(r,n){if(r==null)return{};var o={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(n.indexOf(s)>=0)continue;o[s]=r[s]}return o}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}(de)),de.exports}const cr=F(Nt),fr=F(Vt),dr=F(Ht),pr=F(ar),mr=F(Ut),yr=F(Jt);var z=bt;Object.defineProperty(I,"__esModule",{value:!0});var hr=I.default=Cr;I.shouldForwardProp=V;I.systemDefaultTheme=void 0;var b=z(Ve()),ye=z(ur()),Ee=$r(cr),gr=fr;z(dr);z(pr);var vr=z(mr),br=z(yr);const Sr=["ownerState"],_r=["variants"],xr=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Qe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(Qe=function(n){return n?r:t})(e)}function $r(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=Qe(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=o?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(n,s,a):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n}function Pr(e){return Object.keys(e).length===0}function wr(e){return typeof e=="string"&&e.charCodeAt(0)>96}function V(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const kr=I.systemDefaultTheme=(0,vr.default)(),Or=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function N({defaultTheme:e,theme:t,themeId:r}){return Pr(t)?e:t[r]||t}function Tr(e){return e?(t,r)=>r[e]:null}function H(e,t){let{ownerState:r}=t,n=(0,ye.default)(t,Sr);const o=typeof e=="function"?e((0,b.default)({ownerState:r},n)):e;if(Array.isArray(o))return o.flatMap(s=>H(s,(0,b.default)({ownerState:r},n)));if(o&&typeof o=="object"&&Array.isArray(o.variants)){const{variants:s=[]}=o;let c=(0,ye.default)(o,_r);return s.forEach(u=>{let m=!0;typeof u.props=="function"?m=u.props((0,b.default)({ownerState:r},n,r)):Object.keys(u.props).forEach(y=>{(r==null?void 0:r[y])!==u.props[y]&&n[y]!==u.props[y]&&(m=!1)}),m&&(Array.isArray(c)||(c=[c]),c.push(typeof u.style=="function"?u.style((0,b.default)({ownerState:r},n,r)):u.style))}),c}return o}function Cr(e={}){const{themeId:t,defaultTheme:r=kr,rootShouldForwardProp:n=V,slotShouldForwardProp:o=V}=e,s=a=>(0,br.default)((0,b.default)({},a,{theme:N((0,b.default)({},a,{defaultTheme:r,themeId:t}))}));return s.__mui_systemSx=!0,(a,c={})=>{(0,Ee.internal_processStyles)(a,f=>f.filter(v=>!(v!=null&&v.__mui_systemSx)));const{name:u,slot:m,skipVariantsResolver:y,skipSx:_,overridesResolver:D=Tr(Or(m))}=c,M=(0,ye.default)(c,xr),h=y!==void 0?y:m&&m!=="Root"&&m!=="root"||!1,p=_||!1;let $,A=V;m==="Root"||m==="root"?A=n:m?A=o:wr(a)&&(A=void 0);const O=(0,Ee.default)(a,(0,b.default)({shouldForwardProp:A,label:$},M)),k=f=>typeof f=="function"&&f.__emotion_real!==f||(0,gr.isPlainObject)(f)?v=>H(f,(0,b.default)({},v,{theme:N({theme:v.theme,defaultTheme:r,themeId:t})})):f,L=(f,...v)=>{let R=k(f);const T=v?v.map(k):[];u&&D&&T.push(P=>{const x=N((0,b.default)({},P,{defaultTheme:r,themeId:t}));if(!x.components||!x.components[u]||!x.components[u].styleOverrides)return null;const q=x.components[u].styleOverrides,W={};return Object.entries(q).forEach(([Ze,et])=>{W[Ze]=H(et,(0,b.default)({},P,{theme:x}))}),D(P,W)}),u&&!h&&T.push(P=>{var x;const q=N((0,b.default)({},P,{defaultTheme:r,themeId:t})),W=q==null||(x=q.components)==null||(x=x[u])==null?void 0:x.variants;return H({variants:W},(0,b.default)({},P,{theme:q}))}),p||T.push(s);const C=T.length-v.length;if(Array.isArray(f)&&C>0){const P=new Array(C).fill("");R=[...f,...P],R.raw=[...f.raw,...P]}const j=O(R,...T);return a.muiName&&(j.muiName=a.muiName),j};return O.withConfig&&(L.withConfig=O.withConfig),L}}function jr(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Er=e=>jr(e)&&e!=="classes",qr=hr({themeId:qe,defaultTheme:Je,rootShouldForwardProp:Er});export{Zt as C,Fr as a,Rr as b,He as c,zr as d,Dt as e,Gt as f,tr as g,Kt as h,Je as i,Ar as j,Et as k,Ke as l,Er as r,qr as s,Lr as u};
