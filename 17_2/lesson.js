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
