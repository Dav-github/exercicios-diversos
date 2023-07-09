import * as M from "@mui/material";
import Container from "../components/Container/Container";
import FormLogin from "../components/FormLogin/FormLogin";

export default function Login() {
    return (
        <Container justifyContent={"center"} alignItems={"center"}>
            <FormLogin />
        </Container>
    );
}
