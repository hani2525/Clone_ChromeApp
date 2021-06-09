//참조값 가져와서 상수 선언
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

//키워드 상수 선언
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//입력한 값을 저장하는 함수
function saveName(text){
  localStorage.setItem(USER_LS,text);
}

//입력한 값을 처리하는 함수
function handleSubmit(event){
  event.preventDefault();//default기능 없애기
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}


//이름 입력하는 함수
function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}


// 최종적으로 웹브라우저에 구현될 기능
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerHTML = `Hello ${text}`;
}

//currentUser의 value가 있으면 paintGreeting 호출
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

//loadName()메소드 호출
function init() {
  loadName();
}

//최종 실행
init();