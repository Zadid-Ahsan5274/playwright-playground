"use strict";
function Greet(greeting, name) {
    return greeting + " " + name;
}
console.log(Greet("Welcome", "John"));
// console.log(Greet("Hello")); // compiler error: expected 2 arguments, but got 1
// console.log(Greet("Welcome","Jane","Smith")); // compiler error: expected 2 arguments, but got 3
// optional parameters
function Greet2(greeting, name) {
    return greeting + " " + name;
}
console.log(Greet2("Welcome", "John"));
console.log(Greet2("Welcome")); // Welcome undefined
// console.log(Greet2("Hello","Welcome","Smith")); // compiler error: expected 2 arguments, but got 3
// Default parameters
function Greet3(name, greeting = "Hello") {
    return greeting + " " + name;
}
console.log(Greet3("John"));
console.log(Greet3("John", "Welcome"));
console.log(Greet3("John", "")); // Hello undefined
