/* enter initials  ID: initials */ 
var enterInitials = document.querySelector("#enterInitials");
var finalScore = document.querySelector("");

// create list for the  score board
var li = document.createElement("li");
li.textContent = totalScore;  // check totalScore for correct element name 
li.setAttribute("data-index", i); // data from quiz score 
li.appendChild(button); //when submit button is clicked it shoudl add score & initial to score board list
scoresList.appendChild(li);

function storeInitials() {
    //store the players initilas
    localStorage.setItem("initials", JSON.stringify(enterInitials));
}

/* store the score in local directory on server ID submitButton */
function storeScore() {

}
/* display the previous scores on the scoreboard class: scoresList */
function displayInitials() {
    enterInitials.getAttributeNames("enterInitials", JSON.stringify(enterInitials))
}

function displayScores() {
    totalScore.innerHTML = " ";
    li.getAttribute("data-index", i);
}
/* clear the scores on score board  class: clearButton */ 


