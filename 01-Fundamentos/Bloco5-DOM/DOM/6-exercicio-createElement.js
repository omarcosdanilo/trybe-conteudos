// ================= 1. Crie um irmão para elementoOndeVoceEsta .=================

// Selecionei o elemento que será pai do novo elemento
let meuPai = document.querySelector('#pai');

//Criei o novo elemento
let novoFilho = document.createElement('section');

//criei um texto só para facilitar a visualização.
let texto = document.createTextNode('Sou o novo irmao do elementoOndeVoceEsta ')

//adicionei o texto como nó no novo elemento
novoFilho.appendChild(texto)
//criei uma classe para o novo elemento
novoFilho.className = 'novoFilho'

//juntei o novo elemento ao seu pai
meuPai.appendChild(novoFilho);


// ============ 2. Crie um filho para elementoOndeVoceEsta .=======================

let pai = document.querySelector('#elementoOndeVoceEsta');

let novoFilhoOndeVoceEsta = document.createElement('h1');

let texto2 = document.createTextNode('Sou o novo filho do elementoOndeVoceEsta');

novoFilhoOndeVoceEsta.appendChild(texto2);

novoFilhoOndeVoceEsta.className = 'novo-filho-onde-voce-esta'

pai.appendChild(novoFilhoOndeVoceEsta);



// ============ 3.Crie um filho para primeiroFilhoDoFilho .======================

let paiNovinho = document.querySelector('#primeiroFilhoDoFilho');

let filhoDoPaiNovinho = document.createElement('h2')

let texto3 = document.createTextNode('Oi, sou o filho do paiNovinho');

filhoDoPaiNovinho.appendChild(texto3);

filhoDoPaiNovinho.className = 'filho-do-pai-novinho';

let juncao = paiNovinho.appendChild(filhoDoPaiNovinho);

// ============ 4. A partir desse filho criado, acesse terceiroFilho .============

console.log(document.querySelector('.filho-do-pai-novinho').parentNode.parentElement.nextElementSibling);

// ====== 5. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let paiDeTodos = document.querySelector('#paiDoPai');
}

