export const ListUl = (id = '') => {
    const ul = document.createElement('ul');
    ul.id = id;
    ul.className = 'list-ul closeList';

    return ul;
}