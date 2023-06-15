import { Box, Typography } from "@mui/material";
import { styles } from "../../styles/index";

export default function GenericButton({ name }) {
    console.log(styles.btn.btn01);
    return (
        <>
            <Box sx={styles.btn.btn01}>
                <Typography sx={styles.typography.tittle}>{name}</Typography>
            </Box>
        </>
    );
}
