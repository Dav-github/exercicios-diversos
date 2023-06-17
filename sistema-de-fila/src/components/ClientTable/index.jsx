import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

function createData(sala, senha) {
    return { sala, senha };
}

const rows = [
    createData("001", "A001"),
    createData("001", "A002"),
    createData("001", "A003"),
    createData("001", "A004"),
];

export default function ClientTable() {
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
