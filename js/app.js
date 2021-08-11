'use strict';

console.log('test');

let introA = prompt('Before you get to know Valton, what is your name?'); 
 //console.log(introA);
 alert('Welcome to the quiz,' + introA + ' ,let us begin.')




let questionOneA = prompt('Do you feel like you REALLY know Valton?'); 
 //console.log(questionOneA);
let questionOne = questionOneA.toLowerCase();


if (questionOne === 'yes' || questionOne === 'y') {
  alert('Really? Well you can always know more.')
} else if (questionOne === 'no' || questionOne === 'n') {
  alert('Does anyone REALLY truly know the OTHER');
} else {
  alert('Fascinating.')
}

let questionTwoA = prompt('Did Valton go to college?'); 
 //console.log(questionTwoA);
let questionTwo = questionTwoA.toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y') {
  alert('That is right!!!!')
} else if (questionTwo === 'no' || questionTwo === 'n') {
  alert ('Daw, he did, a little.')
} else {
  alert('Fascinating.')
}

let questionThreeA = prompt('Does he want a motorcycle?'); 
 //console.log(questionThreeA);
let questionThree = questionThreeA.toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert('That is right!!!!')
} else if (questionThree === 'no' || questionThree ===  'n') {
  alert('Unfortunately, he really does.')
} else {
  alert('Fascinating.')
}

let questionFourA = prompt('Was Valton in the Army?'); 
 //console.log(questionFourA);
let questionFour = questionFourA.toLowerCase();

if (questionFour === 'yes' || questionFour === 'y') {
  alert('That is almost right!!!!')
} else if (questionFour === 'no' || questionFour === 'n') {
  alert('Correct! NAVY BABY.')
} else {
  alert('Fascinating.')
}

