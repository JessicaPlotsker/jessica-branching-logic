import { ReadLine } from "./readlineInputClass.js";

function generateRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function magic8ball(question) {
  //validation
  if (!question.includes("?")) {
    return "Please ask a question (include a ? at end of statement)";
  } else if (question === "" || question === " " || question === null) {
    return "Please enter a question";
  } else if (question.length < 5) {
    return "Please enter a question that is at least 5 characters long";
  } else if (
    !question.toUpperCase().includes("WILL") ||
    !question.toUpperCase().startsWith("WILL")
  ) {
    return "Please enter a question the Magic 8 ball can answer";
  } else {
    //specific cases
    let specificResponse;
    if (question.includes("money")) {
      specificResponse = "No";
    } else if (
      question.includes("boyfriend") ||
      question.includes("date") ||
      question.includes("girlfriend")
    ) {
      specificResponse = "It is certain";
    } else if (question.includes("marriage")) {
      specificResponse = "Absolutely";
    } else if (question.includes("peace")) {
      specificResponse = "Ask again later";
    }

    if (specificResponse) return specificResponse;

    const options = [
      "Yes",
      "No",
      "Maybe",
      "Ask again later",
      "Definitely",
      "Absolutely not",
      "I don't know",
      "It is certain",
      "Very doubtful",
      "Outlook not so good",
    ];

    const responseChoiceNumber = generateRandomNumberInRange(1, options.length);

    const response = options[responseChoiceNumber];

    return response;
  }
}

async function run() {
  const readline = new ReadLine();
  const question = await readline.getReadlineInput(
    "Please ask the magic 8 ball a question: "
  );
  const response = magic8ball(question);
  console.log(response);
  return response;
}

run();
