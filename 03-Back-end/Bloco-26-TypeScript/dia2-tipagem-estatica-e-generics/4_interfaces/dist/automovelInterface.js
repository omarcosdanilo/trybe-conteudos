"use strict";
;
let carro1 = {
    name: 'Gol',
    marca: 'VolksWagen',
    ano: 2022,
    andar() {
        return `${this.name} está andando`;
    }
};
console.log(`Este ${carro1.name} é da marca ${carro1.marca} e foi fabricado em ${carro1.ano}`);
console.log(carro1.andar());
