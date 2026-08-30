class Bank{
    rateOfInterest:number = 0;

    roi():number{
        return this.rateOfInterest;
    }
}

class BankX extends Bank{

    roi():number{
        return 10.5; // method overriding
    }
}

class BankY extends Bank{

    roi():number{
        return 12.5; // method overriding
    }
}

var x = new BankX();
console.log(x.roi()); // 10.5
var y = new BankY();
console.log(y.roi());  // 12.5