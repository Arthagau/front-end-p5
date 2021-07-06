import ProductModel from '../Model/ProductModel.js';
import {BASE_API_URL} from "../config.js"

async function getData(){
    const response = await fetch(BASE_API_URL +'/furniture');
    const data = await response.json();
    return data;
}

function newProduct(data){
    const furniture=document.getElementById('furniture');

    for (let i=0;i<data.length; i++) {

        let newDiv = document.createElement('div');
        let newA = document.createElement('a');
        let newDiv1 = document.createElement('div');
        let newDiv2 = document.createElement('div');
        let newImg = document.createElement('img');
        let newDiv3 = document.createElement('div');
        let newDiv4 = document.createElement('div');
        let newH3 = document.createElement('h3');
        let newPara1 = document.createElement('p')
        let newPara2 = document.createElement('p')

        newA.href= 'product.html?id='+data[i]._id;
        newImg.src=data[i].imageUrl;
        newH3.textContent=data[i].name;
        newPara1.textContent=data[i].description;
        newPara2.textContent=(data[i].price/100)+'€';

        newDiv.classList.add('mb-3');
        newDiv.id = "card";
        newDiv1.classList.add('row', 'no-gutters');
        newDiv2.classList.add('col-md-4');
        newImg.classList.add('card-img');
        newDiv3.classList.add('col-md-8');
        newDiv4.classList.add('card-body');
        newH3.id = "card-name";
        newPara1.id = "card-descr";
        newPara2.id = "card-price";

        furniture.appendChild(newDiv);
        newDiv.appendChild(newA);
        newA.appendChild(newDiv1);
        newDiv1.appendChild(newDiv2);
        newDiv2.appendChild(newImg);
        newDiv1.appendChild(newDiv3);
        newDiv3.appendChild(newDiv4);
        newDiv4.appendChild(newH3);
        newDiv4.appendChild(newPara1);
        newDiv4.appendChild(newPara2);
    }
}
getData().then(newProduct);
