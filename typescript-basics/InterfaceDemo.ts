interface IEmployee{
    empName:string;
    empId:number;
    empSalary:number;

    displayData:()=>void;
}

var emp:IEmployee=
{
    empName:"John Doe",
    empId:12345,
    empSalary:50000,

    displayData():void{
        console.log(this.empName+" "+this.empId+" "+this.empSalary);
    }
}

console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSalary);
emp.displayData();
    