let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let compRez;
    const compChoice = Math.floor(Math.random() * 3) + 1;
    if (compChoice === 1){
        compRez = "rock";
    }else if(compChoice === 2){
        compRez = "paper";
    }else{
        compRez = "scissors";
    }
    console.log(compRez);
    return compRez;
} 

function getHumanChoice(){
    let userRez;
    let userChoice = prompt('Rock, paper or scissors?');
    if (userChoice.toLowerCase() === "rock"){
        userRez = "rock";
    }else if(userChoice.toLowerCase() === "paper"){
        userRez = "paper";
    }else{
        userRez = "scissors";
    }
    console.log(userRez);
    return userRez;
}
let drawCount = 0;

function playGame(){

    for(let i=0;i<5;i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        
        
        function playRound(humanSelection, computerSelection){
            if (humanSelection === 'rock' && computerSelection === 'paper'){
                alert('You lose! Paper beats Rock!');
                console.log('Computer wins!');
                computerScore++;
            }else if (humanSelection === 'rock' && computerSelection === 'scissors'){
                alert('You Win! Rock beats Scissors!');
                console.log('You win!');
                humanScore++;
            }else if (humanSelection === 'paper' && computerSelection === 'rock'){
                alert('You Win! Paper beats Rock!');
                console.log('You win!');
                humanScore++;
            }else if (humanSelection === 'paper' && computerSelection === 'scissors'){
                alert('You Lose! Scissors beat Paper!');
                console.log('Computer wins!');
                computerScore++;
            }else if (humanSelection === 'scissors' && computerSelection === 'rock'){
                alert('You Lose! Rock beats Scissors!');
                console.log('Computer wins!');
                computerScore++;
            }else if (humanSelection === 'scissors' && computerSelection === 'paper'){
                alert('You Win! Scissors beat Paper!');
                console.log('You win!');
                humanScore++;
            }else{
                alert('Draw.')
                console.log('Draw.');
                drawCount++;
            }  
            console.log('Human Score:', humanScore);
            console.log('Computer Score', computerScore);
            console.log('Draw count', drawCount);
        }
        playRound(humanSelection, computerSelection);
    }
}
playGame();