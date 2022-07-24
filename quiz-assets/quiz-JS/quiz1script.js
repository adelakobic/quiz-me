/*const startBtn = document.getElementById('startBtn');
const question = document.getElementById('question');
const choices = Array.from(document.getElementById('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []; */

/* click the Start button to start the game */
var startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', startQuiz);
    function startQuiz(){
    var questionElement = document.createElement('p');
    questionElement.innerText = questions[i].question; /*loop */
    console.log('Quiz started');
    }
   /* bracket notation and dot notation for arrays and i for iterators  */

var displayQuestions = document.getElementById('questionContainer');


/* move the buttons to javascript */
/* List of quesions and answers  for the quiz */
/* manipulate  the CSS into java use the class/ID names */

/* possible solution? : $("ol").append("<li>" + var name + "</li">); */
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

/* Constants */
const max_questions = 5;

/*function startQuiz() {
    console.log('Quiz started')*/

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
    getNextQustion();
};

getNextQustion = () => {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() + availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })
}

startQuiz();


/*const questionContainerElement = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerButton = document.getElementById('answerButtons')*/

/* Event listeners on the buttons */
/* startButton.addEventListener('click', startQuiz) */

/* Start the game */

/*startButton.classList.add('hide') */
/* questionContainerElement.classList.remove('hide') /* is this needed? */
/*currentQuestionIndex = 0
nextQuestion()}

function nextQuestion() {
    showQuestion(currentQuestionIndex)
    console.log('Next question')
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.array.forEach(answers => {
        const button = document.createElement('button')
        button.classList.add('btn') 
        
    }); 
}

function selectAnswer(){
    console.log('Answer selected')
}*/

