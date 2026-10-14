// navbar.js - makes the Lowland University home page interactive

const navbar = document.getElementById("main-navbar");
const menuButton = document.getElementById("menu-button");
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const backToTopButton = document.getElementById("back-to-top-button");
const contactForm = document.getElementById("contact-form");
const contactFormMessage = document.getElementById("contact-form-message");
const currentYear = document.getElementById("current-year");

// ---------- 1. Open and close the mobile menu ----------
function openMenu() {
  mobileMenu.classList.remove("hidden");
  menuIcon.classList.remove("fa-bars");
  menuIcon.classList.add("fa-times");
}

function closeMenu() {
  mobileMenu.classList.add("hidden");
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
}

menuButton.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    openMenu();
  } else {
    closeMenu();
  }
});

// Close the menu after tapping a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Close the menu if the screen becomes wide (desktop)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) closeMenu();
});

// ---------- 2. Navbar shadow and back-to-top button on scroll ----------
window.addEventListener("scroll", () => {
  // Shadow under the navbar once you scroll down
  if (window.scrollY > 10) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }

  // Show the back-to-top button after scrolling 400px
  if (window.scrollY > 400) {
    backToTopButton.classList.remove("hidden");
    backToTopButton.classList.add("flex");
  } else {
    backToTopButton.classList.add("hidden");
    backToTopButton.classList.remove("flex");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ---------- 3. Contact form (message only, no database yet) ----------
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-sender-email").value.trim();
  const message = document.getElementById("contact-message").value.trim();

  if (name === "" || email === "" || message === "") {
    contactFormMessage.textContent = "Please fill in all the fields.";
    contactFormMessage.classList.remove("text-blue-700");
    contactFormMessage.classList.add("text-orange-600");
    return;
  }

  contactFormMessage.textContent = "Thank you, " + name + ". We will reply soon.";
  contactFormMessage.classList.remove("text-orange-600");
  contactFormMessage.classList.add("text-blue-700");
  contactForm.reset();
});

// ---------- 4. Footer year ----------
currentYear.textContent = new Date().getFullYear();
