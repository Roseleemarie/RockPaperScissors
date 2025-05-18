//Properly linked up with weblink.html
//Computer Choice Function
//create var getComputerChoice
//generate a random number
//if var =1 "rock" var=2 "scissors" var =3 "paper"
//store string value computerSelection
//check var in console.log
console.log("hello")
function computer(){
    getComputerChoice = Math.floor(Math.random()*3);
    if (getComputerChoice==0){
        computerSelection="rock"
    } else if (getComputerChoice==1){
        computerSelection="paper"
    } else if (getComputerChoice==2){
        computerSelection="scissors"
    }
    return computerSelection;
}
console.log(computer())


//Human Choice Function
//create var getHumanChoice
//prompt a choice between 'rock ', ' paper ', ' scissors'
//change string to lowercase
//store value in humanSelection
//check var in console.log


//create var humanScore and computerScore
//initialize score to 0


//create a play round loop
//compare humanSelection and computerSelection
//increment score by one
//if score = 5 for either, then the game ends
