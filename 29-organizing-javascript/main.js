// organizing-javascript

// 1. Plain Old JavaScript Objects
const myObject = {
  property: "value",
  otherProperty: 77,
  "obnoxious property": function () {
    //  do stuff
  },
};

// 2. Object Constructors - when creating use capital letter
function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

const playerThree = new Player("John", "X");
console.log(playerThree);

// 3. Factory Functions
// read this link: https://tsherif.wordpress.com/2013/08/04/constructors-are-bad-for-javascript/

function personFactory(name, marker) {
  return {
    name,
    marker,
  };
}

const playerFive = personFactory("Jiggly", "C");
console.log(playerFive);

// September 21, 2023 Part2 or Continuation of Topic");

// 4. Classes
class Dog {
  constructor(breed, color) {
    this.breed = breed;
    this.color = color;
  }

  bark() {
    console.log("Woof!");
  }
}

const dog1 = new Dog("Labrador", "Black");
console.log(dog1);

// 5. Module Pattern

// 6. ES6 Modules
