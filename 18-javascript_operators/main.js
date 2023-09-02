//Logical Operators (AND - &&, OR - ||, NOT = !)

//expression1 && expression2 && expression3
// expression1 || expression2 || expression3

let age = 15;

if (age > 5 || age < 10) {
  console.log("Kids");
} else {
  console.log("Teenager");
}

//another example &&
const isAdult = true;
const hasLicense = false;

if (isAdult && hasLicense) {
  console.log("You can drive car");
} else {
  console.log("You can't drive a car");
}

//another example ||

const isRaining = true;
const haveUmbrella = false;

if (isRaining || haveUmbrella) {
  console.log("You won't get wet.");
} else {
  console.log("You might get wet.");
}

const yearsofExperience = 2;
const hasDegree = true;
const knowsProgramming = true;
const hasCertification = false;

if (
  (yearsofExperience >= 3 && hasDegree && knowsProgramming) ||
  (hasCertification && knowsProgramming)
) {
  console.log("You are qualified");
} else {
  console.log("Sorry, you do not meet the eligibility criteria for a job");
}

//not operator
const isSingle = true;

if (!isSingle) {
  console.log("I am single");
} else {
  console.log("I am not single");
}

//another example

const iceCreamVanOutside = true;
const houseStatusOnFire = true;

if (!(iceCreamVanOutside || houseStatusOnFire)) {
  console.log("You should leave the house quickly.");
} else {
  console.log("You should stay inside.");
}

//switch statements

// switch (expression) {
//   case choice1:
//     console.log("true");
//     break;
//   case choice2:
//     console.log("false");
//     break;
//   default:
//     console.log("default");
//     break;
// }

let weather = "thunderstorms";

switch (weather) {
  case "sunny":
    console.log("It's a beautiful day.");
    break;
  case "rainy":
    console.log("Grab your umbrella.");
    break;
  case "snowing":
    console.log("Wear a coat and take a shovel.");
    break;
  default:
    console.log("No weather information available.");
    break;
}

//another example switch

let grade = 75;

switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  case "Wednesday":
    console.log("Today is Wednesday");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Today is Friday");
    break;
  case "Saturday":
    console.log("Today is Saturday");
    break;
    break;
  case "Sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

//ternary operator
//condition ? true : false;

let Age = 18;
let isEligibleToVote = Age >= 18 ? "You can vote" : "You can't vote";

console.log(isEligibleToVote);
//end of morning class

//start of afternoon class
//FUNCTION is a piece of code that does something..,
//function uses verbs ex printName, addNumbers, etc..
//function declaration
// function printName() {
//   console.log("John");
// }
const myText = "I am a string";
const newString = myText.replace("string", "sausage");

console.log(newString);

//another example function printName(-parameters-)
//parameter is a variable that is passed into a function

function printName(name) {
  console.log(name);
}

//printName(--arguments--);
//argument is the value we passed to parameter
printName("John");
printName("Khail");
printName("Arjay");

//another example
//creating a function
function myFunction(firstName, lastName) {
  console.log(firstName + " " + lastName);
  console.log(`${firstName} ${lastName} is a good boy`);
}

//invoking a function
myFunction("Khail", "Smith");

//another example
function averagePrices(order1, order2, order3, order4, order5) {
  let sum = order1 + order2 + order3 + order4 + order5;
  let average = sum / 5;

  console.log(average);
}

averagePrices(10, 20, 30, 40, 50);
averagePrices(100, 200, 300, 400, 500);

//another example with default
function hello(name = "Carlo") {
  console.log(`Hello ${name}`);
}

hello("John");
hello("Khail");
hello(); //undefined: you must put a string on the parameter

//ARROW FUNCTIONS -ecma script- ES6
//old way of creating functions
function add(x, y) {
  return x + y;
}

//new way arrow functions
const adds = (x, y) => {
  x + y;
};

//activity
// I want you to create a function
// It expects two parameters which are numbers
// I want you to subtract these two numbers
// and logs the output to the screen

function subtractAndPrint(c, d) {
  console.log(c - d); //side effect
}
subtractAndPrint(10, 5);
subtractAndPrint(20, 5);

//global scope let age=20
//do not create many global scope, prone to bugs
function print() {
  //function scope/local scope let age=30
}

//another example
function favoriteAnimal(animal) {
  return animal + " is my favorite animal";
}
console.log(favoriteAnimal("dog"));

//arrow
const favoriteAnimal2 = (animal) => `${animal} is my favorite animal`;
console.log(favoriteAnimal2("cat"));

//exercise2
//create a function that accepts two parameters (firstName, lastName)
//whenever I call that function, I can pass two arguments of type String
//It will return the full name of the person

//Carlo Dacuyan
//Jose Rizal
//Juan Pablo

function myFunction(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
// myFunction("Carlo", "Dacuyan");
// myFunction("Jose", "Rizal");
// myFunction("Juan", "Pablo");
console.log(myFunction("Carlo", "Dacuyan"));
console.log(myFunction("Jose", "Rizal"));
console.log(myFunction("Juan", "Pablo"));

//exercise3
/* 
For now, just write each function and test the output with console.log

1. Write a function called add7 that takes on number and returns that number + 7.

2. Write function called multiply that takes 2 numbers and returns their product.

3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE, or BoTh.

4. Write a function called lastLetter that takes a string and returns the very last letter of that string:

lastLetter("abcd") should return "d"

*/

//1

function add7(number1) {
  return number1 + 7;
}
console.log(add7(5)); //12

//2
function multiply(number1, number2) {
  return number1 * number2;
}
console.log(multiply(5, 3)); //15

//3
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(capitalize("cArLo")); //Carlo

//4
function lastLetter(last) {
  return last.at(-1);
}
console.log(lastLetter("abcd")); //d
