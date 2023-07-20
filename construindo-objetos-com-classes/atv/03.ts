type Cobranca = {
    descricao: string;
    valor: number;
    quantidade: number;
};

class Fatura {
    private cliente: string;
    private compras: Cobranca[];

    constructor(cliente: string) {
        this.cliente = cliente;
        this.compras = [];
    }

    registrarProduto(produto: Cobranca) {
        this.compras.push(produto);
    }

    fecharFatura() {
        if (this.compras.length === 0) {
            return "Fatura zerada";
        }
        let resposta = `Cliente ${this.cliente}\n\n`;

        let valorTotal = 0;

        for (const produto of this.compras) {
            resposta += `${produto.quantidade} - ${produto.descricao} (R$ ${(
                produto.valor / 100
            ).toFixed(2)} = R$ ${(
                (produto.valor / 100) *
                produto.quantidade
            ).toFixed(2)}\n`;

            valorTotal += produto.valor * produto.quantidade;
        }

        resposta += `\nTotal: R$ ${(valorTotal / 100).toFixed(2)}`;

        return resposta;
    }
}

const julho = new Fatura("novais");
julho.registrarProduto({
    descricao: "teclado",
    quantidade: 1,
    valor: 3000,
});
julho.registrarProduto({
    descricao: "mouse",
    quantidade: 1,
    valor: 3000,
});
julho.registrarProduto({
    descricao: "arroz",
    quantidade: 4,
    valor: 600,
});
console.log(julho.fecharFatura());
