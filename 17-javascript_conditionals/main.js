// // console.log(2 > 1);
// // console.log(2 == 1);
// // console.log(2 != 1);

// let result = 5 > 4;
// console.log(result);

// console.log("z" > "a"); //lexicographical order
// console.log("glow" > "glee");
// console.log("be" > "bee"); //like dictionary

// console.log("2" > 1);
// console.log("01" == 1);
// console.log(true == 1); //truthy
// console.log(false == 0); //falsy
// console.log("0" === 0); //strict equality operator ===

// if-else condition
if (0 > 1) {
  console.log("1 is indeed larger than 0");
} else {
  console.log("0 is not larger than 1");
}

//time
let hour = 5;
if (hour < 12) {
  console.log("Good Morning");
} else if (hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}

//login sample
let userLoggedIn = true;

if (userLoggedIn) {
  console.log("redirect to homepage");
} else {
  console.log("redirect to login page");
}

// if (grade >= 75) {
//   console.log("Pass! Exert more effort.");
// } else if (grade >= 80) {
//   console.log("Good! Keep it up.");
// } else if (grade >= 85) {
//   console.log("Very good. A job well done!");
// } else if (grade >= 90) {
//   console.log("Excellent!");
// } else {
//   console.log("Failed! Try again next quarter.");
// }

// grades
let grade = parseInt(prompt("What is you grade?"));
console.log(typeof grade);

if (grade < 75) {
  console.log("Failed! Try again next quarter");
} else if (grade <= 80) {
  console.log("Pass! Exert more effort");
} else if (grade <= 85) {
  console.log("Good! Keept it up.");
} else if (grade <= 90) {
  console.log("Very good! A job well done.");
} else {
  console.log("Excellent");
}
