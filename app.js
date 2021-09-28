const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
  const value = loginInput.value;
  alert(value);
}

loginButton.addEventListener("click", onLoginBtnClick);
