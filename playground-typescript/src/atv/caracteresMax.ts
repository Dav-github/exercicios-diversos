const cidades: string[] = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

function limitadorDeCaracteres(arr: string[], maxCaracteres: number) {
    const result = arr.filter((cidade) => cidade.length <= maxCaracteres);
    return result;
}

console.log(limitadorDeCaracteres(cidades, 8));
