
let playercount = 0;
let compcount = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playercount}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compcount}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!"


function getComputerChoice(){
    let choice = Math.random()
    if(choice <= 0.34){
        return "rock"
    }
    else if(choice >= 0.34 && choice <= 0.67){
        return "paper"
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        output.textContent = `It's a tie! You both picked ${playerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${computerSelection}`
        ++compcount;
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        output.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`
        ++playercount;
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${computerSelection}`
        ++compcount
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        output.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`
        ++playercount
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        output.textContent = `You lost! You chose ${playerSelection} and The computer chose ${computerSelection}`
        ++compcount
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        output.textContent = `You won! You chose ${playerSelection} and The computer chose ${computerSelection}`
        ++playercount
    }
}   

let playerSelection;

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id; 
        game();
    });
});



function game(){
        let computerSelection = getComputerChoice()

        output.textContent = "Choose Rock, Paper or Scissors"
        playRound(playerSelection, computerSelection)
        player.textContent = `Player Score: ${playercount}`;
        computer.textContent = `Computer Score: ${compcount}`;

        if(playercount == 5){
            output.textContent = "You won :) Congratulations, maybe you should play again!"
            playercount = 0
            compcount = 0
            player.textContent = `Player Score: ${playercount}`;
            computer.textContent = `Computer Score: ${compcount}`;
        }
        else if(compcount == 5){
            output.textContent = "You lost :(, maybe you should find something else to do?"
            playercount = 0
            compcount = 0
            player.textContent = `Player Score: ${playercount}`;
            computer.textContent = `Computer Score: ${compcount}`;
        }

}





