!function(){"use strict";var e,t,n,r,o,u,i,c={},a={};function f(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}},r=!0;try{c[e].call(n.exports,n,n.exports,f),r=!1}finally{r&&delete a[e]}return n.loaded=!0,n.exports}f.m=c,e=[],f.O=function(t,n,r,o){if(n){o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,r,o];return}for(var i=1/0,u=0;u<e.length;u++){for(var n=e[u][0],r=e[u][1],o=e[u][2],c=!0,a=0;a<n.length;a++)i>=o&&Object.keys(f.O).every(function(e){return f.O[e](n[a])})?n.splice(a--,1):(c=!1,o<i&&(i=o));if(c){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce(function(t,n){return f.f[n](e,t),t},[]))},f.u=function(e){return 675===e?"static/chunks/675-9e92e5f4433b1ebe.js":"static/chunks/"+(885===e?"75fc9c18":e)+"."+({93:"64aea9002ef68e6a",145:"a8684db3c46af9b8",165:"455a87a80b4ee818",226:"547885dcb8a19a7b",274:"8a1a6ffd970edbf1",323:"f319e6c2a4506d21",357:"3ce96017e4bd4287",539:"97ef51a5d6c5e580",616:"a06d31305a49e4c9",682:"147b03020e278612",745:"9c2e62d062aa759b",885:"191f4e46a5fca1eb",941:"227eb44f00f74e0f",944:"6e31d8edd91b446a"})[e]+".js"},f.miniCssF=function(e){return"static/css/c8247f225e621417.css"},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="_N_E:",f.l=function(e,r,o,u){if(t[e]){t[e].push(r);return}if(void 0!==o)for(var i,c,a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var l=a[d];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=f.tu(e)),t[e]=[r];var s=function(n,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach(function(e){return e(r)}),n)return n(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},f.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},f.tu=function(e){return f.tt().createScriptURL(e)},f.p="/politics-on-social//_next/",o={272:0},f.f.j=function(e,t){var n=f.o(o,e)?o[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(272!=e){var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var u=f.p+f.u(e),i=Error(),c=function(t){if(f.o(o,e)&&(0!==(n=o[e])&&(o[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",i.name="ChunkLoadError",i.type=r,i.request=u,n[1](i)}};f.l(u,c,"chunk-"+e,e)}else o[e]=0}},f.O.j=function(e){return 0===o[e]},u=function(e,t){var n,r,u=t[0],i=t[1],c=t[2],a=0;if(u.some(function(e){return 0!==o[e]})){for(n in i)f.o(i,n)&&(f.m[n]=i[n]);if(c)var d=c(f)}for(e&&e(t);a<u.length;a++)r=u[a],f.o(o,r)&&o[r]&&o[r][0](),o[r]=0;return f.O(d)},(i=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(u.bind(null,0)),i.push=u.bind(null,i.push.bind(i))}();