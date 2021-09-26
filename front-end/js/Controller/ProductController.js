import { findAll as findAllProducts } from "../Model/ProductRepository.js";
import { getProductCard } from "../View/ProductView.js";

function addAllProductsCards(products) {
  for (let i = 0; i < products.length; i++) {
    furniture.appendChild(getProductCard(products[i]));
  }
}

findAllProducts().then((products) => addAllProductsCards(products));
