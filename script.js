// Create function, getComputerChoice to 
//return a string value of rock paper or scissors.

//Use math.random to generate a number multiplied by 100
//Convert to a whole number and divide them out by 3 for each choice.
function getComputerChoice(){
    let numGenerator = Math.floor(Math.random() * 100);
        if(numGenerator < 33){
            return "rock";
        } else if(numGenerator < 66){
            return "scissors";
        } else{
            return "paper";
        }
}
