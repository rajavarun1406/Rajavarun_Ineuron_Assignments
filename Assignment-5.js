
class Shapes{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
}
class Cylinder extends Shapes{
    
    constructor(radius,height){
        super(radius,height);
    }
    getVolume(){
        let volume = 3.1415*(this.radius)*(this.radius)*this.height;
        return volume;
    }

}
class Sphere extends Shapes{
    
    constructor(radius){
        super(radius);
    }
    getVolume(){
        let volume = (4/3)*3.1415*this.radius*this.radius*this.radius;
        return volume;
    }

}
class Cone extends Shapes{
    
    constructor(radius,height){
        super(radius,height);
    }
    getVolume(){
        let volume = (1/3)*3.1415*this.radius*this.radius*this.height;
        return volume;
    }

}

let cyl = new Cylinder(4,5);
let cylindervolume = cyl.getVolume();
console.log(`volume of cylinder with radius ${cyl.radius} and height ${cyl.height} is ${cylindervolume.toFixed(4)}`);


let sphere = new Sphere(4);
let spherevolume = sphere.getVolume();
console.log(`volume of sphere with radius ${sphere.radius} is ${spherevolume.toFixed(4)}`);


let cone = new Cone(4,5);
let conevolume = cone.getVolume();
console.log(`volume of cone with radius ${cone.radius} and height ${cone.height} is ${conevolume.toFixed(4,5)}`);

