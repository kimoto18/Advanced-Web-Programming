// setTimeout and setInterval --> web browser

// Takes 2 parameters -> i) function that needs to be executed ii) time after which the function should be executed
/*
setTimeout(function(){
    console.log('Timeout');
    console.log('After Timeout');
}, 3000);

console.log('Not waiting for timeout'); //async
// Callback function --> function that needs to be called after a certain time
*/
/*
timerId = setTimeout(changeText, 3000);

function changeText() {
    document.querySelector('h1').textContent = 'Hello from Callback';
}

document.querySelector('#cancel').addEventListener('click', () => {
    clearTimeout{timerId};
});
*/
/*
// setTimeout --> repeatedly calls a function with a fixed time delay between each call
const intervalId = setInterval(callback_text, 1000, 'Hello');

function callback_text(a){
    console.log(a + ' '+Date.now());
}

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(intervalId);
});
*/

// CHANGE THE BACKGROUND COLOR ALTERNATINGLY
let intervalId;

function startColorChange(){
    if(!intervalId) {
        intervalId = setInterval(changeAlternateColors, 1000);
    }
}

function changeAlternateColors() {
    if(document.body.style.backgroundColor != 'pink') {
        document.body.style,backgroundColor = 'pink';
        document.body.style.color = 'brown';
    } else {
        document.body.style.backgroundColor = 'steelblue';
        document.body.style.color = 'black';
    }
}

document.querySelector('#start').addEventListener('click', startColorChange);

function stopColorChange() {
    console.log(`Interval Id Before Clearing: ${intervalId}`);
    clearInterval(intervalId);
    intervalId = undefined;
    console.log(`Interval Id After ClearingL ${intervalId}`);
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

document.querySelector('#stop').addEventListener('click', stopColorChange);

function changeRandomColors() {
    const random_color = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${random_color}`;
}