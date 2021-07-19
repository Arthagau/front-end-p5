import {findById as  findOneProduct} from "../Model/ProductRepository.js";
import {getDynamicProductCard} from "../View/DynamicProductView.js";
import {getQueryParam} from "../utils.js"

createDynamicCard();

async function createDynamicCard(){
    const ProductViewElt=document.getElementById('ProductView');
    const product = await findOneProduct(getQueryParam('id'));
    const viewElt = getDynamicProductCard(product);
    ProductViewElt.appendChild(viewElt);
}
