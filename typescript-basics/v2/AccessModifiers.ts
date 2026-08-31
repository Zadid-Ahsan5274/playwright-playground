class Person{
    public name:string; // accessible from anywehre
    protected age:number; // accessible from within the class and its subclasses
    private ssn:number; // accessible only within the class

    constructor(name:string, age:number, ssn:number){
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    displayInfo(){
        console.log(this.name); // accessible
        console.log(this.age); // accessible
        console.log(this.ssn); // accessible
    }

}

// Child Class
class Employee extends Person{
    private employeeId:number;

    constructor(name:string, age:number, ssn:number, employeeId:number){
        super(name,age,ssn);
        this.employeeId = employeeId;
    }
    showEmployeeDetails(){
        console.log(`Employee Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`);
        // console.log(`SSN: ${this.ssn}`); // not accessible due to private access modifier
    }
}

let employee1 = new Employee("John Doe", 30, 123456789, 101);
employee1.showEmployeeDetails();
// employee1.displayInfo(); // not accessible due to protected access modifier
// console.log(employee1.ssn); // not accessible due to private access modifier
