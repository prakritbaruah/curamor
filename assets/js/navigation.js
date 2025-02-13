const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle navigation menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-links li a").forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Update nav background color
const header = document.querySelector("header");
const navMenu = document.querySelector(".nav-links");
navMenu.style.backgroundColor = "#548cdc";

