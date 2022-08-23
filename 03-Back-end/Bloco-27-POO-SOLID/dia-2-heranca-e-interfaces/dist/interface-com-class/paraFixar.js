"use strict";
;
class Myclass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return `Soma: ${myParam + this.myNumber}`;
    }
    ;
}
;
const myObj = new Myclass(10);
const result = myObj.myFunc(10);
console.log(result);
