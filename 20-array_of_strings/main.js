//arrays
//arrays are containers for storing multiple values
//let array_name = [name1, name2, name3];
//Create an array of cars
let cars = ["car1", "car2", "car3"];
console.log(cars[0]);

let fruits = [
  "Banana",
  "Apols",
  "Oranges",
  "Blueberries",
  "Strawberry",
  "Tomato",
  "Starfuit",
];
console.log(fruits[1]);

//changing and element inside an array
fruits[1] = "Apples";
console.log(fruits);

//built in array functions
//length of an array
let size = fruits.length;
console.log(size);

//remove first element
fruits.shift();
console.log(fruits);

//remove last element
fruits.pop();
console.log(fruits);

//remove specific element
//if you put 1 argument the rest will be deleted
fruits.splice(0, 1);
console.log(fruits);

//add element to the end of an array
fruits.push("Mango");
console.log(fruits);

//add element to the beginning of an array
fruits.unshift("Pineapple");
console.log(fruits);

//reverse an array
fruits.reverse();
console.log(fruits);

//sort an array
fruits.sort();
console.log(fruits);
