//Function of a number divisible by two or three
function isDivisibleBy2And3(number) {
    return number % 2 === 0 && number % 3 === 0;
}

// Demonstration
var numberToCheck = 21;
if (isDivisibleBy2And3(numberToCheck)) {
    console.log(numberToCheck + " is divisible by both 2 and 3.");
} else {
    console.log(numberToCheck + " is not divisible by both 2 and 3.");
}
