"use strict";
// Named function
function display() {
    console.log("Welcome to typescript!");
}
display(); // calling the function
// Named function included return type and parameter types
function Sum(x, y) {
    return x + y;
}
console.log(Sum(100, 200)); // 300
// Anonymous function
var greeting = function () {
    console.log("Welcome to Typescript!");
};
greeting();
// Anonymous function included return type and parameter types
var sum = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
function addNumbers(a, b) {
    return a + b;
}
let sum1 = addNumbers(10, 20);
console.log(sum1); // 30
