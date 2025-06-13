function agruparVendas(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
}

const vendas = [{ cliente: "Ana", total: 200 }, { cliente: "Pedro", total: 150 }, { cliente: "Ana", total: 100 }];
console.log(agruparVendas(vendas)); // { Ana: 300, Pedro: 150 }
