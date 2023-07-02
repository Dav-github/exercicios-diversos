import { Box } from "@mui/material";
import Counter from "../components/Counter";

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
            <Counter title="Contador 1"></Counter>
            <Counter title="Contador 2" initialValue={12}></Counter>
        </Box>
    );
}
