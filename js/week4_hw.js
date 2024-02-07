
// Creating my function for leap year
function isLeapYear(year) {
    // If the year is divisible by 400, or divisible by 4 but not divisible by 100, it's a leap year
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Test for leap year; should come out as true
console.log(isLeapYear(2000));
console.log(isLeapYear(2016));
console.log(isLeapYear(2024));
console.log(isLeapYear(2028));
console.log(isLeapYear(2044));

// Test for non leap year; should come out as false
console.log(isLeapYear(2007));
console.log(isLeapYear(2011));
console.log(isLeapYear(2018));
console.log(isLeapYear(2023));
console.log(isLeapYear(2042));


function calculateBMI(weight, height) {
    // Calculate BMI value
    const bmi = weight / (height * height);

    // Return the calculated BMI
    return bmi;
}

// Example usage:
const weight = 75; // in kilograms
const height = 1.75; // in meters
const bmi = calculateBMI(weight, height);

console.log(`Your BMI with weight: ${weight} kgs and height ${height} mts is ${bmi.toFixed(2)} kg/sq.mt`);

