import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const brainEvenPlay = () => {
  const numberMax = 100;
  const number = Math.round(Math.random() * numberMax);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number} `);
  console.log(`Your answer: ${userAnswer}`);
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const brainCalcPlay = () => {
  const numberMax = 99;
  const signVariants = '+-*';
  const num1 = Math.round(Math.random() * numberMax);
  const num2 = Math.round(Math.random() * numberMax);
  const sign = signVariants[Math.round(Math.random() * (signVariants.length - 1))];
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
  }
  const userAnswer = readlineSync.question(`Question: ${num1} ${sign} ${num2} `);
  console.log(`Your answer: ${userAnswer}`);
  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const consGame = cons;
export const brainEven = consGame('Answer "yes" if number even otherwise answer "no".\n', brainEvenPlay);
export const brainCalc = consGame('What is the result of the expression?\n', brainCalcPlay);

export const brainGames = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(car(game));
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    if (!cdr(game)()) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
