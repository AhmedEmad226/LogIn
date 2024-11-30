let logInEmail = document.getElementById("emailLogIn")
let logInPassword = document.getElementById("passwordLogIn")
let logInBtn = document.getElementById("login")
let helloMessage = document.getElementById("hello")

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"));
}

logInBtn.addEventListener("click", hasAccount)
logInBtn.addEventListener("click", clearLogInInputs)





function clearLogInInputs() {
    logInEmail.value = ""
    logInPassword.value = ""
}


function hasAccount() {
    let userFound = false;

    for (let i = 0; i < users.length; i++) {
        if (logInEmail.value === users[i].email) {
    
            if (logInPassword.value === users[i].password) {
                alert("Login Success!");
                window.location.href = "hello.html"
                userFound = true;
                let message = `Hello, ${localStorage.setItem("userName", users[i].name)}`

                helloMessage.innerHTML += message;
                break;
            } 
            
            else {
                alert("Incorrect password.");
                userFound = true;
                break; 
            }
        }
    }

    if (userFound === false) {
        alert("No account found with this email.");
    }
}

