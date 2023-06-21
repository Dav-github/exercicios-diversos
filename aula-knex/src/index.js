const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const { router } = require("./routes/index");
app.use(router);
console.log(`Running on port ${PORT}`);
app.listen(PORT);
