const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUserName = localStorage.getItem("username");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value; // 값 입력
    localStorage.setItem("username", username);

    if(savedUserName === null) {
        loginForm.classList.remove("hidden"); 
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        greeting.innerText = `Hello ${username}`; // 글자가 나타남
        greeting.classList.remove("hidden"); // 히든 빼줌 
    }
}






