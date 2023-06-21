const { knex } = require("../connections/postgres");

const anothersAux = async (req, res) => {
    try {
        const cadastros = await knex("cadastro")
            .select("email")
            .groupBy("email")
            .debug();
        return res.json(cadastros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { anothersAux };
