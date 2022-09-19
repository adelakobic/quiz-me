// click the Start button to start the game //
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

    {
        question: 'String values must be enclosed within ____________ when being assigned to variables.',
        choices: ['commas , ', 'curly brackets { } ', 'quotes " " ', 'parenthesis ( ) '],
        answer: 'quotes " " '
    },

    {
        question: 'A very useful tool used during developments and debugging for printing content to the debugger is ',
        choices: ['JavaScript  💻 ', 'terminal/ bash  🗃 ', 'for loops  🔁 ', 'console log 🖥 '],
        answer: 'console log 🖥 '
    }
]
   // bracket notation and dot notation for arrays and i for iterators  //
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
    buttonEl.textContent = choice(choice[i]);
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
    this.innerText (innerText === true); {
        nextQuestion()
    }
    //if wrong, deduct time
    if (this.innerText === false) {
        clock (time= -10000);
    }
    // if questions left, populate next question
    if (questionsLeft) {
        populateQuestion = (nextQuestion++)
        //if out of questions call quiz complete
    } else { quizComplete()
    }
    //increment question index by 1 (++)
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

// scores
// function Quiz(quesions) {
//     this.score = 0;
//     this.quesions = quesions;
//     this.currentQuestionIndex = 0;
// }

// storage of results

startBtn.addEventListener("click", startQuiz)