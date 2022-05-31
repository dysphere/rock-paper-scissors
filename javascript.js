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
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return "You Tie! Rock ties with Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return "You Tie! Paper ties with Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return "You Tie! Scissors ties with Scissors";
    }
    }

function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please type in rock, paper, or scissors");
        const computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round.slice(0, 8) == "You Win!") {
            ++wins;
            console.log(round)
        }
        else if (round.slice(0, 9) == "You Lose!") {
            ++losses;
            console.log(round)
        }
        else {
            console.log(round)
        }
    }
    console.log(`Wins: ${wins} Losses: ${losses}`)
    if (wins > losses) {
        console.log("You Won!")
    }
    else if (losses > wins) {
        console.log("You Lose!")
    }
}

game();