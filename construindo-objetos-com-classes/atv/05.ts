class Empresa {
    private nome: string;
    private fantasia: string;
    private cnpj: string;
    private telefone: string;

    constructor(
        nome: string,
        fantasia: string,
        cnpj: string,
        telefone: string
    ) {
        this.nome = nome;
        this.fantasia = fantasia;
        this.cnpj = cnpj;
        this.telefone = telefone;
    }

    get getNome(): string {
        return this.nome;
    }

    get getFantasia(): string {
        return this.fantasia;
    }

    get getCnpj(): string {
        return this.cnpj;
    }

    get getTelefone(): string {
        return this.telefone;
    }

    set setFantasia(fantasia: string) {
        this.fantasia = fantasia;
    }
}
