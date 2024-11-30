let signUpBtn = document.getElementById("sign-up")
let nameSignUp = document.getElementById("nameSignUp")
let emailSignUp = document.getElementById("emailSignUp")
let passSignUp = document.getElementById("passwordSignUp")

let users = [];

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"))
}


signUpBtn.addEventListener ( "click", checkAlready)
signUpBtn.addEventListener ( "click", clearInputs)

nameSignUp.addEventListener("input" , checkName)
emailSignUp.addEventListener("input" , checkEmail)
passSignUp.addEventListener("input" , checkPassword)


isEmpty()


function clearInputs() {
    nameSignUp.value = "",
    emailSignUp.value = "",
    passSignUp.value = ""
}


function checkAlready() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === nameSignUp.value || users[i].email === emailSignUp.value || users[i].password === passSignUp.value) {
            alert("This account already exists. Log in or try another one.");
            return;
        }
    }

    

    addUser();
}

function isEmpty() {
    if(nameSignUp.value !== ""|| emailSignUp.value !== "" || passSignUp.value !== "") {
        signUpBtn.classList.remove("disabled")
    }

    else{
        signUpBtn.classList.add("disabled")
    }
}


function checkName() {
    if (/^[a-z0-9_-]{3,15}$/.test(nameSignUp.value) === true) {
        document.getElementById("nameAlert").classList.add("d-none")
        signUpBtn.classList.remove("disabled")
        return true
    }

    else{
        document.getElementById("nameAlert").classList.remove("d-none")
        signUpBtn.classList.add("disabled")
        return false
    }

}


function checkEmail() {
    if (/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(emailSignUp.value) === true) {
        document.getElementById("emailAlert").classList.add("d-none")
        signUpBtn.classList.remove("disabled")
        return true
    }

    else{
        document.getElementById("emailAlert").classList.remove("d-none")
        signUpBtn.classList.add("disabled")
        return false
    }

}


function checkPassword() {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(passSignUp.value) === true) {
        document.getElementById("passwordAlert").classList.add("d-none")
        signUpBtn.classList.remove("disabled")
        return true;
    }

    else{
        document.getElementById("passwordAlert").classList.remove("d-none")
        signUpBtn.classList.add("disabled")
        return false
    }
}



function addUser() {
    let user = {
        name: nameSignUp.value,
        email: emailSignUp.value,
        password: passSignUp.value
    }

    users.push(user)
    localStorage.setItem("users" , JSON.stringify(users))
    localStorage.setItem("userName" , user.name)
    console.log(users)
}
