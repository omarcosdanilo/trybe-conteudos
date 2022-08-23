"use strict";
;
class Dog {
    constructor(name, age, raca) {
        this.name = name;
        this.age = age;
        this.raca = raca;
    }
    ;
    bark() {
        console.log(`${this.name} is barking`);
    }
    ;
}
;
const dog1 = new Dog('Tião', 2, 'poodle');
console.log(`${dog1.name} é um ${dog1.raca} e tem ${dog1.age} anos`);
dog1.bark();
