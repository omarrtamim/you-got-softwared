function login() {
    // Get the username and password from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are valid (you can add your own validation logic here)
    if (username === 'admin' && password === 'password') {
        // If valid, redirect to the dashboard page
        window.location.href = 'dashboard.html';
    } else {
        // If invalid, display an error message (you can customize this message)
        alert('Invalid username or password. Please try again.');
    }
}