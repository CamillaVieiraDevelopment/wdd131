/* scripts/main.js - Global Functionality */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Function for Footer Dates (Criteria 9 & 10)
    const updateFooter = () => {
        const yearSpan = document.querySelector("#year");
        const lastMod = document.querySelector("#lastModified");

        if (yearSpan) yearSpan.textContent = new Date().getFullYear();
        if (lastMod) {
            // Template Literal (Criteria 14)
            lastMod.textContent = `Last Modification: ${document.lastModified}`;
        }
    };

    updateFooter();
});