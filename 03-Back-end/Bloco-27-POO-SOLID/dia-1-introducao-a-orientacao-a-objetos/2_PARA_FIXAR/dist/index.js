"use strict";
class TV {
    constructor(brand, size, resolution, connections) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }
    ;
    turnOn() {
        console.log(this.brand);
        console.log(this.size);
        console.log(this.resolution);
        console.log(this.connections);
        console.log(this.connectedTo);
        // console.log(`${this.brand}, ${this.size}, ${this.resolution}, ${this.connections}`)
    }
    ;
}
;
const smartTv = new TV('Samsung', [55, 'Polegadas'], '1920 x 1640', { video: 'HDMI', rede: 'Ethernet', dados: 'USB 3.0' });
smartTv.turnOn();
