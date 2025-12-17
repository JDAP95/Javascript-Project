export function Button(content, className = '', disabled = false) {
    const btn = document.createElement('button');
    btn.className = `btn ${className}`.trim();
    btn.disabled = disabled;

    if (content instanceof Node) {
        btn.appendChild(content);
    } else if (typeof content === 'string') {
        btn.textContent = content;
    } else if (typeof content === 'object' && content.html) {
        btn.innerHTML = content.html;
    }

    return btn;
}