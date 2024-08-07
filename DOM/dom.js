// 1. Select the element with the id 'title' using getElementById
document.getElementById('title');

// 2. Save the reference to the element with the id 'title' to a variable
// myTitle = document.getElementById('title');

// 3. Console log the element by id
console.log(document.getElementById("title"));

// 4. Use querySelector to select the first h2
document.querySelector('h2');

// 5. Use querySelector to select all h2's by its class of 'description'
document.querySelectorAll('.description');

// 6. Use querySelectorAll to select all h2's on the page

// Exercise 1: Create at least 3 different elements in your HTML file.
// In your JS file, select all of them and log them to the console.
document.querySelectorAll('randomColor');

// 8. use innerText property to change the text of the h1 with the id 'transform

// 9. select the element with the id 'text-output' and use innertext to change its value to 'bar'

// 10. Exercise 2: Welcome User
// Use a prompt()to ask the user for their name 
// Concatenate the user’s name into a welcome message
// Use a DOM method to output the welcome message into an html element

// 11. Modify CSS - Select the element with the id 'text-output'
// use the style.fontSize property to set the text size to 30px
let userName = prompt("Welcome, enter your name")
document.querySelector("#transform").innerText = "Welcome" +  "Name"
// 12. Select the body element and use style.cssText to change the text color and background color

//13. Change src attribute of the image 

// Declare function
function sayHello() {
    // Whatever code your function will run
    alert("Hello world!");
}

//call the function
//sayHello();

// parameters
function add2nums(a, b){
    alert(a+b)
}

//add2nums(2,3)

//addeventListener

//select the button element
let myButton = document.querySelector("button")

//declared event handler function
function handleClick(){
    alert('button was clicked')
}
//use addEventListener to run the handleClick function when the button is clicked
myButton.addEventListener('click', handleClick);
//we are listening for the click event, when it happens, run the handleClick function

// random color exercise
//select random color button
let colorButton = document.querySelector("#random-color")

//declare event handler function
let randomR = Math.floor(Math.random() * 255 )
    let randomB = Math.floor(Math.random() * 255 )
    let randomG = Math.floor(Math.random() * 255 )

function randomColor(){
    //255 is the max number 
    let randomR = Math.floor(Math.random() * 255 )
    let randomB = Math.floor(Math.random() * 255 )
    let randomG = Math.floor(Math.random() * 255 )
    //select the body element
    //change the background color 
    document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
}

colorButton.addEventListener("click", randomColor)