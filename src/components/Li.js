export function Li ({ content = '', className = '' }) {
    const li = document.createElement('li');
    li.className = `list-item ${className}`.trim();
    if (content instanceof Node) {
        li.appendChild(content);
    } else if (typeof content === 'string') {
        li.textContent = content;
    } else if (typeof content === 'object' && content.html) {
        li.innerHTML = content.html;
    }
    return li;
}