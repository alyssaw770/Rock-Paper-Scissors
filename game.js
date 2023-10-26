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
    if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper"
        || playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === computerSelection) {
        return "Tie!";
    } else {
        return "You Lose! " + computerSelection + " beats  " + playerSelection;
    }

}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let round = 0;
    const maxRounds = 5;

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const results = document.querySelector('#results');

    const buttons = [rock, paper, scissors];

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const playerSelection = button.value;
            const computerSelection = getComputerChoice();
            const result = gamePlay(playerSelection, computerSelection);
            results.textContent = result;

            if (result.startsWith("You Win")) {
                playerWins++;
            } else if (result.startsWith("You Lose")) {
                computerWins++;
            }
            round++;

            if (round === maxRounds) {
                if (playerWins > computerWins) {
                    results.textContent = "You Win!";
                } else if (playerWins < computerWins) {
                    results.textContent = "Computer Wins";
                } else {
                    results.textContent = "It's a Tie";
                }

                setTimeout(() => {
                    const playAgain = confirm("Play Again?");
                    if (playAgain) {
                        round = 0;
                        playerWins = 0;
                        computerWins = 0;
                        results.textContent = "";
                    }
                }, 0);

            }
        });
    });
}

game();

