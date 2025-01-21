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
            // Prepare data for POST request
            const data = {
                email: email,
                username: username,
                password: password
            };

            // Send POST request to backend to register the user
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);  // Success message from backend
                    showPage('loginPage');  // Navigate to login page
                } else {
                    alert('Error: ' + data.error);  // Error message from backend
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while registering.');
            });
        } else {
            alert('Passwords do not match');
        }
    });
});

const loginButton = document.getElementById('LoginToMainPage');

loginButton.addEventListener('click' , (e)=>{
    e.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Replace this with actual authentication logic if needed
        window.location.href = '../Kyle/restaurant.html'; // Redirect to restaurant.html
    } else 
        alert('Please enter both username and password');
    
});