// Problem 5: Palindrome Checker
// Write a JavaScript function called isPalindrome that checks if a given plaindromeing is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization.

function isPalindrome(plaindrome) {
  for (let i = plaindrome.length - 1; i >= 0; i--) {
    plaindrome = plaindrome + plaindrome[i];
  }
  return plaindrome;
}

console.log(isPalindrome("radar"));
