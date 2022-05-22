const answer = Math.floor(Math.random() * 100 + 1);
let numGuesses = 0;
document.getElementById("submit").onclick = function () {
  numGuesses++;
  let guess = document.getElementById("guess").value;
  if (guess == 0) {
    alert("Please enter a number");
  } else if (guess == answer) {
    alert("You got it within " + numGuesses + " guesses");
    location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
  } else if (guess < answer) {
    alert("Too low!");
  } else if (guess > answer) {
    alert("Too high!");
  }
};
