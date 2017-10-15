import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';
const numberMax = 100;

const getGcd = (num1, num2) => {
  if (num1 < num2) {
    return getGcd(num2, num1);
  }
  if (num2 === 0) {
    return num1;
  }
  const remainder = num1 % num2;
  if (remainder === 0) {
    return num2;
  }
  return getGcd(num2, remainder);
};

const play = () => {
  const num1 = getRandomNum(numberMax);
  const num2 = getRandomNum(numberMax);
  const question = `${num1} ${num2}`;
  const answer = String(getGcd(num1, num2));
  return cons(question, answer);
};

export default () => startGame(description, play);
