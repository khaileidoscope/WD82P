// When a user
let userInput = parseInt(prompt("Enter a number"));

//Loop from 1 to the entered number
for (let i = 1; i <= userInput; i++)
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
