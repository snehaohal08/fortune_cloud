document.querySelector(".register-btn").onclick = () => {
  document.querySelector(".container").classList.add("active");
};

document.querySelector(".login-btn").onclick = () => {
  document.querySelector(".container").classList.remove("active");
};