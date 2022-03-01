const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 추가  사용자가 입력한 값(obj)을 -> 문자열로 바꿔줌
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li"); //todo list의 li
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteToDo(event) {
    const li = event.target.parentNode; // x버튼의 부모 노드 
    li.remove(); //눈에 보이는거에서 삭제
    toDos = toDos.filter((potato) => potato.id !== parseInt(li.id));
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //가지고 오는것

if (savedToDos !== null) { //값이 있다
    const parsedToDos = JSON.parse(savedToDos); // 문자열 -> 배열
    toDos = parsedToDos; //새로고침을 해도 계속 저장될 수 있도록
    parsedToDos.forEach(paintToDo); //배열 n개 개수만큼 돌아가면서 paintToDo()실행
}


