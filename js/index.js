document.addEventListener("DOMContentLoaded", (function () {
  const BUTTON = document.querySelector(".components");
  const TOGGLE = () => {
    const willChangeMode =
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"; // 判断是否白天黑夜;
    document.documentElement.setAttribute("data-theme", willChangeMode);
    saveToLocal.set("theme", willChangeMode, 2);
  };
  BUTTON.addEventListener("click", TOGGLE);
  
  if (saveToLocal.get("theme") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}));
