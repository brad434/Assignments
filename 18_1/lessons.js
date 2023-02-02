/*
//HOW JQUERY WORKS

//will print out a node of the H1 in an array
$('h1') 

//will display the test value within the H1
$('h1').text()

//This will replace whatever text that was inside of the h1 and make it say HTML
$('hi').text('HTML')

/* --------- JQUERY CSS AND CLASSES -------------------*/
/*
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
/*
//same like regular javascript to add a class to the DOM we link the css class to the DOM h1
$('h1') //[h1#firstHeading.firstHeading, preObject...] . A jquery object.

//add the css class to the element on the html from Jquery. Make sure the class is created on the .css file
$('h1').addClass('highlight'); // used on one or all h1
$('li').addClass('highlight'); // this can be used for all Li's
$('img').removeClass('highlight'); // this can be used to remove all css highlight classes on all img's
$('img').toggleClass('highlight'); // this can be used to toggle the css


/*-------------- JQUERY Method Chaining --------------- */
/*
//Instead of 
let todoContainer = document.querySelector("#todo-container");
todoContainer.style.color = "red";
todoContainer.innerHTML = "Look at this!";
todoContainer.addEventListener('click', function(evt){ console.log("Clicked")});

// We can have
$("#todo-container").css("color", "red").text("Look at this!").on("click", function(evt) {console.log("Clicked")});


/* ------------ JQuery Traversal ------------------------- */
/*

$('li').eq(3) //gives use a single element from the jquery object. For example it gives us the 4th place of the index of Li
const $specialLi = $('li').eq(3); //place it inside of a const variable 

$specialLi.next(); //retrieve the next sibling of the li. So the next li after index 3 li.
$specialLi.prev(); //retrieve the previous sibling of the li. So the previous li will display before index 3 li.
$specialLi.parent(); // this will give us the parent of that related element 

$('ul') //targeting the ul on the DOM
$('ul').children() // this will look for direct children with that 'ul' . which will be all of the 'li'
$('li').find('a')//looks for whatever element you need

/*----------------creating , appending , removing element w/JQUERY---------------------- */
/*
//instead of using document and creatingElement
document.createElement('h1');
//let practice grabbing the 'ul' and working to add li's to it
$('ul');
$('ul').append('<li class="highlights"> This is how to create css in JQuery! </li>');
//lets add a checkbox to every list in the 'ul'
$('li').append('<input type="checkbox" />'); // add checkbox's at the end of the li's
$('li').prepend('<input type="checkbox" />'); // add checkbox's at the beginning of the li's

//this line of code will CREATE a html code (h1) then add a color to the element then append it or add it to the end of the element of choice
$('<h1>Hello World!</h1>').css('color', 'purple').appendTo('span'); //create an element inline also.

//to remove an element in Jquery
$('hi').remove()

//to add an element before or after an element. For example after a 'li'
$('ul').after('<b>This element is place underneath the li code</b>');


/* ---------------------JQUERY EVENTS ------------------------------------------------------ */
//basic event listern would be to have all images be clicked on and have an alert that says "hello"
// $('img').click(function(){
//     alert('Hello!');
// });

//JQUERY'S "on()" works similarly to addEventListener. It lets you specify the type of event to listen for.
//prints when item with is "submit" is clicked 
$("#submit").on("click", function(){
    console.log("Another click!");
});

//alerts when ANY button is clicked on
$('button').on('click', function(){
    console.log("Button was clicked!");
});

//this code will change the color of the img border when the mouse is over the image
// $('img').on('mouseenter', function(){
//     $(this).css('border', '10px solid purple');
// });
//now this code will remove the border when clicked
// $('img').on('click', function(){
//     $(this).remove();
// });

//this code will add an input field inside of the form when the button(#add-input) is clicked on
$('#add-input').on('click', function(){
    $('form').append('<input type="text"/>');
});

//Code below will prefill the added value because it is focusing on all input within the form. There is parameter called 'input'
$('form').on('focus', 'input', function(){
    $(this).val('Please fill out field');
});


/*------------------- JQUERY ANIMATION -----------------------------------*/
$('img').on('click', function(){
    $(this).animate({
        opacity: 0,
        width: '50px', //DO NOT ANIMATE WIDTH EVER (POOR PERFORMANCE)
    }, 3000, function(){
        $(this).remove();
    })
})