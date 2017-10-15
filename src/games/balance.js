import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'Balance the given number.';
const numberMax = 9999;

const intToArray = (int) => {
  const intStr = String(int);
  const intArray = [];
  for (let i = 0; i < intStr.length; i += 1) {
    intArray[i] = Number(intStr[i]);
  }
  return intArray;
};
const arrayToStr = (array) => {
  let arrayStr = '';
  for (let i = 0; i < array.length; i += 1) {
    arrayStr += String(array[i]);
  }
  return arrayStr;
};
const balance = (num) => {
  const sortedNum = num.sort();
  const minDigit = sortedNum[0];
  const maxDigit = sortedNum[num.length - 1];
  if (maxDigit - minDigit > 1) {
    sortedNum[0] += 1;
    sortedNum[num.length - 1] -= 1;
    return balance(sortedNum);
  }
  return sortedNum;
};

const play = () => {
  const question = getRandomNum(numberMax);
  const num = balance(intToArray(question));
  const answer = arrayToStr(num);
  return cons(question, answer);
};

export default () => startGame(cons(description, play));
