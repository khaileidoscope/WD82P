// var message;
// message = "Hello, World!";
// var => old way of creating variables in JS
// let => new and current way of creating variables in JS
// const => most of the time, preferred, static

// var message = "Hello, World!";
// console.log(message);

// let age = 18; //declaring = assigning
// const birthdate = "05/01/1995"; //declaring = assigning
// console.log(age); //calling
// console.log(birthdate); //calling

// let user = "Carlo",
//   age = 25,
//   message = "Hello";

// console.log(user);

// let box;
// box = "09/14/1992";

// alert(box);

// challenge:

/*
Try the following exercises (and don’t forget to use console.log()!):

1. Add 2 numbers together! (just type console.log(23 + 97) into your html file)
2. Add a sequence of 6 different numbers together.

3. Print the solution to the following equation: (4 + 6 + 9) / 77
Answer should be approximately 0.24675

4. Let’s use variables!
Type this statement at the top of the script tag: let a = 10
In the console console.log(a) should print 10
Try the following in the console: 9 * a
and this: let b = 7 * a (returns undefined *) and then console.log(b)

5. You should be getting the hang of this by now… try this sequence:
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max
If you type percentage in the console and press Enter you should see a value like 0.7719

6.Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.
*/

//1.
console.log(23 + 97);

//2.
console.log(1 + 2 + 3 + 4 + 5 + 6);

//3.
console.log((4 + 6 + 9) / 77);

//4.
let a = 10;
console.log(a);
console.log(9 * a);

let b = 7 * a;
console.log(b);

//5.
const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage);

//6. Done
