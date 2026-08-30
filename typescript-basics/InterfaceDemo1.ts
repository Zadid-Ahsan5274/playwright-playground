interface I1{
    a:number;
    b:number;

    sum():number; 
}

interface I2 extends I1{
    x:number;
    y:number;

    sub():number;
}

class C1 implements I2{
    a:number;
    b:number;
    x:number;
    y:number;

    constructor(a:number,b:number,x:number,y:number){
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }

    sum():number{
        return this.a + this.b;
    }

    sub():number{
        return this.x-this.y;
    }
}

var c = new C1(100,200,2000,3000);
console.log(c.sum());
console.log(c.sub());