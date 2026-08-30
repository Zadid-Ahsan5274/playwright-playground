"use strict";
class Employee {
    empId = 0;
    empName = "";
    departmentNo = 0;
    constructor(empId, empName, departmentNo) {
        this.empId = empId;
        this.empName = empName;
        this.departmentNo = departmentNo;
    }
    setData(id, name, deptNo) {
        this.empId = id;
        this.empName = name;
        this.departmentNo = deptNo;
    }
    display() {
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Department No: " + this.departmentNo);
    }
}
var emp = new Employee(101, "John Doe", 10); // new Employee object creation
//emp.empId = 101;
//emp.empName = "John Doe";
//emp.departmentNo = 10;
//emp.setData(101,"John Doe",10); // calling setData method of Employee class
emp.display(); // calling display method of Employee class
