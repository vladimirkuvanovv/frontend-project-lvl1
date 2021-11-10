import runEngine from '../engine.js';

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const question = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const getOperationResult = (firstNumber, secondNumber, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      return null;
  }

  return result;
};

const getOperation = () => {
  const operations = ['-', '+', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);

  return operations[randomIndex];
};

const runCalcGame = () => {
  const getDataForRound = () => {
    const firstNumber = getRandomInt(MIN_VALUE, MAX_VALUE);
    const secondNumber = getRandomInt(MIN_VALUE, MAX_VALUE);
    const operation = getOperation();
    const gameExpression = `${firstNumber} ${operation} ${secondNumber}`;
    const rightAnswer = String(getOperationResult(firstNumber, secondNumber, operation));
    return [gameExpression, rightAnswer];
  };

  runEngine(getDataForRound, question);
};

export default runCalcGame;
