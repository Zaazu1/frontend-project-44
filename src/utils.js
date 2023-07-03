const getRandomInt = (number1, number2) => {
  const min = Math.ceil(number1);
  const max = Math.floor(number2);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomInt;
