import { Request, Response } from "express";

export default function helloworld(req: Request, res: Response) {
    return res.json({ mensagem: "hello world" });
}
