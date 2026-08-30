function add(a:number,b:number):number;
function add(a:string,b:string):string;

function add(a:any,b:any):any{
    return a+b;
}

console.log(add(100,200));
console.log(add("WELCOME","JOHN")); // WELCOMEJOHN

// function overloading with different number of parameters and different types of parameters
// with same name is not supported
function display(a:string,b:string):void{
    console.log(a+b);
}
/* Not Allowed
function display(a:number):void{
    console.log(a+b);
}
*/