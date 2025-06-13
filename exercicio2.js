function jogoAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let tentativa;
    let tentativas = 0;

    while (tentativa !== numeroAleatorio) {
        tentativa = parseInt(prompt("Adivinhe o número (1 a 100): "), 10);
        tentativas++;

        if (tentativa < numeroAleatorio) {
            console.log("Mais alto!");
        } else if (tentativa > numeroAleatorio) {
            console.log("Mais baixo!");
        } else {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        }
    }
}

// jogoAdivinhacao(); // Descomente para rodar no navegador
