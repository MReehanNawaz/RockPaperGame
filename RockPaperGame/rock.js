// Game choices
const choices = ["rock", "paper", "scissors"];

// Get buttons
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

// Get score elements
const userScoreEl = document.querySelector(".scc");
const compScoreEl = document.querySelector(".ll");

let userScore = 0;
let compScore = 0;
let gameInterval = null;

// Emojis as choices
const emojiToChoice = {
    "👊": "rock",
    "🖐": "paper",
    "✌": "scissors"
};

// Get user choice from emoji
function getUserChoiceFromEmoji(btnId) {
    if (btnId === "start") return "rock";
    if (btnId === "stop") return "paper";
    if (btnId === "reset") return "scissors";
}

// Get random computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "draw";
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "user";
    }
    return "computer";
}

// Play a round
function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    if (result === "user") {
        userScore++;
    } else if (result === "computer") {
        compScore++;
    }

    updateScores();
}

// Update score display
function updateScores() {
    userScoreEl.textContent = `: ${userScore}`;
    compScoreEl.textContent = `: ${compScore}`;
}

// Reset scores
function resetGame() {
    userScore = 0;
    compScore = 0;
    updateScores();
}

// Event listeners
startBtn.addEventListener("click", () => {
    playRound("rock");
});

stopBtn.addEventListener("click", () => {
    playRound("paper");
});

resetBtn.addEventListener("click", () => {
    playRound("scissors");
});

// Optional: Double-click reset button to reset scores
resetBtn.addEventListener("dblclick", resetGame);