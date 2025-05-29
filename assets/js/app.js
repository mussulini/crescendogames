const data = [
    { name: "John Doe", age: 30, game: "chess", joined: "2024-04-20" },
    { name: "Jane Smith", age: 25, game: "go", joined: "2024-06-01" },
    { name: "Emily Johnson", age: 40, game: "poker", joined: "2023-12-15" },
    { name: "Michael Brown", age: 35, game: "chess", joined: "2024-01-10" },
    { name: "Anna Lee", age: 28, game: "go", joined: "2025-02-18" }
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
        <div class="card">
        <h3>${item.name}</h3>
        <p><strong>Game:</strong> ${item.game}</p>
        <p><strong>Joined:</strong> ${item.joined}</p>
        </div>`;
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
    filtered.sort((a, b) => new Date(b.joined) - new Date(a.joined));
    } else if (sortOption === "oldest") {
    filtered.sort((a, b) => new Date(a.joined) - new Date(b.joined));
    }

    renderCards(filtered);
}

searchInput.addEventListener('input', applyFilters);
gameFilter.addEventListener('change', applyFilters);
sortBy.addEventListener('change', applyFilters);

// Initial render
applyFilters();
