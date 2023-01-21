/*
function createInstructor(firstName, lastName){
    return {firstName, lastName}
}

//2. 
var favoriteNumber = 42;

let instructor = {
    firstName: "Colt",
    favoriteNumber: "That is my favorite!"
}

instructor[favoriteNumber] = "That is my favorite!"

//3. Object Methods Question
var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + " says bye!";
    }
}
//answer
const instructor = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName +  "says bye!" ; 
    }
}
*/

function createAnimal(species, verb, noise){
    species,
    [verb](){
        return noise;
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"