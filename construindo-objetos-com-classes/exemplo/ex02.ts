class Pessoas {
    // nome: string;
    // idade: number;

    // constructor(nome: string, idade: number) {
    //     this.nome = nome;
    //     this.idade = idade;
    // }

    constructor(public nome: string, public idade: number) {}
}

const pessoa = new Pessoas("joão", 36);

console.log(pessoa);
