// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Teacher solution 2: Uses regex and compares two solutions
function anagrams(stringA, stringB) {
  return cleanMyString(stringA) === cleanMyString(stringB);
 
}


function cleanMyString(str){
  //this RegExp replaces all non letters with anything you want. In this case, we chose an empty string, which means replace with nothing.
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

}

anagrams('Giannini', 'Giannini')
module.exports = anagrams;











// -----------------------------------------------------
//My solution with help
// // function anagrams(stringA, stringB) {
//   let charMapA = makeACharMap(stringA);
//   let charMapB = makeACharMap(stringB);

  

//   //checking to see if they have the same letters. Auto false if they dont.
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//    return false
//   } 

// //checking to see if the letters are used the same number of times in both.
//   for (let char in charMapA){
//     if (charMapA[char] !== charMapB[char]){
//       return false
//     } 
//   } //end loop
//   return true
// } //end anagram









// function makeACharMap(str) {
// const charMap = {};
// const theLowerCaseString = str.toLowerCase()

// //helper function. You can also use regex
//   for (let char of theLowerCaseString) {
//       if (
//         char !== 'a'&&
//         char !== 'b'&&
//         char !== 'c'&&
//         char !== 'd'&&
//         char !== 'e'&&
//         char !== 'f'&&
//         char !== 'g'&&
//         char !== 'h'&&
//         char !== 'i'&&
//         char !== 'j'&&
//         char !== 'k'&&
//         char !== 'l'&&
//         char !== 'm'&&
//         char !== 'n'&&
//         char !== 'o'&&
//         char !== 'p'&&
//         char !== 'q'&&
//         char !== 'r'&&
//         char !== 's'&&
//         char !== 't'&&
//         char !== 'u'&&
//         char !== 'v'&&
//         char !== 'w'&&
//         char !== 'x'&&
//         char !== 'y'&&
//         char !== 'z') {continue};

//       charMap[char] = charMap[char]+1 || 1;
//   }

//   //Loops INSIDE of the completed object using the keys
//   return charMap;
// }
// -----------------------------------------------------
