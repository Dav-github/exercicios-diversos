const fs = require("fs");

const caminho: string = "./src/db.json";

const readFile = (): unknown => {
    return JSON.parse(fs.readFileSync(caminho));
};

const writeFile = (dados: User[]): void => {
    fs.writeFileSync(caminho, JSON.stringify(dados));
};

// ----------------- ATV 02

type Endereco = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

type User = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Endereco | null;
};

const newUser: User = {
    cpf: "85638693764",
    email: "jorgin-oliveira@fakeemail.com",
    nome: "Jorge Oliveira",
    endereco: {
        cep: "746263-62",
        rua: "Queensland",
        bairro: "12 Elm St",
        cidade: "Moffat",
    },
};

const signUp = (user: User): void => {
    const data = readFile() as User[];
    data.push(user);
    writeFile(data);
};

// signUp(newUser);
// console.log(readFile());

// ------------------ ATV03

const updateUser = (cpf: string, updateUser: User): void => {
    const users = readFile() as User[];
    let newUsers: User[] = [];
    for (let user of users) {
        if (user.cpf === cpf) {
            newUsers.push(updateUser);
        } else {
            newUsers.push(user);
        }
    }
    writeFile(newUsers);
};

const ben10: User = {
    cpf: "12345678900",
    email: "ben10@fakeemail.com",
    nome: "Ben da silva 10",
    endereco: {
        cep: "23134-21",
        rua: "Yavatmal",
        bairro: "POC - Z",
        cidade: "Maharashtra",
    },
};

// updateUser("12345678900", ben10);
// console.log(readFile());

const detailUser = (cpf: string): User | string => {
    const users = readFile() as User[];
    let response: User | undefined;
    users.find((user) => {
        if (user.cpf === cpf) {
            response = user;
        }
    });
    if (!response) {
        return "CPF não encontrado";
    }
    return response;
};

// console.log(detailUser("12345678901"));

// ------------------ ATV04

const deleteUser = (cpf: string): string => {
    let users = readFile() as User[];
    const indexCpf = users.findIndex((user) => {
        return user.cpf === cpf;
    });
    if (indexCpf === -1) {
        return "CPF Não encontrado";
    } else {
        users.splice(indexCpf, 1);
        writeFile(users);
        return "Usuario Deletado";
    }
};

console.log(deleteUser("12345678900"));
