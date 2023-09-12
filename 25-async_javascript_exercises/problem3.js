// Problem 3: Reverse a String
// Write a JavaScript function called reverseString that takes a string as input and returns the reversed string.

let str = "Mabuhay";

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
    // console.log(rev);
  }
  return rev;
}
console.log(reverseString(str));
