import * as M from "@mui/material";
import logoCubos from "../../assets/logoCubos.svg";
import { palette } from "../../styles/palette";

const FormLogin = () => {
    return (
        <M.Box
            sx={{
                backgroundColor: palette.box,
                width: "494px",
                height: "475px",
            }}
        >
            <img src={logoCubos} alt="logo Cubos" />
            <M.Box>
                <M.TextField
                    variant="outlined"
                    sx={{
                        ".MuiTextField-root": {
                            backgroundColor: "#2e2e36",
                            color: "rgb(255, 255, 255)",
                            width: "300px",
                            height: "48px",
                            padding: "0px 8px",
                        },
                    }}
                ></M.TextField>
            </M.Box>
            <M.Box>
                <label htmlFor="">
                    <input type="text" placeholder="Password" />
                </label>
            </M.Box>
            <M.Typography>Não tem cadastro? Clique aqui!</M.Typography>
            <M.Button>Login</M.Button>
        </M.Box>
    );
};

export default FormLogin;
