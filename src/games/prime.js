import runEngine from '../engine.js';

const MIN_VALUE = 0;
const MAX_VALUE = 50;

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = (min, max) => +Math.floor(Math.random() * (max - min)) + min;

const isPrime = (number) => {
    if (number === 2) {
        return true;
    }

    if (number < 2 || number % 2 === 0) {
        return false;
    }

    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i += 1) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
};

const runPrimeGame = () => {
    const getDataForRound = () => {
        const number = getRandomNumber(MIN_VALUE, MAX_VALUE);
        const rightAnswer = isPrime(number) ? 'yes' : 'no';
        return [number, rightAnswer];
    };

    runEngine(getDataForRound, question);
};

export default runPrimeGame;