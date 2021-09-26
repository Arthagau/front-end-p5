import { BASE_API_URL } from "../config.js";

const form = document.querySelector("#basketForm");

const checkRegExpNameAndCity = (inputText) => {
  // vérifie que les input pour le nom prénom et ville sont corrects
  return /^([a-zA-Z]{3,20})?([-]{0,1})?([a-zA-Z]{3,20})$/.test(inputText);
};

function validateInput(querySelectorId) {
  document.querySelector(`#${querySelectorId}`).textContent = ""; // si l'input est valide le message d'erreur est vidé
}

function showErrorMessage(querySelectorId) {
  document.querySelector(`#${querySelectorId}`).textContent = // si l'input est non valide le message d'erreur est affiché
    "Remplissez bien ce champ !";
}

function validFirstName() {
  // on vérifie que l'input est valide, si c'est le cas on retourne une valeur true
  const inputText = form.firstName.value;
  if (checkRegExpNameAndCity(inputText)) {
    validateInput("first-name-error");
    return true;
  } else {
    showErrorMessage("first-name-error");
    return false;
  }
}

function validLastName() {
  const inputText = form.lastName.value;
  if (checkRegExpNameAndCity(inputText)) {
    validateInput("last-name-error");
    return true;
  } else {
    showErrorMessage("last-name-error");
    return false;
  }
}

function validAddress() {
  const inputText = form.address.value;
  if (/[A-Za-z0-9\s]{5,50}$/.test(inputText)) {
    validateInput("address-error");
    return true;
  } else {
    showErrorMessage("address-error");
    return false;
  }
}

function validCity() {
  const inputText = form.city.value;
  if (checkRegExpNameAndCity(inputText)) {
    validateInput("city-error");
    return true;
  } else {
    showErrorMessage("city-error");
    return false;
  }
}

function validEmail() {
  const inputText = form.email.value;
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      inputText
    )
  ) {
    validateInput("email-error");
    return true;
  } else {
    showErrorMessage("email-error");
    return false;
  }
}

function SendFormAndBasketInfo() {
  const formButton = document.querySelector("#form-btn");
  let copyOfProducts = JSON.parse(localStorage.getItem("products"));
  let productsId = [];
  copyOfProducts.forEach((e) => {
    // on récupère les id de tous les produits présents dans le panier pour les push dans un nouveau tableau
    productsId.push(e.product._id);
  });

  formButton.addEventListener("click", (e) => {
    e.preventDefault();

    const contact = {
      // on crée ici l'objet contact avec les différentes valeurs récupérés du formulaire
      firstName: document.querySelector("#firstName").value,
      lastName: document.querySelector("#lastName").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value,
      email: document.querySelector("#email").value,
    };

    if (
      validFirstName() &&
      validLastName() &&
      validCity() &&
      validAddress() &&
      validEmail() &&
      productsId.length > 0
    ) {
      // si tous les inputs sont validés et qu'un élément est présent dans le panier on envoie l'objet contact vers le LS
      localStorage.setItem("contact", JSON.stringify(contact));
      const order = {
        // on crée ensuite l'objet order en récupérant le contact et les id des produits
        contact,
        products: productsId,
      };

      const sendOrder = fetch(BASE_API_URL + "/furniture/order", {
        // on envoie l'objet contenant le contact et la liste des id vers l'API
        method: "POST",
        body: JSON.stringify(order),
        headers: { "Content-Type": "application/json" },
      });

      sendOrder.then(async (response) => {
        try {
          const data = await response.json();
          localStorage.clear();
          localStorage.setItem("OrderId", JSON.stringify(data.orderId)); // on crée ensuite un objet dans le LS en récupérant l'id de la commande renvoyé par l'API
          localStorage.setItem(
            "TotalPrice",
            document.querySelector("#total-price").innerHTML
          );
          document.location.href = "confirm.html"; // une fois que la requête est terminé on passe sur la page de confirmation
        } catch (e) {
          console.log(e);
        }
      });
    } else {
      alert(
        "Attention: un produit minimum dans le panier et pensez à bien remplir le formulaire !"
      );
    }
  });
}
SendFormAndBasketInfo();
