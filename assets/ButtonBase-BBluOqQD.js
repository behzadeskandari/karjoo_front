import{r as o,j as $,_ as ue,a as O}from"./index-Bn5WgwsL.js";import{b as M,a as ce,k as Z,s as v,u as pe,g as Ne,d as $e}from"./styled-BwifUJ7j.js";import{u as Ie,a as ne,e as Ue,d as H}from"./createSvgIcon-DF0PuZWn.js";import{T as je}from"./TransitionGroup-BjmH1hXZ.js";function Fe(s){const{className:T,classes:a,pulsate:l=!1,rippleX:P,rippleY:n,rippleSize:c,in:D,onExited:p,timeout:i}=s,[d,h]=o.useState(!1),f=M(T,a.ripple,a.rippleVisible,l&&a.ripplePulsate),x={width:c,height:c,top:-(c/2)+n,left:-(c/2)+P},r=M(a.child,d&&a.childLeaving,l&&a.childPulsate);return!D&&!d&&h(!0),o.useEffect(()=>{if(!D&&p!=null){const m=setTimeout(p,i);return()=>{clearTimeout(m)}}},[p,D,i]),$.jsx("span",{className:f,style:x,children:$.jsx("span",{className:r})})}const u=ce("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Ke=["center","classes","className"];let W=s=>s,ie,re,ae,le;const Q=550,_e=80,ze=Z(ie||(ie=W`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ae=Z(re||(re=W`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Xe=Z(ae||(ae=W`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Ye=v("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),He=v(Fe,{name:"MuiTouchRipple",slot:"Ripple"})(le||(le=W`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),u.rippleVisible,ze,Q,({theme:s})=>s.transitions.easing.easeInOut,u.ripplePulsate,({theme:s})=>s.transitions.duration.shorter,u.child,u.childLeaving,Ae,Q,({theme:s})=>s.transitions.easing.easeInOut,u.childPulsate,Xe,({theme:s})=>s.transitions.easing.easeInOut),Oe=o.forwardRef(function(T,a){const l=pe({props:T,name:"MuiTouchRipple"}),{center:P=!1,classes:n={},className:c}=l,D=ue(l,Ke),[p,i]=o.useState([]),d=o.useRef(0),h=o.useRef(null);o.useEffect(()=>{h.current&&(h.current(),h.current=null)},[p]);const f=o.useRef(!1),x=Ie(),r=o.useRef(null),m=o.useRef(null),F=o.useCallback(t=>{const{pulsate:b,rippleX:R,rippleY:E,rippleSize:j,cb:_}=t;i(g=>[...g,$.jsx(He,{classes:{ripple:M(n.ripple,u.ripple),rippleVisible:M(n.rippleVisible,u.rippleVisible),ripplePulsate:M(n.ripplePulsate,u.ripplePulsate),child:M(n.child,u.child),childLeaving:M(n.childLeaving,u.childLeaving),childPulsate:M(n.childPulsate,u.childPulsate)},timeout:Q,pulsate:b,rippleX:R,rippleY:E,rippleSize:j},d.current)]),d.current+=1,h.current=_},[n]),I=o.useCallback((t={},b={},R=()=>{})=>{const{pulsate:E=!1,center:j=P||b.pulsate,fakeElement:_=!1}=b;if((t==null?void 0:t.type)==="mousedown"&&f.current){f.current=!1;return}(t==null?void 0:t.type)==="touchstart"&&(f.current=!0);const g=_?null:m.current,V=g?g.getBoundingClientRect():{width:0,height:0,left:0,top:0};let C,w,L;if(j||t===void 0||t.clientX===0&&t.clientY===0||!t.clientX&&!t.touches)C=Math.round(V.width/2),w=Math.round(V.height/2);else{const{clientX:S,clientY:B}=t.touches&&t.touches.length>0?t.touches[0]:t;C=Math.round(S-V.left),w=Math.round(B-V.top)}if(j)L=Math.sqrt((2*V.width**2+V.height**2)/3),L%2===0&&(L+=1);else{const S=Math.max(Math.abs((g?g.clientWidth:0)-C),C)*2+2,B=Math.max(Math.abs((g?g.clientHeight:0)-w),w)*2+2;L=Math.sqrt(S**2+B**2)}t!=null&&t.touches?r.current===null&&(r.current=()=>{F({pulsate:E,rippleX:C,rippleY:w,rippleSize:L,cb:R})},x.start(_e,()=>{r.current&&(r.current(),r.current=null)})):F({pulsate:E,rippleX:C,rippleY:w,rippleSize:L,cb:R})},[P,F,x]),K=o.useCallback(()=>{I({},{pulsate:!0})},[I]),U=o.useCallback((t,b)=>{if(x.clear(),(t==null?void 0:t.type)==="touchend"&&r.current){r.current(),r.current=null,x.start(0,()=>{U(t,b)});return}r.current=null,i(R=>R.length>0?R.slice(1):R),h.current=b},[x]);return o.useImperativeHandle(a,()=>({pulsate:K,start:I,stop:U}),[K,I,U]),$.jsx(Ye,O({className:M(u.root,n.root,c),ref:m},D,{children:$.jsx(je,{component:null,exit:!0,children:p})}))});function We(s){return Ne("MuiButtonBase",s)}const qe=ce("MuiButtonBase",["root","disabled","focusVisible"]),Ge=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],Je=s=>{const{disabled:T,focusVisible:a,focusVisibleClassName:l,classes:P}=s,c=$e({root:["root",T&&"disabled",a&&"focusVisible"]},We,P);return a&&l&&(c.root+=` ${l}`),c},Qe=v("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(s,T)=>T.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${qe.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=o.forwardRef(function(T,a){const l=pe({props:T,name:"MuiButtonBase"}),{action:P,centerRipple:n=!1,children:c,className:D,component:p="button",disabled:i=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:f=!1,LinkComponent:x="a",onBlur:r,onClick:m,onContextMenu:F,onDragLeave:I,onFocus:K,onFocusVisible:U,onKeyDown:t,onKeyUp:b,onMouseDown:R,onMouseLeave:E,onMouseUp:j,onTouchEnd:_,onTouchMove:g,onTouchStart:V,tabIndex:C=0,TouchRippleProps:w,touchRippleRef:L,type:S}=l,B=ue(l,Ge),z=o.useRef(null),y=o.useRef(null),fe=ne(y,L),{isFocusVisibleRef:ee,onFocus:de,onBlur:he,ref:me}=Ue(),[N,X]=o.useState(!1);i&&N&&X(!1),o.useImperativeHandle(P,()=>({focusVisible:()=>{X(!0),z.current.focus()}}),[]);const[q,be]=o.useState(!1);o.useEffect(()=>{be(!0)},[]);const Re=q&&!d&&!i;o.useEffect(()=>{N&&f&&!d&&q&&y.current.pulsate()},[d,f,N,q]);function k(e,oe,Se=h){return H(se=>(oe&&oe(se),!Se&&y.current&&y.current[e](se),!0))}const ge=k("start",R),ye=k("stop",F),Me=k("stop",I),Te=k("stop",j),xe=k("stop",e=>{N&&e.preventDefault(),E&&E(e)}),Ce=k("start",V),Be=k("stop",_),ke=k("stop",g),Pe=k("stop",e=>{he(e),ee.current===!1&&X(!1),r&&r(e)},!1),Ve=H(e=>{z.current||(z.current=e.currentTarget),de(e),ee.current===!0&&(X(!0),U&&U(e)),K&&K(e)}),G=()=>{const e=z.current;return p&&p!=="button"&&!(e.tagName==="A"&&e.href)},J=o.useRef(!1),we=H(e=>{f&&!J.current&&N&&y.current&&e.key===" "&&(J.current=!0,y.current.stop(e,()=>{y.current.start(e)})),e.target===e.currentTarget&&G()&&e.key===" "&&e.preventDefault(),t&&t(e),e.target===e.currentTarget&&G()&&e.key==="Enter"&&!i&&(e.preventDefault(),m&&m(e))}),Le=H(e=>{f&&e.key===" "&&y.current&&N&&!e.defaultPrevented&&(J.current=!1,y.current.stop(e,()=>{y.current.pulsate(e)})),b&&b(e),m&&e.target===e.currentTarget&&G()&&e.key===" "&&!e.defaultPrevented&&m(e)});let Y=p;Y==="button"&&(B.href||B.to)&&(Y=x);const A={};Y==="button"?(A.type=S===void 0?"button":S,A.disabled=i):(!B.href&&!B.to&&(A.role="button"),i&&(A["aria-disabled"]=i));const De=ne(a,me,z),te=O({},l,{centerRipple:n,component:p,disabled:i,disableRipple:d,disableTouchRipple:h,focusRipple:f,tabIndex:C,focusVisible:N}),Ee=Je(te);return $.jsxs(Qe,O({as:Y,className:M(Ee.root,D),ownerState:te,onBlur:Pe,onClick:m,onContextMenu:ye,onFocus:Ve,onKeyDown:we,onKeyUp:Le,onMouseDown:ge,onMouseLeave:xe,onMouseUp:Te,onDragLeave:Me,onTouchEnd:Be,onTouchMove:ke,onTouchStart:Ce,ref:De,tabIndex:i?-1:C,type:S},A,B,{children:[c,Re?$.jsx(Oe,O({ref:fe,center:n},w)):null]}))});export{st as B};
