class Carro {
    private ligado: boolean = false;
    private velocidade: number = 0;
    constructor(
        private cor: string,
        private marca: string,
        private modelo: string,
        private ano: number
    ) {}

    public ligarCarro() {
        if (!this.ligado) {
            this.ligado = true;
        }
    }
    public desligarCarro() {
        if (this.ligado) {
            this.ligado = false;
        }
    }
    public modificarVelocidade(velocidade: number) {
        if (!this.ligado) {
            return "O carro esta desligado";
        }
        this.velocidade = velocidade;
        return `velocimetro em ${this.velocidade}Km/h`;
    }
    public alterarCarro(
        cor: string,
        marca: string,
        modelo: string,
        ano: number
    ) {
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    public get pegarAno() {
        return this.ano;
    }
    public set mudarAno(ano: number) {
        this.ano = ano;
    }
    private dadosDoCarro() {
        const dados = {
            cor: this.cor,
            marca: this.marca,
            modelo: this.modelo,
            ano: this.ano,
        };
        return dados;
    }
    public exibirDadosDoCarro() {
        return this.dadosDoCarro();
    }
}

const carro1 = new Carro("branco", "mazda", "rx-7", 2001);
carro1.ligarCarro();
// carro1.alterarCarro("preto", "audi", "a1", 2010);

// carro1.mudarAno = 2003;

console.log(carro1);
