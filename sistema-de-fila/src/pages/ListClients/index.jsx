import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { styles } from "../../styles";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import MyDrawer from "../../components/MyDrawer";
import { api } from "../../api/connection";

export default function ListClients() {
    const [visibilityDrawer, setVisibilityDrawer] = useState(false);

    const loadClients = async () => {
        const response = await api.get("/");
    };

    useEffect(() => {
        console.log("entrou no useEffect");
        loadClients();
    }, []);

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
                        width: "600px",
                        height: "600px",
                        borderRadius: "4px",
                        backgroundColor: "#ffffff",
                    }}
                ></Box>
            </Box>
        </Box>
    );
}
