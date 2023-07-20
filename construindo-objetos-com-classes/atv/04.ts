class Pessoa {
    private nome: string;
    private idade: number;
    private nomeDoPai: string;
    private nomeDaMae: string;

    constructor(
        nome: string,
        idade: number,
        nomeDoPai: string,
        nomeDaMae: string
    ) {
        (this.nome = nome), (this.idade = idade);
        this.nomeDoPai = nomeDoPai;
        this.nomeDaMae = nomeDaMae;
    }
    verificarIrmadade(outraPessoa: Pessoa) {
        if (
            this.nomeDoPai === outraPessoa.nomeDoPai ||
            this.nomeDaMae === outraPessoa.nomeDaMae
        ) {
            return true;
        }
        return false;
    }
    eMaisVelho(outraPessoa: Pessoa) {
        if (this.idade > outraPessoa.idade) {
            return true;
        }
        return false;
    }
}

const joao = new Pessoa("joao", 22, "jose", "maria");
const marcos = new Pessoa("marcos", 20, "antonio", "maria");

console.log(joao.eMaisVelho(marcos));
