import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import fotoProduto from "../../assets/produto.svg";
import "./styles.css";

export default function NewCard() {
    return (
        <Card sx={{ width: "232px", height: "433px", borderRadius: "24px" }}>
            <CardMedia
                sx={{ height: 240, borderRadius: "16px 16px 0px 0px" }}
                image={fotoProduto}
                title="produto"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Nome do Produto
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis
                </Typography>
            </CardContent>
            <div className="newcard-span-div">
                <span className="newcard-span-unidades">3 UNIDADES</span>
                <span className="newcard-span-preco">R$ 99.99</span>
            </div>
        </Card>
    );
}
