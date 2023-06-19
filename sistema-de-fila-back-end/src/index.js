const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;
const { router } = require("./router/router");
app.use(router);

console.log(`conectado na porta ${port}`);
app.listen(port);
