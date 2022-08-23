"use strict";
// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// };
function getArray(items) {
    return new Array().concat(items);
}
// let numberArray = getArray([5, 10, 15, 20]);
// let stringArray = getArray(["Cats", "Dogs", "Birds"]);
// numberArray.push(25);
// stringArray.push("Rabbits");
//Estamos inserindo uma string em um array que era pra ser só de números
// numberArray.push("isto não é um número");  ERROR
//Estamos inserindo um número em um array que era pra ser só de strings
// stringArray.push(30); ERROR
// O generic garante que não possa inserir valores de um determinado tipo.
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação
let stringArray = getArray(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação
console.log(numberArray);
console.log(stringArray);
// ============= PASSANDO MAIS DE UMA VARIÁVEL DE TIPO ==============
function identity(value, message) {
    console.log(message);
    return value;
}
;
let returnNumber = identity(1, 'string');
let returnString = identity('string1', 'string2');
let returnBoolean = identity(true, 'string3');
;
function processIdentity(value, message) {
    console.log(message);
    return value;
}
;
let processor = processIdentity;
let returnNum = processor(2, 'string');
// let returnStr = processor('string', 3); ERROR
// =========== GENERICS COM CLASSES =====================
class ProcessId {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    ;
    getIdentity() {
        console.log(this.message);
        return this.value;
    }
    ;
}
;
let processor2 = new ProcessId(11, 'só sei que nada sei');
processor2.getIdentity();
