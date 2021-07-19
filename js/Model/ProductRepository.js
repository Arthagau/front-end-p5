import {BASE_API_URL} from "../config.js"
import ProductModel from '../Model/ProductModel.js';

/**
 * 
 * @returns <ProductModel,int>
 */
export async function findAll() {
        const response = await fetch(BASE_API_URL +'/furniture');
        const data = await response.json();
        const products = [];
        data.forEach (product => products.push(new ProductModel(product)));
        return products;
}

export async function findById (idProduct) {
      const response = await fetch(BASE_API_URL +`/furniture/${idProduct}`);
      const data = await response.json();
      return new ProductModel(data);
}
