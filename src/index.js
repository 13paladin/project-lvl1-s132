import readlineSync from 'readline-sync';
import { getDescr, getPlay, getQuestion, getAnswer } from './utils';

const rounds = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(getDescr(game));
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 1; i <= rounds; i += 1) {
    const gamePlay = getPlay(game)();
    const question = getQuestion(gamePlay);
    const correctAnswer = String(getAnswer(gamePlay));
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
