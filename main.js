const menuEmail = document.querySelector(".userEmail");
const desktopMenu = document.querySelector(".desktopMenu");

const burgerMenu = document.querySelector(".burgerMenu");
const mobileMenu = document.querySelector(".mobileMenu")

const cartMenu = document.querySelector(".navShoppingCart");
const cartDetail = document.querySelector(".cartDetail");

const cardsContainer = document.querySelector(".cardsContainer");

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


const productList = []
productList.push({
    name: "KTM Duke",
    price: 100000,
    image: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "KTM Duke",
    price: 100000,
    image: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "KTM Duke",
    price: 100000,
    image: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "KTM Duke",
    price: 100000,
    image: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "KTM Duke",
    price: 100000,
    image: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.classList.add("productImg");

    const productInfo = document.createElement("div");
    productInfo.classList.add("productInformation");

    const productInfoContent = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.textContent = `$ ${product.price}`;
    const productName = document.createElement("p");
    productName.textContent = product.name;

    const productFigure = document.createElement("figure");
    const figureImage = document.createElement("img");
    figureImage.src = "./assets/Platzi_YardSale_Icons/bt_add_to_cart.svg"


    productFigure.appendChild(figureImage);
    productInfoContent.appendChild(productPrice);
    productInfoContent.appendChild(productName);
    productInfo.appendChild(productInfoContent);
    productInfo.appendChild(productFigure);
    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
});