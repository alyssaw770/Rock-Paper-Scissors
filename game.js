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

function updateScore(playerWins, computerWins) {
    const playerScore = document.querySelector('.player');
    const computerScore = document.querySelector('.computer');

    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
}


function game() {
    let playerWins = 0;
    let computerWins = 0;
    const maxScore = 5;

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

            updateScore(playerWins, computerWins);

            if (computerWins === maxScore || playerWins === maxScore) {

                rock.disabled = true;
                paper.disabled = true;
                scissors.disabled = true;

                if (playerWins > computerWins) {
                    results.textContent = "You Win!";
                } else if(playerWins < computerWins) {
                    results.textContent = "Computer Wins";
                }


                setTimeout(() => {
                    const playAgain = document.querySelector('.playAgain');

                    if (playAgain) {
                        playAgain.addEventListener('click', () => {
                            console.log('clicked');
                            playerWins = 0;
                            computerWins = 0;
                            rock.disabled = false;
                            paper.disabled = false;
                            scissors.disabled = false;
                            updateScore(playerWins, computerWins);
                        });
                    }
                }, 0);
            }
        });
    });
}

game();

