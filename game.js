function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

console.log(getComputerChoice());


function gamePlay(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors: ");
    computerSelection = getComputerChoice(); console.log("player: " + playerSelection);
    //rock beats scissors
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "paper") {
        return "Tie!";
    } if (playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats Rock";
    }
    //scissors beats paper
    //paper beats rock
}
console.log(gamePlay());