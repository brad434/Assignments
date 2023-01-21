const nums = [4,5,88,123,0.92];

const tea = {
    type : 'blackTea',
    name : 'Bob'
}

// copying a spread object into a new obj like so:
// const tea2 = {...tea};

//creating a new obj and adding a new property (price) to the obj like so:
const tea3 = {...tea, price: 2.99};

//creating a new const obj with previous obj above but with an additional property called name that will replace the name in the above obj
const newTea = {...tea, name: 'SAM'}


//let say theres a new obj of tea like on line 3 but with diff values
const bestTea = {
    steepTime : '30s',
    brewTemp : 175,
    origin : 'New York'
}

//now lets combine both tea obj and bestTea obj into one obj variable
const fullTea = {...tea, ...bestTea};

//----------------------------------------------------SPREAD AND DEEP COPIES------------------------------------

const shoppingCart = [
{
    name : 'grape',
    quantity : 3,
    price : 2.99
},
{
    name : 'apples',
    quantity : 7,
    price: 1.79
}
];