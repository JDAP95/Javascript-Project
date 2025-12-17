const STORAGE_KEY = 'catFavorites';

export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveFavorites(favs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

export function addFavorite(id, url) {
    const favs = getFavorites();
    if (!favs.some(f => f.id === id)) {
        favs.push({ id, url});
        saveFavorites(favs);
    }
}

export function removeFavorite(id) {
    let favs = getFavorites();
    favs = favs.filter(f => f.id !== id);
    saveFavorites(favs);
}

export function isFavorite(id) {
    const favs = getFavorites();
    return favs.some(f => f.id === id);
}