const data: string[] = [
    "Guerra e Paz",
    "A Montanha Mágica",
    "Cem Anos de Solidão",
    "Dom Quixote",
    "A Divina Comédia",
];

function procurarLivro(data: string[], livro: string): string {
    const indexLivro = data.indexOf(livro);
    if (indexLivro === -1) {
        return "livro não encontrado";
    }
    return `livro na posição ${indexLivro}`;
}

console.log(procurarLivro(data, "Dom Quixote"));
