function generateEmptyBasket() {
  return `
  <div class='empty-basket bg-white rounded d-flex flex-column mt-3'>
  <div class='p-2 d-flex justify-content-center'> Le panier est vide, retourner sur l'accueil pour choisir vos produits !</div>
  <button class='btn bg-warning d-flex justify-content-center' onclick="window.location.href='/front-end/index.html'"> Retour vers l'accueil</button> 
  </div>`;
}

export function createBasket(basket) {
  // on crée ici le visuel du panier en utilisant les méthodes du model par la suite dans le controller
  const products = basket.getProducts();

  const basketContent = document.querySelector(".content-resume");

  if (products.length === 0) {
    basketContent.innerHTML = generateEmptyBasket(); // si aucun produit n'est pas présent dans le LS on affiche le message du panier vide
  } else {
    let productInBasket = []; // sinon on crée une carte pour chaque produit dans le panier
    for (var i = 0; i < products.length; i++) {
      let totalPriceProduct =
        (products[i].quantity * products[i].product.price) / 100;
      productInBasket =
        productInBasket +
        `
      <div class="product d-flex justify-content-around shadow-sm w-100 mt-3">
      <div class="product-name mt-1 p-3">
      <h4>${products[i].product.name}</h4>
      <h6>Vernis : ${products[i].varnish}</h6>
      </div>
      <div class="product-quantity mt-2">
      <p class="p-2">${products[i].quantity}</p>
      </div>
      <div class="product-price mt-2">
      <p>${totalPriceProduct + `€`}</p>
      </div>
      <div class="product-delete p-2" data-id="${
        products[i].product._id
      }" data-varnish="${products[i].varnish}" >
      <i class="fas fa-times-circle"></i>
      </div>
      </div>`;
    }

    const totalPriceBasket = document.querySelector("#total-price");
    totalPriceBasket.innerHTML = `${basket.getTotal()} €`;

    if (i == products.length) {
      basketContent.innerHTML = productInBasket;
    }

    const removeProductButtons = document.querySelectorAll(".product-delete");
    removeProductButtons.forEach((button) => {
      button.addEventListener("click", () => {
        basket.removeProductWithVarnish(
          button.dataset.id,
          button.dataset.varnish
        );
        window.location.reload();
      });
    });

    const clearBasketButton = document.getElementById("clear-basket");
    clearBasketButton.addEventListener("click", () => {
      basket.clear();
    });
  }
}
