import { setLocalStorage, alertMessage } from "./utils.mjs";
function productDetailsTemplate(product) {
  var discount = product.SuggestedRetailPrice - product.FinalPrice;
  return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
    <h2 class="divider">${product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${product.Images.PrimaryExtraLarge}"
      alt="${product.NameWithoutBrand}"
    />
    <p class="product-srp">Suggested Retail Price: $${product.SuggestedRetailPrice}</p>
    <p class="product-discount">Discount: $${discount.toFixed(2)}</p>
    <p class="product-card__price">Final Price: $${product.FinalPrice}</p>
    <p class="product__color">${product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div></section>`;
}

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    async init() {
      this.product = await this.dataSource.findProductById(this.productId);
      this.renderProductDetails("main");

      
      document
        .getElementById("addToCart")
        .addEventListener("click", this.addToCart.bind(this));
    }

    renderProductDetails(selector) {
      const element = document.querySelector(selector);
      element.insertAdjacentHTML(
        "afterBegin",
        productDetailsTemplate(this.product)
      );
    }

    addToCart() {
        setLocalStorage("so-cart", this.product);
        alertMessage(`${this.product.NameWithoutBrand} added to cart!`);
    }
}

