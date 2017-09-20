// Hi, I'm a comment. When you run this file I will be completely ignored.
// Comments help others and, more importantly, yourself make sense of your code.
// your JavaScript code goes here!
console.log("Hello Ignite!");
/*var readyToPlay = confirm("Do you want to play RPS?");
if(readyToPlay) {
    var userChoice = prompt("Choose rock, paper, scissors?");
    var computerChoice = "rock";
    
    console.log("Game on!");
    
    //win - computer rock && user paper
    if(userChoice === "paper") {
         console.log("User winners!"); 
    }
    
    //lose - computer rock && user scissors
    if(userChoice === "scissors") {
         console.log("Computer winners!"); 
    }
    
    //draw - computer rock && user rock
    if(userChoice === "rock") {
         console.log("Its a Draw!"); 
    }
    
}*/
var readyToPlay = confirm("Do you want to play RPS?");
if (readyToPlay) {
    var userChoice = prompt("Choose rock, paper, scissors?");
    var randomNumber = Math.floor(Math.random() * 3);
    var computerChoice;
    // if 0 rock
    // if 1 paper
    // if 2 rock
    if (randomNumber === 0) {
        computerChoice = "rock";
    }
    else if (randomNumber === 1) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    if (userChoice === computerChoice) {
        console.log("Its a Tie");
    }
    else if (userChoice === "scissors" && computerChoice === "paper") {
        console.log("Computer Wins!");
    }
    else if (userChoice === "scissors" && computerChoice === "rock") {
        console.log("Computer Wins!");
    }
    else if (userChoice === "paper" && computerChoice === "scissors") {
        console.log("Computer Wins!");
    }
    else if (userChoice === "paper" && computerChoice === "rock") {
        console.log("User Wins!");
    }
    else if (userChoice === "rock" && computerChoice === "paper") {
        console.log("User Wins!");
    }
    else if (userChoice === "rock" && computerChoice === "scissors") {
        console.log("User Wins!");
    }
}