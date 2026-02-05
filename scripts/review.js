//Storage Counter
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("counter").textContent = count;


//Footer Dates
const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

const lastModSpan = document.querySelector('#lastModified');
lastModSpan.textContent = `Last Modification: ${document.lastModified}`;