const { knex } = require("../connections/postgres");

const selectBasic = async (req, res) => {
    try {
        const cadastros = await knex("cadastro");
        return res.json(cadastros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { selectBasic };
