const startForm = document.getElementById("start-form");
const emailInput = document.getElementById("start-email");
const startError = document.getElementById("start-error");
const homeForm = document.getElementById("home-form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

startForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    startError.style.visibility = "visible";
    emailInput.classList.add("show-error");
  } else {
    startError.style.visibility = "hidden";
    emailInput.classList.remove("show-error");
  }
});

homeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value === "") {
    emailError.style.visibility = "visible";
    email.classList.add("show-error");
  } else {
    emailError.style.visibility = "hidden";
    email.classList.remove("show-error");
  }
});
