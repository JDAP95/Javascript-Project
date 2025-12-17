import { Button, Container, Img } from "../components";
import { iconHeartFilled } from "../icons";
import { getFavorites, removeFavorite } from "../services";

export function renderFavorites({ favorites, containerCats }) {
    containerCats.innerHTML = '';

    if (favorites.length === 0) {
        containerCats.innerHTML = '<p>No favorites yet 😿</p>';
        return;
    }

    favorites.forEach(cat => {
      const containerCat = Container('container-cat');
  
      const image = Img(cat.url, 'Cat', 'cat');

      const btnRemove = Button({ html: iconHeartFilled }, 'fav');
      btnRemove.addEventListener('click', () => {
        removeFavorite(cat.id);
        containerCat.remove();

        const currentFavorites = getFavorites();

        if (currentFavorites.length === 0) {
          containerCats.innerHTML = '<p>No favorites cats. Press any button</p>';
        }
      });
  
      containerCat.appendChild(image);
      containerCat.appendChild(btnRemove);
      containerCats.appendChild(containerCat);
    });
}