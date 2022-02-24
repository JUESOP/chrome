const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const savedUserName = localStorage.getItem(USERNAME_KEY);

    if(savedUserName === null) {
        loginForm.classList.remove("hidden"); 
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings(savedUserName);
    }

function paintGreetings(tomato) {
        greeting.innerText = `Hello ${tomato}`;
        greeting.classList.remove("hidden"); 
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username); 
}


