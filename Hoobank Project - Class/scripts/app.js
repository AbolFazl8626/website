AOS.init({
  easing: "ease",
  duratoin:750,
});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  let scrolled = scrollY;

  if (scrolled > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled")
  }
});
6;

const navMenu = document.querySelector(".nav-menu");
const navCloseBtn = document.querySelector(".nav-menu-btn-close");
const navOpenBtn = document.querySelector(".nav-menu-btn-open");
const navLinks = document.querySelectorAll(".nav-links ul a");

navOpenBtn.addEventListener("click", () => {
  navMenu.classList.add("open");
});

navOpenBtn.addEventListener("click", () => {
  navMenu.classList.remove("open");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    navMenu.classList.remove("open")
  });
}