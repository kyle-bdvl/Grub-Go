const btnPopup = document.querySelector('.btnLogin-popup');
const coverBox = document.querySelector('.cover_box');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const closeButton = document.getElementById('close-popup');
const popup = document.querySelector('.cover_box');

function showRegisterForm() {
    registerForm.style.transform = 'translateX(0)';
    loginForm.style.transform = 'translateX(-400px)';
    coverBox.classList.add('active'); 
}

function showLoginForm() {
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(400px)';
    coverBox.classList.remove('active'); 
}

function showPopup() {
    coverBox.classList.add('active-popup');
}

function closePopup() {
    coverBox.classList.remove('active-popup');
}

registerLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    showRegisterForm();
});

loginLink.addEventListener('click', (event) => {
    event.preventDefault(); 
    showLoginForm();
});

btnPopup.addEventListener('click', showPopup);
iconClose.addEventListener('click', closePopup);
closeButton.addEventListener('click', () => {
    popup.classList.remove('active-popup'); 
});

document.getElementById('role').addEventListener('change', function () {
    const emailInput = document.getElementById('email');
    if (this.value === 'customer') {
        emailInput.placeholder = "customer@example.com";
    } else if (this.value === 'rider') {
        emailInput.placeholder = "rider@example.com";
    }
});
