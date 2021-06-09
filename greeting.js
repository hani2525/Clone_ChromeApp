//참조값 가져와서 상수 선언
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//키워드 상수 선언
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//실행순서4 -> 최종적으로 웹브라우저에 구현될 기능
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

//실행순서 3 -> currentUser의 value가 있으면 paintGreeting 호출
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
  } else {
    paintGreeting(currentUser);
  }
}

//실행순서 2 -> loadName()메소드 호출
function init() {
  loadName();
}

//실행 순서 1
init();