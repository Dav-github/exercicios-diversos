const { knex } = require("../connections/postgres");

const selectWhere = async (req, res) => {
    try {
        // const cadastros = await knex("cadastro").debug();

        // const cadastros = await knex.raw("select * from cadastro");

        // const cadastros = await knex("cadastro").where("id", 5).debug();

        // const cadastros = await knex("cadastro").where("id", "!=", 5).debug();

        // const cadastros = await knex("cadastro").where({ id: 1 }).debug();

        // const cadastros = await knex("cadastro")
        //     .where("phone", "like", "(55)%")
        //     .debug();

        // const cadastros = await knex("cadastro").first().debug();

        const cadastros = await knex("cadastro")
            .select("name", "phone")
            .debug();

        return res.json(cadastros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { selectWhere };
