// Admin credentials (replace with actual admin data from your system)
const adminCredentials = {
    username: 'Farah Emad',
    password: 'admin2024'
};

// Password change form submission event handler
document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if the current password matches the admin's current password
    if (currentPassword !== adminCredentials.password) {
        alert('Current password is incorrect. Please try again.');
        return;
    }

    // Check if the new password matches the confirmed password
    if (newPassword !== confirmPassword) {
        alert('New password and confirmed password do not match. Please try again.');
        return;
    }

    // Update the admin's password
    adminCredentials.password = newPassword;

    // Display success message
    alert('Password changed successfully!');
});
