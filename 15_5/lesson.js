//When the keys of an obj is the same , you can use one variable like so:

//ES5 version (old way)
let firstName = 'Bradley';
let lastName = 'Chery';

let fullName = {
    firstName: firstName,
    lastName: lastName
}

//ES6 (new way)
let firstName = 'Bradley';
let lastName = 'Chery';

let fullName = {
    firstName,
    lastName
}

//Object Methods 
//a key in an obj can be a function like so:

let instructor = {
    sayHello: function(){
        return "Hello";
    }
}
//note to self: arrow function does not work with method