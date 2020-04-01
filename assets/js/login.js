const body = document.querySelector("body");
const loginForm = document.getElementById("jsLogin");

const NICKNAME = "nickname";
const LOG_OUT = "logout";
const LOG_IN = "login";

const nickname = localStorage.getItem(NICKNAME);

const login = nickname => {
  window.socket = io("/");
  window.socket.emit(window.events.setNickname, { nickname });
};

if (nickname === null) {
  body.className = LOG_OUT;
} else {
  body.className = LOG_IN;
  login(nickname);
}

const handleFormSubmit = e => {
  e.preventDefault();
  const input = loginForm.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOG_IN;
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
