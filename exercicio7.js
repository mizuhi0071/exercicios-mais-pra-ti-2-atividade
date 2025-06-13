function ordenarProdutos(produtos) {
    return produtos.sort((a, b) => a.preco - b.preco).map(produto => produto.nome);
}

const produtos = [{ nome: "Celular", preco: 1500 }, { nome: "Notebook", preco: 3000 }, { nome: "Mouse", preco: 100 }];
console.log(ordenarProdutos(produtos)); // ["Mouse", "Celular", "Notebook"]
