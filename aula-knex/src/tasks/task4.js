// Faça uma query que retorna a quantidade de medicamentos sem
// categoria na tabela `farmacia`

const { knex } = require("../connections/postgres");

const task4 = async (req, res) => {
    try {
        const response = await knex("farmacia")
            .whereNull("categoria")
            .sum("estoque")
            .debug();

        return res.json(response);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno" });
    }
};

module.exports = { task4 };
