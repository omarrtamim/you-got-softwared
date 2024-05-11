function deleteItem(itemId) {
    // Find the item element by its ID
    const itemToRemove = document.getElementById(`item-${itemId}`);
    
    // Check if the item exists before attempting to delete it
    if (itemToRemove) {
        // Remove the item element from the DOM
        itemToRemove.remove();
        console.log(`Item ${itemId} deleted successfully.`);
    } else {
        console.error(`Item with ID ${itemId} not found.`);
    }
}