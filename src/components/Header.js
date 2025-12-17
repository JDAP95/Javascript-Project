export const Header = (title = '') => {
    const header = document.createElement('header');
    header.className = 'header';
    header.classList.add('blink');
    const h1 = document.createElement('h1');
    h1.textContent = title;
    header.appendChild(h1);
    
    return header;
}