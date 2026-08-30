var my_string:string = "Welcome to the world of TypeScript";
let my_string1:string = "Welcome";

//charAt()
console.log(my_string.charAt(0)+" "+my_string.charAt(2));

// concat()
var string1:string = "Hello";
var string2:string = " to Typescript!";
var string3:string = " and Protractor";
console.log(string1.concat(string2));
console.log(string1.concat(string2).concat(string3));

// replace()
var str = "TypeScript Programming";
console.log(str.replace("i","X"));
console.log(str.replace("Type","Java"));

// split
var fruits:string = "Apple Banana Orange"; 
console.log(fruits.split(" ")); // [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.split(" ",2)); // [ 'Apple', 'Banana' ]
console.log(fruits.split(" ",1)); // [ 'Apple' ]

// substring()
str = "Welcome";
console.log(str.substring(0,3));
console.log(str.substring(2,5));

// toUpperCase() toLowerCase()
str = "Welcome to the world of typescript programming";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// trim()
str = "   Welcome to the world of typescript programming   ";
console.log(str.trim());
console.log(str.trimRight());
console.log(str.trimLeft());
