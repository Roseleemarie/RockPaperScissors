//Properly linked up with weblink.html
console.log("hello")
//Computer Choice Function
function computer(){
    //create var getComputerChoice
    //generate a random number
    getComputerChoice = Math.floor(Math.random()*3);
    //if var =0 "rock" var =1 "paper" var=2 "scissors" 
    //store string value computerSelection
    if (getComputerChoice==0){
        computerSelection="rock"
    } else if (getComputerChoice==1){
        computerSelection="paper"
    } else if (getComputerChoice==2){
        computerSelection="scissors"
    }
    return computerSelection;
}
//check var in console.log
console.log(computer())

//Human Choice Function
//create var getHumanChoice
//prompt a choice between 'rock ', ' paper ', ' scissors'
//change string to lowercase
//store value in humanSelection
//check var in console.log

function human(){
    getHumanChoice = prompt("Rock, Paper, Scissors!");
    humanSelection = getHumanChoice.toLowerCase();
    if (humanSelection == 'rock' || humanSelection == 'paper' || humanSelection == 'scissors'){
        return humanSelection;
    }
    console.log("What is that?")
}
console.log(human())
//create var humanScore and computerScore
//initialize score to 0


//create a play round loop
//compare humanSelection and computerSelection
//increment score by one
//if score = 5 for either, then the game ends
