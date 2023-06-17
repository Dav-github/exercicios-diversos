import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

export default function MyDrawer({ visibilityDrawer }) {
    return (
        <Box>
            <Drawer
                sx={{ zIndex: 0 }}
                variant="temporary"
                anchor="left"
                open={visibilityDrawer}
            >
                <List
                    sx={{ marginTop: "70px", width: "248px" }}
                    component="nav"
                    aria-label="secondary mailbox folder"
                >
                    <Link to={"/"}>
                        <ListItemButton>
                            <ListItemText
                                sx={styles.typography.listDrawer}
                                primary="Dashboard"
                            />
                        </ListItemButton>
                    </Link>
                    <Link to={"/criar-ficha"}>
                        <ListItemButton>
                            <ListItemText
                                sx={styles.typography.listDrawer}
                                primary="Criar Ficha"
                            />
                        </ListItemButton>
                    </Link>
                </List>
            </Drawer>
        </Box>
    );
}
