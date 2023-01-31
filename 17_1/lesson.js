function Triangle(a,b) {
    this.a = a,
    this.b = b, 
    this.getArea = function () {
        return this.a * this.b / 2;
    };
    this.getHypotenuse = function (){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}

Triangle(5, 7); // returns undefined!
//using the New operator:
const tri1 = new Triangle(3,4);
console.log(tri1.getHypotenuse()); //5
const tri2 = new Triangle(9, 12);
console.log(tri2.getHypotenuse()); // 15

//prototype is in all browsers except for IE aka internet explorer 
//the prototype is a method that is already pre-installed on the browser that can be changed
//For example I can remove the functions that is in the original Triangle class and add it to the prototype in the browser and let it be stored there so i can always call it
//For example:

function Triangle(a,b){
    this.a = a,
    this.b = b
}
//now on the console of the browser if you just call prototype you will see a standalone func. That can be change
Triangle.prototype.getArea = function() {
    return this.a * this.b / 2;
}
Triangle.prototype.getHypotenuse = function() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
}

//you can check by going to the browser by typing 'Triangle.prototype'