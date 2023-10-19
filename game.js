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


function gamePlay(playerSelection, computerSelection) {
    playerSelection = prompt("Rock, Paper, or Scissors: ").toLowerCase();
    computerSelection = getComputerChoice();

    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);

    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "paper") {
        return "Tie!";
    } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! " + computerSelection + " beats  " + playerSelection;
    }  else {
        return "Invalid Entry";
    }

}

function game(round) {
    let playerWins = 0;
    let computerWins = 0;


    for (let i = 0; i < round; i++) {
        let result = gamePlay();
        console.log(result);

        if(result.startsWith("You Win")){
            playerWins++;
        } else if (result.startsWith("You Lose")){
            computerWins++;
        }
    }

    if (playerWins > computerWins){
        return "You Win!"; 
       } else if (playerWins < computerWins){
        return "Computer Wins";
       } else {
        return "It's a Tie";
       }
}


console.log(game(5));