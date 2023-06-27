const arr: number[] = [0, 122, 4, 6, 2, 8, 44];

function validadorDeArrayPar(arr: number[]): string {
    for (const num of arr) {
        if (num % 2 !== 0) {
            return "array inválido";
        }
    }
    return "array válido";
}

console.log(validadorDeArrayPar(arr));
