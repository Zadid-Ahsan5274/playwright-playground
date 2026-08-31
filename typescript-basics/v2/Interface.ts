interface Person{
    name:string;
    age:number;
}

let student:Person={
    name : "John",
    age : 30
}
console.log(student.name);
console.log(student.age);
console.log(student);

interface Employee{
    empID:number;
    empName:string;
    empDepartment?:string; // optional property
}

let emp:Employee={
    empID: 101,
    empName:"Jane"
}

let emp1:Employee={
    empID: 102,
    empName:"Smith"
}

console.log(emp.empID+" "+emp.empName+" "+emp.empDepartment); // 101 Jane undefined
console.log(emp1.empID+" "+emp1.empName+" "+emp1.empDepartment);

// Example 3: Readonly properties (readonly to prevent modification) & Function Type
interface Book{
    title:string;
    readonly isbn:string;

    display():void; // abstract method
}

let b1:Book={
    title:"The Great Gatsby",
    isbn:"978-0743273565",

    display(){
        console.log(b1.title+" "+b1.isbn);
    }
}

console.log(b1.title+" "+b1.isbn);
b1.display();
b1.title = "Learning TypeScript";
console.log("After changing values: "+b1.title);
// b1.isbn = "978-0743273566"; // Error: Cannot assign to 'isbn' because it is a read-only property.

// Example: 4 Extending Interfaces - Inheritence is applicable

// Parent Interface
interface Animal{
    name:string;
}

// Child Interface
interface Dog extends Animal{
    color:string;
}

let mydog:Dog={
    name: "Buddy",
    color: "Black"
}

console.log(mydog.name+" "+mydog.color);

// Example 5: Class can extend another class - interface can extend another interface - class can implement an interface - interface can implement another interface

interface Animal{
    name:string;

    makeSound():void;
}

class Dog implements Animal{
    name:string;
    static color:string;

    constructor(name:string,color:string){
        this.name = name;
        this.color = color;
    }

    makeSound(){
        console.log(this.name+" says woof");
    }
}

let pet = new Dog("Tommy");
console.log(pet.name);
pet.makeSound();



























