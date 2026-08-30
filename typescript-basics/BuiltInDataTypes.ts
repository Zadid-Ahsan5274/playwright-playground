// Number
var firstNumber:number = 12.0;
var secondNumber:number = 0x37CF;
var thirdNumber:number = 0o377;
var fourthNumber:number = 0b111001;

console.log(firstNumber+" "+secondNumber+" "+thirdNumber+" "+fourthNumber);

// String
var employeeName:string = "John Doe";
var employeeDepartmentName:string = "IT";
console.log(employeeName+" "+employeeDepartmentName);

var statement = employeeName + " works in "+employeeDepartmentName;
console.log(statement);

// boolean
var b:boolean = true;
console.log(b);

// void type
function hello():void{
    console.log("This is welcome message");
}

// Null represents a variable whose value is undefined
var num1:any = null;
num1 = 100;
console.log(num1);

// Undefined - undefined primitive type represents a variable whose value is not defined - denotes all uninitialized variables
var num2:any = undefined;
num2 = 200;
console.log(num2);

// Any type
var val:any = "Hi";
val = 100;
console.log(val);
val = false;
console.log(val);

function myFunction(x:any,y:any){
    console.log(x+y);
}

myFunction(100,200);
myFunction("Hi","Welcome");