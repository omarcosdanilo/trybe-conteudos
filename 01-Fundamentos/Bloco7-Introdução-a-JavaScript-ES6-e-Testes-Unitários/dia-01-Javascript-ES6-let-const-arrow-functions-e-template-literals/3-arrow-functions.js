// const soma = (num1,num2) => num1 + num2
// console.log(soma(2,2));

// ==================== ====================
// function contaPalavras(frase) {
//   return frase.split(' ').length;
// }
// console.log(contaPalavras('Fala tribo, beleza?'));

// const contaPalavras = frase => frase.split(' ').length;
// console.log(contaPalavras('Fala tribo, beleza?'));

// ==================== Função criando objetos=====================
// function objetoPessoa(nome, idade) {
//   return {
//     nome: nome,
//     idade: idade,
//   }
// }

// console.log(objetoPessoa('Marcos', 27));

const objetoPessoa = (nome,idade) => ({nome: nome, idade: idade})
console.log(objetoPessoa('Marcos', 27));

