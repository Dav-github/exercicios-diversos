// Faça uma query que retorna todas as categorias não nulas e a
// soma do estoque de todos os medicamentos de cada categoria na tabela
// `farmacia`.

const { knex } = require("../connections/postgres");

const task3 = async (req, res) => {
    try {
        const categorias = await knex("farmacia")
            .select("categoria")
            .whereNotNull("categoria")
            .distinct()
            .debug();

        const totalDeMedicamentos = await knex("farmacia")
            .whereNotNull("estoque")
            .sum("estoque")
            .debug();

        const response = {
            categorias,
            totalDeMedicamentos,
        };

        return res.json(response);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "Erro interno" });
    }
};

module.exports = { task3 };
