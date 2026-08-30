function greet(greetingmsg:string,...name:string[]){
    return greetingmsg + " " + name.join(", ");
}

console.log(greet("Hello","John"));
console.log(greet("Hello"));
console.log(greet("Hello","John","Doe","Jane"));