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
    console.log({totalSeconds, secondsElapsed});
    
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

function buttonHandler(event) {
    var button = event.target;
    var userAnswer = button.getAttribute("data-answer");
    var questionId = parseInt(button.getAttribute("data-question"));
    console.log(button);
    console.log(userAnswer);
    console.log(questionId);
    questionList[questionId]["userAnswer"] = userAnswer;

    if (questionList[questionId]["userAnswer"] === questionList[questionId]["correct"]) {
        score.textContent = "You got it correct";
        setTimeout(function () {
            questionIndex++;
            initializeQuestion();
            score.textContent = "";
        }, 5000);
    }
    else {
        score.textContent = "You got it wrong";
        setTimeout(function () {
            questionIndex++;
            initializeQuestion();
            score.textContent = "";
        }, 5000);
    }
}
// // THEN the game is over
// WHEN the game is over

buttonA.addEventListener("click", buttonHandler);
buttonB.addEventListener("click", buttonHandler);
buttonC.addEventListener("click", buttonHandler);
buttonD.addEventListener("click", buttonHandler);

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