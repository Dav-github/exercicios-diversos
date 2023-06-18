import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { styles } from "../../styles";
import Menu from "../../components/Menu";
import { useState } from "react";
import MyDrawer from "../../components/MyDrawer";
import { api } from "../../api/connection";

export default function RegisterForms() {
    const [visibilityDrawer, setVisibilityDrawer] = useState(false);
    const [registerFormValues, setRegisterFormValues] = useState({
        id_usuario: "",
        sala: "",
        exame: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post("/ficha", {
                id_usuario: registerFormValues.id_usuario,
                sala: registerFormValues.sala,
                exame: registerFormValues.exame,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        const newValor = {
            ...registerFormValues,
            [name]: value,
        };

        setRegisterFormValues(newValor);
    };

    return (
        <Box sx={styles.layout.container}>
            <Menu
                visibilityDrawer={visibilityDrawer}
                setVisibilityDrawer={setVisibilityDrawer}
            />
            <MyDrawer visibilityDrawer={visibilityDrawer} />
            <Divider sx={{ paddingTop: "65px" }} />
            <Box
                sx={{
                    textAlign: "center",
                    marginTop: "40px",
                    marginBottom: "40px",
                }}
            >
                <Typography variant="h3">Cadastrar ficha</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        width: "300px",
                        height: "290px",
                        borderRadius: "4px",
                    }}
                    component={"form"}
                >
                    <TextField
                        name="id_usuario"
                        label="ID do Usuário"
                        value={registerFormValues.id_usuario}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{ width: "256px" }}
                    />
                    <TextField
                        name="sala"
                        label="Sala"
                        value={registerFormValues.sala}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{ width: "256px" }}
                    />
                    <TextField
                        name="exame"
                        label="Exame"
                        value={registerFormValues.exame}
                        onChange={handleInputChange}
                        margin="normal"
                        sx={{ width: "256px" }}
                    />
                    <Button
                        sx={{ backgroundColor: "#3B657A" }}
                        type=""
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            handleSubmit();
                        }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
