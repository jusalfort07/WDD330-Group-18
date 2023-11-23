import { getLocalStorage } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems != null) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Images.PrimarySmall}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

function cartTotal(){
  // const element = document.querySelector(".product-list");
  // const checkElement = element.hasChildNodes();
  const cartItems = getLocalStorage("so-cart");
  var total = 0;

  if(cartItems != null){
    document.querySelector(".cart-footer").classList.remove("hide")
    cartItems.forEach((item) => {
      total += item.FinalPrice

    })
    document.querySelector(".cart-total").innerHTML = "Total: " + total;
  } else {
    document.querySelector(".cart-footer").classList.add("hide");
  }
}

cartTotal()

renderCartContents();
