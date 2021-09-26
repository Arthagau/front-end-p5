export default class DynamicProductCardView {
  // on crée ici le visuel pour la page dynamique
  constructor(product, basket) {
    this.product = product;
    this.productNameElt = null;
    this.quantityElt = null;
    this.addToBasketElt = null;
    this.varnishSelectElt = null;
    this.productPriceElt = null;
    this.container = this.getDynamicProductCard(product);
    this.basket = basket;
  }

  getDynamicProductCard(product) {
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");
    let newDiv1 = document.createElement("div");
    let newH3 = document.createElement("h3");
    let newPara = document.createElement("p");
    let newDiv2 = document.createElement("div");
    let newLabel = document.createElement("label");
    let newSelect = document.createElement("select");
    let newLabel1 = document.createElement("label");
    let newInput = document.createElement("input");
    let newDiv3 = document.createElement("div");
    let newDiv4 = document.createElement("div");
    let newH5 = document.createElement("h5");
    let newA = document.createElement("a");
    let newI = document.createElement("i");

    newImg.src = product.imageUrl;
    newH3.textContent = product.name;
    newPara.textContent = product.description;
    newH5.textContent = product.price / 100 + `€`;

    for (let i = 0; i < product.varnish.length; i++) {
      let option = document.createElement("option");
      option.id = `selected-varnish` + i;
      option.value = product.varnish[i];
      option.innerText = product.varnish[i];
      newSelect.appendChild(option);
    }
    this.varnishSelectElt = newSelect;

    newLabel.textContent = "Vernis:";
    newLabel1.textContent = "Quantité:";
    newA.textContent = "Ajouter au panier";
    newDiv.classList.add("card");
    newImg.classList.add("card-img");
    newDiv1.classList.add("card-body");
    newH3.classList.add("card-title");

    newH3.id = "product-name";
    this.productNameElt = newH3;

    newPara.classList.add("card-text");
    newDiv2.classList.add("d-flex", "flex-column", "justify-content-center");
    newLabel.classList.add("p-1");
    newLabel.setAttribute("for", "choice-varnish");
    newSelect.setAttribute("name", "colors");
    newSelect.id = "choice-varnish";
    newLabel1.classList.add("p-1");
    newLabel1.setAttribute("for", "quantity");

    newInput.classList.add("w-50");
    newInput.setAttribute("type", "number");
    newInput.setAttribute("name", "quantity");
    newInput.setAttribute("min", "1");
    newInput.setAttribute("max", "99");
    newInput.setAttribute("value", "1");
    newInput.id = "quantity";
    this.quantityElt = newInput;

    newDiv3.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    newDiv4.classList.add("price", "text-success");
    newH5.classList.add("mt-4");

    newH5.id = "product-price";
    this.productPriceElt = newH5;

    newA.classList.add("btn", "btn-success", "mt-3");
    newA.id = "AddToBasket";
    newI.classList.add("fas", "fa-shopping-cart");
    this.addToBasketElt = newA;
    this.addToBasketElt.addEventListener("click", () =>
      this.onAddToBasketClick()
    );

    newDiv.appendChild(newImg);
    newDiv.appendChild(newDiv1);
    newDiv1.appendChild(newH3);
    newDiv1.appendChild(newPara);
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(newLabel);
    newDiv2.appendChild(newSelect);
    newDiv2.appendChild(newLabel1);
    newDiv2.appendChild(newInput);
    newDiv1.appendChild(newDiv3);
    newDiv3.appendChild(newDiv4);
    newDiv4.appendChild(newH5);
    newDiv3.appendChild(newA);
    newA.appendChild(newI);

    return newDiv;
  }

  onAddToBasketClick() {
    // si la quantité est comprise entre 1 et 99 on ajoute l'élément au panier, sinon on avertit l'utilisateur
    if (this.quantityElt.value > 0 && this.quantityElt.value < 100) {
      this.basket.addProduct(
        this.product,
        this.varnishSelectElt.value,
        this.quantityElt.value
      );
      if (
        window.confirm(`${this.quantityElt.value} ${this.productNameElt.innerHTML} avec le vernis ${this.varnishSelectElt.value} a bien été ajouté au panier
        Consultez le panier OK ou rester sur la page ANNULER`)
      ) {
        window.location.href = "basket.html";
      }
    } else {
      window.alert(
        "Attention : la quantité doit être comprise entre 1 et 99 !"
      );
    }
  }
}
