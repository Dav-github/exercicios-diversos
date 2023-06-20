import { Box } from "@mui/material";
import ContentMain from "../../components/ContentMain";
import Myappbar from "../../components/MyAppBar";

export default function Main() {
    return (
        <>
            <Myappbar />
            <Box
                sx={{
                    width: "100vw",
                    height: "800px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ContentMain></ContentMain>
            </Box>
        </>
    );
}
