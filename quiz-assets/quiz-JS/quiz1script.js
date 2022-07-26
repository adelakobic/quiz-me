//start from line 90!!//

/* click the Start button to start the game */
var startButton = document.getElementById('#startBtn');
    //startButton.addEventListener('click', startQuiz);
    function startQuiz(){
        startButton.addEventListener('click', startQuiz)
        console.log('Quiz started');
}
   /* bracket notation and dot notation for arrays and i for iterators  */

var nextButton = document.addEventListener("click", function() {
    document.getElementById('#nextBtn').innerText = " ";
    console.log('Next question');
})
    //questionElement.innerText = displayQuestions[i].question; /*loop */
    //console.log('Next question');

/* move the buttons to javascript */
/* List of quesions and answers  for the quiz */
/* manipulate  the CSS into java use the class/ID names */

function Quiz(quesions) {
    this.score = 0;
    this.quesions = quesions;
    this.currentQuestionIndex = 0;
}

Quiz.guess = 
function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
        this.currentQuestionIndex++;
};

Quiz.getCurrentQuestion =
function() {
    return
    this.quesions[this.currentQuestionIndex];
};

Quiz.hasEnded = function() {
    return this.currentQuestionIndex >=
    this.quesions.lenght;
};
function Questions(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
}

//Question.isCorrectAnswer = function (choice) {
    //return this.amswer === choice;
//};

var QuizUI = {
    displayNext: function() {
        if (quiz.hasEnded()) {
            this.displayScore();
        }   else {
            this.displayQuestion();
            this.displayChoices();
        }
    },
    displayQuestion: function() {
        this.populateIdWithHTML("question",
        quiz.getCurrentQuestion().text);
            },
            displayChoices: function() {
                var choices = quiz.getCurrentQuestion().choices;
                
                for(var i = 0; i < choices.lenght; i++) {
                    this.populateIdWithHTML("choice" +i, choices[i]);
                    this.guessHandler("guess" + choices[i]);
                }
            }
    }

// display questions 
var questions = document.createElement("p");
package.textContent = ""; [
    newQuestion('Commonly used data types do NOT include:', ['strings 🪢', 'booleans ✅❌', 'alerts 🚨', 'numbers 🔢'], 'alerts'),
    newQuestion('The condition in an if/ else statement is enclosed with _________.', ['quotes " " ', 'curly brackets { } ', 'parenthesis ( ) ', 'square brackets [ ] '], 'curly brackets'),
    newQuestion('Arrays in JavaScript can be used to store:', ['numbers and strings 🔢  🪢', 'other arrays  𐑼 🧮', 'booleans  ✅❌', 'all of the above 👆🏻'], 'all of the above'),
    newQuestion('String values must be enclosed within ____________ when being assigned to variables.', ['commas , ', 'curly brackets { } ', 'quotes " " ', 'parenthesis ( ) '], 'quotes'),
    newQuestion('A very useful tool used during developments and debugging for printing content to the debugger is ', ['JavaScript  💻 ', 'terminal/ bash  🗃 ', 'for loops  🔁 ', 'console log 🖥 '], 'console log')
]; 

// Create quiz 
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();

// storage of results
