import{f as t,a as r,i as u,r as z,_ as R,j as m}from"./index-Bn5WgwsL.js";import{a as y,g as x,s as C,u as B,b as I,d as $}from"./styled-BwifUJ7j.js";import{B as h}from"./ButtonBase-BBluOqQD.js";function k(o){return x("MuiIconButton",o)}const _=y("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),M=["edge","children","className","color","disabled","disableFocusRipple","size"],j=o=>{const{classes:a,disabled:e,color:s,edge:i,size:l}=o,n={root:["root",e&&"disabled",s!=="default"&&`color${t(s)}`,i&&`edge${t(i)}`,`size${t(l)}`]};return $(n,k,a)},E=C(h,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.color!=="default"&&a[`color${t(e.color)}`],e.edge&&a[`edge${t(e.edge)}`],a[`size${t(e.size)}`]]}})(({theme:o,ownerState:a})=>r({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},a.edge==="start"&&{marginLeft:a.size==="small"?-3:-12},a.edge==="end"&&{marginRight:a.size==="small"?-3:-12}),({theme:o,ownerState:a})=>{var e;const s=(e=(o.vars||o).palette)==null?void 0:e[a.color];return r({},a.color==="inherit"&&{color:"inherit"},a.color!=="inherit"&&a.color!=="default"&&r({color:s==null?void 0:s.main},!a.disableRipple&&{"&:hover":r({},s&&{backgroundColor:o.vars?`rgba(${s.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(s.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),a.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},a.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${_.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),L=z.forwardRef(function(a,e){const s=B({props:a,name:"MuiIconButton"}),{edge:i=!1,children:l,className:n,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:v="medium"}=s,b=R(s,M),p=r({},s,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:v}),f=j(p);return m.jsx(E,r({className:I(f.root,n),centerRipple:!0,focusRipple:!d,disabled:c,ref:e},b,{ownerState:p,children:l}))});export{L as I};
