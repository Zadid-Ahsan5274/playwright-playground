// Array declaration and initialization
var fruits1:string[] = ["apple","mango","banana"];

// or
var fruits2:Array<string>;
fruits2 = ["pineapple","guava","strawberry"];

console.log(fruits1);
console.log(fruits2);

// Multi-type Array
var values:(string|number)[] = ["apple",100,"orange",10];
console.log(values);
// or
var values2:Array<string|number> = ["pineapple",550,"cherry",770];
console.log(values2);

// Access array elements
console.log(fruits1[0]); // Output: apple
console.log(fruits2[1]); // Output: guava
console.log(fruits1[3]); // undefined
console.log(values[2]); // Output: orange
console.log(values2[3]); // Output: 770

// for loop
console.log("Reading elements using for loop...");
for(var i = 0; i < fruits1.length; i++){
    console.log(fruits1[i]);
}

// for loop with in operator
console.log("Reading elements using for loop with in operator...");
for(var j in fruits2){
    console.log(fruits2[j]);
}