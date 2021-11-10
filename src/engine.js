import readlineSync from 'readline-sync';

const ATTEMPTS_COUNT = 3;

const runEngine = (game, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(question);

  let number;
  let rightAnswer;

  for (let i = 0; i < ATTEMPTS_COUNT; i += 1) {
    [number, rightAnswer] = game();

    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
