var x = 10;
var y = 20;

console.log("Arithmetic Operators")
console.log("x + y = " + (x + y)); // Addition
console.log("x - y = " + (x - y)); // Subtraction
console.log("x * y = " + (x * y)); // Multiplication
console.log("x / y = " + (x / y)); // Division
console.log("x % y = " + (x % y)); // Modulus
console.log("x ** y = "+ (x ** y));

console.log("Comparison Operators")
console.log("x == y = " + (x == y)); // Equal to
console.log("x != y = " + (x != y)); // Not equal to
console.log("x > y = " + (x > y)); // Greater than
console.log("x < y = " + (x < y)); // Less than
console.log("x >= y = " + (x >= y)); // Greater than or equal to

console.log("Logical Operators")
console.log("x && y = " + (x && y)); // Logical AND
console.log("x || y = " + (x || y)); // Logical OR
console.log("!x = " + (!x)); // Logical NOT

console.log("Assignment Operators")
console.log("x = y = " + (x = y)); // Assignment
console.log("x += y = " + (x += y)); // Addition assignment

console.log("Bitwise Operators")
console.log("x & y = " + (x & y)); // Bitwise AND
console.log("x | y = " + (x | y)); // Bitwise OR
console.log("x ^ y = " + (x ^ y)); // Bitwise XOR
console.log("~x = " + (~x)); // Bitwise NOT
console.log("x << y = " + (x << y)); // Left shift

console.log("Operator Precedence")
console.log("x + y * x = " + (x + y * x)); // Operator precedence
console.log("(x + y) * x = " + ((x + y) * x)); // Operator precedence
console.log("x + y * x / y = " + (x + y * x / y)); // Operator precedence

console.log("Ternary Operator");
console.log("x > y ? 'x is greater' : 'y is greater' = " + (x > y ? 'x is greater' : 'y is greater')); // Ternary operator
console.log("x < y ? 'x is less' : 'y is less' = " + (x < y ? 'x is less' : 'y is less')); // Ternary operator

var a:boolean = true;
var b:boolean = false;

console.log(a&&b);
console.log(a||b);
console.log(!a);
console.log(!b);