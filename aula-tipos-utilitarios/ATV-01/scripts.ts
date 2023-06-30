const fs = require("fs");
const caminhoJson: string = "./ATV-01/bd.json";

type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    rg: string;
    dataNacimento?: string;
};

const buscarMoc = (): Usuario[] => {
    const dados: Usuario[] = JSON.parse(fs.readFileSync(caminhoJson));
    return dados;
};

const cadastrarUsuário = (info: Usuario): string => {
    const dados: Usuario[] = buscarMoc();
    dados.push(info);
    try {
        fs.writeFileSync(caminhoJson, JSON.stringify(dados));
        return "Arquivo gravado";
    } catch (error) {
        console.log(error);
        return "Erro";
    }
};

const dadosDoNovoUsuario: Usuario = {
    nome: "Marcio",
    email: "marcio@fakeemail.com",
    cpf: "22233377754",
    rg: "7744499922",
    dataNacimento: "07/11/1996",
};

cadastrarUsuário(dadosDoNovoUsuario);
console.log(buscarMoc());
