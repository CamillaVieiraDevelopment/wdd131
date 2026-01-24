/* JavaScript for place.html - WDD 131 */

// Update footer with current year and last modification date 
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static values for temperature and wind speed 
const temperature = parseFloat(document.getElementById("temp").textContent);
const windSpeed = parseFloat(document.getElementById("wind").textContent);

/**
 * Calculates the wind chill factor for Metric units (°C, km/h) 
 * Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
 */
function calculateWindChill(temp, speed) {
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

// Check conditions before calling the function 
if (temperature <= 10 && windSpeed > 4.8) {
    const wc = calculateWindChill(temperature, windSpeed);
    document.getElementById("chill").textContent = `${wc} °C`;
} else {
    document.getElementById("chill").textContent = "N/A";
}