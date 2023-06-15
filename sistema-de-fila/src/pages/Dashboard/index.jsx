import { Box, Container, Typography } from "@mui/material";
import { styles } from "../../styles/index";
import Header from "../../components/Header";
import GenericButton from "../../components/GenericButton";

export default function Dashboard() {
    return (
        <Box sx={styles.layout.lContainer}>
            <Header />
            <Container maxWidth="lg">
                <Container sx={styles.dashboard.contentDashboard}>
                    <Box display={"flex"} flexDirection={"column"} gap={"66px"}>
                        <Box sx={styles.dashboard.line1}>SENHA : AN-0000</Box>
                        <Box sx={styles.dashboard.lineContent}>SALA : C-01</Box>
                    </Box>
                    <Box sx={styles.dashboard.alignBox}>
                        <Typography sx={styles.typography.tittle}>
                            Atendidos
                        </Typography>
                    </Box>
                    <Box
                        sx={styles.dashboard.lineContent}
                        display={"flex"}
                        gap={"26px"}
                    >
                        <Typography sx={styles.typography.tittle}>
                            AN-0001-C01
                        </Typography>
                        <Typography sx={styles.typography.tittle}>
                            AN-0001-C01
                        </Typography>
                        <Typography sx={styles.typography.tittle}>
                            AN-0001-C01
                        </Typography>
                        <Typography sx={styles.typography.tittle}>
                            AN-0001-C01
                        </Typography>
                    </Box>
                </Container>
                <Box sx={styles.dashboard.alignNextBtn}>
                    <GenericButton name={"PROXIMO"} />
                </Box>
            </Container>
        </Box>
    );
}
