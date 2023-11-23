import ExternalServices from "./ExternalServices.mjs"
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParams } from "./utils.mjs";

const category = getParams("category");
const dataSource = new ExternalServices();
const listElement = document.querySelector(".product-list");
const list = new ProductList(category, dataSource, listElement)

document.title = "Top Product: " + category.toUpperCase();

loadHeaderFooter();
list.init()