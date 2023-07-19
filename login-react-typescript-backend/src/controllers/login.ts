import { Request, Response } from "express";
import { knex } from "../services/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function login(req: Request, res: Response) {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res
                .status(400)
                .json({ mensagem: "informe o email e a senha" });
        }

        const usuario = await knex("usuarios").where("email", email);

        if (usuario.length === 0) {
            return res
                .status(400)
                .json({ mensagem: "email ou senha invalidos" });
        }

        const verifyPassword = await bcrypt.compare(senha, usuario[0].senha);

        if (!verifyPassword) {
            return res
                .status(400)
                .json({ mensagem: "email ou senha invalidos" });
        }

        const token = await jwt.sign(
            usuario[0].id,
            process.env.JWT_PASSWORD as string
        );

        return res.json(token);
    } catch (error) {
        console.log(error);

        return res.status(500).json({ mensagem: "erro interno" });
    }
}
