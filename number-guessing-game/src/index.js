import { ReadLine } from "./readlineInputClass.js";

function guessingGame(input, number, range) {
  const guess = input;
  const actualNumber = number;
  const numberRange = range;

  if (guess === "" || guess === null || isNaN(guess)) {
    return "please input a number";
  } else if (guess > numberRange.max) {
    return "guess is outside the guessing range (too high)";
  } else if (guess < numberRange.min) {
    return "guess is outside the guessing range (too low)";
  } else if (guess < actualNumber) {
    return "too low";
  } else if (guess > actualNumber) {
    return "too high";
  } else if (guess === actualNumber) {
    return "Correct!";
  } else {
    return "outside the logic";
  }
}

function generateRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function run() {
  const readline = new ReadLine();
  const range1 = await readline.getReadlineInput(
    "Please enter a start range: "
  );
  const range2 = await readline.getReadlineInput("Please enter a end range: ");

  //need to make sure that the range is a valid number
  const min = +range1;
  const max = +range2;

  const randomNumber = generateRandomNumberInRange(min, max);

  const guess = await readline.getReadlineInput(
    `Guess a number between ${min} and ${max}: `
  );

  let res;
  let userGuess = guess;

  while (res !== "Correct!") {
    res = guessingGame(+userGuess, randomNumber, { min, max });
    if (res === "Correct!") {
      console.log(res);
      readline.close();
      break;
    }
    userGuess = await readline.getReadlineInput(
      `Guess again between ${min} and ${max}: `
    );
  }
}

run();
