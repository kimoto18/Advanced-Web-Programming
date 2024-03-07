//Problem 1
let playGame = true;

while (playGame) {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 10;
    let userWins = false;

    while (attempts > 0) {
        // Ask user to guess a number
        let userGuess = parseInt(prompt(`Guess a number between 1 and 100. You have ${attempts} attempts:`));

        // Check if user's guess is correct
        if (userGuess === randomNumber) {
            userWins = true;
            break;
        } else {
            // Check if the guess is too high or too low
            if (userGuess > randomNumber) {
                alert("Too high! Try again.");
            } else {
                alert("Too low! Try again.");
            }
            attempts--;
        }
    }

    // Check if user won or lost
    if (userWins) {
        alert("Congratulations! You guessed the correct number!");
    } else {
        alert(`Sorry, you lost. The correct number was ${randomNumber}.`);
    }

    // Ask if the user wants to play again
    let playAgain = prompt("Do you want to play again? (Yes/No)").toLowerCase();
    if (playAgain !== 'yes') {
        playGame = false;
    }
}

alert("Thanks for playing!");

//Problem 2
function printMultiplesOf5(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] > 150) {
            // Continue to the next iteration if the value is greater than 150
            continue;
        } else if (list[i] > 500) {
            // Break the loop if the value is greater than 500
            break;
        } else if (list[i] % 5 === 0) {
            // Print the item if it is divisible by 5
            console.log(list[i]);
        }
    }
}

// Example Input
const list1 = [12, 75, 150, 180, 145, 525, 50];

// Call the function with the example input
printMultiplesOf5(list1);

//Problem 3
function displayFactors(target) {
    for (let i = 1; i <= target; i++) {
        let factors = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                factors.push(j);
            }
        }
        console.log(`Factors of ${i}: [${factors.join(', ')}]`);
    }
}

// Ask the user for the target number
const targetNumber = parseInt(prompt("Enter a target number:"));

// Call the function with the user input
displayFactors(targetNumber);

