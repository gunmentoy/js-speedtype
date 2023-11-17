window.addEventListener("load", init);

// global variables
let time = 3;
let score = 0;
let isPlaying;

// DOM elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// words array
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
  "apple",
  "banana",
  "chocolate",
  "elephant",
  "fireworks",
  "guitar",
  "happiness",
  "island",
  "jungle",
  "kangaroo",
  "lemon",
  "mountain",
  "nightmare",
  "ocean",
  "piano",
  "queen",
  "rainbow",
  "sunset",
  "tiger",
  "umbrella",
  "volcano",
  "waterfall",
  "xylophone",
  "yoga",
  "zebra",
];

// initialize game
function init() {
  // load word from array
  showWord(words);
  // start matching on word input
  wordInput.addEventListener("input", startMatch);
  // call countdown every second
  setInterval(countdown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

// start matching words
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 4;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // if score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// pick and show random word
function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // output random word
  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countdown() {
  // make sure time is not run out
  if (time > 0) {
    // decrement
    time--;
  } else if (time === 0) {
    // game is over
    isPlaying = false;
  }
  // show time
  timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over :(";
    score = -1;
  }
}
