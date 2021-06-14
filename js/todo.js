const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDOList = document.getElementById("todo-list");


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const li = document.createElement("li");
    li.innerText=newTodo;
    document.querySelector("ul").appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);