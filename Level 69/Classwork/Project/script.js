// let account = {
//     username: "Luka",
//     balance: 500,
//     isActive: true,
// }

// dot (.) notation
// console.log(account.username)

// let myBtn = document.getElementById("btn")

// console.dir(myBtn)

// let myBtn = document.getElementById("btn")

// myBtn.onclick = function() {
//     myBtn.textContent = "Clicked"
// }

// console.log(Math.floor(5.999999999)) 
// console.log(Math.floor(Math.random() * 10))

// index:      0   1   2   3

const playerMoveDiv = document.getElementById("playerMove");
const options = ["Rock", "Paper", "Scissors"]

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const winnerDisplay = document.getElementById("winner");
const compMove = document.getElementById("compMove")

let playerScore = 0;
let computerScore = 0;

playerMoveDiv.onclick = function(eventObject) {
    let playerChoice = eventObject.target.textContent;
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randomIndex]

    if((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper")) {
        playerScore++;
        playerScoreDisplay.textContent = "Player Score: " + String(playerScore)
        winnerDisplay.textContent = "You won!"
    } else if (playerChoice === computerChoice) {
        winnerDisplay.textContent = "Draw!"
    } else {
        computerScore++;
        computerScoreDisplay.textContent = "Computer Score: " + String(computerScore)
        winnerDisplay.textContent = "Computer won!"
    }
    compMove.textContent = "Computer choice: " + computerChoice;
}