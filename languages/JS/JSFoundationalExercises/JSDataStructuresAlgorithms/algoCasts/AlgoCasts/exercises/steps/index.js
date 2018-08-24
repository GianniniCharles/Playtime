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
 //Base cases: Put them as argumentes and they will work between the function calls.
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }//ends function if n === row. 

  if (stair.length === n){
    console.log(stair);
    return steps(n, row + 1)
  }//This is the case that triggers at the end of a row. Each row has n length. 
  //the first row (row 0) will have 1 #and n-1 spaces. He visualized a grid when he logiced his way through the problem.

  //SOLVING PROBLEMS. #1. Logic your way through it.
  //#2. Code through it.
  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
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