// Admin credentials (replace with actual admin data from your system)
const adminCredentials = {
    username: 'Farah Emad',
    password: 'admin2024'
};

// Login form submission event handler
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered username and password match the admin credentials
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Redirect to the dashboard or perform other actions after successful login
        window.location.href = 'dashboard.html';
    } else {
        // Display error message for incorrect username or password
        alert('Incorrect username or password. Please try again.');
    }
});
