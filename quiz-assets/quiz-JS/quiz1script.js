/* click the Start button to start the game */
var startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', startQuiz);
    function startQuiz(){
    var questionElement = document.createElement('p');
    //questionElement.innerText = displayQuestions[i].question; /*loop */
    console.log('Quiz started');
    }
   /* bracket notation and dot notation for arrays and i for iterators  */

var displayAnswers = document.getElementById('questionContainer');
    //displayAnswers.addEventListener('click', "choice-text");
    var questionContainer = document.createElement('question');
    //questionContainer.innerText = displayQuestions[i]

/* move the buttons to javascript */
/* List of quesions and answers  for the quiz */
/* manipulate  the CSS into java use the class/ID names */


/* possible solution? : $("ol").append("<li>" + var name + "</li">); */
var randomQuestions = [
    { // stack overflow version??
        question: 'Commonly used data types do NOT include: ', 
            choice1: 'strings 🪢',
            choice2: 'booleans ✅❌',
            choice3: 'alerts 🚨',
            choice4: 'numbers 🔢',
            answer: 3,
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


// answer buttons ID btn
// score

const scorePoints = 5
const maxQuestions = 5


// storage of results


/* Timer on game */

