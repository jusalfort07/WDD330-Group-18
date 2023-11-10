import { setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(productId, dataSource){
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
      }
      async init() {
        this.product = await dataSource.findProductById(e.target.dataset.id);
        document.getElementById("addToCart")
        .addEventListener("click", addToCartHandler);
      }

      renderProductDetails(){
        // document.---    maybe create a div and display product info card 
    }

    addToCart() {
        setLocalStorage("so-cart", product);
    }
}

