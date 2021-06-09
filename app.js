const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");
const savedUsername=localStorage.getItem(USERNAME_KEY);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleBtnClick(event){
    event.preventDefault();
    greeting.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.classList.remove(username);
    greeting.innerText=`Hello ${savedUsername}`
}
function handleLink(event){
    alert("clicked");
}

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}
loginForm.addEventListener("submit", handleBtnClick);
link.addEventListener("click", handleLinkClick)

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleBtnClick);
}else{
    paintGreetings(savedUsername);
}