"use strict";
class Bank {
    rateOfInterest = 0;
    roi() {
        return this.rateOfInterest;
    }
}
class BankX extends Bank {
    roi() {
        return 10.5; // method overriding
    }
}
class BankY extends Bank {
    roi() {
        return 12.5; // method overriding
    }
}
var x = new BankX();
console.log(x.roi());
var y = new BankY();
console.log(y.roi());
