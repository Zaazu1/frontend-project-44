import playGame from '../index.js';
import getRandomInt from '../utils.js';

const playBrainProgression = () => {
  const description = 'What number is missing in the progression?';

  const getGameData = () => {
    const firstNumber = getRandomInt(1, 15);
    const progressionLength = getRandomInt(5, 10);
    const hiddenNumberPosition = getRandomInt(0, progressionLength - 1);
    const commonDifference = getRandomInt(1, 5);

    const numbers = [];
    for (let i = 1; i <= progressionLength; i += 1) {
      if (i - 1 === hiddenNumberPosition) {
        numbers.push('..');
      } else {
        numbers.push(firstNumber + (i - 1) * commonDifference);
      }
    }
    const question = `${numbers.join(' ')}`;
    const correctAnswer = firstNumber + numbers.indexOf('..') * commonDifference;
    return [question, String(correctAnswer)];
  };

  playGame(description, getGameData);
};

export default playBrainProgression;
