/*!
 * version: 1.0.3
 * docs: https://github.com/yeild/secrage
 * 
 */
module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.localStorage=t.sessionStorage=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),u=n(2);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=t}return o(e,[{key:"setItem",value:function(e,t){this.storage.setItem((0,r.btoa)(e),(0,r.btoa)((0,r.encode)((0,u.stringify)(t))))}},{key:"getItem",value:function(e){return(0,u.parse)((0,r.decode)((0,r.atob)(this.storage.getItem((0,r.btoa)(e)))))}},{key:"removeItem",value:function(e){this.storage.removeItem((0,r.btoa)(e))}},{key:"clear",value:function(){this.storage.clear()}}]),e}();t.sessionStorage=new i(window.sessionStorage),t.localStorage=new i(window.localStorage)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.atob=function(e){return e?window.atob?window.atob(e):e:""},t.btoa=function(e){return e?window.btoa?window.btoa(e):e:""},t.encode=function(e){return e?window.encodeURIComponent(e):""},t.decode=function(e){return e?window.decodeURIComponent(e):""}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parse=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?"":JSON.parse(e)},t.stringify=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return null===e?"":JSON.stringify(e)}}]);