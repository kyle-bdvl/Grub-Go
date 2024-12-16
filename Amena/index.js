function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
}

const getStarted = document.getElementById('getStarted');
getStarted.addEventListener('click', () => {
    showPage('loginPage');
});

const signUpLink = document.querySelector('.register-link');
signUpLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    showPage('signupOptionsPage');
});

const signUpButtons = document.querySelectorAll('.signup-options button');
signUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        const role = button.textContent.toLowerCase();
        showPage(`${role}RegisterPage`);
    });
});

const loginForm = document.querySelector('#loginPage form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login successful');

    } else {
        alert('Please enter both username and password');
    }
});

const registerForms = document.querySelectorAll('.page form');
registerForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('#email').value;
        const username = form.querySelector('#username').value;
        const password = form.querySelector('#password').value;
        const confirmPassword = form.querySelector('#confirmPassword').value;

        if (password === confirmPassword) {
            alert(`${username} registered successfully!`);
        } else {
            alert('Passwords do not match');
        }
    });
});


let Login = document.getElementById(LoginToMainPage);
Login.addEventListener('click',()=>{
    window.location.href="../Kyle/restaurant.html";
});
