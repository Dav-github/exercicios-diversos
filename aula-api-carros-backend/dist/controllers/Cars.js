"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCars = exports.updateCars = exports.registerCars = exports.detailCar = exports.listCars = void 0;
const postgres_1 = require("../services/postgres");
const listCars = async (req, res) => {
    try {
        const listAllCars = await (0, postgres_1.knex)("carros");
        return res.json(listAllCars);
    }
    catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};
exports.listCars = listCars;
const detailCar = async (req, res) => {
    try {
        const { id } = req.params;
        const query = await (0, postgres_1.knex)("carros").where({ id: Number(id) });
        if (query.length === 0) {
            return res
                .status(404)
                .json({ mensagem: "O id do carro não existe" });
        }
        return res.json(query);
    }
    catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};
exports.detailCar = detailCar;
const registerCars = async (req, res) => {
    try {
        const { marca, modelo, ano, cor, valor } = req.body;
        if (!marca || !modelo || !ano || !cor || !valor) {
            return res
                .status(400)
                .json({ mensagem: "Informe todos os campos" });
        }
        const query = await (0, postgres_1.knex)("carros")
            .insert({
            marca,
            modelo,
            ano,
            cor,
            valor,
        })
            .returning("*");
        return res.status(201).json(query);
    }
    catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};
exports.registerCars = registerCars;
const updateCars = async (req, res) => {
    try {
        const { marca, modelo, ano, cor, valor } = req.body;
        const { id } = req.params;
        const queryFindCar = await (0, postgres_1.knex)("carros").where({
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
        const query = (await (0, postgres_1.knex)("carros")
            .where({ id })
            .update({ marca, modelo, ano, cor, valor })
            .returning("*"));
        return res.json(query);
    }
    catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};
exports.updateCars = updateCars;
const deleteCars = async (req, res) => {
    try {
        const { id } = req.params;
        const query = await (0, postgres_1.knex)("carros")
            .where({ id: Number(id) })
            .del();
        if (query === 0) {
            return res.status(404).json({ mensagem: "carro não encontrado" });
        }
        return res.status(204).json();
    }
    catch (error) {
        res.status(500).json({ mensagem: "Erro interno" });
    }
};
exports.deleteCars = deleteCars;
