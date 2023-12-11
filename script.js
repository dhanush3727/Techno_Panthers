const menu = document.querySelector(".menu-bar");
const navList = document.querySelector(".navList");
const navLists = document.querySelectorAll(".nav-list");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navList.classList.toggle("show");
});
navLists.forEach((list) => {
  list.addEventListener("click", () => {
    menu.classList.remove("active");
    navList.classList.remove("show");
  });
});
