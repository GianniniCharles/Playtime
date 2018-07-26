// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"





// function maxChar(str) {
//   const charMap = {};

//   //This makes a characterMap to represent our string
//   for(let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
// console.log(charMap);
// }





module.exports = maxChar;




//My answer 
//WE SOLVED THIS BY USING A CHARACTER MAP! THE CHARACTER MAP
//IS WHEN WE TURN THE STRING INTO AN ARRAY/OBJECT THAT TRACKS
//INFO ABOUT THE STRING
//-----------------------------------------------------
// function maxChar(str) {
//   let mostCommonSubstring = undefined;
//   let substringFrequency  = 0;

//   const chars = {};

// for (let char of str) {
//   chars[char] = chars[char]+1 || 1
//   if (chars[char] > substringFrequency) {
//     mostCommonSubstring = char;
//     substringFrequency = chars[char]
//     console.log(mostCommonSubstring);
//   }

//   }

// return mostCommonSubstring;
// }

//The first line of for of THIS MAKES THE CHARACTER MAP. when the object is made, 
// the value of each key is 0. So what YOU DO is that if the key
//  value (chars[char]) === 0, make it equal to 1. 
//  Then for every time it finds a char that already exists 
//  in the string, ++.