// JavaScript Basic Data Types
//1. Numbers
/*  - Integers (e.g 10, 400 , -5)
    - floating point numbers (e.g 12.5, 56.7786543)
    - Doubles
*/
let age = 28; //integer
let myAge = "28"; //string
let hisAge = Number("28"); //Number para i convert yung laman to number if checheck sa typeof
let herAge = parseInt("28"); //string to integer -whole number
let yourAge = parseFloat("28.5"); // use this if decimal
let tempInCelsius = 38.5; //float

console.log(typeof age); //typeof para malaman kung anong variable ginamit.

//Math
let firstNumber = 10;
let secondNumber = 5;
let thirdNumber = "5"; //can't add integer and string but concatinates both. If gusto talga gamitin ang number sa loob, use parseint.

console.log(firstNumber + secondNumber);
console.log(firstNumber + thirdNumber);

//arithmetic
console.log(6 + 9); //addition
console.log(20 - 15); //subtraction
console.log(3 * 7); //multiplication
console.log(10 / 5); //division
console.log(5 ** 2); // exponent or raisedto
console.log(7 % 3); // remainder / modulo answer

console.log((9 % 5) * 10);

//increment and decrement operators
let year = 2023;
//increment
year++; //increasing value by 1
console.log(year);
//decrement
year--; //decreasing by 1

//assignment (-)
let x = 3;
let y = 4;

// x = x * y; //call mo si x
x *= y;

console.log(x);

// comparison operators
let a = 5;
let b = 2;

console.log(a == b); //magkavalue ba sila? false
console.log(a != b); //di daw sila same?
console.log(a > b); //is a greater than b? true
console.log(a < b); //false
console.log(a >= b); //true greater or equal
console.log(a <= b); //false

// 2. Strings
