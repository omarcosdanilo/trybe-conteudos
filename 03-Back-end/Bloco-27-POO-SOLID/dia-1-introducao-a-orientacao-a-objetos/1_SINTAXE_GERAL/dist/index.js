"use strict";
class Person {
    constructor(n, h, w) {
        console.log(`Creating person ${n}`);
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    ;
    sleep() {
        console.log(`${this.name}: zzzzzzzzz`);
    }
    ;
}
;
const p1 = new Person('Marcos', 190, 102);
const p2 = new Person('Maria', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();
