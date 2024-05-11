// Sample organization data (replace with actual data from your system)
const organizations = [
    { id: 1, name: 'Al-Orman Charity Association', description: 'Dar Al- Orman is an Egyptian charity registered under no. 1158 Giza. Established in 1993, it started its activities with one orphanage to provide care for orphans.', area: 'Cairo', governorate: 'Giza', type: 'Charity' },
    { id: 2, name: 'Resala Charity Organization', description: 'An Egyptian nonprofit organisation that aims to assist the Egyptian community through blood donation, orphan care, blind aid, literacy instruction, and other services.', area: 'Tanta', governorate: 'Gharbia', type: 'Charity' },
    { id: 3, name: 'Children\'s Cancer Hospital Egypt', description: 'Children\'s Cancer Hospital Egypt, also known as 57357 hospital after the hospital\'s widely published bank account number for donations, is a hospital in Cairo is a hospital specialising in children\'s cancer. With 320 beds, the building is the largest pediatric oncology hospital in the world.', area: 'Cairo', governorate: 'Giza', type: 'Hospital' }
];

// Function to display organizations
function displayOrganizations() {
    const organizationsList = document.getElementById('organizations-list');
    organizationsList.innerHTML = ''; // Clear previous list

    organizations.forEach(org => {
        const organizationItem = document.createElement('div');
        organizationItem.classList.add('custom-block', 'custom-block-topics-listing', 'bg-white', 'shadow-lg', 'mb-5');

        organizationItem.innerHTML = `
            <div class="d-flex">
                <div class="custom-block-image img-fluid"></div>
                <div class="custom-block-topics-listing-info d-flex">
                    <div>
                        <h5 class="mb-2">${org.name}</h5>
                        <p class="mb-0">${org.description}</p>
                        <span class="badge bg-design rounded-pill">${org.area}</span>
                        <span class="badge bg-advertising rounded-pill">${org.governorate}</span>
                        <span class="badge bg-music rounded-pill">${org.type}</span>
                    </div>
                </div>
            </div>
        `;

        organizationsList.appendChild(organizationItem);
    });
}

// Function to filter organizations
function filterOrganizations() {
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const areaFilter = document.getElementById('areaFilter').value.toLowerCase();
    const governorateFilter = document.getElementById('governorateFilter').value.toLowerCase();
    const typeFilter = document.getElementById('typeFilter').value.toLowerCase();

    const filteredOrganizations = organizations.filter(org => {
        return (
            (org.name.toLowerCase().includes(keyword) || org.description.toLowerCase().includes(keyword)) &&
            (areaFilter === '' || org.area.toLowerCase() === areaFilter) &&
            (governorateFilter === '' || org.governorate.toLowerCase() === governorateFilter) &&
            (typeFilter === '' || org.type.toLowerCase() === typeFilter)
        );
    });

    displayFilteredOrganizations(filteredOrganizations);
}

// Function to display filtered organizations
function displayFilteredOrganizations(filteredOrganizations) {
    const organizationsList = document.getElementById('organizations-list');
    organizationsList.innerHTML = ''; // Clear previous list

    filteredOrganizations.forEach(org => {
        const organizationItem = document.createElement('div');
        organizationItem.classList.add('custom-block', 'custom-block-topics-listing', 'bg-white', 'shadow-lg', 'mb-5');

        organizationItem.innerHTML = `
            <div class="d-flex">
                <div class="custom-block-image img-fluid"></div>
                <div class="custom-block-topics-listing-info d-flex">
                    <div>
                        <h5 class="mb-2">${org.name}</h5>
                        <p class="mb-0">${org.description}</p>
                        <span class="badge bg-design rounded-pill">${org.area}</span>
                        <span class="badge bg-advertising rounded-pill">${org.governorate}</span>
                        <span class="badge bg-music rounded-pill">${org.type}</span>
                    </div>
                </div>
            </div>
        `;

        organizationsList.appendChild(organizationItem);
    });
}

// Display all organizations on page load
displayOrganizations();
