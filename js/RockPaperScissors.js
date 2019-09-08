$( document ).ready(function() {

$(".choice").click(function() {
    var user;
    var computer;
    user = this.id;
    computer = Math.random();
    if (computer <= 1 / 3) {
      computer = "rock";
      document.getElementById("cpu").innerHTML = "rock";
      if (user == "rock") {
        document.getElementById("result").innerHTML = "TIE";
        document.getElementById("you").innerHTML = "rock";
      } else if (user == "paper") {
        document.getElementById("result").innerHTML = "WIN";
        document.getElementById("you").innerHTML = "paper";
      } else {
        document.getElementById("result").innerHTML = "LOSE";
        document.getElementById("you").innerHTML = "scissors";
      }
      console.log("Rock");
      console.log(user);
    } else if (computer < 2 / 3) {
      computer = "scissors";
      document.getElementById("cpu").innerHTML = "scissors";
      if (user == "scissors") {
        document.getElementById("result").innerHTML = "TIE";
        document.getElementById("you").innerHTML = "scissors";
      } else if (user == "rock") {
       document.getElementById("result").innerHTML = "WIN";
        document.getElementById("you").innerHTML = "rock";
      } else {
        document.getElementById("result").innerHTML = "LOSE";
        document.getElementById("you").innerHTML = "paper";
      console.log("Scissors");
      console.log(user);
      }
    } else {
      computer = "paper";
      document.getElementById("cpu").innerHTML = "paper";
      if (user == "paper") {
        document.getElementById("result").innerHTML = "TIE";
        document.getElementById("you").innerHTML = "paper";
      } else if (user == "scissors") {
       document.getElementById("result").innerHTML = "WIN";
       document.getElementById("you").innerHTML = "scissors";
      } else {
        document.getElementById("result").innerHTML = "LOSE";
        document.getElementById("you").innerHTML = "rock";
      }
      console.log("Paper");
      console.log(user);
    }
    var winner = compare(user, computer);
    console.log(winner);
  });
});