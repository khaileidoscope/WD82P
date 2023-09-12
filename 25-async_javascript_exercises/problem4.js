// Problem 4: Find the Largest Number in an Array
// Write a JavaScript function called findLargestNumber that takes an array of numbers as input and returns the largest number in the array.

// Sample array: [1,2,3,4,5]

let numbers = [1, 2, 3, 4, 5];

function findLargestNumber(numbers) {
  let largestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i];
    }
  }
  return largestNum;
}

console.log(findLargestNumber(numbers));
