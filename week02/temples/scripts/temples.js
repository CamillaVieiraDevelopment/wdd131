// Hamburger Menu Logic
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navigation.classList.toggle('show');
});

// Dynamic Footer Dates
const yearSpan = document.querySelector('#year');
if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }

const footer = document.querySelector('footer');
if (footer) {
    const lastMod = document.createElement('p');
    lastMod.textContent = `Last Modification: ${document.lastModified}`;
    lastMod.style.fontSize = "0.8rem";
    lastMod.style.marginTop = "0.5rem";
    footer.appendChild(lastMod);
}