drumButtons = document.querySelectorAll(".drum"); // Creating an array of all "drum" buttons.

for (i = 0; i < drumButtons.length; i++) // Adding mouse click event listener to all ".drum" buttons.
    drumButtons[i].addEventListener("click", handleClick);
addEventListener("keydown", handleKey); // Adding key click event listener.

function handleClick() { // Function that handles mouse click behavior.
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
} 
function handleKey(event) { // Function that handles key click behavior.
    makeSound(event.key);
    buttonAnimation(event.key);
} 
function makeSound(currentEvent) { // Function that makes events make sound.
    switch(currentEvent) {
        case "w":
            tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Unexpected input");
    }
}
function buttonAnimation(currentEvent) {
    activeButton = document.querySelector("." + currentEvent);
    activeButton.classList.add("pressed");
    setTimeout (
        function() {
            activeButton.classList.remove("pressed");
        }, 
        100
    );
}