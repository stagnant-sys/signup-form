let password = document.querySelector('#password');
let passwordConfirm = document.querySelector('#password-confirm');

const SUBMIT_BUTTON = document.querySelector('.form__submit-button');
const ERROR_MESSAGE = document.querySelector('.error');

console.log('hello');

SUBMIT_BUTTON.addEventListener('click', function() {
  if (password.value != passwordConfirm.value) {
    ERROR_MESSAGE.style.display = 'block';
    password.setCustomValidity("Invalid field.");
    passwordConfirm.setCustomValidity("Invalid field.");
    } else if (password.value === passwordConfirm.value) {
    ERROR_MESSAGE.style.display = 'none';
    password.setCustomValidity("");
    passwordConfirm.setCustomValidity("");
  }
})
