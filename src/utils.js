import { cons, car, cdr } from 'hexlet-pairs';

export const consPlay = (question, answer) => cons(question, answer);
export const getQuestion = play => car(play);
export const getAnswer = play => cdr(play);
export const consGame = (descr, play) => cons(descr, play);
export const getDescr = game => car(game);
export const getPlay = game => cdr(game);

export const getRandomNum = numberMax => Math.round(Math.random() * numberMax);
