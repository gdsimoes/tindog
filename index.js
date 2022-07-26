import dogs from "./data.js";
import Dog from "./Dog.js";

// Populate article with first dog
const dogArr = dogs.map((dog) => new Dog(dog));
let dogIndex = 0;
dogArr[dogIndex].populateElement();

// Buttons functionality
const buttons = document.querySelectorAll(".swipe-button");
function swiper(event) {
    const hasBeenLiked = event.currentTarget.classList.contains("accept");

    // Update dog element
    dogArr[dogIndex].hasBeenLiked = hasBeenLiked;
    dogArr[dogIndex].hasBeenSwiped = true;

    // Show badge
    let badge;
    if (hasBeenLiked) {
        badge = document.querySelector(".like");
    } else {
        badge = document.querySelector(".nope");
    }
    badge.style.opacity = "1";

    // Disable buttons
    for (const button of buttons) {
        button.disabled = true;
    }

    // After 1 second remove badge and go to next dog
    setTimeout(() => {
        badge.style.opacity = "0";
        dogIndex = (dogIndex + 1) % dogArr.length;
        dogArr[dogIndex].populateElement();

        // Enable buttons
        for (const button of buttons) {
            button.disabled = false;
        }
    }, 1000);
}

for (const button of buttons) {
    button.addEventListener("click", swiper);
}
