//左下角音乐
var navMusicEl = document.getElementById("nav-music");
// 第一次播放音乐
var naokuo_musicFirst = false;
// 音乐播放状态
var naokuo_musicPlaying = false;

const naokuo = {
  //左下角音乐
  // 音乐绑定事件
  musicBindEvent: function () {
    document.querySelector("#nav-music .aplayer-music").addEventListener("click", function () {
      naokuo.musicTelescopic();
    });
    document.querySelector("#nav-music .aplayer-button").addEventListener("click", function () {
      naokuo.musicToggle(false);
    });
  },
  //切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (!naokuo_musicFirst) {
      naokuo.musicBindEvent();
      naokuo_musicFirst = true;
    }
    if (naokuo_musicPlaying) {
      navMusicEl.classList.remove("playing");
      document.getElementById("nav-music-hoverTips") && (document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停");
      naokuo_musicPlaying = false;
      navMusicEl.classList.remove("stretch");
    } else {
      navMusicEl.classList.add("playing");
      naokuo_musicPlaying = true;
      navMusicEl.classList.add("stretch");
    }
    if (changePaly) document.querySelector("#nav-music meting-js").aplayer.toggle();
  },
  // 音乐伸缩
  musicTelescopic: function () {
    if (navMusicEl.classList.contains("stretch")) {
      navMusicEl.classList.remove("stretch");
    } else {
      navMusicEl.classList.add("stretch");
    }
  },
}