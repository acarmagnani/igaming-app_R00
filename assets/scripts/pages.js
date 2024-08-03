const gamesPerPage = 9; 
let currentPage = 1;

function showPage(page) {
    const games = document.querySelectorAll('.container-3-g-f');
    const totalPages = Math.ceil(games.length / gamesPerPage);
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    games.forEach((game, index) => {
        game.classList.add('hidden');
        if (index >= (page - 1) * gamesPerPage && index < page * gamesPerPage) {
            game.classList.remove('hidden');
        }
    });

    document.getElementById('prev-page').disabled = (page === 1);
    document.getElementById('next-page').disabled = (page === totalPages);
}

    const premiumGames = document.querySelectorAll('.container-2-g-p .game');
    premiumGames.forEach((game) => {
        game.classList.remove('hidden');
    });

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    const games = document.querySelectorAll('.container-3-g-f');
    const totalPages = Math.ceil(games.length / gamesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);