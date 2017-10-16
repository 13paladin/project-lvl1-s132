import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'Balance the given number.';
const numberMax = 9999;

const balance = (num) => {
  const numArray = num.split('').map(char => Number(char));
  numArray.sort();
  while ((numArray[numArray.length - 1] - numArray[0]) > 1) {
    numArray[0] += 1;
    numArray[numArray.length - 1] -= 1;
    numArray.sort();
  }
  return numArray.join('');
};

const play = () => {
  const question = String(getRandomNum(numberMax));
  const answer = balance(question);
  return cons(question, answer);
};

export default () => startGame(description, play);
