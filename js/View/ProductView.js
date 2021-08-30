export function getProductCard(product){
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

    newA.href='product.html?id='+product._id;
    newImg.src=product.imageUrl;
    newH3.textContent=product.name;
    newPara1.textContent=product.description;
    newPara2.textContent=(product.price/100)+'€';

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

    newDiv.appendChild(newA);
    newA.appendChild(newDiv1);
    newDiv1.appendChild(newDiv2);
    newDiv2.appendChild(newImg);
    newDiv1.appendChild(newDiv3);
    newDiv3.appendChild(newDiv4);
    newDiv4.appendChild(newH3);
    newDiv4.appendChild(newPara1);
    newDiv4.appendChild(newPara2);

  /*  if(window.addEventListener(`Cross-Origin Request`, (e))){
        let containerProducts = document.querySelector('#products-info');
        containerProducts.innerHTML = `<p>Nous n'avons pas réussi à trouver vos produits, avez-vous bien lancé le serveur local ?</p>`
    }else{
        return newDiv;
    }*/
    return newDiv;
}