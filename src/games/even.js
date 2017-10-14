import readlineSync from 'readline-sync';
import { consGame } from '..';

const brainEvenPlay = () => {
  const numberMax = 100;
  const question = Math.round(Math.random() * numberMax);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${question} `);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

export default consGame('Answer "yes" if number even otherwise answer "no".\n', brainEvenPlay);
