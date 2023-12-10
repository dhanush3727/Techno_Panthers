const password = document.querySelector(".pass");
const show = document.querySelector(".show");
console.log(password, show);

show.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
