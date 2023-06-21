const { knex } = require("../connections/postgres");

const selectAux = async (req, res) => {
    try {
        // const cadastros = await knex("cadastro").whereNull("email").debug();

        // const cadastros = await knex("cadastro").whereNotNull("email").debug();

        // const cadastros = await knex("cadastro")
        //     .whereBetween("id", [5, 10])
        //     .debug();

        // const cadastros = await knex("cadastro")
        //     .whereBetween("id", [5, 10])
        //     .orderBy("name", "desc")
        //     .debug();

        const cadastros = await knex("cadastro").distinct("email").debug();
        return res.json(cadastros);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "erro interno" });
    }
};

module.exports = { selectAux };
