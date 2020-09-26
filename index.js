const loginForm = document.querySelector('.login');
const loginButton = loginForm.querySelector('.login__button');
const logName = loginForm.querySelector('.login-name');
const logPass = loginForm.querySelector('.login-pass');
const logInvalid = loginForm.querySelector('.login__invalid');





loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(logName.value == "test" && logPass.value == "test") {
    window.location.href = "./page.html"
    }
    else {
        logInvalid.style.display = 'block';

    }
});