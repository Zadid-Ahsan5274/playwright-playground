"use strict";
// 2D Array declaration and initialization
var myarray = [[100, 200], [300, 400], [500, 600]]; // using square brackets
console.log(myarray);
// 2D Multi-type Array declaration and initialization
var myarray2 = [[10, "xyz"], ["abc", 100]];
console.log(myarray2);
// Access 2D array elements
console.log(myarray[0][0]);
console.log(myarray[0][1]);
console.log(myarray[1][0]);
console.log(myarray[1][1]);
// loop to access 2D array elements
console.log("Reading data from array using for loop...");
for (var i = 0; i < myarray2.length; i++) {
    for (var j = 0; j < myarray2[i].length; j++) {
        console.log(myarray2[i][j]);
    }
}
console.log("Reading data from array using for loop with in operator...");
for (var m in myarray2) {
    for (var n in myarray2[m]) {
        console.log(myarray2[m][n]);
    }
}
