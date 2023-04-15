const menuEmail = document.querySelector(".userEmail");
const desktopMenu = document.querySelector(".desktopMenu");

const burgerMenu = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobileMenu")

menuEmail.addEventListener("click", toggleMenu);
burgerMenu.addEventListener("click", toggleBurger);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleBurger(){
    mobileMenu.classList.toggle("inactive");
}