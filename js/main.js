// Sticky menu
window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    document.querySelector("#navbar-desktop").className =
      "navbar visible bg-primary";
  } else {
    document.querySelector("#navbar-desktop").className =
      "navbar hidden bg-primary";
  }
});
