const answer = 5; //Math.floor(Math.random() * 50 + 1);

document.getElementById("submit").onclick = function () {
  let guess = document.getElementById("guess").value;
  if (guess == 0) {
    alert("Please enter a number");
  } else if (guess == answer) {
    alert("You got it!");
    location.href = "https://www.youtube.com/watch?v=iik25wqIuFo";
  } else if (guess < answer) {
    alert("Too low!");
  } else if (guess > answer) {
    alert("Too high!");
  }
};
