document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulate a login check (replace this with real authentication)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        // Redirect to another page or perform actions
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});
