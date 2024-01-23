//alert('Hello');
/*
hello 
there 
How
are you
*/

/*
console.log('Hello World');
console.error('Error');
console.warn('Warning');

console.group('Simple group messages');
console.log('Hello World');
console.error('Error');
console.warn('Warning');
console.groupEnd();
*/

// Variable naming conventions
//Only letters, numbers, $, _
emp_name1 = 'Joe'; 
// camelCase
// snake_case
// Don't use reserved keywords. Ex: alert, console
// Better to have short and descriptive names

a = "Joe";
emp_name = "Joe";
name_of_the_employee = "Joe";

// let keyword to create variables
let age = 30;
console.log(age);

let salary;
console.log(salary); //undefined

//console.log(score); //Reference Number
let score = 100;
score = score+10;
score += 10;
score -= 10;
console.log(score);


console.log(points);
var points = 50;

//const GPA = 3.0; // constants should always be initialized
// Use all caps for constants 
//GPA = GPA + 1;

//score = GPA + 1;

// "===" is always reliable for console true and false

// STRINGS
let x = 'test String';
console.log(typeof x);
console.log(x.toUpperCase());
console.log(x.charAt(2)); // returns s from 3rd postions
console.log(x.indexOf('r')); // returns the position of 'r'

console.log(x.substring(0,3)); //retuns tes. Ending index is not inclusive
console.log(x.substring(4)); // returns everything starting at the 4th index
console.log(x.slice(0,5)); 

console.log(x.slice(-11,-3)); 
// slice works with negative indices as well

console.log(x.replace('test', 'new')); 
//replaces test with new

console.log(x.includes('ring'));
console.log(x.split('')); //loose strings

// STRING LITERALS
let y;

const Name = 'Jane';
const Age = 29;
info = 'hello, my name is ' +Name+ ' and I am '+Age+ ' years old';
console.log(info);

info_new = `Hello, my name is ${Name} and I am ${Age} years old`;
console.log(info_new);