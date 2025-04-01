function isPalindrome(word) {
  // Step 1: Clean up the word by removing non-alphanumeric characters and converting to lowercase
  const cleanedStr = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Step 2: Check if the cleaned string is the same as its reversed version
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

/* 
  Pseudocode:
  1. Accept the input string 'word'.
  2. Remove all non-alphanumeric characters from the string.
  3. Convert the string to lowercase for case-insensitive comparison.
  4. Reverse the cleaned string.
  5. Compare the original cleaned string to the reversed string.
  6. If they are equal, return true (it is a palindrome).
  7. If they are not equal, return false (it is not a palindrome).
*/

/*
  Explanation of Solution:
  The solution starts by cleaning the input string to ignore spaces, punctuation, and case differences. We use a regular expression to remove any character that is not a letter or a number. Then, we convert the string to lowercase for case-insensitive comparison. 

  After cleaning, we reverse the string using the `split('')`, `reverse()`, and `join('')` methods and compare it to the cleaned version. If the original cleaned string is equal to the reversed string, then it's a palindrome, and the function returns `true`. Otherwise, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
