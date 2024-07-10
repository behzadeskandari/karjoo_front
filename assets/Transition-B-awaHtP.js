import{V as x,_ as O,R as m}from"./index-Bn5WgwsL.js";import{b as g,c as N}from"./TransitionGroup-BjmH1hXZ.js";const b={disabled:!1};var k=function(l){return l.scrollTop},E="unmounted",u="exited",p="entering",d="entered",T="exiting",o=function(v){g(l,v);function l(r,e){var t;t=v.call(this,r,e)||this;var n=e,i=n&&!n.isMounting?r.enter:r.appear,a;return t.appearStatus=null,r.in?i?(a=u,t.appearStatus=p):a=d:r.unmountOnExit||r.mountOnEnter?a=E:a=u,t.state={status:a},t.nextCallback=null,t}l.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===E?{status:u}:null};var s=l.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==d&&(t=p):(n===p||n===d)&&(t=T)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e=this.props.timeout,t,n,i;return t=n=i=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,i=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:i}},s.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this);n&&k(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:E})},s.performEnter=function(e){var t=this,n=this.props.enter,i=this.context?this.context.isMounting:e,a=this.props.nodeRef?[i]:[x.findDOMNode(this),i],f=a[0],h=a[1],S=this.getTimeouts(),C=i?S.appear:S.enter;if(!e&&!n||b.disabled){this.safeSetState({status:d},function(){t.props.onEntered(f)});return}this.props.onEnter(f,h),this.safeSetState({status:p},function(){t.props.onEntering(f,h),t.onTransitionEnd(C,function(){t.safeSetState({status:d},function(){t.props.onEntered(f,h)})})})},s.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:x.findDOMNode(this);if(!t||b.disabled){this.safeSetState({status:u},function(){e.props.onExited(i)});return}this.props.onExit(i),this.safeSetState({status:T},function(){e.props.onExiting(i),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:u},function(){e.props.onExited(i)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,t.nextCallback=null,e(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},s.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this),i=e==null&&!this.props.addEndListener;if(!n||i){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],f=a[0],h=a[1];this.props.addEndListener(f,h)}e!=null&&setTimeout(this.nextCallback,e)},s.render=function(){var e=this.state.status;if(e===E)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var i=O(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(N.Provider,{value:null},typeof n=="function"?n(e,i):m.cloneElement(m.Children.only(n),i))},l}(m.Component);o.contextType=N;o.propTypes={};function c(){}o.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c};o.UNMOUNTED=E;o.EXITED=u;o.ENTERING=p;o.ENTERED=d;o.EXITING=T;export{o as T,k as f};
