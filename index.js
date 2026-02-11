const header = document.querySelector(".main-header1");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");

document.getElementById("showRegister").onclick = () => {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
};

document.getElementById("showLogin").onclick = () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
};

// default
loginForm.classList.add("active");


const loginlink = document.getElementById("login-link");
const registrationlink = document.getElementById("registration-link");

loginlink.addEventListener("submit",function(e){
  e.preventDefault();
  alert("Login successful!");
  window.location.href="./Notes_cards.html";

})

registrationlink.addEventListener("submit", function(e) {
  e.preventDefault();

  alert("Registration successful!");

  // Register form hide
  registerForm.classList.remove("active");

  // Login form show
  loginForm.classList.add("active");
});

