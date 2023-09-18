
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

function getPlayerSelection(){
    let person = prompt("Pick among 'Rock, Paper, Scissors'").toLowerCase();
    if(person.toLowerCase() == "rock" || person.toLowerCase() == "paper" || person.toLowerCase() == "scissors"){
        return person.toLowerCase()
    }
    else{
        alert('That\'s not a valid choice. Please try again.')
        getPlayerSelection();
    }
}

function game(){
    let score = {
        "playercount": 0, 
        "compcount": 0
        }

    for (let i = 1; i < 6; i++){
        let computer = getComputerChoice()
        let person = getPlayerSelection()

        console.log("Round " + i + " is about to begin")
        let round = playRound(person, computer);
        if(round == "human"){
            ++score["playercount"];
            console.log("The current score is: Player: " + score.playercount + " Computer: " + score.compcount)
        }
        else if(round == "computer"){
            ++score["compcount"];
            console.log("The current score is: Player: " + score.playercount + " Computer: " + score.compcount)
        }
        else if(round == "tie"){
            console.log("The current score is: Player: " + score.playercount + " Computer: " + score.compcount)
        }
    }
    
    if(score.playercount > score.compcount){
        console.log("You won! Congratulations, maybe you should play again!!")
    }
    else if(score.playercount < score.compcount){
        console.log("Yikes, looks like the computer got the best of ya. Try again next time!");
    }
    else{
        console.log("Those were some hard-fought 5 rounds... It's a Tie! Who would've thought")
    }

}

game();





