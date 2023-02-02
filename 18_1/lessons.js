//HOW JQUERY WORKS

//will print out a node of the H1 in an array
$('h1') 

//will display the test value within the H1
$('h1').text()

//This will replace whatever text that was inside of the h1 and make it say HTML
$('hi').text('HTML')

/* --------- JQUERY CSS AND CLASSES -------------------*/

$('a') //will output all of the links on the page "[a,a,a,a,a,a,a,a,a]" like so.

//this will print of the exact value of the css color 
$('a').css('color') // "rgb(0, 0, 238)"
//if you had did the other way through querySelector you would not get a value 
document.querySelector('a').style.color //" "

//to find out the font size you can do this
$('a').css('font-size')

//to change the font-size 
$('a').css('font-size', '30px') // now all of the links tag will be font-size of 30px


//created multiple properties (like color and its font size for all link tags) at once to be changed like so
const tealColorStyle = {color: 'teal', fontSize: '40px'}; 
$('a').css(tealColorStyle);


/*-------- For class -------------*/
//same like regular javascript to add a class to the DOM we link the css class to the DOM h1
$('h1') //[h1#firstHeading.firstHeading, preObject...]

//add the css class to the element on the html from Jquery. Make sure the class is created on the .css file
$('h1').addClass('highlight'); // used on one or all h1
$('li').addClass('highlight'); // this can be used for all Li's
$('img').removeClass('highlight'); // this can be used to remove all css highlight classes on all img's
$('img').toggleClass('highlight'); // this can be used to toggle the css



