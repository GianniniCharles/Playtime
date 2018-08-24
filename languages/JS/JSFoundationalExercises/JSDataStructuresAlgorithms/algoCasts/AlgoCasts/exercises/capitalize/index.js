// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//My solution 2 based on teacher logic

function capitalize(str) {
  let theString = '';
  
  let splitStr = str.split('');
  
  for(let i=0; i<splitStr.length; i++) 
  {//start for loop
    if (splitStr[i-1] === ' '||(splitStr[i-1] === undefined)){ //start if resul
    theString += splitStr[i].toUpperCase();
  } //end if result
  else {
    theString += splitStr[i];
  }//end if statement
  
  
  }//end loop
  
  return(theString);

  }//end function capitalize
  






  



module.exports = capitalize;

// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')){
//     words.push(word[0].toUpperCase()+word.slice(1));
//   }

//   return words.join(' ');


// }




// My crazy solution
// function capitalize(str) {

//   let splitStr = str.split(' ');
//   let capitalStrArray = []


// for (let word of splitStr) {
//   let correctWord = [];

//   splitWord = word.split('');
//   correctWord.push(splitWord[0].toUpperCase()+splitWord.splice(1).join(''));
// capitalStrArray = capitalStrArray + ' ' +correctWord  
// }


// capitalStr = capitalStrArray.split(' ')
// capitalStr.splice(0,1);
// capitalizedString = capitalStr.join(' ');
// return(capitalizedString);



// }