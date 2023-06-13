import { InputAdornment, TextField } from "@mui/material";
import "./styles.css";

export default function FormAdicionarProdutos() {
    return (
        <form>
            <div className="form-container-inputs">
                <TextField
                    variant="standard"
                    label="Nome do produto"
                    id="nome-do-produto"
                    fullWidth
                    sx={{ marginTop: "57px" }}
                ></TextField>
                <div className="form-inputs-flex">
                    <TextField
                        variant="standard"
                        label="Preço"
                        id="peco"
                        sx={{ width: 184 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    R$
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        variant="standard"
                        label="Estoque"
                        id="estoque"
                        sx={{ width: 184 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    Un
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <TextField
                    variant="standard"
                    label="Descrição do produto"
                    id="descricao-produto"
                    fullWidth
                    sx={{ marginTop: "48px" }}
                ></TextField>
                <TextField
                    variant="standard"
                    label="Imagem"
                    id="imagem"
                    fullWidth
                    sx={{ marginTop: "48px" }}
                ></TextField>
            </div>
        </form>
    );
}
