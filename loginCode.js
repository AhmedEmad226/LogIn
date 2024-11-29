let logInEmail = document.getElementById("emailLogIn")
let logInPassword = document.getElementById("passwordLogIn")
let logInBtn = document.getElementById("login")

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
                userFound = true;
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