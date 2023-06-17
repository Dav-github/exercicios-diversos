import { Box } from "@mui/material";
import { styles } from "../../styles";
import Menu from "../../components/Menu";
import { useState } from "react";
import MyDrawer from "../../components/MyDrawer";

export default function Dashboard() {
    const [visibilityDrawer, setVisibilityDrawer] = useState(false);
    return (
        <Box sx={styles.layout.container}>
            <Menu
                visibilityDrawer={visibilityDrawer}
                setVisibilityDrawer={setVisibilityDrawer}
            />
            <MyDrawer visibilityDrawer={visibilityDrawer} />
        </Box>
    );
}
