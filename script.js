//random number generated to keep at .number class in place of innerHtml
//But only when the user gesses the correct answer
/*let rand = Math.floor(Math.random() * 20) + 1;
console.log(rand);
document.querySelector(".guess").value = 30;
console.log(document.querySelector(".guess").value);*/

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function wrongAnswer() {
  let active = document.querySelector("body");
  active.classList.add("wrong-answer"),
    setTimeout(function () {
      active.classList.remove("wrong-answer");
    }, 100);
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  let message = document.querySelector(".message");

  if (score == 1) {
    document.querySelector("body").style.backgroundColor = "darkred";
  }

  if (!guess) {
    message.textContent = "😒 Come on enter a number will ya!";
  } else if (guess == secretNumber) {
    message.textContent = "🙌 Correct Answer!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    if(score>highscore){
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Tooo High!";
      score--;
      document.querySelector(".score").textContent = score;
      wrongAnswer();
    } else {
      message.textContent = "🤷‍♂️ You lost the game!";
      document.querySelector(".score").textContent = "0";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Tooo Low!";
      score--;
      document.querySelector(".score").textContent = score;
      wrongAnswer();
    } else {
      message.textContent = "🤷‍♂️ You lost the game!";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  let number = document.querySelector(".number");
  number.textContent = "?";
  number.style.width = "15rem";
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".guess").value = null;
});
