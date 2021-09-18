const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const nameLength = 6;
const subjectLength = 16;
const messageLength = 26;

form.addEventListener(`submit`, e => {
    e.preventDefault();

    validateForm();
});

function validateForm() {


    if (checkLength(name.value, nameLength)) {
        setSuccessFor(name);
    } else {
        setErrorFor(name, `Must be minimum ` + nameLength + ` characters.`);
    }
    if (validateEmail(email.value) === true) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, ` Must be a valid email address`);
    }
    if (checkLength(subject.value, subjectLength)) {
        setSuccessFor(subject);
    } else {
        setErrorFor(subject, `Must be minimum ` + subjectLength + ` characters.`);
    }
    if (checkLength(message.value, messageLength)) {
        setSuccessFor(message);
    } else {
        setErrorFor(message, `Must be minimum ` + messageLength + ` characters.`)
    }
}

function checkLength(value, char) {
    if (value.trim().length >= char) {
        return true;
    } else {
        return false;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(`.small`);
    formControl.className = `form-control error`;
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = `form-control success`;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}