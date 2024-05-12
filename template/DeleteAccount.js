function deleteDonor(donorName) {
    // Display a confirmation dialog
    var confirmation = confirm("Are you sure you want to delete the donor account of " + donorName + "?");

    // If the admin confirms deletion
    if (confirmation) {
        // Perform deletion logic here
        // For example, you can make an AJAX request to delete the donor account from the server
        
        // Simulate deletion for demonstration purposes
        console.log("Donor account of " + donorName + " deleted successfully.");
        
        // Optionally, you can remove the donor's information from the HTML after deletion
        // For example:
        // var donorElement = document.getElementById(donorId);
        // donorElement.parentNode.removeChild(donorElement);
    } else {
        // If the admin cancels deletion
        console.log("Deletion of donor account cancelled.");
    }
}