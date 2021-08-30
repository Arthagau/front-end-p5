export default class Basket {
    
  constructor(){
    this.products = this.__loadFromStorage();
  }

  __loadFromStorage(){
    let productsInStorage = JSON.parse(localStorage.getItem('product'));
    if(Array.isArray(productsInStorage)){
      return productsInStorage;
    }
    else{
      return [];
    }
  };

  __saveToStorage(){
    localStorage.setItem('product', JSON.stringify(this.products));
  }


  /**
   * Trouver l'index d'un produit avec un vernis spécifique
   * @param varnish {String}
   * @param productId {String}
   * @returns integer|null
   */
  searchIndexFromProductAndVarnish(productId,varnish){
    console.log(this.products.findIndex(e => e.varnish === varnish && e.product.productId === productId));
  }

  getTotal(){
    var totalPriceArray = this.products.map(function(e) {
      return (e.product.price * e.quantity) / 100;
    });
    const reducer = (acc, curr) => acc + curr;
    const totalPrice = totalPriceArray.reduce(reducer);
    return totalPrice + ` €`;
  }

  clear(){
    this.products = [];
    this.__saveToStorage();
  }

  addProduct(product,varnish,quantity){    
    // Verifier avant ajout s'il ne faut pas modifier la quantité d'un produit deja existant 
    if (false) { // TODO à revoir
      //this.products[nameProduct].quantity++
    } else {
    //si je ne trouve pas le couple produit/vernis
     
     
      this.products.push( {product,varnish,quantity:Number(quantity)});
    }
      
      this.__saveToStorage();
  };

  removeProductWithVarnish(productId,varnish){
    // TODO supprimer l'entrée index du tableau de produits & save LS
  }

  getProducts(){  
    return this.products;
  };
}