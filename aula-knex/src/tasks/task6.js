// Faça uma query que retorna a idade e a quantidade de registros de
// cada idade, onde a idade seja maior ou igual a 18 anos,
// na tabela `usuarios`

const { knex } = require("../connections/postgres");

const task6 = async (req, res) => {
    try {
        const maioresDeIdade = await knex("usuarios")
            .select("idade")
            .where("idade", ">=", 18)
            .groupBy("idade")
            .orderBy("idade", "asc")
            .count("idade");

        return res.json(maioresDeIdade);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { task6 };
