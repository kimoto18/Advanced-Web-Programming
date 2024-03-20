document.querySelectorAll('.js-drum').forEach(
    drum_elem => {
        drum_elem.addEventListener('click', () => {
            const button_text = drum_elem.innerHTML;
            //console.log(button_text);
            makeSound(button_text);
            buttonAnimation(button_text);
        });
    }
);

document.addEventListener("keypress", event => {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch(key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation(current_key) {
    if (['w','a','s','d','j','k','l'].includes(current_key)) {
        const active_button = document.querySelector("." + current_key);
        active_button.classList.add("pressed");
        
        setTimeout(() => {
            active_button.classList.remove("pressed");
        }, 100);
        
    }

}

