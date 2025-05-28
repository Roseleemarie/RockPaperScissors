//Properly linked up with weblink.html
//console.log("hello")
let container = document.querySelector("div");
let rockBtn = document.createElement("button");
rockBtn.textContent = 'Pick Rock'
container.appendChild(rockBtn);
let sciBtn = document.createElement("button");
sciBtn.textContent = 'Pick Scissors'
container.appendChild(sciBtn);
let paperBtn = document.createElement("button");
paperBtn.textContent = "Pick Paper"
container.appendChild(paperBtn);

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
//Human Choice Function
function human(){
    //create var getHumanChoice
    //prompt a choice between 'rock ', ' paper ', ' scissors'
    getHumanChoice = prompt("Rock, Paper, Scissors!");
    //change string to lowercase
    //store value in humanSelection
    humanChoice = getHumanChoice.toLowerCase();
    if (humanChoice == 'rock' || humanChoice == 'paper' || humanChoice == 'scissors'){
        return humanChoice;
    }
    console.log("What is that?")
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
function gameLoop (){
    let computerSelection = computer()
    let humanSelection = human()
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
}
    let winner = roundLoop(humanSelection,computerSelection);
    if (winner=='tied'){
        console.log("You tied!",computerSelection," and ",humanSelection," are the same!")
    } else if (winner=='human'){
        humanScore= ++humanScore
        console.log("You win!!",humanSelection," beats ",computerSelection,"!")
    } else if (winner=='com') {
        computerScore= ++computerScore
        console.log("You lose...",computerSelection," beats ",humanSelection,".")
}
    totalRounds= ++rounds;
    console.log("Round #",totalRounds);
    console.log("Computer Score: ",computerScore," Your Score: ",humanScore,".");
    return totalRounds;
}   
/*while (rounds<5) {
    rounds = gameLoop()
}*/

