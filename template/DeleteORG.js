function deleteOrganization(organizationName) {
    // Display a confirmation dialog
    var confirmation = confirm("Are you sure you want to delete the organization " + organizationName + "?");

    // If the admin confirms deletion
    if (confirmation) {
        // Perform deletion logic here
        // For example, you can make an AJAX request to delete the organization from the server

        // Simulate deletion for demonstration purposes
        console.log("Organization " + organizationName + " deleted successfully.");

        // Find the organization element by its name
        var organizationElement = document.querySelector("h5:contains('" + organizationName + "')");

        // If the organization element is found, remove it from the DOM
        if (organizationElement) {
            organizationElement.closest(".custom-block").remove();
        } else {
            console.log("Organization element not found.");
        }
    } else {
        // If the admin cancels deletion
        console.log("Deletion of organization " + organizationName + " cancelled.");
    }
}
