import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { api } from "../../api/connection";
import { useEffect, useState } from "react";

export default function ClientTable() {
    const [rows, setRows] = useState([]);

    function createData(sala, senha) {
        return { sala, senha };
    }

    async function getPacientsEnd() {
        const { data } = await api.get("/finalizados");
        setRows(data);
    }

    useEffect(() => {
        getPacientsEnd();
    }, []);

    return (
        <TableContainer sx={{ width: "350px" }} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>SENHA</TableCell>
                        <TableCell align="left">SALA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.senha} sx={{ borderRadius: "4px" }}>
                            <TableCell component="th" scope="row">
                                {row.senha}
                            </TableCell>
                            <TableCell align="left">{row.sala}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
