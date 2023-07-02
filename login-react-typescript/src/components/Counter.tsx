import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
    title: string;
    initialValue?: number;
};

export default function Counter({ title, initialValue }: Props) {
    const [count, setCount] = useState(0);

    return (
        <Box
            sx={{
                width: "200px",
                height: "110px",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="body1">{title}</Typography>
            <Typography>{initialValue || count}</Typography>
            <Button onClick={() => setCount(count + 1)}>Incremetar</Button>
        </Box>
    );
}
