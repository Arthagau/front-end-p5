/* Récupération de l'id du produit et des données correspondant à l'id */
import {getId} from '../Controller/ProductController.js';
getId().then(function(dataAPI) {
        newImg.src = dataAPI.imageUrl; // insertion des données dans le HTML
        newH3.textContent=dataAPI.name;
        newPara.textContent=dataAPI.description;
        newH5.textContent=(dataAPI.price/100) +`€`;

        // Ajout des différentes options de vernis via une boucle pour l'id correspondant
        const VarnishColor=document.getElementById("choice-varnish");
        for (let i=0;i<dataAPI.varnish.length;i++) {
                let option = document.createElement('option');
                option.innerText = dataAPI.varnish[i];
                VarnishColor.appendChild(option);
        }
});

/* Création de la carte pour la page Produit */
const ProductView=document.getElementById('ProductView');

        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        let newDiv1 = document.createElement('div');
        let newH3 = document.createElement('h3');
        let newPara = document.createElement('p')
        let newDiv2 = document.createElement('div');
        let newLabel = document.createElement('label');
        let newSelect = document.createElement('select');
        let newLabel1 = document.createElement('label');
        let newInput = document.createElement('input')
        let newDiv3 = document.createElement('div');
        let newDiv4 = document.createElement('div');
        let newH5 = document.createElement('h5');
        let newA = document.createElement('a');
        let newI = document.createElement('i');

        newLabel.textContent="Vernis:";
        newLabel1.textContent="Quantité:";
        newA.textContent="Ajouter au panier";
        newDiv.classList.add('card');
        newImg.classList.add('card-img');
        newDiv1.classList.add('card-body');
        newH3.classList.add('card-title');
        newPara.classList.add('card-text');
        newDiv2.classList.add('d-flex','flex-column','justify-content-center');
        newLabel.classList.add('p-1');
        newLabel.setAttribute('for', "choice-varnish");
        newSelect.setAttribute('name',"colors");
        newSelect.id = 'choice-varnish';
        newLabel1.classList.add('p-1')
        newLabel1.setAttribute('for',"quantity");
        newInput.classList.add('w-50')
        newInput.setAttribute('type','number');
        newInput.setAttribute('name', 'quantity');
        newInput.setAttribute('min', '1');
        newInput.setAttribute('max', '99');
        newInput.setAttribute('placeholder', '0');
        newInput.id = 'quantity';
        newDiv3.classList.add('d-flex','justify-content-between','align-items-center');
        newDiv4.classList.add('price', 'text-success');
        newH5.classList.add('mt-4');
        newA.classList.add('btn', 'btn-success', 'mt-3');
        newA.id = 'AddToBasket'
        newA.href = '#';
        newI.classList.add('fas','fa-shopping-cart');

        ProductView.appendChild(newDiv);
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