import { AppBar, IconButton, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { styles } from "../../styles";

export default function Menu({ visibilityDrawer, setVisibilityDrawer }) {
    function handleMenuClick() {
        setVisibilityDrawer(!visibilityDrawer);
    }
    return (
        <>
            <AppBar sx={styles.menu.container}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => {
                        handleMenuClick();
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">Menu</Typography>
            </AppBar>
        </>
    );
}
