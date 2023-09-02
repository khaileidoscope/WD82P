// Exercise 1
// Declare a variable called 'balance' and assign it a starting balance of 1000.
// Create variables 'transaction1', 'transaction2', and 'transaction3' to represent three transactions.
// Update the 'balance' variable after each transaction:
// - 'transaction1': Add 500 to 'balance'.
// - 'transaction2': Deduct 200 from 'balance'.
// - 'transaction3': Deduct 1000 from 'balance'.

//Your code here
let balance = 1000;

let transaction1, transaction2, transaction3;

transaction1 = balance + 500;
balance = transaction1;

transaction2 = balance - 200;
balance = transaction2;

transaction3 = balance - 1000;
balance = transaction3;

// Log the final 'balance' after all three transactions.
console.log(balance);

// Exercise 2
// Create three variables 'testScore1', 'testScore2', and 'testScore3' and assign them different test scores as numbers.
// Calculate the average test score of these three scores and store it in a variable called 'averageScore'.
// Round the 'averageScore' to the nearest integer using Math.round().

// Your code here
let testScore1 = 85;
let testScore2 = 75;
let testScore3 = 96;

let averageScore = Math.round((testScore1 + testScore2 + testScore3) / 3);

// Log the 'averageScore' to the console.
console.log(averageScore);

// Exercise 3
// Create a variable called 'temperature' and assign it a temperature value in Celsius.
// Write a conditional statement (if-else) to determine the weather condition based on the temperature:
// - If the temperature is above 30°C, log "It's hot outside!"
// - If the temperature is between 20°C and 30°C (inclusive), log "The weather is pleasant."
// - If the temperature is below 20°C, log "It's a bit chilly."

// Your code here
let temperature = parseFloat(prompt("What's the Temperature?"));
// console.log(typeof temperature);

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature >= 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}
