// Function of coin toss
function tossCoin(userMove) {
    var choices = ['heads', 'tails'];
    var computerMove = choices[Math.floor(Math.random() * choices.length)];

    var resultElement = document.getElementById('result');

    if (userMove === computerMove) {
        // If computer picks same as user
        resultElement.textContent = "You picked " + userMove + ", Computer picked " + computerMove + ". It's a tie!";
    } else if (userMove === 'heads' && computerMove === 'tails') {
        // If user picks heads and comp picks tails
        resultElement.textContent = "You picked heads, Computer picked tails. You Win!";
    } else if (userMove === 'tails' && computerMove === 'heads') {
        // If user picks tails and comp picks heads
        resultElement.textContent = "You picked tails, Computer picked heads. You Lose!";
    }
}
