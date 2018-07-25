// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
// Roundabout solution
 const reversed = n
  .toString()
  .split('')
  .reverse()
  .join('');

  return parseInt(reversed) * Math.sign(n);
}


// function reverseInt(n) {
  // Roundabout solution
  //  const reversed = n
  //   .toString()
  //   .split('')
  //   .reverse()
  //   .join('');
  
  //   if (n<0){
  //     return parseInt(reversed)* -1; //having two return statements in the same function isn't ideal, so
  //     //i'd much rather perform a simpler solution below that doesn't require two return statements.
  //   }
  //   return parseInt(reversed);
  // }
  



// function reverseInt(n) {
//   // My solution
//     if (n<0) {
//       return (Number((n*-1).toString().split('').reverse().join(''))*-1);
  
//     } else
//    return Number((n).toString().split('').reverse().join(''));
  
//   }






module.exports = reverseInt;


