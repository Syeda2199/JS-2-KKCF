// Equal values
10 == 3 // returns false
5 == 5 // returns true
6 == "6" // returns 
7 == "7" // strict equality = false
// console.log('5 and 5 are equal:', 5 == 5);
// console.log('10 and 3 are equal:', 10 == 3);

// Not equal values
10 != 3 // returns true
5 != 5 // returns false
// console.log('10 and 3 are not equal:', 10 != 3);
// console.log('5 and 5 are not equal:', 5 != 5);

// Less than
10 < 3 // returns false
5 < 5 // returns false
4 < 5 // returns true
// console.log('10 is less than 3:', 10 < 3);
// console.log('5 is less than 5:', 5 < 5);
// console.log('4 is less than 5:', 4 < 5);

// Greater than
10 > 3 // returns true
5 > 5 // returns false
4 > 5 // returns false
// console.log('10 is greater than 3:', 10 > 3);
// console.log('5 is greater than 5:', 5 > 5);
// console.log('4 is greater than 5:', 4 > 5);

// Less than or Equal values
10 <= 3 // returns false
5 <= 5 // returns true
4 <= 5 // returns true
// console.log('10 is less than or equal to 3:', 10 <= 3);
// console.log('5 is less than or equal to 5:', 5 <= 5);
// console.log('4 is less than or equal to 5:', 4 <= 5);

// Greater than or Equal values
10 >= 3 // returns true
5 >= 5 // returns true
4 >= 5 // returns false
// console.log('10 is greater than or equal to 3:', 10 >= 3);
// console.log('5 is greater than or equal to 5:', 5 >= 5);
// console.log('4 is greater than or equal to 5:', 4 >= 5);

// Equal values and type
10 === 3 // returns false
5 === 5 // returns true
6 === "6" // returns false
// console.log('5 and 5 are equal and of same type:', 5 === 5);
// console.log('10 and 3 are equal and of same type:', 10 === 3);
// console.log('6 and "6" are equal and of same type:', 6 === "6");

// Not equal values or type
10 !== 3 // returns true
5 !== 5 // returns false
6 !== "6" // returns true
// console.log('10 and 3 are not equal or not of same type:', 10 !== 3);
// console.log('5 and 5 are not equal or not of same type:', 5 !== 5);
// console.log('6 and "6" are not equal or not of same type:', 6 !== "6");

// AND operator 
let x = 4;
let y = 8;
let z = 12;

4 < 5 && 8 > 5; // returns true because both conditions are true
4 > 5 && 12 > 10; // returns false because x > 5 is false
y > 10 && z > 10; // returns false because y > 10 is false
// console.log('x < 5 and y > 5:', x < 5 && y > 5);
// console.log('x > 5 and z > 10:', x > 5 && z > 10);
// console.log('y > 10 and z > 10:', y > 10 && z > 10);

// OR operator
let a = 3;
let b = 6;
let c = 9;

3 > 2 || b < 5; // returns true because a > 2 is true
3 < 2 || b < 5; // returns false because both conditions are false
9 > 5 || c < 8; // returns true because b > 5 is true
console.log('3 > 2 or 6 < 5:', 3 > 2 || 6 < 5);
// console.log('a < 2 or b < 5:', a < 2 || b < 5);
// console.log('b > 5 or c < 8:', b > 5 || c < 8);

//if statement 
 let age = 25;
if (age >= 18) {
   console.log("You can vote!");
 }

//if else 
let number = 2
 if(number > 0){
     console.log("number is positive")
 }
 else {
    console.log("number is not greater than 0")
 }

//if else if else
let number = Math.floor(Math.random() * max)
 if(number > 0){
    console.log("number is positive")
}
 else if(number == 0){
     console.log("number is equal to 0")
 }
 else {
     console.log("number is negative")
 }

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let num3 = Math.floor(Math.random() * 10);

let largestNumber;

if (num1 >= num2 && num1 >= num3) {
    largestNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largestNumber = num2;
} else {
    largestNumber = num3;
}

// Display the result
console.log(`${largestNumber} is the largest number.`);
