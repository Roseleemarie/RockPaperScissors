let container = document.querySelector("div");

let rockBtn = document.createElement("button");
rockBtn.textContent = 'Pick Rock';
container.appendChild(rockBtn);
rockBtn.addEventListener("click",() => gameLoop('rock'));

let sciBtn = document.createElement("button");
sciBtn.textContent = 'Pick Scissors';
container.appendChild(sciBtn);
sciBtn.addEventListener("click",() => gameLoop('scissors'));

let paperBtn = document.createElement("button");
paperBtn.textContent = "Pick Paper"
container.appendChild(paperBtn);
paperBtn.addEventListener("click",() => gameLoop('paper'));

let result = document.createElement("p");
container.appendChild(result);

//Computer Choice Function
function computer(){
    //create var getComputerChoice
    //generate a random number
    getComputerChoice = Math.floor(Math.random()*3);
    //if var =0 "rock" var =1 "paper" var=2 "scissors" 
    if (getComputerChoice==0){
        computerChoice="rock"
    } else if (getComputerChoice==1){
        computerChoice="paper"
    } else if (getComputerChoice==2){
        computerChoice="scissors"
    }
    return computerChoice;
}

//create var humanScore and computerScore
//initialize score to 0
let humanScore = 0 , computerScore = 0

//create a play round loop
//compare humanSelection and computerSelection
//increment score by one
//create rounds var
//when rounds = 5 the game ends
let rounds = 0
function gameLoop (humanSelection){
    let computerSelection = computer()
    function roundLoop(humanSelection,computerSelection){
    switch(computerSelection){
        case 'rock':
            if (humanSelection=='rock'){
                scoreStatus='tied'
            }else if (humanSelection=='paper'){
                scoreStatus='human'
            }else if (humanSelection=='scissors'){
                scoreStatus='com'
            }
        break;
        case 'paper':
            if (humanSelection=='rock'){
                scoreStatus='human'  
            }else if (humanSelection=='paper'){
                scoreStatus='tied'
            }else if (humanSelection=='scissors'){
                scoreStatus='com'
            }
        break;
        case 'scissors':
            if (humanSelection=='rock'){
                scoreStatus='human'
            }else if (humanSelection=='paper'){
                scoreStatus='com'
            }else if (humanSelection=='scissors'){
                scoreStatus='tied'
            }
        break;
    }
    return scoreStatus;
};
    let winner = roundLoop(humanSelection,computerSelection);
    if (winner=='tied'){
        result.textContent = ` 
        You tied! ${computerSelection} and ${humanSelection} are the same!`
    } else if (winner=='human'){
        humanScore= ++humanScore
        result.textContent = ` 
        You win!! ${humanSelection} beats ${computerSelection}!`
    } else if (winner=='com') {
        computerScore= ++computerScore
        result.textContent = ` 
        You lose... ${computerSelection} beats ${humanSelection}.`
};
    totalRounds= ++rounds;
    result.textContent += ` 
    Round #${totalRounds}`;
    result.textContent += ` 
    Computer Score: ${computerScore} 
    Your Score: ${humanScore}.`;
    return totalRounds;
};
/*while (rounds<5) {
    rounds = gameLoop()
}*/

