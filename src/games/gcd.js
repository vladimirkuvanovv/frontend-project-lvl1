import runEngine from '../engine.js';

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const question = 'Find the greatest common divisor of given numbers.';

const getRandomInt = (min, max) => +Math.floor(Math.random() * (max - min)) + min;

const getGcd = (firstNumber, secondNumber) => {
  let firstNum = firstNumber;
  let secondNum = secondNumber;

  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }

  return firstNum + secondNum;
};

const runGcdGame = () => {
  const getDataForRound = () => {
    const firstNumber = getRandomInt(MIN_VALUE, MAX_VALUE);
    const secondNumber = getRandomInt(MIN_VALUE, MAX_VALUE);
    const gameExpression = `${firstNumber} ${secondNumber}`;
    const rightAnswer = String(getGcd(firstNumber, secondNumber));
    return [gameExpression, rightAnswer];
  };

  runEngine(getDataForRound, question);
};

export default runGcdGame;
