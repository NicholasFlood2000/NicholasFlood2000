var wins = 0;
var losses = 0;
var ties = 0;
$(".choice").click(function() {
  var user;
  var computer;
  user = this.id;
  computer = Math.random();
  if (computer <= 1 / 3) {
    computer = "rock";
    document.getElementById("cpu").innerHTML = "rock";
    if (user == "rock") {
      document.getElementById("result").innerHTML = "You Tied";
      document.getElementById("you").innerHTML = "rock";
      var t = ties++;
      document.getElementById("ties").innerHTML = t;
    } else if (user == "paper") {
      document.getElementById("result").innerHTML = "You Won";
      document.getElementById("you").innerHTML = "paper";
      var w = wins++;
      document.getElementById("wins").innerHTML = w;
    } else {
      document.getElementById("result").innerHTML = "You Lost";
      document.getElementById("you").innerHTML = "scissors";
      var l = losses++;
      document.getElementById("losses").innerHTML = l;
    }
    console.log("Rock");
    console.log(user);
  } else if (computer < 2 / 3) {
    computer = "scissors";
    document.getElementById("cpu").innerHTML = "scissors";
    if (user == "scissors") {
      document.getElementById("result").innerHTML = "You Tied";
      document.getElementById("you").innerHTML = "scissors";
      var t = ties++;
      document.getElementById("ties").innerHTML = t;
    } else if (user == "rock") {
      document.getElementById("result").innerHTML = "You Won";
      document.getElementById("you").innerHTML = "rock";
      var w = wins++;
      document.getElementById("wins").innerHTML = w;
    } else {
      document.getElementById("result").innerHTML = "You Lost";
      document.getElementById("you").innerHTML = "paper";
      var l = losses++;
      document.getElementById("losses").innerHTML = l;
      console.log("Scissors");
      console.log(user);
    }
  } else {
    computer = "paper";
    document.getElementById("cpu").innerHTML = "paper";
    if (user == "paper") {
      document.getElementById("result").innerHTML = "You Tied";
      document.getElementById("you").innerHTML = "paper";
      var t = ties++;
      document.getElementById("ties").innerHTML = t;
    } else if (user == "scissors") {
      document.getElementById("result").innerHTML = "You Won";
      document.getElementById("you").innerHTML = "scissors";
      var w = wins++;
      document.getElementById("wins").innerHTML = w;
    } else {
      document.getElementById("result").innerHTML = "You Lost";
      document.getElementById("you").innerHTML = "rock";
      var l = losses++;
      document.getElementById("losses").innerHTML = l;
    }
    console.log("Paper");
    console.log(user);
  }
  var winner = compare(user, computer);
  console.log(winner);
});