
let form = document.querySelector(".form");
let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})


function checkInputs() {
    // Pegando os valores que foram digitados nos inputs.
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;
    let passwordValue = password.value;

    // Verificando o input "first name".
    if(firstNameValue === "") {
        error(firstName, "First Name cannot be empty");
    } else {
        success(firstName);
    }

    // Verificando o input "last name".
    if(lastNameValue === "") {
        error(lastName, "Last Name cannot be empty");
    } else {
        success(lastName);
    }

    // Verificando o input "e-mail".
    if(emailValue === "") {
        error(email, "Email cannot be empty");
    } else if(!checkEmail(emailValue)) {
        error(email, "Looks like this is not an e-mail");
    } else {
        success(email);
    }

    // Verificando o input "password".
    if(passwordValue === "") {
        error(password, "Password cannot be empty");
    } else if(passwordValue.length < 6) {
        error(password, "Password is not valid")
    } else {
        success(password);
    }
}


function error(input, message) {
    let wrap = input.parentElement;            // Pegando a div "wrap".
    let small = wrap.querySelector("small");   // Pegando a tag "small".

    // Adicionando a mensagem de erro.
    small.innerText = message;

    // Adicionando a classe "error" na div "wrap".
    wrap.className = "wrap error";
}


function success(input) {
    let wrap = input.parentElement; 

    // Adicionando a classe "success" a div "wrap".
    wrap.className = "wrap success";
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
