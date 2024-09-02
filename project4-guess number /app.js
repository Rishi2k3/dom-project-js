const randomnumber=parseInt(Math.random()*10+1);// math. random gives me a random decimal number .. *10 will give me a decimal numer from 0 to 9 --> +1 will insure its not a 0 ans parse int will convert it into a integer number 

const submit= document.querySelector('#subt');
const userinput= document.querySelector('#guessField');
const guessslot= document.querySelector('#guesses');
const remaining= document.querySelector('#lastResult');
const lowOrHi= document.querySelector('#lowOrHi');
const startOver= document.querySelector('.resultParas');

const p= document.createElement('p');

let prevGuess=[]
let numGuess=1;

let playGame= true;

function validateGuess(guess)
{
    
}

function checkGuess(guess)
{

}

function displayMessage(guess)
{
    
}
