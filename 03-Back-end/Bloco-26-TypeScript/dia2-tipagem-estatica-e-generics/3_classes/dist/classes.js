"use strict";
var EyeColor;
(function (EyeColor) {
    EyeColor["Black"] = "Pretos";
    EyeColor["Blue"] = "Azuis";
    EyeColor["Green"] = "Verdes";
    EyeColor["Brown"] = "Castanhos";
})(EyeColor || (EyeColor = {}));
;
class Person {
    // name: string;
    // birthDate: Date;
    //a ? marca a propriedade como não obrigatória
    // eyeColor?: EyeColor;
    //a ? marca a propriedade como não obrigatória
    constructor(name, birthDate, eyeColor) {
        this.name = name,
            this.birthDate = birthDate,
            this.eyeColor = eyeColor;
    }
    ;
    speak() {
        console.log(`${this.name} está falando`);
    }
    ;
    eat() {
        console.log(`${this.name} está comendo.`);
    }
    ;
    walk() {
        console.log(`${this.name} está andando.`);
    }
    ;
}
;
const person1 = new Person('Marcos', new Date('1994-09-27'), EyeColor.Green);
const person2 = new Person('Mariana', new Date('1996-03-11'));
console.log(person1);
person1.speak();
console.log(person2);
person2.walk();
//Como a instância person2 foi criada sem a propriedade eyeColor que é opcional, essa propriedade
//pode ser adicionada posteriormente.
person2.eyeColor = EyeColor.Brown;
console.log(person2.eyeColor);
