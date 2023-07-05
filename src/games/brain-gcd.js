import playGame from '../index.js';
import getRandomInt from '../utils.js';

const playBrainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const getGameData = () => {
    const randomNumber1 = getRandomInt(1, 50);
    const randomNumber2 = getRandomInt(1, 50);
    const question = `${randomNumber1} ${randomNumber2}`;

    const minNumber = randomNumber1 >= randomNumber2 ? randomNumber2 : randomNumber1;
    let gcd = randomNumber1 >= randomNumber2 ? randomNumber2 : randomNumber1;
    let correctAnswer;
    const isRemainder = (number) => number % gcd === 0;
    for (let i = minNumber; i >= 1; i -= 1) {
      if (isRemainder(randomNumber1) && isRemainder(randomNumber2)) {
        correctAnswer = gcd;
        break;
      } else {
        gcd -= 1;
      }
    }
    return [question, String(correctAnswer)];
  };

  playGame(description, getGameData);
};

export default playBrainGcd;
