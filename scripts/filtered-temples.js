// 1. Array of Temple Objects (with 3 additional temples added)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // --- Three Additional Temples ---
  {
    templeName: "Bogota Colombia",
    location: "Bogota, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-831127-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-37-1021721-wallpaper.jpg"
  },
  {
    templeName: "San Jose Costa Rica",
    location: "San Jose, Costa Rica",
    dedicated: "2000, June, 4",
    area: 10700,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-jose-costa-rica/400x250/san-jose-costa-rica-temple-lds-182390-wallpaper.jpg"
  }
];

// 2. DOM Elements
const galleryContainer = document.getElementById("gallery-container");
const galleryTitle = document.getElementById("gallery-title");
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

// 3. Function to Render Cards
function displayTemples(filteredTemples) {
  galleryContainer.innerHTML = ""; // Clear existing content
  
  filteredTemples.forEach(temple => {
    // Create card element structure
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="400" height="250">
    `;
    
    galleryContainer.appendChild(card);
  });
}

// 4. Filtering Logic & Event Listeners
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Manage active menu class
    document.querySelectorAll("#nav-menu a").forEach(item => item.classList.remove("active"));
    link.classList.add("active");

    const filter = link.id;
    let filteredList = [];

    if (filter === "nav-old") {
      // Filter built before 1900 (extracting year from string)
      filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      galleryTitle.textContent = "Old Temples";
    } else if (filter === "nav-new") {
      // Filter built after 2000
      filteredList = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      galleryTitle.textContent = "New Temples";
    } else if (filter === "nav-large") {
      // Filter area > 90000 sq ft
      filteredList = temples.filter(t => t.area > 90000);
      galleryTitle.textContent = "Large Temples";
    } else if (filter === "nav-small") {
      // Filter area < 10000 sq ft
      filteredList = temples.filter(t => t.area < 10000);
      galleryTitle.textContent = "Small Temples";
    } else {
      // Home / All
      filteredList = temples;
      galleryTitle.textContent = "Home";
    }

    displayTemples(filteredList);
    
    // Close responsive mobile menu on selection if open
    navMenu.classList.remove("show");
  });
});

// 5. Mobile Hamburger Menu Toggle
menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// 6. Footer Information (Year and Last Modified)
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified-date").textContent = document.lastModified;

// Initial Call to display all temples on home load
displayTemples(temples);