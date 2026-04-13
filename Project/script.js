let pScore = 0;
let cScore = 0;

const emojis = {
    ko: "✊",
    papir: "✋",
    ollo: "✌️"
};

function play(playerChoice) {
    const options = ["ko", "papir", "ollo"];
    const cpuChoice = options[Math.floor(Math.random() * 3)];

    // Elemek lekérése
    const playerHandDisp = document.getElementById("player-hand");
    const cpuHandDisp = document.getElementById("cpu-hand");
    const resultMsg = document.getElementById("result-message");
    const pScoreDisp = document.getElementById("player-score");
    const cScoreDisp = document.getElementById("cpu-score");

    // Kezek frissítése azonnal
    playerHandDisp.innerText = emojis[playerChoice];
    cpuHandDisp.innerText = emojis[cpuChoice];

    // Logika és eredmény meghatározása
    if (playerChoice === cpuChoice) {
        resultMsg.innerText = "DÖNTETLEN!";
        resultMsg.className = "draw";
    } 
    else if (
        (playerChoice === "ko" && cpuChoice === "ollo") ||
        (playerChoice === "papir" && cpuChoice === "ko") ||
        (playerChoice === "ollo" && cpuChoice === "papir")
    ) {
        resultMsg.innerText = "NYERTÉL!";
        resultMsg.className = "win";
        pScore++;
    } 
    else {
        resultMsg.innerText = "VESZTETTÉL!";
        resultMsg.className = "lose";
        cScore++;
    }

    // Pontszám frissítése
    pScoreDisp.innerText = pScore;
    cScoreDisp.innerText = cScore;
}