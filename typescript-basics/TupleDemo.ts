// var empID:number = 101;
// var empName:string = "Maria";
// var empSalary:number = 60000;

// Declaring tuple
// var employee = [101,"Maria Jones",60000];

var employee:[number,string,number] = [101,"Maria Jones",60000];
console.log(employee);

// Accessing tuple
console.log("Original Employee: "+employee[0]+" "+employee[1]+" "+employee[2]);

// Add elements into a tuple - Push()
var employee:[number,string,number] = [101,"John Doe",55000];
employee.push(102,"Scott Davis",70000);
console.log("After push: new employee: "+employee);

// Remove elements from a tuple - Pop()
employee.pop();
console.log("After pop: new employee: "+employee);

// Update elements in a tuple
var student:[number,string] = [101,"Smith"];
student[1] = "Scott";
console.log(student);

// Tuple Array
var students:[number,string][];
students = [[101,"Scott"],[102,"Davis"],[103,"Jacob"]];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);