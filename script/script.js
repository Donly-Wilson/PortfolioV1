// Variables
let header = document.querySelector(".header")
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


//Add sticky nav when menu starts scrolling
function stickyNav() {
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}
stickyNav();

/*----------------Toggle Active Based On Section---------------*/
const links = document.querySelectorAll('.header-nav__link');
const sections = document.querySelectorAll('section');

//function controlls active on link when windows scroll is more than section
function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 350 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

// changeLinkState();
// window.addEventListener('scroll', changeLinkState);

const options ={
  // root:sections.forEach(section =>section),
  root:null,
  rootMargin: "0px 0px -400px 0px",
  threshold: [] // half of item height
};

//Observer for monitoring section and switching active links
const activeSectionObserver = new IntersectionObserver(function
  (entries, observer){
  entries.forEach(entry => {
    changeLinkState();
    // console.log(entry.target)
  });
}, options);

sections.forEach(section => {
  activeSectionObserver.observe(section);
})