import { Box } from "@mui/material";
import Todo from "../components/Todo";

export default function App() {
    return (
        <Box
            sx={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
            }}
        >
            <Todo></Todo>
        </Box>
    );
}
