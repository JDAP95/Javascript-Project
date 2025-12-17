export const Label = (forId = '', text = '') => {
    const label = document.createElement('label');
    label.htmlFor = forId;
    label.className = 'label-field';
    label.textContent = text;
    
    return label;
}