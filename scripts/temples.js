document.addEventListener("DOMContentLoaded", () => {
    
    const currentYearSpan = document.getElementById("current-year");
    const lastModifiedSpan = document.getElementById("last-modified-date");

    
    currentYearSpan.textContent = new Date().getFullYear();

    
    lastModifiedSpan.textContent = document.lastModified;

    
    const menuButton = document.getElementById("menu-button");
    const navMenu = document.getElementById("nav-menu");

    menuButton.addEventListener("click", () => {
        
        navMenu.classList.toggle("open");

        
        if (navMenu.classList.contains("open")) {
            menuButton.innerHTML = "&#10006;";
            menuButton.setAttribute("aria-label", "Cerrar menú");
        } else {
            menuButton.innerHTML = "&#9776;"; 
            menuButton.setAttribute("aria-label", "Abrir menú");
        }
    });
});