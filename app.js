// Wait for the webpage to fully load before running this code
document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Get the modal (popup) and the close button from the page
    const modal = document.getElementById('underDevelopmentModal'); // This is the popup
    const closeModalButton = document.getElementById('closeModal'); // This button closes the popup

    // Step 2: Show the modal automatically when the page loads
    if (modal) {
        // Make the modal appear on the screen by changing its style
        modal.style.display = 'flex';
    } else {
        // If the modal isn't found, log a warning in the console for debugging
        console.warn('Modal element not found on the page!');
    }

    // Step 3: Get the mobile menu button and the menu links
    const menu = document.querySelector('#mobile-menu'); // The button to open/close the mobile menu
    const menuLinks = document.querySelector('.navbar__menu'); // The list of links in the navigation menu

    // Step 4: Check if the menu button and links exist
    if (menu && menuLinks) {
        // When the menu button is clicked, toggle its visibility
        menu.addEventListener('click', function() {
            menu.classList.toggle('is-active'); // Add/remove the 'is-active' style on the menu button
            menuLinks.classList.toggle('active'); // Add/remove the 'active' style on the menu links
        });
    } else {
        // If the menu or links aren't found, log a warning in the console for debugging
        console.warn('Menu or menuLinks element not found!');
    }

    // Step 5: Get all unresponsive elements like buttons, links, and cards
    const unresponsiveElements = document.querySelectorAll('button, a, .services__card'); 

    // Step 6: Add click behavior to unresponsive elements
    unresponsiveElements.forEach(function(element) {
        element.addEventListener('click', function(event) {
            // Stop the normal behavior of links and buttons (like navigation)
            event.preventDefault();

            // Show the modal (popup) when one of these elements is clicked
            if (modal) {
                modal.style.display = 'flex'; // Make the modal visible
            }
        });
    });

    // Step 7: Allow the modal to be closed using the close button
    if (modal && closeModalButton) {
        closeModalButton.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the default behavior just in case
            modal.style.display = 'none'; // Hide the modal by changing its style
        });
    } else {
        // If the modal or close button isn't found, log a warning
        console.warn('Close button not found!');
    }
});
