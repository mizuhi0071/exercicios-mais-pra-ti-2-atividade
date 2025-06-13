function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

const pares = [["nome", "João"], ["idade", 30]];
console.log(paresParaObjeto(pares)); // { nome: "João", idade: 30 }

const obj = { cidade: "São Paulo", país: "Brasil" };
console.log(objetoParaPares(obj)); // [["cidade", "São Paulo"], ["país", "Brasil"]]
