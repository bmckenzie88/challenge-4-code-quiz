var startButton = document.querySelector("button")
var timerEl = document.getElementById("timer")
var card = document.querySelector(".card")




// if (startButton)


function countdown() {
    var timeLeft = 90;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = 'GAMEOVER';
        clearInterval(timeInterval);
        // displayMessage();
      }
    }, 1000);
  }
startButton.addEventListener("click", function() {
    console.log("clicked!")
    countdown()
    card.setAttribute("style", "display: block")
    startButton.setAttribute("style", "display: none")
})


