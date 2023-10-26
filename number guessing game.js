let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let rv = Math.ceil(Math.random() * 100);

function checkGuess() {
    let inval = parseInt(userInput.value);
    if (inval > rv) {
        gameResult.textContent = "Too high, try again."
        gameResult.style.backgroundColor = "#1e217c"
    } else if (inval < rv) {
        gameResult.textContent = "Too low, try again."
        gameResult.style.backgroundColor = "#1e217c"
    } else if (inval === rv) {
        gameResult.textContent = "Conragulations, you won the game."
        gameResult.style.backgroundColor = "green"

    } else {
        gameResult.textContent = "Provide proper input."
        gameResult.style.backgroundColor = "Red"
    }


}