import { Funcionario } from "./Funcionario";

export class Programador extends Funcionario {
    private linguagens: string[];

    constructor(nome: string, salario: number, linguagens: string[]) {
        super(nome, salario);
        this.linguagens = linguagens;
    }
}
