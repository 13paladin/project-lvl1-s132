import { cons } from 'hexlet-pairs';
import getRandomNum from '../utils';
import startGame from '..';

const description = 'What number is missing in this progression?';
const numberMax = 10;
const progressionLength = 10;

const play = () => {
  const startNum = getRandomNum(numberMax);
  const delta = getRandomNum(numberMax + 1); // + 1 to exclude delta === 0
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + (delta * i));
  }
  const answerIndex = getRandomNum(progressionLength - 1); // - 1 to exclude index === 10
  const answer = String(progression[answerIndex]);
  progression[answerIndex] = '..';
  const question = progression.join(' ');
  return cons(question, answer);
};

export default () => startGame(description, play);
