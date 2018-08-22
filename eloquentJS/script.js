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


