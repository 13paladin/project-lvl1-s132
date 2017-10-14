import readlineSync from 'readline-sync';
import { consGame } from '..';

const brainCalcPlay = () => {
  const numberMax = 99;
  const signVariants = '+-*';
  const question1 = Math.round(Math.random() * numberMax);
  const question2 = Math.round(Math.random() * numberMax);
  const sign = signVariants[Math.round(Math.random() * (signVariants.length - 1))];
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = question1 + question2;
      break;
    case '-':
      correctAnswer = question1 - question2;
      break;
    case '*':
      correctAnswer = question1 * question2;
      break;
    default:
  }
  const userAnswer = readlineSync.question(`Question: ${question1} ${sign} ${question2} `);
  console.log(`Your answer: ${userAnswer}`);
  if (Number(userAnswer) === correctAnswer) {
    return true;
  }
  return false;
};

export default consGame('What is the result of the expression?\n', brainCalcPlay);
