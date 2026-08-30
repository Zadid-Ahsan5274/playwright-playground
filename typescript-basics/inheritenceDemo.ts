class Person{
    name: string;

    constructor(name:string){
        this.name = name;
    }
}

class Employee extends Person{
    empNo:number;

    constructor(name:string,empNo:number){
        super(name);
        this.empNo = empNo;
    }

    displayData():void{
        console.log(this.name+" has no "+this.empNo);
    }
}

var emp = new Employee("John Doe",101);
emp.displayData();