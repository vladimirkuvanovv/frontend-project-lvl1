import runEngine from '../engine.js';

const MIN_VALUE = 0;
const MAX_VALUE = 100;
const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const runEvenGame = () => {
  const getDataForRound = () => {
    const number = getRandomInt(MIN_VALUE, MAX_VALUE);

    return [number, isEven(number) ? 'yes' : 'no'];
  };

  runEngine(getDataForRound, question);
};

export default runEvenGame;
