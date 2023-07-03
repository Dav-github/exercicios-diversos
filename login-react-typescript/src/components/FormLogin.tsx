// import { Box } from "@mui/material";

// export default function FormLogin() {
//     return (
//         <Box
// sx={{
//     backgroundColor: "#44444D",
//     width: "494px",
//     height: "475px",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "32px 97px",
// }}
//             component={'form'}
//         >
//         </Box>
//     );
// }

//-----------------
import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import imgCubosLogo from "../assets/logoCubos.svg";
import axios from "axios";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3003/users", {
                email,
                password,
            });
            console.log(response); // Exemplo de como lidar com a resposta do servidor
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    backgroundColor: "#44444D",
                    width: "494px",
                    height: "475px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "32px 97px",
                }}
            >
                <img src={imgCubosLogo} alt="logo da cubos academy" />

                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Enviar
                </Button>
            </Box>
        </form>
    );
};

export default FormLogin;
