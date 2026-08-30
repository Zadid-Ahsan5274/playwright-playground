// both type and initial value
var employeeName:string = "Garry Marcos";
console.log(employeeName);

// only the type
var employee_name:string;
employee_name = "Rose Dallas";
console.log(employee_name);

// Scope Variables
// var -> within the function
// let -> within the block
// const -> within the block

var y = 100; // global variable
function someFunction(){
    if(true){
        // var x = 100; // scope variable
        let x = 100; // local variable
        console.log(x);
    }
    //console.log(x); // x is not defined here
}
// console.log(x); // x is not defined here
// console.log(y); // y is defined here

/* var x = 100;
console.log(x);
var x = 200;
console.log(x); // x is reassigned here

var x:string = "My name is Lilith Baron";
console.log(x); */

// let x = 100;
// let x = 20;

const x = 200;
// const x = 230; // error: x is already defined
