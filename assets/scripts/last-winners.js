var gameImages = {
    "Aviator": "assets/midia/image/games/aviator.png",
    "Roleta BR": "assets/midia/image/games/RoletaBrasileria.png",
    "BacBO": "assets/midia/image/games/BacBo.png"
}

var gameLinks = {
    "Aviator": "#",
    "Roleta BR": "#",
    "BacBO": "#",
}

var nomesBrasileiros = ["Ana", "Car", "Ferna", "Lu", "Juli", "Rica", "Cam", "Edua", "Isab", "Ti", "Ama", "Gabr", "Lari", "Fel", "Mari", "Pe", "Vane", "Rodr", "Ren", "Gust", "Patrí", "Raf", "Bia", "Di", "Th", "Cristi", "Ca", "Mat", "Tati", "Fá", "Prisc", "Viníc", "Ana", "Luci", "Natá", "Le", "Suz", "Br", "Leti", "Henri", "Raq", "Marc", "Al", "Dan", "Hel", "An", "Beat"];

var nomesComAsteriscos = nomesBrasileiros.map(function (nome) {
    return nome + '***';
});

var userNames = nomesComAsteriscos.slice(0, 50);

console.log(userNames);

var availableGameNames = Object.keys(gameImages);

function getRandomWinValue() {
    var minValue = 10;
    var maxValue = 249;
    var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    return `R$${randomValue},00`;
}

function createLwContainerWithDelay(gameName, gameImageUrl, gameLink) {

    var randomUserName = userNames[Math.floor(Math.random() * userNames.length)];
    var randomWinValue = getRandomWinValue();

    var lwContainer = document.createElement("div");
    lwContainer.classList.add("lw-container");

    lwContainer.innerHTML = `
        <div class="lw-image-container">
            <img id="lw-card-game" class="lw-card-game" src="${gameImageUrl}" alt="${gameName} Image">
        </div>
        <div>
            <p class="lw-title">Jogo</p>
            <p id="lw-game-name">${gameName}</p>
        </div>
        <div>
            <p class="lw-title">Usuário</p>
            <p id="lw-user">${randomUserName}</p>
        </div>
        <div>
            <p class="lw-title">Ganhos</p>
            <p id="lw-value" class="lw-value">${randomWinValue}</p>
        </div>
    `;

    var lwCardGame = lwContainer.querySelector(".lw-card-game");
    var lwImageContainer = lwContainer.querySelector(".lw-image-container");
    lwImageContainer.addEventListener("mouseenter", function () {
        lwCardGame.classList.add("zoom");
    });

    lwImageContainer.addEventListener("mouseleave", function () {
        lwCardGame.classList.remove("zoom");
    });

    document.getElementById("latest-winner-container").appendChild(lwContainer);

    lwContainer.offsetHeight;
    lwContainer.classList.add("show");
}

function removeAndCreateNew() {
    var lwContainers = document.getElementsByClassName("lw-container");
    if (lwContainers.length > 2) {
        var containerToRemove = lwContainers[0];
        containerToRemove.classList.add("hide");

        setTimeout(function () {
            containerToRemove.remove();
        }, 1000);
    }

    availableGameNames = availableGameNames.sort(() => Math.random() - 0.5);

    setTimeout(function () {
        var gameName = availableGameNames[0];
        createLwContainerWithDelay(gameName, gameImages[gameName], gameLinks[gameName]);

        setTimeout(removeAndCreateNew, 2000);
    }, 3100);
}

var style = document.createElement("style");
style.innerHTML = `
            .lw-card-game {
                transition: transform 0.3s ease-in-out;
            }

            .lw-card-game.zoom {
                transform: scale(1.1);
            }
        `;
document.head.appendChild(style);
removeAndCreateNew();