"use strict";
class Person {
    name; // accessible from anywehre
    age; // accessible from within the class and its subclasses
    ssn; // accessible only within the class
    constructor(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }
    displayInfo() {
        console.log(this.name); // accessible
        console.log(this.age); // accessible
        console.log(this.ssn); // accessible
    }
}
// Child Class
class Employee extends Person {
    employeeId;
    constructor(name, age, ssn, employeeId) {
        super(name, age, ssn);
        this.employeeId = employeeId;
    }
    showEmployeeDetails() {
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`);
        // console.log(`SSN: ${this.ssn}`); // not accessible due to private access modifier
    }
}
let employee1 = new Employee("John Doe", 30, 123456789, 101);
employee1.showEmployeeDetails();
// employee1.displayInfo(); // not accessible due to protected access modifier
// console.log(employee1.ssn); // not accessible due to private access modifier
