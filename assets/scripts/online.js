function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", function () {
    const randomNumber = getRandomNumber(80, 250);
    const descriptionElement = document.querySelector(".container-1-text");
    descriptionElement.textContent = `${randomNumber} JOGADORES ONLINE`;
});