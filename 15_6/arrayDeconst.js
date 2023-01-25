//Array Destructuring 

const students = [
    {name: 'Drake', gpa: 4.0}, 
    {name: 'Shawn', gpa: 3.8}, 
    {name: 'Kelly', gpa: 2.2}, 
    {name: 'Liz', gpa: 1.3} 
];

//to destruct the first element we can do this
const [topStudent] = students; // it will print out: {name: 'Drake', gpa: 4.0}
//now if we wanted to grab another variable 
const [topStudent, secondStudent] = students; // Will print out the first obj and second obj

// you can also spread the variable for the above const students array 
const [first, ...losers] = students; // type in the console on the web browser either "first" or "losers" you will get either a single obj or an array of the leftover objs