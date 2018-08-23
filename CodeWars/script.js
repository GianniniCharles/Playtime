//CodeWars:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// a being 1, b being 2, etc.

// As an example:

// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.


function alphabetPosition(text) {
  let lowercaseStringArray = text.replace(/[^\w]/g, '').toLowerCase().split('');
  let numberizedStringArray = [];
  
  for(let i = 0; i< lowercaseStringArray.length; i++) {
  
  
  switch (lowercaseStringArray[i]) {
  case 'a':
  numberizedStringArray.push('1');
  break;
  
  case 'b':
  numberizedStringArray.push('2');
  break;
  
  case 'c':
  numberizedStringArray.push('3');
  break;
  
  
  case 'd':
  numberizedStringArray.push('4');
  break;
  
  
  case 'e':
  numberizedStringArray.push('5');
  break;
  
  
  case 'f':
  numberizedStringArray.push('6');
  break;
  
  
  case 'g':
  numberizedStringArray.push('7');
  break;
  
  case 'h':
  numberizedStringArray.push('8');
  break;
  
  case 'i':
  numberizedStringArray.push('9');
  break;
  
  case 'j':
  numberizedStringArray.push('10');
  break;
  
  case 'k':
  numberizedStringArray.push('11');
  break;
  
  case 'l':
  numberizedStringArray.push('12');
  break;
  
  case 'm':
  numberizedStringArray.push('13');
  break;
  
  case 'n':
  numberizedStringArray.push('14');
  break;
  
  case 'o':
  numberizedStringArray.push('15');
  break;
  
  case 'p':
  numberizedStringArray.push('16');
  break;
  
  case 'q':
  numberizedStringArray.push('17');
  break;
  
  case 'r':
  numberizedStringArray.push('18');
  break;
  
  case 's':
  numberizedStringArray.push('19');
  break;
  
  case 't':
  numberizedStringArray.push('20');
  break;
  
  case 'u':
  numberizedStringArray.push('21');
  break;
  
  case 'v':
  numberizedStringArray.push('22');
  break;
  
  case 'w':
  numberizedStringArray.push('23');
  break;
  
  case 'x':
  numberizedStringArray.push('24');
  break;
  
  case 'y':
  numberizedStringArray.push('25');
  break;
  
  case 'z':
  numberizedStringArray.push('26');
  break;
  
  } //end Switch Statement
  
  
  
  
  
  } //end for loop.
  
  let numberizedString = numberizedStringArray.join(' ');
  return numberizedString;
  
  
  
  
  
    return text;
  }