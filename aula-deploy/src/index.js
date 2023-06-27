require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        return res.json({ mensagem: "hello world" });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: "erro interno" });
    }
});
app.listen(
    process.env.PORT,
    console.log(`running on port:${process.env.PORT}`)
);
