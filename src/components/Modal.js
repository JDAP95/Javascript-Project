import { Button } from "./Button";
import { Container } from "./Container";

export function Modal (breed) {
    const modal = Container('modal-container');
    const btnClose = Button('✖ Close', 'close-modal');
    modal.innerHTML = `
        <div class="overlay">
            <div class="modal">
                ${btnClose.outerHTML}
                <h1>${breed.name ?? 'Unknown'}</h1>
                <p><strong>Origin:</strong> ${breed.origin ?? 'Unknown'} ${breed.country_code ? `(${breed.country_code})` : ''}</p>
                <p><strong>Life Span:</strong> ${breed.life_span ?? 'NaN'} years</p>
                <p><strong>Dog friendly (1-5):</strong> ${breed.dog_friendly ?? 'NaN'}</p>
                <p><strong>Temperament:</strong> ${breed.temperament ?? 'NaN'}</p>
                <p><strong>Description:</strong> ${breed.description ?? 'NaN'}</p>
            </div>
        </div>
    `;

    const closeModal = () => {
        modal.remove();
    };

    modal.querySelector('.overlay').addEventListener('click', closeModal);
    modal.querySelector('.close-modal').addEventListener('click', closeModal);

    return modal;
}