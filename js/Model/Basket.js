export default class Basket {
  constructor() {
    this.products = this.__loadFromStorage();
  }

  __loadFromStorage() {
    // on récupère dans le LS la liste des produits si elle existe, sinon on renvoie un tableau vide
    let productsInStorage = JSON.parse(localStorage.getItem("products"));
    if (Array.isArray(productsInStorage)) {
      return productsInStorage;
    } else {
      return [];
    }
  }

  __saveToStorage() {
    // on crée l'objet JSON à partir des différents produits ajoutés
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  searchIndexFromProductAndVarnish(_id, varnish) {
    // permet d'obtenir l'index d'un produit dans la liste selon son id et son vernis
    return this.products.findIndex(
      (e) => e.varnish === varnish && e.product._id === _id
    );
  }

  getTotal() {
    const totalPriceArray = this.products.map(function (e) {
      return (e.product.price * e.quantity) / 100; // on obtient une nouvelle liste avec le prix de chaque produit multiplié par sa quantité
    });
    const reducer = (acc, curr) => acc + curr;
    return totalPriceArray.reduce(reducer); // au final on additionne tous les prix obtenus pour ressortir le prix total
  }

  clear() {
    this.products = [];
    this.__saveToStorage();
  }

  addProduct(product, varnish, quantity) {
    const item = this.products.find(
      (item) => item.varnish === varnish && item.product._id === product._id // on vérifie ici si le produit existe déjà dans l'objet 'product' dans le LS
    );
    if (item) {
      item.quantity += Number(quantity); // si le produit est déjà présent on l'incrémente
    } else {
      this.products.push({ product, varnish, quantity: Number(quantity) }); // sinon on ajoute le produit
    }
    this.__saveToStorage();
  }

  removeProductWithVarnish(_id, varnish) {
    const index = this.searchIndexFromProductAndVarnish(_id, varnish); // on se sert de l'index récupéré plus tôt pour enlever le produit correspondant du panier
    this.products.splice(index, 1);
    this.__saveToStorage();
  }

  getProducts() {
    return this.products;
  }
}
