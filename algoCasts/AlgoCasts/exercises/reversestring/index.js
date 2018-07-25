// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Debugger Statements
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
  }
  



// function reverse(str) {
//   //ES6 Advanced Way

// return str.split('').reduce((rev, char) => 
//    char + rev, '');
// }

module.exports = reverse;


//Straightforward solution
    // return str.split('')
    // .reverse()
    // .join('');



  //Another Solution
  // let reversed = '';
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;


  // ES5 advanced way
  // return str.split('').reduce((reversed, character)=>{ 
  //   return character + reversed;
  //  }, '') 

   //reduce will take starting argument, pass into arrow function, whatever gets passed first into reduce will be reversed string,
        //second is element we run on in array.
   //take values in array and condense to a single string value.