const { knex } = require("../connection/knex");

const listarAtendimentosFinalizados = async (req, res) => {
    try {
        const fila = await knex
            .select("*")
            .from("ficha")
            .where("andamento", "finalizado")
            .limit(4)
            .orderBy("id", "desc");
        return res.json(fila);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { listarAtendimentosFinalizados };
