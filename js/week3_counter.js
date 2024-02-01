// My attempt for a counter using JS. It was much easier through HTML //
let counterValue = 0;

function updateCounter(){
    console.log("Counter: " + counterValue);
}

function increment() {
    counterValue++;
    updateCounter();
}

function decrement() {
    counterValue--;
    updateCounter();
}

function clearCounter() {
    counterValue = 0;
    updateCounter();
}

