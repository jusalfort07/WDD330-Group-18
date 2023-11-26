import { renderListWithTemplate } from "./utils.mjs";   

function productCardTemplate(product){
    return `<li class="product-card">
    <a href="../product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Images.PrimaryMedium}"
        alt="${product.NameWithoutBrand}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.NameWithoutBrand}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p></a
    >
  </li>`
}

export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;

    }
    async init() {
        const list = await this.dataSource.getData(this.category);
        const limitedList = this.limitResult(list);

        this.renderList(limitedList);
    }
    renderList(list) {
        // const htmlStrings = list.map(productCardTemplate);
        // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

        renderListWithTemplate(productCardTemplate, this.listElement, list);
    }

    //limits the result to 4
    limitResult(list){
        return list.splice(0,4)
    }
}