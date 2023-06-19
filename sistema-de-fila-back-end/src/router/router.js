const express = require("express");
const { listarClientes } = require("../function/listarClientes");
const { criarFicha } = require("../function/criarficha");
const { listarPacientes } = require("../function/listarPacientes");
const {
    listarAtendimentosFinalizados,
} = require("../function/listarAtendimentosFinalizados");
const router = express();

router.get("/", listarClientes);
router.get("/pacientes", listarPacientes);
router.get("/finalizados", listarAtendimentosFinalizados);
router.post("/ficha", criarFicha);

module.exports = { router };
