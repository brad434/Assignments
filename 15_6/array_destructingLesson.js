//Object Destructuring 
//Here's how you used to have to extract values into variable

let userData = {
    username: 'smith',
    id: 12345,
    password: 'bigPassword132',
    firstName: 'Rob',
    lastName: 'Ken',
    age: 'guess',
    isLegit: undefined
};

let username = userData.username;
let firstName = userData.firstName;


//Now here is a better way 

let {username, firstName, id} = userData;

//then console.log 
console.log(username); // smith
console.log(id); //12345 


//NOW to Destructuring + SPREAD
//using the same data as above "userData"
//what this code is doing is, its removing the password key with its value and instead displaying the rest of the object since you console.log user which means you just want to see the rest of the keys within the object. Unless you console.log "password"  like so below:
const {password, ...user} = userData;
console.log(user);
console.log(password);

//RENAMING WITH DESTRUCTURING 
//aka 

const twitter = 'twitter.com';
const wes = {
    first: 'Wes',
    last: 'Bos',
    links: {
        social: {
            twitter : 'https://twitter.com/wesbos',
            facebook: 'https://facebook.com/wesbos.developer',
        },
        web: {
            blog: ' https://wesbos.com'
        }
    }
};

const {twitter: tweet, facebook: fb} = wes.links.social;


//Defaults with destructuring
//what is happening here is that we create a new property in the obj with a value. So it will default and display when called in the console.log like so: 
const options = {
    refreshTime: 200
}

const { refreshTime = 750, waitTime = 1000 } = options;
  console.log(refreshTime); // 200 - initialized in options
  console.log(waitTime); // 1000 - fallback to default

// you can also combine the default and renaming together as so:
const person = { first: 'Wes', last: 'Bos'};

const {middle: middleName = 'Roger Rabit'} = person;

console.log(middleName); // 'Roger Rabit'

//what the code above did was that it created a new var called middleName. Since the original obj does not contain a property called 'middle' we fall back to the default of Roger Rabit. 