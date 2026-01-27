// 1. Hamburger Menu Toggle
const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('show');
    navigation.classList.toggle('show');
});

// 2. Footer Dates
const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

const lastModSpan = document.querySelector('#lastModified');
lastModSpan.textContent = `Last Modification: ${document.lastModified}`;