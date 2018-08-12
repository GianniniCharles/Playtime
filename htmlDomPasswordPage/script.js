const theCorrectPassword = "hackable";
const passwordAttempt = prompt("What is the password?");
let coolThing = document.getElementById('theGoodStuff');
coolThing.style.display ="none";

passwordAttempt.confirm

console.log('page activated');

 function getTheGoodStuff(){


    if (passwordAttempt === theCorrectPassword){
      console.log('password is correct');
      coolThing.style.display="block";

    } else {
      console.log('that is the WRONG password');
    coolThing.style.display = "none";
    
    location.reload();
    

    }

  }







getTheGoodStuff();
