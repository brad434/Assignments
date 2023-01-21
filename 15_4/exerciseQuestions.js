/*
//1.
const filterOutOdds = (...arr) => arr.filter(num => num % 2 === 0);

//2.
function findMin(...arr){   
    return Math.min(...arr);
}

//3.
function mergeObjects(obj1, obj2){
    const newObj = {...obj1, ...obj2}
    return newObj;
}

//4.
const doubleAndReturnArgs = (arr, ...numm) => [...arr, ...numm.map(v => v * 2)];

//5.
/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let idx = Math.floor(Math.random() * items.length);
    let newItem = [];
    for(let i = 0; i < items.length; i++){
        if(i !== idx){
            newItem.push(items[i]);
        }
    }
    return newItem;
}



/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
let newObj = {...obj};
delete newObj[key]
return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
let newObj = {...obj1, ...obj2};
return newObj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
let newObj = {...obj};
newobj[key] = val;
return newObj;
}
