// Beginning of functional code

// End of functional code
// <===============================================================>

// Start of new code
// $(document).ready(function () {

//     let guess = Math.floor(Math.random);
//     let answers = [i, p, j, s, b]; 
// }; 

// $(document).getElementsByClassName("game").innerText = guess;
// attempts --;

// if (win < 1)
// {
//     document.getElementsByClassName
// };
// <===============================================================>
let guesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let userWins = document.getElementsByClassName("userWins");
let userLoses = document.getElementsByClassName("userLoses");
let guessesUsed = document.getElementsByClassName("guessesUsed");
let guessesLeft = document.getElementsByClassName("guessesLeft");
let answers = document.getElementsByClassName("answers");
let userGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
let guessesUsed = [];
function random() {
    answers = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessesLeft = 10;
    lettersUsed = [];
};

document.onkeydown = function (event) {

    let guesses = event.key;

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
        randletter();
        alert("You lost");
    }


    userWinsText.text = "user wins: " + userWins;
    userLosesText.text = "user loses: " + userLoses;
    userGuessText.text = "number of guesses used: " + guessesUsed;
    guessesUsedText.text = "guesses left: " + guessesLeft;

    guessesUsed.push(guesses);

};

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