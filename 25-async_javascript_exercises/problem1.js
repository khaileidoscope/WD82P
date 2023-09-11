// Problem 1: Sum of Two Numbers
// Write a JavaScript function called addNumbers that takes two numbers as parameters and returns their sum.

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));

// Alert the result of addNumbers: The answer is:____
alert("The answer is: " + addNumbers(a, b));

// function/solution
function addNumbers(a, b) {
  return a + b;
}
