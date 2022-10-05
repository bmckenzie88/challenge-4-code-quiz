var startButton = document.querySelector("button");
var timerEl = document.getElementById("timer");
var card1 = document.querySelector("#card-1");
var card2 = document.querySelector("#card-2");
var card3 = document.querySelector("#card-3");
var card4 = document.querySelector("#card-4");
var results = document.querySelector("#results")
var userScore = document.querySelector("#score")
var initials = document.querySelector("#initials")
var timeLeft = 90;

function countdown() {
  
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "GAMEOVER";
      clearInterval(timeInterval);
    }
  }, 1000);
}
startButton.addEventListener("click", function () {
  console.log("clicked!");
  countdown();
  card1.setAttribute("style", "display: block");
  startButton.setAttribute("style", "display: none");
});
card1.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("#correct")) {
    card1.setAttribute("style", "display: none");
    card2.setAttribute("style", "display: block");
  } else if (element.matches ("#incorrect")) {
    card1.setAttribute("style", "display: none");
    card2.setAttribute("style", "display: block");
    timeLeft -= 15;
  }
});
card2.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("#correct")) {
    card2.setAttribute("style", "display: none");
    card3.setAttribute("style", "display: block");
  } else if (element.matches ("#incorrect")) {
    card2.setAttribute("style", "display: none");
    card3.setAttribute("style", "display: block");
    timeLeft -= 15;
  }
});
card3.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("#correct")) {
    card3.setAttribute("style", "display: none");
    card4.setAttribute("style", "display: block");
  } else if (element.matches ("#incorrect")) {
    card3.setAttribute("style", "display: none");
    card4.setAttribute("style", "display: block");
    timeLeft -= 15;
  }
});
card4.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("#correct")) {
    card4.setAttribute("style", "display: none");
    results.setAttribute("style", "display: block");
    var score = timeLeft
    console.log(score)
    userScore.textContent = "You scored " + score + " points!"
  } else if (element.matches ("#incorrect")) {
    card4.setAttribute("style", "display: none");
    results.setAttribute("style", "display: block");
    timeLeft -= 15;
    var score = timeLeft
    console.log(score)
    userScore.textContent = "You scored " + score + " points!"

  }
  localStorage.setItem("score", score)
});

results.addEventListener("click", function (event) {

  var element = event.target;
  if (element.matches("#submit")) {
    var parsedScore = JSON.parse(window.localStorage.getItem("score"))
    console.log("parsedScore = " + parsedScore)

    var loggedScore = {
      initials: initials.value,
      score: parsedScore,
    }
    
    var savedScores = JSON.parse(localStorage.getItem("savedScores"))
    if (!savedScores) {
      savedScores=[];
      
    } 
    console.log (savedScores)
    savedScores.push(loggedScore)
    localStorage.setItem("savedScores", JSON.stringify(savedScores))
  }
})
  