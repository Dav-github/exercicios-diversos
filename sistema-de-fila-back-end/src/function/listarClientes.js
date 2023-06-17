const { knex } = require("../connection/knex");

const listarClientes = async (req, res) => {
    try {
        const dados = await knex.select("*").from("clientes");
        return res.json(dados);
    } catch (error) {
        console.log(error);
        return res.json({ mesngagem: "ERROR 404" });
    }
};

module.exports = {
    listarClientes,
};
