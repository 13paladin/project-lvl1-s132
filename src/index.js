import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const rounds = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(car(game));
  console.log();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log();
  for (let i = 1; i <= rounds; i += 1) {
    const gamePlay = cdr(game)();
    const question = car(gamePlay);
    const correctAnswer = cdr(gamePlay);
    console.log(`Question: ${question} `);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
