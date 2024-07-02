document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Dummy credentials
        const validEmail = 'rdkole24@gmail.com';
        const validPassword = '11223344';

        if (email === validEmail && password === validPassword) {
            window.location.href = 'portfolio.html';
        } else {
            errorMessage.textContent = 'Invalid email or password. Please try again.';
        }
    });
});
