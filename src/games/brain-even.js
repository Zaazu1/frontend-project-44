import playGame from '../index.js';
import getRandomInt from '../utils.js';

const playBrainEven = () => {
  const isEven = (number) => number % 2 === 0;

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getGameData = () => {
    const randomNumber = getRandomInt(1, 1000);
    const question = `${randomNumber}`;

    let correctAnswer;

    switch (isEven(randomNumber)) {
      case true:
        correctAnswer = 'yes';
        break;
      case false:
        correctAnswer = 'no';
        break;
      default:
        correctAnswer = 'different';
    }
    return [question, correctAnswer];
  };

  playGame(description, getGameData);
};

export default playBrainEven;
