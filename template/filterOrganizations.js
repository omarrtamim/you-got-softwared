// Function to filter organizations
function filterOrganizations() {
    const area = document.getElementById('area-filter').value;
    const governorate = document.getElementById('governorate-filter').value;
    const type = document.getElementById('type-filter').value;
    const organizations = document.querySelectorAll('.organization');

    organizations.forEach(organization => {
        const organizationArea = organization.getAttribute('data-area');
        const organizationGovernorate = organization.getAttribute('data-governorate');
        const organizationType = organization.getAttribute('data-type');
        const matchArea = area === 'all' || area === organizationArea;
        const matchGovernorate = governorate === 'all' || governorate === organizationGovernorate;
        const matchType = type === 'all' || type === organizationType;
        if (matchArea && matchGovernorate && matchType) {
            organization.style.display = 'block';
        } else {
            organization.style.display = 'none';
        }
    });
}
