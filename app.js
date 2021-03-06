var readlineSync = require("readline-sync");

var userName = readlineSync.question("Hello!! What's your name? ");

console.log(
  "\n Hey " +
    userName +
    ", Lets play a game to check how much you know about Yash Kore \n"
);

var score = 0;

var highscoresArr = [
  {
    name: "Kore Padma",
    scored: "5",
  },
  {
    name: "Meghana Kore",
    scored: "4",
  },
];

var quesArr = [
  {
    question:
      "What is Yash's full name ? \n a: Yashwanth Kumar \n b: Kore Yashwanth Ravikumar \n c: Kore Yashwanth \n Enter the option here: ",
    answer: "c",
  },

  {
    question:
      "What is the favourite color of Yash? \n a: Red \n b: Blue \n c: White \n d: Black \n Enter the option here: ",
    answer: "a",
  },

  {
    question:
      "Which kind of movies Yash like most? \n a: Action \n b: Comedy \n c: Horror \n d: Sci-Fi \n Enter the option here: ",
    answer: "b",
  },

  {
    question:
      "How many sibilings Yash had? \n a: 1 \n b: 2 \n c: 3 \n d: 4 \n Enter the option here: ",
    answer: "a",
  },

  {
    question:
      "Native place of Yash? \n a: Banglore \n b: Warangal \n c: Karimnagar \n d: Hyderabad \n Enter the option here: ",
    answer: "d",
  },
];

// console.log(quesArr)

function game(questionsOfGame, answersOfGame) {
  var userAnswer = readlineSync.question(questionsOfGame);

  if (userAnswer.toUpperCase() == answersOfGame.toUpperCase()) {
    // console.log("great "+ answersOfGame)
    score++;
    console.log("\n Great!! you are right... \n");
  } else {
    console.log(" \n Oops!! you are wrong!! \n");
  }
}

for (i = 0; i < quesArr.length; i++) {
  game(quesArr[i].question, quesArr[i].answer);
}

if (score == 5) {
  console.log(
    userName +
      " Congrats!! you made an HighScore: " +
      score +
      "\n Take a screenshot and send it for Yash to view your name in High score list.."
  );
} else {
  console.log(
    userName +
      " You have scored " +
      score +
      " \nTry once again for highscore..."
  );
}

console.log(
  " \n High Scores: \n" +
    highscoresArr[0].name +
    " Scored: " +
    highscoresArr[0].scored +
    "\n" +
    highscoresArr[1].name +
    " Scored: " +
    highscoresArr[1].scored
);