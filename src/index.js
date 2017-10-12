import readlineSync from 'readline-sync';

export const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const brainEven = (userName, rounds) => {
  const numberMax = 10000;
  for (let i = 1; i <= rounds; i += 1) {
    const number = Math.floor(Math.random() * numberMax);
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    if ((number % 2 === 0 && userAnswer === 'yes') ||
        (number % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    if (i === rounds) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
