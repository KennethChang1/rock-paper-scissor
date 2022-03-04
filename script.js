let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const array = ["rock", "paper", "scissor"];
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection == "rock" && computerSelection == "scissor") {
        message = "You win! Rock beats Scissor";
        playerScore += 1;
        return message
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        message = "You Lose! Paper beats Rock";
        computerScore += 1;
        return message;
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        message = "Draw!";
        return message;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        message = "You Win!";
        playerScore += 1;
        return message;
    } else if (playerSelection == "paper" && computerSelection == "scissor"){
        message = "You Lose!";
        computerScore += 1;
        return message;
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        message = "Draw!";
        return message;
    } else if (playerSelection == "scissor" && computerSelection == "paper"){
        message = "You Win!";
        playerScore += 1;
        return message;
    } else if (playerSelection == "scissor" && computerSelection == "rock"){
        message = "You Lose!";
        computerScore += 1;
        return message;
    } else if (playerSelection == "scissor" && computerSelection == "scissor"){
        message = "Draw!";
        return message;
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if(playerScore > computerScore){
        return "Player wins";
    } else if (computerScore > playerScore) {
        return "Computer wins";
    } else {
        return "Draw";
    }
}

console.log(game());
