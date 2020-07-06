var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var mainContent = document.querySelector("#main-content");
var startButton = document.querySelector("#start");
var submitButton = document.querySelector("button.submitButton");
var userScore = document.getElementById("user-score");
var userNameInput;
var Index = 0;
var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
// WHEN I click the start button
function startTimer() {
    document.getElementById("answer-buttons").style.display = "block"; // turn on the display
    document.getElementById("start").style.display = "none"; // turn off the display 
    var minutes = 10;
    totalSeconds = minutes * 60;
    secondsElapsed = 0;
    interval = setInterval(runClockCb, 1000);
}
// THEN a timer starts and I am presented with a question
function runClockCb() {
    secondsElapsed++;
    minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
    secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;
    // console.log({totalSeconds, secondsElapsed});

    // this means the timer will stop at zero.
    if (totalSeconds <= secondsElapsed) {
        (clearInterval(interval));
    }

}
startButton.addEventListener("click", startTimer);
// WHEN all questions are answered or the timer reaches 0


// WHEN I answer a question
// THEN I am presented with another question
var questionList = [
    {
        "question": "How Many inches are in a foot ",
        "a": "16.",
        "b": "12.",
        "c": "345.",
        "d": "None of the above.",
        "correct": "b",
        "userAnswer": null
    },
    {
        "question": "what is 2+2?",
        "a": "4.",
        "b": "0.",
        "c": "i dont know.",
        "d": "undefined.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "how many days are in a year?",
        "a": "365.",
        "b": "478.",
        "c": "12.",
        "d": "389.",
        "correct": "a",
        "userAnswer": null

    },
    {
        "question": "who is the first president of the usa?",
        "a": "george lopez.",
        "b": "john adams.",
        "c": "George washington.",
        "d": "freddie mercury",
        "correct": "c",
        "userAnswer": null
        
    },
    {
        "question": "How many states make up the usa?",
        "a": "52.",
        "b": "50.",
        "c": "124.",
        "d": "24.",
        "correct": "b",
        "userAnswer": null

    },
    {
        "question": "How many feet are in a yard ?",
        "a": "7 ft.",
        "b": "1ft.",
        "c": "13ft.",
        "d": "3ft.",
        "correct": "d",
        "userAnswer": null
    },
    {
        "question": "how many keys are on a classic piano?",
        "a": "88.",
        "b": "144.",
        "c": "52.",
        "d": "68.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "What is the capital of Florida?",
        "a": "miami.",
        "b": "davie.",
        "c": "tallahasse.",
        "d": "tampa.",
        "correct": "c",
        "userAnswer": null
    },
    {
        "question": "how fast can a chettah run ?",
        "a": "58mph.",
        "b": "100mph.",
        "c": "32mph.",
        "d": "68mph.",
        "correct": "a",
        "userAnswer": null
    },
    {
        "question": "who is the coolest team inn the AFC east?",
        "a": "jets.",
        "b": "bills.",
        "c": "dolphins",
        "d": "patriots",
        "correct": "a",
        "userAnswer": null
    }
];

var questionTag = document.body.querySelector("#question");
var answerTagA = document.body.querySelector("#answer-a");
var answerTagB = document.body.querySelector("#answer-b");
var answerTagC = document.body.querySelector("#answer-c");
var answerTagD = document.body.querySelector("#answer-d");

var buttonA = document.body.querySelector("#button-a");
var buttonB = document.body.querySelector("#button-b");
var buttonC = document.body.querySelector("#button-c");
var buttonD = document.body.querySelector("#button-d");

var score = document.body.querySelector("#score");

var questionIndex = 0;

// This function handles the button click
function buttonHandler(event) {
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    // console.log("buttonHandler");
    // console.log(button);
    // console.log(userAnswer);
    // console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
        score.textContent = "You got it correct";
        questionIndex++;
        // endGame condition
        if (questionIndex >= questionList.length) {
            console.log("calculate score and stop timer");
            clearInterval(interval);
            calculateScore();
        }
        else {
            setTimeout(function () {

                initializeQuestion();
                score.textContent = "";

            }, 5000);
        }
    }
    else {
        score.textContent = "You got it wrong";
        questionIndex++;
        // endGame condition
        if (questionIndex >= questionList.length) {
            console.log("calculate score and stop timer");
            clearInterval(interval);
            calculateScore();
        }
        else {

            setTimeout(function () {
                initializeQuestion();
                score.textContent = "";
            }, 5000);
        }
    }
}
// // THEN the game is over
// WHEN the game is over

buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

function calculateScore() {
    document.querySelector("ul").style.display = 'none';
    document.querySelector("#question").style.display = 'none';
    document.querySelector("#score").textContent = "You have a score of 1 of 10";
}   userScore = userScore + 1;

function initializeQuestion() {
    console.log(questionList[questionIndex]);
    var wholeObj = questionList[questionIndex];
    var question = wholeObj.question;
    console.log(question);
    questionTag.textContent = question;
    questionTag.setAttribute("data-question", questionIndex);

    answerTagA.textContent = wholeObj.a;
    answerTagB.textContent = wholeObj.b;
    answerTagC.textContent = wholeObj.c;
    answerTagD.textContent = wholeObj.d;
    buttonA.setAttribute("data-question", questionIndex);
    buttonB.setAttribute("data-question", questionIndex);
    buttonC.setAttribute("data-question", questionIndex);
    buttonD.setAttribute("data-question", questionIndex);
}
initializeQuestion();


// THEN I am presented with another question