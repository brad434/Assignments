//Question #1
//ANSWER: [1,2,3,4]
const newSet = new Set([1,1,2,2,3,4]);
console.log(newSet);


//Question #2
//ANSWER: [ref] it has alot of E's and R's
const displaySet = [...new Set("referee")].join("");
console.log(displaySet);

//Question #3
//ANSWER: {[1,2,3] => true, [1,2,3] => false}
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

console.log(m);


//hasDuplicate
function hasDuplicate(arr){
    let dupArr = new Set(arr);
    return arr.filter((set)=> !dupArr.has(arr));
}

//have a question on this. How does the computer know exactly if the element is duplicated like there two E's or 4 X's?
const hasDuplicate = arr => new Set(arr).size !== arr.length

console.log(hasDuplicate([1,3,2,1]));

//VOWELSCOUNT

function vowelCount(str){
    let vowels = new Map();
    vowels.set('a', 0);
    vowels.set('e', 0);
    vowels.set('i', 0);
    vowels.set('o', 0);
    vowels.set('u', 0);

    for(let char of str.toLowerCase()){
        if(vowels.has(char)){
            vowels.set(char, vowels.get(char) + 1);
        }
    }
    return vowels;
}