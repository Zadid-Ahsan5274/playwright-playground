"use strict";
var emp = {
    empName: "John Doe",
    empId: 12345,
    empSalary: 50000,
    displayData() {
        console.log(this.empName + " " + this.empId + " " + this.empSalary);
    }
};
console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSalary);
emp.displayData();
