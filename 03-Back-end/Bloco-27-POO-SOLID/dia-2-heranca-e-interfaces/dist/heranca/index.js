"use strict";
class Animal {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        /*Para operar com datas, vamos operar somente com milissegundos. Uma data
        é o número de milissegundos desde o dia 01/01/1970 (era Unix).*/
        const timeDiff = Math.abs(Date.now() -
            new Date(this.birthDate).getTime());
        /*Convertendo de volta para o número de anos inteiros, considerando anos bissextos.
        Tente entender a lógica abaixo: como converter de milissegundos para anos?*/
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
class Mammal extends Animal {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}
const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const main = (animal) => {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
class Bird extends Animal {
    constructor(name) {
        super(name, new Date());
        this.name = name;
    }
    ;
    fly() {
        console.log(`${this.name} está voando!`);
    }
    showBirthDate() {
        console.log(this.birthDate);
    }
}
const parrot = new Bird('Papagaio');
console.log(parrot.age);
parrot.fly();
parrot.showBirthDate();
