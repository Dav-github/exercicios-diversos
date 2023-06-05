import { Link, useNavigate } from "react-router-dom";
import backArrow from "../../assets/arrow-back.svg";
import logoCubos from "../../assets/logo-cubos.svg";
import "./style.css";

export default function NavBar({ booleanArrow, setProfessorAtual }) {
  const navigate = useNavigate();

  function backToDashboard() {
    navigate("/dashboard");
    setProfessorAtual([]);
  }

  return (
    <nav>
      {booleanArrow && (
        <img
          src={backArrow}
          alt="arrow back"
          className="arrow-img"
          onClick={() => backToDashboard()}
        />
      )}
      <img src={logoCubos} alt="logo cubos" />
      <div className="container-sair">
        <Link to={"/"}>
          <p>Logout</p>
        </Link>
      </div>
    </nav>
  );
}
