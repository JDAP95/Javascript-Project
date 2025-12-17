import './style.css';
import { Button, Container, Header, Input, Label, Li, ListUl } from "./components";
import { getCategories, getCatsByBreeds, getCatsByCategory, getCatsRandom, getFavorites } from "./services";
import { clearScroll, renderCats, renderFavorites, setupScroll } from "./utils";
import { getCatsByExtension } from './services/api';

const app = document.getElementById('app');
const modal = document.getElementById('modal');

app.classList.add('welcome');

// HEADER
const header = Header('Cat Gallery');

// CONTAINERS
const container = Container('container'); // Container main
container.classList.add('hidden');

const containerBtn = Container('container-btns'); // Container buttons
const containerCats = Container('container-cats'); // Container cats

const containerBtnRandom = Container('container-btn-random'); // Container random button
const containerBtnRace = Container('container-btn-race'); // Container race button
const containerBtnCategories = Container('container-btn-categories'); // Container categories button
const containerBtnExtension = Container('container-btn-extension'); // Container extension button
const containerBtnFavorites = Container('container-btn-favorites'); // Container favorites button

// BUTTONS
const btnShowRandom = Button('Show Random Cats', 'btn-random'); // Button to show random cats
const btnShowByRace = Button('Show Cats by Race', 'btn-race'); // Button to show cats by race
const btnShowByCategory = Button('Show Cats by Category', 'btn-category'); // Button to show cats by category
const btnShowByExtension = Button('Show Cats by Extension', 'btn-extension'); // Button to show cats by extension
const btnShowFavorites = Button('Show Favorites', 'btn-favorites'); // Button to show favorite cats

// BUILDING THE APP STRUCTURE
containerBtnRandom.appendChild(btnShowRandom);
containerBtnRace.appendChild(btnShowByRace);
containerBtnCategories.appendChild(btnShowByCategory);
containerBtnExtension.appendChild(btnShowByExtension);
containerBtnFavorites.appendChild(btnShowFavorites);

containerBtn.appendChild(containerBtnRandom);
containerBtn.appendChild(containerBtnRace);
containerBtn.appendChild(containerBtnCategories);
containerBtn.appendChild(containerBtnExtension);
containerBtn.appendChild(containerBtnFavorites);

container.appendChild(containerBtn);
container.appendChild(containerCats);

app.appendChild(header);
app.appendChild(container);

// LIST CATEGORIES
const ulCategories = ListUl('cat-list-category');
const categories = await getCategories();

categories.forEach(category => {
  const li = Li({ content: category.name.charAt(0).toUpperCase() + category.name.slice(1), className: 'filter-item' });
  li.id = category.id;
  
  ulCategories.appendChild(li);
});

containerBtnCategories.appendChild(ulCategories);

// LIST EXTENSIONS

const ulExtensions = ListUl('cat-list-extension');
const extensions = ['gif', 'jpg','jpeg' , 'png'];

extensions.forEach(ext => {
  const input = Input('checkbox', `filter-${ext}`, ext);
  const label = Label(`filter-${ext}`, ext.toUpperCase());
  const divLi = Container('div-li');

  divLi.appendChild(input);
  divLi.appendChild(label);

  const li = Li({ content: divLi , className: 'filter-item' });

  ulExtensions.appendChild(li);
});

containerBtnExtension.appendChild(ulExtensions);  

// VARIABLES y UTILS

let cats = []; // Aquí se cargarían los datos de los gatos
let appStarted = false;
let mode = false;

// LISTENER TITLE

header.addEventListener('click', () => {
  mode = false;

  if (!appStarted) {
    app.classList.remove('welcome');
    header.classList.remove('blink');
    container.classList.remove('hidden');
    containerCats.innerHTML = '';
    appStarted = true;
    return;
  }

  containerCats.innerHTML = '';
})

