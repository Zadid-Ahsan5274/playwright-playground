// variable
export var x:string = "Welcome";

// simple function
export function my_function():void{
    console.log("This is my function...");
}

// class
export class MyClass{
    a:number;
    b:number;

    constructor(a:number,b:number){
        this.a = a;
        this.b = b;
    }

    add=()=>{
        return(this.a+this.b);
    }
}