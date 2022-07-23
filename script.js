const diceImage1 = document.querySelector(".dice .img1");
const diceImage2 = document.querySelector(".dice .img2");
const playerWins = document.querySelector("h1");
const reloadBtn = document.querySelector(".btn");

reloadBtn.addEventListener("click", () => {
    document.location.reload(true);

})

let diceArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

let randomNumber1 = Math.floor(Math.random() * 6);
let randomNumber2 = Math.floor(Math.random() * 6);


function getDice() {
    diceImage1.setAttribute("src", diceArray[randomNumber1]);
    diceImage2.setAttribute("src", diceArray[randomNumber2]);

    if (randomNumber1 > randomNumber2) {
        playerWins.innerHTML = "Player 1 Wins!"
    } else if (randomNumber2 > randomNumber1) {
        playerWins.innerHTML = "Player 2 Wins!"
    } else {
        playerWins.innerHTML = "Draw!"
    }
}

getDice();