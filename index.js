// Beginning of correct code



// End of correct code
// <===============================================================>
// Start of new code
let guesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let userWins = (document).getElementsByClassName("userWins");
let userLoses = (document).getElementsByClassName("userLoses");
let guessesLeft = (document).getElementsByClassName("guessesLeft");
let answers = (document).getElementsByClassName("answers");
let userGuess = guesses[Math.floor(Math.random() * guesses.length)];
let guessesUsed = [];

function random() {
    answers = guesses[Math.floor(Math.random() * guesses.length)];
    guessesLeft = 10;
    guessesUsed = [];
};

(document).addEventListener("keypress", function (event) {

    let guesses = event.keypress;

    if (guesses === answers) {
        wins++;
        random();
        alert("Nice one Psychic. You win!");
    }
    else {
        guessesLeft--;
    }
    if (guessesLeft == 0) {
        losses++;
        random();
        alert("You lost");
    }

    userWins.text = "user wins: " + userWins;
    userLoses.text = "user loses: " + userLoses;
    userGuess.text = "number of guesses used: " + guessesUsed;
    guessesUsed.text = "guesses left: " + guessesLeft;

    guessesUsed.push(guesses);

});

// End of new code
// <===============================================================>
// Original code below
// Not complete/functional yet

// $(document).ready(function () {

//     // let guess = point
//     let newGuess = Math.floor(guess);

//     let userWins = document.querySelector(".user-wins");
//     userWins.textContent = "I win";



//     if (newGuess += guess) {
//         yourReturn = ""
//     }
//     else {
//         if (newGuess += guess) {
//             yourReturn = ""
//         }
//         else {
//             yourReturn = ""
//         }
//     }
// });
// End of original code