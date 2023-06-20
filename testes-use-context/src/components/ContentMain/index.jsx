import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContexts";

export default function ContentMain() {
    const { setUserName } = useContext(UserContext);
    const [localName, setLocalName] = useState("");

    const changeValueTextField = (e) => {
        setLocalName(e.target.value);
    };

    const changeName = () => {
        setUserName(localName);
        setLocalName("");
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <TextField
                sx={{ marginRight: "12px" }}
                id="nome"
                label="Nome"
                variant="outlined"
                onChange={changeValueTextField}
                value={localName}
            />
            <Button onClick={changeName} type="submit" variant="contained">
                Mudar nome
            </Button>
        </Box>
    );
}
