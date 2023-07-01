import { Request, Response } from "express";
import { knex } from "../services/postgres";
import { Car } from "../types";

export const listCars = async (req: Request, res: Response) => {
    try {
        const listAllCars = await knex<Car>("carros");
        return res.json(listAllCars);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};

export const detailCar = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const query = await knex<Car>("carros").where({ id: Number(id) });
        if (query.length === 0) {
            return res
                .status(404)
                .json({ mensagem: "O id do carro não existe" });
        }
        return res.json(query);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};

export const registerCars = async (req: Request, res: Response) => {
    try {
        const { marca, modelo, ano, cor, valor } = req.body;

        if (!marca || !modelo || !ano || !cor || !valor) {
            return res
                .status(400)
                .json({ mensagem: "Informe todos os campos" });
        }
        const query = await knex<Omit<Car, "id">>("carros")
            .insert({
                marca,
                modelo,
                ano,
                cor,
                valor,
            })
            .returning("*");

        return res.status(201).json(query);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};

export const updateCars = async (req: Request, res: Response) => {
    try {
        const { marca, modelo, ano, cor, valor } = req.body;
        const { id } = req.params;

        const queryFindCar = await knex<Car>("carros").where({
            id: Number(id),
        });
        if (queryFindCar.length === 0) {
            return res
                .status(404)
                .json({ mensagem: "O id do carro não existe" });
        }

        if (!marca || !modelo || !ano || !cor || !valor) {
            return res
                .status(400)
                .json({ mensagem: "Informe todos os campos" });
        }

        const query = (await knex("carros")
            .where({ id })
            .update({ marca, modelo, ano, cor, valor })
            .returning("*")) as Car[];

        return res.json(query);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};

export const deleteCars = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const query = await knex<Car>("carros")
            .where({ id: Number(id) })
            .del();

        if (query === 0) {
            return res.status(404).json({ mensagem: "carro não encontrado" });
        }

        return res.status(204).json();
    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};
