import playGame from '../index.js';
import getRandomInt from '../utils.js';

const playBrainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getGameData = () => {
    const randomNumber = getRandomInt(1, 100);
    const question = randomNumber;
    let correctAnswer;

    const divisors = [];

    for (let i = 1; i <= randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        divisors.push(i);
      }
    }
    const [firstDivisor, secondDivisor] = divisors;
    if (randomNumber !== 1 && firstDivisor === 1 && secondDivisor === randomNumber) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };
  playGame(description, getGameData);
};

export default playBrainPrime;
