class Parent{
    num:number = 10;

    constructor(){
        console.log("This is parent class constructor");
    }

    display(){
        console.log("This is display() method from parent class");
    }
}

class Child extends Parent{
    num:number = 20;

    constructor(){
        super(); // Calling parent class constructor - must be called
        console.log("This is child class constructor");
    }

    show(){
        console.log("This is show() method from child class");
    }

    // overridded method
    display(){
        console.log("This is display() method from child class");
    }
}

let c1 = new Child();
c1.show();
c1.display();