import readlineSync from 'readline-sync';
import { consGame } from '..';

const brainGcdPlay = () => {
  const numberMax = 100;
  const question1 = Math.round(Math.random() * numberMax);
  const question2 = Math.round(Math.random() * numberMax);
  let correctAnswer;
  for (let i = 0; i <= (question1 > question2 ? question1 : question2); i += 1) {
    if ((question1 % i) + (question2 % i) === 0) {
      correctAnswer = i;
    }
  }
  const userAnswer = readlineSync.question(`Question: ${question1} ${question2} `);
  console.log(`Your answer: ${userAnswer}`);
  if (Number(userAnswer) === correctAnswer) {
    return true;
  }
  return false;
};

export default consGame('Find the greatest common divisor of given numbers.\n', brainGcdPlay);
