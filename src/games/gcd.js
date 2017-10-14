import { consPlay, consGame, getRandomNum } from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';
const numberMax = 100;

const getGcd = (num1, num2) => {
  if (num1 < num2) {
    return getGcd(num2, num1);
  }
  if (num2 === 0) {
    return num1;
  }
  const r = num1 % num2;
  if (r === 0) {
    return num2;
  }
  return getGcd(num2, r);
};

const play = () => {
  const num1 = getRandomNum(numberMax);
  const num2 = getRandomNum(numberMax);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return consPlay(question, answer);
};

export default consGame(description, play);
