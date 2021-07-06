
const ProductView=document.getElementById('ProductView');

        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        let newDiv1 = document.createElement('div');
        let newH3 = document.createElement('h3');
        let newPara = document.createElement('p')
        let newDiv2 = document.createElement('div');
        let newLabel = document.createElement('label');
        let newSelect = document.createElement('select');
        let newOption = document.createElement('option');
        let newOption1 = document.createElement('option');
        let newOption2 = document.createElement('option');
        let newOption3 = document.createElement('option');
        let newOption4 = document.createElement('option');
        let newLabel1 = document.createElement('label');
        let newInput = document.createElement('input')
        let newDiv3 = document.createElement('div');
        let newDiv4 = document.createElement('div');
        let newH5 = document.createElement('h5');
        let newA = document.createElement('a');
        let newI = document.createElement('i');

        newImg.src="./images/oak_1.jpg";
        newH3.textContent="Titre";
        newPara.textContent="lorem ipsum";
        newLabel.textContent="Choisissez une couleur";
        newOption.textContent="Sélectionnez votre couleur";
        newOption1.textContent="Tan";
        newOption2.textContent="Chocolate";
        newOption3.textContent="Black";
        newOption4.textContent="White";
        newLabel1.textContent="Quantité:";
        newH5.textContent="59990";
        newA.textContent="Ajouter au panier";

        newDiv.classList.add('card');
        newImg.classList.add('card-img');
        newDiv1.classList.add('card-body');
        newH3.classList.add('card-title');
        newPara.classList.add('card-text');
        newLabel.setAttribute('for', "choice-color");
        newSelect.setAttribute('name',"colors");
        newSelect.id = 'choice-color';
        newOption.setAttribute('value',"");
        newOption1.setAttribute('value',"tan");
        newOption2.setAttribute('value',"chocolate");
        newOption3.setAttribute('value',"black");
        newOption4.setAttribute('value',"white");
        newLabel1.setAttribute('for',"quantity");
        newInput.setAttribute('type','number');
        newInput.setAttribute('name', 'quantity');
        newInput.setAttribute('min', '1');
        newInput.setAttribute('max', '10');
        newInput.setAttribute('placeholder', '1');
        newInput.id = 'quantity';
        newDiv3.classList.add('buy','d-flex','justify-content-between','align-items-center');
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
        newSelect.appendChild(newOption);
        newSelect.appendChild(newOption1);
        newSelect.appendChild(newOption2);
        newSelect.appendChild(newOption3);
        newSelect.appendChild(newOption4);
        newDiv2.appendChild(newLabel1);
        newDiv2.appendChild(newInput);
        newDiv1.appendChild(newDiv3);
        newDiv3.appendChild(newDiv4);
        newDiv4.appendChild(newH5);
        newDiv3.appendChild(newA);
        newA.appendChild(newI);