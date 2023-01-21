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

//3. Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + " says bye!";
    }
}
