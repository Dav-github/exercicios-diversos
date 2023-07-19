import dotenv from "dotenv";
dotenv.config();
import express from "express";
import appRouter from "./router";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors);
app.use(appRouter);

app.listen(process.env.API_PORT, () => {
    console.log(
        "The application is listening " +
            "on port http://localhost:" +
            process.env.API_PORT
    );
});
