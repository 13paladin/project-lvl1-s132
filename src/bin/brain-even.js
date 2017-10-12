import { greeting, brainEven } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

const userName = greeting();
const rounds = 3;
brainEven(userName, rounds);
