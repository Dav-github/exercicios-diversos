const { knex } = require("../connections/postgres");

const CountSumAvgMinMax = async (req, res) => {
    try {
        // const cadastros = await knex("cadastro")
        //     .whereNull("email")
        //     .count()
        //     .debug();

        // const cadastros = await knex("cadastro")
        //     .whereNull("email")
        //     .sum("id")
        //     .debug();

        // const cadastros = await knex("cadastro")
        //     .whereNull("email")
        //     .avg("id")
        //     .debug();

        const cadastros = await knex("cadastro")
            .whereNull("email")
            .min("id")
            .debug();

        // const cadastros = await knex("cadastro")
        //     .whereNull("email")
        //     .max("id")
        //     .debug();

        return res.json(cadastros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { CountSumAvgMinMax };
