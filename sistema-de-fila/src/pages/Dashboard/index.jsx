import { Box, Container, Typography } from "@mui/material";
import { styles } from "../../styles";
import Menu from "../../components/Menu";
import { useState } from "react";
import MyDrawer from "../../components/MyDrawer";
import Divider from "@mui/material/Divider";
import ClientTable from "../../components/ClientTable";

export default function Dashboard() {
    const [visibilityDrawer, setVisibilityDrawer] = useState(false);
    return (
        <Box sx={styles.layout.container}>
            <Menu
                visibilityDrawer={visibilityDrawer}
                setVisibilityDrawer={setVisibilityDrawer}
            />
            <Divider sx={{ paddingTop: "65px" }} />
            <MyDrawer visibilityDrawer={visibilityDrawer} />
            <Box sx={styles.dashboard.boxLine1}>
                <Box sx={styles.dashboard.boxLine1Btn}>
                    <Typography variant="h4">SENHA: A005</Typography>
                </Box>
                <Box sx={styles.dashboard.boxLine1Btn}>
                    <Typography variant="h4">SALA: 001</Typography>
                </Box>
            </Box>
            <Divider sx={{ paddingTop: "98px", marginBottom: "98px" }} />
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Typography variant="h3">ATENDIMENTO</Typography>
            </Box>
            <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                marginTop={"64px"}
            >
                <ClientTable />
            </Box>
        </Box>
    );
}
