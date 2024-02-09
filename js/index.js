try {
  const Theme = saveToLocal.get("theme")
  if (Theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (Theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
  // 昼夜切换
  function darkNuuton() {
    const BUTTON = document.querySelector(".components");
    const TOGGLE = () => {
      const willChangeMode =
        document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"; // 判断是否白天黑夜;
      document.documentElement.setAttribute("data-theme", willChangeMode);
      saveToLocal.set("theme", willChangeMode, 2);
    };
    BUTTON.addEventListener("click", TOGGLE);
  }
  darkNuuton()
} catch (error) {
  console.log(error)
}

