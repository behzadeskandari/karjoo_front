function c(t,o){let e;return function(...u){const n=()=>{clearTimeout(e),t(...u)};clearTimeout(e),e=setTimeout(n,o)}}export{c as d};
