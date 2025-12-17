export const Input = (type = 'checkbox', id = '', value = '') => {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.value = value;
    input.className = 'input-field';
    
    return input;
}