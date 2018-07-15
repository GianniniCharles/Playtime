// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

let arrayOfCharacters = str.split('');
let reversedArrayOfCharacters = arrayOfCharacters.reverse();
let reversedString = reversedArrayOfCharacters.join(''); 

return reversedString;
}

module.exports = reverse;
