let guesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let userWins = 0;
let userWinsElement = document.querySelector(".userWins");
let userLosesElement = document.querySelector(".userLoses");
let userLoses = 0;
let guessesLeft = document.querySelector(".guessesLeft");
let guessesUsedElement = document.querySelector("#guessesUsed");
let answers = document.querySelector(".answers");
let userGuess = guesses[Math.floor(Math.random() * guesses.length)];
let guessesUsed = [];
let xAmountOfGuessesLeft = 10


function reset() {
    xAmountOfGuessesLeft = 10
    guessesUsed = [];

};

function random() {
    answers = guesses[Math.floor(Math.random() * guesses.length)];
    console.log(answers);
};
random();
// event listenr for keydown
document.addEventListener("keydown", function (event) {
    const guessedLetters = String.fromCharCode(event.keyCode);
    guessesUsed.push(guessedLetters.toLocaleLowerCase());
    guessesUsedElement.textContent = guessesUsed;

// push to guessused array
console.log(guessedLetters);
console.log(guessesUsed);
guesses.textContent = [];
// count the number of turns
// check the answer
    if (guesses === answers) {
        wins++;
        random();
        reset();
    }
    else if(xAmountOfGuessesLeft > 0) {
        --xAmountOfGuessesLeft;    
        guessesLeft.textContent = xAmountOfGuessesLeft;
    } else {
        userLoses++;
        userLosesElement.textContent = userLoses;
        reset();
        random();
    }

    if (userLoses > 6) {
        alert("You have lost!");
    }

});