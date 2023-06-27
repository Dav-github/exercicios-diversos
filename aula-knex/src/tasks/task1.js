const { knex } = require("../connections/postgres");

const task1 = async (req, res) => {
    try {
        const totalDeMedicamentos = await knex("farmacia")
            .select("medicamento")
            .groupBy("medicamento")
            .sum("estoque");

        return res.json(totalDeMedicamentos);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { task1 };
