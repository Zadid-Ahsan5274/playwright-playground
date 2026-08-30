var a:number = 10;
var b:number = 20;
var c:number = 30;

if(a > b && a > c){
    console.log("a is the largest number");
}
else if(b > a && b > c){
    console.log("b is the largest number");
} else {
    console.log("c is the largest number");
}

// ternary operator
var x:number = 100;
var y:number = 200;

var z = x > y ? console.log("x is larger than y") : console.log("y is larger than x");