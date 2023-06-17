import { AppBar, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { styles } from "../../styles";

export default function Menu() {
    return (
        <AppBar sx={styles.menu.container}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>

            <h1>Menu</h1>
        </AppBar>
    );
}
