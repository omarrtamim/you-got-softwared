document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your logic to validate the username and password
    // For demonstration purposes, we'll assume a simple validation where username is 'admin' and password is 'admin123'
    if (username === 'Farah Emad' && password === 'admin2024') {
        // Redirect to the dashboard page
        window.location.href = 'Dashboard.html';
    } else {
        // Display an error message if the credentials are incorrect
        alert('Invalid username or password. Please try again.');
    }
});
document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation: Check if new password matches confirm password
    if (newPassword !== confirmPassword) {
        alert("New password and confirm password don't match.");
        return;
    }

    // Validation: Check if new password is different from current password
    // (You may want to implement a more secure method to verify the current password)
    if (newPassword === currentPassword) {
        alert("New password must be different from the current password.");
        return;
    }

    // Validation: Implement your own logic to verify the current password
    const currentAdminPassword = ""; // Retrieve current admin password from your database or storage

    if (currentPassword !== currentAdminPassword) {
        alert("Incorrect current password.");
        return;
    }

    // If all validations pass, you can proceed to change the password
    // Here, you can implement your logic to update the admin's password in your database or storage
    // For demonstration, we'll just display a success message
    alert("Password changed successfully.");
});
