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

// Function to populate filter options
function populateFilterOptions() {
    const areas = [...new Set(organizationsData.map(org => org.area))];
    const governorates = [...new Set(organizationsData.map(org => org.governorate))];
    const types = [...new Set(organizationsData.map(org => org.type))];

    const areaFilter = document.getElementById('areaFilter');
    const governorateFilter = document.getElementById('governorateFilter');
    const typeFilter = document.getElementById('typeFilter');

    areas.forEach(area => {
        const option = document.createElement('option');
        option.textContent = area;
        option.value = area;
        areaFilter.appendChild(option);
    });

    governorates.forEach(gov => {
        const option = document.createElement('option');
        option.textContent = gov;
        option.value = gov;
        governorateFilter.appendChild(option);
    });

    types.forEach(type => {
        const option = document.createElement('option');
        option.textContent = type;
        option.value = type;
        typeFilter.appendChild(option);
    });
}

// Function to filter organizations by filter options
function applyFilters() {
    const areaFilterValue = document.getElementById('areaFilter').value;
    const governorateFilterValue = document.getElementById('governorateFilter').value;
    const typeFilterValue = document.getElementById('typeFilter').value;

    let filteredOrganizations = [...organizationsData];

    if (areaFilterValue) {
        filteredOrganizations = filteredOrganizations.filter


    }
}



