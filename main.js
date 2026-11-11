// Cambiar entre tema claro y oscuro (se guarda para la próxima visita)
document.querySelector(".theme-toggle").addEventListener("click", function () {
  var root = document.documentElement;
  var actual = root.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  var nuevo = actual === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nuevo);
  try { localStorage.setItem("tema", nuevo); } catch (e) {}
});
