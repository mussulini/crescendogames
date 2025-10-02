document.addEventListener("DOMContentLoaded", () => {

    const data = [
        {   name: "Carnival Shooter", 
            summary: "Step Right Up to the Wildest Spin on the Midway!",
            banner: "assets/images/carnival/carnival-442x310.png",
            thumbnail: "assets/images/carnival/carnival-200x200.png",
            game: "Adventure", date: "2025-10-02",
            playLink: "https://games.crescendoslot.com/CarnivalShooter/?lang=en-us&fun=1&op=crescendogames", pageLink: "carnival.html"
        },
        {   name: "Pirate's Bounty", 
            summary: "Ahoy, adventurers! Set sail for treasure!",
            banner: "assets/images/pirates/pirates-442x310.png",
            thumbnail: "assets/images/pirates/pirates-200x200.png",
            game: "Adventure", date: "2025-09-02",
            playLink: "https://games.crescendoslot.com/PiratesBounty/?lang=en-us&fun=1&op=crescendogames", pageLink: "pirates.html"
        },
        {   name: "Zap Keno", 
            summary: "Your fast lane to fun!",
            banner: "assets/images/zap/zap-442x310.png",
            thumbnail: "assets/images/zap/zap-200x200.jpg",
            game: "Adventure", date: "2025-05-13",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=zapkeno", pageLink: "zap.html"
        },
        {   name: "Mines of Mystery", 
            summary: "Unearth Riches in Mines of Mystery",
            banner: "assets/images/mines/mines-442x310.png",
            thumbnail: "assets/images/mines/mines-200x200.jpg",
            game: "Adventure", date: "2025-05-13",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=MinesOfMystery", pageLink: "mines.html"
        },
        {   name: "Goemon", 
            summary: "Hero's Ascent, Fortune's Descent - Ninja's Way!",
            banner: "assets/images/goemon/game-goemon.png",
            thumbnail: "assets/images/goemon/game-thumb-goemon.png",
            game: "Adventure", date: "2025-02-20",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=Goemon", pageLink: "goemon.html"
        },
        {   name: "Lo De", 
            summary: "Bet Big, Win Bigger <br>Choose the right lottery!",
            banner: "assets/images/lode/lode-game.png",
            thumbnail: "assets/images/lode/lode-game-thumb.png",
            game: "Casino / Lottery", date: "2024-08-22",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=LoDe", pageLink: "lode.html"
        },
        {   name: "Hi Lo", 
            summary: "Steer you win! Your card, your play, your way!",
            banner: "assets/images/hilo/hilo-game.png",
            thumbnail: "assets/images/hilo/hilo-game-thumb.png",
            game: "Casino / Card Game", date: "2024-04-30",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=HiLo", pageLink: "hilo.html"
        },
        {   name: "Crypto Crash", 
            summary: "Defy the odds, test your wits, and soar up your win!",
            banner: "assets/images/cc/crypto-crash-game.png",
            thumbnail: "assets/images/cc/crypto-crash-game-thumb.png",
            game: "Casino / Risk-Reward", date: "2023-11-14",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=CryptoCrash", pageLink: "crypto-crash.html"
        },
        {   name: "Crypto Roulette", 
            summary: "Simplifies winning with decisive acts!",
            banner: "assets/images/cr/crypto-roulette-game.png",
            thumbnail: "assets/images/cr/crypto-roulette-game-thumb.png",
            game: "Casino / Roulette", date: "2023-11-28",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=CryptoRoulette", pageLink: "crypto-roulette.html"
        },
        {   name: "Snow Sweeper", 
            summary: "Uncover the icy secrets, win the frozen adventure!",
            banner: "assets/images/ss/snow-sweeper-game.png",
            thumbnail: "assets/images/ss/snow-sweeper-game-thumb.png",
            game: "Puzzle / Adventure", date: "2024-04-02",
            playLink: "https://games.crescendoops.com/launcher/?mode=try&vendor=crescendogames&game=Snowsweeper", pageLink: "snow-sweeper.html"
        }
    ];

    const searchInput = document.getElementById('searchInput');
    const gameFilter = document.getElementById('gameFilter');
    const sortBy = document.getElementById('sortBy');
    const cardContainer = document.getElementById('cardContainer');
    const noResults = document.getElementById('noResults');

    function renderCards(filteredData) {
        cardContainer.innerHTML = '';

        if (filteredData.length === 0) {
        noResults.style.display = 'block';
        return;
        }

        noResults.style.display = 'none';

        filteredData.forEach(item => {
        const card = `
            <div class="col-4">
                <div class="card-game">
                    <div class="card-img-wrapper">
                        <img src="${item.banner}" class="card-img-top" alt="${item.name}">
                        <div class="card-img-overlay">
                            <a class="btn btn-primary" role="button" href="${item.playLink}" target="_blank" rel="noopener">
                                Play Now
                            </a>
                            <a href="${item.pageLink}" class="btn btn-outline-light" role="button">
                                Details
                            </a>
                        </div>
                    </div>
                    <div class="card-body">
                        <img src="${item.thumbnail}" class="game-thumbnail" alt="${item.name}">
                        <div class="game-details">
                            <h5 class="card-title">${item.name}</h5>
                            <p class="card-text">${item.summary}</p>
                        </div>
                    </div>
                    <span class="visually-hidden">${item.game}</span>
                    <span class="visually-hidden">${item.date}</span>
                </div>
            </div>
        `;
        cardContainer.insertAdjacentHTML('beforeend', card);
        });
    }

    function applyFilters() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedGame = gameFilter.value;
        const sortOption = sortBy.value;

        let filtered = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm) &&
        (selectedGame === "" || item.game === selectedGame)
        );

        if (sortOption === "az") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortOption === "newest") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortOption === "oldest") {
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        renderCards(filtered);
    }

    searchInput.addEventListener('input', applyFilters);
    gameFilter.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applyFilters);

    // Initial render
    applyFilters();

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
