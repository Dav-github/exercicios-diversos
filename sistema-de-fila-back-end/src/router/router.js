const express = require("express");
const { listarClientes } = require("../function/listarClientes");
const { criarFicha } = require("../function/criarficha");
const router = express();

router.get("/", listarClientes);
router.post("/ficha", criarFicha);

module.exports = { router };
