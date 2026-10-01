(() => {
  const body = document.body;
  const lamp = document.getElementById("mode");

  const setTheme = (theme) => {
    if (theme === "dark") {
      body.setAttribute("data-theme", "dark");
    } else {
      body.removeAttribute("data-theme");
    }
    try { localStorage.setItem("theme", theme); } catch (e) {}
  };

  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved === "dark" || saved === "light" ? saved : (prefersDark ? "dark" : "light"));

  lamp.addEventListener("click", () =>
    setTheme(body.getAttribute("data-theme") === "dark" ? "light" : "dark")
  );

  const cbox = document.getElementById("menu-trigger");
  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked ? area.classList.add("blurry") : area.classList.remove("blurry");
  });
})();