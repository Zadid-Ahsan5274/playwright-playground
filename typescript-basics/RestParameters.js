"use strict";
function greet(greetingmsg, ...name) {
    return greetingmsg + " " + name.join(", ");
}
console.log(greet("Hello", "John"));
console.log(greet("Hello"));
console.log(greet("Hello", "John", "Doe", "Jane"));
