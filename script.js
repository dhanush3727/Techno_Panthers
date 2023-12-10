const menu = document.querySelector(".menu-bar");
const navList = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navList.classList.toggle("show");
});
