const express = require("express");
const router = express();
const { selectBasic } = require("../functions/selectBasic");
const { selectWhere } = require("../functions/selectWhere");
const { selectAux } = require("../functions/selectAux");
const { anothersAux } = require("../functions/anothersAux");
const {
    GroupByCountLimitOffset,
} = require("../functions/GroupByCountLimitOffset");
const { CountSumAvgMinMax } = require("../functions/CountSumAvgMinMax");
const { task1 } = require("../tasks/task1");
const { task2 } = require("../tasks/task2");
const { task3 } = require("../tasks/task3");
const { task4 } = require("../tasks/task4");
const { task5 } = require("../tasks/task5");
const { task6 } = require("../tasks/task6");

router.get("/", task6);

module.exports = { router };
