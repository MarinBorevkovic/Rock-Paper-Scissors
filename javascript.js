let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    const items = ['rock', 'paper', 'scissors']
    return items[Math.floor(Math.random() * items.length)]
} 

function playGame(){
        document.getElementById("rock").addEventListener("click", function() {
            const computerSelection = getComputerChoice();
            const humanSelection = 'rock';
            playRound(humanSelection, computerSelection);
            gameEnd();
        });

        document.getElementById("paper").addEventListener("click", function() {
            const computerSelection = getComputerChoice();
            const humanSelection = 'paper';
            playRound(humanSelection, computerSelection);
            gameEnd();
        });
    
        document.getElementById("scissors").addEventListener("click", function() {
            const computerSelection = getComputerChoice();
            const humanSelection = 'scissors';
            playRound(humanSelection, computerSelection);
            gameEnd();
        });
}

function gameEnd(){
    setTimeout(() => {
        if(humanScore >= 5 || computerScore >= 5){
            document.querySelector('button').disabled = true
            document.querySelector('.game-end').classList.remove('invisible')
            const finalResultText = document.querySelector('#final-result')
        if(humanScore > computerScore){
            finalResultText.textContent = 'You win!'
        }else{
            finalResultText.textContent = 'You lose!'
        }
        }
    },1500)
    document.querySelector('#restart-btn').addEventListener('click', () => {
        location.reload()
    })
}
        
function updateText(result) {
    let msg = ''
    if (result === 'win') {
        humanScore++
        msg = 'You win!'
    }else if (result === 'lose'){
        computerScore++
        msg = 'You lose!'
    }else {
        msg = 'It\'s a tie!'
    }

    const liveScore = document.querySelector('h2 span')
    liveScore.textContent = `${humanScore} - ${computerScore}`

    const liveText = document.querySelector('#result')
    liveText.textContent = msg
}


playGame();

function playRound(humanSelection, computerSelection){
    if(humanSelection === 'rock' && computerSelection === 'paper' ||
        humanSelection === 'paper' && computerSelection === 'rock' ||
        humanSelection === 'scissors' && computerSelection === 'paper'){
            const result = 'win'
            updateText(result)
    }else if(humanSelection === computerSelection){
        const result = 'tie'
        updateText(result)
    }else {
        const result = 'lose'
        updateText(result)
    }
}


