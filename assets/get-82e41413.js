import{c0 as u,c1 as f,c2 as o,bN as p}from"./index-95e0417b.js";var h=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,y=/^\w*$/;function d(r,n){if(u(r))return!1;var e=typeof r;return e=="number"||e=="symbol"||e=="boolean"||r==null||f(r)?!0:y.test(r)||!h.test(r)||n!=null&&r in Object(n)}var m="Expected a function";function c(r,n){if(typeof r!="function"||n!=null&&typeof n!="function")throw new TypeError(m);var e=function(){var t=arguments,a=n?n.apply(this,t):t[0],i=e.cache;if(i.has(a))return i.get(a);var s=r.apply(this,t);return e.cache=i.set(a,s)||i,s};return e.cache=new(c.Cache||o),e}c.Cache=o;var g=500;function l(r){var n=c(r,function(t){return e.size===g&&e.clear(),t}),e=n.cache;return n}var E=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,C=/\\(\\)?/g,I=l(function(r){var n=[];return r.charCodeAt(0)===46&&n.push(""),r.replace(E,function(e,t,a,i){n.push(a?i.replace(C,"$1"):t||e)}),n});const P=I;function T(r,n){return u(r)?r:d(r,n)?[r]:P(p(r))}var w=1/0;function N(r){if(typeof r=="string"||f(r))return r;var n=r+"";return n=="0"&&1/r==-w?"-0":n}function z(r,n){n=T(n,r);for(var e=0,t=n.length;r!=null&&e<t;)r=r[N(n[e++])];return e&&e==t?r:void 0}function _(r,n,e){var t=r==null?void 0:z(r,n);return t===void 0?e:t}export{z as b,T as c,_ as g,d as i,N as t};
