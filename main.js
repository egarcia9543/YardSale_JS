const menuEmail = document.querySelector(".userEmail");
const desktopMenu = document.querySelector(".desktopMenu")

menuEmail.addEventListener("click", toggleMenu);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
}