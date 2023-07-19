import * as M from "@mui/material";
import logoCubos from "../../assets/logoCubos.svg";
import { palette } from "../../styles/palette";
import Input from "../Input/index.tsx";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "../../services/axios.ts";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleChangeValue(
        e: ChangeEvent<HTMLInputElement>,
        setState: React.Dispatch<React.SetStateAction<string>>
    ) {
        setState(e.target.value);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const request = await axios.post("/login", {
            email,
            senha,
        });
        console.log(request);
    }

    return (
        <M.Box
            sx={{
                backgroundColor: palette.box,
                width: "494px",
                height: "475px",
            }}
        >
            <M.Box
                display={"flex"}
                justifyContent={"center"}
                marginTop={"32px"}
                marginBottom={"61px"}
            >
                <img src={logoCubos} alt="logo Cubos" />
            </M.Box>
            <M.Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
            >
                <form onSubmit={(e) => handleSubmit(e)}>
                    {" "}
                    {/* Adicione o formulário e o manipulador de evento onSubmit */}
                    <M.Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            width: "300px",
                        }}
                    >
                        <Input
                            onChange={(e) => handleChangeValue(e, setEmail)}
                            placeholder="E-mail"
                        ></Input>

                        <Input
                            onChange={(e) => handleChangeValue(e, setSenha)}
                            placeholder="Password"
                        ></Input>
                    </M.Box>
                    <M.Box
                        sx={{
                            width: "300px",
                            marginTop: "16px",
                            marginBottom: "60px",
                        }}
                    >
                        <M.Typography
                            sx={{
                                color: palette.textColor,
                                fontFamily: "Roboto",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "normal",
                            }}
                        >
                            Não tem cadastro? Clique aqui!
                        </M.Typography>
                    </M.Box>
                    <M.Button
                        type="submit" // Adicione o tipo de botão como "submit" para acionar o onSubmit do formulário
                        variant="contained"
                        sx={{
                            backgroundColor: palette.primary,
                            color: palette.textColor,
                            width: "300px",
                            height: "48px",
                            "&:hover": {
                                backgroundColor: palette.btnHover,
                            },
                        }}
                    >
                        Login
                    </M.Button>
                </form>
            </M.Box>
        </M.Box>
    );
};

export default FormLogin;
