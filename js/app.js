'use strict';

console.log('test');

let correctAns = 0





let introA = prompt('Before you get to know Valton, what is your name?'); 
 //console.log(introA);
 alert('Welcome to the quiz,' + introA + ' ,let us begin.')



function knowV(){
  let questionOneA = prompt('Do you feel like you REALLY know Valton?'); 
  //console.log(questionOneA);
  let questionOne = questionOneA.toLowerCase();


  if (questionOne === 'yes' || questionOne === 'y') {
    correctAns++;
    alert('Really? Well you can always know more.')
  } else if (questionOne === 'no' || questionOne === 'n') {
    alert('Does anyone REALLY truly know the OTHER');
  } else {
    alert('Fascinating.')
  }
}
knowV()

function gradS() {
  let questionTwoA = prompt('Did Valton go to college?'); 
  //console.log(questionTwoA);
  let questionTwo = questionTwoA.toLowerCase();

  if (questionTwo === 'yes' || questionTwo === 'y') {
    correctAns++
    alert('That is right!!!!')
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert ('Daw, he did, a little.')
  } else {
    alert('Fascinating.')
  }
}
gradS()

function motoY() {
  let questionThreeA = prompt('Does he want a motorcycle?'); 
  //console.log(questionThreeA);
  let questionThree = questionThreeA.toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    correctAns++
    alert('That is right!!!!')
  } else if (questionThree === 'no' || questionThree ===  'n') {
    alert('Unfortunately, he really does.')
  } else {
    alert('Fascinating.')
  }
}
motoY()

function doesHeHike() {
  let questionFourA = prompt('Does he hike enough?'); 
  //console.log(questionFourA);
  let questionFour = questionFourA.toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    alert('That is incorrect!!!!')
  } else if (questionFour === 'no' || questionFour ===  'n') {
    correctAns++
    alert('Unfortunately, he does not.')
  } else {
    alert('Fascinating.')
  }
}
doesHeHike()

function mustacheMan() {
  let questionFiveA = prompt('Does he have a mustache in his picture?'); 
  //console.log(questionFiveA);
  let questionFive = questionFiveA.toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    alert('Nooo, sadly!!!!')
  } else if (questionFive === 'no' || questionFive === 'n') {
    correctAns++
    alert('That is correct.')
  } else {
    alert('Fascinating.')
  }
}
mustacheMan()

function numberGame() {
  let numGuess;
  let goodGuess = 4;
  let attempts = 0;
  let intNumGuess;

  while (intNumGuess !== goodGuess && attempts < 4) {
    numGuess = prompt('Try to pick a number 1 to 10. You have ' + (4-attempts) + ' left.');
    intNumGuess = parseInt(numGuess)
    attempts++
    if (intNumGuess !== goodGuess) {
      if (intNumGuess > goodGuess) {
        alert('Too high! Try again.')
      }else {
        alert('Too low! Try again')
      }
    }
  }
  if (intNumGuess === goodGuess) {
    correctAns++
    alert('Noice!');
  } else if (intNumGuess !== goodGuess) {
    alert('Better luck next time...it was ' + goodGuess + '!')
  }
}
numberGame()

function listGame() {
  let tries = 0;
  let favHike = false;
  let bestHike = ['Mount Jupiter', 'Gold Mountain', 'Green Mountain', 'Tubal Cain Mine', 'Upper Snohomish', 'Bridal Veil Falls', 'Hurricane Ridge', 'The Hoh Rainforest', 'Table Mountain', 'The Brothers'];

  while (tries < 5 && favHike === false) {
    let hike = prompt('Can you remember one of my favorite hikes?');
    for (let i = 0; i < bestHike.length; i++){
      let currentHike = bestHike[i];
      if(hike === currentHike){
        correctAns++
        alert('Oh my god I LOVE that hike!');
        favHike = true;
      }
    }
    tries++;
    if(favHike === false){
      alert('Never been there. Lets go?');
    }
  }
}
listGame()







let exitMSG = alert('Thanks for playing,' + introA + ' you got ' + correctAns + ' questions correct!')

