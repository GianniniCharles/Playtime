// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


module.exports = steps;
//NOT A SOLUTION
// //this gets the # signs, but not the space
// function steps(n) {
//   let staircase = ''
  
//   for (let i = 0; i<n;i++){
//   staircase+= '#';
  
//   console.log(staircase)
//   }//end loop
  
  
  
//   return staircase;
//   }