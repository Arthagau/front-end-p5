import {createBasket} from "../View/basketView.js";
import Basket from "../Model/Basket.js";

createBasketPage();

function createBasketPage(){
  const basket = new Basket();
    createBasket(basket);
};
