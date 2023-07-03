import playGame from '../index.js';
import getRandomInt from '../utils.js';

const playBrainCalc = () => {
  const operators = ['+', '-', '*'];

  const description = 'What is the result of the expression?';

  const getGameData = () => {
    const randomNumber1 = getRandomInt(1, 10);
    const randomNumber2 = getRandomInt(1, 10);
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let correctAnswer;

    switch (randomOperator) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
        correctAnswer = 0;
    }
    return [question, String(correctAnswer)];
  };

  playGame(description, getGameData);
};

export default playBrainCalc;
