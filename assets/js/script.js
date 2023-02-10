// global variables
let searchIcon = document.querySelector(".header-icons .search");
let searchForm = document.querySelector("header .search-box");
let xIcon = document.querySelector("header .search-box .icon-x");
let navToggler = document.querySelector(".navbar .navbar-toggler");
let navList = document.querySelector("#navbarSupportedContent");
let navbarItems = document.querySelectorAll(".nav-item a");
let header = document.querySelector("#header");
let up = document.querySelector(".up");
let slides = Array.from(document.querySelectorAll(".testimonials .slide"));
let indicators = document.querySelectorAll(".indicators li");
let videoSection = document.querySelector(".video");
let videoOverlay = document.querySelector(".video .overlay");
let videoIcon = document.querySelector(".video .icon");
///////////////  HEADER SECTION /////////////////
window.onscroll = function () {
  if (scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (window.scrollY >= 400) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

// show navbar while clicking on bar icon
navToggler.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// add active class to li on navbar
navbarItems.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClass();
    el.classList.add("active");
  });
});
function removeActiveClass() {
  navbarItems.forEach((el) => {
    el.classList.remove("active");
  });
}
/////////// SHOW FORM SEARCH //////////
searchIcon.addEventListener("click", () => {
  searchForm.classList.add("active");
});
/////////// HIDE FORM SEARCH //////////
xIcon.addEventListener("click", () => {
  searchForm.classList.remove("active");
});
/////////// ARROW UP //////////
up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  up.classList.add("active");
});

////////// VIDEO SECTION //////////
videoIcon.addEventListener("click", () => {
  videoOverlay.remove();
  videoSection.classList.add("remove-before");
});
