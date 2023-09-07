//Errors and Clean Code

//Reference Error - variable not defined

// let a = "Hello";
// let b = "World";
// console.log(c);

// //Syntax Error - missing parenthesis
// function printHelloWorld() {
//   console.log"Hello World!";
// }
// printHelloWorld();

//Type Error - variable is not a string
// -> an operand or argument passed to a function is not of the expected type by that operator or function
// -> or when attempting to modify a value that cannot be changed;
// -> or when attempting to use a value in a way that is not valid.

// let str1 = "Hello";
// let str2 = "World";
// let message = str1.push(str2); //push is only used in an array which is str1 is not

//take this course: https://developer.chrome.com/docs/devtools/javascript/

//Clean Code
// -> A code that is easy to read, understand and write.
// -> A code that is easy to maintain.
// -> A code that is easy to extend.

// Naming functions and variables
// -> meaningful
// -> descriptive
// -> avoid reserved words
// -> avoid using single letters

// Use a consistent vocabulary or naming convention
// Good
// function getPlayerScore();
// function getPlayerName();
// function getPlayerTag();

// // Bad
// function getUserScore();
// function fetchPlayerName();
// function retrievePlayerTag();

// Good
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000; // 3,600,000

// Indentation and Line Length

// Line length
// let reallyReallyLongLine =
//   something +
//   somethingElse +
//   anotherThing +
//   howManyTraces +
//   oneMoreReallyLongThing;

// Bad
function myFunction() {}

// Good
function calculateBMI(height, weight) {
  return weight / (height * height);
}

// MUST READ!!! --> https://github.com/airbnb/javascript
