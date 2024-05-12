function deleteDonor(DonorName) {
    // Display a confirmation dialog
    var confirmation = confirm("Are you sure you want to delete the Donor " + DonorName + "?");

    // If the admin confirms deletion
    if (confirmation) {
        // Perform deletion logic here
        // For example, you can make an AJAX request to delete the Donor from the server

        // Simulate deletion for demonstration purposes
        console.log("Donor " + DonorName + " deleted successfully.");

        // Find the Donor element by its name
        var DonorElement = document.querySelector("h5:contains('" + DonorName + "')");

        // If the Donor element is found, remove it from the DOM
        if (DonorElement) {
            DonorElement.closest(".custom-block").remove();
        } else {
            console.log("Donor element not found.");
        }
    } else {
        // If the admin cancels deletion
        console.log("Deletion of Donor " + DonorName + " cancelled.");
    }
}
