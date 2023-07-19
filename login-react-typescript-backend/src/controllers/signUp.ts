import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { knex } from "../services/postgres";

export default async function signUp(req: Request, res: Response) {
    try {
        const { nome, email, senha } = req.body;
        if (!nome || !email || !senha) {
            return res
                .status(400)
                .json({ mensagem: "informe todos os campos" });
        }

        const verifyEmail = await knex("usuarios").where("email", email);

        if (verifyEmail.length !== 0) {
            return res.status(400).json({ mensagem: "email em uso" });
        }

        const hashSenha = await bcrypt.hash(senha, 10);

        const dadosDoUsuario = {
            nome,
            email,
            senha: hashSenha,
        };

        await knex("usuarios").insert(dadosDoUsuario);

        return res.status(201).json({});
    } catch (error) {
        // console.log(error);

        return res.status(500).json({ mensagem: "erro interno" });
    }
}
