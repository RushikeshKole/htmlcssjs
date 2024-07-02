document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const correctUsername = 'fort';
        const correctPassword = '123';

        if (username === correctUsername && password === correctPassword) {
            window.location.href = 'home.html';
        } else {
            errorMessage.textContent = 'Wrong username or password';
        }
    });
});

function handleLogout() {
    window.location.href = 'login.html';
}
