//OO Challenge
//-------------------------------- Part One ------------------------------------
//Create a class for vehicle. Each vehicle instance should have the following properties:

//make
//model
//year
//Each vehicle instance should have access to a method called honk, which returns the string “Beep.”

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        console.log("Beep");
    }

    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`)
    }
}


// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // "Beep."

//Each vehicle instance should have a method called toString, which returns the string containing the make, model and year.

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."


// ---------------------------Part Two------------------------------------------------------
// Create a class for a car. The Car class should inherit from Vehicle and each car instance should have a property called numWheels which has a value of 4.

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
myFirstCar.honk();     // "Beep."
myFirstCar.numWheels;  // 4