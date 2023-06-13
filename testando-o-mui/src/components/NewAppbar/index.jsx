import AppBar from "@mui/material/AppBar";
import logoImg from "../../assets/logo.svg";
import "./styles.css";
import { stylesAppBar } from "./styles";

export default function NewAppBar() {
    return (
        <>
            <AppBar sx={stylesAppBar}>
                <img src={logoImg} alt="logo" className="newappbar-logo" />
                <span className="newappbar-span">Market cubos</span>
            </AppBar>
        </>
    );
}
