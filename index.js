document.addEventListener("DOMContentLoaded", function () {

  /* NAVBAR SCROLL */
  const header = document.querySelector(".main-header1");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* LOGIN / REGISTER SWITCH */
  const loginForm = document.querySelector(".login");
  const registerForm = document.querySelector(".register");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");

  if (showRegister && showLogin && loginForm && registerForm) {
    showRegister.onclick = () => {
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
    };

    showLogin.onclick = () => {
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
    };

    loginForm.classList.add("active");
  }

  /* LOGIN SUBMIT */
  const loginlink = document.getElementById("login-link");
  if (loginlink) {
    loginlink.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Login successful!");
      window.location.href = "./Notes_cards.html";
    });
  }

});
