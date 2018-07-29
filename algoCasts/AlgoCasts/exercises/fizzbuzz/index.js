// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//most restrictive condition first so that loop doesn't skip it once it finds another true condition
function fizzBuzz(n) {
  for(let i = 1; i <= n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      continue;
    } else if (i % 5 === 0) {
      console.log('buzz');
      continue;
    } else if (i % 3 === 0) {
      console.log('fizz');
      continue;
    }
    console.log(i)

  }


  }

module.exports = fizzBuzz;
