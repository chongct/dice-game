var currentScore, currentPlayer, finalScore, win;

document.querySelector('.btn-new').addEventListener("click", function() {
  currentScore = 0;
  currentPlayer = 0;
  finalScore = [0, 0];
  win = 50;

  document.querySelector("#score0").textContent = 0;
  document.querySelector("#score1").textContent = 0;
  document.querySelector("#current0").textContent = 0;
  document.querySelector("#current1").textContent = 0;
  document.querySelector("#circle0").style.display = "block";
  document.querySelector("#circle1").style.display = "none";
});

document.querySelector('.btn-roll').addEventListener("click", function() {
  if (!win) {
    alert("Please click NEW GAME.");
    return;
  }
  // roll dice
  var number = Math.floor(Math.random() * 6 + 1);

  // change dice img
  var dice = document.querySelector('.dice');
  // dice.textContent = number;
  // dice.setAttribute("src", "img/dice-" + number + ".png");
  dice.src = "img/dice-" + number + ".png";

  // current score
  if (number != 1) {
    currentScore += number;
    document.querySelector("#current" + currentPlayer).textContent = currentScore;
  } else {
    currentScore = 0;
    document.querySelector("#current" + currentPlayer).textContent = currentScore;
    changePlayer();
    next();
  }
});

document.querySelector('.btn-hold').addEventListener("click", function() {
  if (!win) {
    alert("Please click NEW GAME.");
    return;
  }

  // increment final score and reset current score
  finalScore[currentPlayer] += currentScore;
  document.querySelector("#score" + currentPlayer).textContent = finalScore[currentPlayer];
  currentScore = 0;
  document.querySelector("#current" + currentPlayer).textContent = currentScore;

  // check if player has won
  if (finalScore[currentPlayer] >= win) {
    alert("Player " + (currentPlayer + 1) + " won.");
  } else {
    changePlayer();
  }

  next();
});

// change player index
function next() {
  return (currentPlayer === 0) ? currentPlayer = 1 : currentPlayer = 0;
}

function changePlayer() {
  if (currentPlayer === 0) {
    document.querySelector("#circle0").style.display = "none";
    document.querySelector("#circle1").style.display = "block";
  } else {
    document.querySelector("#circle0").style.display = "block";
    document.querySelector("#circle1").style.display = "none";
  }
}
