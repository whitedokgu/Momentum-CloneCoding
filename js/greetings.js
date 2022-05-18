const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); //"username"은 저장될 아이템의 이름, username은 변수
  paintGreetings(username);
}

loginForm.addEventListener("submit", LoginSubmit);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 만약 localStorge에 유저 정보가 없다면 null
if (savedUsername === null) {
  // 유저 정보가 없어서 null일 경우
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginForm);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}
