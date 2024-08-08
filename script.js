// Create function, getComputerChoice to 
//return a string value of rock paper or scissors.
//Use math.random to generate a number multiplied by 100
//Convert to a whole number and divide them out by 3 for each choice.
function getComputerChoice(){
    let numGenerator = Math.floor(Math.random() * 100);
        if(numGenerator < 33){
            return "Rock";
        } else if(numGenerator < 66){
            return "Scissors";
        } else{
            return "Paper";
        }
}

/*Use prompt to get user's choice and run it through
some if statents to make sure their input is valid.*/
function getHumanChoice(){
    let userChoice = prompt("Please enter your choice of Rock, Paper, or Scissors: ")
    if(userChoice == "Rock"){
        console.log("You picked Rock");
        return "Rock";
    } else if(userChoice == "Paper"){
        console.log("You picked Paper");
        return "Paper";
    } else if(userChoice == "Scissors"){
        console.log("You picked Scissors");
        return "Scissors";
    } else{
        console.log("You enetered an invalid choice. Please check your spelling and try again.");
    }
}

//Initialize computer and users scores to 0
let humanScore = 0;
let computerScore = 0;

/* Get user and computer choices, and put them as argument
against each other to determine the winnner and update the
scores.
*/
function playRound(userChoice, computerChoice){

}