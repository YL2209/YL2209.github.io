var posts=["posts/96260b83/","posts/26ea2038/","posts/7d73fc91/","posts/21b92ee5/","posts/afcbc60d/","posts/eda3c704/","posts/e028a9b8/","posts/2b609159/","posts/6eded1ff/","posts/456f7944/","posts/5586039c/","posts/336fb21e/","posts/15546/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}