// Parent class
class Car{
    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start(){
        console.log("Car started...");
    }

    stop(){
        console.log("Car stopped...");
    }

    displayInformation(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}`);
    }
}

// Child class
class Honda extends Car{
    year:number;

    constructor(name:string, color:string,model:string, year:number){
        super(name,color, model)
        this.year = year;
    }
    // Method overriding
    start(){
        console.log("Honda started...");
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, yom: ${this.year}`);
    }
}

// Child class
class Maruti extends Car{
    year:number;

    constructor(name:string, color:string,model:string, year:number){
        super(name,color, model)
        this.year = year;
    }
    // Method overriding
    start(){
        console.log("Maruti started...");
    }

    yom(){
        console.log(`Name: ${this.name}, Color: ${this.color}, Model: ${this.model}, yom: ${this.year}`);
    }
}

// Usage
// Create Honda Object
let honda = new Honda("Honda",'Red',"Honda city",2024);
console.log(`Name: ${honda.name}, Color: ${honda.color}, Model: ${honda.model}, Year: ${honda.year}`);
honda.start();
honda.displayInformation();
honda.stop();
honda.yom();

// Create Maruti Object
let maruti = new Maruti("Maruti",'Blue',"Maruti 800",2023);
console.log(`Name: ${maruti.name}, Color: ${maruti.color}, Model: ${maruti.model}, Year: ${maruti.year}`);
maruti.start();
maruti.displayInformation();
maruti.stop();
maruti.yom();

let car:Car = new Honda("Honda",'Black',"Honda Civic",2022);
car.displayInformation(); // Output: Name: Honda, Color: Black, Model: Honda Civic
car.start(); // Output: Honda started...
car.stop(); // Output: Car stopped...
// car.yom(); // not accessible because yom is not defined in Car class