const menuEmail = document.querySelector(".userEmail");
const desktopMenu = document.querySelector(".desktopMenu");

const burgerMenu = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobileMenu")

const cartMenu = document.querySelector(".navShoppingCart");
const cartDetail = document.querySelector(".cartDetail");

menuEmail.addEventListener("click", toggleMenu);
burgerMenu.addEventListener("click", toggleBurger);
cartMenu.addEventListener("click", toggleCart);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleBurger(){
    mobileMenu.classList.toggle("inactive");
}

function toggleCart(){
    cartDetail.classList.toggle("inactive");

    if (mobileMenu.classList.contains("inactive")) {
        
    }
}