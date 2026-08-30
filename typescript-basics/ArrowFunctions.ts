// Fat Arrow  Function
var sum = (x:number,y:number):number =>{
    return x+y;
}
console.log(sum(10,20));

// Parameterless Arrow Function
var Print = () =>{
    console.log("Welcome to Typescript");
}

var Print=()=>console.log("Welcome to Automation");
Print(); // Welcome to Automation

// If the function body contains only one statement, the curly braces can be omitted.
var Sum=(x:number,y:number):number=>{
    return x+y;
}
var sum=(x:number,y:number)=>x+y;
console.log(Sum(100,200));
console.log(sum(250,450));