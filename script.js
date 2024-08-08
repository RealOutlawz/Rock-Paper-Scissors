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
let userChoice = prompt("Pleaase enter your choice of Rock, Paper, or Scissors: ")

function getHumanChoice(userChoice){
    if(userChoice === "Rock"){
        return "Rock";
    } else if(userChoice === "Paper"){
        return "Paper";
    } else if(userChoice === "Scissors"){
        return "Scissors";
    } else{
        alert("You enetered an invalid choice. Please check your spelling and try again.");
    }
}
