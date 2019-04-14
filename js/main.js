// Sticky menu background
$(window).scroll(function() {
  var navbarDesktop = $("#navbar-desktop");
  if (window.scrollY > 100) {
    navbarDesktop.addClass("visible");
  } else {
    navbarDesktop.removeClass("visible");
  }
});
