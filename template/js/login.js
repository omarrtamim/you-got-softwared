document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform authentication (dummy example)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Display logged-in username
        document.getElementById('loggedInUser').textContent = 'Logged in as: ' + username;
        // Redirect to admin dashboard or other page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
