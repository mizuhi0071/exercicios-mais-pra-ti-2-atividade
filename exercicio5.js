function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const log = debounce(() => console.log("Executado!"), 1000);
log();
log();
log(); // Apenas o último será executado após 1 segundo
