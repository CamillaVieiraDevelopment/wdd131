//list of products
const products = [
    { id: "fc-1888", name: "Air conditioning", averagerating: 4.5 },
    { id: "fc-2050", name: "Gas water", averagerating: 4.7 },
    { id: "fs-1987", name: "Eletric shower", averagerating: 3.5 },
    { id: "ac-2000", name: "Solar heating", averagerating: 3.9 },
    { id: "jj-1969", name: "Automatic door", averagerating: 5.0 }
];

const select = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});

//Footer Dates
const yearSpan = document.querySelector('#year');
yearSpan.textContent = new Date().getFullYear();

const lastModSpan = document.querySelector('#lastModified');
lastModSpan.textContent = `Last Modification: ${document.lastModified}`;