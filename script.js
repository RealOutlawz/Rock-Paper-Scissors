/*Created function named playGame to store all
functions in */
function playGame(){

    //Initialize computer and users scores to 0
    let humanScore = 0;
    let computerScore = 0;

    //Loops through the game 5 times before terminating.
    for ( let i = 0; i < 5; i++){
        //create constant variables for the functions and called them
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    /*Create function, getComputerChoice to return a string
    value of rock paper or scissors. Use math.random to
    generate a number multiplied by 100 Convert to a 
    hole number and divide them out by 3 for each choice. */
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
    
    /*Use prompt to get user's choice and run it through
    some if statents to make sure their input is valid.*/
    function getHumanChoice(){
        let userChoice = prompt("Please enter your choice of Rock, Paper, or Scissors: ")
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
            console.log("You entered an invalid choice. Please check your spelling and try again.");
            getHumanChoice();
        }
    }


    /* Get user and computer choices, and put them as argument
    against each other to determine the winnner and update the
    scores.
    */
    function playRound(humanChoice, computerChoice){
        if(humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock"){
            console.log("The computer won this round!");
            computerScore++;
        } else if(humanChoice === "Rock" && computerChoice === "Scissors" ||
                humanChoice === "Paper" && computerChoice === "Rock" ||
                humanChoice === "Scissors" && computerChoice === "Paper"){
                    console.log("You won this round!");
                    humanScore++;
        } else if(humanChoice === computerChoice){
            console.log("Tied! No winners, try again!")
        }else if(humanChoice === null){
            return 0;
        } 
    }

    console.log("Your Score: " + humanScore);
    console.log("Computer Score: " + computerScore); 

    if(humanScore > computerScore){
    console.log("You won!")
    } else if(humanScore < computerScore){
    console.log("You lost!")
    } else {
    console.log("You and the computer tied!")
    }
}
playGame();