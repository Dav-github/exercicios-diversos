const { knex } = require("../connection/knex");

const criarFicha = async (req, res) => {
    const { id_usuario, sala, exame, senha } = req.body;

    if (!id_usuario || !sala || !exame || !senha) {
        return res.status(400).json({ mensagem: "Informe todos os dados" });
    }

    try {
        const exameCriado = await knex("ficha").insert(
            { id_usuario, sala, exame, senha },
            "*"
        );
        return res.status(201).json(exameCriado);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: "Erro interno" });
    }
};

module.exports = { criarFicha };
