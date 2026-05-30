document.addEventListener("DOMContentLoaded", () => {
    // 1. Footer Dates Configuration
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // 2. Weather & Wind Chill Processing
    // Extract static values from the HTML text content
    const temp = parseFloat(document.getElementById("temp").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const windChillElement = document.getElementById("windchill");

    // Single-line return calculation function (Metric Formula)
    const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

    // Validate parameters before output execution (Metric Limits: Temp <= 10°C AND Wind > 4.8 km/h)
    if (temp <= 10 && wind > 4.8) {
        const chillFactor = calculateWindChill(temp, wind);
        windChillElement.textContent = `${chillFactor.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});