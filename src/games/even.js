import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const numberMax = 100;

const play = () => {
  const question = getRandomNum(numberMax);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => startGame(description, play);
