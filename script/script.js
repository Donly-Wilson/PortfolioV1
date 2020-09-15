// Variables
let menuBtn = document.querySelector(".header-menu-btn");
let navLinks = document.querySelector(".header-nav");
let hamburger = document.querySelector(".hamburger");

// Open and close mobile links
let mobileMenu = () => {
  showLinks();
  resizeEvent();
};

function showLinks() {
  menuBtn.addEventListener("click", () => {
    if (menuBtn) {
      menuBtn.classList.toggle("open-menu");
      navLinks.classList.toggle("active");
      navLinks.setAttribute(
        "style",
        "transition: all 0.3s ease-in-out;transition-delay: 0.2s;"
      );
    }
  });
}

// Remove "navLink" attribute on screen resize
function resizeEvent() {
  window.addEventListener("resize", () => {
    if (screen.width > 768) {
      navLinks.removeAttribute("style");
    }
  });
}

document.addEventListener("click", function (e) {
  let isNav = e.target.closest(".header");

  if (!isNav) {
    document.querySelector(".header-menu-btn").classList.remove("open-menu");
    document.querySelector(".header-nav").classList.remove("active");
    console.log("removed");
  }
});

mobileMenu();
