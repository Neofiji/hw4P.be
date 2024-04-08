// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button and paragraph elements
    const changeContentBtn = document.getElementById('changeContentBtn');
    const dynamicContent = document.getElementById('dynamicContent');

    // Add a click event listener to the button
    changeContentBtn.addEventListener('click', () => {
        // Update the content of the paragraph
        dynamicContent.innerText = "The content has been updated!";
    });
});
// toggling the visibility of the "Contact Us" section
document.addEventListener('DOMContentLoaded', function () {
    // Function to show the section and scroll to it
    function showAndScrollToContactSection(event) {
        event.preventDefault(); // Prevent the default anchor action
        
        var contactSection = document.getElementById('contact-us');
        
        // Ensure the section is visible
        contactSection.classList.remove('hidden');

        // Scroll to the Contact Us section smoothly
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Attach the event listener to the 'Contact Us' links
    document.getElementById('show-contact').addEventListener('click', showAndScrollToContactSection);
    document.getElementById('footer-contact-link').addEventListener('click', showAndScrollToContactSection);
});
// toggling the visibility of the floating navigation
let nav = document.querySelector('.floating-nav');
let hideNavTimeout;

function showNav() {
    nav.style.opacity = '1';
    nav.style.display = 'block'; // Ensure it's displayed if previously hidden
    // Clear any existing timeout to avoid hiding too soon
    clearTimeout(hideNavTimeout);
    // Set a new timeout to hide the navigation
    hideNavTimeout = setTimeout(function() {
        nav.style.opacity = '0';
        setTimeout(() => nav.style.display = 'none', 500); // Hide after transition
    }, 2000); // Adjust time as needed (3000ms = 3 seconds)
}

window.onscroll = showNav; // Show navigation on scroll

// Initially hide the navigation
nav.style.display = 'none';

// Call showNav to ensure the nav is shown when the page loads and then hides after inactivity
showNav();