class Lampada {
    private estado: boolean;
    private watts: number = 0;

    constructor(watts: number) {
        this.estado = false;
        this.watts = watts;
    }

    ligar() {
        if (!this.estado) {
            this.estado = true;
        }
    }
    desligar() {
        if (this.estado) {
            this.estado = false;
        }
    }
    medirPotencia(): string {
        return `${this.watts} Watts`;
    }
}

const lampada1 = new Lampada(80);

console.log(lampada1);
