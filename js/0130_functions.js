/*
function greeting(){
    console.log('Hello!');
}

greeting();
*/
/*
function check(){
    console.log('How are you doing?');
}

function greeting(name){
    console.log(`Hello ${name}!`);
    check();
}

greeting('Jane');
greeting('John');
*/

//// Consider 70 as the age to retire. Write a function that takes age as an input and calculates the number of // days/weeks/months/ left until retirement.
////assumption: 365 days in a year, 52 weeks in a year, 12 months in a year
//// you have 730 days/104 weeks/ 24 months until retirement!

function timeTillRetirement(age) {
    years_left = 70 - age;
    days_left = years_left*365;
    months_left = years_left*12;
    weeks_left = years_left*52;

    console.log(`You have ${days_left} days/ ${weeks_left} weeks/ ${months_left} months left!`);
}

timeTillRetirement(57);

//// Grade Calculator 
//// Take 3 inputs from the user using alert boxes. Ex: Enter math score. 
//// average<70 --> C; greater than 70 and less than 90 --> B; A
//// Display/ Output the grade in an alert box


/*
function gradeCalculator() {
    const first_score = parseInt(prompt('Enter your first score'));
    const second_score = parseInt(prompt('Enter your second score'));
    const third_score = parseInt(prompt('Enter your third score'));

    const ave_score = (first_score+second_score+third_score)/3;

    if(ave_score<70) {
        alert('C Grade');
    }else if(ave_score>=70 && ave_score<90) {
        alert('B Grade');
    }else {
        alert('A Grade');
    }87
}

gradeCalculator();
*/

//// Savings Calculator

function calculateTax(salary) {
    return 0.30*salary;
}

function calculateSavings(salary, rent, expense) {
    const tax_deductions = calculateTax(salary);
    total_expenses = tax_deductions+rent+expense;
    net_savings = salary - total_expenses;
    console.log(`Salary: ${salary} Savings:${net_savings}`);
}

calculateSavings(3000, 850, 1200);