// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//not as nice solution due to extra work.

function palindrome(str) {
return str.split('').every((char, i)=> { //.every checks everything. str.le
  return char === str[str.length -i -1]; //talk about how this solution is not as optimal because it is double the work for the same result. str[str.length -i gets the other side of the potential palindrome, -1 compensates for zero index.]
});





} 


// Straightfoward method

// function palindrome(str) {
  // return str === str.split('').reverse().join('');
  
  // }



  module.exports = palindrome;
