const form = document.getElementById("form");
const formControl = document.querySelectorAll(".form-control");
const names = document.querySelectorAll(".name");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = email.value;
  const nameVal = names.value;
  const passwordVal = password.value;
  console.log(passwordVal);

  for (const forms of formControl) {
    if (!validateEmail(emailVal) || nameVal == "" || passwordVal.length < 6) {
      forms.classList.add("error");
    } else {
      forms.classList.remove("error");
    }
  }
});

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
