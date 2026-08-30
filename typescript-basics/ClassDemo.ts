class Employee
{
    empId:number = 0;
    empName:string = "";
    departmentNo:number = 0;

    constructor(empId:number,empName:string,departmentNo:number){
        this.empId = empId;
        this.empName = empName;
        this.departmentNo = departmentNo;
    }

    setData(id:number,name:string,deptNo:number):void{
        this.empId = id;
        this.empName = name;
        this.departmentNo = deptNo;
    }

    display():void{
        console.log("Employee ID: "+this.empId);
        console.log("Employee Name: "+this.empName);
        console.log("Department No: "+this.departmentNo);
    }
}

var emp = new Employee(101,"John Doe",10); // new Employee object creation
//emp.empId = 101;
//emp.empName = "John Doe";
//emp.departmentNo = 10;
//emp.setData(101,"John Doe",10); // calling setData method of Employee class
emp.display(); // calling display method of Employee class

