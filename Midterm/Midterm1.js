// Function of coin toss
function tossCoin(userChoice) {
    var choices = ['heads', 'tails'];
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];

    var resultElement = document.getElementById('result');

    if (userChoice === computerChoice) {
        // If computer picks same as user
        resultElement.textContent = "You picked " + userChoice + ", Computer picked " + computerChoice + " – It's a tie!";
    } else if (userChoice === 'heads' && computerChoice === 'tails') {
        // If user picks heads and comp picks tails
        resultElement.textContent = "You picked heads, Computer picked tails – You Win!";
    } else if (userChoice === 'tails' && computerChoice === 'heads') {
        // If user picks tails and comp picks heads
        resultElement.textContent = "You picked tails, Computer picked heads – You Lose!";
    }
}
