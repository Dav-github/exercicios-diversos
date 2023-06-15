import { Button, Typography } from "@mui/material";
import { styles } from "../../styles/index";

export default function GenericButton({ name }) {
    return (
        <>
            <Button variant="contained" sx={styles.btn.btn01}>
                <Typography sx={styles.typography.tittle}>{name}</Typography>
            </Button>
        </>
    );
}
