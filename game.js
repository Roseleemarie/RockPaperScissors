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
                console.log("You tied!",computerSelection," and ",humanSelection," are the same!")
                scoreStatus='tied'
            }else if (humanSelection=='paper'){
                console.log("You win!!",humanSelection," beats ",computerSelection,"!")
                scoreStatus='win'
            }else if (humanSelection=='scissors'){
                console.log("You lose...",computerSelection," beats ",humanSelection,".")
                scoreStatus='lose'
            }
        break;
        case 'paper':
            if (humanSelection=='rock'){
                console.log("You win!!",humanSelection," beats ",computerSelection,"!")
                scoreStatus='win'  
            }else if (humanSelection=='paper'){
                console.log("You tied!",computerSelection," and ",humanSelection," are the same!")
                scoreStatus='tied'
            }else if (humanSelection=='scissors'){
                console.log("You lose...",computerSelection," beats ",humanSelection,".")
                scoreStatus='lose'
            }
            break;
        case 'scissors':
            if (humanSelection=='rock'){
                console.log("You win!!",humanSelection," beats ",computerSelection,"!")
                scoreStatus='win'
            }else if (humanSelection=='paper'){
                console.log("You lose...",computerSelection," beats ",humanSelection,".")
                scoreStatus='lose'
            }else if (humanSelection=='scissors'){
                console.log("You tied!",computerSelection," and ",humanSelection," are the same!")
                scoreStatus='tied'
            }
        break;
    }
    return scoreStatus;
}
}
gameLoop()
