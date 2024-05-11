// Sample data for organizations (replace with actual data from your system)
const organizationsData = [
    { name: 'Al Oraman', type: 'Non-profit', area: 'Area 1', governorate: 'Cairo', contact: 'info@aloraman.org' },
    { name: 'Resala', type: 'Charity', area: 'Area 2', governorate: 'Alexandria', contact: 'contact@resala.org' },
    { name: '57357', type: 'Hospital', area: 'Area 3', governorate: 'Giza', contact: 'info@57357.org' }
];

// Function to display organizations list
function displayOrganizations(organizations) {
    const organizationsList = document.getElementById('organizations-list');
    organizationsList.innerHTML = ''; // Clear previous list

    organizations.forEach(org => {
        const organizationItem = document.createElement('div');
        organizationItem.classList.add('organization-item');

        const nameElement = document.createElement('h2');
        nameElement.textContent = org.name;

        const typeElement = document.createElement('p');
        typeElement.textContent = `Type: ${org.type}`;

        const areaElement = document.createElement('p');
        areaElement.textContent = `Area: ${org.area}`;

        const governorateElement = document.createElement('p');
        governorateElement.textContent = `Governorate: ${org.governorate}`;

        const contactElement = document.createElement('p');
        contactElement.textContent = `Contact: ${org.contact}`;

        organizationItem.appendChild(nameElement);
        organizationItem.appendChild(typeElement);
        organizationItem.appendChild(areaElement);
        organizationItem.appendChild(governorateElement);
        organizationItem.appendChild(contactElement);

        organizationsList.appendChild(organizationItem);
    });
}

// Function to filter organizations by search input
function filterOrganizations() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredOrganizations = organizationsData.filter(org => org.name.toLowerCase().includes(searchInput));
    displayOrganizations(filteredOrganizations);
}

// Call functions when the page loads
window.onload = function() {
    displayOrganizations(organizationsData);

    document.getElementById('searchInput').addEventListener('input', filterOrganizations);
};
