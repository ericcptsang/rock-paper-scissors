function getComputerChoice() {
    let choice;
    switch(Math.floor(Math.random()*3+1)) {
        case 1 : 
            choice = "Rock";
            break;
        case 2 :
            choice = "Paper";
            break;
        case 3 :
            choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let choice = playerSelection.at(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == computerSelection) {
        return "Draw!";
    } 
    switch(playerSelection) {
        case "Rock" :
            if (computerSelection == "Paper") {
                return "You lose! " + computerSelection + " beats " + playerSelection;
            } else if (computerSelection == "Scissors") {
                return "You win! " + playerSelection + " beats " + computerSelection;
            }
        case "Paper" :
            if (computerSelection == "Scissors") {
                return "You lose! " + computerSelection + " beats " + playerSelection;
            } else if (computerSelection == "Rock") {
                return "You win! " + playerSelection + " beats " + computerSelection;
            }
        case "Scissors" :
            if (computerSelection == "Rock") {
                return "You lose! " + computerSelection + " beats " + playerSelection;
            } else if (computerSelection == "Paper") {
                return "You win! " + playerSelection + " beats " + computerSelection;
            }
    }
}

let playerScore = 0;
let computerScore = 0;

const score = document.querySelector("#result");
const div = document.createElement("div");
div.textContent = `${playerScore} - ${computerScore}`;
score.appendChild(div);

function setChoiceRock() {
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(computerSelection == "Paper") {
        computerScore++;
    } else if (computerSelection == "Scissors") {
        playerScore++;
    }
    console.log(result);
    checkResult();
    div.textContent = `${playerScore} - ${computerScore}`;
    score.appendChild(div);
}

function setChoicePaper() {
    let playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(computerSelection == "Scissors") {
        computerScore++;
    } else if (computerSelection == "Rock") {
        playerScore++;
    }
    console.log(result);
    checkResult();
    div.textContent = `${playerScore} - ${computerScore}`;
    score.appendChild(div);
}

function setChoiceScissors() {
    let playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if(computerSelection == "Rock") {
        computerScore++;
    } else if (computerSelection == "Paper") {
        playerScore++;
    }
    console.log(result);
    checkResult();
    div.textContent = `${playerScore} - ${computerScore}`;
    score.appendChild(div);
}

function checkResult(){
    if(playerScore === 5){
        alert(`Player win!  ${playerScore} vs ${computerScore}`)
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        alert(`Computer win! ${playerScore} vs ${computerScore}`)
        playerScore = 0;
        computerScore = 0;
    }
}

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", setChoiceRock);

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", setChoicePaper);

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", setChoiceScissors);