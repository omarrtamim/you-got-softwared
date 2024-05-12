// Define organization descriptions as JavaScript objects
const organizationDescriptions = {
    "Al-Orman Charity Association":"Dar Al- Orman is an Egyptian charity registered under no. 1158 Giza. Established in 1993, it started its activities with one orphanage to provide care for orphans.",
    "Resala Charity Organization":"An Egyptian nonprofit organisation that aims to assist the Egyptian community through blood donation, orphan care, blind aid, literacy instruction, and other services.",
    "Children's Cancer Hospital Egypt":"Children's Cancer Hospital Egypt, also known as 57357 hospital after the hospital's widely published bank account number for donations, is a hospital in Cairo is a hospital specialising in children's cancer. With 320 beds, the building is the largest pediatric oncology hospital in the world."
};

// Function to show the description of an organization
function showDescription(organizationId) {
    // Get the description element corresponding to the organizationId
    const descriptionElement = document.getElementById(`description-${organizationId}`);

    // Get the description from the organizationDescriptions object
    const description = organizationDescriptions[organizationId];

    // Update the innerHTML of the description element
    descriptionElement.innerHTML = description;

    // Toggle the display of the description element
    if (descriptionElement.style.display === 'none') {
        descriptionElement.style.display = 'block'; // Show the description
    } else {
        descriptionElement.style.display = 'none'; // Hide the description
    }
}
