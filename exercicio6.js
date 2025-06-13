function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const soma = memoize((a, b) => a + b);
console.log(soma(2, 3)); // 5 (calculado)
console.log(soma(2, 3)); // 5 (do cache)
