const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
const { router } = require("./router/router");
app.use(router);

console.log(`conectado na porta ${port}`);
app.listen(port);
