// Faça uma query que retorna a categoria e a quantidade de
// produtos de cada categoria que não seja nula da tabela `farmacia`

const { knex } = require("../connections/postgres");

const task5 = async (req, res) => {
    try {
        const response = await knex("farmacia")
            .select("categoria")
            .whereNotNull("categoria")
            .groupBy("categoria")
            .distinct("categoria")
            .sum("estoque")
            .debug();
        return res.json(response);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno" });
    }
};

module.exports = { task5 };
