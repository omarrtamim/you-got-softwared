function searchOrganizations() {
    // Get the search input value
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Get the list of organization elements
    const organizationElements = document.querySelectorAll('.organization');

    // Loop through each organization element
    organizationElements.forEach(element => {
        // Get the organization name from the element
        const organizationName = element.querySelector('.organization-name').innerText.toLowerCase();

        // Check if the organization name contains the search query
        if (organizationName.includes(searchQuery)) {
            // If it matches, display the organization element
            element.style.display = 'block';
        } else {
            // If it doesn't match, hide the organization element
            element.style.display = 'none';
        }
    });
}