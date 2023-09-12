// Problem 5: Palindrome Checker
// Write a JavaScript function called isPalindrome that checks if a given plaindromeing is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization.

let plaindrome = "radar";

function isPalindrome(plaindrome) {
  let reverse = plaindrome.split("").reverse().join("");
  if (plaindrome === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(plaindrome));
