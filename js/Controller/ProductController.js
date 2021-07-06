import {BASE_API_URL} from "../config.js"

var ProductController = function ProductController(ProductView, ProductModel) {
    this.ProductView = ProductView;
    this.ProductModel = ProductModel;
};

let params = (new URL(document.location)).searchParams;
let ProductId = params.get("id");

async function getProduct() {
   const response = await fetch(BASE_API_URL+`/furniture/${ProductId}`)
   const data = await response.json();
   return data
}
