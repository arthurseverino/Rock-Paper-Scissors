console.log("Hello")

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
        console.log("It's a tie! you both picked " + playerSelection);
        return "tie"
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You Lose! Paper beats Rock")
        return "computer"
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Won! Paper beats Rock")
        return "human"
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("You Lose! Rock beats Scissors")
        return "computer"
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win! Scissors beats Paper")
        return "human"
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You Lose! Scissors beats Paper")
        return "computer"
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win! Rock beats Scissors")
        return "human"
    }
}   


function game(){
    let score = {"playercount": 0, 
        "compcount": 0};

    for (let i = 1; i < 6; i++){
        let computer = getComputerChoice()
        let person = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
        let round = playRound(person, computer);
        if(round == "human"){
            ++score["playercount"];
            console.log("W The score is: " + score.playercount + " : " + score.compcount)
        }
        else if(round == "computer"){
            ++score["compcount"];
            console.log(" L The score is: " + score.playercount + " : " + score.compcount)
        }
        else if(round == "tie"){
            console.log("T The score is: " + score.playercount + " : " + score.compcount)
        }
        console.log("Round: " + i)
    }
    
    if(score.playercount > score.compcount){
        console.log("You won! Congrats!!!")
    }
    else if(score.playercount < score.compcount){
        console.log("Yikes, looks like the computer got the best of ya. Try again next time!");
    }
    else{
        console.log("Through 5 rounds, It's a Tie! Who would've thought")
    }
    
    

}



game();





