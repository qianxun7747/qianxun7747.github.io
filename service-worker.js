if(!self.define){let e,n={};const t=(t,s)=>(t=new URL(t+".js",s).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const r=e=>t(e,o),u={module:{uri:o},exports:c,require:r};n[o]=Promise.all(s.map((e=>u[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"c72f42e998b21af3c0153ac10cdd69a3"},{url:"css/index.css",revision:"cf8b0b5593baad7d7a54909013bae228"},{url:"/",revision:"index-20230929084920668"},{url:"music/",revision:"music-20230929084920668"},{url:"about/",revision:"about-20230929084920668"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.sinzmise\.eu\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn2\.sinzmise\.eu\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/npm\.onmicrosoft\.cn/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.staticfile\.org/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdn\.staticaly\.com/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/jsd\.cdn\.sininno\.eu\.org/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
