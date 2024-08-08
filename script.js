// Create function, getComputerChoice to 
//return a string value of rock paper or scissors.
//Use math.random to generate a number multiplied by 100
//Convert to a whole number and divide them out by 3 for each choice.
function getComputerChoice(){
    let numGenerator = Math.floor(Math.random() * 100);
        if(numGenerator < 33){
            console.log("The computer picked Rock");
            return "Rock";
        } else if(numGenerator < 66){
            console.log("The computer picked Scissors");
            return "Scissors";
        } else{
            console.log("The computer picked Paper");
            return "Paper";
        }
}
let userChoice = prompt("Please enter your choice of Rock, Paper, or Scissors: ")
/*Use prompt to get user's choice and run it through
some if statents to make sure their input is valid.*/
function getHumanChoice(){
    userChoice = userChoice.toLowerCase(); 
    if(userChoice === "rock"){
        console.log("You picked Rock");
        return "Rock";
    } else if(userChoice === "paper"){
        console.log("You picked Paper");
        return "Paper";
    } else if(userChoice === "scissors"){
        console.log("You picked Scissors");
        return "Scissors";
    } else{
        console.log("You enetered an invalid choice. Please check your spelling and try again.");
    }
}






function playGame(){
    //Initialize computer and users scores to 0
    let humanScore = 0;
    let computerScore = 0;

    /* Get user and computer choices, and put them as argument
    against each other to determine the winnner and update the
    scores.
    */
    function playRound(humanChoice, computerChoice){
        if(humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"){
            console.log("The computer has won!");
            computerScore++;
        } else if(humanChoice === "Rock" && computerChoice === "Scissors" ||
                humanChoice === "Paper" && computerChoice === "Rock" ||
                humanChoice === "Scissors" && computerChoice === "Paper"){
                    console.log("You have won!");
                    humanScore++;
        } else if(humanChoice === computerChoice){
            console.log("Tied! No winners, try again!")
        }      
    }
}
//create constant variables for the functions
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
