//Properly linked up with weblink.html
//console.log("hello")
//Computer Choice Function
function computer(){
    //create var getComputerChoice
    //generate a random number
    getComputerChoice = Math.floor(Math.random()*3);
    //if var =0 "rock" var =1 "paper" var=2 "scissors" 
    //store string value computerSelection
    if (getComputerChoice==0){
        computerChoice="rock"
    } else if (getComputerChoice==1){
        computerChoice="paper"
    } else if (getComputerChoice==2){
        computerChoice="scissors"
    }
    return computerChoice;
}
//check var in console.log
//console.log(computer())
//Human Choice Function
function human(){
    //create var getHumanChoice
    //prompt a choice between 'rock ', ' paper ', ' scissors'
    getHumanChoice = prompt("Rock, Paper, Scissors!");
    //change string to lowercase
    //store value in humanSelection
    humanSelection = getHumanChoice.toLowerCase();
    if (humanSelection == 'rock' || humanSelection == 'paper' || humanSelection == 'scissors'){
        return humanChoice;
    }
    console.log("What is that?")
}
//check var in console.log
//console.log(human())
//create var humanScore and computerScore
//initialize score to 0
let humanScore = 0 , computerScore = 0

//create a play round loop
//compare humanSelection and computerSelection
//increment score by one
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
    let winner = roundLoop()
    if (winner=='tied'){
        console.log("You tied!",computerSelection," and ",humanSelection," are the same!")
    } else if (winner=='human'){
        humanScore= ++humanScore
        console.log("You win!!",humanSelection," beats ",computerSelection,"!")
    } else if (winner=='com') {
        computerScore= ++computerScore
        console.log("You lose...",computerSelection," beats ",humanSelection,".")
}
    console.log("Round #",rounds)
    console.log("Computer Score: ",computerScore," Your Score: ",humanScore,".")
}   
gameLoop()
