import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const consGame = (descr, play) => cons(descr, play);
const descrGame = game => car(game);
const playGame = game => cdr(game);

export default (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(descrGame(game));
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const rounds = 3;
  for (let i = 1; i <= rounds; i += 1) {
    if (playGame(game)()) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
