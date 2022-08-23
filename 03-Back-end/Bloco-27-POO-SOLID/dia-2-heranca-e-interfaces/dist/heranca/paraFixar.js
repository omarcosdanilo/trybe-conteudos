"use strict";
class Superclass {
    constructor(isSuper) {
        this.isSuper = isSuper;
    }
    sayHello() {
        return 'Olá mundo!!!';
    }
    ;
}
;
class Subclass extends Superclass {
    constructor(isSuper) {
        super(false);
        this.isSuper = isSuper;
    }
    ;
}
;
const myFunc = (obj) => {
    if (obj.isSuper) {
        console.log('Super!!!');
    }
    else {
        console.log('Sub!!!');
    }
};
const superObj = new Superclass(true);
const subObj = new Subclass(false);
myFunc(superObj);
myFunc(subObj);
