const { knex } = require("../connections/postgres");

const task2 = async (req, res) => {
    try {
        const usuarioMaisNovo = await knex("usuarios").min("idade");

        return res.json(usuarioMaisNovo);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno" });
    }
};

module.exports = { task2 };
