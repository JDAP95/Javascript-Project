export function Img (url, alt, className='') {
    const image = document.createElement('img');
    image.src = url;
    image.alt = alt;
    image.className = `${className}-img`.trim();

    return image;
}