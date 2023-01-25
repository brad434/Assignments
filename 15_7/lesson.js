//MAPS
//also called "hash maps" in other languages 
//similar to objects , excepts the keys can be ANY data type 


/*
let zoo = new Map();

zoo.set('Zebra', 5);
zoo.set('Lion', 11);
zoo.set('Tiger', 7);


console.log(zoo);

//using the has method
console.log(zoo.has('Zebra')); // case sensitive so a lowercase z will not find it even though its there. It will return true or false

//let count how many animals there is . For example Lion. We are using the 'get' method to grab the value
let lionCount = zoo.get('Lion');
console.log(lionCount);
//Grab the value of the tiger
let tigerCount = zoo.get('Tiger');
console.log(tigerCount);

//We can use a for loop 
for (let [key, value] of zoo){
    console.log(key + ': ' + value);
} // it will automatically show the list of value and its key in the console log
//also having the [key,valeu] is considered deconstructuring because the array has a key and value within a array. 


//---------------- MAPS with Functions in it ---------------------------------------------------

const add = (x,y) => x + y;
const multi = (x,y) => x * y;

const funcCalledHowManyTimes = new Map();

funcCalledHowManyTimes.set(add, 1); //we added the function in the first index, second index is the amount of time that was hard coded. 
// now try creating a new set with the multi function with a value of 9 count
funcCalledHowManyTimes.set(multi, 9);

//to display the value in the web browser use funcCalledHowManyTimes.get(add) or .get(multi)
//or if you want it to automatically print from VS code see below:
console.log(funcCalledHowManyTimes.get(add));
console.log(funcCalledHowManyTimes.get(multi));


// -------------------------- using Maps in an array of array----------------------------------------------

//We can also pass an array which follows a strict rule for example , see below: 
// [[k,v], [k,v], [k,v]]  k = key v= value. This format is strict when using array in Map()

//create an array that contain 4 arrays and assign it to a const variable named movieData
const movieData = [
    [3, 'Star Wars'],
    ['Five', 'Fast and Furious'],
    ['7', 'Lord'],
    [18, 'Big Birthday']
];

//create a new map with that new array of arrays called movieData
const movieMap = new Map(movieData);


//if you want to return a Map() array back to a regular array using spread , do this:
const backToArray = [...movieMap]

//you can chain a set (aka add) movie elements to the array.
movieMap.set(525, 'Carter').set(9021, 'Christine');
console.log(movieMap); //previously it had 4 element now it contains 6 elements inside of the Map()

//the delete method deletes one element from the array or obj. You have to choose either the exact key word or value , for example:
movieMap.delete('Five'); //it will delete the obj with the string 'Five'. Test to see by doing has() or console.log
console.log(movieMap.has('Five')) //it will return either true or false.
console.log(movieMap);

//We also have a .clear() that removes everything from the array
//movieMap.clear()

//To grab the Keys only , here is a shortcut func
movieMap.keys();
//can also make it change from obj to an array with a spread
const mapToArr = [...movieMap.keys()]; // it will display the values in an array instead of an obj {}
console.log(mapToArr);

//.values() does the same as .keys() , which grabs all values within the obj
movieMap.values();

// ********** TIPS ******************** if you want to check how many elements are in an obj within a Map()
const sizeData = movieMap.size;
console.log(sizeData);

*/
// ----------------------------------------------   SETS --------------------------------------------   
//ALL VALUES IN A SET ARE UNIQUE
//ANY TYPE OF VALUE CAN EXIST IN A SET 
//CANNOT BE THE SAME 

//This is how to create a set
//const bannedFoods = new Set();
//creates an obj set with no values yet
//console.log(bannedFoods); 

//set will only take one parameter , the rest will be ignored and the first parameter will be split individually. Only for strings. But an array is differet.  
    //const bannedFoods = new Set('pizza', 'rice');
//once you console.log it will only show 'pizza' which each letter seperated and the double letter will be one because it only grab unique values that are not the same
    //console.log(bannedFoods);

const bannedFoods = new Set(['pizza', 'candy', 'soda', 'sports drinks']);

//now lets add another banned food to the array in the set using the .add() method
console.log(bannedFoods.add('chips'));

//it can be chained with another add()
console.log(bannedFoods.add('chips').add('wine'));

//to check if a value is in the set use has()
const hasKey = bannedFoods.has('chips');
console.log(hasKey); // returns true 

//EXERCISE EXAMPLE FOR SETS USING A FUNCTION

function filterHashTags(tags){
    const bannedHashTags = new Set([
        'nofilter',
        'justsaying',
        'winning',
        'yolo'
    ]);
    return tags.filter((tag) => !bannedHashTags.has(tag)); //can also use .include() instead of .has()
}

const susansTag = ['happyMonday', 'yolo', 'winning', 'sunset'];


//to remove duplicates using a Set()

const ages = [45, 21, 50, 20, 3, 8 ,9, 41,51];

[...new Set(ages)];