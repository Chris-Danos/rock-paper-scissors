function getComputerChoice(){

    let computerSel = Math.floor(Math.random() * 3);

    if(computerSel == 0 ){
        return "rock";
    }else if(computerSel == 1){
        return "paper";
    }else{
        return "scissors"
    }

}


function playRound(){
    let playerSelection = prompt("Start Game");
    let computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);

    
    let newPlayerSel = playerSelection.toLowerCase();

    if(newPlayerSel == "rock"){
        if(computerSelection == "rock"){
            return "It's a tie!";
        }else if(computerSelection == "paper"){
            return "Sorry! Paper beats Rock!";
        }else{
            return "You win! Rock beats Scissors!";
        }
    }else if(newPlayerSel == "paper"){
        if(computerSelection == "rock"){
            return "You win! Paper beats Rock!";
        }else if(computerSelection == "paper"){
            return "It's a tie!";
        }else{
            return "Sorry! Scissors beats Paper!";
        }
    }else if(newPlayerSel == "scissors"){
        if(computerSelection == "rock"){
            return "Sorry! Rock beats Scissors!";
        }else if(computerSelection == "paper"){
            return "You win! Scissors beats Paper!";
        }else{
            return "It's a tie!";
        }
    }else{
        return "ERROR! Invalid selection"
    }

}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let outcome = "";
    
    

    while(playerScore < 5 && computerScore < 5){
        
        outcome = playRound();
        console.log(outcome);

        if(outcome.includes("win") == true){
            playerScore++;
            console.log("Your Score is " + playerScore);
            console.log("The Computer's Score is " + computerScore);
        }else if(outcome.includes("Sorry!") == true){
            computerScore++;
            console.log("Your Score is " + playerScore);
            console.log("The Computer's Score is " + computerScore);
        }else{
            console.log("Tie Round!");
            console.log("Your Score is " + playerScore);
            console.log("The Computer's Score is " + computerScore);
        }
    }

    if(playerScore == 5){
        return "You win the Game!"
    }else{
        return "Computer beat you! HAHA"
    }
}


console.log(game());