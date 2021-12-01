import runEngine from '../engine.js';

const MIN_VALUE = 0;
const MAX_VALUE = 10;
const MAX_TOP_NUMBER = 100;
const MAX_TOP_STEP_VALUE = 5;
const PROGRESSION_LENGTH = 10;

const question = 'What number is missing in the progression?';

const getRandomNumber = (min, max) => +Math.floor(Math.random() * (max - min)) + min;

const getProgression = (firstNumber, topNumber, step) => {
  const progression = [];
  for (let i = firstNumber; i < topNumber && progression.length <= PROGRESSION_LENGTH; i += step) {
    progression.push(i);
  }

  return progression;
};

const runProgressionGame = () => {
  const getDataForRound = () => {
    const firstNumber = getRandomNumber(MIN_VALUE, MAX_VALUE);
    const step = getRandomNumber(MIN_VALUE, MAX_TOP_STEP_VALUE);
    const randomIndexForReplace = getRandomNumber(MIN_VALUE, MAX_VALUE);
    const progression = getProgression(firstNumber, MAX_TOP_NUMBER, step);
    const rightAnswer = String(progression[randomIndexForReplace]);
    progression[randomIndexForReplace] = '..';
    const gameExpression = progression.join(' ');
    return [gameExpression, rightAnswer];
  };

  runEngine(getDataForRound, question);
};

export default runProgressionGame;
