import { consPlay, consGame, getRandomNum } from '../utils';

const description = 'What is the result of the expression?\n';
const numberMax = 99;
const signVariants = '+-*';

const play = () => {
  const num1 = getRandomNum(numberMax);
  const num2 = getRandomNum(numberMax);
  const sign = signVariants[getRandomNum(signVariants.length - 1)];
  const question = `${num1} ${sign} ${num2}`;
  let answer;
  switch (sign) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    // no default
  }
  return consPlay(question, answer);
};

export default consGame(description, play);
