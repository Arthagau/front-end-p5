function generateEmptyBasket(){
  return `
  <div class='empty-basket bg-white rounded d-flex flex-column mt-3'>
  <div class='p-2 d-flex justify-content-center'> Le panier est vide, retourner sur l'accueil pour choisir vos produits !</div>
  <button class='btn bg-warning d-flex justify-content-center' onclick="window.location.href='/front-end-p5/index.html'"> Retour vers l'accueil</button> 
  </div>`;
}

export function createBasket(basket){
    
const products = basket.getProducts();

const searchIndex = basket.searchIndexFromProductAndVarnish();

  const basketContent = document.querySelector('.content-resume');
    
  if(products.length === 0){
    basketContent.innerHTML = generateEmptyBasket();
      
  } else {

    let productInBasket = [];      
    for(var i=0; i<products.length; i++ ){
      let totalPriceProduct = products[i].quantity * products[i].product.price/100;
      productInBasket = productInBasket + `
      <div class="product d-flex justify-content-around shadow-sm w-100 mt-3">
      <div class="product-name mt-1">
      <h4>${products[i].product.name}</h4>
      <h6>Vernis : ${products[i].varnish}</h6>
      </div>
      <div class="product-quantity mt-2">
      <p class="p-2">${products[i].quantity}</p>
      </div>
      <div class="product-price mt-2">
      <p>${totalPriceProduct + `€`}</p>
      </div>
      <div class="product-delete" data-id="${products[i].product._id}" data-varnish="${products[i].varnish}" >
      <i class="fas fa-times-circle"></i>
      </div>
      </div>`
    }

    const totalPriceBasket = document.querySelector('.total-price');
    totalPriceBasket.innerHTML = `Prix total : ` + basket.getTotal();

    if(i == products.length){
      basketContent.innerHTML = productInBasket;
    }


    const removeProductButtons = document.querySelectorAll('.product-delete'); 
    removeProductButtons.forEach((button) => {
      button.addEventListener('click', () => {
        basket.removeProductWithVarnish(button.dataset.id,button.dataset.varnish);
        window.location.reload(false); // à revoir, renvoyer un nouveau tableau vide au lieu de rafraichir la page 
      })
     });

    const clearBasketButton = document.getElementById('clear-basket');
      clearBasketButton.addEventListener('click', () => {
        basket.clear();
        window.location.reload(false); // à revoir, renvoyer un nouveau tableau vide au lieu de rafraichir la page 
    });
  }
}
