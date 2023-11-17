// Global variables
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};
let currentLevel = levels.easy;
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Words array
const words = [
  "hat", "river", "lucky", "statue", "generate", "stubborn", "cocktail", "runaway", "joke", "developer",
  "establishment", "hero", "javascript", "nutrition", "revolver", "echo", "siblings", "investigate", "horrendous",
  "symptom", "laughter", "magic", "master", "space", "definition", "apple", "banana", "chocolate", "elephant",
  "fireworks", "guitar", "happiness", "island", "jungle", "kangaroo", "lemon", "mountain", "nightmare", "ocean",
  "piano", "queen", "rainbow", "sunset", "tiger", "umbrella", "volcano", "waterfall", "xylophone", "yoga", "zebra"
];

// Initialize game
function init() {
  seconds.innerHTML = currentLevel;
  showWord();
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}

// Start matching words
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord();
    wordInput.value = "";
    score++;
  }
  scoreDisplay.innerHTML = score === -1 ? 0 : score;
}

// Match currentWord to wordInput
function matchWords() {
  const isCorrect = wordInput.value === currentWord.innerHTML;
  message.innerHTML = isCorrect ? "correct!" : "";
  return isCorrect;
}

// Pick and show random word
function showWord() {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "game over :( hahah loser!!";
    score = -1;
  }
}

// Set game mode
function setGameMode(mode) {
  currentLevel = levels[mode];
  time = currentLevel;
  seconds.innerHTML = currentLevel;
  score = 0;
  scoreDisplay.innerHTML = score;
  isPlaying = false;
}

// Event listeners
window.addEventListener("load", init);
document.getElementById("easy").addEventListener("click", () => setGameMode("easy"));
document.getElementById("medium").addEventListener("click", () => setGameMode("medium"));
document.getElementById("hard").addEventListener("click", () => setGameMode("hard"));
