// Function to handle accepting an organization
function acceptOrganization(button) {
    // Remove delete button
    const deleteButton = button.nextElementSibling;
    deleteButton.remove();

    // Update display
    const statusBadge = button.parentNode.nextElementSibling.querySelector('.badge');
    statusBadge.textContent = 'Accepted';
    statusBadge.classList.add('bg-success');
    statusBadge.classList.remove('bg-danger');

    // Disable accept button
    button.disabled = true;
}

// Function to handle rejecting an organization
function rejectOrganization(button) {
    // Remove accept button
    button.remove();

    // Update display
    const statusBadge = button.parentNode.nextElementSibling.querySelector('.badge');
    statusBadge.textContent = 'Deleted';
    statusBadge.classList.add('bg-danger');
    statusBadge.classList.remove('bg-success');

    // Disable delete button
    const deleteButton = button.previousElementSibling;
    deleteButton.disabled = true;
}

// Add event listeners to accept and reject buttons
document.addEventListener('DOMContentLoaded', function() {
    const acceptButtons = document.querySelectorAll('.btn.custom-btn.accept');
    const rejectButtons = document.querySelectorAll('.btn.custom-btn.reject');

    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            acceptOrganization(button);
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            rejectOrganization(button);
        });
    });
});