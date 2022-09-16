/* click the Start button to start the game  - start button wouldnt work*/
const answerBtn = document.querySelector(".btn");
const startBtn = document.getElementById("startBtn");
const startBox = document.getElementById("startBox");
const questionQuiz = document.getElementById("questionBox");
const gameOver = document.getElementById("gameOver");
const choiceContainer = document.querySelector(".choice-container");
const questionEl = document.getElementById("question");

// Timer Variables
const timerClock = document.querySelector(".timer-count");
let time = 60;
let timerInterval;

let questionIndex = 0;
const questions = [
    {
        question: 'Commonly used data types do NOT include:', 
        choices: ['strings 🪢', 'booleans ✅❌', 'alerts 🚨', 'numbers 🔢'],
        answer: 'alerts 🚨'
    },

    {
        question: 'The condition in an if/ else statement is enclosed with _________.', 
        choices: ['quotes " " ', 'curly brackets { } ', 'parenthesis ( ) ', 'square brackets [ ] '],
        answer: 'curly brackets { } '
    },
// //     
// //     newQuestion('Arrays in JavaScript can be used to store:', ['numbers and strings 🔢  🪢', 'other arrays  𐑼 🧮', 'booleans  ✅❌', 'all of the above 👆🏻'], 'all of the above'),
// //     newQuestion('String values must be enclosed within ____________ when being assigned to variables.', ['commas , ', 'curly brackets { } ', 'quotes " " ', 'parenthesis ( ) '], 'quotes'),
// //     //newQuestion('A very useful tool used during developments and debugging for printing content to the debugger is ', ['JavaScript  💻 ', 'terminal/ bash  🗃 ', 'for loops  🔁 ', 'console log 🖥 '], 'console log')]
]
   /* bracket notation and dot notation for arrays and i for iterators  */
function startQuiz(){
    startBox.style.display = "none";
    questionQuiz.style.display = "block";
    timerInterval = setInterval(clock, 1000);
    populateQuestion;
}

function populateQuestion(){
questionEl.textContent = questions[questionIndex].question;
questions[questionIndex].choices.forEach(function(choice) {
    // 1. create element
    let buttonEl = document.createElement('button');
    // 2 give it content
    buttonEl.textContent = choice;
    // add any attributes
    buttonEl.setAttribute('class', 'choice-btn')
    buttonEl.addEventListener('click', checkAnswer)
    //3. Append to the page
    choiceContainer.append(buttonEl);
})

}

const checkAnswer = function() {
    //check for the correct answer
        // use this.innerText
    //if wrong, deduct time

    //increment question index by 1 (++)

    // if questiosn left, populate next question

    //if out of questions call quiz complete
}

const clock = function(){
    time--
    timerClock.textContent=time
    if (time<=0) {
        quizComplete()
    }
}   

const quizComplete = function (){
    clearInterval(timerInterval)
}

// var answerButtons = document.addEventListener("click", function() {
//     document.getElementById("btn");
//     this.onclick = showQuestion;
//     console.log("answer logged");
// });

// function showQuestion() {
//     var questTwo = document.createElement("div");
//     questTwo.innerHTML = "'Commonly used data types do NOT include:, ['strings 🪢', 'booleans ✅❌', 'alerts 🚨', 'numbers 🔢'], 'alerts')";
//     document.body.appendChild(questTwo);

//     var textTwo = document.createElement('h3');
//     textTwo.innerHTML = "Commonly used data types do NOT include:"

//     var answerA = document.createElement('p');
//     answerA.innerHTML = "strings 🪢";

//     var addBtn = document.createElement('button');
//     addBtn.innerHTML = "Answer A";
// }


// next button - removed for now
//var nextButton = document.addEventListener("click", function() {
    //document.getElementById('#questionContainer').innerHTML = "next";
    //console.log('Next question');
//})
    //questionElement.innerText = displayQuestions[i].question; /*loop */
    //console.log('Next question');

/* move the buttons to javascript */
/* List of quesions and answers  for the quiz */
/* manipulate  the CSS into java use the class/ID names */

// scores
// function Quiz(quesions) {
//     this.score = 0;
//     this.quesions = quesions;
//     this.currentQuestionIndex = 0;
// }

// Quiz.guess = 
// function(answer) {
//     if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
//         this.score++;
//     }
//         this.currentQuestionIndex++;
// };

// Quiz.getCurrentQuestion =
// function() {
//     return
//     this.quesions[this.currentQuestionIndex];
// };

// Quiz.hasEnded = function() {
//     return this.currentQuestionIndex >=
//     this.quesions.lenght;
// };
// function Questions(text, choices, answer){
//         this.text = text;
//         this.choices = choices;
//         this.answer = answer;
// }

// //Question.isCorrectAnswer = function (choice) {
//     //return this.amswer === choice;
// //};

// var QuizUI = {
//     displayNext: function() {
//         if (quiz.hasEnded()) {
//             this.displayScore();
//         }   else {
//             this.displayQuestion();
//             this.displayChoices();
//         }
//     },
//     displayQuestion: function() {
//         this.populateIdWithHTML("question",
//         quiz.getCurrentQuestion().text);
//             },
//             displayChoices: function() {
//                 var choices = quiz.getCurrentQuestion().choices;
                
//                 for(var i = 0; i < choices.lenght; i++) {
//                     this.populateIdWithHTML("choice" +i, choices[i]);
//                     this.guessHandler("guess" + choices[i]);
//                 }
//             }
//     } //

// display questions 
// var questions = document.createElement("p");
// container.textContent = "newQuestion"; [
//     newQuestion('Commonly used data types do NOT include:', ['strings 🪢', 'booleans ✅❌', 'alerts 🚨', 'numbers 🔢'], 'alerts'),
//     newQuestion('The condition in an if/ else statement is enclosed with _________.', ['quotes " " ', 'curly brackets { } ', 'parenthesis ( ) ', 'square brackets [ ] '], 'curly brackets'),
//     newQuestion('Arrays in JavaScript can be used to store:', ['numbers and strings 🔢  🪢', 'other arrays  𐑼 🧮', 'booleans  ✅❌', 'all of the above 👆🏻'], 'all of the above'),
//     newQuestion('String values must be enclosed within ____________ when being assigned to variables.', ['commas , ', 'curly brackets { } ', 'quotes " " ', 'parenthesis ( ) '], 'quotes'),
//     //newQuestion('A very useful tool used during developments and debugging for printing content to the debugger is ', ['JavaScript  💻 ', 'terminal/ bash  🗃 ', 'for loops  🔁 ', 'console log 🖥 '], 'console log')
// ]; 

// Create quiz 
//var quiz = new Quiz(questions);

//Display Quiz
//QuizUI.displayNext();

// storage of results

startBtn.addEventListener("click", startQuiz)