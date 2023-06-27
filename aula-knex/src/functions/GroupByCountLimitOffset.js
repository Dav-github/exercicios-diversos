const { knex } = require("../connections/postgres");

const GroupByCountLimitOffset = async (req, res) => {
    try {
        // const cadastros = await knex("cadastro")
        //     .select("email")
        //     .groupBy("email")
        //     .count()
        //     .debug();

        const cadastros = await knex("cadastro").limit(5).offset(1).debug();
        return res.json(cadastros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { GroupByCountLimitOffset };
