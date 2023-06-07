import { Link } from "react-router-dom";
import logoCubos from "../../assets/logo-cubos.svg";
import "./style.css";

export default function SignIn() {
    return (
        <section className="container container-sign-in">
            <form action="" className="form">
                <div className="div-logo">
                    <img src={logoCubos} alt="logo da cubos" />
                </div>
                <div className="box-sign-in">
                    <label>
                        <input type="text" placeholder="E-mail" />
                    </label>
                    <label>
                        <input type="text" placeholder="Passworld" />
                    </label>
                    <p className="p-sign-in">Não tem cadastro? Clique aqui!</p>
                    <Link to="/dashboard">
                        <button className="btn">Login</button>
                    </Link>
                </div>
            </form>
        </section>
    );
}
