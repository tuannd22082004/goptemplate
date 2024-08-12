document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const navbarCollapse = document.getElementById("navbarCollapse");
  navbarCollapse.addEventListener("show.bs.collapse", function () {
    navbar.classList.add("bg-color-7");
  });
  navbarCollapse.addEventListener("hide.bs.collapse", function () {
    navbar.classList.remove("bg-color-7");
  });
});
function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("bg-color-5");
    navbar.classList.add("py-3");
    navbar.classList.remove("py-4");
  } else {
    navbar.classList.remove("bg-color-5");
    navbar.classList.remove("py-3");
    navbar.classList.add("py-4");
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};
require('./home-1')