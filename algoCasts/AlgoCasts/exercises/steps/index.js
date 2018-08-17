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

//YOU MUST WRITE PSEUDO CODE BEFORE CODING. IT HELPS.
  /*Strategy:
  -Create an empty string, 'stair'
  -from 0 to n(iterate through columns);
  -If the column is equal to or less than the current row
  -Add a '#' to 'stair'
  -otherwise
  -add a space to stair

  -console.log'stair'
  */


  //I KNOW THIS HAS BAD TIME COMPLEXITY. A BETTER SOLUTION MAY BE FOUND ONE DAY.
  function steps(n) {
    for (let row = 0; row <n; row++){
      let stair = '';

      for (let column = 0; column<n; column ++){
        if (column <= row){
          stair += '#';
        } else {
          stair += ' ';
        }
      }
      console.log(stair);oe
    }
  }
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