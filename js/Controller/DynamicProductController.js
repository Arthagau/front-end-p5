import {findById as  findOneProduct} from "../Model/ProductRepository.js";
import DynamicProductCardView from "../View/DynamicProductView.js";
import {getQueryParam} from "../utils.js";
import Basket from "../Model/Basket.js";

createDynamicCard();

async function createDynamicCard(){
  const ProductViewElt=document.getElementById('ProductView');
  const product = await findOneProduct(getQueryParam('id'));
  const view = new DynamicProductCardView(product, new Basket());
  ProductViewElt.appendChild(view.container);
};