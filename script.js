const input = document.querySelector('input');
const games = document.querySelectorAll('#games a');

input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();

    games.forEach(game => {
        const name = game.querySelector('img').alt.toLowerCase();

        if (name.includes(searchTerm)) {
            game.style.display = '';
        } else {
            game.style.display = 'none';
        }
    });
});
