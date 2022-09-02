
class Rectangle{
    constructor(length,breadth){
        this.length=length;
        this.breadth=breadth;
    }
    area(){
        
        let AofSqr = this.length*this.length;
        return `Area of Square is ${AofSqr}`;
    }
}
class Square extends Rectangle{
    constructor(length){
        super(length);
    }
}

let sqr = new Square(6);
let result = sqr.area();
console.log(result);