import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'Balance the given number.';
const numberMax = 9999;

const balance = (question) => {
  const sortedNum = question.split('').map(char => Number(char));
  sortedNum.sort();
  while ((sortedNum[sortedNum.length - 1] - sortedNum[0]) > 1) {
    sortedNum[0] += 1;
    sortedNum[sortedNum.length - 1] -= 1;
    sortedNum.sort();
  }
  return sortedNum.join('');
};

const play = () => {
  const question = String(getRandomNum(numberMax));
  const answer = balance(question);
  return cons(question, answer);
};

export default () => startGame(description, play);
