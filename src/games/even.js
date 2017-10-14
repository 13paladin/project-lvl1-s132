import { consPlay, consGame, getRandomNum } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';
const numberMax = 100;

const play = () => {
  const question = getRandomNum(numberMax);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return consPlay(question, answer);
};

export default consGame(description, play);
