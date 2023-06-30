type Conn = {
    username: string;
    password: string;
    host: string;
    port: string;
    dbname: string;
};

const conexao = (dados: Conn): { driver: string; url: string } => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: "postgres",
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`,
    };
};

const teste = conexao({
    username: "username",
    dbname: "dbname",
    host: "host",
    password: "password",
    port: "port",
});

console.log(teste);
