const express = require("express");
const router = express();
const { selectBasic } = require("../functions/selectBasic");
const { selectWhere } = require("../functions/selectWhere");
const { selectAux } = require("../functions/selectAux");
const { anothersAux } = require("../functions/anothersAux");

router.get("/", anothersAux);

module.exports = { router };
