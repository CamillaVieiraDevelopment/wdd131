/* --- Hamburger Menu Logic --- */
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navigation.classList.toggle('show');
});

/* --- Footer Dynamic Content --- */
// Set current year
const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Display last modification date
const footer = document.querySelector('footer');
if (footer) {
    const lastModParagraph = document.createElement('p');
    lastModParagraph.textContent = `Last Modification: ${document.lastModified}`;
    lastModParagraph.style.fontSize = "0.8rem";
    lastModParagraph.style.marginTop = "0.5rem";
    footer.appendChild(lastModParagraph);
}