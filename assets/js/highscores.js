var clearButton = document.querySelector(".clear-button")
var highscoresUl = document.querySelector(".highscores-list");

var savedScores = JSON.parse(localStorage.getItem("savedScores"))
    if (!savedScores) {
      savedScores=[];
    }
    console.log(savedScores)

for (var i = 0; i < savedScores.length; i++) {
    var highScoreElement = document.createElement("li")
   
    highScoreElement.textContent = savedScores[i].initials + "    " + savedScores[i].score;
    // console.log(highScoreElement)
    highscoresUl.appendChild(highScoreElement)
}
clearButton.addEventListener("click", function() {
    highscoresUl.textContent = ""
    localStorage.clear(savedScores)
    
})