import readlineSync from 'readline-sync';
import { consGame } from '..';

const brainBalancePlay = () => {
  const numberMax = 9999;
  const question = Math.round(Math.random() * numberMax);
  const userAnswer = readlineSync.question(`Question: ${question} `);
  console.log(`Your answer: ${userAnswer}`);
  let balancingNum = [];
  let minDigit = 9;
  let maxDigit = 0;
  let minDigitIndex;
  let maxDigitIndex;

  // convert integer to array with digits
  for (let i = String(question).length - 1; i >= 0; i -= 1) {
    balancingNum[i] = Number(String(question)[i]);
  }

  // balance array
  while (Math.abs(maxDigit - minDigit) > 1) {
    minDigit = 9;
    maxDigit = 0;
    for (let i = 0; i < balancingNum.length; i += 1) {
      if (balancingNum[i] < minDigit) {
        minDigit = balancingNum[i];
        minDigitIndex = i;
      }
      if (balancingNum[i] > maxDigit) {
        maxDigit = balancingNum[i];
        maxDigitIndex = i;
      }
    }
    if (Math.abs(maxDigit - minDigit) > 1) {
      balancingNum[minDigitIndex] += 1;
      balancingNum[maxDigitIndex] -= 1;
    }
  }
  balancingNum = balancingNum.sort();

  // convert array to integer
  let correctAnswer = '';
  for (let i = 0; i < balancingNum.length; i += 1) {
    correctAnswer += String(balancingNum[i]);
  }
  console.log(correctAnswer);
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

export default consGame('Balance the given number.\n', brainBalancePlay);
