/*
//how to use the call for this
const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('This is:', this);
        console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
    }
};

const blueDance = cat.dance;
//blueDance('Jitterbug');
blueDance.call(cat, 'jitterbug');

const dog = {
    breed: 'Black Lab',
    name: 'Elton'
};

blueDance.call(dog, 'hip hop dance');

const bird = {
    breed: 'Parrot', 
    name: 'BigBird'
};

blueDance.call(bird, 'Konpa');


//a call can pass in as many arguments as you want. like so

const cat = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('This is:', this);
        console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
},
play : function(...toys){
    for (let toy of toys){
        console.log(`${this.name} plays with ${toy}`);
        }
    }
}
// So if we wanted to test out the new method called play you would do this in the console log
cat.play('string', 'my pantleg') // Blue plays with string 
                                // Blue plays with my pantleg

//I can change the value to instead of cat I can switch to the dog value 
cat.play.call(bird, 'bone', 'my cat'); //from function above
//BigBird plays with bone.
//BigBird plays with my cat.


// ------------------------------- Binding Args --------------------------
const bobsMembership = {
    name: 'Bob',
    total: 250,
    // collectMonthlyFee: function(fee){
    //     const remaining = this.total - fee;
    //     this.total = remaining;
    //     return this.name + ' remaining balance:' + remaining;
    // } this can be removed and place underneath the const bobsMembership
};

function collectMonthlyFee(fee){
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + ' remaining balance:' + remaining;
}

//this I can use the bind to have the same amount of fee taking out again and again with the same value of 5 stored
const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5); //We using the function called collectMonthlyFee attaching it to the bind method and passing along the person we want to work on aka bobsMembership then given the first passing parameter of 5.
//Now go to console on the web browser and call collectBobsFee() . This number total will be decreasing every time an enter is pressed
collectBobsFee(); //like so 
-------------------------------*/


/* --------------------------------------------------------
// Another reason to use method in the DOM 
const blue = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('This is:', this);
        console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
    },
    play : function(...toys){
        for (let toy of toys){
            console.log(`${this.name} plays with ${toy}`);
            }
        },
    greet() {
        alert(`${this.name} SAYS MEOW!`);
    }
};

//if you clicked the button you will noticed that the code below does not place the this.name which should be 'Blue' to the alert that is suppose to say 'Blue SAYS MEOW!'.
//document.querySelector('#btn-1').addEventListener('click', blue.greet);

//to fix this you will have to input a .bind() after the .greet , like so..
document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue)); //it is case sensitive 

function alertMessage(msg){
    alert('Secret message is ' + msg);
}

//what I've done here is added two new buttons to the HTML that will the same function but different value once clicked
const btn2 = document.querySelector('#btn-2').addEventListener('click', alertMessage.bind(null, 'You are the best always!'));
const btn3 = document.querySelector('#btn-3').addEventListener('click', alertMessage.bind(null, 'You Should Not Jump!'));
----------------------------------------------------------------------------------*/

/* ------------------------- Arrow Func and THIS ----------------------------*/

const greeter = {
    msg: 'I like chickenz',
    sayHi : function() {
        alert(this.msg);
    }
}