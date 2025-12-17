import { renderCats } from "./renderCats";

let activeScrollHandler = null;

export function setupScroll({ cats, containerCats, modal, currentIndex, blockSize, mode }) {
    clearScroll();
    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            if (currentIndex < cats.length) {
                currentIndex = renderCats({ cats, containerCats, modal, currentIndex, blockSize, mode });
            } else {
                clearScroll();
            }
        }
    };
    activeScrollHandler = handleScroll;

    window.addEventListener('scroll', handleScroll);
}

export function clearScroll() {
    if (activeScrollHandler) {
        window.removeEventListener('scroll', activeScrollHandler);
        activeScrollHandler = null;
    }
}