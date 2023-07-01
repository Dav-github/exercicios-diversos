import "dotenv/config";
import express from "express";
import router from "./router/router";

const app = express();

app.use(express.json());

app.use(router);
app.listen(process.env.API_PORT, () => {
    console.log("api on");
});
