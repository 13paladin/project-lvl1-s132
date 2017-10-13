import readlineSync from 'readline-sync';

export const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const numberMax = 10000;
  const rounds = 3;
  for (let i = 1; i <= rounds; i += 1) {
    const number = Math.floor(Math.random() * numberMax);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${number} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
