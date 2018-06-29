!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};t.default={define:function(e,t){if(r[e])console.warn("Component '"+e+"' is already defined - skipping.");else{r[e]={observer:new window.MutationObserver(function(n){console.log("registry dom mutation");for(var r=n.filter(function(e){return"childList"===e.type}).filter(function(e){return e.addedNodes.length>0}).reduce(function(e,t){return e.concat.apply([],t.addedNodes)},[]).filter(function(e){return e.querySelectorAll}).reduce(function(t,n){return t.concat.apply([],n.querySelectorAll(e))},[]),o=0;o<r.length;o++)return new t(r[o])})},r[e].observer.observe(document,{childList:!0,subtree:!0});for(var n=document.querySelectorAll(e),o=0;o<n.length;o++)return new t(n[o])}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineProperty=function(e,t,n,r){Object.defineProperty(e,n,{set:function(o){e["__"+n]=o,t[n]=o,r.reflectToAttribute&&o!==t.getAttribute(n)&&t.setAttribute(n,o),r.onChange&&r.onChange(o)},get:function(){return e["__"+n]}}),Object.defineProperty(t,n,{set:function(t){e[n]!==t&&(e[n]=t)},get:function(){return e["__"+n]}}),new window.MutationObserver(function(t){console.log("Property mutation"),t.forEach(function(t){if(t.attributeName===n){var r=t.target.getAttribute(n);console.log(e[n],r),e[n]!==r&&(e[n]=t.target.getAttribute(n))}})}).observe(t,{attributes:!0}),void 0!==r.value&&(e[n]=r.value);e[n]=t.getAttribute(n)||e[n]},t.exposeFunction=function(e,t,n){t[n]=e[n]}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.state={},this._subscribers=[]}return r(e,[{key:"init",value:function(e){this.state=e}},{key:"subscribe",value:function(e){this._subscribers.push(e)}},{key:"commit",value:function(e){Object.assign(this.state,e);for(var t=0;t<this._subscribers.length;t++)this._subscribers[t](this.state)}}]),e}();t.default=new o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StateComponent=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n(0)),i=n(1),u=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var f=t.StateComponent=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root=t,u.default.init({foo:"foo",bar:"bar"}),(0,i.exposeFunction)(this,this.root,"flipFoo"),(0,i.exposeFunction)(this,this.root,"flipBar"),u.default.subscribe(this.render.bind(this)),this.render(u.default.state)}return r(e,[{key:"render",value:function(e){var t="\n      <p>foo: "+e.foo+" </p>\n      <p>bar: "+e.bar+" </p>\n    ";this.root.innerHTML=t}},{key:"flipFoo",value:function(){u.default.commit({foo:u.default.state.foo.split("").reverse().join("")})}},{key:"flipBar",value:function(){u.default.commit({bar:u.default.state.bar.split("").reverse().join("")})}}]),e}();o.default.define("state-component",f)}]);