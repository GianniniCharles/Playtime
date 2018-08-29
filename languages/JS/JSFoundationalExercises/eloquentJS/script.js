// let a = `Your bones don't break, mine do.\nThat's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on ${100/2}.`

// console.log(a);

//Escaping characters \

//    \n makes a new line, \t indents, \" adds a quote as part of the string



// -------------------------------------------------------
//Eloquent JS Exercises Pg 37

//1.

function stairCase(){
  let stairs = '';
  for(let i = 0; i<7; i++){
    stairs+='#';
    console.log(stairs);
  }

}

function fizzBuzz(n){
  for(let i = 0; i<n; i++){

    if (i%3 === 0 && i%5 === 0){
      console.log('fizzBuzz');
    } else if (i%5 ===0){
      console.log('buzz');
    } else if (i % 3 === 0){
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}


stairCase();
fizzBuzz(16);
// Chessboard --------------------------------------

/*
Pseudo code:

1. create a string.
  -max length of the string (64 characters)
  -max length of line: 8 characters
  -max lines: 8 lines.

2. If line length is 8, insert a /n to create a new line.
    reset the line counter to keep track of line completion.
    use a loop to keep track of the total character count.


3. On each iteration, print a space or a # based on conditional: It should start off with a space, then check the character before it.

*/

//I DID IT! IT WORKS ON ANY EVEN NUMBER. It doesn't work well on an odd number, but what chessboard is 9x9?

function chessBoard(size) {
  let theChessBoard = '';
  let numOfIterations = (size**2);
  let line = 0;
  let insertToken = '';


  //prevents odd numbers from messing up the alignment of the squares.

  if (size % 2 !==0) {
    return "The length of the grid must be an even number"
  }

  console.log(`Your chessboard will have a length of ${size}, a width of ${size}, and an area of ${size**2} units.`)

//I learned the substring method to help me win here!

//Single Loop Solution: Guides Exactly What happens each iteration.
  for (let i = 0; i < (numOfIterations);i++){

//Line logic: Creates a new line when length reached, increments iteration, and resets the line limit.
    if (line === size) {
      theChessBoard += '\n'
      numOfIterations++;
      line = 0;
      continue;
    } //end conditional 1

//Ensures that the last character from the previous line is also used to start the current line. This logic gives the chessboard effect. 
    if (theChessBoard.substring((i - 1), i) === '\n') {
      theChessBoard+= theChessBoard.substring((i-2),(i-1));
      line++;
      continue;
    }


  //Starts off with the first character and watches for the second character.
    if (theChessBoard.substring((i - 1), i) === '#' || theChessBoard.substring((i - 1), i) === '') {
      theChessBoard+= ' ';
      line++;
      continue;
    }


//watches for the first character to insert the second one.
     if (theChessBoard.substring((i - 1), i) === ' ') {
      theChessBoard+= '#';
      line++;
      continue;

    }

    


  } //end for loop

console.log(theChessBoard);

} //end function chessBoard

//argument that enables a chessboard of any size.
chessBoard(8);