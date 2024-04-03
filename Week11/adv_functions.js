/*function test_function() {
    console.log('Testing...');
}

test_function();
*/
// Namespace Clash
// const user = "Ryan";

/*
// IIFEs - Immediately Invoked Function Expressions
(function () {
    const user = "John";
    console.log(`Logging the username from an IIFE: ${user}`);
    const hello = () => console.log('Hello from IIFE');
    hello();
})();

let counter = 0;
function add() {
    console += 1;
    console.log('Inside Add');
}

add();
add();
add();
console.log(counter);
*/

/*
const add = (function() {
    let counter = 0;
    return function() {
        counter += 1;
        console.log('Helloe from inner function');
        return counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

// Closure - when an inner function has access to the variables from the outer function even after the outer function has finished executing

// Can also send values to IIFEs
(function(user) {
    console.log(`Hello ${user}`);
})('Ryan');

// Area of a rectangle
(function(len, wid) {
    console.log(len*wid);
})(10, 5);
*/
/*
// EXECUTION CONTEXT - environment that is created by either the JS engine V8 engine(Node JS)

const x = 100;
const y = 50;

function calcSum(n1, n2) {
    const sum = n1 + n2;
    return sum;
}

const sum1 = calcSum(x, y);
const sum2 = calcSum(10, 5);
*/
/*
// When ever a function is invoked, 2 things happen --> 1) a separate EC is created for the function 2) the function is put on a call stack

// CALL STACK
function first(){
    console.log('First...');
}

function second(){
    console.log('Second...');
}

function third(){
    console.log('Third...');
}

first();
second();
third();
*/
/*
function first(){
    console.log('First...');
    second();
}

function second(){
    console.log('Second...');
    third();
}

function third(){
    console.log('Third...');
}

first();
*/