import e,{Component as t}from"react";import r from"prop-types";import n from"react-fast-compare";import i from"invariant";import o from"shallowequal";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},l=Object.keys(u).map(function(e){return u[e]}),p={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},f=Object.keys(p).reduce(function(e,t){return e[p[t]]=t,e},{}),d=function(e,t){for(var r=e.length-1;r>=0;r-=1){var n=e[r];if(Object.prototype.hasOwnProperty.call(n,t))return n[t]}return null},h=function(e){var t=d(e,u.TITLE),r=d(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),r&&t)return r.replace(/%s/g,function(){return t});var n=d(e,"defaultTitle");return t||n||void 0},m=function(e){return d(e,"onChangeClientState")||function(){}},y=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return a({},e,t)},{})},T=function(e,t){return t.filter(function(e){return void 0!==e[u.BASE]}).map(function(e){return e[u.BASE]}).reverse().reduce(function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i+=1){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t},[])},b=function(e,t,r){var n={};return r.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,r){var i={};r.filter(function(e){for(var r,o=Object.keys(e),a=0;a<o.length;a+=1){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||"rel"===r&&"canonical"===e[r].toLowerCase()||"rel"===c&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||"innerHTML"!==s&&"cssText"!==s&&"itemprop"!==s||(r=s)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var o=Object.keys(i),s=0;s<o.length;s+=1){var c=o[s],u=a({},n[c],i[c]);n[c]=u}return e},[]).reverse()},g=function(e){return Array.isArray(e)?e.join(""):e},v=[u.NOSCRIPT,u.SCRIPT,u.STYLE],A=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},C=function(e){return Object.keys(e).reduce(function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n},"")},O=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce(function(t,r){return t[p[r]||r]=e[r],t},t)},E=function(t,r,n){switch(t){case u.TITLE:return{toComponent:function(){return n=r.titleAttributes,(i={key:t=r.title})["data-rh"]=!0,o=O(n,i),[e.createElement(u.TITLE,o,t)];var t,n,i,o},toString:function(){return function(e,t,r,n){var i=C(r),o=g(t);return i?"<"+e+' data-rh="true" '+i+">"+A(o,n)+"</"+e+">":"<"+e+' data-rh="true">'+A(o,n)+"</"+e+">"}(t,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return O(r)},toString:function(){return C(r)}};default:return{toComponent:function(){return function(t,r){return r.map(function(r,n){var i,o=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(e){var t=p[e]||e;"innerHTML"===t||"cssText"===t?o.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:o[t]=r[e]}),e.createElement(t,o)})}(t,r)},toString:function(){return function(e,t,r){return t.reduce(function(t,n){var i=Object.keys(n).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).reduce(function(e,t){var i=void 0===n[t]?t:t+'="'+A(n[t],r)+'"';return e?e+" "+i:i},""),o=n.innerHTML||n.cssText||"",a=-1===v.indexOf(e);return t+"<"+e+' data-rh="true" '+i+(a?"/>":">"+o+"</"+e+">")},"")}(t,r,n)}}}},S=function(e){var t=e.bodyAttributes,r=e.encode,n=e.htmlAttributes,i=e.linkTags,o=e.metaTags,a=e.noscriptTags,s=e.scriptTags,c=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:E(u.BASE,e.baseTag,r),bodyAttributes:E("bodyAttributes",t,r),htmlAttributes:E("htmlAttributes",n,r),link:E(u.LINK,i,r),meta:E(u.META,o,r),noscript:E(u.NOSCRIPT,a,r),script:E(u.SCRIPT,s,r),style:E(u.STYLE,c,r),title:E(u.TITLE,{title:p,titleAttributes:f},r)}},I=e.createContext({}),P=r.shape({setHelmet:r.func,helmetInstances:r.shape({get:r.func,add:r.func,remove:r.func}),document:r.object}),L="undefined"!=typeof document,x=function(t){function r(e){var n;return(n=t.call(this,e)||this).instances=[],n.value={setHelmet:function(e){n.props.context.helmet=e},helmetInstances:{get:function(){return n.instances},add:function(e){n.instances.push(e)},remove:function(e){var t=n.instances.indexOf(e);n.instances.splice(t,1)}}},r.canUseDOM?n.value.document=e.document||document:e.context.helmet=S({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}),n}return s(r,t),r.prototype.render=function(){return e.createElement(I.Provider,{value:this.value},this.props.children)},r}(t);x.canUseDOM=L,x.propTypes={context:r.shape({helmet:r.shape()}),children:r.node.isRequired,document:r.object},x.defaultProps={context:{},document:null},x.displayName="HelmetProvider";var j=function(e,t,r){var n,i=e.head||e.querySelector(u.HEAD),o=i.querySelectorAll(t+"[data-rh]"),a=[].slice.call(o),s=[];return r&&r.length&&r.forEach(function(r){var i=e.createElement(t);for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&("innerHTML"===o?i.innerHTML=r.innerHTML:"cssText"===o?i.styleSheet?i.styleSheet.cssText=r.cssText:i.appendChild(e.createTextNode(r.cssText)):i.setAttribute(o,void 0===r[o]?"":r[o]));i.setAttribute("data-rh","true"),a.some(function(e,t){return n=t,i.isEqualNode(e)})?a.splice(n,1):s.push(i)}),a.forEach(function(e){return e.parentNode.removeChild(e)}),s.forEach(function(e){return i.appendChild(e)}),{oldTags:a,newTags:s}},w=function(e,t,r){var n=e.getElementsByTagName(t)[0];if(n){for(var i=n.getAttribute("data-rh"),o=i?i.split(","):[],a=[].concat(o),s=Object.keys(r),c=0;c<s.length;c+=1){var u=s[c],l=r[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var p=a.indexOf(u);-1!==p&&a.splice(p,1)}for(var f=a.length-1;f>=0;f-=1)n.removeAttribute(a[f]);o.length===a.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},H=function(e,t,r){var n=t.baseTag,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,p=t.styleTags,f=t.title,d=t.titleAttributes;w(e,u.BODY,t.bodyAttributes),w(e,u.HTML,i),function(e,t,r){void 0!==t&&e.title!==t&&(e.title=g(t)),w(e,u.TITLE,r)}(e,f,d);var h={baseTag:j(e,u.BASE,n),linkTags:j(e,u.LINK,o),metaTags:j(e,u.META,a),noscriptTags:j(e,u.NOSCRIPT,s),scriptTags:j(e,u.SCRIPT,l),styleTags:j(e,u.STYLE,p)},m={},y={};Object.keys(h).forEach(function(e){var t=h[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=h[e].oldTags)}),r&&r(),c(t,m,y)},k=null,M=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).rendered=!1,t}s(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return!o(e,this.props)},r.componentDidUpdate=function(){this.emitChange()},r.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},r.emitChange=function(){var e,t=this.props.context,r=t.setHelmet,n=t.document,i=null,o=(e=t.helmetInstances.get().map(function(e){var t=a({},e.props);return delete t.context,t}),{baseTag:T(["href"],e),bodyAttributes:y("bodyAttributes",e),defer:d(e,"defer"),encode:d(e,"encodeSpecialCharacters"),htmlAttributes:y("htmlAttributes",e),linkTags:b(u.LINK,["rel","href"],e),metaTags:b(u.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:b(u.NOSCRIPT,["innerHTML"],e),onChangeClientState:m(e),scriptTags:b(u.SCRIPT,["src","innerHTML"],e),styleTags:b(u.STYLE,["cssText"],e),title:h(e),titleAttributes:y("titleAttributes",e)});x.canUseDOM?function(e,t){var r=e.defaultView;k&&r.cancelAnimationFrame(k),t.defer?k=r.requestAnimationFrame(function(){H(e,t,function(){k=null})}):(H(e,t),k=null)}(n,o):S&&(i=S(o)),r(i)},r.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},r.render=function(){return this.init(),null},t}(t);M.propTypes={context:P.isRequired},M.displayName="HelmetDispatcher";var N=function(t){function r(){return t.apply(this,arguments)||this}s(r,t);var o=r.prototype;return o.shouldComponentUpdate=function(e){return!n(this.props,e)},o.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:t};case u.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},o.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren;return a({},n,((t={})[r.type]=[].concat(n[r.type]||[],[a({},e.newChildProps,this.mapNestedChildrenToProps(r,e.nestedChildren))]),t))},o.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,s=e.nestedChildren;switch(n.type){case u.TITLE:return a({},i,((t={})[n.type]=s,t.titleAttributes=a({},o),t));case u.BODY:return a({},i,{bodyAttributes:a({},o)});case u.HTML:return a({},i,{htmlAttributes:a({},o)});default:return a({},i,((r={})[n.type]=a({},o),r))}},o.mapArrayTypeChildrenToProps=function(e,t){var r=a({},t);return Object.keys(e).forEach(function(t){var n;r=a({},r,((n={})[t]=e[t],n))}),r},o.warnOnInvalidChildren=function(e,t){return i(l.some(function(t){return e.type===t}),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+l.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),i(!t||"string"==typeof t||Array.isArray(t)&&!t.some(function(e){return"string"!=typeof e}),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},o.mapChildrenToProps=function(t,r){var n=this,i={};return e.Children.forEach(t,function(e){if(e&&e.props){var t=e.props,o=t.children,a=c(t,["children"]),s=Object.keys(a).reduce(function(e,t){return e[f[t]||t]=a[t],e},{}),l=e.type;switch("symbol"==typeof l?l=l.toString():n.warnOnInvalidChildren(e,o),l){case u.FRAGMENT:r=n.mapChildrenToProps(o,r);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:i=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:i,newChildProps:s,nestedChildren:o});break;default:r=n.mapObjectTypeChildren({child:e,newProps:r,newChildProps:s,nestedChildren:o})}}}),this.mapArrayTypeChildrenToProps(i,r)},o.render=function(){var t=this.props,r=t.children,n=a({},c(t,["children"]));return r&&(n=this.mapChildrenToProps(r,n)),e.createElement(I.Consumer,null,function(t){return e.createElement(M,a({},n,{context:t}))})},r}(t);N.propTypes={base:r.object,bodyAttributes:r.object,children:r.oneOfType([r.arrayOf(r.node),r.node]),defaultTitle:r.string,defer:r.bool,encodeSpecialCharacters:r.bool,htmlAttributes:r.object,link:r.arrayOf(r.object),meta:r.arrayOf(r.object),noscript:r.arrayOf(r.object),onChangeClientState:r.func,script:r.arrayOf(r.object),style:r.arrayOf(r.object),title:r.string,titleAttributes:r.object,titleTemplate:r.string},N.defaultProps={defer:!0,encodeSpecialCharacters:!0},N.displayName="Helmet";export{N as Helmet,x as HelmetProvider};
//# sourceMappingURL=index.module.js.map