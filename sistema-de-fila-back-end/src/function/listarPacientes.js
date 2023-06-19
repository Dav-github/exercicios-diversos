const { knex } = require("../connection/knex");

const listarPacientes = async (req, res) => {
    try {
        const fila = await knex
            .select("*")
            .from("ficha")
            .where("andamento", "fila");
        return res.json(fila);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { listarPacientes };
