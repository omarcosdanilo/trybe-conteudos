// Acesse o elemento elementoOndeVoceEsta .
console.log(document.querySelector('#primeiroFilhoDoFilho').parentNode);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector('#elementoOndeVoceEsta').parentNode.style.background = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#elementoOndeVoceEsta').firstElementChild.innerText = 'Ta dando certo'

// Acesse o primeiroFilho a partir de pai .
console.log(document.querySelector('#pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai .
console.log(document.querySelector('#pai').children[2])

