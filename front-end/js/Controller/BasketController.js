import { createBasket } from "../View/basketView.js";
import Basket from "../Model/Basket.js";

createBasketPage();

function createBasketPage() {
  // on crée ici le panier en utilisant le visuel généré dans basketView et les données récupérées dans la class Basket
  const basket = new Basket();
  createBasket(basket);
}
