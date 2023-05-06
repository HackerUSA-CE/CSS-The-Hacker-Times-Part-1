const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 230) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
