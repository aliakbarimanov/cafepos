const loginBtn = document.querySelector("#loginBtn");
const loginBox = document.querySelector("#loginBox");

loginBtn.addEventListener("click", () => loginBox.classList.toggle("active"));


const barIcon = document.querySelector("#barIcon");
const closeBtn = document.querySelector("#closeBtn");
const mobileMenu = document.querySelector("#mobileMenu");

barIcon.addEventListener("click", () => mobileMenu.classList.add("active"));
closeBtn.addEventListener("click", () => mobileMenu.classList.remove("active"));