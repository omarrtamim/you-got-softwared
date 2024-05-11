// Sample organization data (replace with actual data from your system)
const organizations = [
    { id: 1, name: 'Al-Orman Charity Association', description: 'Dar Al- Orman is an Egyptian charity registered under no. 1158 Giza. Established in 1993, it started its activities with one orphanage to provide care for orphans.' },
    { id: 2, name: 'Resala Charity Organization', description: 'An Egyptian nonprofit organisation that aims to assist the Egyptian community through blood donation, orphan care, blind aid, literacy instruction, and other services.' },
    { id: 3, name: 'Children\'s Cancer Hospital Egypt', description: 'Children\'s Cancer Hospital Egypt, also known as 57357 hospital after the hospital\'s widely published bank account number for donations, is a hospital in Cairo is a hospital specialising in children\'s cancer. With 320 beds, the building is the largest pediatric oncology hospital in the world.' }
];

// Function to display organizations
function displayOrganizations() {
    const organizationsList = document.getElementById('organizations-list');
    organizationsList.innerHTML = ''; // Clear previous list

    organizations.forEach(org => {
        const organizationItem = document.createElement('li');
        organizationItem.innerHTML = `
            <div class="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                <div class="d-flex">
                    <!-- Image -->
                    <div class="custom-block-image img-fluid"></div>

                    <div class="custom-block-topics-listing-info d-flex">
                        <div>
                            <!-- Organization details -->
                            <h5 class="mb-2">${org.name}</h5>
                            <p class="mb-0">${org.description}</p>
                            <!-- Accept and Reject buttons -->
                            <button class="btn custom-btn mt-3 mt-lg-4" onclick="acceptOrganization(${org.id})">Accept</button>
                            <button class="btn custom-btn mt-3 mt-lg-4" onclick="rejectOrganization(${org.id})">Reject</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        organizationsList.appendChild(organizationItem);
    });
}

// Function to accept an organization
function acceptOrganization(id) {
    // Implement logic to accept the organization
    console.log(`Organization with ID ${id} accepted.`);
}

// Function to reject an organization
function rejectOrganization(id) {
    // Implement logic to reject the organization
    console.log(`Organization with ID ${id} rejected.`);
}

// Display organizations on page load
displayOrganizations();
