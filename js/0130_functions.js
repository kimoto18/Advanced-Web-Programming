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