"use strict";
// Parent class
class Car {
    name;
    color;
    model;
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
    }
    start() {
        console.log("Car started...");
    }
    stop() {
        console.log("Car stopped...");
    }
    displayInformation() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
    }
}
// Child class
class Honda extends Car {
    year;
    constructor(name, color, model, year) {
        super(name, color, model);
        this.year = year;
    }
    // Method overriding
    start() {
        console.log("Honda started...");
    }
    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, yom: ${this.year}`);
    }
}
// Child class
class Maruti extends Car {
    year;
    constructor(name, color, model, year) {
        super(name, color, model);
        this.year = year;
    }
    // Method overriding
    start() {
        console.log("Maruti started...");
    }
    yom() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, yom: ${this.year}`);
    }
}
// Usage
// Create Honda Object
let honda = new Honda("Honda", 'Red', "Honda city", 2024);
console.log(`Name: ${honda.name}, Color: ${honda.color}, Model: ${honda.model}, Year: ${honda.year}`);
honda.start();
honda.displayInformation();
honda.stop();
honda.yom();
