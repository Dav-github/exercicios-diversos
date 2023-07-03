import { Box } from "@mui/material";
import { containerLogin } from "../styles/login.ts";
import FormLogin from "../components/FormLogin.tsx";

export default function Login() {
    return (
        <Box sx={containerLogin}>
            <FormLogin />
        </Box>
    );
}
