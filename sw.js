(()=>{const t="NaoKuoBlogCacheGitee",e="https://id.v3/",s="blog.naokuo.top",n=()=>caches.match(e).then((t=>t?.json())),r=s=>caches.open(t).then((t=>t.put(e,new Response(JSON.stringify(s)))));self.addEventListener("install",(()=>{self.skipWaiting()})),self.addEventListener("activate",(t=>t.waitUntil(clients.claim())));const a=(t,e,s,n)=>(n||(n={}),n.cache=e?"no-store":"default",s&&(n.mode="cors",n.credentials="same-origin"),fetch(t,n)),c=(t,e,s)=>a(t,e,!0,s),o=t=>{if("localhost"!==t.hostname)for(let e in i){const s=i[e];if(s.match(t))return s}};let i={simple:{clean:!0,search:!1,match:t=>{const e=s;return t.host===e&&t.pathname.match(/(\.(js|css|json)|\/)$/)}},cdn:{clean:!0,match:t=>["cdn.cbd.int","lf26-cdn-tos.bytecdntp.com","lf6-cdn-tos.bytecdntp.com","lf3-cdn-tos.bytecdntp.com","lf9-cdn-tos.bytecdntp.com","cdn.staticfile.org","npm.elemecdn.com","npm.onmicrosoft.cn","fonts.gstatic.com","font.onmicrosoft.cn"].includes(t.host)&&t.pathname.match(/\.(js|css|woff2|woff|ttf|cur)$/)},img:{clean:!0,match:t=>{const e=s;return t.host===e&&t.pathname.match(/(.*?)\.(png|jpe?g|svg|webp|gif|bmp|psd|tiff|tga|ico|eps)/)}}},h=t=>{if(t.startsWith("https://npm.elemecdn.com"))return{timeout:3e3,list:[t,"https://cdn.cbd.int/".concat(new URL(t).pathname),"https://cdn.jsdelivr.net/npm/".concat(new URL(t).pathname)]}},l=()=>!1;const u=(t,e,s=null)=>{if(!s&&!(s=h(t.url)))return c(t,e);const n=s.list,r=new Array(n.length),a=s=>c(new Request(n[s],t),e,{signal:(r[s]=new AbortController).signal}).then((t=>f(t)?{r:t,i:s}:Promise.reject()));return new Promise(((e,c)=>{let o=!0;const i=()=>{o=!1,Promise.any([l,...Array.from({length:n.length-1},((t,e)=>e+1)).map((t=>a(t)))]).then((t=>{for(let e=0;e!==n.length;++e)e!==t.i&&r[e].abort();e(t.r)})).catch((()=>c(`请求 ${t.url} 失败`)))},h=setTimeout(i,s.timeout),l=a(0).then((t=>{o&&(clearTimeout(h),e(t.r))})).catch((()=>(o&&(clearTimeout(h),i()),Promise.reject())))}))},f=t=>t.ok||[301,302,307,308].includes(t.status),m=new Map;self.addEventListener("fetch",(e=>{let s=e.request,n=new URL(s.url);if("GET"!==s.method||!s.url.startsWith("http"))return;if((t=>t.url.startsWith("https://i0.hdslb.com")||t.url.startsWith("https://meting.naokuo.top")||t.url.startsWith("https://twikoo.naokuo.top")||t.url.startsWith("https://friends.naokuo.top")||t.url.startsWith("https://api.i-meto.com")||t.url.startsWith("https://m801.music.126.net")||t.url.startsWith("https://apis.map.qq.com")||t.url.startsWith("https://bu.dusays.com")||t.url.startsWith("https://api.gumengya.com")||t.url.startsWith("https://files.codelife.cc")||t.url.startsWith("https://cravatar.cn"))(s))return;let r,c=n.hostname+n.pathname+n.search;const i=t=>{e.respondWith(r?t.then((t=>{for(let e of r)e(t.clone())})).catch((t=>{for(let e of r)e(t)})).then((()=>(m.delete(c),t))):t)},p=o(n);if(p){let e=`https://${n.host}${n.pathname}`;e.endsWith("/index.html")&&(e=e.substring(0,e.length-10)),p.search&&(e+=n.search),i(caches.match(e).then((n=>n??u(s,!0).then((s=>{if(f(s)){const n=s.clone();caches.open(t).then((t=>t.put(e,n)))}return s})))))}else{const t=h(s.url);i(t?u(s,!1,t):((t,e)=>a(t,!1,l(t),e))(s).catch((t=>new Response(t,{status:499}))))}})),self.addEventListener("message",(t=>{"update"===t.data&&p().then((e=>{e.type="update",t.source.postMessage(e)}))}));const p=async()=>{const s=await u(new Request("/update.json"),!1);if(!f(s))throw`加载 update.json 时遇到异常，状态码：${s.status}`;const a=await s.json(),c=await(t=>n().then((e=>{const{info:s,global:n}=t,a={global:n,local:s[0].version,escape:e?.escape??0};if(!e)return a.escape=0,r(a),{new:a,old:e};let c=new d,o=((t,e,s)=>{for(let n of e){const{version:e,change:r}=n;if(e===s)return!1;if(r)for(let e of r)t.push(new g(e))}return!0})(c,s,e.local);return r(a),o&&(n!==e.global?c.force=!0:c.refresh=!0),{list:c,new:a,old:e}})))(a);if(c.list){const s=await(s=>caches.open(t).then((t=>t.keys().then((n=>Promise.all(n.map((async n=>{const r=n.url;return r!==e&&s.match(r)?(t.delete(n),r):null}))))).then((t=>t.filter((t=>t)))))))(c.list);c.list=s?.length?s:null}return c};function d(){const t=[];this.push=e=>{t.push(e)},this.match=e=>{if(this.force)return!0;if(e=new URL(e),this.refresh)return o(e).clean;for(let s of t)if(s.match(e))return!0;return!1}}function g(t){const e=e=>{const s=t.value;if(Array.isArray(s)){for(let t of s)if(e(t))return!0;return!1}return e(s)};this.match=(()=>{switch(t.flag){case"html":return t=>t.pathname.match(/(\/|\.html)$/);case"end":return t=>e((e=>t.href.endsWith(e)));case"begin":return t=>e((e=>t.pathname.startsWith(e)));case"str":return t=>e((e=>t.href.includes(e)));case"reg":return t=>e((e=>t.href.match(new RegExp(e,"i"))));default:throw`未知表达式：${JSON.stringify(t)}`}})()}})();