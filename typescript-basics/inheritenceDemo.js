"use strict";
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    empNo;
    constructor(name, empNo) {
        super(name);
        this.empNo = empNo;
    }
    displayData() {
        console.log(this.name + " has no " + this.empNo);
    }
}
var emp = new Employee("John Doe", 101);
emp.displayData();
