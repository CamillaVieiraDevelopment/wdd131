// 1. Hamburger Menu Functionality
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    // Toggles the 'show' class on the button to change the icon (≡ to X)
    menuButton.classList.toggle('show');
    // Toggles the 'show' class on the <ul> list to show/hide items
    navigation.classList.toggle('show');
});

// 2. Footer Dates (Year and Last Modification)
// Selects the element for the current year
const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Optional: Add the last modification date
// Since the HTML only has one <span> for the year, we add the modification date after the paragraph
const footerParagraph = document.querySelector('footer p');
const lastModified = document.lastModified;
const modificationText = document.createElement('p');
modificationText.textContent = `Last Modification: ${lastModified}`;
modificationText.style.fontSize = "0.8rem"; // Light optional styling
modificationText.style.marginTop = "0.5rem";
document.querySelector('footer').appendChild(modificationText);