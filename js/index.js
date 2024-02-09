try {
  // 昼夜切换
  function darkNuuton() {
    const BUTTON = document.querySelector(".components");
    const TOGGLE = () => {
      const willChangeMode =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"; // 判断是否白天黑夜;
      if (willChangeMode === "dark") {
        activateDarkMode();
      } else {
        activateLightMode();
      }
      saveToLocal.set("theme", willChangeMode, 2);
    };
    BUTTON.addEventListener("click", TOGGLE);
  }
  darkNuuton();
} catch (error) {
  console.log(error)
}

