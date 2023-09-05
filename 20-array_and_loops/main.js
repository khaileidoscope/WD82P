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
//if you put single argument the rest will be deleted
//can add inside using items.splice(1,0, "item1")
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

//combine arrays using concat method
let vegetables = ["Cabbage", "Carrot", "Onion"];
let food = fruits.concat(vegetables);
console.log(food);

//you can combine more arrays
let meats = ["Chicken", "Beef", "Pork"];
let food2 = fruits.concat(vegetables, meats);
console.log(food2);

//Watch this video to learn more about Arrays:
//https://www.youtube.com/watch?v=7W4pQQ20nJg&themeRefresh=1

//LOOPS
//for loop
//use if statement to check if the condition is true
// for (initialization; condition; increment/iteration) {
//  code to be executed;
// }

let Frutas = [
  "Banana",
  "Apols",
  "Oranges",
  "Blueberries",
  "Strawberry",
  "Tomato",
  "Starfuit",
];

for (let i = 0; i < Frutas.length; i++) {
  console.log(Frutas[i]);
}

//another example using forEach method
//Frutas.forEach((item) => console.log(fruit));

//another example using for of loop
//for (let fruit of Frutas) {
//console.log(fruit);
//}
for (let fruit of Frutas) {
  console.log(fruit);
}

//if you want to know more about loops:while and for
//check here: https://javascript.info/while-for
