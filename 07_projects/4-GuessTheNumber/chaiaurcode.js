let subtBtn = document.getElementById("subt");

let correctNumber = Math.floor(Math.random() * 100) + 1;
let totalNumberOfGuesses = 10;
let previousGuesses = [];

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let userGuess = Number(document.getElementById("guessField").value);
    let output = "";
    const guessDisplay = document.querySelector(".guesses");
    const messageDisplay = document.querySelector(".lowOrHi");
    const remainingDisplay = document.querySelector(".lastResult");

    // Store previous guess
    previousGuesses.push(userGuess);
    guessDisplay.innerText = previousGuesses.join(", ");

    // Game logic
    if (userGuess === correctNumber) {
        output = `🎉 Congratulations! You guessed the correct number: ${correctNumber}`;
        gameEnd(true);
    } else if (userGuess < correctNumber) {
        output = `Too Low! Try again.`;
        totalNumberOfGuesses--;
    } else if (userGuess > correctNumber) {
        output = `Too High! Try again.`;
        totalNumberOfGuesses--;
    }

    // Update message
    messageDisplay.innerText = output;
    remainingDisplay.innerText = totalNumberOfGuesses;

    // Disable input if guesses exhausted
    if (totalNumberOfGuesses === 0 && userGuess !== correctNumber) {
        messageDisplay.innerText = `😔 Game Over! The correct number was ${correctNumber}`;
        gameEnd(false);
    }

    // Clear input after guess
    document.getElementById("guessField").value = "";
});

function gameEnd(won) {
    document.getElementById("guessField").disabled = true;
    document.getElementById("subt").disabled = true;

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again 🔁";
    restartBtn.style.marginTop = "20px";
    restartBtn.style.padding = "10px 15px";
    restartBtn.style.border = "none";
    restartBtn.style.background = "#00c853";
    restartBtn.style.color = "#fff";
    restartBtn.style.fontWeight = "bold";
    restartBtn.style.borderRadius = "8px";
    restartBtn.style.cursor = "pointer";

    document.querySelector("#wrapper").appendChild(restartBtn);

    restartBtn.addEventListener("click", () => {
        location.reload(); // Refresh page
    });
}
