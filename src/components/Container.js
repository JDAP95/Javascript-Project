export function Container(containerClass) {
    const container = document.createElement('div');
    container.classList.add(containerClass);

    return container;
}