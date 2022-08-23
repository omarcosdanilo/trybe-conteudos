"use strict";
class House {
    constructor(value, address) {
        this.value = value;
        this.address = address;
    }
    ;
    location() {
        const { city, country, street, number } = this.address;
        console.log(`A Casa custa ${this.value} e fica em ${city}, ${country}, na rua ${street} número ${number}`);
    }
    ;
}
;
const addressHouse1 = {
    city: 'São Paulo',
    country: 'Brazil',
    street: 'Leonardo da vinci',
    number: 1301
};
const house1 = new House(1000000, addressHouse1);
house1.location();
