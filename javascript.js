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

function playRound(playerSelection, computerSelection){
    let choice = playerSelection.at(0).toUpperCase()+playerSelection.slice(1).toLowerCase();
    if(choice === computerSelection) {
        return "Draw!";
    } 
    switch(choice) {
        case "Rock" :
            if (computerSelection === "Paper") {
                return ("You lose! " + computerSelection + " beats " + choice);
            } else if (computerSelection === "Scissors") {
                return ("You win! " + choice + " beats " + computerSelection);
            }
        case "Paper" :
            if (computerSelection === "Scissors") {
                return ("You lose! " + computerSelection + " beats " + choice);
            } else if (computerSelection === "Rock") {
                return ("You win! " + choice + " beats " + computerSelection);
            }
        case "Scissors" :
            if (computerSelection === "Rock") {
                return ("You lose! " + computerSelection + " beats " + choice);
            } else if (computerSelection === "Paper") {
                return ("You win! " + choice + " beats " + computerSelection);
            }
    }
}

function playGame(numberOfGames){
    for(let i = 0; i < numberOfGames; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame(5);