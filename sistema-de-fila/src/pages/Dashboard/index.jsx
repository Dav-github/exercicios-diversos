import { Box } from "@mui/material";
import { styles } from "../../styles";
import Menu from "../../components/Menu";

export default function Dashboard() {
    return (
        <Box sx={styles.layout.container}>
            <Menu />
        </Box>
    );
}
