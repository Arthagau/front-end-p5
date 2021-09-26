import { BASE_API_URL } from "../config.js";
import ProductModel from "../Model/ProductModel.js";

export async function findAll() {
  try {
    const response = await fetch(BASE_API_URL + "/furniture");
    if (!response.ok) throw await response.json();
    const data = await response.json();
    const products = []; // on récupère les données de l'API
    data.forEach((product) => products.push(new ProductModel(product))); // pour chaque produit on crée un élément avec ses caractéristiques dans le tableau products
    return products; // on obtient au final un tableau avec tous les produits
  } catch (e) {
    let errorMessage = document.querySelector("#products-info");
    errorMessage.innerHTML = `Oups, nous n'avons pas réussi à trouver les produits, avez vous pensé à lancer le serveur local ?`;
  }
}

export async function findById(idProduct) {
  try {
    const response = await fetch(BASE_API_URL + `/furniture/${idProduct}`); // on récupère ici seulement un produit spécifique via son id
    if (!response.ok) throw await response.json();
    const data = await response.json();
    return new ProductModel(data);
  } catch (e) {
    let errorMessage = document.querySelector("#productMissing");
    errorMessage.classList.add(
      "text-center",
      "bg-warning",
      "m-auto",
      "p-3",
      "mt-5",
      "rounded",
      "w-50"
    );
    errorMessage.innerHTML = `Votre produit est introuvable, veuillez lancer le serveur local et retourner sur la page d'accueil`;
  }
}
