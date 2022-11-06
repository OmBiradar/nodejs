// this is a function to test if the string is a palindrome or not

// defining that we require the proompt-sync
const ps = require("prompt-sync");
const prompt = ps();

//defining a function to use for checing if the work is a palindrome or not
function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - i - 1]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// taking a string input from the user

const string = prompt("Enter a string to test: ");

// pushing the user input string into the plindrome check function for checking
const value = checkPalindrome(string);

// printing the final result of the check by the function
console.log(value);
