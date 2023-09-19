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

// 4. Module Pattern

// 5. Classes

// 6. ES6 Modules
