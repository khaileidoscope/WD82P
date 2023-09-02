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
