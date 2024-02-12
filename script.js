"use strict";

const starttitleElement = document.querySelector(".startingtitle");
const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const hmmButton = document.querySelector(".btn--hmm");
const continueButton = document.querySelector(".btn--goon");
const catImg = document.querySelector(".cat-img");
const hmmImg = document.querySelector(".hmm-img");
const secondaryContainer = document.querySelector(".secondary-container");
const startingContainer = document.querySelector(".starting-container");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;
let hmmCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateTitleText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
});

hmmButton.addEventListener("click", function () {
    starttitleElement.innerHTML = "BUT...";
    hmmButton.classList.add("hidden");
    continueButton.classList.remove("hidden");
});

continueButton.addEventListener("click", handleContinueClick);

function handleContinueClick() {
    startingContainer.classList.add("hidden");
    secondaryContainer.classList.remove("hidden");
}

function handleYesClick() {
    titleElement.innerHTML = "Yayyy!! :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.3;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "Are you sure?",
        "Even gudetama is sadge now...",
        "Even Pompompurin has to step in!",
        "Pompompurin ordered the no to be taken out this instance!!",
        "Alright... I respect your wishes..."
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `img/cat-${image}.jpg`;
}

function updateTitleText() {
    titleElement.innerHTML = generateMessage(noCount);
}
