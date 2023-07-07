import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    createTheme,
    ThemeProvider,
    Typography,
} from "@mui/material";
import imgCubosLogo from "../../assets/logoCubos.svg";
import axios from "../../services/axios";
import { textField } from "../../styles/formLogin";
import UseAuth from "../../hooks/UseAuth";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
    },
});

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { saveToken } = UseAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("/login", {
                email,
                password,
            });
            saveToken(response.data.accessToken);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box component={"form"} onSubmit={handleSubmit}>
                <Box
                    sx={{
                        backgroundColor: "#44444D",
                        width: "494px",
                        height: "500px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "32px 97px",
                        borderRadius: "4px",
                    }}
                >
                    <Box marginBottom={"60px"}>
                        <img src={imgCubosLogo} alt="logo da cubos academy" />
                    </Box>

                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        sx={textField}
                        required
                    />
                    <TextField
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        sx={textField}
                        required
                    />
                    <Box marginTop={"16px"}>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                color: "#FFF",
                            }}
                        >
                            Não tem cadastro? Clique aqui!
                        </Typography>
                    </Box>
                    <Box marginTop={"60px"}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                background: "#DA0175",
                                color: "#fff",
                                transition: "0.5s ease",
                                width: "300px",
                                "&:hover": {
                                    backgroundColor: "#DA0175",
                                    opacity: "0.7",
                                },
                            }}
                        >
                            login
                        </Button>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default FormLogin;
