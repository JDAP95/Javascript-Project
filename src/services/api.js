import { Breed, Category, Cats } from "../models/cats";

const URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_HheGychxtvcpYbi6G3AZ87zKo10qZ4DLMRHppBPone3WPn73JXRl83A2FR7ogdjl';

async function fetchFromApi(endpoint) {
    try {
        const response = await fetch(`${URL}${endpoint}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        if (!response.ok) {
            console.error(`❌ Error en fetchFromApi (${endpoint}):`, response.statusText);
            return [];
        }
        return await response.json();
    } catch (error) {
        console.error(`❌ Error en fetchFromApi (${endpoint}):`, error);
        return [];
    }
}

export async function getCatsRandom(limit) {
    const data = await fetchFromApi(`/images/search?limit=${limit}`);
    console.log(data);
    return data.map(cat => new Cats(cat));
}

export async function getCatsByBreeds() {
    const data = await fetchFromApi('/breeds');
    // console.log(data);
    return data.map(breed => new Breed(breed));
}

export async function getCategories() {
    const data = await fetchFromApi('/categories');
    return data.map(category => new Category(category));
}

export async function getCatsByCategory(limit, categoryId) {
    const data = await fetchFromApi(`/images/search?limit=${limit}&category_ids=${categoryId}`);
    return data.map(cat => new Cats(cat));
}

export async function getCatsByExtension(limit, extensions) {
    const data = await fetchFromApi(`/images/search?limit=${limit}&mime_types=${extensions}`);
    return data.map(cat => new Cats(cat));
}