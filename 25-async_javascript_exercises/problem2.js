// Problem 2: Factorial of a number
// Write a JavaScript function called factorial that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers from 1 to n.

// function/solution
let n = parseInt(prompt("Enter a number: "));

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log("The answer is:" + factorial(n));
alert("The answer is:" + factorial(n));
