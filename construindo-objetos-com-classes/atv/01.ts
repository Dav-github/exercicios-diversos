class Calculadora {
    constructor(private num1: number, private num2: number) {}
    somar() {
        return this.num1 + this.num2;
    }
    subtrair() {
        return this.num1 - this.num2;
    }
    multiplicar() {
        return this.num1 * this.num2;
    }
    dividir() {
        return this.num1 / this.num2;
    }
}

const calculo1 = new Calculadora(2, 1);
console.log(calculo1.dividir());
