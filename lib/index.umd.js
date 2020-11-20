!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("prop-types"),require("react-fast-compare"),require("invariant"),require("shallowequal")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","react-fast-compare","invariant","shallowequal"],t):t((e=e||self).reactHelmetAsync={},e.react,e.propTypes,e.reactFastCompare,e.invariant,e.shallowequal)}(this,function(e,t,r,n,o,i){var a="default"in t?t.default:t;function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n,o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o,i=i&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i;var l={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},p=Object.keys(l).map(function(e){return l[e]}),f={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},d=Object.keys(f).reduce(function(e,t){return e[f[t]]=t,e},{}),h=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},y=function(e){var t=h(e,l.TITLE),r=h(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,function(){return t});var n=h(e,"defaultTitle");return t||n||void 0},m=function(e){return h(e,"onChangeClientState")||function(){}},T=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return s({},e,t)},{})},b=function(e,t){return t.filter(function(e){return void 0!==e[l.BASE]}).map(function(e){return e[l.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o+=1){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t},[])},g=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var o={};r.filter(function(e){for(var r,i=Object.keys(e),a=0;a<i.length;a+=1){var s=i[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a+=1){var c=i[a],u=s({},n[c],o[c]);n[c]=u}return e},[]).reverse()},v=function(e){return Array.isArray(e)?e.join(""):e},A=[l.NOSCRIPT,l.SCRIPT,l.STYLE],C=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},O=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},E=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce(function(t,r){return t[f[r]||r]=e[r],t},t)},S=function(e,t,r){switch(e){case l.TITLE:return{toComponent:function(){return r=t.titleAttributes,(n={key:e=t.title})["data-rh"]=!0,o=E(r,n),[a.createElement(l.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=O(r),i=v(t);return o?"<"+e+' data-rh="true" '+o+">"+C(i,n)+"</"+e+">":"<"+e+' data-rh="true">'+C(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return E(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,r){var n,o=((n={key:r})["data-rh"]=!0,n);return Object.keys(t).forEach(function(e){var r=f[e]||e;"innerHTML"===r||"cssText"===r?o.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:o[r]=t[e]}),a.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var o=Object.keys(n).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).reduce(function(e,t){var o=void 0===n[t]?t:t+'="'+C(n[t],r)+'"';return e?e+" "+o:o},""),i=n.innerHTML||n.cssText||"",a=-1===A.indexOf(e);return t+"<"+e+' data-rh="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,r)}}}},P=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,s=e.scriptTags,c=e.styleTags,u=e.title,p=void 0===u?"":u,f=e.titleAttributes;return{base:S(l.BASE,e.baseTag,r),bodyAttributes:S("bodyAttributes",t,r),htmlAttributes:S("htmlAttributes",n,r),link:S(l.LINK,o,r),meta:S(l.META,i,r),noscript:S(l.NOSCRIPT,a,r),script:S(l.SCRIPT,s,r),style:S(l.STYLE,c,r),title:S(l.TITLE,{title:p,titleAttributes:f},r)}},j=a.createContext({}),w=r.shape({setHelmet:r.func,helmetInstances:r.shape({get:r.func,add:r.func,remove:r.func}),document:r.object}),x="undefined"!=typeof document,I=function(e){function t(r){var n;return(n=e.call(this,r)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},t.canUseDOM?n.value.document=r.document||document:r.context.helmet=P({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}),n}return c(t,e),t.prototype.render=function(){return a.createElement(j.Provider,{value:this.value},this.props.children)},t}(t.Component);I.canUseDOM=x,I.propTypes={context:r.shape({helmet:r.shape()}),children:r.node.isRequired,document:r.object},I.defaultProps={context:{},document:null},I.displayName="HelmetProvider";var L=function(e,t,r){var n,o=e.head||e.querySelector(l.HEAD),i=o.querySelectorAll(t+"[data-rh]"),a=[].slice.call(i),s=[];return r&&r.length&&r.forEach(function(r){var o=e.createElement(t);for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&("innerHTML"===i?o.innerHTML=r.innerHTML:"cssText"===i?o.styleSheet?o.styleSheet.cssText=r.cssText:o.appendChild(e.createTextNode(r.cssText)):o.setAttribute(i,void 0===r[i]?"":r[i]));o.setAttribute("data-rh","true"),a.some(function(e,t){return n=t,o.isEqualNode(e)})?a.splice(n,1):s.push(o)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),s.forEach(function(e){return o.appendChild(e)}),{oldTags:a,newTags:s}},H=function(e,t,r){var n=e.getElementsByTagName(t)[0];if(n){for(var o=n.getAttribute("data-rh"),i=o?o.split(","):[],a=[].concat(i),s=Object.keys(r),c=0;c<s.length;c+=1){var u=s[c],l=r[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var p=a.indexOf(u);-1!==p&&a.splice(p,1)}for(var f=a.length-1;f>=0;f-=1)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},k=function(e,t,r){var n=t.baseTag,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,u=t.scriptTags,p=t.styleTags,f=t.title,d=t.titleAttributes;H(e,l.BODY,t.bodyAttributes),H(e,l.HTML,o),function(e,t,r){void 0!==t&&e.title!==t&&(e.title=v(t)),H(e,l.TITLE,r)}(e,f,d);var h={baseTag:L(e,l.BASE,n),linkTags:L(e,l.LINK,i),metaTags:L(e,l.META,a),noscriptTags:L(e,l.NOSCRIPT,s),scriptTags:L(e,l.SCRIPT,u),styleTags:L(e,l.STYLE,p)},y={},m={};Object.keys(h).forEach(function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(m[e]=h[e].oldTags)}),r&&r(),c(t,y,m)},M=null,N=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}c(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!i(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t=this.props.context,r=t.setHelmet,n=t.document,o=null,i=(e=t.helmetInstances.get().map(function(e){var t=s({},e.props);return delete t.context,t}),{baseTag:b(["href"],e),bodyAttributes:T("bodyAttributes",e),defer:h(e,"defer"),encode:h(e,"encodeSpecialCharacters"),htmlAttributes:T("htmlAttributes",e),linkTags:g(l.LINK,["rel","href"],e),metaTags:g(l.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:g(l.NOSCRIPT,["innerHTML"],e),onChangeClientState:m(e),scriptTags:g(l.SCRIPT,["src","innerHTML"],e),styleTags:g(l.STYLE,["cssText"],e),title:y(e),titleAttributes:T("titleAttributes",e)});I.canUseDOM?function(e,t){var r=e.defaultView;M&&r.cancelAnimationFrame(M),t.defer?M=r.requestAnimationFrame(function(){k(e,t,function(){M=null})}):(k(e,t),M=null)}(n,i):P&&(o=P(i)),r(o)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(t.Component);N.propTypes={context:w.isRequired},N.displayName="HelmetDispatcher";var R=function(e){function t(){return e.apply(this,arguments)||this}c(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!n(this.props,e)},r.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.SCRIPT:case l.NOSCRIPT:return{innerHTML:t};case l.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},r.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return s({},n,((t={})[r.type]=[].concat(n[r.type]||[],[s({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},r.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case l.TITLE:return s({},o,((t={})[n.type]=a,t.titleAttributes=s({},i),t));case l.BODY:return s({},o,{bodyAttributes:s({},i)});case l.HTML:return s({},o,{htmlAttributes:s({},i)});default:return s({},o,((r={})[n.type]=s({},i),r))}},r.mapArrayTypeChildrenToProps=function(e,t){var r=s({},t);return Object.keys(e).forEach(function(t){var n;r=s({},r,((n={})[t]=e[t],n))}),r},r.warnOnInvalidChildren=function(e,t){return o(p.some(function(t){return e.type===t}),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+p.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),o(!t||"string"==typeof t||Array.isArray(t)&&!t.some(function(e){return"string"!=typeof e}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},r.mapChildrenToProps=function(e,t){var r=this,n={};return a.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=u(o,["children"]),s=Object.keys(a).reduce(function(e,t){return e[d[t]||t]=a[t],e},{}),c=e.type;switch("symbol"==typeof c?c=c.toString():r.warnOnInvalidChildren(e,i),c){case l.FRAGMENT:t=r.mapChildrenToProps(i,t);break;case l.LINK:case l.META:case l.NOSCRIPT:case l.SCRIPT:case l.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:s,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:i})}}}),this.mapArrayTypeChildrenToProps(n,t)},r.render=function(){var e=this.props,t=e.children,r=s({},u(e,["children"]));return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(j.Consumer,null,function(e){return a.createElement(N,s({},r,{context:e}))})},t}(t.Component);R.propTypes={base:r.object,bodyAttributes:r.object,children:r.oneOfType([r.arrayOf(r.node),r.node]),defaultTitle:r.string,defer:r.bool,encodeSpecialCharacters:r.bool,htmlAttributes:r.object,link:r.arrayOf(r.object),meta:r.arrayOf(r.object),noscript:r.arrayOf(r.object),onChangeClientState:r.func,script:r.arrayOf(r.object),style:r.arrayOf(r.object),title:r.string,titleAttributes:r.object,titleTemplate:r.string},R.defaultProps={defer:!0,encodeSpecialCharacters:!0},R.displayName="Helmet",e.Helmet=R,e.HelmetProvider=I});
//# sourceMappingURL=index.umd.js.map