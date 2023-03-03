const hamburger = document.querySelector(".header__menu-toggle");
const navsub = document.querySelector(".header__menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("change");
  navsub.classList.toggle("nav-change");
});
