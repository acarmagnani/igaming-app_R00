document.addEventListener("DOMContentLoaded", function () {
    function getRandomPercentage(min, max) {
        return Math.random() * (max - min) + min;
    }

    function setPercentage(gameId, min, max, className) {
        var percentageBar = document.querySelector('#' + gameId + ' .container-g-percentage-bar');
        if (percentageBar) {  // Verificação adicionada
            var percentage = getRandomPercentage(min, max);
            percentageBar.style.width = percentage + '%';
            percentageBar.textContent = percentage.toFixed(2) + '%'; 
            percentageBar.classList.add(className);
        }
    }

    setPercentage('mines', 90, 93, 'green');
    setPercentage('megaroleta', 93, 99, 'green');
    setPercentage('fortunedragon', 90, 95, 'green');
    setPercentage('fortunetiger', 93, 95, 'green');
    setPercentage('fortunerabbit', 80, 87, 'green');
    setPercentage('fortunemouse', 30, 50, 'yellow');
    setPercentage('fortuneox', 90, 94, 'green');
    setPercentage('fortunetree', 10, 25, 'red');
    setPercentage('icescape', 50, 60, 'green');
    setPercentage('gates', 55, 70, 'yellow');
    setPercentage('penalty', 90, 93, 'green');
    setPercentage('roletabr', 95, 99, 'green');
    setPercentage('autoroleta', 30, 40, 'yellow');
    setPercentage('bacbo', 94, 99, 'green');
    setPercentage('wildape', 50, 60, 'yellow');
    setPercentage('aviator', 96, 99, 'green');
    setPercentage('ninjacrash', 10, 30, 'red');
    setPercentage('cashmania', 85, 92, 'green');
    setPercentage('spaceman', 50, 85, 'green');
    setPercentage('doublefortune', 50, 65, 'yellow');
    setPercentage('sweetbonanza', 87, 93, 'green');
});