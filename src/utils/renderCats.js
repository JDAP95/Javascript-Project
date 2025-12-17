import { Button, Container, Img, Modal } from "../components";
import { iconHeartFilled, iconHeartOutline, plusIcon } from "../icons";
import { addFavorite, isFavorite, removeFavorite } from "../services";


export function renderCats({ cats, containerCats, modal, currentIndex, blockSize, mode }) {
    const nextCats = cats.slice(currentIndex, currentIndex + blockSize);


    nextCats.forEach(cat => {
        const containerCat = Container('container-cat');
        const containerCatContent = Container('Container-cat-content');
        const containerCatImg = Container('container-cat-content-img');
        const containerCatTitle = Container('container-cat-content-title');
        const containerCatBtn = Container('container-cat-btn');

        const imageUrl = mode ? (cat.image?.url || '') : (cat.url || '');
        const image = Img(imageUrl, 'Cat', 'cat');

        const favIcon = isFavorite(mode ? cat.image?.id : cat.id) ? iconHeartFilled : iconHeartOutline;
        const btnFav = Button({ html: favIcon }, 'btn-fav');

        btnFav.addEventListener('click', () => {
            if (isFavorite(mode ? cat.image?.id : cat.id)) {
                removeFavorite(mode ? cat.image?.id : cat.id);
                btnFav.innerHTML = iconHeartOutline;
            } else {
                addFavorite(mode ? cat.image?.id : cat.id, mode ? cat.image?.url : cat.url);
                btnFav.innerHTML = iconHeartFilled;
            }
        });

        const hasBreed = (cat.breeds && cat.breeds.length > 0) || mode;
        const btnInfo = Button({ html: plusIcon }, 'info', !hasBreed);

        if (hasBreed) {
            btnInfo.addEventListener('click', () => {
                const breed = cat.breeds ? cat.breeds[0] : cat;

                modal.innerHTML = '';

                modal.appendChild(Modal(breed));
            });
        }

        containerCatImg.appendChild(image);
        containerCatContent.appendChild(containerCatImg);
        if (mode) {
            containerCatTitle.innerHTML = `<h2>${cat.name}</h2>`;
            containerCatContent.appendChild(containerCatTitle);
        }
        containerCatBtn.appendChild(btnFav);
        containerCatBtn.appendChild(btnInfo);

        containerCat.appendChild(containerCatContent);
        containerCat.appendChild(containerCatBtn);

        containerCats.appendChild(containerCat);
    });

    return currentIndex + blockSize;
}