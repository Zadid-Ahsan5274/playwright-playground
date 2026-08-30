"use strict";
class C1 {
    a;
    b;
    x;
    y;
    constructor(a, b, x, y) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    sum() {
        return this.a + this.b;
    }
    sub() {
        return this.x - this.y;
    }
}
var c = new C1(100, 200, 2000, 3000);
console.log(c.sum());
console.log(c.sub());
