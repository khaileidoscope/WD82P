// Javascript Objects

/*
8 Data Types
    Primitive
    1. String
    2. Boolean
    3. Number
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt
    Non-Primitive
    1. Object
    2. Array
    3. Function
    4. Date
    5. RegExp
    6. Error
***/

// array sample
// const fruits = ["Apple", "Orange", "Mango"];

// object sample
// key: value  name - key & value -"John"
const user = {
  name: "John",
  age: 31,
  isAdmin: true,
  // multiword wrap with quotation mark
  "likes birds": true,
};

// Get value in an object
user.name;
user.age;
user.isAdmin;
user["likes birds"];

//  Remove value in an object
delete user.age;

// Add values in an object
user.job = "Developer";

// const updatedUser = {
//   ...user,
//   isAdmin: false,
// };

// Property value shorthand
function createUser(name, age) {
  return {
    name,
    age,
  };
}

let user2 = createUser("John", 31);

// Property names limitations
// 1. Cannot start with a number
// 2. Cannot contain spaces or special characters
// 3. Cannot contain a dash
// 4. Cannot contain an underscore
// 5. Cannot contain a dollar sign
// 6. Cannot contain a colon
// 7. Cannot contain a period
// 8. Cannot contain a comma
// 9. Cannot contain a question mark
// 10. Cannot contain a forward slash
// 11. Cannot contain a back slash
// 12. Cannot contain a bracket
// 13. Cannot contain a brace
// 14. Cannot contain a quote
// 15. Cannot contain a single quote
// 16. Cannot contain a double quote
// 17. Cannot contain a tilde
// 18. Cannot contain a caret
// 19. Cannot contain a dollar sign
// 20. Cannot contain a percent sign
// 21. Cannot contain a hash
// 22. Cannot contain a star
// 23. Cannot contain a plus sign
// 24. Cannot contain a dash
// 25. Cannot contain a space

// Loops in Array
const fruits = ["Apple", "Orange", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Loop in an object
// for (key in object) {
//     //execute code
// }

// for (let key in user) {
//   console.log(key, user[key]);
// }

// let codes = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+63": "Philippines",
//   "+1": "United States",
// };

// for (let code in codes) {
//   console.log(code, codes[code]);
// }

/* 
Exercise 1:

Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname witht he value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

***/

let User = {};
User.name = "John";
User.surname = "Smith";
User.name = "Pete";

delete User.name;

console.log(User);

/*
Exercise 2:

Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

***/

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log(isEmpty(schedule));

/*
Exercise 3:

We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

***/

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(sumSalaries(salaries));
