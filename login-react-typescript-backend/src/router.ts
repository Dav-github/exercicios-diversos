import express from "express";
import login from "./controllers/login";
import signUp from "./controllers/signUp";

const appRouter = express();

appRouter.post("/login", login);
appRouter.post("/cadastro", signUp);

export default appRouter;
