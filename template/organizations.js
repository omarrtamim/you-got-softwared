// organizations.js

// Sample organizations data (replace with actual data from your server or database)
const organizationsData = [
    { id: 1, name: 'Organization A', location: 'City A' },
    { id: 2, name: 'Organization B', location: 'City B' },
    { id: 3, name: 'Organization C', location: 'City C' }
];

// Function to display organizations
function displayOrganizations() {
    const organizationsList = document.getElementById('organizations');

    // Clear existing list items
    organizationsList.innerHTML = 'orga';

    // Iterate over organizations data and create list items
    organizationsData.forEach(organization => {
        const listItem = document.createElement('li');
        listItem.textContent = `${organization.name} - ${organization.location}`;
        organizationsList.appendChild(listItem);
    });
}

// Call the displayOrganizations function when the page loads
window.onload = displayOrganizations;
