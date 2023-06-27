#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomInt = (number1, number2) => {
  const min = Math.ceil(number1);
  const max = Math.floor(number2);
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 !== 0;
const yesIsWrongAnswer = "'yes' is wrong answer ;(. Correct answer was 'no'.";
const noIsWrongAnswer = "'no' is wrong answer ;(. Correct answer was 'yes'.";

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
const tryAgainString = `Let's try again, ${userName}!`;
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNumber = getRandomInt(1, 1000);
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === 'yes' && isOdd(randomNumber)) {
    console.log(yesIsWrongAnswer);
    console.log(tryAgainString);
    break;
  } else if (userAnswer === 'no' && isEven(randomNumber)) {
    console.log(noIsWrongAnswer);
    console.log(tryAgainString);
    break;
  } else if (userAnswer !== 'yes' && userAnswer !== 'no') {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was different. `);
    console.log(tryAgainString);
    break;
  }
  console.log('Correct!');
  if (i === 2) {
    console.log(`Congratulations, ${userName}!`);
  }
}
