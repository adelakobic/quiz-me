/* enter initials  ID: initials */ 
var enterInitials = document.querySelector("#enterInitials");
var finallScore = document.querySelector("");

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