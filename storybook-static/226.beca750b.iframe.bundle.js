/*! For license information please see 226.beca750b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunknext_blog=self.webpackChunknext_blog||[]).push([[226],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react-tooltip/dist/react-tooltip.min.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>N});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);function t(t){return t.split("-")[1]}function floating_ui_core_browser_min_e(t){return"y"===t?"height":"width"}function n(t){return t.split("-")[0]}function floating_ui_core_browser_min_o(t){return["top","bottom"].includes(n(t))?"x":"y"}function floating_ui_core_browser_min_i(i,r,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,m=floating_ui_core_browser_min_o(r),u=floating_ui_core_browser_min_e(m),g=l[u]/2-s[u]/2,d="x"===m;let p;switch(n(r)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(t(r)){case"start":p[m]-=g*(a&&d?-1:1);break;case"end":p[m]+=g*(a&&d?-1:1)}return p}function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function floating_ui_core_browser_min_l(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function floating_ui_core_browser_min_s(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:f}=t,{boundary:m="clippingAncestors",rootBoundary:u="viewport",elementContext:g="floating",altBoundary:d=!1,padding:p=0}=e,h=a(p),y=c[d?"floating"===g?"reference":"floating":g],x=floating_ui_core_browser_min_l(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(y)))||n?y:y.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(c.floating)),boundary:m,rootBoundary:u,strategy:f})),w="floating"===g?{...s.floating,x:o,y:i}:s.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c.floating)),b=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},A=floating_ui_core_browser_min_l(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:w,offsetParent:v,strategy:f}):w);return{top:(x.top-A.top+h.top)/b.y,bottom:(A.bottom-x.bottom+h.bottom)/b.y,left:(x.left-A.left+h.left)/b.x,right:(A.right-x.right+h.right)/b.x}}const floating_ui_core_browser_min_c=Math.min,f=Math.max;function m(t,e,n){return f(t,floating_ui_core_browser_min_c(e,n))}const u=n=>({name:"arrow",options:n,async fn(i){const{element:r,padding:l=0}=n||{},{x:s,y:c,placement:f,rects:u,platform:g,elements:d}=i;if(null==r)return{};const p=a(l),h={x:s,y:c},y=floating_ui_core_browser_min_o(f),x=floating_ui_core_browser_min_e(y),w=await g.getDimensions(r),v="y"===y,b=v?"top":"left",A=v?"bottom":"right",R=v?"clientHeight":"clientWidth",P=u.reference[x]+u.reference[y]-h[y]-u.floating[x],E=h[y]-u.reference[y],T=await(null==g.getOffsetParent?void 0:g.getOffsetParent(r));let D=T?T[R]:0;D&&await(null==g.isElement?void 0:g.isElement(T))||(D=d.floating[R]||u.floating[x]);const L=P/2-E/2,k=p[b],O=D-w[x]-p[A],B=D/2-w[x]/2+L,C=m(k,B,O),H=null!=t(f)&&B!=C&&u.reference[x]/2-(B<k?p[b]:p[A])-w[x]/2<0;return{[y]:h[y]-(H?B<k?k-B:O-B:0),data:{[y]:C,centerOffset:B-C}}}}),g=["top","right","bottom","left"],p=(g.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function h(t){return t.replace(/left|right|bottom|top/g,(t=>p[t]))}function y(n,i,r){void 0===r&&(r=!1);const a=t(n),l=floating_ui_core_browser_min_o(n),s=floating_ui_core_browser_min_e(l);let c="x"===l?a===(r?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=h(c)),{main:c,cross:h(c)}}const x={start:"end",end:"start"};function w(t){return t.replace(/start|end/g,(t=>x[t]))}const b=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(o){var i;const{placement:r,middlewareData:a,rects:l,initialPlacement:c,platform:f,elements:m}=o,{mainAxis:u=!0,crossAxis:g=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...b}=e,A=n(r),R=n(c)===c,P=await(null==f.isRTL?void 0:f.isRTL(m.floating)),E=d||(R||!v?[h(c)]:function(t){const e=h(t);return[w(t),e,w(e)]}(c));d||"none"===x||E.push(...function(e,o,i,r){const a=t(e);let l=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:a;default:return[]}}(n(e),"start"===i,r);return a&&(l=l.map((t=>t+"-"+a)),o&&(l=l.concat(l.map(w)))),l}(c,v,x,P));const T=[c,...E],D=await floating_ui_core_browser_min_s(o,b),L=[];let k=(null==(i=a.flip)?void 0:i.overflows)||[];if(u&&L.push(D[A]),g){const{main:t,cross:e}=y(r,l,P);L.push(D[t],D[e])}if(k=[...k,{placement:r,overflows:L}],!L.every((t=>t<=0))){var O,B;const t=((null==(O=a.flip)?void 0:O.index)||0)+1,e=T[t];if(e)return{data:{index:t,overflows:k},reset:{placement:e}};let n=null==(B=k.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:B.placement;if(!n)switch(p){case"bestFit":{var C;const t=null==(C=k.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:C[0];t&&(n=t);break}case"initialPlacement":n=c}if(r!==n)return{reset:{placement:n}}}return{}}}};const D=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(i){const{x:r,y:a}=i,l=await async function(e,i){const{placement:r,platform:a,elements:l}=e,s=await(null==a.isRTL?void 0:a.isRTL(l.floating)),c=n(r),f=t(r),m="x"===floating_ui_core_browser_min_o(r),u=["left","top"].includes(c)?-1:1,g=s&&m?-1:1,d="function"==typeof i?i(e):i;let{mainAxis:p,crossAxis:h,alignmentAxis:y}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),m?{x:h*g,y:p*u}:{x:p*u,y:h*g}}(i,e);return{x:r+l.x,y:a+l.y,data:l}}}};function L(t){return"x"===t?"y":"x"}const k=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:r,placement:a}=e,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=t,g={x:i,y:r},d=await floating_ui_core_browser_min_s(e,u),p=floating_ui_core_browser_min_o(n(a)),h=L(p);let y=g[p],x=g[h];if(l){const t="y"===p?"bottom":"right";y=m(y+d["y"===p?"top":"left"],y,y-d[t])}if(c){const t="y"===h?"bottom":"right";x=m(x+d["y"===h?"top":"left"],x,x-d[t])}const w=f.fn({...e,[p]:y,[h]:x});return{...w,data:{x:w.x-i,y:w.y-r}}}}};function floating_ui_dom_browser_min_n(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function floating_ui_dom_browser_min_o(t){return floating_ui_dom_browser_min_n(t).getComputedStyle(t)}function floating_ui_dom_browser_min_i(t){return t instanceof floating_ui_dom_browser_min_n(t).Node}function floating_ui_dom_browser_min_r(t){return floating_ui_dom_browser_min_i(t)?(t.nodeName||"").toLowerCase():""}function floating_ui_dom_browser_min_l(t){return t instanceof floating_ui_dom_browser_min_n(t).HTMLElement}function floating_ui_dom_browser_min_c(t){return t instanceof floating_ui_dom_browser_min_n(t).Element}function floating_ui_dom_browser_min_s(t){return"undefined"!=typeof ShadowRoot&&(t instanceof floating_ui_dom_browser_min_n(t).ShadowRoot||t instanceof ShadowRoot)}function floating_ui_dom_browser_min_f(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=floating_ui_dom_browser_min_o(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function floating_ui_dom_browser_min_u(t){return["table","td","th"].includes(floating_ui_dom_browser_min_r(t))}function floating_ui_dom_browser_min_a(t){const e=floating_ui_dom_browser_min_d(),n=floating_ui_dom_browser_min_o(t);return"none"!==n.transform||"none"!==n.perspective||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function floating_ui_dom_browser_min_d(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function floating_ui_dom_browser_min_h(t){return["html","body","#document"].includes(floating_ui_dom_browser_min_r(t))}const floating_ui_dom_browser_min_p=Math.min,floating_ui_dom_browser_min_m=Math.max,floating_ui_dom_browser_min_g=Math.round;function floating_ui_dom_browser_min_y(t){const e=floating_ui_dom_browser_min_o(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=floating_ui_dom_browser_min_l(t),c=r?t.offsetWidth:n,s=r?t.offsetHeight:i,f=floating_ui_dom_browser_min_g(n)!==c||floating_ui_dom_browser_min_g(i)!==s;return f&&(n=c,i=s),{width:n,height:i,fallback:f}}function floating_ui_dom_browser_min_x(t){return floating_ui_dom_browser_min_c(t)?t:t.contextElement}const floating_ui_dom_browser_min_w={x:1,y:1};function floating_ui_dom_browser_min_v(t){const e=floating_ui_dom_browser_min_x(t);if(!floating_ui_dom_browser_min_l(e))return floating_ui_dom_browser_min_w;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:r}=floating_ui_dom_browser_min_y(e);let c=(r?floating_ui_dom_browser_min_g(n.width):n.width)/o,s=(r?floating_ui_dom_browser_min_g(n.height):n.height)/i;return c&&Number.isFinite(c)||(c=1),s&&Number.isFinite(s)||(s=1),{x:c,y:s}}const floating_ui_dom_browser_min_b={x:0,y:0};function floating_ui_dom_browser_min_L(t,e,o){var i,r;if(void 0===e&&(e=!0),!floating_ui_dom_browser_min_d())return floating_ui_dom_browser_min_b;const l=t?floating_ui_dom_browser_min_n(t):window;return!o||e&&o!==l?floating_ui_dom_browser_min_b:{x:(null==(i=l.visualViewport)?void 0:i.offsetLeft)||0,y:(null==(r=l.visualViewport)?void 0:r.offsetTop)||0}}function floating_ui_dom_browser_min_E(e,o,i,r){void 0===o&&(o=!1),void 0===i&&(i=!1);const l=e.getBoundingClientRect(),s=floating_ui_dom_browser_min_x(e);let f=floating_ui_dom_browser_min_w;o&&(r?floating_ui_dom_browser_min_c(r)&&(f=floating_ui_dom_browser_min_v(r)):f=floating_ui_dom_browser_min_v(e));const u=floating_ui_dom_browser_min_L(s,i,r);let a=(l.left+u.x)/f.x,d=(l.top+u.y)/f.y,h=l.width/f.x,p=l.height/f.y;if(s){const t=floating_ui_dom_browser_min_n(s),e=r&&floating_ui_dom_browser_min_c(r)?floating_ui_dom_browser_min_n(r):r;let o=t.frameElement;for(;o&&r&&e!==t;){const t=floating_ui_dom_browser_min_v(o),e=o.getBoundingClientRect(),i=getComputedStyle(o);e.x+=(o.clientLeft+parseFloat(i.paddingLeft))*t.x,e.y+=(o.clientTop+parseFloat(i.paddingTop))*t.y,a*=t.x,d*=t.y,h*=t.x,p*=t.y,a+=e.x,d+=e.y,o=floating_ui_dom_browser_min_n(o).frameElement}}return floating_ui_core_browser_min_l({width:h,height:p,x:a,y:d})}function floating_ui_dom_browser_min_R(t){return((floating_ui_dom_browser_min_i(t)?t.ownerDocument:t.document)||window.document).documentElement}function floating_ui_dom_browser_min_T(t){return floating_ui_dom_browser_min_c(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function S(t){return floating_ui_dom_browser_min_E(floating_ui_dom_browser_min_R(t)).left+floating_ui_dom_browser_min_T(t).scrollLeft}function C(t){if("html"===floating_ui_dom_browser_min_r(t))return t;const e=t.assignedSlot||t.parentNode||floating_ui_dom_browser_min_s(t)&&t.host||floating_ui_dom_browser_min_R(t);return floating_ui_dom_browser_min_s(e)?e.host:e}function F(t){const e=C(t);return floating_ui_dom_browser_min_h(e)?e.ownerDocument.body:floating_ui_dom_browser_min_l(e)&&floating_ui_dom_browser_min_f(e)?e:F(e)}function W(t,e){var o;void 0===e&&(e=[]);const i=F(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=floating_ui_dom_browser_min_n(i);return r?e.concat(l,l.visualViewport||[],floating_ui_dom_browser_min_f(i)?i:[]):e.concat(i,W(i))}function floating_ui_dom_browser_min_D(e,i,r){let s;if("viewport"===i)s=function(t,e){const o=floating_ui_dom_browser_min_n(t),i=floating_ui_dom_browser_min_R(t),r=o.visualViewport;let l=i.clientWidth,c=i.clientHeight,s=0,f=0;if(r){l=r.width,c=r.height;const t=floating_ui_dom_browser_min_d();(!t||t&&"fixed"===e)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:l,height:c,x:s,y:f}}(e,r);else if("document"===i)s=function(t){const e=floating_ui_dom_browser_min_R(t),n=floating_ui_dom_browser_min_T(t),i=t.ownerDocument.body,r=floating_ui_dom_browser_min_m(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),l=floating_ui_dom_browser_min_m(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let c=-n.scrollLeft+S(t);const s=-n.scrollTop;return"rtl"===floating_ui_dom_browser_min_o(i).direction&&(c+=floating_ui_dom_browser_min_m(e.clientWidth,i.clientWidth)-r),{width:r,height:l,x:c,y:s}}(floating_ui_dom_browser_min_R(e));else if(floating_ui_dom_browser_min_c(i))s=function(t,e){const n=floating_ui_dom_browser_min_E(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=floating_ui_dom_browser_min_l(t)?floating_ui_dom_browser_min_v(t):{x:1,y:1};return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(i,r);else{const t=floating_ui_dom_browser_min_L(e);s={...i,x:i.x-t.x,y:i.y-t.y}}return floating_ui_core_browser_min_l(s)}function H(t,e){const n=C(t);return!(n===e||!floating_ui_dom_browser_min_c(n)||floating_ui_dom_browser_min_h(n))&&("fixed"===floating_ui_dom_browser_min_o(n).position||H(n,e))}function floating_ui_dom_browser_min_O(t,e){return floating_ui_dom_browser_min_l(t)&&"fixed"!==floating_ui_dom_browser_min_o(t).position?e?e(t):t.offsetParent:null}function floating_ui_dom_browser_min_P(t,e){const i=floating_ui_dom_browser_min_n(t);if(!floating_ui_dom_browser_min_l(t))return i;let c=floating_ui_dom_browser_min_O(t,e);for(;c&&floating_ui_dom_browser_min_u(c)&&"static"===floating_ui_dom_browser_min_o(c).position;)c=floating_ui_dom_browser_min_O(c,e);return c&&("html"===floating_ui_dom_browser_min_r(c)||"body"===floating_ui_dom_browser_min_r(c)&&"static"===floating_ui_dom_browser_min_o(c).position&&!floating_ui_dom_browser_min_a(c))?i:c||function(t){let e=C(t);for(;floating_ui_dom_browser_min_l(e)&&!floating_ui_dom_browser_min_h(e);){if(floating_ui_dom_browser_min_a(e))return e;e=C(e)}return null}(t)||i}function V(t,e,n){const o=floating_ui_dom_browser_min_l(e),i=floating_ui_dom_browser_min_R(e),c="fixed"===n,s=floating_ui_dom_browser_min_E(t,!0,c,e);let u={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(o||!o&&!c)if(("body"!==floating_ui_dom_browser_min_r(e)||floating_ui_dom_browser_min_f(i))&&(u=floating_ui_dom_browser_min_T(e)),floating_ui_dom_browser_min_l(e)){const t=floating_ui_dom_browser_min_E(e,!0,c,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=S(i));return{x:s.left+u.scrollLeft-a.x,y:s.top+u.scrollTop-a.y,width:s.width,height:s.height}}const floating_ui_dom_browser_min_k={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:l}=t;const s="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=W(t).filter((t=>floating_ui_dom_browser_min_c(t)&&"body"!==floating_ui_dom_browser_min_r(t))),l=null;const s="fixed"===floating_ui_dom_browser_min_o(t).position;let u=s?C(t):t;for(;floating_ui_dom_browser_min_c(u)&&!floating_ui_dom_browser_min_h(u);){const e=floating_ui_dom_browser_min_o(u),n=floating_ui_dom_browser_min_a(u);n||"fixed"!==e.position||(l=null),(s?!n&&!l:!n&&"static"===e.position&&l&&["absolute","fixed"].includes(l.position)||floating_ui_dom_browser_min_f(u)&&!n&&H(t,u))?i=i.filter((t=>t!==u)):l=e,u=C(u)}return e.set(t,i),i}(e,this._c):[].concat(n),u=[...s,i],d=u[0],g=u.reduce(((t,n)=>{const o=floating_ui_dom_browser_min_D(e,n,l);return t.top=floating_ui_dom_browser_min_m(o.top,t.top),t.right=floating_ui_dom_browser_min_p(o.right,t.right),t.bottom=floating_ui_dom_browser_min_p(o.bottom,t.bottom),t.left=floating_ui_dom_browser_min_m(o.left,t.left),t}),floating_ui_dom_browser_min_D(e,d,l));return{width:g.right-g.left,height:g.bottom-g.top,x:g.left,y:g.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=floating_ui_dom_browser_min_l(n),c=floating_ui_dom_browser_min_R(n);if(n===c)return e;let s={scrollLeft:0,scrollTop:0},u={x:1,y:1};const a={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==floating_ui_dom_browser_min_r(n)||floating_ui_dom_browser_min_f(c))&&(s=floating_ui_dom_browser_min_T(n)),floating_ui_dom_browser_min_l(n))){const t=floating_ui_dom_browser_min_E(n);u=floating_ui_dom_browser_min_v(n),a.x=t.x+n.clientLeft,a.y=t.y+n.clientTop}return{width:e.width*u.x,height:e.height*u.y,x:e.x*u.x-s.scrollLeft*u.x+a.x,y:e.y*u.y-s.scrollTop*u.y+a.y}},isElement:floating_ui_dom_browser_min_c,getDimensions:function(t){return floating_ui_dom_browser_min_y(t)},getOffsetParent:floating_ui_dom_browser_min_P,getDocumentElement:floating_ui_dom_browser_min_R,getScale:floating_ui_dom_browser_min_v,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||floating_ui_dom_browser_min_P,r=this.getDimensions;return{reference:V(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===floating_ui_dom_browser_min_o(t).direction};const M=(t,n,o)=>{const i=new Map,r={platform:floating_ui_dom_browser_min_k,...o},l={...r.platform,_c:i};return(async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:m,y:u}=floating_ui_core_browser_min_i(f,o,c),g=o,d={},p=0;for(let n=0;n<s.length;n++){const{name:a,fn:h}=s[n],{x:y,y:x,data:w,reset:v}=await h({x:m,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});m=null!=y?y:m,u=null!=x?x:u,d={...d,[a]:{...d[a],...w}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:m,y:u}=floating_ui_core_browser_min_i(f,g,c))),n=-1)}return{x:m,y:u,placement:g,strategy:r,middlewareData:d}})(t,n,{...r,platform:l})};var console=__webpack_require__("./node_modules/console-browserify/index.js");function react_tooltip_min_h(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===r&&o.firstChild?o.insertBefore(l,o.firstChild):o.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}react_tooltip_min_h(":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}");const react_tooltip_min_f=(e,t,r)=>{let o=null;return function(...l){const n=()=>{o=null,r||e.apply(this,l)};r&&!o&&(e.apply(this,l),o=setTimeout(n,t)),r||(o&&clearTimeout(o),o=setTimeout(n,t))}},react_tooltip_min_w={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},_=(0,react.createContext)({getTooltipData:()=>react_tooltip_min_w});function react_tooltip_min_g(e="DEFAULT_TOOLTIP_ID"){return(0,react.useContext)(_).getTooltipData(e)}const react_tooltip_min_A="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,react_tooltip_min_k=async({elementReference:e=null,tooltipReference:t=null,tooltipArrowReference:r=null,place:o="top",offset:l=10,strategy:n="absolute",middlewares:i=[D(Number(l)),b(),k({padding:5})]})=>{if(!e)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(null===t)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const c=i;return r?(c.push(u({element:r,padding:5})),M(e,t,{placement:o,strategy:n,middleware:c}).then((({x:e,y:t,placement:r,middlewareData:o})=>{var l,n;const i={left:`${e}px`,top:`${t}px`},{x:c,y:a}=null!==(l=o.arrow)&&void 0!==l?l:{x:0,y:0};return{tooltipStyles:i,tooltipArrowStyles:{left:null!=c?`${c}px`:"",top:null!=a?`${a}px`:"",right:"",bottom:"",[null!==(n={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]])&&void 0!==n?n:"bottom"]:"-4px"},place:r}}))):M(e,t,{placement:"bottom",strategy:n,middleware:c}).then((({x:e,y:t,placement:r})=>({tooltipStyles:{left:`${e}px`,top:`${t}px`},tooltipArrowStyles:{},place:r})))};var react_tooltip_min_E={tooltip:"styles-module_tooltip__mnnfp",fixed:"styles-module_fixed__7ciUi",arrow:"styles-module_arrow__K0L3T",noArrow:"styles-module_noArrow__T8y2L",clickable:"styles-module_clickable__Bv9o7",show:"styles-module_show__2NboJ",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};react_tooltip_min_h(".styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;left:0;opacity:0;padding:8px 16px;pointer-events:none;position:absolute;top:0;transition:opacity .3s ease-out;visibility:hidden;width:max-content;will-change:opacity,visibility}.styles-module_fixed__7ciUi{position:fixed}.styles-module_arrow__K0L3T{background:inherit;height:8px;position:absolute;transform:rotate(45deg);width:8px}.styles-module_noArrow__T8y2L{display:none}.styles-module_clickable__Bv9o7{pointer-events:auto}.styles-module_show__2NboJ{opacity:var(--rt-opacity);visibility:visible}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}");const react_tooltip_min_T=({id:t,className:o,classNameArrow:l,variant:n="dark",anchorId:a,anchorSelect:u,place:d="top",offset:p=10,events:v=["hover"],openOnClick:m=!1,positionStrategy:h="absolute",middlewares:y,wrapper:w,delayShow:_=0,delayHide:b=0,float:S=!1,hidden:T=!1,noArrow:x=!1,clickable:N=!1,closeOnEsc:O=!1,style:L,position:R,afterShow:$,afterHide:C,content:H,contentWrapperRef:I,isOpen:W,setIsOpen:j,activeAnchor:q,setActiveAnchor:D})=>{const B=(0,react.useRef)(null),K=(0,react.useRef)(null),X=(0,react.useRef)(null),J=(0,react.useRef)(null),[M,z]=(0,react.useState)(d),[U,F]=(0,react.useState)({}),[P,Z]=(0,react.useState)({}),[Y,G]=(0,react.useState)(!1),[Q,V]=(0,react.useState)(!1),ee=(0,react.useRef)(!1),te=(0,react.useRef)(null),{anchorRefs:re,setActiveAnchor:oe}=react_tooltip_min_g(t),le=(0,react.useRef)(!1),[ne,ie]=(0,react.useState)([]),ce=(0,react.useRef)(!1),ae=m||v.includes("click");react_tooltip_min_A((()=>(ce.current=!0,()=>{ce.current=!1})),[]),(0,react.useEffect)((()=>{if(!Y){const e=setTimeout((()=>{V(!1)}),150);return()=>{clearTimeout(e)}}return()=>null}),[Y]);const se=e=>{ce.current&&(e&&V(!0),setTimeout((()=>{ce.current&&(null==j||j(e),void 0===W&&G(e))}),10))};(0,react.useEffect)((()=>{if(void 0===W)return()=>null;W&&V(!0);const e=setTimeout((()=>{G(W)}),10);return()=>{clearTimeout(e)}}),[W]),(0,react.useEffect)((()=>{Y!==ee.current&&(ee.current=Y,Y?null==$||$():null==C||C())}),[Y]);const ue=(e=b)=>{J.current&&clearTimeout(J.current),J.current=setTimeout((()=>{le.current||se(!1)}),e)},de=e=>{var t;if(!e)return;const r=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==r?void 0:r.isConnected))return D(null),void oe({current:null});_?(X.current&&clearTimeout(X.current),X.current=setTimeout((()=>{se(!0)}),_)):se(!0),D(r),oe({current:r}),J.current&&clearTimeout(J.current)},pe=()=>{N?ue(b||100):b?ue():se(!1),X.current&&clearTimeout(X.current)},ve=({x:e,y:t})=>{react_tooltip_min_k({place:d,offset:p,elementReference:{getBoundingClientRect:()=>({x:e,y:t,width:0,height:0,top:t,left:e,right:e,bottom:t})},tooltipReference:B.current,tooltipArrowReference:K.current,strategy:h,middlewares:y}).then((e=>{Object.keys(e.tooltipStyles).length&&F(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&Z(e.tooltipArrowStyles),z(e.place)}))},me=e=>{if(!e)return;const t=e,r={x:t.clientX,y:t.clientY};ve(r),te.current=r},he=e=>{de(e),b&&ue()},fe=e=>{var t;[document.querySelector(`[id='${a}']`),...ne].some((t=>null==t?void 0:t.contains(e.target)))||(null===(t=B.current)||void 0===t?void 0:t.contains(e.target))||se(!1)},ye=e=>{"Escape"===e.key&&se(!1)},we=react_tooltip_min_f(de,50,!0),_e=react_tooltip_min_f(pe,50,!0);(0,react.useEffect)((()=>{var e,t;const r=new Set(re);ne.forEach((e=>{r.add({current:e})}));const o=document.querySelector(`[id='${a}']`);o&&r.add({current:o}),O&&window.addEventListener("keydown",ye);const l=[];ae?(window.addEventListener("click",fe),l.push({event:"click",listener:he})):(l.push({event:"mouseenter",listener:we},{event:"mouseleave",listener:_e},{event:"focus",listener:we},{event:"blur",listener:_e}),S&&l.push({event:"mousemove",listener:me}));const n=()=>{le.current=!0},i=()=>{le.current=!1,pe()};return N&&!ae&&(null===(e=B.current)||void 0===e||e.addEventListener("mouseenter",n),null===(t=B.current)||void 0===t||t.addEventListener("mouseleave",i)),l.forEach((({event:e,listener:t})=>{r.forEach((r=>{var o;null===(o=r.current)||void 0===o||o.addEventListener(e,t)}))})),()=>{var e,t;ae&&window.removeEventListener("click",fe),O&&window.removeEventListener("keydown",ye),N&&!ae&&(null===(e=B.current)||void 0===e||e.removeEventListener("mouseenter",n),null===(t=B.current)||void 0===t||t.removeEventListener("mouseleave",i)),l.forEach((({event:e,listener:t})=>{r.forEach((r=>{var o;null===(o=r.current)||void 0===o||o.removeEventListener(e,t)}))}))}}),[Q,re,ne,O,v]),(0,react.useEffect)((()=>{let e=null!=u?u:"";!e&&t&&(e=`[data-tooltip-id='${t}']`);const r=new MutationObserver((r=>{const o=[];r.forEach((r=>{if("attributes"===r.type&&"data-tooltip-id"===r.attributeName&&r.target.getAttribute("data-tooltip-id")===t&&o.push(r.target),"childList"===r.type&&(q&&[...r.removedNodes].some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,q))&&(V(!1),se(!1),D(null),!0)})),e))try{const t=[...r.addedNodes].filter((e=>1===e.nodeType));o.push(...t.filter((t=>t.matches(e)))),o.push(...t.flatMap((t=>[...t.querySelectorAll(e)])))}catch(e){}})),o.length&&ie((e=>[...e,...o]))}));return r.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{r.disconnect()}}),[t,u,q]);const be=()=>{R?ve(R):S?te.current&&ve(te.current):react_tooltip_min_k({place:d,offset:p,elementReference:q,tooltipReference:B.current,tooltipArrowReference:K.current,strategy:h,middlewares:y}).then((e=>{ce.current&&(Object.keys(e.tooltipStyles).length&&F(e.tooltipStyles),Object.keys(e.tooltipArrowStyles).length&&Z(e.tooltipArrowStyles),z(e.place))}))};(0,react.useEffect)((()=>{be()}),[Y,q,H,L,d,p,h,R]),(0,react.useEffect)((()=>{if(!(null==I?void 0:I.current))return()=>null;const e=new ResizeObserver((()=>{be()}));return e.observe(I.current),()=>{e.disconnect()}}),[H,null==I?void 0:I.current]),(0,react.useEffect)((()=>{var e;const t=document.querySelector(`[id='${a}']`),r=[...ne,t];q&&r.includes(q)||D(null!==(e=ne[0])&&void 0!==e?e:t)}),[a,ne,q]),(0,react.useEffect)((()=>()=>{X.current&&clearTimeout(X.current),J.current&&clearTimeout(J.current)}),[]),(0,react.useEffect)((()=>{let e=u;if(!e&&t&&(e=`[data-tooltip-id='${t}']`),e)try{const t=Array.from(document.querySelectorAll(e));ie(t)}catch(e){ie([])}}),[t,u]);const ge=!T&&H&&Y&&Object.keys(U).length>0;return Q?react.createElement(w,{id:t,role:"tooltip",className:classnames_default()("react-tooltip",react_tooltip_min_E.tooltip,react_tooltip_min_E[n],o,`react-tooltip__place-${M}`,{[react_tooltip_min_E.show]:ge,[react_tooltip_min_E.fixed]:"fixed"===h,[react_tooltip_min_E.clickable]:N}),style:{...L,...U},ref:B},H,react.createElement(w,{className:classnames_default()("react-tooltip-arrow",react_tooltip_min_E.arrow,l,{[react_tooltip_min_E.noArrow]:x}),style:P,ref:K})):null},react_tooltip_min_x=({content:t})=>react.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),N=({id:t,anchorId:o,anchorSelect:l,content:n,html:a,render:s,className:u,classNameArrow:d,variant:p="dark",place:v="top",offset:m=10,wrapper:h="div",children:f=null,events:y=["hover"],openOnClick:w=!1,positionStrategy:_="absolute",middlewares:b,delayShow:S=0,delayHide:A=0,float:k=!1,hidden:E=!1,noArrow:N=!1,clickable:O=!1,closeOnEsc:L=!1,style:R,position:$,isOpen:C,setIsOpen:H,afterShow:I,afterHide:W})=>{const[j,q]=(0,react.useState)(n),[D,B]=(0,react.useState)(a),[K,X]=(0,react.useState)(v),[J,M]=(0,react.useState)(p),[z,U]=(0,react.useState)(m),[F,P]=(0,react.useState)(S),[Z,Y]=(0,react.useState)(A),[G,Q]=(0,react.useState)(k),[V,ee]=(0,react.useState)(E),[te,re]=(0,react.useState)(h),[oe,le]=(0,react.useState)(y),[ne,ie]=(0,react.useState)(_),[ce,ae]=(0,react.useState)(null),{anchorRefs:se,activeAnchor:ue}=react_tooltip_min_g(t),de=e=>null==e?void 0:e.getAttributeNames().reduce(((t,r)=>{var o;return r.startsWith("data-tooltip-")&&(t[r.replace(/^data-tooltip-/,"")]=null!==(o=null==e?void 0:e.getAttribute(r))&&void 0!==o?o:null),t}),{}),pe=e=>{const t={place:e=>{var t;X(null!==(t=e)&&void 0!==t?t:v)},content:e=>{q(null!=e?e:n)},html:e=>{B(null!=e?e:a)},variant:e=>{var t;M(null!==(t=e)&&void 0!==t?t:p)},offset:e=>{U(null===e?m:Number(e))},wrapper:e=>{var t;re(null!==(t=e)&&void 0!==t?t:h)},events:e=>{const t=null==e?void 0:e.split(" ");le(null!=t?t:y)},"position-strategy":e=>{var t;ie(null!==(t=e)&&void 0!==t?t:_)},"delay-show":e=>{P(null===e?S:Number(e))},"delay-hide":e=>{Y(null===e?A:Number(e))},float:e=>{Q(null===e?k:"true"===e)},hidden:e=>{ee(null===e?E:"true"===e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((([e,r])=>{var o;null===(o=t[e])||void 0===o||o.call(t,r)}))};(0,react.useEffect)((()=>{q(n)}),[n]),(0,react.useEffect)((()=>{B(a)}),[a]),(0,react.useEffect)((()=>{X(v)}),[v]),(0,react.useEffect)((()=>{M(p)}),[p]),(0,react.useEffect)((()=>{U(m)}),[m]),(0,react.useEffect)((()=>{P(S)}),[S]),(0,react.useEffect)((()=>{Y(A)}),[A]),(0,react.useEffect)((()=>{Q(k)}),[k]),(0,react.useEffect)((()=>{ee(E)}),[E]),(0,react.useEffect)((()=>{ie(_)}),[_]),(0,react.useEffect)((()=>{var e;const r=new Set(se);let n=l;if(!n&&t&&(n=`[data-tooltip-id='${t}']`),n)try{document.querySelectorAll(n).forEach((e=>{r.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`)}const i=document.querySelector(`[id='${o}']`);if(i&&r.add({current:i}),!r.size)return()=>null;const c=null!==(e=null!=ce?ce:i)&&void 0!==e?e:ue.current,a=new MutationObserver((e=>{e.forEach((e=>{var t;if(!c||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const r=de(c);pe(r)}))})),s={attributes:!0,childList:!1,subtree:!1};if(c){const e=de(c);pe(e),a.observe(c,s)}return()=>{a.disconnect()}}),[se,ue,ce,o,l]);let ve=f;const me=(0,react.useRef)(null);if(s){const t=s({content:null!=j?j:null,activeAnchor:ce});ve=t?react.createElement("div",{ref:me,className:"react-tooltip-content-wrapper"},t):null}else j&&(ve=j);D&&(ve=react.createElement(react_tooltip_min_x,{content:D}));const he={id:t,anchorId:o,anchorSelect:l,className:u,classNameArrow:d,content:ve,contentWrapperRef:me,place:K,variant:J,offset:z,wrapper:te,events:oe,openOnClick:w,positionStrategy:ne,middlewares:b,delayShow:F,delayHide:Z,float:G,hidden:V,noArrow:N,clickable:O,closeOnEsc:L,style:R,position:$,isOpen:C,setIsOpen:H,afterShow:I,afterHide:W,activeAnchor:ce,setActiveAnchor:e=>ae(e)};return react.createElement(react_tooltip_min_T,{...he})}}}]);