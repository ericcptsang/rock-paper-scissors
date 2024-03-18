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

function setChoiceRock() {
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}

function setChoicePaper() {
    let playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}

function setChoiceScissors() {
    let playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
}

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent.add(playerScore - computerScore);
container.appendChild(content);

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");
btnRock.addEventListener("click", setChoiceRock);
btnPaper.addEventListener("click", setChoicePaper);
btnScissors.addEventListener("click", setChoiceScissors);