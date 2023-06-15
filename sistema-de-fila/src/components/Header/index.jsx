import { Box, Typography } from "@mui/material";
import { styles } from "../../styles/index";

export default function Header() {
    return (
        <Box sx={styles.layout.lHeader}>
            <Typography sx={styles.typography.tittle}>LOGO EMPRESA</Typography>
        </Box>
    );
}