// RANDOM CATS
btnShowRandom.addEventListener('click', async () => {
  mode = false;
  containerCats.innerHTML = '<p>Loading random cats...</p>';
  
  cats = await getCatsRandom(100);

  if (cats.length === 0) {
    container.innerHTML = '<p>Error: No cats found. Please try again later.</p>';
    return;
  }

  containerCats.innerHTML = '';

  let currentIndex = 0;
  const blockSize = 10;
  currentIndex = renderCats({ cats, containerCats, modal, currentIndex, blockSize, mode });
  setupScroll({ cats, containerCats, modal, currentIndex, blockSize, mode });
});


// CATS BY RACE
btnShowByRace.addEventListener('click', async () => {
  mode = true;
  containerCats.innerHTML = '<p>Loading cats by breeds...</p>';

  cats = await getCatsByBreeds();

  if (cats.length === 0) {
    container.innerHTML = '<p>Error: No cats found. Please try again later.</p>';
    return;
  }

  containerCats.innerHTML = '';

  let currentIndex = 0;
  const blockSize = 10;
  currentIndex = renderCats({ cats, containerCats, modal, currentIndex, blockSize, mode });
  setupScroll({ cats, containerCats, modal, currentIndex, blockSize, mode });
});


// CATS BY CATEGORY
btnShowByCategory.addEventListener('click', async () => {
  mode = false;

  const categoriesList = document.getElementById('cat-list-category');
  if (categoriesList.classList.contains("closeList")) {
    categoriesList.classList.replace("closeList", "openList");
  } else {
    categoriesList.classList.replace("openList", "closeList");
  }


  const categoriesItems = document.querySelectorAll('#cat-list-category > .list-item');

  categoriesItems.forEach(item => {
    item.addEventListener('click', async () => {
      categoriesList.classList.replace("openList", "closeList");
      containerCats.innerHTML = `<p>Loading cats in category: ${item.textContent}...</p>`;
      cats = await getCatsByCategory(100, item.id);
      containerCats.innerHTML = '';
      
      let currentIndex = 0;
      const blockSize = 10;
      currentIndex = renderCats({ cats, containerCats, modal, currentIndex, blockSize, mode });
      setupScroll({ cats, containerCats, modal, currentIndex, blockSize, mode });
    });
  });
});


// CATS BY EXTENSION
btnShowByExtension.addEventListener('click', async () => {
  mode = false;

  const extensionsList = document.getElementById('cat-list-extension');
  if (extensionsList.classList.contains("closeList")) {
    extensionsList.classList.replace("closeList", "openList");
  } else {
    extensionsList.classList.replace("openList", "closeList");
  }

  const extensionsItems = document.querySelectorAll('#cat-list-extension > .list-item div');
  extensionsItems.forEach(i => {
    if (i.firstChild.checked) {
      i.firstChild.checked = false;
    }
  });
  let eList = [];
  extensionsItems.forEach(item => {
    item.firstChild.addEventListener('change', async () => {
      if (item.firstChild.checked) {
        eList.push(item.lastChild.textContent.toLowerCase());
      } else {
        eList = eList.filter(j => j !== item.lastChild.textContent.toLowerCase());
      }

      if (eList.length > 0) {
        containerCats.innerHTML = `<p>Loading cats with extensions: ${eList.join(',')}...</p>`;
        cats = await getCatsByExtension(100, eList.join(','));
      }
      containerCats.innerHTML = '';

      let currentIndex = 0;
      const blockSize = 10;
      currentIndex = renderCats({ cats, containerCats, modal, currentIndex, blockSize, mode });
      setupScroll({ cats, containerCats, modal, currentIndex, blockSize, mode });

    });
  });
});


// FAVORITES CATS
btnShowFavorites.addEventListener('click', () => {
  clearScroll();
  containerCats.innerHTML = '<p>Loading favorite cats...</p>';

  const favorites = getFavorites();
  containerCats.innerHTML = '';
  
  renderFavorites({ favorites, containerCats});
});