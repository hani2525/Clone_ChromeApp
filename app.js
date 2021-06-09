const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const link = document.querySelector("a");

function handleBtnClick(event){
    event.preventDefault();
    const username = loginInput.value;
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
