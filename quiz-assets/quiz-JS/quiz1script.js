const startBtn = document.getElementById('startBtn');
const question = document.getElementById('question');
const choices = document.getElementById('choice-text');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


/* List of quesions and answers */
let questions = [
    {
        question: 'Commonly used data types do NOT include: ', 
            choice1: 'strings 🪢',
            choice2: 'booleans ✅❌',
            choice3: 'alerts 🚨',
            choice4: 'numbers 🔢',
            answer: 3
    },

    {
        question: 'The condition in an if/ else statement is enclosed with _________. ', 
            choice1: 'quotes " " ',
            choice2: 'curly brackets { } ',
            choice3: 'parenthesis ( ) ',
            choice4: 'square brackets [ ] ',
            answer: 2
    },

    {
        question: 'Arrays in JavaScript can be used to store: ', 
            choice1: 'numbers and strings 🔢  🪢',
            choice2: 'other arrays  𐑼 🧮',
            choice3: 'booleans  ✅❌',
            choice4: 'all of the above 👆🏻',
            answer: 4
    },

    {
        question: 'String values must be enclosed within ____________ when being assigned to variables. ', 
            choice1: 'commas , ',
            choice2: 'curly brackets { } ',
            choice3: 'quotes " " ',
            choice4: 'parenthesis ( ) ',
            answer: 3
    },

    {
        question: 'A very useful tool used during developments and debugging for printing content to the debugger is: ', 
            choice1: 'JavaScript  💻 ',
            choice2: 'terminal/ bash  🗃 ',
            choice3: 'for loops  🔁 ',
            choice4: 'console log 🖥 ',
            answer: 4
    },



]
/*const questionContainerElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answerButtons')*/

/* Event listeners on the buttons */
/* startButton.addEventListener('click', startQuiz) */

/* Start the game */
function startQuiz() {
console.log('Quiz started')
/* startButton.classList.add('hide') */
questionContainerElement.classList.remove('hide') /* is this needed? */
currentQuestionIndex = 0
nextQuestion()
}

function nextQuestion() {
    showQuestion(currentQuestionIndex)
    console.log('Next question')
}

function showQuestion(question){
    questionElement.innerText = question.question
    /*question.answers.array.forEach(answers => {
        const button = document.createElement('button')
        button.classList.add('btn') 
        
    }); */
}

function selectAnswer(){
    console.log('Answer selected')
}

/* const questions = [
     question, 'Q1: Commonly used data types do NOT include: ', 
        answers, (
        { Text: 'strings 🪢', correct: false },
        { Text: 'booleans ✅❌', correct: false },
        { Text: 'alerts 🚨', correct: true },
        { Text: 'numbers 🔢', correct: false }
    ) */