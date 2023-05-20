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
    const isCartClosed = cartDetail.classList.contains("inactive");
    if (!isCartClosed){
        cartDetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleBurger(){
    const isCartClosed = cartDetail.classList.contains("inactive");
    if (!isCartClosed){
        cartDetail.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCart(){
    const isMobileClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    
    if (!isMobileClosed) {
        mobileMenu.classList.add("inactive");
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    cartDetail.classList.toggle("inactive");
}