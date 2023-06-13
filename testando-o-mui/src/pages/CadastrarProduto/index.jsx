import { Box, Button, Container, Link, Typography } from "@mui/material";
import "./styles.css";
import NewAppBar from "../../components/NewAppbar";
import FormAdicionarProdutos from "../../components/FormAdicionarProdutos";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function CadastrarProduto() {
    return (
        <section className="container">
            <NewAppBar />
            <section className="marketcubos-content">
                <div className="block">
                    <Typography variant="h2">Nome da loja</Typography>
                    <div className="marketcubos-line3">
                        <Typography sx={{ fontSize: "34px" }} variant="h5">
                            ADICIONAR PRODUTOS
                        </Typography>
                    </div>
                    <FormAdicionarProdutos />
                    <Box
                        sx={{
                            width: "1228px",
                            height: "2px",
                            backgroundColor: "#BFBFBF",
                            marginTop: "131px",
                        }}
                    ></Box>
                    <Box display={"flex"} sx={{ fontFamily: "Roboto" }}>
                        <Box
                            display={"flex"}
                            sx={{
                                gap: "27px",
                                alignItems: "center",
                                marginTop: "35px",
                            }}
                        >
                            <Link
                                sx={{
                                    fontWeight: "500",
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}
                            >
                                CANCELAR
                            </Link>
                            <Button
                                variant="contained"
                                sx={{ borderRadius: "4px" }}
                            >
                                ADICIONAR PRODUTO
                            </Button>
                        </Box>
                        <Box
                            display={"flex"}
                            sx={{
                                background: "#2E7D32",
                                width: "400px",
                                height: "52px",
                                borderRadius: "4px",
                                color: "white",
                                gap: "8px",
                                padding: "14px 16px",
                                marginTop: "34px",
                                marginLeft: "171px",
                            }}
                        >
                            <TaskAltIcon />
                            <p>Produto inserido com sucesso!</p>
                        </Box>
                    </Box>
                </div>
            </section>
        </section>
    );
}
