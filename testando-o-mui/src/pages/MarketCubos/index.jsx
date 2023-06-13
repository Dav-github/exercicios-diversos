import { Button } from "@mui/material";
import NewAppBar from "../../components/NewAppbar";
import "./styles.css";
import Typography from "@mui/material/Typography";
import NewCard from "../../components/NewCard";

export default function MarketCubos() {
    return (
        <section className="container">
            <NewAppBar />
            <section className="marketcubos-content">
                <div className="block">
                    <Typography variant="h2">Nome da loja</Typography>
                    <div className="marketcubos-line3">
                        <Typography sx={{ fontSize: "34px" }} variant="h5">
                            Seus produtos
                        </Typography>
                        <Button variant="contained">ADICIONAR PRODUTO</Button>
                    </div>
                    <div className="contained-cards">
                        <NewCard />
                        <NewCard />
                        <NewCard />
                        <NewCard />
                        <NewCard />
                    </div>
                </div>
            </section>
        </section>
    );
}
