// this is a function to test if the string is a palindrome or not

function checkPalindrome(string) {
  const len = string.length;

  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - i - 1]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

// taking inputsssss
//const string = "tenet";

const string = prompt("Enter a string to test: ");

const value = checkPalindrome(string);

console.log(value);
