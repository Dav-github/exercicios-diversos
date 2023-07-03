import {
    Box,
    Button,
    Checkbox,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function Todo() {
    const [atividade, setAtividade] = useState<string>("");
    const [atividades, setAtividades] = useState<string[]>([]);

    const inputTextField: HTMLElement | null =
        document.getElementById("text-fild");

    const handleChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
        setAtividade(event.target.value);
    };

    const handleOnClickBtn = () => {
        const localAtividades = [...atividades, atividade];
        setAtividades(localAtividades);
        setAtividade("");
        if (inputTextField instanceof HTMLInputElement) {
            inputTextField.value = "";
        }
    };

    const handleDeleteRow = (index: number) => {
        const localAtividades = atividades.filter((_, i) => i !== index);
        setAtividades(localAtividades);
    };

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <Box
                sx={{
                    width: "300px",
                    height: " 200px",
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "12px",
                    gap: "16px",
                }}
            >
                <Typography variant="body1">TO-DO</Typography>

                <TextField
                    label="Nova Atividade"
                    id="text-fild"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleChangeTextField(event)
                    }
                />
                <Button
                    onClick={() => {
                        handleOnClickBtn();
                    }}
                >
                    Adicionar Atividade
                </Button>
            </Box>
            <Divider sx={{ margin: " 18px 0px" }} />
            <Box>
                <TableContainer>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Atividades</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {atividades.map((r, index) => (
                                <TableRow key={index}>
                                    <TableCell scope="row">{r}</TableCell>
                                    <TableCell align="right">
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            onClick={() =>
                                                handleDeleteRow(index)
                                            }
                                        >
                                            Apagar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}
