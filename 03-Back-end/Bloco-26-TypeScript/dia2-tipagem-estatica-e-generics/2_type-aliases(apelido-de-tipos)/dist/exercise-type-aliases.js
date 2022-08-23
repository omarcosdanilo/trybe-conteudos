"use strict";
//Crie um type para um objeto que represente um pássaro.
const printBird = (info) => {
    console.log('Raça', info.raca);
    console.log('Idade', info.age);
    console.log('Nascimento', info.birth);
};
const printSum = (a, b) => {
    return a + b;
};
const printAddress = (info) => {
    console.log('Pais:', info.country);
    console.log('Cidade:', info.city);
    console.log('Rua:', info.street);
    console.log('Número:', info.number);
};
printBird({ raca: 'periquito', age: 1, birth: new Date() });
console.log(printSum(1, 2));
printAddress({ country: 'Brasil', city: 'São Paulo', street: 'Leonardo da vinci', number: 1301 });
