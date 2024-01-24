/*
if (true) {
    console.log('true');
} else {
    console.log('false');
}

*/


//// Checking driver eligibility ////


/*
const age = Number.parseInt(prompt('Enter your age'));
console.log(typeof age);

if(age >= 16) {
    alert('Eligible to drive');
} else if ( age >= 14) {
    alert('Almost there');
} else {
    alert('Not eligible to drive')
}
*/



//// Truthy and Falsy Values////
/*
if(4) {
    console.log('Truthy value');
}

if(0) {
    console.log('Checking 0');
}

// Falsy values -- 0, '', NaN, undefined, null -->
// everything else is truthy
*/





//// Ternary Operators ////
/*
const res = true? 'truthy':'falsy'
console.log(res);
*/


//// Coin-flip game using random number generator////
/*
const randNum = Math.random();
console.log(randNum);

if (randNum < 0.5) {
    console.log('Tails');
} else {
    console.log('Heads');
} 

const coin = randNum < 0.5? 'Tails':'Heads'
console.log(coin);
*/

//// Switch Statement ////
//Write a program to identify the day of the week based on the number given. Sunday - 0; Saturday - 6
let day = 3;
switch(day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Invalid day. Enter a number between 0 and 6');
}
