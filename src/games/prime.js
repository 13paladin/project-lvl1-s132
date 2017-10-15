import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const numberMax = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let div = 2; div <= num / 2; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const play = () => {
  const question = getRandomNum(numberMax);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(description, play);
