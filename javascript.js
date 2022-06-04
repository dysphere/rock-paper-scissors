function computerPlay() {
    let randomInt = Math.floor(Math.random() * 3)
    if (randomInt == 2) {
        return "rock";
    }
    else if (randomInt == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return "You Tie! Rock ties with Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "You Tie! Paper ties with Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "You Tie! Scissors ties with Scissors";
    }
    }

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

  button.addEventListener('click', () => {
    let wins = 0;
    let losses = 0;
    const score = document.querySelector(".score h2");
    score.textContent = `Player: ${wins} Computer: ${losses}`;
    while (wins < 5 || losses < 5) {
        if (button.id == 'rock') {
            let roundRock = playRound("rock", computerPlay());
            const result = document.querySelector(".result p");
            result.textContent = roundRock;
            if (roundRock.slice(0,8) == "You Win!") {
                wins++;
            }
            else if (roundRock.slice(0, 9) == "You Lose!") {
                losses++;
            }
        }
        else if (button.id == 'paper') {
            let roundPaper = playRound("paper", computerPlay());
            const result = document.querySelector(".result p");
            result.textContent = roundPaper;
            if (roundPaper.slice(0, 8) == "You Win!") {
                wins++;
            }
            else if (roundPaper.slice(0, 9) == "You Lose!") {
                losses++;
            }
        }
        else {
            let roundScissors = playRound("scissors", computerPlay());
            const result = document.querySelector(".result p");
            result.textContent = roundScissors;
            if (roundScissors.slice(0, 8) == "You Win!") {
                wins++;
            }
            else if (roundScissors.slice(0, 9) == "You Lose!") {
                losses++;
            }
    }
    }
    if (wins > 4) {
        const finalResult = document.querySelector(".final h1");
        finalResult.textContent = "You Won!";
    }
    else if (losses > 4) {
        const finalResult = document.querySelector(".final h1");
        finalResult.textContent = "You Lost :(";
    }
    else {
        const finalResult = document.querySelector(".final h1");
        finalResult.textContent = "";
    }
  });
});