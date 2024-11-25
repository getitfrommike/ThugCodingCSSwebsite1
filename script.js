// Typewriter effect setup
const typewriterText = "Thug Coding® CSS Mastery: From Beginner to Advanced";
let index = 0;
const typingSpeed = 100; // Speed in milliseconds between each character

function typeWriter() {
    const element = document.getElementById("typewriter");

    if (index < typewriterText.length) {
        element.textContent += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        // Show the navbar after the typewriter effect finishes
        showNavbar();
    }
}

// Function to show the navbar after typing
function showNavbar() {
    const navbar = document.getElementById("navbar");
    navbar.style.opacity = '0';
    navbar.style.display = 'block'; // Show the navbar
    setTimeout(() => {
        navbar.style.transition = 'opacity 1s ease-in-out';
        navbar.style.opacity = '1'; // Fade in
    }, 100);
}

// Event listeners to display the content when clicking on navbar links
document.getElementById('beginnerLink').addEventListener('click', function(event) {
    event.preventDefault();
    displaySection('beginnerText');
});

document.getElementById('intermediateLink').addEventListener('click', function(event) {
    event.preventDefault();
    displaySection('intermediateText');
});

document.getElementById('advancedLink').addEventListener('click', function(event) {
    event.preventDefault();
    displaySection('advancedText');
});

// Function to display the selected section and hide others with a fade-in effect
function displaySection(sectionId) {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.opacity = '0'; // Set all sections to invisible first
        section.style.display = 'none'; // Hide all sections
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block'; // Display the clicked section
    setTimeout(() => {
        targetSection.style.transition = 'opacity 1s ease-in-out';
        targetSection.style.opacity = '1'; // Fade in the target section
    }, 100); // Adding a slight delay to trigger transition smoothly
}

// Start the typewriter effect when the page loads
document.addEventListener("DOMContentLoaded", typeWriter);

















