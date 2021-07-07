import {BASE_API_URL} from "../config.js"
<<<<<<< Updated upstream

var ProductController = function ProductController(ProductView, ProductModel) {
    this.ProductView = ProductView;
    this.ProductModel = ProductModel;
};

let params = (new URL(document.location)).searchParams;
let ProductId = params.get("id");

async function getProduct() {
   const response = await fetch(BASE_API_URL+`/furniture/${ProductId}`)
   const data = await response.json();
   return data
}
=======
/* Récupération de l'id du produit dans l'url de la page */
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idProduct = urlParams.get('id')

export function getId () {
     return fetch(BASE_API_URL +`/furniture/${idProduct}`).then(response => response.json());
}

>>>>>>> Stashed changes
