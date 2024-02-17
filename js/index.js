try {
  // 昼夜切换
  function darkBuuton() {
    const BUTTON = document.querySelector(".components");
    const TOGGLE = () => {
      const willChangeMode =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"; // 判断是否白天黑夜;
      if (willChangeMode === "dark") {
        $VideosBGID.style.cssText = 'display: none';
        window.activateDarkMode();
        activateDarkVideo();
        // 视频背景切换动画
        setTimeout(() => {
          $VideosBGID.style.cssText = 'display: block';
        }, 0)
      } else {
        $VideosBGID.style.cssText = 'display: none';
        window.activateLightMode();
        activateLightVideo();
        // 视频背景切换动画
        setTimeout(() => {
          $VideosBGID.style.cssText = 'display: block';
        }, 0)
      }
      saveToLocal.set("theme", willChangeMode, 2);
    };
    BUTTON.addEventListener("click", TOGGLE);

    const t = saveToLocal.get("theme"),
      $VideosBGID = document.querySelector("#naokuo-home_bg"),
      activateDarkVideo = () => {
        if ($VideosBGID) {
          $VideosBGID.innerHTML = `<video class="Bg_Video" width="100%" height="100%" style="object-fit:cover;z-index:0" preload="auto" autoplay="" loop="" muted="" playsinline="" webkit-playsinline="" x5-playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="" x5-video-orientation="portraint" x-webkit-airplay="allow"><source src="https://cdn.cbd.int/naokuo-media@1.0.3/MP4/2024-01-19_5.mp4" type="video/mp4"></video>`;  
        }
      },
      activateLightVideo = () => {
        if ($VideosBGID) {
          $VideosBGID.innerHTML = `<video class="Bg_Video" width="100%" height="100%" style="object-fit:cover;z-index:0" preload="auto" autoplay="" loop="" muted="" playsinline="" webkit-playsinline="" x5-playsinline="" x5-video-player-type="h5" x5-video-player-fullscreen="" x5-video-orientation="portraint" x-webkit-airplay="allow"><source src="https://cdn.cbd.int/naokuo-media@1.0.7/MP4/2024_02_17.mp4" type="video/mp4"></video>`;
        }
      }

    "light" === t ? activateLightVideo() : activateDarkVideo();
  }
  darkBuuton();
} catch (error) {
  console.log(error)
}

