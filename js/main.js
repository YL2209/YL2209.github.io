var themeColorMeta,pageHeaderEl,navMusicEl,consoleEl,selectRandomSong=[],musicVolume=.8,changeMusicListFlag=!1,defaultPlayMusicList=[],naokuo_musicFirst=!1,naokuo_musicPlaying=!1;document.addEventListener("DOMContentLoaded",(function(){let e,t,n=!1;const o=n=>{const o=e=>Array.from(e).reduce(((e,t)=>e+t.offsetWidth),0);if(n){const n=o(document.querySelector("#blog_name > a").children),s=o(document.getElementById("menus").children);e=n+s,t=document.getElementById("nav")}const s=window.innerWidth<=768||e>t.offsetWidth-120;t.classList.toggle("hide-menu",s)},s=()=>{btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0},i=()=>{const e=document.body;e.style.overflow="",e.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1},c=()=>{const e=GLOBAL_CONFIG.highlight;if(!e)return;const{highlightCopy:t,highlightLang:n,highlightHeightLimit:o,plugin:s}=e,i=GLOBAL_CONFIG_SITE.isHighlightShrink,c=t||n||void 0!==i,l="highlight.js"===s?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if(!c&&!o||!l.length)return;const a="prismjs"===s,d=!0===i?"closed":"",r=void 0!==i?'<i class="fas fa-angle-down expand"></i>':"",u=t?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"",m=(e,t)=>{if(void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(t);else{const n=e.previousElementSibling;n.textContent=t,n.style.opacity=1,setTimeout((()=>{n.style.opacity=0}),800)}},g=e=>{const t=e.parentNode;t.classList.add("copy-true");const n=window.getSelection(),o=document.createRange(),s=a?"pre code":"table .code pre";var i;o.selectNodeContents(t.querySelectorAll(`${s}`)[0]),n.removeAllRanges(),n.addRange(o),i=e.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),m(i,GLOBAL_CONFIG.copy.success)):m(i,GLOBAL_CONFIG.copy.noSupport),n.removeAllRanges(),t.classList.remove("copy-true")},h=function(e){const t=e.target.classList;t.contains("expand")?this.classList.toggle("closed"):t.contains("copy-button")&&g(this)},f=function(){this.classList.toggle("expand-done")},y=(e,t,n)=>{const s=document.createDocumentFragment();if(c){const t=document.createElement("div");t.className=`highlight-tools ${d}`,t.innerHTML=r+e+u,btf.addEventListenerPjax(t,"click",h),s.appendChild(t)}if(o&&t.offsetHeight>o+30){const e=document.createElement("div");e.className="code-expand-btn",e.innerHTML='<i class="fas fa-angle-double-down"></i>',btf.addEventListenerPjax(e,"click",f),s.appendChild(e)}"hl"===n?t.insertBefore(s,t.firstChild):t.parentNode.insertBefore(s,t)};a?l.forEach((e=>{if(n){const t=`<div class="code-lang">${e.getAttribute("data-language")||"Code"}</div>`;btf.wrap(e,"figure",{class:"highlight"}),y(t,e)}else btf.wrap(e,"figure",{class:"highlight"}),y("",e)})):l.forEach((e=>{if(n){let t=e.getAttribute("class").split(" ")[1];"plain"!==t&&void 0!==t||(t="Code");y(`<div class="code-lang">${t}</div>`,e,"hl")}else y("",e,"hl")}))},l=function(e){const t=e=>{let t="";const n=e=>e.replace(/"/g,"&quot;");return e.forEach((e=>{const o=e.alt?`alt="${n(e.alt)}"`:"",s=e.title?`title="${n(e.title)}"`:"",i=e.address?e.address:"",c=`\n        <div class="fj-gallery-item">\n          ${i?`<div class="tag-address">${i}</div>`:""}\n          <img src="${e.url}" ${o+s}>\n        </div>\n      `;t+=c})),t},n=(e,n,o)=>{const s=Number(o),i=n.length;return i>s?e.insertAdjacentHTML("beforeend",t(n.splice(0,s))):(e.insertAdjacentHTML("beforeend",t(n)),e.classList.remove("lazyload")),window.lazyLoadInstance&&window.lazyLoadInstance.update(),i>s?s:i},o=(e,o)=>{const s=e.getAttribute("data-limit")??o.length;if(!e.classList.contains("lazyload")||o.length<s)e.innerHTML=t(o),e.nextElementSibling.style.display="none";else if(!e.classList.contains("btn_album_detail_lazyload")||e.classList.contains("page_img_lazyload")){n(e,o,s);const t=()=>{const t=n(e,o,s);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${t})`)),btf.loadLightbox(e.querySelectorAll("img")),t<Number(s)&&i.unobserve(e.nextElementSibling)},i=new IntersectionObserver(((e,n)=>{e.forEach((e=>{e.isIntersecting&&setTimeout(t(),100)}))}));i.observe(e.nextElementSibling)}else{n(e,o,s);const t=()=>{const i=n(e,o,s);fjGallery(e,"appendImages",e.querySelectorAll(`.fj-gallery-item:nth-last-child(-n+${i})`)),btf.loadLightbox(e.querySelectorAll("img")),i<s&&e.nextElementSibling.removeEventListener("click",t)};e.nextElementSibling.addEventListener("click",t)}naokuo.initJustifiedGallery(e),btf.loadLightbox(e.querySelectorAll("img")),window.lazyLoadInstance&&window.lazyLoadInstance.update()},s=()=>{e.forEach((e=>{e.classList.contains("url")?(async e=>{const t=await fetch(e);return await t.json()})(e.textContent).then((t=>{o(e,t)})):o(e,JSON.parse(e.textContent))}))};window.fjGallery?s():(getCSS(`${GLOBAL_CONFIG.source.justifiedGallery.css}`),getScript(`${GLOBAL_CONFIG.source.justifiedGallery.js}`).then(s))},a=()=>{const e=document.getElementById("rightside"),t=window.innerHeight+56;let n=0;const o=document.getElementById("page-header"),s="undefined"!=typeof chatBtn,i=GLOBAL_CONFIG.percent.rightside;if(document.body.scrollHeight<=t)return void e.classList.add("rightside-show");let c="";const l=btf.throttle((()=>{const l=window.scrollY||document.documentElement.scrollTop,d=(e=>{const t=e>n;return n=e,t})(l);l>56?(""===c&&(o.classList.add("nav-fixed"),e.classList.add("rightside-show")),d?"down"!==c&&(o.classList.remove("nav-visible"),s&&window.chatBtn.hide(),c="down"):"up"!==c&&(o.classList.add("nav-visible"),s&&window.chatBtn.show(),c="up")):(c="",0===l&&o.classList.remove("nav-fixed","nav-visible"),e.classList.remove("rightside-show")),i&&(e=>{const t=btf.getScrollPercent(e,document.body),n=document.getElementById("go-up");t<95?(n.classList.add("show-percent"),n.querySelector(".scroll-percent").textContent=t):n.classList.remove("show-percent")})(l),document.body.scrollHeight<=t&&e.classList.add("rightside-show"),function(e){let t=h.clientHeight;const n=document.documentElement.clientHeight,o=t>n?t-n:document.documentElement.scrollHeight-n,s=e/o,i=Math.round(100*s),c=i>100?100:i<=0?1:i;function l(e){if(!e)return;if("none"==window.getComputedStyle(e).getPropertyValue("display"))return;const t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return e.offsetTop-document.documentElement.scrollTop<=t}m.textContent=c,l(f||c>90)&&e>20?(g.classList.add("long"),m.textContent="返回顶部"):(g.classList.remove("long"),m.textContent=c);if(u){const t=e%document.documentElement.clientHeight;!a&&t+100>=document.documentElement.clientHeight?(console.info(t,document.documentElement.clientHeight),setTimeout((()=>{waterfall("#waterfall")}),500)):setTimeout((()=>{u&&waterfall("#waterfall")}),500)}}(l)}),300);let a=!1;const d=document.getElementById("nav-music"),r=document.getElementById("footer"),u=document.getElementById("waterfall"),m=document.getElementById("percent"),g=document.getElementById("nav-totop"),h=document.getElementById("body-wrap");let f=document.getElementById("post-comment")||document.getElementById("footer");r&&naokuo.intersectionObserver((()=>{r&&d&&768<document.body.clientWidth&&(d.style.bottom="-10px",d.style.opacity="0"),a=!0}),(()=>{r&&d&&768<document.body.clientWidth&&(d.style.bottom="20px",d.style.opacity="1")}))().observe(r),l(),btf.addEventListenerPjax(window,"scroll",l,{passive:!0})},d=()=>{const e=GLOBAL_CONFIG_SITE.isToc,t=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(!n||!e&&!t)return;let o,s,i,c,l;if(e){const e=document.getElementById("card-toc");s=e.querySelector(".toc-content"),o=s.querySelectorAll(".toc-link"),c=e.querySelector(".toc-percentage"),l=s.classList.contains("is-expand");const t=t=>{const n=t.target.closest(".toc-link");n&&(t.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(n.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&e.classList.remove("open"))};btf.addEventListenerPjax(s,"click",t),i=e=>{const t=e.getBoundingClientRect().top,n=s.scrollTop;t>document.documentElement.clientHeight-100&&(s.scrollTop=n+150),t<100&&(s.scrollTop=n-150)}}const a=n.querySelectorAll("h1,h2,h3,h4,h5,h6");let d="";const r=btf.throttle((()=>{const r=window.scrollY||document.documentElement.scrollTop;e&&GLOBAL_CONFIG.percent.toc&&(c.textContent=btf.getScrollPercent(r,n)),(n=>{if(0===n)return!1;let c="",r="";if(a.forEach(((e,t)=>{if(n>btf.getEleTop(e)-80){const n=e.id;c=n?"#"+encodeURI(n):"",r=t}})),d!==r&&(t&&btf.updateAnchor(c),d=r,e)){if(s.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),""===c)return;const e=o[r];if(e.classList.add("active"),setTimeout((()=>{i(e)}),0),l)return;let t=e.parentNode;for(;!t.matches(".toc");t=t.parentNode)t.matches("li")&&t.classList.add("active")}})(r)}),100);btf.addEventListenerPjax(window,"scroll",r,{passive:!0})},r=e=>{const t=(window.globalFn||{}).themeChange||{};t&&Object.keys(t).forEach((n=>{const o=t[n];["disqus","disqusjs"].includes(n)?setTimeout((()=>o(e)),300):o(e)}))},u={readmode:()=>{const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t);const n=()=>{e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",n)};t.addEventListener("click",n)},darkmode:()=>{const e="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"===e?(activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),saveToLocal.set("theme",e,2),r(e)},"rightside-config":e=>{const t=e.firstElementChild;t.classList.contains("show")&&(t.classList.add("status"),setTimeout((()=>{t.classList.remove("status")}),300)),t.classList.toggle("show")},"go-up":()=>{btf.scrollToDest(0,500)},"hide-aside-btn":()=>{const e=document.documentElement.classList,t=e.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",t,2),e.toggle("hide-aside")},"mobile-toc-button":e=>{const t=document.getElementById("card-toc");t.style.transition="transform 0.3s ease-in-out",t.classList.toggle("open"),t.addEventListener("transitionend",(()=>{t.style.transition=""}),{once:!0})},"chat-btn":()=>{window.chatBtnFn()},translateLink:()=>{window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",(function(e){const t=e.target.closest("[id]");t&&u[t.id]&&u[t.id](this)}));const m=()=>{const e=document.querySelectorAll("#article-container .hide-button");if(!e.length)return;const t=function(e){this.classList.add("open");const t=this.nextElementSibling.querySelectorAll(".gallery-container");t.length&&addJustifiedGallery(t)};e.forEach((e=>{e.addEventListener("click",t,{once:!0})}))},g=()=>{const e=document.querySelectorAll("#article-container .tabs");if(!e.length)return;const t=(e,t)=>{Array.from(e).forEach((e=>{e.classList.remove("active"),e!==t&&e.id!==t||e.classList.add("active")}))},n=(e,n)=>{btf.addEventListenerPjax(e.firstElementChild,"click",(function(e){const o=e.target.closest("button");if(o.classList.contains("active"))return;t(this.children,o),this.classList.remove("no-default");const s=o.getAttribute("data-href"),i=this.nextElementSibling;if(t(i.children,s),n){const e=i.querySelectorAll(`#${s} .fj-gallery`);e.length>0&&naokuo.initJustifiedGallery(e)}}))};e.forEach((e=>{const t=!!e.querySelectorAll(".gallery-container");n(e,t),(e=>{btf.addEventListenerPjax(e.lastElementChild,"click",(t=>{t.target.closest("button")&&btf.scrollToDest(btf.getEleTop(e),300)}))})(e)}))},h=function(e){e.forEach((e=>{const t=e.getAttribute("datetime");e.textContent=btf.diffDate(t,!0),e.style.display="inline"}))};window.onkeydown=function(e){123===e.keyCode&&btf.snackbarShow("开发者模式已打开，请遵循GPL协议",!1)};function f(e,t){const n=document.getElementById(e);if(n&&t){const e=n.querySelector(t);e&&e.addEventListener("click",u.darkmode)}else n&&n.addEventListener("click",u.darkmode)}window.refreshFn=function(){o(!0),t.classList.add("show"),navMusicEl=document.getElementById("nav-music"),consoleEl=document.getElementById("console"),f("console",".darkmode_switchbutton"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(()=>{const{limitDay:e,messagePrev:t,messageNext:n,position:o}=GLOBAL_CONFIG.noticeOutdate,s=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(s>=e){const e=document.createElement("div");e.className="post-outdate-notice",e.textContent=`${t} ${s} ${n}`;const i=document.getElementById("article-container");"top"===o?i.insertBefore(e,i.firstChild):i.appendChild(e)}})(),GLOBAL_CONFIG.relativeDate.post&&h(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&h(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(()=>{const e=document.getElementById("runtimeshow");if(e){const t=e.getAttribute("data-publishDate");e.textContent=`${btf.diffDate(t)} ${GLOBAL_CONFIG.runtime}`}})(),(()=>{const e=document.getElementById("last-push-date");if(e){const t=e.getAttribute("data-lastPushDate");e.textContent=btf.diffDate(t,!0)}})(),(()=>{const e=document.querySelector("#aside-cat-list.expandBtn");if(!e)return;btf.addEventListenerPjax(e,"click",(e=>{const t=e.target;"I"===t.nodeName&&(e.preventDefault(),t.parentNode.classList.toggle("expand"))}),!0)})()),d(),GLOBAL_CONFIG_SITE.isHome&&(()=>{const e=document.getElementById("scroll-down");e&&btf.addEventListenerPjax(e,"click",(()=>{btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))})(),c(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((e=>{const t=e.title||e.alt;if(!t)return;const n=document.createElement("div");n.className="img-alt is-center",n.textContent=t,e.insertAdjacentElement("afterend",n)})),a();const e=document.querySelectorAll("#content-inner .fj-gallery");e.length&&l(e),btf.removeGlobalFnEvent("justifiedGallery");const n=document.querySelectorAll("#article-container .gallery-container");n.length&&addJustifiedGallery(n),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(()=>{const e=document.querySelectorAll("#article-container table");e.length&&e.forEach((e=>{e.closest(".highlight")||btf.wrap(e,"div",{class:"table-wrap"})}))})(),m(),g(),(()=>{const e=document.getElementById("switch-btn");if(!e)return;let t=!1;const n=document.getElementById("post-comment");btf.addEventListenerPjax(e,"click",(()=>{n.classList.toggle("move"),t||"function"!=typeof loadOtherComment||(t=!0,loadOtherComment())}))})(),btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",(()=>{s()})),document.getElementById("page-name").innerText=document.title.split(` | ${GLOBAL_CONFIG_SITE.configTitle}`)[0],naokuo.setValueToBodyType(),naokuo.removeBodyPaceClass(),naokuo.getCustomPlayList(),naokuo.addEventListenerConsoleMusicList(!1),naokuo.changeTimeInAlbumDetail(),naokuo.reflashEssayWaterFall()},refreshFn(),window.addEventListener("resize",(()=>{o(!1),n&&btf.isHidden(document.getElementById("toggle-menu"))&&i()})),document.getElementById("menu-mask").addEventListener("click",(e=>{i()})),f("sidebar",".darkmode_switchbutton"),document.querySelector("#sidebar-menus .menus_items").addEventListener("click",(e=>{const t=e.target.closest(".site-page.group");t&&t.classList.toggle("hide")})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(()=>{const{limitCount:e,languages:t}=GLOBAL_CONFIG.copyright;document.body.addEventListener("copy",(n=>{n.preventDefault();const o=window.getSelection(0).toString();let s=o;return o.length>e&&(s=`${o}\n\n\n${t.author}\n${t.link}${window.location.href}\n${t.source}\n${t.info}`),n.clipboardData?n.clipboardData.setData("text",s):window.clipboardData.setData("text",s)}))})(),GLOBAL_CONFIG.navMusic&&function(){const e=setInterval((()=>{navMusicEl&&navMusicEl.querySelector("#nav-music meting-js").aplayer&&(clearInterval(e),navMusicEl.querySelector("#nav-music meting-js").aplayer.on("pause",(function(){navMusicEl.classList.remove("playing"),document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",document.querySelector("#consoleMusic").classList.remove("on"),naokuo_musicPlaying=!1,navMusicEl.classList.remove("stretch")})),navMusicEl.querySelector("#nav-music meting-js").aplayer.on("play",(function(){navMusicEl.classList.add("playing"),document.querySelector("#consoleMusic").classList.add("on"),naokuo_musicPlaying=!0})))}),16)}(),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{void 0===saveToLocal.get("theme")&&(e.matches?r("dark"):r("light"))}))}));