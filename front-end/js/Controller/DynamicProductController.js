import { findById as findOneProduct } from "../Model/ProductRepository.js";
import DynamicProductCardView from "../View/DynamicProductView.js";
import { getQueryParam } from "../utils.js";
import Basket from "../Model/Basket.js";

createDynamicCard();

async function createDynamicCard() {
  const ProductViewElt = document.getElementById("ProductView");
  const product = await findOneProduct(getQueryParam("id")); // on récupère ici le produit correspondant à l'id récupéré dans l'url
  const view = new DynamicProductCardView(product, new Basket());
  ProductViewElt.appendChild(view.container);
}
